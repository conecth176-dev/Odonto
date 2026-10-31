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
    server.listen(port, () => {
      console.log(`\n============================================================`);
      console.log(`🚀 PLATAFORMA GRUPO 5 — EMBRIOPATOS (EMBRIOLOGIA)`);
      console.log(`📡 Servidor ativo em: http://localhost:${port}`);
      console.log(`🔑 Painel Admin disponível com senha padrão: Dev.Tawa`);
      console.log(`============================================================\n`);
      resolve({ server, port, roomManager });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

module.exports = { app, server, io, roomManager, startServer };
