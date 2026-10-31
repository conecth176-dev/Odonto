const assert = require('assert');
const { io: ClientIO } = require('socket.io-client');
const { startServer } = require('../server/app');

async function testSoloMode() {
  console.log('--- TESTANDO MODO SOLO E CRITÉRIO DE DESEMPATE ---');
  const PORT = 4051;
  const { server } = await startServer(PORT);
  const serverUrl = `http://localhost:${PORT}`;

  try {
    // 1. Admin login
    const loginRes = await fetch(`${serverUrl}/api/admin/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password: 'Dev.Tawa' })
    });
    const { token: adminToken } = await loginRes.json();

    // 2. Create Solo Room
    const roomRes = await fetch(`${serverUrl}/api/admin/rooms`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${adminToken}`
      },
      body: JSON.stringify({
        name: 'Torneio Solo Teste',
        mode: 'solo',
        timeLimit: 180
      })
    });
    const { room: testRoom } = await roomRes.json();

    // 3. Connect 2 solo players
    const socket1 = ClientIO(serverUrl);
    const socket2 = ClientIO(serverUrl);

    await new Promise(r => socket1.on('connect', r));
    await new Promise(r => socket2.on('connect', r));

    const join1 = await new Promise(r => socket1.emit('join_solo_room', { roomId: testRoom.id, participantName: 'Estudante Alfa' }, r));
    const join2 = await new Promise(r => socket2.emit('join_solo_room', { roomId: testRoom.id, participantName: 'Estudante Beta' }, r));

    assert.strictEqual(join1.success, true);
    assert.strictEqual(join2.success, true);
    console.log('✓ Dois participantes entraram na sala Solo com sucesso');

    // 4. Start competition
    await fetch(`${serverUrl}/api/admin/rooms/${testRoom.id}/start`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${adminToken}` }
    });
    console.log('✓ Competição Solo iniciada');

    // 5. Alfa answers quickly and correctly
    const q1 = testRoom.questions[0];
    const sub1 = await new Promise(r => socket1.emit('submit_answer', {
      roomId: testRoom.id,
      participantId: join1.participant.id,
      optionIndex: q1.correctAnswer
    }, r));
    assert.strictEqual(sub1.success, true);
    assert.strictEqual(sub1.isCorrect, true);

    // Beta answers wrongly
    const wrongOpt = (q1.correctAnswer + 1) % 4;
    const sub2 = await new Promise(r => socket2.emit('submit_answer', {
      roomId: testRoom.id,
      participantId: join2.participant.id,
      optionIndex: wrongOpt
    }, r));
    assert.strictEqual(sub2.success, true);
    assert.strictEqual(sub2.isCorrect, false);
    assert.strictEqual(sub2.points, 0);
    console.log('✓ Alfa acertou (+pontos) e Beta errou (0 pontos)');

    // 6. Finish competition and verify Leaderboard
    await fetch(`${serverUrl}/api/admin/rooms/${testRoom.id}/finish`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${adminToken}` }
    });

    const roomStateRes = await fetch(`${serverUrl}/api/rooms/${testRoom.id}`);
    const finalRoom = await roomStateRes.json();

    assert.strictEqual(finalRoom.leaderboard[0].name, 'Estudante Alfa');
    assert.strictEqual(finalRoom.leaderboard[0].position, 1);
    assert.strictEqual(finalRoom.leaderboard[1].name, 'Estudante Beta');
    assert.strictEqual(finalRoom.leaderboard[1].position, 2);
    console.log('✓ Ranking final validado com sucesso (1º Alfa, 2º Beta)');

    socket1.disconnect();
    socket2.disconnect();

    console.log('✓ TESTES DO MODO SOLO CONCLUÍDOS COM SUCESSO!\n');
  } finally {
    server.close();
  }
}

testSoloMode().catch(e => {
  console.error(e);
  process.exit(1);
});
