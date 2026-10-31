const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const db = require('./database');

class RoomManager {
  constructor(io) {
    this.io = io;
    this.rooms = {}; // in-memory active rooms with timer handles
    this.initFromDb();
  }

  initFromDb() {
    const savedRooms = db.get('rooms') || {};
    for (const [id, r] of Object.entries(savedRooms)) {
      this.rooms[id] = {
        ...r,
        timer: null,
        participants: r.participants || {},
        teams: r.teams || {},
        status: r.status === 'in_progress' ? 'paused' : r.status
      };
    }

    // Seed default rooms if empty
    if (Object.keys(this.rooms).length === 0) {
      this.createRoom({
        name: 'Competição Oficial — Bases Celulares (Modo Solo)',
        description: 'Desafio individual sobre bases celulares, vias de sinalização e fenômenos extraordinários da embriologia.',
        mode: 'solo',
        timeLimit: 180,
        revealExplanation: true
      });

      this.createRoom({
        name: 'Grande Torneio em Duplas — Bases Celulares (Grupo 5)',
        description: 'Batalha cooperativa em duplas com alternância de integrantes sobre o seminário de Bases Celulares.',
        mode: 'duo',
        timeLimit: 180,
        revealExplanation: true
      });
    }
  }

  saveRooms() {
    // Strip timer handles before saving to persistent db
    const storable = {};
    for (const [id, r] of Object.entries(this.rooms)) {
      const copy = { ...r };
      delete copy.timer;
      storable[id] = copy;
    }
    db.set('rooms', storable);
  }

  getPublicRoomList() {
    return Object.values(this.rooms).map(r => ({
      id: r.id,
      code: r.code,
      name: r.name,
      description: r.description,
      mode: r.mode, // 'solo' | 'duo'
      status: r.status, // 'lobby' | 'in_progress' | 'explanation' | 'paused' | 'finished'
      questionCount: r.questions ? r.questions.length : 0,
      currentQuestionIndex: r.currentQuestionIndex,
      timeLimit: r.timeLimit,
      participantCount: Object.keys(r.participants || {}).length,
      teamCount: Object.keys(r.teams || {}).length,
      createdAt: r.createdAt
    }));
  }

  // Fisher-Yates shuffle — returns a NEW shuffled array, never mutates the original
  _shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // Shuffle options and remap correctAnswer index so the answer stays correct
  _shuffleOptions(question) {
    const indices = [0, 1, 2, 3];
    const shuffledIndices = this._shuffle(indices);
    const newOptions = shuffledIndices.map(i => question.options[i]);
    const newCorrectAnswer = shuffledIndices.indexOf(question.correctAnswer);
    return { ...question, options: newOptions, correctAnswer: newCorrectAnswer };
  }

  createRoom({ name, description, mode, timeLimit, formula, questionIds, revealExplanation, tieBreaker, questionCount, difficulty }) {
    const allQuestions = db.get('questions') || [];
    let selectedQuestions = [];

    if (questionIds && questionIds.length > 0) {
      selectedQuestions = allQuestions.filter(q => questionIds.includes(q.id));
    } else {
      let pool = [...allQuestions];

      // Filter by difficulty if requested
      if (difficulty && difficulty !== 'all') {
        const normDiff = difficulty.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const filtered = pool.filter(q => {
          const qd = (q.difficulty || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
          return qd === normDiff;
        });
        if (filtered.length > 0) {
          pool = filtered;
        }
      }

      // Determine question count: if 'all', use all; otherwise default to 15 (or custom count)
      const countVal = (questionCount === 'all') ? pool.length : (parseInt(questionCount) || 15);
      const targetCount = Math.min(countVal, pool.length);

      if (difficulty === 'all' || !difficulty) {
        // Balanced sampling across Fácil, Média, Difícil for diverse gameplay
        const facils = this._shuffle(pool.filter(q => (q.difficulty || '').toLowerCase().includes('fac')));
        const medios = this._shuffle(pool.filter(q => (q.difficulty || '').toLowerCase().includes('med')));
        const dificils = this._shuffle(pool.filter(q => (q.difficulty || '').toLowerCase().includes('dif')));

        if (countVal >= pool.length) {
          selectedQuestions = this._shuffle([...facils, ...medios, ...dificils]);
        } else {
          const perDiff = Math.floor(targetCount / 3);
          const remainder = targetCount % 3;

          const pickedFacil = facils.slice(0, perDiff + (remainder > 0 ? 1 : 0));
          const pickedMedio = medios.slice(0, perDiff + (remainder > 1 ? 1 : 0));
          const pickedDificil = dificils.slice(0, perDiff);

          const picked = [...pickedFacil, ...pickedMedio, ...pickedDificil];

          if (picked.length < targetCount) {
            const pickedIds = new Set(picked.map(q => q.id));
            const remaining = this._shuffle(pool.filter(q => !pickedIds.has(q.id)));
            picked.push(...remaining.slice(0, targetCount - picked.length));
          }

          selectedQuestions = this._shuffle(picked);
        }
      } else {
        selectedQuestions = this._shuffle(pool).slice(0, targetCount);
      }
    }

    if (selectedQuestions.length === 0) {
      selectedQuestions = this._shuffle([...allQuestions]).slice(0, 15);
    }

    // Shuffle question ORDER so each room/session has a different sequence
    selectedQuestions = this._shuffle(selectedQuestions);

    // Shuffle OPTIONS within each question and remap correctAnswer accordingly
    selectedQuestions = selectedQuestions.map(q => this._shuffleOptions(q));

    const roomId = 'room_' + crypto.randomBytes(4).toString('hex');
    const roomCode = ('G5-' + Math.floor(100 + Math.random() * 900)).toUpperCase();

    const newRoom = {
      id: roomId,
      code: roomCode,
      name: name || 'Competição Embriologia - Grupo 5',
      description: description || 'Seminário de Embriologia: Curiosidades e Fenômenos Extraordinários',
      mode: mode === 'duo' ? 'duo' : 'solo',
      status: 'lobby', // 'lobby' | 'in_progress' | 'explanation' | 'paused' | 'finished'
      timeLimit: parseInt(timeLimit) || 180,
      formula: formula || 'standard',
      revealExplanation: revealExplanation !== false,
      tieBreaker: tieBreaker || 'most_correct_then_fastest',
      questions: selectedQuestions,
      currentQuestionIndex: -1,
      currentRound: null, // { question, startTime, endTime, answers: {}, isClosed: false }
      participants: {}, // socketId / participantId -> { id, name, teamId, role, isConnected, socketId }
      teams: {}, // teamCode -> { id, code, name, passwordHash, memberA, memberB, score, answersCount, correctCount }
      leaderboard: [],
      historyRounds: [],
      createdAt: new Date().toISOString()
    };

    this.rooms[roomId] = newRoom;
    this.saveRooms();
    this.broadcastRoomList();
    return newRoom;
  }

  getRoom(roomId) {
    return this.rooms[roomId] || null;
  }

  deleteRoom(roomId) {
    if (this.rooms[roomId]) {
      if (this.rooms[roomId].timer) {
        clearTimeout(this.rooms[roomId].timer);
      }
      delete this.rooms[roomId];
      this.saveRooms();
      this.broadcastRoomList();
      return true;
    }
    return false;
  }

  // --- Solo Mode Join ---
  joinSoloRoom(roomId, participantName, socketId) {
    const room = this.rooms[roomId];
    if (!room) return { error: 'Sala não encontrada.' };
    if (room.mode !== 'solo') return { error: 'Esta sala é exclusiva para o modo Dupla.' };
    if (room.status === 'finished') return { error: 'Esta competição já foi finalizada.' };
    if (room.status !== 'lobby') {
      return { error: '⚠️ Sala Inicializada! A competição já começou e a entrada de novos participantes está bloqueada.' };
    }

    const participantId = 'part_' + crypto.randomBytes(6).toString('hex');
    const participant = {
      id: participantId,
      name: participantName.trim(),
      socketId,
      role: 'solo',
      score: 0,
      answeredCount: 0,
      correctCount: 0,
      totalCorrectTime: 0,
      isConnected: true,
      joinedAt: new Date().toISOString()
    };

    room.participants[participantId] = participant;
    this.saveRooms();
    this.broadcastRoomState(roomId);
    this.broadcastRoomList();

    return { success: true, participant, room: this.getSanitizedRoomState(roomId, participantId) };
  }

  // --- Duo Mode: Create Team ---
  createDuoTeam(roomId, teamName, teamPassword, creatorName, socketId) {
    const room = this.rooms[roomId];
    if (!room) return { error: 'Sala não encontrada.' };
    if (room.mode !== 'duo') return { error: 'Esta sala é exclusiva para o modo Solo.' };
    if (room.status === 'finished') return { error: 'Esta competição já foi finalizada.' };
    if (room.status !== 'lobby') {
      return { error: '⚠️ Sala Inicializada! A competição já começou e a criação de novas duplas está bloqueada.' };
    }
    if (!teamName || !teamName.trim()) return { error: 'O nome da dupla é obrigatório.' };
    if (!teamPassword || teamPassword.trim().length < 3) return { error: 'A senha da dupla deve ter no mínimo 3 caracteres.' };

    const teamCode = 'DP-' + Math.floor(1000 + Math.random() * 9000);
    const passwordHash = bcrypt.hashSync(teamPassword, 10);
    const participantAId = 'part_' + crypto.randomBytes(6).toString('hex');

    const participantA = {
      id: participantAId,
      name: creatorName.trim(),
      teamCode,
      role: 'member_A', // Turn A
      socketId,
      stats: { answeredCount: 0, correctCount: 0 },
      isConnected: true,
      joinedAt: new Date().toISOString()
    };

    room.participants[participantAId] = participantA;

    const team = {
      code: teamCode,
      name: teamName.trim(),
      passwordHash,
      memberA: participantAId,
      memberB: null,
      score: 0,
      answeredCount: 0,
      correctCount: 0,
      totalCorrectTime: 0,
      createdAt: new Date().toISOString()
    };

    room.teams[teamCode] = team;
    this.saveRooms();
    this.broadcastRoomState(roomId);
    this.broadcastRoomList();

    return {
      success: true,
      teamCode,
      participant: participantA,
      team,
      room: this.getSanitizedRoomState(roomId, participantAId)
    };
  }

  // --- Duo Mode: Join Team ---
  joinDuoTeam(roomId, teamCode, teamPassword, memberName, socketId) {
    const room = this.rooms[roomId];
    if (!room) return { error: 'Sala não encontrada.' };
    if (room.mode !== 'duo') return { error: 'Esta sala é exclusiva para o modo Solo.' };
    if (room.status === 'finished') return { error: 'Esta competição já foi finalizada.' };
    if (room.status !== 'lobby') {
      return { error: '⚠️ Sala Inicializada! A competição já começou e a entrada de novos integrantes está bloqueada.' };
    }

    const team = room.teams[teamCode.toUpperCase().trim()];
    if (!team) return { error: 'Código de dupla inválido ou não encontrado.' };

    const passwordMatches = bcrypt.compareSync(teamPassword, team.passwordHash);
    if (!passwordMatches) return { error: 'Senha incorreta para esta dupla.' };

    if (team.memberB) {
      return { error: 'Esta dupla já está completa (máximo de 2 integrantes alcançado).' };
    }

    const participantBId = 'part_' + crypto.randomBytes(6).toString('hex');
    const participantB = {
      id: participantBId,
      name: memberName.trim(),
      teamCode: team.code,
      role: 'member_B', // Turn B
      socketId,
      stats: { answeredCount: 0, correctCount: 0 },
      isConnected: true,
      joinedAt: new Date().toISOString()
    };

    room.participants[participantBId] = participantB;
    team.memberB = participantBId;

    this.saveRooms();
    this.broadcastRoomState(roomId);
    this.broadcastRoomList();

    return {
      success: true,
      teamCode: team.code,
      participant: participantB,
      team,
      room: this.getSanitizedRoomState(roomId, participantBId)
    };
  }

  // --- Reconnection & Socket Linking ---
  reconnectParticipant(roomId, participantId, socketId) {
    const room = this.rooms[roomId];
    if (!room) return null;

    const participant = room.participants[participantId];
    if (!participant) return null;

    participant.socketId = socketId;
    participant.isConnected = true;
    this.saveRooms();
    this.broadcastRoomState(roomId);

    return {
      participant,
      room: this.getSanitizedRoomState(roomId, participantId)
    };
  }

  handleDisconnect(socketId) {
    for (const [roomId, room] of Object.entries(this.rooms)) {
      for (const [partId, p] of Object.entries(room.participants)) {
        if (p.socketId === socketId) {
          p.isConnected = false;
          this.broadcastRoomState(roomId);
          break;
        }
      }
    }
  }

  // --- Admin Competition Controls ---
  startCompetition(roomId) {
    const room = this.rooms[roomId];
    if (!room) return { error: 'Sala não encontrada.' };
    if (!room.questions || room.questions.length === 0) {
      return { error: 'A sala não possui perguntas cadastradas.' };
    }

    room.currentQuestionIndex = 0;
    this.startRound(roomId, 0);
    return { success: true };
  }

  pauseCompetition(roomId) {
    const room = this.rooms[roomId];
    if (!room || room.status !== 'in_progress') return { error: 'Competição não está em andamento.' };

    if (room.timer) {
      clearTimeout(room.timer);
      room.timer = null;
    }

    const now = Date.now();
    const remainingTime = Math.max(0, Math.floor((room.currentRound.endTime - now) / 1000));
    room.currentRound.remainingOnPause = remainingTime;
    room.status = 'paused';

    this.saveRooms();
    this.broadcastRoomState(roomId);
    return { success: true };
  }

  resumeCompetition(roomId) {
    const room = this.rooms[roomId];
    if (!room || room.status !== 'paused') return { error: 'Competição não está pausada.' };

    const remainingSec = room.currentRound.remainingOnPause || 10;
    const now = Date.now();
    room.currentRound.startTime = now;
    room.currentRound.endTime = now + remainingSec * 1000;
    room.status = 'in_progress';

    // Start timer for remaining seconds
    room.timer = setTimeout(() => {
      this.autoCloseRound(roomId);
    }, remainingSec * 1000);

    this.saveRooms();
    this.broadcastRoomState(roomId);
    return { success: true };
  }

  advanceManually(roomId) {
    const room = this.rooms[roomId];
    if (!room) return { error: 'Sala não encontrada.' };

    if (room.timer) {
      clearTimeout(room.timer);
      room.timer = null;
    }

    if (room.status === 'in_progress') {
      // Closes current question, reveals explanation if enabled
      this.closeRound(roomId, 'manual_advance');
      return { success: true, action: 'closed_round' };
    } else if (room.status === 'explanation' || room.status === 'paused') {
      // Moves to next question or finishes
      return this.advanceToNextOrFinish(roomId);
    }
    return { error: 'Estado da sala inválido para avanço manual.' };
  }

  advanceToNextOrFinish(roomId) {
    const room = this.rooms[roomId];
    if (!room) return { error: 'Sala não encontrada.' };

    if (room.timer) {
      clearTimeout(room.timer);
      room.timer = null;
    }

    const nextIdx = room.currentQuestionIndex + 1;
    if (nextIdx < room.questions.length) {
      room.currentQuestionIndex = nextIdx;
      this.startRound(roomId, nextIdx);
      return { success: true, action: 'next_question', nextIdx };
    } else {
      this.finishCompetition(roomId);
      return { success: true, action: 'finished' };
    }
  }

  finishCompetition(roomId) {
    const room = this.rooms[roomId];
    if (!room) return;

    if (room.timer) {
      clearTimeout(room.timer);
      room.timer = null;
    }

    room.status = 'finished';
    this.calculateLeaderboard(roomId);

    // Save competition results in history
    const hasWinner = room.leaderboard.some(p => (p.score || 0) > 0);
    const historyItem = {
      roomId: room.id,
      code: room.code,
      name: room.name,
      mode: room.mode,
      totalQuestions: room.questions.length,
      finishedAt: new Date().toISOString(),
      leaderboard: room.leaderboard,
      hasWinner,
      champion: hasWinner ? room.leaderboard[0] : null,
      teams: room.teams,
      participants: room.participants
    };

    db.update('history', hist => [historyItem, ...(hist || [])]);
    this.saveRooms();
    this.broadcastRoomState(roomId);
    this.broadcastRoomList();
  }

  // --- Round Lifecycle ---
  startRound(roomId, questionIndex) {
    const room = this.rooms[roomId];
    if (!room) return;

    if (room.timer) {
      clearTimeout(room.timer);
      room.timer = null;
    }

    const question = room.questions[questionIndex];
    const duration = room.timeLimit || 180;
    const now = Date.now();
    const endTime = now + duration * 1000;

    // Determine responsible member for duo mode
    // Pergunta 1 (idx 0): member_A
    // Pergunta 2 (idx 1): member_B
    // Pergunta 3 (idx 2): member_A ...
    const activeDuoRole = (questionIndex % 2 === 0) ? 'member_A' : 'member_B';

    room.status = 'in_progress';
    room.explanationDuration = null;
    room.explanationEndsAt = null;
    room.currentRound = {
      questionIndex,
      questionId: question.id,
      startTime: now,
      endTime,
      duration,
      activeDuoRole,
      answers: {}, // submitterId -> { optionIndex, timeUsed, points, isCorrect, submittedAt }
      isClosed: false
    };

    // Auto-close when time is up
    room.timer = setTimeout(() => {
      this.autoCloseRound(roomId);
    }, duration * 1000);

    this.saveRooms();
    this.broadcastRoomState(roomId);
  }

  autoCloseRound(roomId) {
    const room = this.rooms[roomId];
    if (!room || room.status !== 'in_progress') return;
    this.closeRound(roomId, 'time_expired');
  }

  closeRound(roomId, reason) {
    const room = this.rooms[roomId];
    if (!room || !room.currentRound || room.currentRound.isClosed) return;

    if (room.timer) {
      clearTimeout(room.timer);
      room.timer = null;
    }

    room.currentRound.isClosed = true;
    room.currentRound.closedReason = reason;

    // Calculate final scores for this question
    this.calculateRoundScores(roomId);
    this.calculateLeaderboard(roomId);

    // Archive current round to history
    room.historyRounds.push({ ...room.currentRound });

    // Auto-advance delay:
    // Se todos responderam: 10s de feedback e explicação (solicitado: 10s para leitura e análise)
    // Se o tempo esgotou: 10s de explicação
    // Se explicação desligada: 2s
    const autoAdvanceSeconds = room.revealExplanation ? 10 : 2;
    room.explanationDuration = autoAdvanceSeconds;
    room.explanationEndsAt = Date.now() + (autoAdvanceSeconds * 1000);

    if (room.revealExplanation) {
      room.status = 'explanation';
    }

    // Schedule automatic transition to the next question or final podium!
    room.timer = setTimeout(() => {
      this.advanceToNextOrFinish(roomId);
    }, autoAdvanceSeconds * 1000);

    this.saveRooms();
    this.broadcastRoomState(roomId);
  }

  // --- Submitting Answers ---
  submitAnswer(roomId, participantId, optionIndex) {
    const room = this.rooms[roomId];
    if (!room) return { error: 'Sala não encontrada.' };
    if (room.status !== 'in_progress' || !room.currentRound || room.currentRound.isClosed) {
      return { error: 'A rodada não está aberta para respostas.' };
    }

    const participant = room.participants[participantId];
    if (!participant) return { error: 'Participante não registrado.' };

    const currentQ = room.questions[room.currentQuestionIndex];
    const serverNow = Date.now();

    // Check if time has already expired according to server
    if (serverNow > room.currentRound.endTime + 500) { // 500ms grace for network latency
      return { error: 'O tempo limite de resposta foi encerrado.' };
    }

    // Validation for DUO mode: only the responsible turn member can submit!
    let entityId = participantId;
    let team = null;

    if (room.mode === 'duo') {
      team = room.teams[participant.teamCode];
      if (!team) return { error: 'Equipe não encontrada.' };
      entityId = team.code;

      const activeRole = room.currentRound.activeDuoRole;
      if (participant.role !== activeRole) {
        const turnName = activeRole === 'member_A' ? 'o Integrante A' : 'o Integrante B';
        return { error: `Nesta pergunta é a vez de ${turnName} responder pela dupla!` };
      }
    }

    // Prevent duplicate submission
    if (room.currentRound.answers[entityId]) {
      return { error: 'A resposta já foi confirmada anteriormente.' };
    }

    // Time used calculation (in seconds, with decimal precision)
    const timeUsed = Math.min(
      room.currentRound.duration,
      Math.max(0, (serverNow - room.currentRound.startTime) / 1000)
    );

    const isCorrect = parseInt(optionIndex) === currentQ.correctAnswer;
    const maxPoints = currentQ.points || (currentQ.difficulty === 'Difícil' ? 30 : currentQ.difficulty === 'Média' ? 20 : 10);
    let points = 0;

    if (isCorrect) {
      // Official Formula:
      // Pontuação = pontuação máxima * (1 - 0.5 * tempo utilizado / tempo total)
      const ratio = timeUsed / room.currentRound.duration;
      points = Math.round(maxPoints * (1 - 0.5 * ratio));
      if (points < 0) points = 0;
    }

    // Store submission in round
    room.currentRound.answers[entityId] = {
      participantId,
      participantName: participant.name,
      optionIndex: parseInt(optionIndex),
      timeUsed,
      points,
      isCorrect,
      submittedAt: new Date().toISOString()
    };

    // Update stats immediately for participant / team
    if (room.mode === 'solo') {
      participant.answeredCount = (participant.answeredCount || 0) + 1;
      if (isCorrect) {
        participant.score = (participant.score || 0) + points;
        participant.correctCount = (participant.correctCount || 0) + 1;
        participant.totalCorrectTime = (participant.totalCorrectTime || 0) + timeUsed;
      }
    } else if (team) {
      team.answeredCount = (team.answeredCount || 0) + 1;
      participant.stats = participant.stats || { answeredCount: 0, correctCount: 0 };
      participant.stats.answeredCount += 1;

      if (isCorrect) {
        team.score = (team.score || 0) + points;
        team.correctCount = (team.correctCount || 0) + 1;
        team.totalCorrectTime = (team.totalCorrectTime || 0) + timeUsed;
        participant.stats.correctCount += 1;
      }
    }

    this.saveRooms();
    this.broadcastRoomState(roomId);

    // Check if ALL active participants/teams have answered!
    this.checkIfAllAnswered(roomId);

    return {
      success: true,
      points,
      isCorrect,
      timeUsed
    };
  }

  checkIfAllAnswered(roomId) {
    const room = this.rooms[roomId];
    if (!room || room.status !== 'in_progress' || !room.currentRound) return;

    let totalEntities = 0;
    let answeredEntities = Object.keys(room.currentRound.answers).length;

    if (room.mode === 'solo') {
      totalEntities = Object.keys(room.participants).length;
    } else {
      totalEntities = Object.keys(room.teams).length;
    }

    if (totalEntities > 0 && answeredEntities >= totalEntities) {
      // All participants answered! Auto-close round without waiting for the full 180s
      this.closeRound(roomId, 'all_answered');
    }
  }

  calculateRoundScores(roomId) {
    const room = this.rooms[roomId];
    if (!room || !room.currentRound) return;

    // For any participant/team who didn't answer, record a 0-point entry
    if (room.mode === 'solo') {
      for (const [partId, p] of Object.entries(room.participants)) {
        if (!room.currentRound.answers[partId]) {
          room.currentRound.answers[partId] = {
            participantId: partId,
            participantName: p.name,
            optionIndex: null,
            timeUsed: room.currentRound.duration,
            points: 0,
            isCorrect: false,
            submittedAt: null
          };
          p.answeredCount = (p.answeredCount || 0) + 1;
        }
      }
    } else {
      for (const [teamCode, t] of Object.entries(room.teams)) {
        if (!room.currentRound.answers[teamCode]) {
          room.currentRound.answers[teamCode] = {
            teamCode: teamCode,
            teamName: t.name,
            optionIndex: null,
            timeUsed: room.currentRound.duration,
            points: 0,
            isCorrect: false,
            submittedAt: null
          };
          t.answeredCount = (t.answeredCount || 0) + 1;
        }
      }
    }
  }

  calculateLeaderboard(roomId) {
    const room = this.rooms[roomId];
    if (!room) return;

    let items = [];

    if (room.mode === 'solo') {
      items = Object.values(room.participants).map(p => {
        const accuracy = p.answeredCount > 0 ? Math.round((p.correctCount / p.answeredCount) * 100) : 0;
        return {
          id: p.id,
          name: p.name,
          score: p.score || 0,
          answeredCount: p.answeredCount || 0,
          correctCount: p.correctCount || 0,
          accuracy,
          totalCorrectTime: p.totalCorrectTime || 0
        };
      });
    } else {
      items = Object.values(room.teams).map(t => {
        const accuracy = t.answeredCount > 0 ? Math.round((t.correctCount / t.answeredCount) * 100) : 0;
        const memberA = room.participants[t.memberA] || null;
        const memberB = room.participants[t.memberB] || null;

        return {
          id: t.code,
          code: t.code,
          name: t.name,
          score: t.score || 0,
          answeredCount: t.answeredCount || 0,
          correctCount: t.correctCount || 0,
          accuracy,
          totalCorrectTime: t.totalCorrectTime || 0,
          members: [
            memberA ? { id: memberA.id, name: memberA.name, role: 'A', stats: memberA.stats } : null,
            memberB ? { id: memberB.id, name: memberB.name, role: 'B', stats: memberB.stats } : null
          ].filter(Boolean)
        };
      });
    }

    // Sort order:
    // 1. Highest Score
    // 2. Highest Correct Count (Tiebreaker 1)
    // 3. Lowest Total Correct Time (Tiebreaker 2)
    items.sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      if (b.correctCount !== a.correctCount) return b.correctCount - a.correctCount;
      return a.totalCorrectTime - b.totalCorrectTime;
    });

    // Assign positions
    room.leaderboard = items.map((item, idx) => ({
      ...item,
      position: idx + 1
    }));
  }

  // --- Sanitization & Security ---
  // Never leak correct answer to client before round is officially closed!
  getSanitizedRoomState(roomId, viewingParticipantId = null) {
    const room = this.rooms[roomId];
    if (!room) return null;

    const currentQ = (room.currentQuestionIndex >= 0 && room.questions[room.currentQuestionIndex])
      ? room.questions[room.currentQuestionIndex]
      : null;

    const isRoundClosed = !room.currentRound || room.currentRound.isClosed || room.status === 'explanation' || room.status === 'finished';

    let sanitizedQuestion = null;
    if (currentQ) {
      sanitizedQuestion = {
        id: currentQ.id,
        category: currentQ.category,
        difficulty: currentQ.difficulty,
        points: currentQ.points,
        theme: currentQ.theme,
        question: currentQ.question,
        options: currentQ.options,
        // Only disclose correctAnswer, explanation, and difference AFTER round is closed!
        correctAnswer: isRoundClosed ? currentQ.correctAnswer : null,
        scientificExplanation: isRoundClosed ? currentQ.scientificExplanation : null,
        curiosity: isRoundClosed ? currentQ.curiosity : null,
        difference: isRoundClosed ? currentQ.difference : null,
        reference: isRoundClosed ? currentQ.reference : null
      };
    }

    let myAnswer = null;
    let myTurn = false;
    let me = null;
    let myTeam = null;

    if (viewingParticipantId && room.participants[viewingParticipantId]) {
      me = room.participants[viewingParticipantId];
      if (room.mode === 'duo' && me.teamCode) {
        myTeam = room.teams[me.teamCode];
        if (room.currentRound) {
          myTurn = (me.role === room.currentRound.activeDuoRole);
          myAnswer = room.currentRound.answers[me.teamCode] || null;
        }
      } else if (room.currentRound) {
        myTurn = true;
        myAnswer = room.currentRound.answers[viewingParticipantId] || null;
      }
    }

    // Answers summary for admin or after close
    const answersCount = room.currentRound ? Object.keys(room.currentRound.answers).length : 0;
    const totalExpected = room.mode === 'duo' ? Object.keys(room.teams).length : Object.keys(room.participants).length;

    return {
      id: room.id,
      code: room.code,
      name: room.name,
      description: room.description,
      mode: room.mode,
      status: room.status,
      timeLimit: room.timeLimit,
      explanationDuration: room.explanationDuration || null,
      explanationEndsAt: room.explanationEndsAt || null,
      totalQuestions: room.questions ? room.questions.length : 0,
      currentQuestionIndex: room.currentQuestionIndex,
      currentRound: room.currentRound ? {
        questionIndex: room.currentRound.questionIndex,
        startTime: room.currentRound.startTime,
        endTime: room.currentRound.endTime,
        duration: room.currentRound.duration,
        activeDuoRole: room.currentRound.activeDuoRole,
        isClosed: room.currentRound.isClosed,
        answersCount,
        totalExpected,
        // In explanation mode, reveal answers stats
        answersBreakdown: isRoundClosed ? room.currentRound.answers : null
      } : null,
      question: sanitizedQuestion,
      leaderboard: room.leaderboard || [],
      participantsCount: Object.keys(room.participants || {}).length,
      teamsCount: Object.keys(room.teams || {}).length,
      // User-specific contextual flags
      me: me ? { id: me.id, name: me.name, role: me.role, teamCode: me.teamCode } : null,
      myTeam: myTeam ? { code: myTeam.code, name: myTeam.name, memberA: myTeam.memberA, memberB: myTeam.memberB } : null,
      myTurn,
      myAnswer
    };
  }

  // --- Real-time Broadcasts ---
  broadcastRoomList() {
    this.io.emit('room_list_update', this.getPublicRoomList());
  }

  broadcastRoomState(roomId) {
    const room = this.rooms[roomId];
    if (!room) return;

    // Send personalized state to each connected socket in this room
    for (const [partId, p] of Object.entries(room.participants)) {
      if (p.socketId) {
        const state = this.getSanitizedRoomState(roomId, partId);
        this.io.to(p.socketId).emit('room_state_update', state);
      }
    }

    // Also broadcast general admin / spectator view to room channel
    const genericState = this.getSanitizedRoomState(roomId, null);
    this.io.to('admin_' + roomId).emit('admin_room_state_update', {
      ...genericState,
      fullAnswers: room.currentRound ? room.currentRound.answers : {},
      participants: room.participants,
      teams: room.teams
    });
  }
}

module.exports = RoomManager;
