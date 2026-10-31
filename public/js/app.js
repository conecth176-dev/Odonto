/**
 * GRUPO 5 — OS MISTÉRIOS DA VIDA (EMBRIOLOGIA)
 * Client Application Logic & State Engine
 */

class EmbryoApp {
  constructor() {
    this.currentView = 'home'; // 'home' | 'lobby' | 'arena' | 'results' | 'admin' | 'bank'
    this.currentRoom = null;
    this.currentParticipant = null;
    this.currentTeam = null;
    this.adminToken = localStorage.getItem('g5_admin_token') || null;
    this.adminSelectedRoomId = null;
    this.adminRoomData = null;

    this.timerInterval = null;
    this.selectedOptionIndex = null;
    this.hasAnsweredCurrentRound = false;
    this.lastRoundIndex = -1;

    this.init();
  }

  async init() {
    // Sound initialization on click
    document.addEventListener('click', () => {
      if (window.soundManager) window.soundManager.init();
    }, { once: true });

    // Setup Socket
    window.socketClient.init(() => {
      this.checkSavedSession();
      this.fetchRooms();
    });

    this.setupEventListeners();
    this.renderAudioButton();
    this.fetchInfo();

    // Show mandatory rules modal with 15 seconds timer on entry
    this.showRulesModal(true);
  }

  setupEventListeners() {
    // Nav links
    document.getElementById('navHomeBtn').addEventListener('click', () => this.switchView('home'));
    document.getElementById('navBankBtn').addEventListener('click', () => this.openBankProtected());
    document.getElementById('navAdminBtn').addEventListener('click', () => this.openAdminView());
    document.querySelectorAll('.audio-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        const state = window.soundManager.toggle();
        this.renderAudioButton(state);
      });
    });

    // Modals
    document.getElementById('joinModalClose').addEventListener('click', () => this.closeModal('joinModal'));
    document.getElementById('adminLoginModalClose').addEventListener('click', () => {
      this.adminLoginTarget = null;
      this.closeModal('adminLoginModal');
    });
    document.getElementById('createRoomModalClose').addEventListener('click', () => this.closeModal('createRoomModal'));
    document.getElementById('questionModalClose').addEventListener('click', () => this.closeModal('questionModal'));

    // Solo join form
    document.getElementById('soloJoinForm').addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleSoloJoinSubmit();
    });

    // Duo create team form
    document.getElementById('duoCreateForm').addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleDuoCreateSubmit();
    });

    // Duo join team form
    document.getElementById('duoJoinForm').addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleDuoJoinSubmit();
    });

    // Duo tabs in join modal
    document.getElementById('tabCreateTeam').addEventListener('click', () => {
      document.getElementById('tabCreateTeam').classList.add('active');
      document.getElementById('tabJoinTeam').classList.remove('active');
      document.getElementById('formCreateTeamWrap').style.display = 'block';
      document.getElementById('formJoinTeamWrap').style.display = 'none';
    });

    document.getElementById('tabJoinTeam').addEventListener('click', () => {
      document.getElementById('tabJoinTeam').classList.add('active');
      document.getElementById('tabCreateTeam').classList.remove('active');
      document.getElementById('formJoinTeamWrap').style.display = 'block';
      document.getElementById('formCreateTeamWrap').style.display = 'none';
    });

    // Admin login form
    document.getElementById('adminLoginForm').addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleAdminLogin();
    });

    // Admin create room form
    document.getElementById('createRoomForm').addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleCreateRoomSubmit();
    });

    // Question form
    document.getElementById('questionForm').addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleSaveQuestionSubmit();
    });
  }

  renderAudioButton(enabled = null) {
    const isMuted = enabled !== null ? !enabled : (localStorage.getItem('g5_sound_enabled') === 'false');
    document.querySelectorAll('.audio-toggle').forEach(btn => {
      btn.innerHTML = isMuted ? '🔇' : '🔊';
      btn.title = isMuted ? 'Áudio desativado (clique para ativar)' : 'Áudio ativado (clique para silenciar)';
    });
  }

  switchView(viewName) {
    if ('speechSynthesis' in window) {
      try { window.speechSynthesis.cancel(); } catch (e) {}
    }
    this.currentView = viewName;
    const views = ['home', 'lobby', 'arena', 'results', 'admin', 'bank'];
    views.forEach(v => {
      const el = document.getElementById(`view-${v}`);
      if (el) el.style.display = (v === viewName) ? 'block' : 'none';
    });

    // Update active nav button
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    if (viewName === 'home') document.getElementById('navHomeBtn').classList.add('active');
    if (viewName === 'bank') document.getElementById('navBankBtn').classList.add('active');
    if (viewName === 'admin') document.getElementById('navAdminBtn').classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  openModal(modalId) {
    const el = document.getElementById(modalId);
    if (el) el.classList.add('active');
  }

  closeModal(modalId) {
    const el = document.getElementById(modalId);
    if (el) el.classList.remove('active');
  }

  openTeamModal() {
    this.openModal('teamModal');
  }

  // --- Mandatory Rules Modal with 15s Timer ---
  showRulesModal(enforceTimer = true) {
    if (this.rulesTimerInterval) {
      clearInterval(this.rulesTimerInterval);
      this.rulesTimerInterval = null;
    }

    const modal = document.getElementById('rulesModal');
    const closeBtn = document.getElementById('rulesModalClose');
    const timerWrap = document.getElementById('rulesCountdownWrap');
    const timerSec = document.getElementById('rulesTimerSec');
    const buttonArea = document.getElementById('rulesButtonArea');

    if (!modal) return;
    this.openModal('rulesModal');

    if (!enforceTimer) {
      if (closeBtn) closeBtn.style.display = 'flex';
      if (timerWrap) timerWrap.style.display = 'none';
      if (buttonArea) {
        buttonArea.innerHTML = `
          <button class="btn btn-primary btn-block" onclick="app.closeRulesModal();" style="font-size: 1.05rem; padding: 0.9rem;">
            ✓ Entendi as Regras — Continuar
          </button>
        `;
      }
      return;
    }

    // Enforce 15s countdown
    let remaining = 15;
    if (closeBtn) closeBtn.style.display = 'none';
    if (timerWrap) {
      timerWrap.style.display = 'flex';
      timerWrap.innerHTML = `
        <span style="font-size: 1.25rem;">⏳</span>
        <span style="font-size: 0.92rem; color: #cbd5e1;">
          Por favor, leia atentamente as regras. O botão de fechar será liberado em:
          <strong id="rulesTimerSec" style="color: var(--primary-cyan); font-size: 1.25rem; font-family: var(--font-display); margin-left: 4px;">${remaining}s</strong>
        </span>
      `;
    }

    if (buttonArea) {
      buttonArea.innerHTML = `
        <button class="btn btn-secondary btn-block" id="btnRulesClose" disabled style="opacity: 0.6; cursor: not-allowed; font-size: 1rem; padding: 0.9rem;">
          ⏳ Aguarde ${remaining}s para liberar o botão de fechar...
        </button>
      `;
    }

    this.rulesTimerInterval = setInterval(() => {
      remaining--;
      const secEl = document.getElementById('rulesTimerSec');
      if (secEl) secEl.innerText = `${remaining}s`;

      const btn = document.getElementById('btnRulesClose');
      if (btn) btn.innerText = `⏳ Aguarde ${remaining}s para liberar o botão de fechar...`;

      if (remaining <= 0) {
        clearInterval(this.rulesTimerInterval);
        this.rulesTimerInterval = null;

        if (closeBtn) closeBtn.style.display = 'flex';
        const wrapEl = document.getElementById('rulesCountdownWrap');
        if (wrapEl) {
          wrapEl.innerHTML = `
            <span style="font-size: 1.25rem;">✅</span>
            <span style="font-size: 0.92rem; color: #34d399; font-weight: 600;">
              Tempo de leitura obrigatória concluído! Você já pode fechar e iniciar a competição.
            </span>
          `;
        }

        if (buttonArea) {
          buttonArea.innerHTML = `
            <button class="btn btn-primary btn-block" onclick="app.closeRulesModal();" style="box-shadow: 0 0 30px rgba(6, 182, 212, 0.7); font-size: 1.1rem; padding: 1rem;">
              ✓ Li e Concordo com as Regras — Entrar na Competição 🚀
            </button>
          `;
        }

        if (window.soundManager) window.soundManager.playCorrect();
      }
    }, 1000);
  }

  closeRulesModal() {
    if (this.rulesTimerInterval) {
      clearInterval(this.rulesTimerInterval);
      this.rulesTimerInterval = null;
    }
    this.closeModal('rulesModal');
  }

  // --- Topic Deep-Dive Encyclopedia Modal ---
  openTopicModal(topicKey) {
    const data = (window.topicsData && window.topicsData[topicKey]) ? window.topicsData[topicKey] : null;
    if (!data) return;

    const content = document.getElementById('topicDetailContent');
    if (!content) return;

    // Map topicKey to Category name for the questions button
    const categoryMap = {
      siameses: 'Gêmeos siameses',
      parasitas: 'Gêmeos parasitas',
      superfecundacao: 'Superfecundação heteropaternal',
      superfetacao: 'Superfetação',
      papiraceo: 'Feto papiráceo',
      desaparecido: 'Síndrome do gêmeo desaparecido',
      fetus_in_fetu: 'Fetus in fetu',
      quimerismo: 'Quimerismo humano',
      teratomas: 'Teratomas',
      empelicado: 'Nascimento empelicado',
      revisao: 'Revisão geral e comparação entre fenômenos'
    };
    const catName = categoryMap[topicKey] || 'Todas';

    content.innerHTML = `
      <div style="border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 1.25rem; margin-bottom: 1.5rem;">
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;">
          <span style="font-size: 2.2rem; background: rgba(6, 182, 212, 0.15); width: 56px; height: 56px; display: flex; align-items: center; justify-content: center; border-radius: 12px; border: 1px solid rgba(6, 182, 212, 0.3); flex-shrink: 0;">
            ${data.icon}
          </span>
          <div>
            <span class="room-mode-badge badge-solo" style="font-size: 0.72rem;">${data.badge}</span>
            <h2 style="font-family: var(--font-display); font-size: 1.6rem; color: #fff; margin-top: 4px; line-height: 1.2;">
              ${data.title}
            </h2>
          </div>
        </div>
        <p style="font-size: 0.95rem; color: #38bdf8; font-weight: 500;">
          ${data.subtitle}
        </p>
      </div>

      <div style="display: flex; flex-direction: column; gap: 1.35rem; line-height: 1.65; font-size: 0.95rem; color: #e2e8f0;">
        <!-- Definição Geral -->
        <div class="glass" style="padding: 1.25rem; border-left: 4px solid var(--primary-cyan); background: rgba(15, 23, 42, 0.65);">
          <strong style="color: var(--primary-cyan); font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 0.4rem;">
            📌 O Que É (Definição Médica & Panorama Geral)
          </strong>
          <p style="color: #f1f5f9; line-height: 1.6;">${data.definition}</p>
        </div>

        <!-- Mecanismo de Bases Celulares -->
        <div class="glass" style="padding: 1.35rem; border-left: 4px solid #8b5cf6; background: rgba(139, 92, 246, 0.06);">
          <strong style="color: #c084fc; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.05em; display: flex; align-items: center; gap: 0.4rem; margin-bottom: 0.6rem;">
            🔬 Mecanismo de Bases Celulares e Embriológicas
          </strong>
          <div style="color: #cbd5e1; line-height: 1.65;">${data.cellularMechanism}</div>
        </div>

        <!-- Relevância para a Odontologia -->
        <div class="glass" style="padding: 1.25rem; border-left: 4px solid #10b981; background: rgba(16, 185, 129, 0.06);">
          <strong style="color: #34d399; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.05em; display: flex; align-items: center; gap: 0.4rem; margin-bottom: 0.4rem;">
            🦷 Relevância para a Odontologia & Complexo Craniofacial
          </strong>
          <div style="color: #e2e8f0; line-height: 1.6;">${data.odontologyRelevance}</div>
        </div>

        <!-- Curiosidade do Grupo 5 -->
        ${data.curiosity ? `
          <div class="curiosity-box">
            <div class="curiosity-title">✨ Curiosidade Extraordinária do Grupo 5:</div>
            <div class="curiosity-text">${data.curiosity}</div>
          </div>
        ` : ''}

        <!-- Diferença Diagnóstica Chave -->
        ${data.difference ? `
          <div class="difference-box">
            <div class="difference-title">⚖️ Diferença Diagnóstica Chave:</div>
            <div class="difference-text">${data.difference}</div>
          </div>
        ` : ''}

        <!-- Referência Bibliográfica -->
        <div style="font-size: 0.82rem; color: var(--text-dim); font-style: italic; border-top: 1px solid rgba(255,255,255,0.06); padding-top: 0.75rem;">
          📖 Referências Acadêmicas: ${data.reference}
        </div>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 1.25rem; margin-top: 1.5rem; flex-wrap: wrap; gap: 0.75rem;">
        <button class="btn btn-secondary btn-sm" onclick="app.closeModal('topicDetailModal');">
          Fechar ✕
        </button>
        <button class="btn btn-primary btn-sm" onclick="app.closeModal('topicDetailModal'); app.openBankProtected('${catName}');">
          Ver Perguntas Deste Tema no Banco (${catName}) 📝 →
        </button>
      </div>
    `;

    this.openModal('topicDetailModal');
  }

  // --- API & State fetching ---
  async fetchInfo() {
    try {
      const res = await fetch('/api/info');
      const data = await res.json();
      const countEl = document.getElementById('headerQuestionCount');
      if (countEl) countEl.innerText = `${data.totalQuestions} Questões Científicas`;
    } catch (e) {
      console.error(e);
    }
  }

  async fetchRooms() {
    try {
      const res = await fetch('/api/rooms');
      const rooms = await res.json();
      this.renderRoomsList(rooms);
    } catch (e) {
      console.error('Error fetching rooms:', e);
    }
  }

  handleRoomListUpdate(rooms) {
    this.renderRoomsList(rooms);
    if (this.currentView === 'admin' && this.adminToken) {
      this.renderAdminRoomsList(rooms);
    }
  }

  renderRoomsList(rooms) {
    const container = document.getElementById('roomsListContainer');
    if (!container) return;

    if (!rooms || rooms.length === 0) {
      container.innerHTML = `
        <div class="glass" style="grid-column: 1/-1; padding: 2.5rem; text-align: center;">
          <p style="color: var(--text-muted); font-size: 1.1rem; margin-bottom: 1rem;">Nenhuma sala de competição aberta no momento.</p>
          <p style="font-size: 0.9rem; color: var(--text-dim);">Acesse o Painel Administrativo para criar uma nova sala para a turma.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = rooms.map(r => {
      const statusLabels = {
        lobby: 'Aguardando Início',
        in_progress: 'Ao Vivo / Em Andamento',
        explanation: 'Fase de Explicação',
        paused: 'Competição Pausada',
        finished: 'Finalizada'
      };
      const statusClass = `status-${r.status}`;
      const modeLabel = r.mode === 'duo' ? '👥 Modo Dupla' : '👤 Modo Solo';
      const badgeClass = r.mode === 'duo' ? 'badge-duo' : 'badge-solo';
      const countLabel = r.mode === 'duo' ? `${r.teamCount} duplas` : `${r.participantCount} alunos`;

      return `
        <div class="glass room-card">
          <div>
            <div class="room-header">
              <span class="room-code-tag">${r.code}</span>
              <span class="room-mode-badge ${badgeClass}">${modeLabel}</span>
            </div>
            <h3 class="room-name">${this.escapeHtml(r.name)}</h3>
            <p class="room-desc">${this.escapeHtml(r.description || 'Sem descrição')}</p>
          </div>

          <div>
            <div class="room-meta">
              <div class="meta-item">
                <span class="status-indicator ${statusClass}"></span>
                <span>${statusLabels[r.status] || r.status}</span>
              </div>
              <div class="meta-item">
                <span>📚 ${r.questionCount} questões</span>
              </div>
              <div class="meta-item">
                <span>⚡ ${r.timeLimit}s</span>
              </div>
              <div class="meta-item">
                <span>👥 ${countLabel}</span>
              </div>
            </div>

            <button class="btn btn-primary btn-block btn-sm" onclick="app.openJoinModal('${r.id}', '${r.mode}', '${this.escapeHtml(r.name)}')">
              ${r.status === 'finished' ? 'Ver Resultados' : 'Entrar na Sala'} →
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  // --- Join Modal flow ---
  openJoinModal(roomId, mode, roomName) {
    this.targetJoinRoomId = roomId;
    this.targetJoinMode = mode;

    document.getElementById('joinModalTitle').innerText = roomName;
    document.getElementById('joinModalSubtitle').innerText = mode === 'duo' ? 'Competição Cooperativa em Duplas' : 'Competição Individual Solo';

    if (mode === 'solo') {
      document.getElementById('soloJoinSection').style.display = 'block';
      document.getElementById('duoJoinSection').style.display = 'none';
    } else {
      document.getElementById('soloJoinSection').style.display = 'none';
      document.getElementById('duoJoinSection').style.display = 'block';
      // Default to create team tab
      document.getElementById('tabCreateTeam').click();
    }

    this.openModal('joinModal');
  }

  async handleSoloJoinSubmit() {
    const name = document.getElementById('soloParticipantName').value.trim();
    if (!name) return alert('Por favor, informe seu nome ou identificação.');

    const res = await window.socketClient.joinSolo(this.targetJoinRoomId, name);
    if (res.error) {
      return alert(res.error);
    }

    this.saveSession(this.targetJoinRoomId, res.participant.id);
    this.currentParticipant = res.participant;
    this.closeModal('joinModal');
    this.handleRoomStateUpdate(res.room);
  }

  async handleDuoCreateSubmit() {
    const teamName = document.getElementById('duoTeamName').value.trim();
    const teamPassword = document.getElementById('duoTeamPassword').value.trim();
    const creatorName = document.getElementById('duoCreatorName').value.trim();

    if (!teamName || !teamPassword || !creatorName) {
      return alert('Preencha todos os campos para criar a dupla.');
    }

    const res = await window.socketClient.createDuoTeam(this.targetJoinRoomId, teamName, teamPassword, creatorName);
    if (res.error) {
      return alert(res.error);
    }

    this.saveSession(this.targetJoinRoomId, res.participant.id);
    this.currentParticipant = res.participant;
    this.currentTeam = res.team;
    this.closeModal('joinModal');
    this.handleRoomStateUpdate(res.room);
  }

  async handleDuoJoinSubmit() {
    const teamCode = document.getElementById('joinDuoCode').value.trim().toUpperCase();
    const teamPassword = document.getElementById('joinDuoPassword').value.trim();
    const memberName = document.getElementById('joinDuoMemberName').value.trim();

    if (!teamCode || !teamPassword || !memberName) {
      return alert('Preencha o código, senha e seu nome.');
    }

    const res = await window.socketClient.joinDuoTeam(this.targetJoinRoomId, teamCode, teamPassword, memberName);
    if (res.error) {
      return alert(res.error);
    }

    this.saveSession(this.targetJoinRoomId, res.participant.id);
    this.currentParticipant = res.participant;
    this.currentTeam = res.team;
    this.closeModal('joinModal');
    this.handleRoomStateUpdate(res.room);
  }

  saveSession(roomId, participantId) {
    localStorage.setItem('g5_session_roomId', roomId);
    localStorage.setItem('g5_session_partId', participantId);
  }

  clearSession() {
    localStorage.removeItem('g5_session_roomId');
    localStorage.removeItem('g5_session_partId');
    this.currentRoom = null;
    this.currentParticipant = null;
    this.currentTeam = null;
    if (this.timerInterval) clearInterval(this.timerInterval);
  }

  async checkSavedSession() {
    const roomId = localStorage.getItem('g5_session_roomId');
    const partId = localStorage.getItem('g5_session_partId');

    if (roomId && partId) {
      const res = await window.socketClient.reconnect(roomId, partId);
      if (res && res.success) {
        this.currentParticipant = res.participant;
        this.handleRoomStateUpdate(res.room);
      } else {
        this.clearSession();
      }
    }
  }

  // --- Real-Time State Router ---
  handleRoomStateUpdate(roomState) {
    if (!roomState) return;
    this.currentRoom = roomState;

    if (roomState.status === 'lobby') {
      this.switchView('lobby');
      this.renderLobby(roomState);
    } else if (roomState.status === 'in_progress' || roomState.status === 'explanation' || roomState.status === 'paused') {
      this.switchView('arena');
      this.renderArena(roomState);
    } else if (roomState.status === 'finished') {
      this.switchView('results');
      this.renderResults(roomState);
    }
  }

  // --- Lobby View ---
  renderLobby(room) {
    const container = document.getElementById('lobbyContent');
    if (!container) return;

    let duoInfoHtml = '';
    if (room.mode === 'duo' && room.myTeam) {
      const isMemberBWaiting = !room.myTeam.memberB;
      duoInfoHtml = `
        <div class="glass" style="padding: 1.5rem; margin-bottom: 1.5rem; border-color: rgba(139, 92, 246, 0.4);">
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.75rem;">
            <div>
              <span style="font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase;">Sua Dupla:</span>
              <h3 style="font-size: 1.3rem; color: #fff;">${this.escapeHtml(room.myTeam.name)}</h3>
            </div>
            <div style="background: rgba(139, 92, 246, 0.2); padding: 0.4rem 1rem; border-radius: var(--radius-sm); border: 1px solid rgba(139, 92, 246, 0.4);">
              <span style="font-size: 0.75rem; color: #c084fc; display: block;">CÓDIGO DA DUPLA</span>
              <strong style="font-size: 1.25rem; color: #fff; letter-spacing: 0.05em;">${room.myTeam.code}</strong>
            </div>
          </div>

          <div style="display: flex; align-items: center; gap: 0.5rem; margin-top: 1rem; flex-wrap: wrap;">
            <button class="btn btn-secondary btn-sm" onclick="app.copyTeamInvite('${room.myTeam.code}')">
              📋 Copiar Código e Instruções de Entrada
            </button>
            <span style="font-size: 0.85rem; color: ${isMemberBWaiting ? '#fbbf24' : '#34d399'};">
              ${isMemberBWaiting ? '⏳ Aguardando parceiro(a) entrar...' : '✅ Dupla completa! Prontos para a competição.'}
            </span>
          </div>
        </div>
      `;
    }

    container.innerHTML = `
      <div style="text-align: center; margin-bottom: 2rem;">
        <span class="room-mode-badge ${room.mode === 'duo' ? 'badge-duo' : 'badge-solo'}" style="margin-bottom: 0.75rem; display: inline-block;">
          ${room.mode === 'duo' ? '👥 MODO DUPLA' : '👤 MODO SOLO'}
        </span>
        <h1 style="font-family: var(--font-display); font-size: 2.2rem; font-weight: 800; color: #fff; margin-bottom: 0.5rem;">
          ${this.escapeHtml(room.name)}
        </h1>
        <p style="color: var(--text-muted); max-width: 650px; margin: 0 auto;">
          ${this.escapeHtml(room.description || 'Sala de competição do Grupo 5.')}
        </p>
      </div>

      <!-- Quick Start Host Box (Solves the issue where questions are waiting to be started) -->
      <div class="glass" style="padding: 1.75rem; text-align: center; margin-bottom: 1.75rem; border: 2px solid var(--primary-cyan); background: rgba(6, 182, 212, 0.08); box-shadow: 0 0 25px rgba(6, 182, 212, 0.2);">
        <div style="font-size: 1.5rem; margin-bottom: 0.35rem;">🚀</div>
        <h3 style="color: #fff; font-size: 1.3rem; margin-bottom: 0.4rem;">
          Liberar Perguntas para a Turma
        </h3>
        <p style="color: #cbd5e1; font-size: 0.95rem; max-width: 580px; margin: 0 auto 1.25rem; line-height: 1.6;">
          As perguntas são sincronizadas pelo servidor. Assim que o anfitrião clicar no botão abaixo, a <strong>Pergunta 1</strong> aparecerá imediatamente na tela de todos os participantes conectados!
        </p>

        <button class="btn btn-primary" onclick="app.quickStartRoomFromLobby('${room.id}')" style="font-size: 1.1rem; padding: 1rem 2.5rem; box-shadow: 0 4px 25px rgba(6, 182, 212, 0.5);">
          ▶ Iniciar Competição Agora (Liberar Perguntas)
        </button>
        <p style="font-size: 0.78rem; color: var(--text-dim); margin-top: 0.65rem;">
          (Se solicitado, use a senha do anfitrião: <code>embrio2026</code>)
        </p>
      </div>

      ${duoInfoHtml}

      <div class="glass" style="padding: 2rem; text-align: center; margin-bottom: 2rem;">
        <div style="display: inline-block; width: 64px; height: 64px; border-radius: 50%; background: rgba(6, 182, 212, 0.15); border: 2px solid var(--primary-cyan); display: flex; align-items: center; justify-content: center; font-size: 1.8rem; margin: 0 auto 1.25rem; animation: pulse 2s infinite;">
          🧬
        </div>
        <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem; color: #fff;">Sala de Espera Ativa</h3>
        <p style="color: var(--text-muted); font-size: 0.95rem; max-width: 500px; margin: 0 auto 1.5rem;">
          Você está pronto(a) e conectado(a). Aguarde a liberação da 1ª rodada.
        </p>

        <div style="display: flex; justify-content: center; gap: 2rem; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 1.25rem; flex-wrap: wrap;">
          <div>
            <span style="font-size: 0.8rem; color: var(--text-dim); text-transform: uppercase;">Total de Perguntas</span>
            <p style="font-size: 1.3rem; font-weight: 700; color: #38bdf8;">${room.totalQuestions}</p>
          </div>
          <div>
            <span style="font-size: 0.8rem; color: var(--text-dim); text-transform: uppercase;">Tempo por Rodada</span>
            <p style="font-size: 1.3rem; font-weight: 700; color: #38bdf8;">${room.timeLimit}s</p>
          </div>
          <div>
            <span style="font-size: 0.8rem; color: var(--text-dim); text-transform: uppercase;">Participantes Conectados</span>
            <p style="font-size: 1.3rem; font-weight: 700; color: #34d399;">${room.participantsCount}</p>
          </div>
        </div>
      </div>

      <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
        <button class="btn btn-secondary btn-sm" onclick="app.openBankProtected();">
          📚 Visualizar Banco de Questões (Admin)
        </button>
        <button class="btn btn-secondary btn-sm" onclick="app.leaveRoom()">
          ← Sair desta Sala
        </button>
      </div>
    `;
  }

  async quickStartRoomFromLobby(roomId) {
    if (!this.adminToken) {
      const pass = prompt('Digite a senha de administrador/anfitrião (padrão: embrio2026):', 'embrio2026');
      if (!pass) return;

      try {
        const res = await fetch('/api/admin/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ password: pass.trim() })
        });
        const data = await res.json();
        if (!data.success) {
          return alert(data.error || 'Senha incorreta!');
        }
        this.adminToken = data.token;
        localStorage.setItem('g5_admin_token', data.token);
      } catch (e) {
        return alert('Erro ao autenticar: ' + e.message);
      }
    }

    try {
      const startRes = await fetch(`/api/admin/rooms/${roomId}/start`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.adminToken}`
        }
      });
      const startData = await startRes.json();
      if (startData.error) {
        alert(startData.error);
      } else {
        console.log('Competição iniciada com sucesso!');
      }
    } catch (e) {
      alert('Erro ao iniciar competição: ' + e.message);
    }
  }

  copyTeamInvite(code) {
    const text = `Participe comigo da competição de Embriologia (Grupo 5)! Entre no site, clique em "Entrar na Sala", selecione o modo Dupla e informe o código da nossa equipe: ${code}`;
    navigator.clipboard.writeText(text).then(() => {
      alert('Código e instruções copiados para a área de transferência!');
    }).catch(() => {
      prompt('Copie o código da equipe:', code);
    });
  }

  leaveRoom() {
    if (confirm('Deseja realmente sair da sala atual?')) {
      this.clearSession();
      this.switchView('home');
      this.fetchRooms();
    }
  }

  // --- Arena Live Quiz View ---
  renderArena(room) {
    const round = room.currentRound;
    const q = room.question;
    const isExplanation = room.status === 'explanation';

    // Sound cue on question index change
    if (round && round.questionIndex !== this.lastRoundIndex) {
      this.lastRoundIndex = round.questionIndex;
      this.selectedOptionIndex = null;
      this.hasAnsweredCurrentRound = false;
      window.soundManager.playRoundStart();
    }

    // Topbar
    const qNum = (round ? round.questionIndex + 1 : 1);
    const totalQ = room.totalQuestions;
    const diffBadge = q && q.difficulty === 'Difícil' ? 'badge-duo' : 'badge-solo';
    const maxPts = q ? q.points : 10;

    let arenaHtml = `
      <div class="glass arena-topbar">
        <div class="arena-info-left">
          <span class="arena-qbadge">Pergunta ${qNum} de ${totalQ}</span>
          <span class="room-mode-badge ${diffBadge}">${q ? q.difficulty : ''} • Vale até ${maxPts} pts</span>
          <span class="arena-category">${q ? q.category : ''}</span>
        </div>

        <div class="timer-container">
          <div class="timer-circle-wrap" id="timerWrap">
            <svg class="timer-svg" viewBox="0 0 44 44">
              <circle class="timer-bg-circle" cx="22" cy="22" r="18"></circle>
              <circle class="timer-progress-circle" id="timerCircleProgress" cx="22" cy="22" r="18" stroke-dasharray="113.1" stroke-dashoffset="0"></circle>
            </svg>
            <span class="timer-text" id="timerDisplay">--</span>
          </div>
        </div>
      </div>
    `;

    // Explanation & Transition Banner
    if (isExplanation) {
      arenaHtml += `
        <div class="glass" style="padding: 0.85rem 1.25rem; margin-bottom: 1.25rem; background: linear-gradient(90deg, rgba(6,182,212,0.18), rgba(16,185,129,0.18)); border: 1.5px solid var(--accent-emerald); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem;">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <span style="font-size: 1.35rem;">⚡</span>
            <div>
              <span style="font-weight: 800; color: #fff; font-size: 0.95rem;">
                ${round && round.closedReason === 'all_answered' ? 'Todos responderam a pergunta!' : 'Tempo de resposta encerrado!'}
              </span>
              <div style="font-size: 0.8rem; color: #cbd5e1;">Gabarito oficial revelado e pontuação calculada.</div>
            </div>
          </div>
          <div style="background: rgba(15,23,42,0.7); padding: 0.35rem 0.85rem; border-radius: var(--radius-full); border: 1px solid rgba(56,189,248,0.4); font-size: 0.88rem; font-weight: 700; color: #38bdf8;">
            ⏳ Próxima pergunta em: <strong id="explanationTimerSec" style="color: #6ee7b7;">...</strong>
          </div>
        </div>
      `;
    }

    // Turn Banner for Duo Mode
    if (room.mode === 'duo') {
      const isMyTurn = room.myTurn;
      const turnClass = isMyTurn ? 'my-turn' : 'partner-turn';
      const activeRoleText = round && round.activeDuoRole === 'member_A' ? 'Integrante A' : 'Integrante B';

      arenaHtml += `
        <div class="turn-banner ${turnClass}">
          <div>
            <div class="turn-label">
              ${isMyTurn ? '🎯 É A SUA VEZ DE RESPONDER PELA DUPLA!' : `⏳ VEZ DO SEU PARCEIRO (${activeRoleText}) RESPONDER`}
            </div>
            <div class="turn-subtext">
              ${isMyTurn ? 'Leia atentamente as alternativas e confirme sua resposta antes do tempo acabar.' : 'Acompanhe a questão e o tempo. Seu parceiro é o responsável pela resposta desta rodada.'}
            </div>
          </div>
          <span class="room-mode-badge badge-duo">Alternância Automática</span>
        </div>
      `;
    }

    // Question Box
    if (q) {
      const letters = ['A', 'B', 'C', 'D'];
      const myAnswer = room.myAnswer;
      const hasSubmitted = !!myAnswer;
      const canSubmit = !isExplanation && !hasSubmitted && (room.mode === 'solo' || room.myTurn);

      const optionsHtml = q.options.map((opt, idx) => {
        let optClass = 'option-btn';
        const isSelected = (this.selectedOptionIndex === idx) || (myAnswer && myAnswer.optionIndex === idx);

        if (isSelected) optClass += ' selected';

        // In explanation phase, color correct vs incorrect
        if (isExplanation) {
          if (idx === q.correctAnswer) {
            optClass += ' correct';
          } else if (myAnswer && myAnswer.optionIndex === idx) {
            optClass += ' incorrect';
          }
        }

        const disabledAttr = (!canSubmit || isExplanation) ? 'disabled' : '';

        return `
          <button class="${optClass}" ${disabledAttr} onclick="app.selectOption(${idx})">
            <span class="option-letter">${letters[idx]}</span>
            <span class="option-text">${this.escapeHtml(opt)}</span>
          </button>
        `;
      }).join('');

      let actionText = '';
      if (isExplanation) {
        actionText = `
          <div style="color: #38bdf8; font-weight: 600;">
            ${myAnswer && myAnswer.isCorrect ? `🎉 Você acertou e ganhou +${myAnswer.points} pontos!` : '📖 Rodada encerrada. Analise a explicação científica abaixo.'}
          </div>
        `;
      } else if (hasSubmitted) {
        actionText = `
          <div class="submission-status">
            <span>✅ Resposta enviada (${myAnswer.timeUsed.toFixed(1)}s)! Aguardando o término da rodada...</span>
          </div>
        `;
      } else if (room.mode === 'duo' && !room.myTurn) {
        actionText = `
          <div class="submission-status" style="color: #fbbf24;">
            <span>👁️ Modo visualização: Aguardando envio pelo seu parceiro...</span>
          </div>
        `;
      } else {
        actionText = `
          <div class="arena-actions" style="width: 100%;">
            <div style="font-size: 0.85rem; color: var(--text-muted);">
              Selecione uma alternativa e confirme. Não é possível alterar após o envio!
            </div>
            <button class="btn btn-primary" id="btnConfirmAnswer" onclick="app.confirmAnswer()" ${this.selectedOptionIndex === null ? 'disabled' : ''}>
              Confirmar Resposta ✓
            </button>
          </div>
        `;
      }

      arenaHtml += `
        <div class="glass question-card">
          <span class="question-theme-tag">${this.escapeHtml(q.theme || q.category)}</span>
          <h2 class="question-text">${this.escapeHtml(q.question)}</h2>

          <div class="options-list">
            ${optionsHtml}
          </div>

          <div style="border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 1.25rem;">
            ${actionText}
          </div>
        </div>
      `;
    }

    // Explanation Box (When Round is closed)
    if (isExplanation && q && q.scientificExplanation) {
      arenaHtml += `
        <div class="reveal-container">
          <div class="glass reveal-card">
            <div class="reveal-header">
              <span>🔬 Explicação Científica Fundamental</span>
            </div>
            <p class="reveal-body">
              ${this.escapeHtml(q.scientificExplanation)}
            </p>

            ${q.curiosity ? `
              <div class="curiosity-box">
                <div class="curiosity-title">✨ Curiosidade do Grupo 5</div>
                <div class="curiosity-text">${this.escapeHtml(q.curiosity)}</div>
              </div>
            ` : ''}

            ${q.difference ? `
              <div class="difference-box">
                <div class="difference-title">⚖️ Diferença Embriológica Chave</div>
                <div class="difference-text">${this.escapeHtml(q.difference)}</div>
              </div>
            ` : ''}

            ${q.reference ? `
              <span class="reference-tag">Fonte Bibliográfica: ${this.escapeHtml(q.reference)}</span>
            ` : ''}
          </div>
        </div>
      `;
    }

    // Leaderboard preview snippet
    arenaHtml += `
      <div class="glass" style="margin-top: 1.5rem; padding: 1.5rem;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
          <h4 style="color: #fff; font-size: 1.05rem;">📊 Classificação ao Vivo da Sala</h4>
          <span style="font-size: 0.8rem; color: var(--text-dim);">Atualização contínua</span>
        </div>
        ${this.renderLeaderboardTableSnippet(room.leaderboard || [])}
      </div>
    `;

    document.getElementById('arenaContent').innerHTML = arenaHtml;

    // Start/Update synchronized timer (including auto-advance countdown on explanation)
    this.syncRoundTimer(round, isExplanation, room.explanationEndsAt, room.explanationDuration);
  }

  selectOption(idx) {
    if (this.currentRoom.status === 'explanation') return;
    if (this.currentRoom.myAnswer) return;
    if (this.currentRoom.mode === 'duo' && !this.currentRoom.myTurn) return;

    this.selectedOptionIndex = idx;

    // Update UI highlights
    document.querySelectorAll('.option-btn').forEach((btn, i) => {
      if (i === idx) {
        btn.classList.add('selected');
      } else {
        btn.classList.remove('selected');
      }
    });

    const confirmBtn = document.getElementById('btnConfirmAnswer');
    if (confirmBtn) confirmBtn.disabled = false;
  }

  async confirmAnswer() {
    if (this.selectedOptionIndex === null) return;
    if (!this.currentRoom || !this.currentParticipant) return;

    const res = await window.socketClient.submitAnswer(
      this.currentRoom.id,
      this.currentParticipant.id,
      this.selectedOptionIndex
    );

    if (res.error) {
      alert(res.error);
    } else {
      if (res.isCorrect) {
        window.soundManager.playCorrect();
      } else {
        window.soundManager.playIncorrect();
      }
    }
  }

  // --- Real-Time Synchronized Timer Engine ---
  syncRoundTimer(round, isExplanation, explanationEndsAt = null, explanationDuration = null) {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }

    const timerDisplay = document.getElementById('timerDisplay');
    const timerCircle = document.getElementById('timerCircleProgress');
    const timerWrap = document.getElementById('timerWrap');
    const expTimerSec = document.getElementById('explanationTimerSec');
    if (!timerDisplay || !timerCircle) return;

    const maxCircumference = 113.1; // 2 * PI * 18

    if (isExplanation || !round) {
      if (timerWrap) timerWrap.classList.remove('timer-urgent');
      if (explanationEndsAt) {
        const totalExp = explanationDuration || 6;
        const tickExp = () => {
          const now = Date.now();
          const remMs = Math.max(0, explanationEndsAt - now);
          const remSec = Math.ceil(remMs / 1000);

          timerDisplay.innerText = remSec + 's';
          if (expTimerSec) expTimerSec.innerText = remSec + 's';

          const progress = remSec / totalExp;
          const offset = maxCircumference * (1 - Math.max(0, Math.min(1, progress)));
          timerCircle.style.strokeDashoffset = offset;

          if (remSec <= 0) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
          }
        };
        tickExp();
        this.timerInterval = setInterval(tickExp, 400);
      } else {
        timerDisplay.innerText = '✓';
        timerCircle.style.strokeDashoffset = '0';
        if (expTimerSec) expTimerSec.innerText = 'Avançando...';
      }
      return;
    }

    const duration = round.duration || 180;

    const tick = () => {
      const now = Date.now();
      const remainingMs = Math.max(0, round.endTime - now);
      const remainingSec = Math.ceil(remainingMs / 1000);

      timerDisplay.innerText = remainingSec;

      // Circular dashoffset calculation
      const progress = remainingSec / duration;
      const offset = maxCircumference * (1 - Math.max(0, Math.min(1, progress)));
      timerCircle.style.strokeDashoffset = offset;

      // Urgent audio & visual cue when < 15 seconds
      if (remainingSec <= 15 && remainingSec > 0) {
        if (timerWrap) timerWrap.classList.add('timer-urgent');
        window.soundManager.playUrgentTick();
      } else {
        if (timerWrap) timerWrap.classList.remove('timer-urgent');
      }

      if (remainingSec <= 0) {
        clearInterval(this.timerInterval);
        this.timerInterval = null;
      }
    };

    tick();
    this.timerInterval = setInterval(tick, 1000);
  }

  renderLeaderboardTableSnippet(leaderboard) {
    if (!leaderboard || leaderboard.length === 0) {
      return `<p style="font-size: 0.85rem; color: var(--text-dim); text-align: center;">Nenhuma pontuação registrada ainda.</p>`;
    }

    const top5 = leaderboard.slice(0, 5);
    return `
      <div class="table-responsive">
        <table class="leaderboard-table">
          <thead>
            <tr>
              <th style="width: 50px;">Pos</th>
              <th>Participante / Dupla</th>
              <th style="text-align: right;">Acertos</th>
              <th style="text-align: right;">Pontos</th>
            </tr>
          </thead>
          <tbody>
            ${top5.map((item, idx) => `
              <tr>
                <td>
                  <span style="font-weight: 700; color: ${idx === 0 ? '#fbbf24' : idx === 1 ? '#cbd5e1' : idx === 2 ? '#d97706' : '#94a3b8'};">
                    ${idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : `#${item.position}`}
                  </span>
                </td>
                <td>
                  <strong>${this.escapeHtml(item.name)}</strong>
                  ${item.code ? `<span class="room-code-tag" style="margin-left: 6px; font-size: 0.72rem;">${item.code}</span>` : ''}
                </td>
                <td style="text-align: right; color: var(--text-muted);">
                  ${item.correctCount}/${item.answeredCount} (${item.accuracy}%)
                </td>
                <td style="text-align: right; font-weight: 800; color: #38bdf8; font-size: 1.05rem;">
                  ${item.score}
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  // --- Final Results & Podium View with Dr. Odonto Mascot ---
  renderResults(room) {
    if (this.timerInterval) clearInterval(this.timerInterval);
    if ('speechSynthesis' in window) {
      try { window.speechSynthesis.cancel(); } catch (e) {}
    }
    window.soundManager.playVictoryFanfare();
    window.confetti.launch(150, 5000);

    const container = document.getElementById('resultsContent');
    if (!container) return;

    const isSolo = (room.mode !== 'duo');
    const lb = room.leaderboard || [];
    const first  = lb[0] || null;
    const second = lb[1] || null;
    const third  = lb[2] || null;

    // 1. Build Speech Text (Narration in Brazilian Portuguese)
    let spokenSpeech = '';
    if (!first) {
      spokenSpeech = isSolo
        ? 'Nenhum estudante de odontologia pontuou nesta rodada. Continuem se dedicando aos estudos para a próxima competição!'
        : 'Nenhuma equipe de odontologia pontuou nesta rodada. Continuem se dedicando aos estudos para a próxima competição!';
    } else {
      if (isSolo) {
        spokenSpeech = `Atenção futuros cirurgiões-dentistas! Fim da rodada! Aqui está o Top 3 individual com mais pontos da competição! Em primeiro lugar, o grande vencedor: ${first.name}, com ${first.score} pontos!`;
        if (second) {
          spokenSpeech += ` Em segundo lugar: ${second.name}, com ${second.score} pontos!`;
        }
        if (third) {
          spokenSpeech += ` Em terceiro lugar: ${third.name}, com ${third.score} pontos!`;
        }
        spokenSpeech += ' Parabéns a todos pelo excelente conhecimento demonstrado!';
      } else {
        spokenSpeech = `Atenção equipes de odontologia! Fim da rodada! Aqui está o Top 3 de equipes com mais pontos da competição! Em primeiro lugar, a equipe campeã: Equipe ${first.name}, com ${first.score} pontos!`;
        if (second) {
          spokenSpeech += ` Em segundo lugar: Equipe ${second.name}, com ${second.score} pontos!`;
        }
        if (third) {
          spokenSpeech += ` Em terceiro lugar: Equipe ${third.name}, com ${third.score} pontos!`;
        }
        spokenSpeech += ' Parabéns a todas as equipes pelo excelente trabalho conjunto e dedicação!';
      }
    }
    this.lastOdontoSpeechText = spokenSpeech;

    // 2. Build Dr. Odonto Speech Bubble Cards
    let bubbleTop3CardsHtml = '';
    if (!first) {
      bubbleTop3CardsHtml = `
        <div class="odonto-speech-intro" style="color: var(--text-muted); font-style: italic;">
          📖 Nenhum participante pontuou nesta rodada. Não desanimem! Revisem o banco de questões e continuem praticando.
        </div>
      `;
    } else {
      const topItems = [
        { data: first, rank: 1, medal: '🥇', labelSolo: '1º Lugar — Campeão Individual', labelDuo: '1º Lugar — Equipe Campeã' },
        { data: second, rank: 2, medal: '🥈', labelSolo: '2º Lugar', labelDuo: '2º Lugar — Equipe' },
        { data: third, rank: 3, medal: '🥉', labelSolo: '3º Lugar', labelDuo: '3º Lugar — Equipe' }
      ].filter(x => Boolean(x.data));

      bubbleTop3CardsHtml = `
        <div class="odonto-speech-intro">
          🎉 <em>${isSolo 
            ? 'Parabéns aos futuros cirurgiões-dentistas! Confiram o <strong>Top 3 individual</strong> com as maiores pontuações:' 
            : 'Cooperação clínica fantástica! Confiram o <strong>Top 3 de equipes</strong> com as maiores pontuações:'}</em>
        </div>

        <div class="odonto-top3-grid">
          ${topItems.map(item => {
            const p = item.data;
            const displayName = isSolo ? this.escapeHtml(p.name) : `Equipe ${this.escapeHtml(p.name)}`;
            const label = isSolo ? item.labelSolo : item.labelDuo;
            return `
              <div class="top3-card rank-${item.rank}">
                <div class="rank-medal">${item.medal}</div>
                <div class="rank-info">
                  <div class="rank-position">${label}</div>
                  <div class="rank-name">${displayName}</div>
                  ${(!isSolo && p.members && p.members.length) ? `
                    <div class="rank-members">
                      👥 Integrantes: <strong>${p.members.map(m => this.escapeHtml(m.name)).join('</strong> e <strong>')}</strong>
                    </div>
                  ` : ''}
                  <div class="rank-points">
                    <strong>${p.score}</strong> pontos • ${p.correctCount} acertos (${p.accuracy}%)
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `;
    }

    const odontoMascotSvg = this._getOdontoMascotSvg();

    const doctorHtml = `
      <div class="odonto-announce-container" id="odontoAnnounce">
        <!-- Odonto Doctor Mascot Column with Soundwaves -->
        <div class="odonto-figure-column">
          <div class="odonto-mascot-wrapper" id="odontoMascotWrap" title="Dr. Odonto — Mascote Oficial">
            ${odontoMascotSvg}
            <!-- Sound waves active during speech -->
            <div class="odonto-sound-waves" id="odontoSoundWaves" style="display: none;">
              <span class="bar bar-1"></span>
              <span class="bar bar-2"></span>
              <span class="bar bar-3"></span>
              <span class="bar bar-4"></span>
            </div>
          </div>
          <div class="odonto-character-badge">
            <span class="badge-icon">🩺</span>
            <span class="badge-text"><strong>Dr. Odonto</strong> • Pódio da Rodada</span>
          </div>
        </div>

        <!-- Speech Bubble -->
        <div class="odonto-speech-bubble" id="odontoSpeechBubble">
          <div class="speech-bubble-header">
            <div>
              <span class="bubble-tag">${isSolo ? '👤 Modo Solo (Individual)' : '👥 Modo Equipe (Duplas)'}</span>
              <h2 class="bubble-title">🦷 Dr. Odonto Anuncia o Top 3 com Mais Pontos!</h2>
            </div>
            <div class="header-actions">
              <button id="btnOdontoVoice" class="btn-odonto-audio" onclick="app.toggleOdontoSpeech()" title="Ouvir Dr. Odonto narrando o pódio">
                🔊 Ouvir em Voz Alta
              </button>
            </div>
          </div>

          <div class="speech-bubble-content" id="odontoBubbleContent">
            ${bubbleTop3CardsHtml}
          </div>
        </div>
      </div>
    `;

    // 3. Build Podium Section
    let podiumHtml = '';
    if (first) {
      podiumHtml = `
        <div class="podium-section">
          ${second ? `
            <div class="glass podium-place place-2">
              <div class="podium-medal">🥈</div>
              <h3 class="podium-name">${isSolo ? '' : 'Equipe '}${this.escapeHtml(second.name)}</h3>
              ${(!isSolo && second.members) ? `
                <div style="font-size: 0.78rem; color: #cbd5e1; margin-bottom: 6px;">
                  👥 ${second.members.map(m => this.escapeHtml(m.name)).join(' • ')}
                </div>
              ` : ''}
              <div class="podium-score">${second.score} pts</div>
              <div class="podium-stats">${second.correctCount} acertos (${second.accuracy}%)</div>
            </div>
          ` : ''}

          <div class="glass podium-place place-1">
            <div class="podium-medal">👑</div>
            <h3 class="podium-name" style="font-size: 1.45rem;">${isSolo ? '' : 'Equipe '}${this.escapeHtml(first.name)}</h3>
            ${(!isSolo && first.members) ? `
              <div style="font-size: 0.82rem; color: #fef08a; margin-bottom: 6px;">
                👥 ${first.members.map(m => this.escapeHtml(m.name)).join(' • ')}
              </div>
            ` : ''}
            <div class="podium-score" style="color: #fbbf24; font-size: 1.7rem;">${first.score} pts</div>
            <div class="podium-stats">${isSolo ? 'Campeão(ã)' : 'Equipe Campeã'} • ${first.correctCount} acertos (${first.accuracy}%)</div>
          </div>

          ${third ? `
            <div class="glass podium-place place-3">
              <div class="podium-medal">🥉</div>
              <h3 class="podium-name">${isSolo ? '' : 'Equipe '}${this.escapeHtml(third.name)}</h3>
              ${(!isSolo && third.members) ? `
                <div style="font-size: 0.78rem; color: #fed7aa; margin-bottom: 6px;">
                  👥 ${third.members.map(m => this.escapeHtml(m.name)).join(' • ')}
                </div>
              ` : ''}
              <div class="podium-score">${third.score} pts</div>
              <div class="podium-stats">${third.correctCount} acertos (${third.accuracy}%)</div>
            </div>
          ` : ''}
        </div>
      `;
    }

    container.innerHTML = `
      <div class="results-header">
        <span class="hero-pill">🏆 RESULTADOS FINAIS DA COMPETIÇÃO</span>
        <h1 style="font-family: var(--font-display); font-size: 2.5rem; font-weight: 900; color: #fff; margin-bottom: 0.5rem;">
          ${this.escapeHtml(room.name)}
        </h1>
        <p style="color: var(--text-muted); font-size: 1.05rem;">
          Parabéns a todos os estudantes de Odontologia participantes pelo aprendizado e dedicação!
        </p>
      </div>

      ${doctorHtml}

      ${podiumHtml}

      <div class="glass results-table-card" style="padding: 2rem; text-align: left; margin-bottom: 2rem;">
        <h3 style="font-family: var(--font-display); font-size: 1.3rem; margin-bottom: 1.25rem; color: #fff;">
          📋 Classificação Geral Completa
        </h3>

        <div class="table-responsive">
          <table class="leaderboard-table">
            <thead>
              <tr>
                <th>Posição</th>
                <th>${isSolo ? 'Nome do Aluno' : 'Nome da Equipe'}</th>
                <th style="text-align: right;">Perguntas</th>
                <th style="text-align: right;">Acertos</th>
                <th style="text-align: right;">Aproveitamento</th>
                <th style="text-align: right;">Tempo Total (s)</th>
                <th style="text-align: right;">Pontuação Final</th>
              </tr>
            </thead>
            <tbody>
              ${lb.map(item => `
                <tr>
                  <td><strong>#${item.position}</strong></td>
                  <td>
                    <strong>${isSolo ? '' : 'Equipe '}${this.escapeHtml(item.name)}</strong>
                    ${item.code ? `<span class="room-code-tag" style="margin-left: 6px;">${item.code}</span>` : ''}
                    ${item.members ? `
                      <div style="font-size: 0.78rem; color: var(--text-dim); margin-top: 3px;">
                        ${item.members.map(m => `${m.name} (${m.stats ? m.stats.correctCount : 0} acertos)`).join(' • ')}
                      </div>
                    ` : ''}
                  </td>
                  <td style="text-align: right;">${item.answeredCount}</td>
                  <td style="text-align: right; color: #34d399; font-weight: 600;">${item.correctCount}</td>
                  <td style="text-align: right;">${item.accuracy}%</td>
                  <td style="text-align: right; color: var(--text-muted);">${item.totalCorrectTime.toFixed(1)}s</td>
                  <td style="text-align: right; font-weight: 800; font-size: 1.15rem; color: #38bdf8;">${item.score}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
        <button class="btn btn-secondary" onclick="app.openBankProtected();">
          📚 Revisar Banco de Questões (Admin)
        </button>
        <button class="btn btn-primary" onclick="app.switchView('home'); app.clearSession(); app.fetchRooms();">
          🏠 Retornar ao Início
        </button>
      </div>

      <div style="margin-top: 2.25rem; font-size: 0.85rem; color: var(--text-dim); text-align: center;">
        🧬 Seminário de Bases Celulares: "Os Mistérios da Vida" • <strong onclick="app.openTeamModal();" style="color: #38bdf8; cursor: pointer; text-decoration: underline;" title="Clique para ver os alunos responsáveis do Grupo 5">Desenvolvido pelo: Grupo 5 👥</strong> (Odontologia 2026)
      </div>
    `;

    // Attempt automatic speech after victory fanfare (900ms delay)
    setTimeout(() => {
      this.speakOdontoTop3(spokenSpeech);
    }, 900);
  }

  // --- Dr. Odonto Speech Synthesis Narration (Web Speech API) ---
  speakOdontoTop3(text) {
    if (!('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'pt-BR';
      utterance.rate = 1.02;
      utterance.pitch = 1.08;

      // Select Brazilian Portuguese voice if available
      const voices = window.speechSynthesis.getVoices();
      const ptBrVoice = voices.find(v => v.lang === 'pt-BR') || voices.find(v => v.lang.startsWith('pt')) || null;
      if (ptBrVoice) {
        utterance.voice = ptBrVoice;
      }

      const mascotWrap = document.getElementById('odontoMascotWrap');
      const speakBtn   = document.getElementById('btnOdontoVoice');
      const waveEl     = document.getElementById('odontoSoundWaves');

      utterance.onstart = () => {
        if (mascotWrap) mascotWrap.classList.add('is-speaking');
        if (waveEl) waveEl.style.display = 'flex';
        if (speakBtn) {
          speakBtn.innerHTML = '⏹️ Parar Voz';
          speakBtn.classList.add('btn-speaking');
        }
      };

      utterance.onend = () => {
        if (mascotWrap) mascotWrap.classList.remove('is-speaking');
        if (waveEl) waveEl.style.display = 'none';
        if (speakBtn) {
          speakBtn.innerHTML = '🔊 Ouvir Dr. Odonto Novamente';
          speakBtn.classList.remove('btn-speaking');
        }
      };

      utterance.onerror = () => {
        if (mascotWrap) mascotWrap.classList.remove('is-speaking');
        if (waveEl) waveEl.style.display = 'none';
        if (speakBtn) {
          speakBtn.innerHTML = '🔊 Ouvir em Voz Alta';
          speakBtn.classList.remove('btn-speaking');
        }
      };

      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.warn('Speech synthesis unavailable:', e);
    }
  }

  toggleOdontoSpeech() {
    if (!('speechSynthesis' in window)) {
      alert('Seu navegador não possui suporte a reprodução de voz nativa.');
      return;
    }
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
      const mascotWrap = document.getElementById('odontoMascotWrap');
      const speakBtn   = document.getElementById('btnOdontoVoice');
      const waveEl     = document.getElementById('odontoSoundWaves');
      if (mascotWrap) mascotWrap.classList.remove('is-speaking');
      if (waveEl) waveEl.style.display = 'none';
      if (speakBtn) {
        speakBtn.innerHTML = '🔊 Ouvir Dr. Odonto Falando';
        speakBtn.classList.remove('btn-speaking');
      }
    } else if (this.lastOdontoSpeechText) {
      this.speakOdontoTop3(this.lastOdontoSpeechText);
    }
  }

  // --- Detailed SVG Mascot: Dr. Odonto (Tooth Doctor with Dental Mouth Mirror) ---
  _getOdontoMascotSvg() {
    return `
      <svg viewBox="0 0 160 215" xmlns="http://www.w3.org/2000/svg" class="odonto-svg">
        <defs>
          <linearGradient id="odontoToothGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#ffffff"/>
            <stop offset="70%" stop-color="#f0f9ff"/>
            <stop offset="100%" stop-color="#e0f2fe"/>
          </linearGradient>
          <linearGradient id="odontoToothShadow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#e2e8f0" stop-opacity="0"/>
            <stop offset="100%" stop-color="#94a3b8" stop-opacity="0.32"/>
          </linearGradient>
          <linearGradient id="odontoMirrorGlass" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#38bdf8"/>
            <stop offset="45%" stop-color="#bae6fd"/>
            <stop offset="100%" stop-color="#0284c7"/>
          </linearGradient>
          <linearGradient id="odontoSilverHandle" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#94a3b8"/>
            <stop offset="50%" stop-color="#f8fafc"/>
            <stop offset="100%" stop-color="#64748b"/>
          </linearGradient>
        </defs>

        <g class="odonto-mascot-body">
          <!-- Dental Doctor Shoes -->
          <ellipse cx="62" cy="198" rx="14" ry="7" fill="#0369a1"/>
          <ellipse cx="98" cy="198" rx="14" ry="7" fill="#0369a1"/>
          <ellipse cx="60" cy="196" rx="10" ry="4" fill="#38bdf8" opacity="0.6"/>
          <ellipse cx="96" cy="196" rx="10" ry="4" fill="#38bdf8" opacity="0.6"/>

          <!-- Molar Tooth Silhouette Body & Legs -->
          <path d="M 45 42 
                   C 40 28, 55 18, 68 24 
                   C 74 27, 86 27, 92 24 
                   C 105 18, 120 28, 115 42 
                   C 126 58, 126 95, 120 125 
                   C 116 145, 112 175, 102 195 
                   C 96 197, 88 190, 85 168 
                   C 83 158, 77 158, 75 168 
                   C 72 190, 64 197, 58 195 
                   C 48 175, 44 145, 40 125 
                   C 34 95, 34 58, 45 42 Z" 
                fill="url(#odontoToothGrad)" 
                stroke="#0284c7" 
                stroke-width="3" 
                stroke-linejoin="round"/>

          <!-- Shadow between root legs -->
          <path d="M 75 168 C 77 158, 83 158, 85 168 C 88 185, 95 195, 100 195 C 108 178, 114 148, 118 125 C 122 100, 122 65, 113 46 C 111 38, 103 30, 93 30 C 85 30, 78 35, 80 40 C 80 40, 70 30, 67 30 C 57 30, 49 38, 47 46 C 38 65, 38 100, 42 125 C 46 148, 52 178, 60 195 C 65 195, 72 185, 75 168 Z" 
                fill="url(#odontoToothShadow)"/>

          <!-- Enamel Highlights -->
          <path d="M 50 35 C 55 26, 65 24, 70 28 C 62 28, 54 32, 50 35 Z" fill="#ffffff" opacity="0.8"/>
          <path d="M 110 35 C 105 26, 95 24, 90 28 C 98 28, 106 32, 110 35 Z" fill="#ffffff" opacity="0.8"/>
          <path d="M 42 55 C 40 70, 40 90, 44 110" stroke="#ffffff" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.6"/>

          <!-- Dentist Lab Coat (Jaleco de Cirurgião-Dentista) -->
          <path d="M 41 105 C 43 145, 50 172, 60 178 L 100 178 C 110 172, 117 145, 119 105 C 108 112, 92 115, 80 115 C 68 115, 52 112, 41 105 Z" 
                fill="#f8fafc" stroke="#94a3b8" stroke-width="2"/>

          <!-- Cyan Scrub V-Neck & Lapels -->
          <polygon points="80,132 68,105 92,105" fill="#0284c7"/>
          <polygon points="68,105 80,140 64,140" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5"/>
          <polygon points="92,105 80,140 96,140" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5"/>
          <line x1="80" y1="140" x2="80" y2="178" stroke="#cbd5e1" stroke-width="2"/>
          <circle cx="80" cy="150" r="2" fill="#0284c7"/>
          <circle cx="80" cy="162" r="2" fill="#0284c7"/>

          <!-- Pocket with Tooth Emblem -->
          <rect x="91" y="132" width="16" height="15" rx="3" fill="#e0f2fe" stroke="#38bdf8" stroke-width="1.2"/>
          <path d="M 96 139 C 96 136, 102 136, 102 139 C 102 142, 99 144, 99 145 C 99 144, 96 142, 96 139 Z" fill="#0284c7"/>
          <circle cx="103" cy="135" r="1.5" fill="#ef4444"/>

          <!-- Headband with Dental Frontal Mirror (Espelho Frontal) -->
          <ellipse cx="80" cy="22" rx="42" ry="7" fill="none" stroke="#0284c7" stroke-width="3" stroke-dasharray="10 2 10 2"/>
          <circle cx="80" cy="22" r="12" fill="#e2e8f0" stroke="#64748b" stroke-width="2"/>
          <circle cx="80" cy="22" r="8" fill="url(#odontoMirrorGlass)"/>
          <circle cx="78" cy="20" r="2.5" fill="#ffffff" opacity="0.85"/>

          <!-- Sparkling Cartoon Eyes -->
          <g class="odonto-eyes">
            <ellipse cx="64" cy="62" rx="8" ry="10" fill="#0f172a"/>
            <ellipse cx="96" cy="62" rx="8" ry="10" fill="#0f172a"/>
            <circle cx="62" cy="59" r="3.5" fill="#ffffff"/>
            <circle cx="66" cy="65" r="1.5" fill="#ffffff"/>
            <circle cx="94" cy="59" r="3.5" fill="#ffffff"/>
            <circle cx="98" cy="65" r="1.5" fill="#ffffff"/>
          </g>

          <!-- Eyebrows -->
          <path d="M 57 48 Q 64 44 71 49" stroke="#0369a1" stroke-width="2.5" stroke-linecap="round" fill="none"/>
          <path d="M 89 49 Q 96 44 103 48" stroke="#0369a1" stroke-width="2.5" stroke-linecap="round" fill="none"/>

          <!-- Rosy Cheeks -->
          <ellipse cx="54" cy="74" rx="7" ry="4" fill="#f43f5e" opacity="0.45"/>
          <ellipse cx="106" cy="74" rx="7" ry="4" fill="#f43f5e" opacity="0.45"/>

          <!-- Beaming Smile with Speaking State Toggle -->
          <g class="odonto-mouth-group">
            <path id="odontoMouthSmile" d="M 64 76 Q 80 96 96 76 Q 80 82 64 76 Z" 
                  fill="#881337" stroke="#0284c7" stroke-width="2"/>
            <path d="M 67 77 Q 80 84 93 77 Q 80 81 67 77 Z" fill="#ffffff"/>
            <ellipse cx="80" cy="88" rx="8" ry="5" fill="#fb7185"/>
            <!-- Animated mouth used when speaking -->
            <ellipse id="odontoMouthTalk" class="odonto-mouth-talk" cx="80" cy="84" rx="10" ry="8" fill="#881337" style="display:none;"/>
          </g>

          <!-- Dental Sparkle Star -->
          <g class="odonto-sparkle" transform="translate(108, 48)">
            <path d="M 0 -8 Q 1 -1 8 0 Q 1 1 0 8 Q -1 1 -8 0 Q -1 -1 0 -8 Z" fill="#38bdf8"/>
            <circle cx="0" cy="0" r="2" fill="#ffffff"/>
          </g>

          <!-- Left Arm & Hand (Waving) -->
          <g class="odonto-left-arm">
            <path d="M 43 112 Q 25 105 22 88" stroke="#f8fafc" stroke-width="12" stroke-linecap="round" fill="none"/>
            <path d="M 43 112 Q 25 105 22 88" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" fill="none"/>
            <circle cx="21" cy="83" r="8" fill="#ffffff" stroke="#94a3b8" stroke-width="1.5"/>
            <path d="M 12 75 Q 16 70 20 73" stroke="#38bdf8" stroke-width="2" stroke-linecap="round" fill="none"/>
            <path d="M 14 88 Q 10 92 8 86" stroke="#38bdf8" stroke-width="2" stroke-linecap="round" fill="none"/>
          </g>

          <!-- Right Arm & Hand Holding Dental Mouth Mirror -->
          <g class="odonto-right-arm">
            <path d="M 117 112 Q 132 120 136 135" stroke="#f8fafc" stroke-width="12" stroke-linecap="round" fill="none"/>
            <path d="M 117 112 Q 132 120 136 135" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" fill="none"/>
            <circle cx="136" cy="136" r="7" fill="#ffffff" stroke="#94a3b8" stroke-width="1.5"/>

            <!-- Authentic Dental Mirror Tool -->
            <line x1="140" y1="168" x2="133" y2="95" stroke="url(#odontoSilverHandle)" stroke-width="4.5" stroke-linecap="round"/>
            <line x1="138" y1="150" x2="135" y2="150" stroke="#475569" stroke-width="1.5"/>
            <line x1="137" y1="144" x2="134" y2="144" stroke="#475569" stroke-width="1.5"/>
            <line x1="136" y1="138" x2="133" y2="138" stroke="#475569" stroke-width="1.5"/>
            <path d="M 133 95 L 130 82" stroke="url(#odontoSilverHandle)" stroke-width="3" stroke-linecap="round"/>
            <circle cx="127" cy="72" r="13" fill="#64748b" stroke="#334155" stroke-width="1.5"/>
            <circle cx="127" cy="72" r="10.5" fill="url(#odontoMirrorGlass)"/>
            <path d="M 121 66 Q 128 64 133 70" stroke="#ffffff" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.85"/>
            <circle cx="131" cy="75" r="2" fill="#ffffff" opacity="0.7"/>
          </g>
        </g>
      </svg>
    `;
  }

  openBankProtected(filterCategory = null) {
    if (this.adminToken) {
      this.switchView('bank');
      this.loadStudyBank(filterCategory);
    } else {
      this.adminLoginTarget = { view: 'bank', filterCategory };
      const titleEl = document.querySelector('#adminLoginModal .modal-title');
      const subEl = document.querySelector('#adminLoginModal .modal-subtitle');
      if (titleEl) titleEl.innerText = '🔒 Acesso Restrito ao Banco de Questões';
      if (subEl) subEl.innerText = 'Digite a senha do Grupo 5 para desbloquear as questões e gabaritos';
      const input = document.getElementById('adminPasswordInput');
      if (input) input.value = '';
      this.openModal('adminLoginModal');
    }
  }

  // --- Study Bank View ---
  async loadStudyBank(filterCategory = null) {
    if (!this.adminToken) {
      this.switchView('home');
      return this.openBankProtected(filterCategory);
    }

    const container = document.getElementById('studyBankContainer');
    if (!container) return;

    container.innerHTML = `
      <div class="glass" style="padding: 2.5rem; text-align: center; margin: 2rem 0;">
        <div style="font-size: 2.5rem; margin-bottom: 0.75rem; animation: pulse 1s infinite;">🧬</div>
        <h3 style="color: #fff; margin-bottom: 0.35rem;">Carregando Questões Científicas...</h3>
        <p style="color: var(--text-muted); font-size: 0.9rem;">Obtendo acervo fundamentado de Bases Celulares e Embriologia.</p>
      </div>
    `;

    try {
      const headers = { 'Authorization': `Bearer ${this.adminToken}` };
      const res = await fetch('/api/questions', { headers });
      if (!res.ok) {
        this.adminToken = null;
        localStorage.removeItem('g5_admin_token');
        this.switchView('home');
        return alert('🔒 Acesso negado: Senha administrativa necessária para visualizar o acervo.');
      }
      const questions = await res.json();
      if (!Array.isArray(questions)) {
        this.adminToken = null;
        localStorage.removeItem('g5_admin_token');
        this.switchView('home');
        return alert('🔒 Acesso não autorizado ao acervo.');
      }
      this.studyBankQuestions = questions;

      const categories = ['Todas', ...new Set(questions.map(q => q.category))];
      const activeFilter = filterCategory || 'Todas';
      const filtered = activeFilter === 'Todas' ? questions : questions.filter(q => q.category === activeFilter);

      const hasAnswers = questions.length > 0 && questions[0].correctAnswer !== undefined;

      container.innerHTML = `
        <div style="margin-bottom: 2rem;">
          <span class="hero-pill">ACERVO CIENTÍFICO • BASES CELULARES</span>
          <h1 style="font-family: var(--font-display); font-size: 2.2rem; font-weight: 800; color: #fff; margin-bottom: 0.4rem;">
            Banco de Questões e Fenômenos Extraordinários
          </h1>
          <p style="color: var(--text-muted); font-size: 1rem; max-width: 750px;">
            Consulte todas as <strong>${questions.length} questões científicas</strong> elaboradas pelo Grupo 5. Utilize este acervo para estudar os mecanismos celulares, testar seus conhecimentos e revisar antes da competição.
          </p>

          <!-- Category filter buttons -->
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 1.25rem;">
            ${categories.map(cat => `
              <button class="topic-pill ${cat === activeFilter ? 'selected' : ''}" style="${cat === activeFilter ? 'background: var(--primary-cyan); color: #000; font-weight: 700; border-color: var(--primary-cyan);' : ''}" onclick="app.loadStudyBank('${cat}')">
                ${cat}
              </button>
            `).join('')}
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
          ${filtered.map((q, idx) => `
            <div class="glass" style="padding: 1.75rem; border: 1px solid rgba(56, 189, 248, 0.25);">
              <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.75rem;">
                <span class="question-theme-tag">${q.category}</span>
                <span class="room-mode-badge ${q.difficulty === 'Difícil' ? 'badge-duo' : 'badge-solo'}">
                  ${q.difficulty} • ${q.points} pontos
                </span>
              </div>

              <span style="font-size: 0.8rem; color: #38bdf8; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em;">
                ${q.theme || q.category}
              </span>
              <h3 style="font-size: 1.15rem; color: #fff; margin: 0.4rem 0 1.25rem; line-height: 1.5;">
                ${idx + 1}. ${this.escapeHtml(q.question)}
              </h3>

              <div style="margin-bottom: 1.25rem;">
                ${q.options.map((opt, i) => `
                  <div style="padding: 0.75rem 1rem; margin-bottom: 0.5rem; border-radius: var(--radius-sm); font-size: 0.95rem; background: ${(hasAnswers && i === q.correctAnswer) ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255, 255, 255, 0.03)'}; border: 1px solid ${(hasAnswers && i === q.correctAnswer) ? 'rgba(16, 185, 129, 0.4)' : 'rgba(255, 255, 255, 0.08)'}; color: ${(hasAnswers && i === q.correctAnswer) ? '#6ee7b7' : '#e2e8f0'}; display: flex; align-items: flex-start; gap: 0.75rem;">
                    <strong style="color: ${(hasAnswers && i === q.correctAnswer) ? '#34d399' : '#38bdf8'}; font-size: 0.9rem;">${['A', 'B', 'C', 'D'][i]})</strong>
                    <div style="flex: 1;">
                      ${this.escapeHtml(opt)}
                      ${(hasAnswers && i === q.correctAnswer) ? ' <span style="font-weight: 700; color: #34d399; margin-left: 8px;">(Gabarito Oficial ✓)</span>' : ''}
                    </div>
                  </div>
                `).join('')}
              </div>

              ${q.scientificExplanation ? `
                <div style="background: rgba(15, 23, 42, 0.75); padding: 1.4rem; border-radius: var(--radius-sm); border-left: 4px solid var(--primary-cyan);">
                  <strong style="color: var(--primary-cyan); font-size: 0.92rem; display: flex; align-items: center; gap: 0.4rem; margin-bottom: 0.5rem;">
                    🔬 Mecanismo Celular e Embriológico:
                  </strong>
                  <p style="font-size: 0.92rem; color: #cbd5e1; line-height: 1.65; margin-bottom: 0.85rem;">
                    ${this.escapeHtml(q.scientificExplanation)}
                  </p>
                </div>
              ` : `
                <div style="background: rgba(15, 23, 42, 0.5); padding: 0.85rem 1.25rem; border-radius: var(--radius-sm); font-size: 0.85rem; color: #94a3b8; border-left: 3px solid #64748b;">
                  🔒 <em>Gabarito e explicação oficial protegidos contra cola. Serão revelados ao vivo após o encerramento de cada rodada da competição!</em>
                </div>
              `}

                ${q.curiosity ? `
                  <div class="curiosity-box" style="margin-bottom: 0.75rem;">
                    <div class="curiosity-title">✨ Curiosidade do Fenômeno (Grupo 5):</div>
                    <div class="curiosity-text">${this.escapeHtml(q.curiosity)}</div>
                  </div>
                ` : ''}

                ${q.difference ? `
                  <div class="difference-box" style="margin-bottom: 0.75rem;">
                    <div class="difference-title">⚖️ Diferença Diagnóstica Chave:</div>
                    <div class="difference-text">${this.escapeHtml(q.difference)}</div>
                  </div>
                ` : ''}

                <span class="reference-tag" style="margin-top: 0.5rem; display: block; font-size: 0.82rem; color: var(--text-dim);">
                  📖 Fonte Acadêmica: ${this.escapeHtml(q.reference || 'Moore, K.L. Embriologia Clínica / Alberts - Biologia Molecular da Célula')}
                </span>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    } catch (e) {
      container.innerHTML = `
        <div class="glass" style="padding: 2rem; text-align: center;">
          <p style="color: #fda4af;">Erro ao carregar banco de perguntas: ${e.message}</p>
          <button class="btn btn-primary btn-sm" onclick="app.loadStudyBank()" style="margin-top: 1rem;">
            Tentar Novamente
          </button>
        </div>
      `;
    }
  }

  // --- Admin View ---
  openAdminView() {
    if (this.adminToken) {
      this.switchView('admin');
      this.loadAdminDashboard();
    } else {
      this.adminLoginTarget = 'admin';
      const titleEl = document.querySelector('#adminLoginModal .modal-title');
      const subEl = document.querySelector('#adminLoginModal .modal-subtitle');
      if (titleEl) titleEl.innerText = 'Acesso Administrativo';
      if (subEl) subEl.innerText = 'Exclusivo para anfitriões e apresentadores do Grupo 5';
      const input = document.getElementById('adminPasswordInput');
      if (input) input.value = '';
      this.openModal('adminLoginModal');
    }
  }

  async handleAdminLogin() {
    const input = document.getElementById('adminPasswordInput');
    const password = input ? input.value.trim() : '';
    if (!password) return alert('Por favor, digite a senha.');

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      });
      const data = await res.json();

      if (data.success) {
        this.adminToken = data.token;
        localStorage.setItem('g5_admin_token', data.token);
        this.closeModal('adminLoginModal');
        if (input) input.value = '';

        if (this.adminLoginTarget && this.adminLoginTarget.view === 'bank') {
          const filter = this.adminLoginTarget.filterCategory;
          this.adminLoginTarget = null;
          this.switchView('bank');
          this.loadStudyBank(filter);
        } else {
          this.adminLoginTarget = null;
          this.switchView('admin');
          this.loadAdminDashboard();
        }
      } else {
        alert(data.error || 'Senha incorreta! Acesso bloqueado.');
      }
    } catch (e) {
      alert('Erro ao autenticar: ' + e.message);
    }
  }

  async loadAdminDashboard() {
    this.showAdminTab('rooms');
    this.refreshAdminRooms();
  }

  showAdminTab(tabName) {
    document.querySelectorAll('.admin-nav-item').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.admin-tab-pane').forEach(el => el.style.display = 'none');

    const tabBtn = document.getElementById(`adminNav-${tabName}`);
    const tabPane = document.getElementById(`adminPane-${tabName}`);

    if (tabBtn) tabBtn.classList.add('active');
    if (tabPane) tabPane.style.display = 'block';

    if (tabName === 'questions') this.loadAdminQuestions();
    if (tabName === 'history') this.loadAdminHistory();
  }

  async refreshAdminRooms() {
    const res = await fetch('/api/rooms');
    const rooms = await res.json();
    this.renderAdminRoomsList(rooms);
  }

  renderAdminRoomsList(rooms) {
    const container = document.getElementById('adminRoomsContainer');
    if (!container) return;

    if (!rooms || rooms.length === 0) {
      container.innerHTML = `<p style="color: var(--text-dim);">Nenhuma sala cadastrada. Clique em "Criar Nova Sala" acima.</p>`;
      return;
    }

    container.innerHTML = rooms.map(r => `
      <div class="glass" style="padding: 1.25rem; margin-bottom: 1rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
        <div>
          <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.35rem;">
            <span class="room-code-tag">${r.code}</span>
            <span class="room-mode-badge ${r.mode === 'duo' ? 'badge-duo' : 'badge-solo'}">${r.mode.toUpperCase()}</span>
            <strong style="font-size: 1.1rem; color: #fff;">${this.escapeHtml(r.name)}</strong>
          </div>
          <p style="font-size: 0.85rem; color: var(--text-muted);">
            Status: <strong>${r.status}</strong> • Perguntas: ${r.questionCount} • Conectados: ${r.participantCount} alunos (${r.teamCount} duplas)
          </p>
        </div>

        <div style="display: flex; gap: 0.5rem;">
          <button class="btn btn-primary btn-sm" onclick="app.selectAdminRoom('${r.id}')">
            Controle Ao Vivo 🎮
          </button>
          <button class="btn btn-danger btn-sm" onclick="app.deleteAdminRoom('${r.id}')">
            Excluir 🗑️
          </button>
        </div>
      </div>
    `).join('');
  }

  async selectAdminRoom(roomId) {
    this.adminSelectedRoomId = roomId;
    document.getElementById('adminRoomControlModal').classList.add('active');

    // Subscribe to live admin socket updates
    await window.socketClient.adminJoin(roomId, this.adminToken);
    this.fetchAdminRoomState(roomId);
  }

  async fetchAdminRoomState(roomId) {
    try {
      const res = await fetch(`/api/rooms/${roomId}`);
      const state = await res.json();
      this.handleAdminRoomStateUpdate(state);
    } catch (e) {}
  }

  handleAdminRoomStateUpdate(adminState) {
    if (!adminState || adminState.id !== this.adminSelectedRoomId) return;
    this.adminRoomData = adminState;

    const container = document.getElementById('adminRoomControlContent');
    if (!container) return;

    const round = adminState.currentRound;
    const q = adminState.question;
    const isRunning = adminState.status === 'in_progress';
    const isPaused = adminState.status === 'paused';
    const isLobby = adminState.status === 'lobby';
    const isExplanation = adminState.status === 'explanation';
    const isFinished = adminState.status === 'finished';

    container.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 1rem; margin-bottom: 1.5rem;">
        <div>
          <span class="room-code-tag">${adminState.code}</span>
          <h2 style="font-family: var(--font-display); font-size: 1.4rem; color: #fff; margin-top: 4px;">
            ${this.escapeHtml(adminState.name)}
          </h2>
          <span style="font-size: 0.85rem; color: var(--text-muted);">
            Modo: <strong>${adminState.mode.toUpperCase()}</strong> | Status: <strong style="color: #38bdf8;">${adminState.status}</strong>
          </span>
        </div>

        <div style="display: flex; gap: 0.6rem; flex-wrap: wrap;">
          ${isLobby ? `
            <button class="btn btn-emerald" onclick="app.adminRoomAction('start')">▶ Iniciar Competição</button>
          ` : ''}

          ${isRunning ? `
            <button class="btn btn-gold" onclick="app.adminRoomAction('pause')">⏸ Pausar</button>
            <button class="btn btn-primary" onclick="app.adminRoomAction('advance')">⏩ Fechar Rodada / Avançar</button>
          ` : ''}

          ${isPaused ? `
            <button class="btn btn-emerald" onclick="app.adminRoomAction('resume')">▶ Retomar</button>
            <button class="btn btn-primary" onclick="app.adminRoomAction('advance')">⏩ Avançar</button>
          ` : ''}

          ${isExplanation ? `
            <button class="btn btn-primary" onclick="app.adminRoomAction('advance')">⏩ Próxima Pergunta →</button>
          ` : ''}

          ${!isFinished ? `
            <button class="btn btn-danger btn-sm" onclick="app.adminRoomAction('finish')">⏹ Encerrar</button>
          ` : ''}
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
        <div class="glass" style="padding: 1.25rem;">
          <h4 style="color: #fff; margin-bottom: 0.75rem;">Status da Rodada Atual</h4>
          ${round ? `
            <p><strong>Pergunta:</strong> ${round.questionIndex + 1} de ${adminState.totalQuestions}</p>
            <p><strong>Tema:</strong> ${q ? q.category : 'N/A'}</p>
            <p><strong>Respostas Recebidas:</strong> <span style="color: #34d399; font-weight: 700;">${round.answersCount}</span> / ${round.totalExpected}</p>
            ${q ? `
              <div style="margin-top: 1rem; background: rgba(15, 23, 42, 0.6); padding: 0.85rem; border-radius: var(--radius-sm);">
                <div style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 4px;">Enunciado:</div>
                <div style="font-size: 0.9rem; color: #fff;">${this.escapeHtml(q.question)}</div>
                <div style="font-size: 0.82rem; color: #34d399; margin-top: 6px;">
                  Gabarito: <strong>${['A', 'B', 'C', 'D'][q.correctAnswer]}</strong>) ${this.escapeHtml(q.options[q.correctAnswer] || '')}
                </div>
              </div>
            ` : ''}
          ` : `<p style="color: var(--text-dim);">A competição ainda não foi iniciada.</p>`}
        </div>

        <div class="glass" style="padding: 1.25rem;">
          <h4 style="color: #fff; margin-bottom: 0.75rem;">Ranking da Sala em Tempo Real</h4>
          ${this.renderLeaderboardTableSnippet(adminState.leaderboard || [])}
        </div>
      </div>
    `;
  }

  async adminRoomAction(action) {
    if (!this.adminSelectedRoomId) return;
    try {
      const res = await fetch(`/api/admin/rooms/${this.adminSelectedRoomId}/${action}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.adminToken}`
        }
      });
      const data = await res.json();
      if (data.error) alert(data.error);
      this.fetchAdminRoomState(this.adminSelectedRoomId);
      this.refreshAdminRooms();
    } catch (e) {
      alert('Erro na ação do anfitrião: ' + e.message);
    }
  }

  async deleteAdminRoom(roomId) {
    if (!confirm('Tem certeza que deseja excluir esta sala?')) return;
    try {
      await fetch(`/api/admin/rooms/${roomId}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${this.adminToken}` }
      });
      this.refreshAdminRooms();
    } catch (e) {
      alert('Erro ao excluir sala: ' + e.message);
    }
  }

  // --- Admin Create Room ---
  openCreateRoomModal() {
    this.openModal('createRoomModal');
  }

  async handleCreateRoomSubmit() {
    const name = document.getElementById('newRoomName').value.trim();
    const description = document.getElementById('newRoomDesc').value.trim();
    const mode = document.getElementById('newRoomMode').value;
    const timeLimit = parseInt(document.getElementById('newRoomTimeLimit').value) || 180;
    const revealExplanation = document.getElementById('newRoomRevealExplanation').checked;
    const qCountEl = document.getElementById('newRoomQuestionCount');
    const questionCount = qCountEl ? qCountEl.value : 15;
    const diffEl = document.getElementById('newRoomDifficulty');
    const difficulty = diffEl ? diffEl.value : 'all';

    if (!name) return alert('Informe o nome da competição.');

    try {
      const res = await fetch('/api/admin/rooms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.adminToken}`
        },
        body: JSON.stringify({ name, description, mode, timeLimit, revealExplanation, questionCount, difficulty })
      });
      const data = await res.json();
      if (data.success) {
        this.closeModal('createRoomModal');
        this.refreshAdminRooms();
      } else {
        alert(data.error || 'Erro ao criar sala.');
      }
    } catch (e) {
      alert(e.message);
    }
  }

  // --- Admin Questions Management ---
  async loadAdminQuestions() {
    const container = document.getElementById('adminQuestionsList');
    if (!container) return;

    try {
      const res = await fetch('/api/questions');
      const questions = await res.json();

      container.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
          <h3 style="color: #fff; font-size: 1.25rem;">Banco Cadastrado (${questions.length} questões)</h3>
          <div style="display: flex; gap: 0.5rem;">
            <button class="btn btn-secondary btn-sm" onclick="app.resetDefaultQuestions()">
              🔄 Restaurar Padrões do Grupo 5
            </button>
            <button class="btn btn-primary btn-sm" onclick="app.openNewQuestionModal()">
              + Nova Pergunta
            </button>
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 1rem;">
          ${questions.map((q, idx) => `
            <div class="glass" style="padding: 1.25rem; display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem;">
              <div style="flex: 1;">
                <span class="question-theme-tag">${q.category}</span>
                <span class="room-mode-badge ${q.difficulty === 'Difícil' ? 'badge-duo' : 'badge-solo'}">
                  ${q.difficulty} • ${q.points} pts
                </span>
                <h4 style="font-size: 1rem; color: #fff; margin: 0.4rem 0;">${idx + 1}. ${this.escapeHtml(q.question)}</h4>
                <div style="font-size: 0.82rem; color: #34d399;">
                  Gabarito: [${['A', 'B', 'C', 'D'][q.correctAnswer]}] ${this.escapeHtml(q.options[q.correctAnswer])}
                </div>
              </div>

              <div style="display: flex; gap: 0.5rem;">
                <button class="btn btn-secondary btn-sm" onclick="app.openEditQuestionModal('${q.id}')">✏️</button>
                <button class="btn btn-danger btn-sm" onclick="app.deleteQuestion('${q.id}')">🗑️</button>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    } catch (e) {
      container.innerHTML = `<p style="color: red;">Erro ao listar questões.</p>`;
    }
  }

  openNewQuestionModal() {
    this.editingQuestionId = null;
    document.getElementById('questionModalTitle').innerText = 'Cadastrar Nova Questão de Embriologia';
    document.getElementById('questionForm').reset();
    this.openModal('questionModal');
  }

  async openEditQuestionModal(qId) {
    this.editingQuestionId = qId;
    document.getElementById('questionModalTitle').innerText = 'Editar Questão de Embriologia';

    try {
      const res = await fetch('/api/questions');
      const questions = await res.json();
      const q = questions.find(item => item.id === qId);
      if (!q) return;

      document.getElementById('qCategory').value = q.category;
      document.getElementById('qDifficulty').value = q.difficulty;
      document.getElementById('qTheme').value = q.theme || '';
      document.getElementById('qQuestion').value = q.question;
      document.getElementById('qOpt0').value = q.options[0] || '';
      document.getElementById('qOpt1').value = q.options[1] || '';
      document.getElementById('qOpt2').value = q.options[2] || '';
      document.getElementById('qOpt3').value = q.options[3] || '';
      document.getElementById('qCorrect').value = q.correctAnswer;
      document.getElementById('qExplanation').value = q.scientificExplanation || '';
      document.getElementById('qCuriosity').value = q.curiosity || '';
      document.getElementById('qDifference').value = q.difference || '';
      document.getElementById('qReference').value = q.reference || '';

      this.openModal('questionModal');
    } catch (e) {}
  }

  async handleSaveQuestionSubmit() {
    const qData = {
      category: document.getElementById('qCategory').value,
      difficulty: document.getElementById('qDifficulty').value,
      points: document.getElementById('qDifficulty').value === 'Difícil' ? 20 : 10,
      theme: document.getElementById('qTheme').value.trim(),
      question: document.getElementById('qQuestion').value.trim(),
      options: [
        document.getElementById('qOpt0').value.trim(),
        document.getElementById('qOpt1').value.trim(),
        document.getElementById('qOpt2').value.trim(),
        document.getElementById('qOpt3').value.trim()
      ],
      correctAnswer: parseInt(document.getElementById('qCorrect').value),
      scientificExplanation: document.getElementById('qExplanation').value.trim(),
      curiosity: document.getElementById('qCuriosity').value.trim(),
      difference: document.getElementById('qDifference').value.trim(),
      reference: document.getElementById('qReference').value.trim()
    };

    const method = this.editingQuestionId ? 'PUT' : 'POST';
    const url = this.editingQuestionId ? `/api/admin/questions/${this.editingQuestionId}` : '/api/admin/questions';

    try {
      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.adminToken}`
        },
        body: JSON.stringify(qData)
      });
      const data = await res.json();
      if (data.success) {
        this.closeModal('questionModal');
        this.loadAdminQuestions();
      } else {
        alert(data.error || 'Erro ao salvar pergunta.');
      }
    } catch (e) {
      alert(e.message);
    }
  }

  async deleteQuestion(qId) {
    if (!confirm('Deseja excluir esta pergunta do banco?')) return;
    try {
      await fetch(`/api/admin/questions/${qId}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${this.adminToken}` }
      });
      this.loadAdminQuestions();
    } catch (e) {
      alert(e.message);
    }
  }

  async resetDefaultQuestions() {
    if (!confirm('Restaurar o banco de perguntas para o conteúdo oficial de Embriologia do Grupo 5?')) return;
    try {
      await fetch('/api/admin/questions/reset-defaults', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${this.adminToken}` }
      });
      alert('Banco restaurado com sucesso!');
      this.loadAdminQuestions();
    } catch (e) {
      alert(e.message);
    }
  }

  // --- Admin History and Export ---
  async loadAdminHistory() {
    const container = document.getElementById('adminHistoryContainer');
    if (!container) return;

    try {
      const res = await fetch('/api/history');
      const history = await res.json();

      container.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 0.5rem;">
          <h3 style="color: #fff; font-size: 1.25rem;">Histórico de Torneios Realizados</h3>
          <div style="display: flex; gap: 0.5rem;">
            <a href="/api/admin/export/csv?adminToken=${this.adminToken}" class="btn btn-secondary btn-sm" download>
              📥 Exportar CSV (Excel)
            </a>
            <a href="/api/admin/export/json?adminToken=${this.adminToken}" class="btn btn-secondary btn-sm" download>
              📥 Exportar JSON
            </a>
          </div>
        </div>

        ${(!history || history.length === 0) ? `
          <p style="color: var(--text-dim);">Nenhuma competição encerrada registrada no histórico ainda.</p>
        ` : `
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            ${history.map(h => `
              <div class="glass" style="padding: 1.25rem;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                  <strong style="color: #fff; font-size: 1.1rem;">${this.escapeHtml(h.name)}</strong>
                  <span style="font-size: 0.8rem; color: var(--text-dim);">${new Date(h.finishedAt).toLocaleString('pt-BR')}</span>
                </div>
                <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.75rem;">
                  Modo: <strong>${h.mode.toUpperCase()}</strong> • Questões: ${h.totalQuestions} • Campeão: <strong style="color: #fbbf24;">${h.leaderboard && h.leaderboard[0] ? h.leaderboard[0].name : 'N/A'}</strong> (${h.leaderboard && h.leaderboard[0] ? h.leaderboard[0].score : 0} pts)
                </p>
              </div>
            `).join('')}
          </div>
        `}
      `;
    } catch (e) {
      container.innerHTML = `<p style="color: red;">Erro ao carregar histórico.</p>`;
    }
  }

  // --- Helper utility ---
  escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
}

// Global instance initialization
window.addEventListener('DOMContentLoaded', () => {
  window.app = new EmbryoApp();
});
