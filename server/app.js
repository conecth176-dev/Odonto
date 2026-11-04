const express = require('express');
const http = require('http');
const path = require('path');
const { Server } = require('socket.io');
const RoomManager = require('./roomManager');
const createApiRouter = require('./routes/api');
const { isValidAdminToken } = require('./auth');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

const roomManager = new RoomManager(io);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..', 'public')));

// API Routes
app.use('/api', createApiRouter(roomManager));

// SPA fallback for direct navigation (e.g. /admin, /bank)
app.use((req, res, next) => {
  if (req.method === 'GET' && !req.path.startsWith('/api') && !req.path.startsWith('/socket.io')) {
    if (req.path === '/telao' || req.path === '/telao.html') {
      return res.sendFile(path.join(__dirname, '..', 'public', 'telao.html'));
    }
    return res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
  }
  next();
});

// Real-time WebSocket connection handling
io.on('connection', (socket) => {
  // Join solo room
  socket.on('join_solo_room', ({ roomId, participantName }, callback) => {
    try {
      if (!roomId || !participantName) {
        return callback && callback({ error: 'Dados incompletos para ingressar na sala.' });
      }

      const res = roomManager.joinSoloRoom(roomId, participantName, socket.id);
      if (res.error) {
        return callback && callback(res);
      }

      socket.join(roomId);
      socket.participantId = res.participant.id;
      socket.roomId = roomId;

      if (callback) callback(res);
    } catch (err) {
      if (callback) callback({ error: err.message });
    }
  });

  // Create duo team
  socket.on('create_duo_team', ({ roomId, teamName, teamPassword, creatorName }, callback) => {
    try {
      const res = roomManager.createDuoTeam(roomId, teamName, teamPassword, creatorName, socket.id);
      if (res.error) {
        return callback && callback(res);
      }

      socket.join(roomId);
      socket.participantId = res.participant.id;
      socket.roomId = roomId;

      if (callback) callback(res);
    } catch (err) {
      if (callback) callback({ error: err.message });
    }
  });

  // Join duo team
  socket.on('join_duo_team', ({ roomId, teamCode, teamPassword, memberName }, callback) => {
    try {
      const res = roomManager.joinDuoTeam(roomId, teamCode, teamPassword, memberName, socket.id);
      if (res.error) {
        return callback && callback(res);
      }

      socket.join(roomId);
      socket.participantId = res.participant.id;
      socket.roomId = roomId;

      if (callback) callback(res);
    } catch (err) {
      if (callback) callback({ error: err.message });
    }
  });

  // Reconnection of existing session
  socket.on('reconnect_session', ({ roomId, participantId }, callback) => {
    try {
      const res = roomManager.reconnectParticipant(roomId, participantId, socket.id);
      if (!res) {
        return callback && callback({ error: 'Sessão expirada ou não encontrada.' });
      }

      socket.join(roomId);
      socket.participantId = participantId;
      socket.roomId = roomId;

      if (callback) callback({ success: true, ...res });
    } catch (err) {
      if (callback) callback({ error: err.message });
    }
  });

  // Submit answer
  socket.on('submit_answer', ({ roomId, participantId, optionIndex }, callback) => {
    try {
      const result = roomManager.submitAnswer(roomId, participantId, optionIndex);
      if (callback) callback(result);
    } catch (err) {
      if (callback) callback({ error: err.message });
    }
  });

  // Quem Sou Eu: Join room
  socket.on('join_qse_room', ({ roomId, participantName, optInTortada }, callback) => {
    try {
      if (!roomId || !participantName) {
        return callback && callback({ error: 'Dados incompletos para ingressar no Quem Sou Eu.' });
      }

      const res = roomManager.joinQseRoom(roomId, participantName, socket.id, !!optInTortada);
      if (res.error) {
        return callback && callback(res);
      }

      socket.join(roomId);
      socket.participantId = res.participant.id;
      socket.roomId = roomId;

      if (callback) callback(res);
    } catch (err) {
      if (callback) callback({ error: err.message });
    }
  });

  // Telão: Join room as spectator / display
  socket.on('telao_join_room', ({ roomId }, callback) => {
    try {
      socket.join('telao_' + roomId);
      socket.join(roomId);
      const roomState = roomManager.getSanitizedRoomState(roomId, null);
      if (callback) callback({ success: true, room: roomState });
    } catch (err) {
      if (callback) callback({ error: err.message });
    }
  });

  // Quem Sou Eu: AI narration finished on Telão
  socket.on('qse_finish_narration', ({ roomId }, callback) => {
    try {
      const res = roomManager.finishQseNarration(roomId);
      if (callback) callback(res);
    } catch (err) {
      if (callback) callback({ error: err.message });
    }
  });

  // Quem Sou Eu: Participant buzzes in (atomic lock)
  socket.on('qse_buzz_in', ({ roomId, participantId }, callback) => {
    try {
      const pId = participantId || socket.participantId;
      const res = roomManager.buzzInQse(roomId, pId);
      if (callback) callback(res);
    } catch (err) {
      if (callback) callback({ error: err.message });
    }
  });

  // Quem Sou Eu: Answer submission by buzzer winner
  socket.on('qse_submit_answer', ({ roomId, participantId, optionIndex }, callback) => {
    try {
      const pId = participantId || socket.participantId;
      const res = roomManager.submitQseAnswer(roomId, pId, optionIndex);
      if (callback) callback(res);
    } catch (err) {
      if (callback) callback({ error: err.message });
    }
  });

  // Quem Sou Eu: Emergency unlock by admin
  socket.on('qse_emergency_unlock', ({ roomId, adminToken }, callback) => {
    try {
      if (!isValidAdminToken(adminToken)) {
        return callback && callback({ error: 'Token de administrador inválido.' });
      }
      const res = roomManager.emergencyUnlockQseBuzzer(roomId);
      if (callback) callback(res);
    } catch (err) {
      if (callback) callback({ error: err.message });
    }
  });

  // Quem Sou Eu: Trigger Tortada na Cara
  socket.on('qse_trigger_tortada', ({ roomId, adminToken, targetName }, callback) => {
    try {
      if (!isValidAdminToken(adminToken)) {
        return callback && callback({ error: 'Token de administrador inválido.' });
      }
      const res = roomManager.triggerQseTortada(roomId, targetName);
      if (callback) callback(res);
    } catch (err) {
      if (callback) callback({ error: err.message });
    }
  });

  // Quem Sou Eu: Admin Actions
  socket.on('qse_admin_action', ({ roomId, action, adminToken, data }, callback) => {
    try {
      if (!isValidAdminToken(adminToken)) {
        return callback && callback({ error: 'Token de administrador inválido.' });
      }

      let res = { success: true };
      if (action === 'start_round') {
        const roundIndex = data && data.roundIndex !== undefined ? data.roundIndex : 0;
        res = roomManager.startQseRound(roomId, roundIndex);
      } else if (action === 'repeat_narration') {
        const room = roomManager.getRoom(roomId);
        if (room) {
          res = roomManager.startQseRound(roomId, room.currentQuestionIndex);
        }
      } else if (action === 'finish_narration') {
        res = roomManager.finishQseNarration(roomId);
      } else if (action === 'emergency_unlock') {
        res = roomManager.emergencyUnlockQseBuzzer(roomId);
      } else if (action === 'advance_round') {
        const room = roomManager.getRoom(roomId);
        if (room) {
          const nextIdx = room.currentQuestionIndex + 1;
          if (nextIdx < room.questions.length) {
            res = roomManager.startQseRound(roomId, nextIdx);
          } else {
            res = roomManager.finishQseCompetition(roomId);
          }
        }
      } else if (action === 'trigger_tortada') {
        res = roomManager.triggerQseTortada(roomId, data && data.targetName);
      } else if (action === 'finish') {
        res = roomManager.finishQseCompetition(roomId);
      }

      if (callback) callback(res);
    } catch (err) {
      if (callback) callback({ error: err.message });
    }
  });

  // Admin monitoring channel
  socket.on('admin_join_room', ({ roomId, adminToken }, callback) => {
    try {
      if (!isValidAdminToken(adminToken)) {
        return callback && callback({ error: 'Token de administrador inválido.' });
      }

      socket.join('admin_' + roomId);
      const roomState = roomManager.getSanitizedRoomState(roomId, null);
      const fullRoom = roomManager.getRoom(roomId);

      if (callback) {
        callback({
          success: true,
          room: roomState,
          participants: fullRoom ? fullRoom.participants : {},
          teams: fullRoom ? fullRoom.teams : {}
        });
      }
    } catch (err) {
      if (callback) callback({ error: err.message });
    }
  });

  // Disconnect handler
  socket.on('disconnect', () => {
    roomManager.handleDisconnect(socket.id);
  });
});

const PORT = process.env.PORT || 3000;

function startServer(port = PORT) {
  return new Promise((resolve, reject) => {
    server.listen(port, '0.0.0.0', () => {
      console.log(`\n============================================================`);
      console.log(`🚀 PLATAFORMA GRUPO 5 — EMBRIOPATOS (EMBRIOLOGIA)`);
      console.log(`📡 Servidor ativo na porta: ${port}`);
      console.log(`🔑 Painel Admin disponível com senha padrão: Dev.Tawa`);
      console.log(`============================================================\n`);
      resolve({ server, port, roomManager });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

module.exports = { app, server, io, roomManager, startServer };
