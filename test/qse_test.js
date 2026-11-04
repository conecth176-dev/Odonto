const assert = require('assert');
const http = require('http');
const express = require('express');
const { Server } = require('socket.io');
const ioClient = require('socket.io-client');
const RoomManager = require('../server/roomManager');
const db = require('../server/database');

async function runQseTests() {
  console.log('🧪 Iniciando Testes Unitários e de Integração — QUEM SOU EU? 🧠🥧\n');

  // Verify questions database
  const qseQuestions = db.get('qse_questions') || [];
  assert.ok(qseQuestions.length >= 20, `Acervo de Quem Sou Eu deve conter pelo menos 20 questões (tem ${qseQuestions.length})`);
  console.log(`✅ [1/10] Acervo QSE carregado com sucesso: ${qseQuestions.length} enigmas científicos.`);

  // Setup test server
  const app = express();
  const server = http.createServer(app);
  const io = new Server(server, { cors: { origin: '*' } });
  const roomManager = new RoomManager(io);

  await new Promise(resolve => server.listen(0, resolve));
  const port = server.address().port;
  const serverUrl = `http://localhost:${port}`;
  console.log(`✅ [2/10] Servidor de teste WebSocket ativo na porta ${port}`);

  // Test 1: Create QSE Room
  const room = roomManager.createQseRoom({
    name: 'Desafio Quem Sou Eu — Turma Odonto G5',
    description: 'Raciocínio clínico rápido com botão individual e telão',
    questionCount: 10,
    enableTortada: true
  });

  assert.ok(room && room.id, 'Sala QSE deve ser criada com ID válido');
  assert.strictEqual(room.mode, 'quem_sou_eu', 'Modo deve ser quem_sou_eu');
  assert.strictEqual(room.enableTortada, true, 'Tortada na Cara deve estar habilitada');
  assert.strictEqual(room.questions.length, 10, 'Deve ter 10 perguntas sorteadas');
  console.log(`✅ [3/10] Sala QSE criada com código: ${room.code}`);

  // Test 2: Participant Joins QSE
  const p1Socket = ioClient(serverUrl);
  await new Promise(r => p1Socket.on('connect', r));

  const joinRes1 = roomManager.joinQseRoom(room.id, 'Ludymyla Coimbra', p1Socket.id, true);
  assert.strictEqual(joinRes1.success, true, 'Participante 1 deve ingressar');
  assert.strictEqual(joinRes1.participant.optInTortada, true, 'Deve ter optado pela tortada');

  const p2Socket = ioClient(serverUrl);
  await new Promise(r => p2Socket.on('connect', r));
  const joinRes2 = roomManager.joinQseRoom(room.id, 'Tawa Estrela', p2Socket.id, true);
  assert.strictEqual(joinRes2.success, true, 'Participante 2 deve ingressar');
  console.log('✅ [4/10] Participantes conectados com identificação e opt-in para tortada');

  // Test 3: Start Round (Narration in progress, buzzer locked)
  const roundRes = roomManager.startQseRound(room.id, 0);
  assert.strictEqual(roundRes.success, true, 'Rodada deve iniciar');
  assert.strictEqual(room.qseState, 'reading', 'Estado deve ser reading durante narração');
  
  // Verify Sanitization (Answer must NOT be leaked to participants)
  const sanitizedState = roomManager.getSanitizedRoomState(room.id, joinRes1.participant.id);
  assert.strictEqual(sanitizedState.question.correctAnswer, null, 'Gabarito não pode vazar para os alunos durante narração!');
  console.log('✅ [5/10] Narração da IA iniciada e gabarito protegido contra vazamento');

  // Test 4: Attempt buzz while narrating (Must fail)
  const earlyBuzz = roomManager.buzzInQse(room.id, joinRes1.participant.id);
  assert.strictEqual(earlyBuzz.error !== undefined, true, 'Buzzer deve ser rejeitado antes da liberação');
  console.log('✅ [6/10] Botões nos celulares rigorosamente bloqueados durante leitura');

  // Test 5: Finish Narration -> Buzzers Unlocked
  const finishNarrRes = roomManager.finishQseNarration(room.id);
  assert.strictEqual(finishNarrRes.success, true, 'Narração deve finalizar');
  assert.strictEqual(room.qseState, 'buzzer_active', 'Estado deve ser buzzer_active');
  console.log('✅ [7/10] Narração concluída: botões desbloqueados simultaneamente (VALENDO!)');

  // Test 6: Atomic Buzzer Race (First press wins, second press locked out)
  const buzz1 = roomManager.buzzInQse(room.id, joinRes1.participant.id);
  assert.strictEqual(buzz1.success, true, 'Primeiro competidor conquista direito de resposta');
  assert.strictEqual(buzz1.winner.participantName, 'Ludymyla Coimbra');
  assert.strictEqual(room.qseState, 'answering', 'Estado transiciona imediatamente para answering');

  const buzz2 = roomManager.buzzInQse(room.id, joinRes2.participant.id);
  assert.strictEqual(buzz2.error !== undefined, true, 'Segundo competidor deve ser bloqueado');
  console.log('✅ [8/10] Mecanismo atômico do botão validado: 1º conquista direito, demais bloqueados');

  // Test 7: Submit Answer (Verification & Points)
  const currentQ = room.questions[0];
  const correctChoice = currentQ.correctAnswer;
  const answerRes = roomManager.submitQseAnswer(room.id, joinRes1.participant.id, correctChoice);
  assert.strictEqual(answerRes.success, true, 'Submissão de resposta aceita');
  assert.strictEqual(answerRes.result.isCorrect, true, 'Resposta deve estar correta');
  assert.ok(answerRes.result.pointsAwarded > 0, 'Pontos devem ser atribuídos');
  assert.strictEqual(room.qseState, 'revealed', 'Estado deve ser revealed');
  console.log(`✅ [9/10] Resposta confirmada (+${answerRes.result.pointsAwarded} pts) e revelada no telão`);

  // Test 8: Finish Competition & Leaderboard
  const finishComp = roomManager.finishQseCompetition(room.id);
  assert.strictEqual(finishComp.success, true, 'Competição deve finalizar');
  assert.strictEqual(room.status, 'finished', 'Status deve ser finished');
  assert.ok(room.leaderboard.length >= 2, 'Leaderboard deve conter participantes');
  assert.strictEqual(room.leaderboard[0].name, 'Ludymyla Coimbra', 'Vencedor correto no topo');
  console.log('✅ [10/10] Competição finalizada, pódio e ranking consolidados!');

  p1Socket.disconnect();
  p2Socket.disconnect();
  server.close();

  console.log('\n🎉 TODOS OS 10 TESTES DO MINIGAME "QUEM SOU EU?" PASSARAM COM SUCESSO! 🧠🥧\n');
}

runQseTests().catch(err => {
  console.error('❌ Falha nos testes de Quem Sou Eu:', err);
  process.exit(1);
});
