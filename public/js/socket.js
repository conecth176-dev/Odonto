// Socket.io Wrapper Client
const socketClient = {
  socket: null,
  isConnected: false,

  init(onConnectCallback) {
    if (this.socket) return;
    try {
      if (typeof io === 'undefined') return;
      this.socket = io({ timeout: 5000, reconnectionAttempts: 5 });

      this.socket.on('connect', () => {
        this.isConnected = true;
        console.log('Socket connected:', this.socket.id);
        if (onConnectCallback) onConnectCallback();
      });

      this.socket.on('connect_error', () => {
        this.isConnected = false;
      });

      this.socket.on('disconnect', () => {
        this.isConnected = false;
        console.log('Socket disconnected');
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
  },

  joinSolo(roomId, participantName) {
    return new Promise((resolve) => {
      this.socket.emit('join_solo_room', { roomId, participantName }, resolve);
    });
  },

  createDuoTeam(roomId, teamName, teamPassword, creatorName) {
    return new Promise((resolve) => {
      this.socket.emit('create_duo_team', { roomId, teamName, teamPassword, creatorName }, resolve);
    });
  },

  joinDuoTeam(roomId, teamCode, teamPassword, memberName) {
    return new Promise((resolve) => {
      this.socket.emit('join_duo_team', { roomId, teamCode, teamPassword, memberName }, resolve);
    });
  },

  reconnect(roomId, participantId) {
    return new Promise((resolve) => {
      this.socket.emit('reconnect_session', { roomId, participantId }, resolve);
    });
  },

  submitAnswer(roomId, participantId, optionIndex) {
    return new Promise((resolve) => {
      this.socket.emit('submit_answer', { roomId, participantId, optionIndex }, resolve);
    });
  },

  adminJoin(roomId, adminToken) {
    return new Promise((resolve) => {
      this.socket.emit('admin_join_room', { roomId, adminToken }, resolve);
    });
  }
};

window.socketClient = socketClient;
