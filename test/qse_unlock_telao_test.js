const assert = require('assert');
const http = require('http');
const express = require('express');
const { Server } = require('socket.io');
const ioClient = require('socket.io-client');
const RoomManager = require('../server/roomManager');

async function testQseUnlockTelao() {
  console.log('🧪 Iniciando Teste Específico: Botão de Liberar no Telão (Quem Sou Eu)\n');

  const app = express();
  const server = http.createServer(app);
  const io = new Server(server, { cors: { origin: '*' } });
  const roomManager = new RoomManager(io);

  // Wire up socket handlers as in app.js
  io.on('connection', (socket) => {
    socket.on('telao_join_room', ({ roomId }, callback) => {
      socket.join('telao_global');
      let target = roomManager.getRoom(roomId);
      if (!target) {
        const all = roomManager.getAllRoomsSummary();
        const qse = all.filter(r => r.mode === 'quem_sou_eu');
        target = qse.length > 0 ? roomManager.getRoom(qse[qse.length - 1].id) : null;
      }
      if (target) {
        socket.roomId = target.id;
        socket.join(target.id);
        if (target.code) socket.join(target.code);
        socket.join('telao_' + target.id);
        if (target.code) socket.join('telao_' + target.code);
        const state = roomManager.getSanitizedRoomState(target.id, null);
        if (callback) callback({ success: true, room: state });
      }
    });

    socket.on('join_qse_room', ({ roomId, participantName, optInTortada, team }, callback) => {
      const res = roomManager.joinQseRoom(roomId, participantName, socket.id, optInTortada, team);
      if (res.error) return callback && callback(res);
      const targetRoom = roomManager.getRoom(roomId);
      if (targetRoom) {
        socket.join(targetRoom.id);
        if (targetRoom.code) socket.join(targetRoom.code);
        socket.roomId = targetRoom.id;
      }
      socket.participantId = res.participant.id;
      if (callback) callback(res);
    });

    socket.on('telao_unlock_buzzer', ({ roomId }, callback) => {
      const targetId = roomId || socket.roomId;
      const res = roomManager.emergencyUnlockQseBuzzer(targetId);
      if (callback) callback(res);
    });

    socket.on('qse_buzz_in', ({ roomId, participantId }, callback) => {
      const pId = participantId || socket.participantId;
      const res = roomManager.buzzInQse(roomId, pId);
      if (callback) callback(res);
    });
  });

  await new Promise(r => server.listen(0, r));
  const port = server.address().port;
  const serverUrl = `http://localhost:${port}`;

  // 1. Create QSE room
  const room = roomManager.createQseRoom({
    name: 'Sala Teste Liberar Telão',
    description: 'Teste automatizado de desbloqueio do buzzer',
    questionCount: 5,
    enableTortada: true
  });
  assert.ok(room && room.id, 'Sala criada com sucesso');

  // 2. Telão socket connects
  const telaoSocket = ioClient(serverUrl);
  await new Promise(r => telaoSocket.on('connect', r));

  const telaoJoinPromise = new Promise(resolve => {
    telaoSocket.emit('telao_join_room', { roomId: room.id }, resolve);
  });
  const telaoJoinRes = await telaoJoinPromise;
  assert.strictEqual(telaoJoinRes.success, true, 'Telão conectado com sucesso');

  // 3. Participants connect (one via code, one via ID)
  const p1Socket = ioClient(serverUrl);
  await new Promise(r => p1Socket.on('connect', r));
  const p1Join = await new Promise(r => {
    p1Socket.emit('join_qse_room', { roomId: room.code, participantName: 'Aluno A (via Código)', optInTortada: true, team: 'Equipe 1' }, r);
  });
  assert.strictEqual(p1Join.success, true, 'Aluno A entrou via código');

  const p2Socket = ioClient(serverUrl);
  await new Promise(r => p2Socket.on('connect', r));
  const p2Join = await new Promise(r => {
    p2Socket.emit('join_qse_room', { roomId: room.id, participantName: 'Aluno B (via ID)', optInTortada: true, team: 'Equipe 2' }, r);
  });
  assert.strictEqual(p2Join.success, true, 'Aluno B entrou via ID');

  // 4. Start round -> buzzer locked
  roomManager.startQseRound(room.id, 0);
  assert.strictEqual(room.qseState, 'reading', 'Estado reading: botão bloqueado');

  // Verify buzzing while locked fails
  const lockedBuzz = await new Promise(r => {
    p1Socket.emit('qse_buzz_in', { roomId: room.id, participantId: p1Join.participant.id }, r);
  });
  assert.ok(lockedBuzz.error, 'Apertar botão antes de liberar deve retornar erro');

  // 5. Host clicks "Liberar Botão" on Telão (via telao_unlock_buzzer)
  const p1UnlockedPromise = new Promise(resolve => p1Socket.once('qse_buzzer_unlocked', resolve));
  const p2UnlockedPromise = new Promise(resolve => p2Socket.once('qse_buzzer_unlocked', resolve));

  const unlockRes = await new Promise(resolve => {
    telaoSocket.emit('telao_unlock_buzzer', { roomId: room.id }, resolve);
  });
  assert.strictEqual(unlockRes.success, true, 'Liberar botão no telão retornou sucesso');

  // 6. Verify BOTH participants received qse_buzzer_unlocked event!
  const p1Payload = await p1UnlockedPromise;
  const p2Payload = await p2UnlockedPromise;
  assert.ok(p1Payload, 'Aluno A recebeu evento de botão liberado');
  assert.ok(p2Payload, 'Aluno B recebeu evento de botão liberado');
  assert.strictEqual(room.qseState, 'buzzer_active', 'Estado da sala agora é buzzer_active');

  // 7. Participant can now successfully buzz in!
  const buzzRes = await new Promise(resolve => {
    p1Socket.emit('qse_buzz_in', { roomId: room.code, participantId: p1Join.participant.id }, resolve);
  });
  assert.strictEqual(buzzRes.success, true, 'Aluno A apertou o botão e conquistou o direito de resposta!');
  assert.strictEqual(room.qseState, 'answering', 'Estado agora é answering');

  // 8. Test fallback unlock when roomId is null or room.code
  roomManager.startQseRound(room.id, 1);
  assert.strictEqual(room.qseState, 'reading', 'Segunda rodada em reading');

  // Call emergencyUnlockQseBuzzer with room code
  const codeUnlock = roomManager.emergencyUnlockQseBuzzer(room.code);
  assert.strictEqual(codeUnlock.success, true, 'Desbloqueio usando código da sala funcionou perfeitamente');
  assert.strictEqual(room.qseState, 'buzzer_active');

  // 9. Call unlockRoundAnswers (from Admin panel) on a QSE room
  room.qseState = 'reading';
  const adminUnlock = roomManager.unlockRoundAnswers(room.id);
  assert.strictEqual(adminUnlock.success, true, 'unlockRoundAnswers do Admin liberou o Quem Sou Eu com sucesso');
  assert.strictEqual(room.qseState, 'buzzer_active');

  telaoSocket.disconnect();
  p1Socket.disconnect();
  p2Socket.disconnect();
  server.close();

  console.log('🎉 TODOS OS TESTES DE LIBERAR BOTÃO NO QUEM SOU EU PASSARAM COM 100% DE SUCESSO!\n');
}

testQseUnlockTelao().catch(err => {
  console.error('❌ Teste falhou:', err);
  process.exit(1);
});
