// Socket.io Wrapper Client
const socketClient = {
  socket: null,
  isConnected: false,
  backendUrl: (() => {
    try {
      const saved = localStorage.getItem('g5_backend_url') || '';
      if (saved && (saved.includes('localhost') || saved.includes('127.0.0.1')) && typeof window !== 'undefined' && !window.location.hostname.includes('localhost')) {
        localStorage.removeItem('g5_backend_url');
        return '';
      }
      return saved;
    } catch (e) {
      return '';
    }
  })(),

  init(onConnectCallback, customUrl = null) {
    if (customUrl !== null) {
      this.backendUrl = customUrl;
      if (customUrl) localStorage.setItem('g5_backend_url', customUrl);
      else localStorage.removeItem('g5_backend_url');
    }

    if (this.socket) {
      try { this.socket.disconnect(); } catch (e) {}
      this.socket = null;
    }

    try {
      if (typeof io === 'undefined') return;

      const opts = { timeout: 4000, reconnectionAttempts: 3 };
      this.socket = this.backendUrl ? io(this.backendUrl, opts) : io(opts);

      this.socket.on('connect', () => {
        this.isConnected = true;
        console.log('Socket connected to backend:', this.socket.id);
        if (onConnectCallback) onConnectCallback();
        if (window.app && window.app.updateSocketStatusBadge) {
          window.app.updateSocketStatusBadge(true);
        }
      });

      this.socket.on('connect_error', () => {
        this.isConnected = false;
        if (window.app && window.app.updateSocketStatusBadge) {
          window.app.updateSocketStatusBadge(false);
        }
      });

      this.socket.on('disconnect', () => {
        this.isConnected = false;
        console.log('Socket disconnected');
        if (window.app && window.app.updateSocketStatusBadge) {
          window.app.updateSocketStatusBadge(false);
        }
      });

      this.socket.on('room_list_update', (rooms) => {
        if (window.app && window.app.handleRoomListUpdate) {
          window.app.handleRoomListUpdate(rooms);
        }
      });

      this.socket.on('room_state_update', (state) => {
        if (window.app && window.app.handleRoomStateUpdate) {
          window.app.handleRoomStateUpdate(state);
        }
      });

      this.socket.on('admin_room_state_update', (adminState) => {
        if (window.app && window.app.handleAdminRoomStateUpdate) {
          window.app.handleAdminRoomStateUpdate(adminState);
        }
      });

      // Quem Sou Eu Event Listeners
      this.socket.on('qse_round_started', (data) => {
        if (window.app && window.app.handleQseRoundStarted) {
          window.app.handleQseRoundStarted(data);
        }
      });

      this.socket.on('qse_buzzer_unlocked', (data) => {
        if (window.app && window.app.handleQseBuzzerUnlocked) {
          window.app.handleQseBuzzerUnlocked(data);
        }
      });

      this.socket.on('qse_buzzer_winner', (winner) => {
        if (window.app && window.app.handleQseBuzzerWinner) {
          window.app.handleQseBuzzerWinner(winner);
        }
      });

      this.socket.on('qse_answer_revealed', (result) => {
        if (window.app && window.app.handleQseAnswerRevealed) {
          window.app.handleQseAnswerRevealed(result);
        }
      });

      this.socket.on('qse_tortada_triggered', (payload) => {
        if (window.app && window.app.handleQseTortadaTriggered) {
          window.app.handleQseTortadaTriggered(payload);
        }
      });

      this.socket.on('qse_finished', (payload) => {
        if (window.app && window.app.handleQseFinished) {
          window.app.handleQseFinished(payload);
        }
      });
    } catch (e) {
      console.warn('Socket init failed (running in offline mode):', e);
      this.isConnected = false;
    }
  },

  joinSolo(roomId, participantName) {
    return new Promise((resolve) => {
      if (!this.isConnected || !this.socket) {
        return resolve({ error: 'Servidor WebSocket indisponível no momento.' });
      }
      this.socket.emit('join_solo_room', { roomId, participantName }, resolve);
    });
  },

  createDuoTeam(roomId, teamName, teamPassword, creatorName) {
    return new Promise((resolve) => {
      if (!this.isConnected || !this.socket) {
        return resolve({ error: 'Servidor WebSocket indisponível no momento.' });
      }
      this.socket.emit('create_duo_team', { roomId, teamName, teamPassword, creatorName }, resolve);
    });
  },

  joinDuoTeam(roomId, teamCode, teamPassword, memberName) {
    return new Promise((resolve) => {
      if (!this.isConnected || !this.socket) {
        return resolve({ error: 'Servidor WebSocket indisponível no momento.' });
      }
      this.socket.emit('join_duo_team', { roomId, teamCode, teamPassword, memberName }, resolve);
    });
  },

  reconnect(roomId, participantId) {
    return new Promise((resolve) => {
      if (!this.isConnected || !this.socket) {
        return resolve({ error: 'Servidor WebSocket indisponível no momento.' });
      }
      this.socket.emit('reconnect_session', { roomId, participantId }, resolve);
    });
  },

  submitAnswer(roomId, participantId, optionIndex) {
    return new Promise((resolve) => {
      if (!this.isConnected || !this.socket) {
        return resolve({ error: 'Servidor WebSocket indisponível no momento.' });
      }
      this.socket.emit('submit_answer', { roomId, participantId, optionIndex }, resolve);
    });
  },

  adminJoin(roomId, adminToken) {
    return new Promise((resolve) => {
      if (!this.isConnected || !this.socket) {
        return resolve({ error: 'Servidor WebSocket indisponível no momento.' });
      }
      this.socket.emit('admin_join_room', { roomId, adminToken }, resolve);
    });
  },

  joinQse(roomId, participantName, optInTortada) {
    return new Promise((resolve) => {
      if (!this.isConnected || !this.socket) {
        return resolve({ error: 'Servidor WebSocket indisponível no momento.' });
      }
      this.socket.emit('join_qse_room', { roomId, participantName, optInTortada }, resolve);
    });
  },

  buzzInQse(roomId, participantId) {
    return new Promise((resolve) => {
      if (!this.isConnected || !this.socket) {
        return resolve({ error: 'Servidor WebSocket indisponível no momento.' });
      }
      this.socket.emit('qse_buzz_in', { roomId, participantId }, resolve);
    });
  },

  submitQseAnswer(roomId, participantId, optionIndex) {
    return new Promise((resolve) => {
      if (!this.isConnected || !this.socket) {
        return resolve({ error: 'Servidor WebSocket indisponível no momento.' });
      }
      this.socket.emit('qse_submit_answer', { roomId, participantId, optionIndex }, resolve);
    });
  },

  qseAdminAction(roomId, action, adminToken, data) {
    return new Promise((resolve) => {
      if (!this.isConnected || !this.socket) {
        return resolve({ error: 'Servidor WebSocket indisponível no momento.' });
      }
      this.socket.emit('qse_admin_action', { roomId, action, adminToken, data }, resolve);
    });
  },

  triggerTortada(roomId, adminToken, targetName) {
    return new Promise((resolve) => {
      if (!this.isConnected || !this.socket) {
        return resolve({ error: 'Servidor WebSocket indisponível no momento.' });
      }
      this.socket.emit('qse_trigger_tortada', { roomId, adminToken, targetName }, resolve);
    });
  }
};

window.socketClient = socketClient;
