const assert = require('assert');
const { io: ClientIO } = require('socket.io-client');
const { startServer } = require('../server/app');

async function runTests() {
  console.log('--- INICIANDO TESTES AUTOMATIZADOS E2E DA PLATAFORMA ---');
  const PORT = 4050;
  const { server, roomManager } = await startServer(PORT);
  const serverUrl = `http://localhost:${PORT}`;

  try {
    // 1. Test Info Endpoint
    const infoRes = await fetch(`${serverUrl}/api/info`);
    const infoData = await infoRes.json();
    assert.strictEqual(infoData.totalQuestions >= 18, true, 'Deve ter pelo menos 18 questões no banco');
    console.log(`✓ 1. Info endpoint OK (${infoData.totalQuestions} questões carregadas)`);

    // 2. Test Admin Login
    const loginRes = await fetch(`${serverUrl}/api/admin/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password: 'Dev.Tawa' })
    });
    const loginData = await loginRes.json();
    assert.strictEqual(loginData.success, true, 'Admin login deve ser bem-sucedido');
    const adminToken = loginData.token;
    console.log('✓ 2. Admin Login OK (Token gerado com sucesso)');

    // 3. Test Create Room (Duo Mode)
    const createRoomRes = await fetch(`${serverUrl}/api/admin/rooms`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${adminToken}`
      },
      body: JSON.stringify({
        name: 'Torneio E2E Teste em Duplas',
        description: 'Teste automatizado de alternância e sincronização',
        mode: 'duo',
        timeLimit: 180,
        revealExplanation: true
      })
    });
    const createRoomData = await createRoomRes.json();
    assert.strictEqual(createRoomData.success, true, 'Criação de sala deve funcionar');
    const testRoom = createRoomData.room;
    console.log(`✓ 3. Criação de Sala em Dupla OK (ID: ${testRoom.id}, Código: ${testRoom.code})`);

    // 4. Socket Connections
    const socketA = ClientIO(serverUrl);
    const socketB = ClientIO(serverUrl);
    const socketEve = ClientIO(serverUrl);

    await new Promise(r => socketA.on('connect', r));
    await new Promise(r => socketB.on('connect', r));
    await new Promise(r => socketEve.on('connect', r));
    console.log('✓ 4. WebSockets dos participantes conectados');

    // 5. Member A creates Duo team
    const teamRes = await new Promise(resolve => {
      socketA.emit('create_duo_team', {
        roomId: testRoom.id,
        teamName: 'Dupla Odonto Vencedora',
        teamPassword: 'senha123',
        creatorName: 'Carlos (Integrante A)'
      }, resolve);
    });
    assert.strictEqual(teamRes.success, true, 'Criar equipe deve ter sucesso');
    assert.strictEqual(teamRes.participant.role, 'member_A', 'Criador deve ser Integrante A');
    const teamCode = teamRes.teamCode;
    const partAId = teamRes.participant.id;
    console.log(`✓ 5. Integrante A criou equipe com sucesso (Código: ${teamCode})`);

    // 6. Member B joins with password
    const joinBRes = await new Promise(resolve => {
      socketB.emit('join_duo_team', {
        roomId: testRoom.id,
        teamCode,
        teamPassword: 'senha123',
        memberName: 'Daniela (Integrante B)'
      }, resolve);
    });
    assert.strictEqual(joinBRes.success, true, 'Integrante B deve entrar com senha');
    assert.strictEqual(joinBRes.participant.role, 'member_B', 'Segundo membro deve ser Integrante B');
    const partBId = joinBRes.participant.id;
    console.log('✓ 6. Integrante B entrou com sucesso na equipe');

    // 7. Test 3rd participant blocked from full team
    const joinEveRes = await new Promise(resolve => {
      socketEve.emit('join_duo_team', {
        roomId: testRoom.id,
        teamCode,
        teamPassword: 'senha123',
        memberName: 'Eve (Intrusa)'
      }, resolve);
    });
    assert.strictEqual(!!joinEveRes.error, true, '3º integrante deve ser estritamente bloqueado');
    console.log('✓ 7. Bloqueio de 3º integrante validado: "' + joinEveRes.error + '"');

    // 8. Admin starts competition
    const startRes = await fetch(`${serverUrl}/api/admin/rooms/${testRoom.id}/start`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${adminToken}` }
    });
    const startData = await startRes.json();
    assert.strictEqual(startData.success, true, 'Início da competição pelo anfitrião deve ter sucesso');
    console.log('✓ 8. Competição iniciada pelo anfitrião');

    // 8.1. Test that new participants are strictly blocked once room is started ("Sala Inicializada!")
    const blockedJoinRes = await new Promise(resolve => {
      socketEve.emit('create_duo_team', {
        roomId: testRoom.id,
        teamName: 'Dupla Tardia',
        teamPassword: 'senha',
        creatorName: 'Aluno Atrasado'
      }, resolve);
    });
    assert.strictEqual(!!blockedJoinRes.error, true, 'Tentativa de entrar em sala inicializada deve falhar');
    assert.strictEqual(blockedJoinRes.error.includes('Sala Inicializada'), true, 'Mensagem deve indicar Sala Inicializada');
    console.log('✓ 8.1. Bloqueio de novos participantes em sala inicializada validado: "' + blockedJoinRes.error + '"');

    // 9. Turn Alternation Test - Round 1 (Pergunta 1 - Deve ser vez do Integrante A)
    // Attempt by Daniela (Member B) should be rejected
    const invalidSubmit = await new Promise(resolve => {
      socketB.emit('submit_answer', {
        roomId: testRoom.id,
        participantId: partBId,
        optionIndex: 2
      }, resolve);
    });
    assert.strictEqual(!!invalidSubmit.error, true, 'Integrante B não pode responder na Pergunta 1');
    console.log('✓ 9. Integrante B bloqueado de responder no turno de A: "' + invalidSubmit.error + '"');

    // Member A answers correctly
    const currentQ = testRoom.questions[0];
    const correctIdx = currentQ.correctAnswer;
    const validSubmitA = await new Promise(resolve => {
      socketA.emit('submit_answer', {
        roomId: testRoom.id,
        participantId: partAId,
        optionIndex: correctIdx
      }, resolve);
    });
    assert.strictEqual(validSubmitA.success, true, 'Integrante A deve responder com sucesso');
    assert.strictEqual(validSubmitA.isCorrect, true, 'Resposta deve ser correta');
    assert.strictEqual(validSubmitA.points > 0, true, 'Pontuação calculada pela fórmula deve ser > 0');
    console.log(`✓ 10. Integrante A respondeu corretamente: +${validSubmitA.points} pontos atribuídos pela fórmula`);

    // Prevent duplicate submission in same round
    const dupSubmitA = await new Promise(resolve => {
      socketA.emit('submit_answer', {
        roomId: testRoom.id,
        participantId: partAId,
        optionIndex: correctIdx
      }, resolve);
    });
    assert.strictEqual(!!dupSubmitA.error, true, 'Envio duplicado deve ser rejeitado');
    console.log('✓ 11. Proteção contra respostas duplicadas OK: "' + dupSubmitA.error + '"');

    // 12. Check if round auto-closed into explanation or if advance is needed
    let roomCheck = roomManager.getRoom(testRoom.id);
    if (roomCheck.status === 'in_progress') {
      const advRes1 = await fetch(`${serverUrl}/api/admin/rooms/${testRoom.id}/advance`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${adminToken}` }
      });
      const advData1 = await advRes1.json();
      assert.strictEqual(advData1.success, true);
    }
    console.log('✓ 12. Fase de Explicação e Aprendizado confirmada');

    // 13. Advance to Question 2 (Turn should now be Integrante B)
    const advRes2 = await fetch(`${serverUrl}/api/admin/rooms/${testRoom.id}/advance`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${adminToken}` }
    });
    const advData2 = await advRes2.json();
    assert.strictEqual(advData2.success, true);
    console.log('✓ 13. Avanço para Pergunta 2 OK (Status agora: in_progress)');

    // Attempt by Carlos (Member A) on Question 2 should now be rejected because it's B's turn!
    const invalidSubmitA2 = await new Promise(resolve => {
      socketA.emit('submit_answer', {
        roomId: testRoom.id,
        participantId: partAId,
        optionIndex: 0
      }, resolve);
    });
    assert.strictEqual(!!invalidSubmitA2.error, true, 'Integrante A não pode responder na Pergunta 2');
    console.log('✓ 14. Integrante A bloqueado de responder no turno de B: "' + invalidSubmitA2.error + '"');

    // Member B answers Question 2
    const currentQ2 = testRoom.questions[1];
    const validSubmitB2 = await new Promise(resolve => {
      socketB.emit('submit_answer', {
        roomId: testRoom.id,
        participantId: partBId,
        optionIndex: currentQ2.correctAnswer
      }, resolve);
    });
    assert.strictEqual(validSubmitB2.success, true, 'Integrante B respondeu no seu turno');
    console.log(`✓ 15. Integrante B respondeu com sucesso no seu turno: +${validSubmitB2.points} pontos`);

    // 16. Finish competition and check results & history
    const finishRes = await fetch(`${serverUrl}/api/admin/rooms/${testRoom.id}/finish`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${adminToken}` }
    });
    const finishData = await finishRes.json();
    assert.strictEqual(finishData.success, true, 'Finalização da competição OK');
    console.log('✓ 16. Competição finalizada');

    // 17. Verify Export Endpoints
    const exportCsvRes = await fetch(`${serverUrl}/api/admin/export/csv`, {
      headers: { 'Authorization': `Bearer ${adminToken}` }
    });
    const csvContent = await exportCsvRes.text();
    assert.strictEqual(csvContent.includes('Dupla Odonto Vencedora'), true, 'CSV deve conter o nome da dupla');
    console.log('✓ 17. Exportação de Resultados CSV OK');

    const exportJsonRes = await fetch(`${serverUrl}/api/admin/export/json`, {
      headers: { 'Authorization': `Bearer ${adminToken}` }
    });
    const jsonContent = await exportJsonRes.json();
    assert.strictEqual(Array.isArray(jsonContent), true, 'JSON export deve ser array');
    console.log('✓ 18. Exportação de Resultados JSON OK');

    // Disconnect sockets
    socketA.disconnect();
    socketB.disconnect();
    socketEve.disconnect();

    console.log('\n============================================================');
    console.log('🎉 TODOS OS TESTES PASSARAM COM 100% DE SUCESSO!');
    console.log('============================================================\n');

  } finally {
    server.close();
  }
}

runTests().catch(err => {
  console.error('FALHA NOS TESTES:', err);
  process.exit(1);
});
