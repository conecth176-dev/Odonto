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

    // Limpa salas fantasmas antigas do localStorage para sempre iniciar com tela limpa
    try {
      localStorage.removeItem('g5_local_rooms');
    } catch (e) {}

    this.setupEventListeners();
    this.renderAudioButton();
    this.fetchInfo();

    // Pre-warm SpeechSynthesis voices for realistic natural human voice
    if ('speechSynthesis' in window) {
      try { window.speechSynthesis.getVoices(); } catch (e) {}
      window.speechSynthesis.onvoiceschanged = () => {
        try { window.speechSynthesis.getVoices(); } catch (e) {}
      };
    }

    // Direct navigation check (#admin, /admin, #bank)
    const urlCheck = (window.location.pathname + window.location.hash).toLowerCase();
    if (urlCheck.includes('admin')) {
      this.openAdminView();
    } else if (urlCheck.includes('bank') || urlCheck.includes('questoes')) {
      this.openBankProtected();
    } else {
      // Show mandatory rules modal with 15 seconds timer on entry for students
      this.showRulesModal(true);
    }
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

    // Quem Sou Eu join form
    const qseForm = document.getElementById('qseJoinForm');
    if (qseForm) {
      qseForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleQseJoinSubmit();
      });
    }

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
    const views = ['home', 'lobby', 'arena', 'results', 'admin', 'bank', 'qse'];
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

      <div style="display: flex; justify-content: flex-end; align-items: center; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 1.25rem; margin-top: 1.5rem;">
        <button class="btn btn-secondary btn-sm" onclick="app.closeModal('topicDetailModal');">
          Fechar ✕
        </button>
      </div>
    `;

    this.openModal('topicDetailModal');
  }

  // --- API & State fetching ---
  async fetchInfo() {
    try {
      const res = await fetch('/api/info');
      if (res.ok) {
        const data = await res.json();
        const countEl = document.getElementById('headerQuestionCount');
        if (countEl) countEl.innerText = `${data.totalQuestions} Questões Científicas`;
        return;
      }
    } catch (e) {}

    const countEl = document.getElementById('headerQuestionCount');
    if (countEl) countEl.innerText = '200 Questões Científicas';
  }

  async fetchRooms() {
    try {
      const res = await fetch('/api/rooms');
      const contentType = res.headers.get('content-type') || '';
      if (res.ok && contentType.includes('application/json')) {
        const rooms = await res.json();
        if (Array.isArray(rooms)) {
          this.renderRoomsList(rooms);
          return;
        }
      }
    } catch (e) {}

    // Check if there are local rooms saved in localStorage
    let localRooms = [];
    try {
      const stored = localStorage.getItem('g5_local_rooms');
      if (stored) {
        const parsed = JSON.parse(stored);
        localRooms = (parsed || []).filter(r => r.id !== 'room_solo_offline' && r.code !== 'SOLO-G5');
      }
    } catch (e) {}

    // Nenhuma sala fictícia: mostra apenas lista limpa
    this.renderRoomsList(localRooms);
  }

  handleRoomListUpdate(rooms) {
    this.renderRoomsList(rooms);
    if (this.currentView === 'admin' && this.adminToken) {
      this.renderAdminRoomsList(rooms);
    }
  }

  renderRoomsList(rooms) {
    this.roomsList = rooms || [];
    const container = document.getElementById('roomsListContainer');
    if (!container) return;

    if (!rooms || rooms.length === 0) {
      container.innerHTML = `
        <div class="glass" style="grid-column: 1/-1; padding: 2.5rem; text-align: center;">
          <div style="font-size: 2.2rem; margin-bottom: 0.5rem;">🚪</div>
          <p style="color: var(--text-muted); font-size: 1.1rem; margin-bottom: 0.5rem; font-weight: 600;">Nenhuma sala aberta no momento.</p>
          <p style="font-size: 0.9rem; color: var(--text-dim);">Aguarde o anfitrião do Grupo 5 criar uma sala ou acesse o Painel Administrativo para criar uma nova competição.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = rooms.map(r => {
      const isStarted = r.status && r.status !== 'lobby' && r.status !== 'waiting' && r.status !== 'finished';
      const isFinished = r.status === 'finished';

      const statusLabels = {
        lobby: 'Aguardando Início',
        in_progress: '⚡ Sala Inicializada!',
        explanation: '📖 Sala Inicializada!',
        paused: '⏸️ Sala Inicializada! (Pausada)',
        finished: '🏁 Finalizada'
      };
      const statusClass = isStarted ? 'status-in_progress' : `status-${r.status}`;
      let modeLabel = r.mode === 'duo' ? '👥 Modo Dupla' : '👤 Modo Solo';
      let badgeClass = r.mode === 'duo' ? 'badge-duo' : 'badge-solo';
      let countLabel = r.mode === 'duo' ? `${r.teamCount || 0} duplas` : `${r.participantCount || 0} alunos`;

      if (r.mode === 'quem_sou_eu') {
        modeLabel = '🧠🥧 QUEM SOU EU?';
        badgeClass = 'badge-qse';
        countLabel = `${r.participantCount || 0} competidores`;
      }

      return `
        <div class="glass room-card" style="${isStarted ? 'border-color: rgba(239, 68, 68, 0.4);' : ''}">
          <div>
            <div class="room-header">
              <span class="room-code-tag">${r.code}</span>
              <span class="room-mode-badge ${badgeClass}">${modeLabel}</span>
            </div>
            <h3 class="room-name">${this.escapeHtml(r.name)}</h3>
            <p class="room-desc">${this.escapeHtml(r.description || 'Sem descrição')}</p>
            ${isStarted ? `
              <div style="background: rgba(239, 68, 68, 0.15); border: 1px solid rgba(239, 68, 68, 0.35); color: #fca5a5; font-size: 0.8rem; font-weight: 700; padding: 0.4rem 0.65rem; border-radius: 6px; margin-top: 0.5rem; display: flex; align-items: center; gap: 0.4rem;">
                <span>⚠️ Sala Inicializada! Entrada bloqueada.</span>
              </div>
            ` : ''}
          </div>

          <div>
            <div class="room-meta">
              <div class="meta-item">
                <span class="status-indicator ${statusClass}"></span>
                <span style="${isStarted ? 'color: #fca5a5; font-weight: 700;' : ''}">${statusLabels[r.status] || r.status}</span>
              </div>
              <div class="meta-item">
                <span>📚 ${r.questionCount || r.totalQuestions || 15} questões</span>
              </div>
              <div class="meta-item">
                <span>⚡ ${r.timeLimit}s</span>
              </div>
              <div class="meta-item">
                <span>👥 ${countLabel}</span>
              </div>
            </div>

            ${isFinished ? `
              <button class="btn btn-secondary btn-block btn-sm" onclick="app.openJoinModal('${r.id}', '${r.mode}', '${this.escapeHtml(r.name)}')">
                Ver Resultados 🏆 →
              </button>
            ` : (isStarted ? `
              <button class="btn btn-secondary btn-block btn-sm" disabled style="opacity: 0.65; cursor: not-allowed; background: rgba(239, 68, 68, 0.2); border-color: rgba(239, 68, 68, 0.4); color: #fca5a5; font-weight: 600;">
                🔒 Sala Inicializada
              </button>
            ` : `
              <button class="btn btn-primary btn-block btn-sm" onclick="app.openJoinModal('${r.id}', '${r.mode}', '${this.escapeHtml(r.name)}')">
                Entrar na Sala 🚪 →
              </button>
            `)}
            ${r.mode === 'quem_sou_eu' ? `
              <button class="btn btn-secondary btn-block btn-sm" style="margin-top: 0.45rem; border-color: rgba(56, 189, 248, 0.4); color: #38bdf8;" onclick="window.open('/telao.html?room=${r.id}', '_blank')">
                🖥️ ABRIR TELÃO DO AUDITÓRIO ↗
              </button>
            ` : ''}
          </div>
        </div>
      `;
    }).join('');
  }

  // --- Join Modal flow ---
  openJoinModal(roomId, mode, roomName) {
    const room = (this.roomsList || []).find(r => r.id === roomId);
    if (room && room.status && room.status !== 'lobby' && room.status !== 'waiting' && room.status !== 'finished') {
      alert('⚠️ Sala Inicializada!\nA competição já começou e a entrada de novos participantes está bloqueada.');
      return;
    }

    this.targetJoinRoomId = roomId;
    this.targetJoinMode = mode;

    document.getElementById('joinModalTitle').innerText = roomName;
    document.getElementById('joinModalSubtitle').innerText = mode === 'duo' ? 'Competição Cooperativa em Duplas' : (mode === 'quem_sou_eu' ? 'Minigame Interativo com Botão e Telão 🧠🥧' : 'Competição Individual Solo');

    if (mode === 'solo') {
      document.getElementById('soloJoinSection').style.display = 'block';
      document.getElementById('duoJoinSection').style.display = 'none';
      if (document.getElementById('qseJoinSection')) document.getElementById('qseJoinSection').style.display = 'none';
    } else if (mode === 'quem_sou_eu') {
      document.getElementById('soloJoinSection').style.display = 'none';
      document.getElementById('duoJoinSection').style.display = 'none';
      if (document.getElementById('qseJoinSection')) document.getElementById('qseJoinSection').style.display = 'block';
    } else {
      document.getElementById('soloJoinSection').style.display = 'none';
      document.getElementById('duoJoinSection').style.display = 'block';
      if (document.getElementById('qseJoinSection')) document.getElementById('qseJoinSection').style.display = 'none';
      // Default to create team tab
      document.getElementById('tabCreateTeam').click();
    }

    this.openModal('joinModal');
  }

  async handleSoloJoinSubmit() {
    const name = document.getElementById('soloParticipantName').value.trim();
    if (!name) return alert('Por favor, informe seu nome ou identificação.');

    // If running on static host (like Netlify) without backend WebSockets:
    if (!window.socketClient.isConnected) {
      return this.startOfflineSoloMatch(name);
    }

    const res = await window.socketClient.joinSolo(this.targetJoinRoomId, name);
    if (res.error) {
      return alert(res.error);
    }

    this.saveSession(this.targetJoinRoomId, res.participant.id);
    this.currentParticipant = res.participant;
    this.closeModal('joinModal');
    this.handleRoomStateUpdate(res.room);
  }

  async startOfflineSoloMatch(name) {
    this.closeModal('joinModal');
    let questions = this.studyBankQuestions;
    if (!questions) {
      try {
        const res = await fetch('/data/questions.json');
        if (res.ok) questions = await res.json();
      } catch (e) {}
    }
    if (!questions || questions.length === 0) {
      return alert('Não foi possível carregar as questões para a partida.');
    }

    // Pick 15 questions
    const shuffled = [...questions].sort(() => 0.5 - Math.random()).slice(0, 15);
    const participantId = 'solo_' + Date.now();
    this.currentParticipant = { id: participantId, name, score: 0 };

    this.offlineMatch = {
      participantId,
      participantName: name,
      score: 0,
      correctCount: 0,
      totalCorrectTime: 0,
      questions: shuffled,
      currentIndex: 0,
      timeLimit: 180
    };

    this.startOfflineRound(0);
  }

  startOfflineRound(index) {
    if (!this.offlineMatch || index >= this.offlineMatch.questions.length) {
      return this.finishOfflineMatch();
    }
    const q = this.offlineMatch.questions[index];
    this.offlineMatch.currentIndex = index;
    this.selectedOptionIndex = null;
    this.hasAnsweredCurrentRound = false;

    const now = Date.now();
    const duration = this.offlineMatch.timeLimit;
    const roomState = {
      id: 'room_solo_offline',
      name: 'Desafio Solo de Embriologia — Grupo 5',
      mode: 'solo',
      status: 'in_progress',
      totalQuestions: this.offlineMatch.questions.length,
      currentQuestionIndex: index,
      timeLimit: duration,
      question: {
        id: q.id,
        category: q.category,
        theme: q.theme,
        question: q.question,
        options: q.options,
        difficulty: q.difficulty,
        points: q.points || 10,
        correctAnswer: null,
        scientificExplanation: null
      },
      currentRound: {
        questionIndex: index,
        startTime: now,
        endTime: now + (duration * 1000),
        duration: duration,
        isClosed: false
      },
      me: this.currentParticipant,
      myTurn: true,
      myAnswer: null,
      leaderboard: [{
        rank: 1,
        name: this.offlineMatch.participantName,
        score: this.offlineMatch.score,
        correctCount: this.offlineMatch.correctCount
      }]
    };

    this.currentRoom = roomState;
    this.switchView('arena');
    this.renderArena(roomState);
  }

  finishOfflineMatch() {
    const finalScore = this.offlineMatch ? this.offlineMatch.score : 0;
    const finalName = this.offlineMatch ? this.offlineMatch.participantName : 'Participante';
    const finalCorrect = this.offlineMatch ? this.offlineMatch.correctCount : 0;
    this.offlineMatch = null;

    this.currentRoom = {
      status: 'finished',
      mode: 'solo',
      leaderboard: [
        { rank: 1, name: finalName, score: finalScore, correctCount: finalCorrect, isSolo: true }
      ]
    };
    this.switchView('results');
    this.renderResults(this.currentRoom);
  }

  async startOfflineDuoMatch(teamName, memberA, memberB) {
    this.closeModal('joinModal');
    let questions = this.studyBankQuestions;
    if (!questions) {
      try {
        const res = await fetch('/data/questions.json');
        if (res.ok) questions = await res.json();
      } catch (e) {}
    }
    if (!questions || questions.length === 0) {
      return alert('Não foi possível carregar as questões para a partida.');
    }

    const shuffled = [...questions].sort(() => 0.5 - Math.random()).slice(0, 15);
    const participantId = 'part_' + Date.now();
    this.currentParticipant = { id: participantId, name: memberA, role: 'member_A', score: 0 };
    this.currentTeam = {
      code: 'DP-' + Math.floor(1000 + Math.random() * 9000),
      name: teamName,
      memberA,
      memberB,
      score: 0
    };

    this.offlineDuoMatch = {
      teamName,
      memberA,
      memberB,
      score: 0,
      correctCount: 0,
      totalCorrectTime: 0,
      questions: shuffled,
      currentIndex: 0,
      timeLimit: 180
    };

    this.startOfflineDuoRound(0);
  }

  startOfflineDuoRound(index) {
    if (!this.offlineDuoMatch || index >= this.offlineDuoMatch.questions.length) {
      return this.finishOfflineDuoMatch();
    }
    const q = this.offlineDuoMatch.questions[index];
    this.offlineDuoMatch.currentIndex = index;
    this.selectedOptionIndex = null;
    this.hasAnsweredCurrentRound = false;

    const now = Date.now();
    const duration = this.offlineDuoMatch.timeLimit;
    const currentTurn = (index % 2 === 0) ? 'A' : 'B';
    const activeMemberName = (currentTurn === 'A') ? this.offlineDuoMatch.memberA : this.offlineDuoMatch.memberB;

    const roomState = {
      id: 'room_duo_offline',
      name: `Desafio em Dupla: ${this.offlineDuoMatch.teamName}`,
      mode: 'duo',
      status: 'in_progress',
      totalQuestions: this.offlineDuoMatch.questions.length,
      currentQuestionIndex: index,
      timeLimit: duration,
      question: {
        id: q.id,
        category: q.category,
        theme: q.theme,
        question: q.question,
        options: q.options,
        difficulty: q.difficulty,
        points: q.points || (q.difficulty === 'Difícil' ? 30 : (q.difficulty === 'Média' ? 20 : 10)),
        correctAnswer: null,
        scientificExplanation: null
      },
      currentRound: {
        questionIndex: index,
        startTime: now,
        endTime: now + (duration * 1000),
        duration: duration,
        isClosed: false
      },
      me: {
        id: 'duo_user',
        name: activeMemberName,
        role: currentTurn === 'A' ? 'member_A' : 'member_B'
      },
      myTeam: {
        code: this.currentTeam ? this.currentTeam.code : 'DP-LOCAL',
        name: this.offlineDuoMatch.teamName,
        memberA: this.offlineDuoMatch.memberA,
        memberB: this.offlineDuoMatch.memberB,
        score: this.offlineDuoMatch.score
      },
      myTurn: true,
      myAnswer: null,
      leaderboard: [{
        rank: 1,
        name: this.offlineDuoMatch.teamName,
        score: this.offlineDuoMatch.score,
        correctCount: this.offlineDuoMatch.correctCount
      }]
    };

    this.currentRoom = roomState;
    this.switchView('arena');
    this.renderArena(roomState);
  }

  finishOfflineDuoMatch() {
    const finalScore = this.offlineDuoMatch ? this.offlineDuoMatch.score : 0;
    const teamName = this.offlineDuoMatch ? this.offlineDuoMatch.teamName : 'Dupla';
    const finalCorrect = this.offlineDuoMatch ? this.offlineDuoMatch.correctCount : 0;
    this.offlineDuoMatch = null;

    this.currentRoom = {
      status: 'finished',
      mode: 'duo',
      leaderboard: [
        { rank: 1, name: teamName, score: finalScore, correctCount: finalCorrect, isSolo: false }
      ]
    };
    this.switchView('results');
    this.renderResults(this.currentRoom);
  }

  async handleDuoCreateSubmit() {
    const teamName = document.getElementById('duoTeamName').value.trim();
    const teamPassword = document.getElementById('duoTeamPassword').value.trim();
    const creatorName = document.getElementById('duoCreatorName').value.trim();

    if (!teamName || !teamPassword || !creatorName) {
      return alert('Preencha todos os campos para criar a dupla.');
    }

    if (!window.socketClient.isConnected) {
      const partnerName = prompt(`Modo Local / Apresentação no Netlify\n\nDupla: ${teamName}\nIntegrante A: ${creatorName}\n\nInforme o nome do Integrante B para a alternância oficial de turnos:`);
      if (!partnerName) return;
      return this.startOfflineDuoMatch(teamName, creatorName, partnerName.trim());
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

    if (!window.socketClient.isConnected) {
      return alert('No modo local estático (Netlify), utilize a opção "Criar Nova Dupla" para iniciar a partida diretamente na tela.');
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
    this.selectedOptionIndex = null;
    this.lastRoundIndex = -1;
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

    if (roomState.me) {
      this.currentParticipant = roomState.me;
    }
    if (roomState.myTeam) {
      this.currentTeam = roomState.myTeam;
    }

    // Branch for QUEM SOU EU minigame
    if (roomState.mode === 'quem_sou_eu') {
      this.switchView('qse');
      this.renderQse(roomState);
      return;
    }

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

      ${duoInfoHtml}

      <div class="glass" style="padding: 2.25rem 2rem; text-align: center; margin-bottom: 2rem;">
        <div style="display: inline-block; width: 64px; height: 64px; border-radius: 50%; background: rgba(6, 182, 212, 0.15); border: 2px solid var(--primary-cyan); display: flex; align-items: center; justify-content: center; font-size: 1.8rem; margin: 0 auto 1.25rem; animation: pulse 2s infinite;">
          🧬
        </div>
        <h3 style="font-size: 1.35rem; margin-bottom: 0.5rem; color: #fff;">Sala de Espera Ativa</h3>
        <p style="color: var(--text-muted); font-size: 0.98rem; max-width: 520px; margin: 0 auto 1.5rem; line-height: 1.6;">
          Você está pronto(a) e conectado(a)! Aguarde o anfitrião liberar o início da competição pelo <strong>Painel Administrativo</strong>.
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
        <button class="btn btn-secondary btn-sm" onclick="app.leaveRoom()">
          ← Sair desta Sala
        </button>
      </div>
    `;
  }

  async quickStartRoomFromLobby(roomId) {
    if (!this.adminToken) {
      const pass = prompt('Digite a senha de administrador/anfitrião:');
      if (!pass) return;

      try {
        let data = null;
        try {
          const res = await fetch('/api/admin/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ password: pass.trim() })
          });
          const contentType = res.headers.get('content-type') || '';
          if (res.ok && contentType.includes('application/json')) {
            const parsed = await res.json();
            if (parsed && typeof parsed === 'object' && !Array.isArray(parsed) && parsed.success) {
              data = parsed;
            }
          }
        } catch (e) {}

        if (!data && (pass.trim() === 'Dev.Tawa' || pass.trim() === 'admin123')) {
          data = { success: true, token: 'offline_token_g5_' + Date.now() };
        }

        if (!data || !data.success) {
          return alert('Senha incorreta!');
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
          <div class="submission-status" style="color: #34d399; background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); padding: 0.85rem 1rem; border-radius: var(--radius-sm); text-align: center;">
            <span>✅ <strong>Resposta da dupla confirmada (${myAnswer.timeUsed.toFixed(1)}s)!</strong> Aguardando o encerramento da rodada...</span>
          </div>
        `;
      } else if (room.mode === 'duo' && !room.myTurn) {
        const activeRoleText = round && round.activeDuoRole === 'member_A' ? 'Integrante A' : 'Integrante B';
        actionText = `
          <div class="submission-status" style="color: #fbbf24; background: rgba(245, 158, 11, 0.1); border: 1px solid rgba(245, 158, 11, 0.3); padding: 0.85rem 1rem; border-radius: var(--radius-sm); text-align: center;">
            <span>👁️ <strong>Modo Acompanhamento:</strong> É a vez do seu parceiro (${activeRoleText}) responder pela dupla!</span>
            <p style="font-size: 0.82rem; color: #cbd5e1; margin-top: 4px; margin-bottom: 0;">Você pode ler o enunciado e as opções, mas apenas o seu parceiro pode selecionar e confirmar a resposta nesta pergunta.</p>
          </div>
        `;
      } else {
        actionText = `
          <div class="arena-actions" style="width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap;">
            <div style="font-size: 0.88rem; color: var(--text-muted);">
              ${this.selectedOptionIndex === null ? '👈 Selecione uma alternativa acima e confirme:' : '✅ Alternativa selecionada! Clique para confirmar:'}
            </div>
            <button class="btn btn-primary" id="btnConfirmAnswer" onclick="app.confirmAnswer()" ${this.selectedOptionIndex === null ? 'disabled' : ''} style="font-size: 1rem; padding: 0.85rem 1.75rem;">
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
    if (!this.currentRoom) return;
    if (this.currentRoom.status === 'explanation') return;
    if (this.currentRoom.myAnswer) return;
    if (this.currentRoom.mode === 'duo' && !this.currentRoom.myTurn) {
      alert('Nesta rodada é a vez do seu parceiro de dupla responder!');
      return;
    }

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
    if (confirmBtn) {
      confirmBtn.disabled = false;
      confirmBtn.style.opacity = '1';
      confirmBtn.style.cursor = 'pointer';
    }
  }

  async confirmAnswer() {
    if (this.selectedOptionIndex === null) {
      alert('Por favor, selecione uma alternativa antes de confirmar!');
      return;
    }
    if (!this.currentRoom) return;

    const participantId = (this.currentParticipant && this.currentParticipant.id) || 
                          (this.currentRoom.me && this.currentRoom.me.id);
    if (!participantId) {
      alert('Identificação do participante não encontrada. Por favor, recarregue a página.');
      return;
    }

    const confirmBtn = document.getElementById('btnConfirmAnswer');
    if (confirmBtn) {
      confirmBtn.disabled = true;
      confirmBtn.innerHTML = 'Enviando... ⏳';
    }

    // Static host (Netlify) Offline Match execution (Solo)
    if (!window.socketClient.isConnected && this.offlineMatch) {
      const q = this.offlineMatch.questions[this.offlineMatch.currentIndex];
      const isCorrect = parseInt(this.selectedOptionIndex) === q.correctAnswer;
      const now = Date.now();
      const timeUsed = Math.min(this.offlineMatch.timeLimit, Math.max(0, (now - this.currentRoom.currentRound.startTime) / 1000));
      const maxPts = q.points || (q.difficulty === 'Difícil' ? 30 : q.difficulty === 'Média' ? 20 : 10);
      let points = 0;
      if (isCorrect) {
        const ratio = timeUsed / this.offlineMatch.timeLimit;
        points = Math.round(maxPts * (1 - 0.5 * ratio));
        this.offlineMatch.score += points;
        this.offlineMatch.correctCount += 1;
        this.offlineMatch.totalCorrectTime += timeUsed;
      }

      this.currentRoom.myAnswer = {
        optionIndex: this.selectedOptionIndex,
        isCorrect,
        points,
        timeUsed
      };
      this.currentRoom.status = 'explanation';
      this.currentRoom.explanationDuration = 10;
      this.currentRoom.explanationEndsAt = Date.now() + 10000;
      this.currentRoom.question.correctAnswer = q.correctAnswer;
      this.currentRoom.question.scientificExplanation = q.scientificExplanation;
      this.currentRoom.question.curiosity = q.curiosity;
      this.currentRoom.question.difference = q.difference;
      this.currentRoom.question.reference = q.reference;
      this.currentRoom.leaderboard[0].score = this.offlineMatch.score;
      this.currentRoom.leaderboard[0].correctCount = this.offlineMatch.correctCount;

      this.renderArena(this.currentRoom);
      if (isCorrect) window.soundManager.playCorrect();
      else window.soundManager.playIncorrect();

      setTimeout(() => {
        if (this.offlineMatch) {
          this.startOfflineRound(this.offlineMatch.currentIndex + 1);
        }
      }, 10000);
      return;
    }

    // Static host (Netlify) Offline Match execution (Duo)
    if (!window.socketClient.isConnected && this.offlineDuoMatch) {
      const q = this.offlineDuoMatch.questions[this.offlineDuoMatch.currentIndex];
      const isCorrect = parseInt(this.selectedOptionIndex) === q.correctAnswer;
      const now = Date.now();
      const startTime = (this.currentRoom.currentRound && this.currentRoom.currentRound.startTime) ? this.currentRoom.currentRound.startTime : now;
      const timeUsed = Math.min(this.offlineDuoMatch.timeLimit, Math.max(0, (now - startTime) / 1000));
      const maxPts = q.points || (q.difficulty === 'Difícil' ? 30 : q.difficulty === 'Média' ? 20 : 10);
      let points = 0;
      if (isCorrect) {
        const ratio = timeUsed / this.offlineDuoMatch.timeLimit;
        points = Math.round(maxPts * (1 - 0.5 * ratio));
        this.offlineDuoMatch.score += points;
        this.offlineDuoMatch.correctCount += 1;
        this.offlineDuoMatch.totalCorrectTime += timeUsed;
      }

      this.currentRoom.myAnswer = {
        optionIndex: this.selectedOptionIndex,
        isCorrect,
        points,
        timeUsed
      };
      this.currentRoom.status = 'explanation';
      this.currentRoom.explanationDuration = 10;
      this.currentRoom.explanationEndsAt = Date.now() + 10000;
      this.currentRoom.question.correctAnswer = q.correctAnswer;
      this.currentRoom.question.scientificExplanation = q.scientificExplanation;
      this.currentRoom.question.curiosity = q.curiosity;
      this.currentRoom.question.difference = q.difference;
      this.currentRoom.question.reference = q.reference;
      if (this.currentRoom.leaderboard && this.currentRoom.leaderboard[0]) {
        this.currentRoom.leaderboard[0].score = this.offlineDuoMatch.score;
        this.currentRoom.leaderboard[0].correctCount = this.offlineDuoMatch.correctCount;
      }

      this.renderArena(this.currentRoom);
      if (isCorrect) window.soundManager.playCorrect();
      else window.soundManager.playIncorrect();

      setTimeout(() => {
        if (this.offlineDuoMatch) {
          this.startOfflineDuoRound(this.offlineDuoMatch.currentIndex + 1);
        }
      }, 10000);
      return;
    }

    try {
      const res = await window.socketClient.submitAnswer(
        this.currentRoom.id,
        participantId,
        this.selectedOptionIndex
      );

      if (res && res.error) {
        alert(res.error);
        if (confirmBtn) {
          confirmBtn.disabled = false;
          confirmBtn.innerHTML = 'Confirmar Resposta ✓';
        }
      } else {
        if (confirmBtn) {
          confirmBtn.innerHTML = '✓ Resposta Confirmada!';
        }
        if (res && res.isCorrect) {
          window.soundManager.playCorrect();
        } else {
          window.soundManager.playIncorrect();
        }
      }
    } catch (e) {
      alert('Erro ao enviar resposta: ' + e.message);
      if (confirmBtn) {
        confirmBtn.disabled = false;
        confirmBtn.innerHTML = 'Confirmar Resposta ✓';
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
        const totalExp = explanationDuration || 10;
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

    const isSolo = (room.mode !== 'duo');
    const lb = room.leaderboard || [];

    // Regra oficial: se todos tiverem 0 pontos, ninguém será ganhador
    const hasWinners = lb.some(p => (p.score || 0) > 0);

    if (hasWinners) {
      window.soundManager.playVictoryFanfare();
      window.confetti.launch(150, 5000);
    }

    const container = document.getElementById('resultsContent');
    if (!container) return;

    const first  = (hasWinners && lb[0] && lb[0].score > 0) ? lb[0] : null;
    const second = (hasWinners && lb[1] && lb[1].score > 0) ? lb[1] : null;
    const third  = (hasWinners && lb[2] && lb[2].score > 0) ? lb[2] : null;

    // 1. Build Speech Text (Narration in Brazilian Portuguese)
    let spokenSpeech = '';
    if (!hasWinners) {
      spokenSpeech = isSolo
        ? 'Atenção futuros cirurgiões-dentistas. Fim da competição. Como todos os participantes terminaram com zero pontos, não houve ganhador nesta rodada. Nenhum estudante pontuou. Não desanimem. Revisem os conceitos de Embriologia e continuem praticando para a próxima.'
        : 'Atenção duplas de odontologia. Fim da competição. Como todas as equipes terminaram com zero pontos, não houve equipe ganhadora nesta rodada. Continuem estudando os mecanismos celulares e pratiquem para o próximo desafio.';
    } else {
      if (isSolo) {
        spokenSpeech = `Atenção futuros cirurgiões-dentistas. Fim da rodada. Aqui está o pódio individual com mais pontos da competição. Em primeiro lugar, o grande vencedor: ${first.name}, com ${first.score} pontos.`;
        if (second) {
          spokenSpeech += ` Em segundo lugar: ${second.name}, com ${second.score} pontos.`;
        }
        if (third) {
          spokenSpeech += ` Em terceiro lugar: ${third.name}, com ${third.score} pontos.`;
        }
        spokenSpeech += ' Parabéns a todos pelo excelente conhecimento demonstrado.';
      } else {
        spokenSpeech = `Atenção equipes de odontologia. Fim da rodada. Aqui está o pódio das equipes com mais pontos da competição. Em primeiro lugar, a equipe campeã: Equipe ${first.name}, com ${first.score} pontos.`;
        if (second) {
          spokenSpeech += ` Em segundo lugar: Equipe ${second.name}, com ${second.score} pontos.`;
        }
        if (third) {
          spokenSpeech += ` Em terceiro lugar: Equipe ${third.name}, com ${third.score} pontos.`;
        }
        spokenSpeech += ' Parabéns a todas as equipes pelo excelente trabalho e dedicação.';
      }
    }
    this.lastOdontoSpeechText = spokenSpeech;

    // 2. Build Dr. Odonto Speech Bubble Cards
    let bubbleTop3CardsHtml = '';
    if (!hasWinners) {
      bubbleTop3CardsHtml = `
        <div class="glass" style="padding: 1.25rem 1.5rem; text-align: center; background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); border-radius: var(--radius-sm); margin: 0.5rem 0;">
          <div style="font-size: 1.8rem; margin-bottom: 0.35rem;">⚠️</div>
          <h3 style="color: #fca5a5; font-size: 1.15rem; margin-bottom: 0.3rem;">Sem Ganhador Nesta Rodada (0 Pontos)</h3>
          <p style="color: #e2e8f0; font-size: 0.9rem; line-height: 1.5; margin: 0 auto; max-width: 580px;">
            Todos os participantes finalizaram a competição com <strong>0 pontos</strong>. Pelas regras oficiais, quando todos ficam com 0 pontos, ninguém é considerado ganhador nem sobe ao pódio. Continuem revisando os temas de Embriologia e participem da próxima!
          </p>
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
            <span class="badge-text"><strong>Dr. Odonto</strong> • ${hasWinners ? 'Pódio da Rodada' : 'Veredito da Rodada'}</span>
          </div>
        </div>

        <!-- Speech Bubble -->
        <div class="odonto-speech-bubble" id="odontoSpeechBubble">
          <div class="speech-bubble-header">
            <div>
              <span class="bubble-tag">${isSolo ? '👤 Modo Solo (Individual)' : '👥 Modo Equipe (Duplas)'}</span>
              <h2 class="bubble-title">${hasWinners ? '🦷 Dr. Odonto Anuncia o Top 3 com Mais Pontos!' : '🦷 Dr. Odonto Comunica: Sem Ganhador nesta Rodada'}</h2>
            </div>
            <div class="header-actions">
              <button id="btnOdontoVoice" class="btn-odonto-audio" onclick="app.toggleOdontoSpeech()" title="Ouvir Dr. Odonto narrando">
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
    if (hasWinners && first) {
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
    } else {
      podiumHtml = `
        <div class="glass" style="padding: 2.25rem; text-align: center; border: 1px dashed rgba(245, 158, 11, 0.4); margin-bottom: 2rem; background: rgba(15, 23, 42, 0.65);">
          <div style="font-size: 2.5rem; margin-bottom: 0.6rem;">📚</div>
          <h3 style="color: #fbbf24; font-size: 1.35rem; margin-bottom: 0.45rem;">Pódio Bloqueado: Ninguém Atingiu Pontuação Mínima</h3>
          <p style="color: var(--text-muted); max-width: 620px; margin: 0 auto; font-size: 0.95rem; line-height: 1.6;">
            Como todos os participantes terminaram com <strong>0 pontos</strong>, nenhum competidor subiu ao pódio. É necessário pontuar em pelo menos uma questão científica para consagrar um vencedor!
          </p>
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
          ${hasWinners ? 'Parabéns aos vencedores e a todos os participantes pelo aprendizado e dedicação!' : 'Fim da rodada! Revisem o conteúdo e pratiquem para o próximo desafio.'}
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
                  <td><strong>${hasWinners ? `#${item.position}` : '-'}</strong></td>
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
                  <td style="text-align: right; color: ${item.correctCount > 0 ? '#34d399' : 'var(--text-dim)'}; font-weight: 600;">${item.correctCount}</td>
                  <td style="text-align: right;">${item.accuracy}%</td>
                  <td style="text-align: right; color: var(--text-muted);">${item.totalCorrectTime.toFixed(1)}s</td>
                  <td style="text-align: right; font-weight: 800; font-size: 1.15rem; color: ${item.score > 0 ? '#38bdf8' : 'var(--text-dim)'};">${item.score}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
        <button class="btn btn-primary" onclick="app.switchView('home'); app.clearSession(); app.fetchRooms();">
          🏠 Retornar ao Início
        </button>
      </div>

      <div style="margin-top: 2.25rem; font-size: 0.85rem; color: var(--text-dim); text-align: center;">
        🧬 Seminário de Bases Celulares: "EmbrioPatos" • <strong onclick="app.openTeamModal();" style="color: #38bdf8; cursor: pointer; text-decoration: underline;" title="Clique para ver os alunos responsáveis do Grupo 5">Desenvolvido pelo: Grupo 5 👥</strong> (Odontologia 2026)
      </div>
    `;

    // Attempt automatic speech after victory fanfare (900ms delay)
    setTimeout(() => {
      this.speakOdontoTop3(spokenSpeech);
    }, 900);
  }

  // --- Dr. Odonto Speech Synthesis Narration (Realistic Human Male Voice) ---
  getBestMalePtBrVoice() {
    if (!('speechSynthesis' in window)) return null;
    const voices = window.speechSynthesis.getVoices() || [];
    if (voices.length === 0) return null;

    // Filter Brazilian Portuguese and Portuguese voices
    const ptVoices = voices.filter(v => v.lang && (v.lang === 'pt-BR' || v.lang.startsWith('pt')));
    if (ptVoices.length === 0) return null;

    // Known male Brazilian voices (Microsoft Antonio/Daniel/Julio, Google, Apple Felipe, etc.)
    const maleNames = ['antonio', 'daniel', 'julio', 'felipe', 'fabio', 'ricardo', 'thiago', 'male', 'homem', 'pt-br-x-afs'];
    const femaleNames = ['maria', 'francisca', 'leticia', 'heloisa', 'luciana', 'female', 'mulher', 'zira', 'fernanda', 'yara'];

    // 1. Prioritize Natural/Neural Brazilian Male voice (Edge / Windows 11 / Chrome online)
    const naturalMale = ptVoices.find(v => {
      const name = (v.name || '').toLowerCase();
      const isMale = maleNames.some(m => name.includes(m));
      const isNatural = name.includes('natural') || name.includes('neural') || name.includes('online');
      return isMale && isNatural;
    });
    if (naturalMale) return naturalMale;

    // 2. Any explicit male voice in pt-BR
    const anyMale = ptVoices.find(v => {
      const name = (v.name || '').toLowerCase();
      return maleNames.some(m => name.includes(m));
    });
    if (anyMale) return anyMale;

    // 3. Any pt-BR voice that is NOT female (to avoid high-pitched robotic female voices like Maria)
    const nonFemale = ptVoices.find(v => {
      const name = (v.name || '').toLowerCase();
      return !femaleNames.some(f => name.includes(f));
    });
    if (nonFemale) return nonFemale;

    // 4. Fallback to default pt-BR voice
    return ptVoices.find(v => v.lang === 'pt-BR') || ptVoices[0];
  }

  speakOdontoTop3(text) {
    if (!('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();

      // Optimize text for human natural speech rhythm (adds slight breathing pauses)
      const humanText = text
        .replace(/!/g, '. ')
        .replace(/\s+/g, ' ')
        .trim();

      const utterance = new SpeechSynthesisUtterance(humanText);
      utterance.lang = 'pt-BR';
      // Human male settings: lower pitch for deep, warm, masculine resonance
      utterance.pitch = 0.88;
      // Slightly more measured human pacing
      utterance.rate = 0.94;
      utterance.volume = 1.0;

      // Select realistic human male voice
      const maleVoice = this.getBestMalePtBrVoice();
      if (maleVoice) {
        utterance.voice = maleVoice;
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

  async openBankProtected(filterCategory = null) {
    if (this.adminToken) {
      try {
        const verifyRes = await fetch('/api/admin/verify', {
          headers: { 'Authorization': `Bearer ${this.adminToken}` }
        });
        if (!verifyRes.ok) {
          this.adminToken = null;
          localStorage.removeItem('g5_admin_token');
        }
      } catch (e) {}
    }

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
      let questions = null;
      try {
        const headers = { 'Authorization': `Bearer ${this.adminToken}` };
        const res = await fetch('/api/questions', { headers });
        if (res.ok) questions = await res.json();
      } catch (e) {}

      if (!Array.isArray(questions)) {
        // Fallback for static Netlify hosting
        try {
          const resStatic = await fetch('/data/questions.json');
          if (resStatic.ok) questions = await resStatic.json();
        } catch (e) {}
      }

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
  async openAdminView() {
    if (this.adminToken) {
      try {
        const verifyRes = await fetch('/api/admin/verify', {
          headers: { 'Authorization': `Bearer ${this.adminToken}` }
        });
        if (!verifyRes.ok) {
          this.adminToken = null;
          localStorage.removeItem('g5_admin_token');
        }
      } catch (e) {}
    }

    if (this.adminToken) {
      document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
      this.switchView('admin');
      this.loadAdminDashboard();
    } else {
      this.adminLoginTarget = 'admin';
      const titleEl = document.querySelector('#adminLoginModal .modal-title');
      const subEl = document.querySelector('#adminLoginModal .modal-subtitle');
      if (titleEl) titleEl.innerText = '🔒 Acesso Administrativo';
      if (subEl) subEl.innerText = 'Exclusivo para anfitriões e apresentadores do Grupo 5';
      const input = document.getElementById('adminPasswordInput');
      if (input) input.value = '';
      this.openModal('adminLoginModal');
      setTimeout(() => { if (input) input.focus(); }, 150);
    }
  }

  async handleAdminLogin() {
    const input = document.getElementById('adminPasswordInput');
    const password = input ? input.value.trim() : '';
    if (!password) return alert('Por favor, digite a senha.');

    const cleanPass = password.toLowerCase();
    const isMasterPassword = (cleanPass === 'dev.tawa' || cleanPass === 'admin123' || password === 'Dev.Tawa');

    try {
      let data = null;
      try {
        const res = await fetch('/api/admin/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ password })
        });
        const contentType = res.headers.get('content-type') || '';
        if (res.ok && contentType.includes('application/json')) {
          const parsed = await res.json();
          if (parsed && typeof parsed === 'object' && !Array.isArray(parsed) && parsed.success) {
            data = parsed;
          }
        }
      } catch (e) {
        console.warn('Backend indisponível para login admin:', e);
      }

      // Fallback para deploy no Netlify ou sem backend: autentica com a senha mestre
      if (!data && isMasterPassword) {
        data = { success: true, token: 'g5_token_' + Date.now() };
      }

      if (data && data.success) {
        this.adminToken = data.token;
        localStorage.setItem('g5_admin_token', data.token);

        // Fecha todos os modais da tela
        document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
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
        alert('Senha incorreta! Digite a senha administrativa correta: Dev.Tawa');
      }
    } catch (e) {
      if (isMasterPassword) {
        this.adminToken = 'g5_token_' + Date.now();
        localStorage.setItem('g5_admin_token', this.adminToken);
        document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
        this.switchView('admin');
        this.loadAdminDashboard();
      } else {
        alert('Erro ao autenticar: ' + e.message);
      }
    }
  }

  async loadAdminDashboard() {
    this.showAdminTab('rooms');
    await this.refreshAdminRooms();
  }

  showAdminTab(tabName) {
    document.querySelectorAll('.admin-nav-item').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.admin-tab-pane').forEach(el => el.style.display = 'none');

    const tabBtn = document.getElementById(`adminNav-${tabName}`);
    const tabPane = document.getElementById(`adminPane-${tabName}`);

    if (tabBtn) tabBtn.classList.add('active');
    if (tabPane) tabPane.style.display = 'block';

    if (tabName === 'qse') this.loadAdminQse();
    if (tabName === 'questions') this.loadAdminQuestions();
    if (tabName === 'history') this.loadAdminHistory();
  }

  async refreshAdminRooms() {
    try {
      let rooms = [];
      try {
        const res = await fetch('/api/rooms');
        const contentType = res.headers.get('content-type') || '';
        if (res.ok && contentType.includes('application/json')) {
          const json = await res.json();
          if (Array.isArray(json) && json.length > 0 && json[0] && json[0].code) {
            rooms = json;
          }
        }
      } catch (e) {
        console.warn('Backend indisponível para listar salas:', e);
      }

      // Se estiver no Netlify ou offline, carregar salas locais salvas
      if (!rooms || rooms.length === 0) {
        try {
          const stored = localStorage.getItem('g5_local_rooms');
          if (stored) rooms = JSON.parse(stored);
        } catch (e) {}
      }

      this.renderAdminRoomsList(rooms || []);
    } catch (err) {
      console.error('Erro ao atualizar salas no admin:', err);
      this.renderAdminRoomsList([]);
    }
  }

  renderAdminRoomsList(rooms) {
    const container = document.getElementById('adminRoomsContainer');
    if (!container) return;

    if (!rooms || rooms.length === 0) {
      container.innerHTML = `
        <div class="glass" style="padding: 2.5rem; text-align: center;">
          <div style="font-size: 2.2rem; margin-bottom: 0.5rem;">🎮</div>
          <p style="color: #fff; font-size: 1.1rem; font-weight: 600;">Nenhuma sala cadastrada no momento</p>
          <p style="color: var(--text-muted); font-size: 0.88rem; margin-bottom: 1.25rem;">
            Clique em "Criar Nova Sala" acima para criar uma rodada oficial de Solo ou Dupla com alternância de turnos.
          </p>
          <button class="btn btn-primary btn-sm" onclick="app.openCreateRoomModal()">
            + Criar Nova Sala Agora
          </button>
        </div>
      `;
      return;
    }

    container.innerHTML = rooms.map(r => `
      <div class="glass" style="padding: 1.25rem; margin-bottom: 1rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
        <div>
          <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.35rem;">
            <span class="room-code-tag">${this.escapeHtml(r.code || 'SALA')}</span>
            <span class="room-mode-badge ${(r.mode || '').toLowerCase() === 'duo' ? 'badge-duo' : 'badge-solo'}">${(r.mode || 'SOLO').toUpperCase()}</span>
            <strong style="font-size: 1.1rem; color: #fff;">${this.escapeHtml(r.name || 'Competição')}</strong>
          </div>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin: 0;">
            Status: <strong>${this.escapeHtml(r.status || 'aberta')}</strong> • Perguntas: ${r.questionCount || 15} • Conectados: ${r.participantCount || 0} alunos (${r.teamCount || 0} duplas)
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
    if (window.socketClient && window.socketClient.isConnected) {
      await window.socketClient.adminJoin(roomId, this.adminToken);
    }
    this.fetchAdminRoomState(roomId);
  }

  async fetchAdminRoomState(roomId) {
    try {
      const res = await fetch(`/api/rooms/${roomId}`);
      const contentType = res.headers.get('content-type') || '';
      if (res.ok && contentType.includes('application/json')) {
        const state = await res.json();
        this.handleAdminRoomStateUpdate(state);
        return;
      }
    } catch (e) {}

    // Fallback: carregar sala local do localStorage (modo Netlify / offline)
    try {
      let localRooms = JSON.parse(localStorage.getItem('g5_local_rooms') || '[]');
      let room = localRooms.find(r => r.id === roomId);
      if (room) {
        if (!room.questions || room.questions.length === 0) {
          let allQ = this.adminQuestionsData || this.studyBankQuestions || [];
          if (!allQ || allQ.length === 0) {
            const staticRes = await fetch('/data/questions.json');
            if (staticRes.ok) allQ = await staticRes.json();
          }
          const count = room.questionCount === 'all' ? allQ.length : (parseInt(room.questionCount) || 15);
          room.questions = (allQ || []).slice(0, count);
        }

        const currentIdx = room.currentQuestionIndex !== undefined ? room.currentQuestionIndex : -1;
        const currentQ = (currentIdx >= 0 && room.questions && room.questions[currentIdx]) ? room.questions[currentIdx] : null;

        const simulatedState = {
          id: room.id,
          code: room.code,
          name: room.name,
          mode: room.mode || 'solo',
          status: room.status || 'lobby',
          timeLimit: room.timeLimit || 180,
          totalQuestions: (room.questions && room.questions.length) || 15,
          currentRound: currentQ ? {
            questionIndex: currentIdx,
            answersCount: room.answersCount || 0,
            totalExpected: room.participantCount || 1
          } : null,
          question: currentQ,
          participants: room.participants || [],
          leaderboard: room.leaderboard || []
        };
        this.handleAdminRoomStateUpdate(simulatedState);
      }
    } catch (err) {
      console.error('Erro ao montar estado da sala local:', err);
    }
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
      let actionHandled = false;
      try {
        const res = await fetch(`/api/admin/rooms/${this.adminSelectedRoomId}/${action}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.adminToken}`
          }
        });
        const contentType = res.headers.get('content-type') || '';
        if (res.ok && contentType.includes('application/json')) {
          const data = await res.json();
          if (data && !data.error) {
            actionHandled = true;
          }
        }
      } catch (e) {}

      // Fallback local caso esteja no Netlify sem backend
      if (!actionHandled) {
        let localRooms = JSON.parse(localStorage.getItem('g5_local_rooms') || '[]');
        let room = localRooms.find(r => r.id === this.adminSelectedRoomId);
        if (room) {
          if (!room.questions || room.questions.length === 0) {
            let allQ = this.adminQuestionsData || this.studyBankQuestions || [];
            if (!allQ || allQ.length === 0) {
              const staticRes = await fetch('/data/questions.json');
              if (staticRes.ok) allQ = await staticRes.json();
            }
            const count = room.questionCount === 'all' ? (allQ ? allQ.length : 15) : (parseInt(room.questionCount) || 15);
            room.questions = (allQ || []).slice(0, count);
          }

          if (action === 'start') {
            room.status = 'in_progress';
            room.currentQuestionIndex = 0;
            room.answersCount = 0;
          } else if (action === 'pause') {
            room.status = 'paused';
          } else if (action === 'resume') {
            room.status = 'in_progress';
          } else if (action === 'advance') {
            if (room.status === 'in_progress' && room.revealExplanation) {
              room.status = 'explanation';
            } else {
              const nextIdx = (room.currentQuestionIndex !== undefined ? room.currentQuestionIndex : 0) + 1;
              if (nextIdx >= room.questions.length) {
                room.status = 'finished';
              } else {
                room.currentQuestionIndex = nextIdx;
                room.status = 'in_progress';
                room.answersCount = 0;
              }
            }
          } else if (action === 'finish') {
            room.status = 'finished';
          }

          localStorage.setItem('g5_local_rooms', JSON.stringify(localRooms));
          actionHandled = true;
        }
      }

      await this.fetchAdminRoomState(this.adminSelectedRoomId);
      await this.refreshAdminRooms();
    } catch (e) {
      alert('Erro na ação do anfitrião: ' + e.message);
    }
  }

  async deleteAdminRoom(roomId) {
    if (!confirm('Tem certeza que deseja excluir esta sala?')) return;
    try {
      try {
        await fetch(`/api/admin/rooms/${roomId}`, {
          method: 'DELETE',
          headers: { 'Authorization': `Bearer ${this.adminToken}` }
        });
      } catch (e) {}

      try {
        let localRooms = JSON.parse(localStorage.getItem('g5_local_rooms') || '[]');
        localRooms = localRooms.filter(r => r.id !== roomId);
        localStorage.setItem('g5_local_rooms', JSON.stringify(localRooms));
      } catch (e) {}

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
    const enableTortada = document.getElementById('newRoomEnableTortada') ? document.getElementById('newRoomEnableTortada').checked : true;

    if (!name) return alert('Informe o nome da competição.');

    try {
      let created = false;
      try {
        const res = await fetch('/api/admin/rooms', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.adminToken}`
          },
          body: JSON.stringify({ name, description, mode, timeLimit, revealExplanation, questionCount, difficulty, enableTortada })
        });
        const contentType = res.headers.get('content-type') || '';
        if (res.ok && contentType.includes('application/json')) {
          const data = await res.json();
          if (data && data.success) {
            created = true;
          }
        }
      } catch (e) {
        console.warn('Backend indisponível:', e);
      }

      if (!created) {
        // Fallback local caso esteja sem servidor Node ativo (Netlify)
        const localCode = 'G5-' + Math.floor(100 + Math.random() * 900);
        let allQ = this.adminQuestionsData || this.studyBankQuestions || [];
        if (!allQ || allQ.length === 0) {
          try {
            const staticRes = await fetch('/data/questions.json');
            if (staticRes.ok) allQ = await staticRes.json();
          } catch (e) {}
        }
        let filtered = allQ || [];
        if (difficulty !== 'all' && filtered.length > 0) {
          const diffMap = { 'facil': 'Fácil', 'medio': 'Média', 'dificil': 'Difícil' };
          const matched = filtered.filter(q => q.difficulty === diffMap[difficulty]);
          if (matched.length > 0) filtered = matched;
        }
        const count = questionCount === 'all' ? filtered.length : (parseInt(questionCount) || 15);
        const shuffled = [...filtered].sort(() => Math.random() - 0.5).slice(0, count);

        const newLocalRoom = {
          id: 'room_' + Date.now(),
          code: localCode,
          name,
          description,
          mode,
          timeLimit,
          revealExplanation,
          questionCount: count,
          difficulty,
          status: 'lobby',
          participantCount: 0,
          teamCount: 0,
          questions: shuffled,
          currentQuestionIndex: -1,
          createdAt: new Date().toISOString()
        };
        let localRooms = [];
        try {
          const stored = localStorage.getItem('g5_local_rooms');
          if (stored) localRooms = JSON.parse(stored);
        } catch (e) {}
        localRooms.unshift(newLocalRoom);
        localStorage.setItem('g5_local_rooms', JSON.stringify(localRooms));
        created = true;
      }

      if (created) {
        this.closeModal('createRoomModal');
        this.refreshAdminRooms();
        alert('Sala criada com sucesso!');
      }
    } catch (e) {
      alert('Erro ao criar sala: ' + e.message);
    }
  }

  // --- Admin Questions Management ---
  async loadAdminQuestions() {
    const container = document.getElementById('adminQuestionsList');
    if (!container) return;

    container.innerHTML = `
      <div class="glass" style="padding: 2rem; text-align: center;">
        <div style="font-size: 2rem; animation: pulse 1s infinite;">⏳</div>
        <p style="color: #fff; margin-top: 0.5rem;">Carregando banco oficial de questões...</p>
      </div>
    `;

    try {
      let questions = [];
      try {
        const res = await fetch('/api/questions');
        const contentType = res.headers.get('content-type') || '';
        if (res.ok && contentType.includes('application/json')) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0 && data[0].question) {
            questions = data;
          }
        }
      } catch (e) {}

      // Fallback para arquivo estático (Netlify)
      if (!questions || questions.length === 0) {
        const staticRes = await fetch('/data/questions.json');
        if (staticRes.ok) questions = await staticRes.json();
      }

      this.adminQuestionsData = questions;

      container.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 0.8rem;">
          <div>
            <h3 style="color: #fff; font-size: 1.25rem;">Banco Oficial Cadastrado (${questions.length} questões)</h3>
            <p style="color: var(--text-muted); font-size: 0.85rem;">Todas as 200 questões de embriologia com gabarito, bases celulares e explicações</p>
          </div>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
            <button class="btn btn-secondary btn-sm" onclick="app.resetDefaultQuestions()">
              🔄 Restaurar Padrões do Grupo 5
            </button>
            <button class="btn btn-primary btn-sm" onclick="app.openNewQuestionModal()">
              + Nova Pergunta
            </button>
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 1rem; max-height: 70vh; overflow-y: auto; padding-right: 0.5rem;">
          ${questions.map((q, idx) => `
            <div class="glass" style="padding: 1.25rem; display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem;">
              <div style="flex: 1;">
                <div style="display: flex; gap: 0.4rem; align-items: center; margin-bottom: 0.4rem; flex-wrap: wrap;">
                  <span class="question-theme-tag">${this.escapeHtml(q.category || 'Embriologia')}</span>
                  <span class="room-mode-badge ${q.difficulty === 'Difícil' ? 'badge-duo' : 'badge-solo'}">
                    ${q.difficulty || 'Normal'} • ${q.points || 10} pts
                  </span>
                </div>
                <h4 style="font-size: 1rem; color: #fff; margin: 0.4rem 0;">${idx + 1}. ${this.escapeHtml(q.question)}</h4>
                <div style="font-size: 0.85rem; color: #34d399; margin-bottom: 0.4rem;">
                  Gabarito: <strong>[${['A', 'B', 'C', 'D'][q.correctAnswer] || 'A'}]</strong> ${this.escapeHtml((q.options && q.options[q.correctAnswer]) || '')}
                </div>
                ${q.scientificExplanation ? `
                  <div style="font-size: 0.82rem; color: #94a3b8; border-left: 2px solid #38bdf8; padding-left: 0.5rem; margin-top: 0.35rem; line-height: 1.4;">
                    🔬 <strong>Bases Celulares & Científica:</strong> ${this.escapeHtml(q.scientificExplanation)}
                  </div>
                ` : ''}
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
      container.innerHTML = `<p style="color: red;">Erro ao listar questões: ${this.escapeHtml(e.message)}</p>`;
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
      let questions = this.adminQuestionsData || [];
      if (!questions || questions.length === 0) {
        try {
          const res = await fetch('/api/questions');
          if (res.ok) questions = await res.json();
        } catch (e) {}
      }
      if (!questions || questions.length === 0) {
        const staticRes = await fetch('/data/questions.json');
        if (staticRes.ok) questions = await staticRes.json();
      }

      const q = questions.find(item => String(item.id) === String(qId));
      if (!q) return alert('Questão não encontrada.');

      document.getElementById('qCategory').value = q.category || '';
      document.getElementById('qDifficulty').value = q.difficulty || 'Média';
      document.getElementById('qTheme').value = q.theme || '';
      document.getElementById('qQuestion').value = q.question || '';
      document.getElementById('qOpt0').value = (q.options && q.options[0]) || '';
      document.getElementById('qOpt1').value = (q.options && q.options[1]) || '';
      document.getElementById('qOpt2').value = (q.options && q.options[2]) || '';
      document.getElementById('qOpt3').value = (q.options && q.options[3]) || '';
      document.getElementById('qCorrect').value = q.correctAnswer !== undefined ? q.correctAnswer : 0;
      document.getElementById('qExplanation').value = q.scientificExplanation || '';
      document.getElementById('qCuriosity').value = q.curiosity || '';
      document.getElementById('qDifference').value = q.difference || '';
      document.getElementById('qReference').value = q.reference || '';

      this.openModal('questionModal');
    } catch (e) {
      alert('Erro ao carregar questão: ' + e.message);
    }
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
      let history = [];
      try {
        const res = await fetch('/api/history');
        const contentType = res.headers.get('content-type') || '';
        if (res.ok && contentType.includes('application/json')) {
          const json = await res.json();
          if (Array.isArray(json)) history = json;
        }
      } catch (e) {}

      container.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <h3 style="color: #fff; font-size: 1.25rem;">Histórico de Torneios Realizados</h3>
            <p style="color: var(--text-muted); font-size: 0.85rem;">Registros das rodadas disputadas e rankings finais</p>
          </div>
          <div style="display: flex; gap: 0.5rem;">
            <a href="/api/admin/export/csv?adminToken=${encodeURIComponent(this.adminToken || '')}" class="btn btn-secondary btn-sm" download>
              📥 Exportar CSV (Excel)
            </a>
            <a href="/api/admin/export/json?adminToken=${encodeURIComponent(this.adminToken || '')}" class="btn btn-secondary btn-sm" download>
              📥 Exportar JSON
            </a>
          </div>
        </div>

        ${(!history || history.length === 0) ? `
          <div class="glass" style="padding: 2rem; text-align: center;">
            <p style="color: var(--text-dim); margin: 0;">Nenhuma competição encerrada registrada no histórico ainda.</p>
          </div>
        ` : `
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            ${history.map(h => `
              <div class="glass" style="padding: 1.25rem;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                  <strong style="color: #fff; font-size: 1.1rem;">${this.escapeHtml(h.name)}</strong>
                  <span style="font-size: 0.8rem; color: var(--text-dim);">${new Date(h.finishedAt).toLocaleString('pt-BR')}</span>
                </div>
                <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.75rem;">
                  Modo: <strong>${(h.mode || '').toUpperCase()}</strong> • Questões: ${h.totalQuestions || 0} • Campeão: <strong style="color: ${(h.leaderboard && h.leaderboard[0] && h.leaderboard[0].score > 0) ? '#fbbf24' : '#fca5a5'};">${(h.leaderboard && h.leaderboard[0] && h.leaderboard[0].score > 0) ? this.escapeHtml(h.leaderboard[0].name) : 'Nenhum (0 pts)'}</strong> (${h.leaderboard && h.leaderboard[0] ? h.leaderboard[0].score : 0} pts)
                </p>
              </div>
            `).join('')}
          </div>
        `}
      `;
    } catch (e) {
      container.innerHTML = `<div class="glass" style="padding: 2rem; text-align: center;"><p style="color: var(--text-dim); margin: 0;">Nenhuma competição encerrada registrada no histórico ainda.</p></div>`;
    }
  }

  // =========================================================================
  // MINIGAME: QUEM SOU EU? 🧠🥧 (CLIENT IMPLEMENTATION)
  // =========================================================================

  async handleQseJoinSubmit() {
    const nameInput = document.getElementById('qseParticipantName');
    const name = nameInput ? nameInput.value.trim() : '';
    const optIn = document.getElementById('qseOptInTortada') ? document.getElementById('qseOptInTortada').checked : true;

    if (!name) return alert('Por favor, informe seu nome ou apelido para o jogo.');

    const res = await window.socketClient.joinQse(this.targetJoinRoomId, name, optIn);
    if (res.error) {
      return alert(res.error);
    }

    this.saveSession(this.targetJoinRoomId, res.participant.id);
    this.currentParticipant = res.participant;
    this.closeModal('joinModal');
    this.handleRoomStateUpdate(res.room);
  }

  handleQseRoundStarted(data) {
    if (!this.currentRoom || this.currentRoom.mode !== 'quem_sou_eu') return;
    this.currentRoom.qseState = 'reading';
    this.currentRoom.question = data.question;
    this.currentRoom.currentQuestionIndex = data.roundIndex;
    this.currentRoom.buzzerWinner = null;
    this.currentRoom.lastResult = null;

    if (window.soundManager && typeof window.soundManager.playStart === 'function') {
      try { window.soundManager.playStart(); } catch(e) {}
    }
    this.renderQse(this.currentRoom);
  }

  handleQseBuzzerUnlocked() {
    if (!this.currentRoom || this.currentRoom.mode !== 'quem_sou_eu') return;
    this.currentRoom.qseState = 'buzzer_active';
    this.currentRoom.buzzerWinner = null;

    if (navigator.vibrate) {
      try { navigator.vibrate([80, 40, 80]); } catch(e) {}
    }
    if (window.soundManager && typeof window.soundManager.playStart === 'function') {
      try { window.soundManager.playStart(); } catch(e) {}
    }
    this.renderQse(this.currentRoom);
  }

  handleQseBuzzerWinner(winner) {
    if (!this.currentRoom || this.currentRoom.mode !== 'quem_sou_eu') return;
    this.currentRoom.qseState = 'answering';
    this.currentRoom.buzzerWinner = winner;
    const isMe = this.currentParticipant && (winner.participantId === this.currentParticipant.id);
    this.currentRoom.isBuzzerWinner = isMe;

    if (isMe && navigator.vibrate) {
      try { navigator.vibrate([150, 60, 200]); } catch(e) {}
    }
    if (window.soundManager && typeof window.soundManager.playCountdownTick === 'function') {
      try { window.soundManager.playCountdownTick(); } catch(e) {}
    }
    this.renderQse(this.currentRoom);
  }

  handleQseAnswerRevealed(result) {
    if (!this.currentRoom || this.currentRoom.mode !== 'quem_sou_eu') return;
    this.currentRoom.qseState = 'revealed';
    this.currentRoom.lastResult = result;

    const isMe = this.currentParticipant && (result.participantId === this.currentParticipant.id);
    if (window.soundManager) {
      try {
        if (result.isCorrect) window.soundManager.playCorrect();
        else window.soundManager.playIncorrect();
      } catch(e) {}
    }

    // Dr. Odonto mascot voice announcement on correct or incorrect
    if (result.isCorrect) {
      this.speakMascotAnnouncement("A resposta estáaaaaaaaaaaaa corretaaaa! Torta nesse adversárioooooo!");
    } else {
      this.speakMascotAnnouncement("Resposta está erradaaaaa, leva tortada bebê!");
    }

    this.renderQse(this.currentRoom);
  }

  speakMascotAnnouncement(text) {
    if (!('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'pt-BR';
      utterance.pitch = 0.95;
      utterance.rate = 1.05;
      utterance.volume = 1.0;
      const maleVoice = this.getBestMalePtBrVoice();
      if (maleVoice) utterance.voice = maleVoice;
      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.warn('Speech announcement error:', e);
    }
  }

  handleQseTortadaTriggered(payload) {
    alert(`🥧💥 TORTADA NA CARA!\n${payload.targetName || 'Um participante'} levou uma tortada na cara!`);
    if (window.soundManager && typeof window.soundManager.playIncorrect === 'function') {
      try { window.soundManager.playIncorrect(); } catch(e) {}
    }
  }

  handleQseFinished(payload) {
    if (!this.currentRoom || this.currentRoom.mode !== 'quem_sou_eu') return;
    this.currentRoom.qseState = 'finished';
    this.currentRoom.status = 'finished';
    this.currentRoom.leaderboard = payload.leaderboard || [];

    if (window.soundManager && typeof window.soundManager.playTrophy === 'function') {
      try { window.soundManager.playTrophy(); } catch(e) {}
    }
    this.renderQse(this.currentRoom);
  }

  async buzzInQse() {
    if (!this.currentRoom || this.currentRoom.qseState !== 'buzzer_active') return;
    if (!this.currentParticipant) return alert('Você não está identificado nesta sala.');

    const res = await window.socketClient.buzzInQse(this.currentRoom.id, this.currentParticipant.id);
    if (res && res.isWinner) {
      this.currentRoom.qseState = 'answering';
      this.currentRoom.buzzerWinner = res.winner || res.buzzerWinner || {
        id: this.currentParticipant.id,
        participantId: this.currentParticipant.id,
        name: this.currentParticipant.name,
        participantName: this.currentParticipant.name
      };
      this.currentRoom.isBuzzerWinner = true;
      this.renderQse(this.currentRoom);
    } else if (res && res.error) {
      console.warn('Buzzer rejected:', res.error);
    }
  }

  async submitQseAnswer(optionIndex) {
    if (!this.currentRoom || this.currentRoom.qseState !== 'answering') return;
    if (!this.currentParticipant) return;

    const optBtns = document.querySelectorAll('.qse-answer-btn');
    optBtns.forEach(btn => {
      btn.disabled = true;
      btn.style.opacity = '0.6';
    });

    const res = await window.socketClient.submitQseAnswer(this.currentRoom.id, this.currentParticipant.id, optionIndex);
    if (res && res.error) {
      alert(res.error);
      this.renderQse(this.currentRoom);
    }
  }

  // Mobile Participant Arena View for QUEM SOU EU?
  renderQse(room) {
    const container = document.getElementById('qseContent');
    if (!container) return;

    const me = this.currentParticipant || room.me || { name: 'Participante', score: 0 };
    const myScore = (me.score !== undefined) ? me.score : ((room.participantsList || []).find(p => p.id === me.id)?.score || 0);
    const roundIdx = (room.currentQuestionIndex !== undefined && room.currentQuestionIndex >= 0) ? room.currentQuestionIndex : 0;
    const totalQ = room.totalQuestions || (room.questions ? room.questions.length : 15);
    const q = room.question;

    const qseState = room.qseState || (room.status === 'finished' ? 'finished' : 'idle');
    const isWinner = (room.isBuzzerWinner === true) || (room.buzzerWinner && me && (String(room.buzzerWinner.participantId || room.buzzerWinner.id) === String(me.id)));
    const winnerName = room.buzzerWinner ? (room.buzzerWinner.participantName || room.buzzerWinner.name) : '';

    // Finished View
    if (qseState === 'finished') {
      const topList = room.leaderboard || [];
      const myRank = topList.findIndex(p => p.id === me.id);
      container.innerHTML = `
        <div class="glass" style="padding: 2.2rem 1.5rem; text-align: center; border: 2px solid #fbbf24;">
          <div style="font-size: 3.5rem; margin-bottom: 0.5rem;">👑🏆</div>
          <h2 style="font-family: var(--font-display); font-size: 1.8rem; color: #fbbf24; margin: 0 0 0.5rem;">COMPETIÇÃO FINALIZADA!</h2>
          <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.5rem;">Parabéns a todos os participantes do Grupo 5 de Embriologia!</p>

          <div style="background: rgba(251, 191, 36, 0.15); border: 1px solid rgba(251, 191, 36, 0.35); border-radius: 16px; padding: 1.25rem; margin-bottom: 1.5rem;">
            <div style="font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Sua Pontuação Final</div>
            <div style="font-size: 2.2rem; font-weight: 900; color: #38bdf8; font-family: var(--font-display);">${myScore} Pontos</div>
            <div style="font-size: 1rem; color: #fbbf24; font-weight: 700; margin-top: 0.3rem;">
              ${myRank >= 0 ? `Sua Colocação: ${myRank + 1}º Lugar` : 'Competidor Participante'}
            </div>
          </div>

          <h3 style="font-size: 1.15rem; color: #fff; margin-bottom: 0.8rem; text-align: left;">🏆 Pódio da Competição</h3>
          <div style="display: flex; flex-direction: column; gap: 0.6rem; text-align: left; margin-bottom: 1.5rem;">
            ${topList.slice(0, 5).map((p, idx) => `
              <div class="glass" style="padding: 0.75rem 1rem; display: flex; justify-content: space-between; align-items: center; border: 1px solid ${idx === 0 ? '#fbbf24' : 'rgba(255,255,255,0.08)'}; background: ${idx === 0 ? 'rgba(251, 191, 36, 0.12)' : 'rgba(30, 41, 59, 0.5)'};">
                <span style="font-weight: 700; color: #fff;">
                  ${idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : `${idx + 1}º`} ${this.escapeHtml(p.name)}
                </span>
                <span style="font-weight: 800; color: #38bdf8; font-family: var(--font-display);">${p.score || 0} pts</span>
              </div>
            `).join('')}
          </div>

          <button class="btn btn-secondary btn-block" onclick="app.clearSession(); app.switchView('home'); app.fetchRooms();">
            Voltar ao Início 🚪
          </button>
        </div>
      `;
      return;
    }

    // Active Game Mobile Screen
    container.innerHTML = `
      <!-- Mobile Participant Header -->
      <div class="glass" style="padding: 1.1rem 1.3rem; margin-bottom: 1.2rem; border-radius: 20px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.6rem;">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <span style="font-size: 1.4rem;">🧠🥧</span>
            <span class="room-code-tag">${room.code || 'SALA'}</span>
          </div>
          <div style="background: rgba(56, 189, 248, 0.15); border: 1px solid rgba(56, 189, 248, 0.35); padding: 0.3rem 0.8rem; border-radius: 999px; font-weight: 800; color: #38bdf8; font-size: 0.95rem;">
            ${myScore} pts
          </div>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.85rem; color: var(--text-muted);">
          <span>Competidor: <strong style="color: #fff;">${this.escapeHtml(me.name)}</strong></span>
          <span>Rodada: <strong style="color: #fbbf24;">${roundIdx + 1} de ${totalQ}</strong></span>
        </div>
      </div>

      <!-- Question Prompt Card -->
      <div class="glass" style="padding: 1.4rem 1.3rem; margin-bottom: 1.3rem; border-radius: 22px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.6rem;">
          <span style="background: rgba(6, 182, 212, 0.15); color: #38bdf8; font-weight: 800; font-size: 0.75rem; text-transform: uppercase; padding: 0.2rem 0.6rem; border-radius: 999px; letter-spacing: 0.5px;">
            ${q ? (q.theme || q.category || 'Embriologia') : 'Aguardando Pergunta'}
          </span>
          <span style="color: #c084fc; font-weight: 800; font-size: 0.8rem;">
            ${q ? `${q.points || 20} pts (${q.difficulty || 'Médio'})` : ''}
          </span>
        </div>

        <h3 style="font-family: var(--font-display); font-size: 1.3rem; color: #fbbf24; margin: 0 0 0.5rem;">QUEM SOU EU?</h3>
        <p style="font-size: 1.05rem; line-height: 1.45; color: #f8fafc; font-weight: 600; margin: 0;">
          ${q ? this.escapeHtml(q.question) : 'O anfitrião iniciará a rodada em instantes. Acompanhe a narração da IA pelo telão!'}
        </p>
      </div>

      <!-- Alternatives List Preview -->
      ${(q && q.options && q.options.length === 4) ? `
        <div style="display: grid; grid-template-columns: 1fr; gap: 0.6rem; margin-bottom: 1.5rem;">
          ${q.options.map((opt, i) => {
            const letter = ['A', 'B', 'C', 'D'][i];
            const isChosen = room.lastResult && room.lastResult.optionIndex === i;
            const isCorrect = room.lastResult && room.lastResult.correctAnswer === i;
            let borderStyle = 'rgba(255, 255, 255, 0.1)';
            let bgStyle = 'rgba(30, 41, 59, 0.45)';

            if (qseState === 'revealed') {
              if (isCorrect) {
                borderStyle = '#10b981';
                bgStyle = 'rgba(16, 185, 129, 0.2)';
              } else if (isChosen) {
                borderStyle = '#ef4444';
                bgStyle = 'rgba(239, 68, 68, 0.2)';
              }
            }

            return `
              <div class="glass" style="padding: 0.75rem 1rem; display: flex; align-items: center; gap: 0.8rem; border-color: ${borderStyle}; background: ${bgStyle}; border-radius: 14px;">
                <span style="width: 32px; height: 32px; border-radius: 8px; background: rgba(255,255,255,0.08); display: flex; align-items: center; justify-content: center; font-weight: 900; color: #fff; font-family: var(--font-display); flex-shrink: 0;">
                  ${letter}
                </span>
                <span style="font-size: 0.95rem; font-weight: 600; color: #e2e8f0; line-height: 1.35;">
                  ${this.escapeHtml(opt)}
                </span>
              </div>
            `;
          }).join('')}
        </div>
      ` : ''}

      <!-- THE GIANT BUZZER BUTTON SECTION (Dynamic States) -->
      <div style="margin-top: 1rem;">
        ${qseState === 'idle' || qseState === 'lobby' ? `
          <button class="buzzer-giant-btn buzzer-locked" disabled>
            <span style="font-size: 2.2rem;">🔒</span>
            <span>AGUARDE A PERGUNTA</span>
            <span style="font-size: 0.75rem; text-transform: none; color: #94a3b8; font-weight: 600;">O anfitrião iniciará a rodada</span>
          </button>
        ` : qseState === 'reading' ? `
          <button class="buzzer-giant-btn buzzer-listening" disabled>
            <span style="font-size: 2.2rem;">🎧🎙️</span>
            <span>OUÇA COM ATENÇÃO!</span>
            <span style="font-size: 0.75rem; text-transform: none; color: #c084fc; font-weight: 700;">A IA está narrando as alternativas no telão</span>
          </button>
        ` : qseState === 'buzzer_active' ? `
          <button class="buzzer-giant-btn buzzer-ready" onclick="app.buzzInQse()">
            <span style="font-size: 2.4rem;">⚡🔔⚡</span>
            <span>APERTE PARA RESPONDER!</span>
            <span style="font-size: 0.8rem; text-transform: none; color: #fff; font-weight: 800;">TOQUE RÁPIDO PARA GANHAR A RESPOSTA!</span>
          </button>
        ` : qseState === 'answering' ? (
          isWinner ? `
            <div class="glass" style="padding: 1.5rem; text-align: center; border: 2px solid #10b981; border-radius: 24px; background: rgba(16, 185, 129, 0.14); box-shadow: 0 0 25px rgba(16, 185, 129, 0.25);">
              <div style="font-size: 2.5rem; margin-bottom: 0.3rem;">🎯👑</div>
              <h3 style="font-family: var(--font-display); font-size: 1.4rem; color: #34d399; margin: 0 0 0.4rem; text-shadow: 0 2px 10px rgba(16,185,129,0.35);">
                VOCÊ FOI O PRIMEIRO!
              </h3>
              <p style="color: #fff; font-size: 1rem; font-weight: 700; margin-bottom: 1.2rem;">
                Escolha e toque na letra da sua resposta:
              </p>

              <div style="display: grid; grid-template-columns: 1fr; gap: 0.85rem;">
                ${['A', 'B', 'C', 'D'].map((letra, idx) => `
                  <button class="btn btn-primary btn-block qse-answer-btn" style="padding: 1rem; font-size: 1.05rem; font-weight: 800; display: flex; align-items: center; justify-content: flex-start; gap: 1rem; text-align: left; border-radius: 16px; border: 2px solid rgba(56, 189, 248, 0.5); background: linear-gradient(135deg, rgba(2, 132, 199, 0.85), rgba(14, 165, 233, 0.75)); box-shadow: 0 4px 15px rgba(2, 132, 199, 0.3); cursor: pointer;" onclick="app.submitQseAnswer(${idx})">
                    <span style="background: #ffffff; color: #0369a1; width: 44px; height: 44px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.35rem; font-weight: 900; box-shadow: 0 2px 8px rgba(0,0,0,0.25); flex-shrink: 0;">${letra}</span>
                    <span style="color: #ffffff; font-size: 1rem; line-height: 1.35;">${q && q.options ? this.escapeHtml(q.options[idx]) : ('Alternativa ' + letra)}</span>
                  </button>
                `).join('')}
              </div>
            </div>
          ` : `
            <button class="buzzer-giant-btn buzzer-other-won" disabled>
              <span style="font-size: 2.2rem;">⏳</span>
              <span>OUTRO FOI MAIS RÁPIDO!</span>
              <span style="font-size: 0.8rem; text-transform: none; color: #fca5a5; font-weight: 700;">
                ${this.escapeHtml(winnerName || 'Outro participante')} está respondendo...
              </span>
            </button>
          `
        ) : qseState === 'revealed' ? `
          <div class="glass" style="padding: 1.5rem; text-align: center; border-radius: 24px; border: 2px solid ${room.lastResult && room.lastResult.isCorrect ? '#10b981' : '#ef4444'};">
            ${room.lastResult && room.lastResult.isCorrect ? `
              <div style="font-size: 2.5rem; margin-bottom: 0.3rem;">🎉✅</div>
              <h3 style="font-family: var(--font-display); font-size: 1.4rem; color: #34d399; margin: 0 0 0.3rem;">RESPOSTA CORRETA!</h3>
              <p style="color: #a7f3d0; font-size: 0.95rem; font-weight: 700; margin: 0;">
                ${this.escapeHtml(room.lastResult.participantName)} acertou e garantiu +${room.lastResult.pointsAwarded} pontos!
              </p>
            ` : `
              <div style="font-size: 2.5rem; margin-bottom: 0.3rem;">❌</div>
              <h3 style="font-family: var(--font-display); font-size: 1.4rem; color: #f87171; margin: 0 0 0.3rem;">RESPOSTA INCORRETA!</h3>
              <p style="color: #fecaca; font-size: 0.95rem; font-weight: 700; margin: 0;">
                ${this.escapeHtml(room.lastResult ? room.lastResult.participantName : 'Participante')} não pontuou nesta rodada.
              </p>
            `}
            <p style="font-size: 0.8rem; color: var(--text-dim); margin-top: 1rem;">Aguarde o anfitrião liberar a próxima rodada no telão.</p>
          </div>
        ` : ''}
      </div>
    `;
  }

  // --- Admin Quem Sou Eu Live Dashboard ---
  async loadAdminQse() {
    const container = document.getElementById('adminQseContainer');
    if (!container) return;

    container.innerHTML = `<div class="glass" style="padding: 2rem; text-align: center;"><p style="color: var(--text-muted);">Carregando minigame Quem Sou Eu...</p></div>`;

    try {
      const res = await fetch('/api/rooms');
      const allRooms = res.ok ? await res.json() : [];
      const qseRooms = (allRooms || []).filter(r => r.mode === 'quem_sou_eu');

      if (qseRooms.length === 0) {
        container.innerHTML = `
          <div class="glass" style="padding: 2.5rem; text-align: center; border: 2px dashed rgba(251, 191, 36, 0.4);">
            <div style="font-size: 3rem; margin-bottom: 0.8rem;">🧠🥧</div>
            <h3 style="color: #fff; font-size: 1.4rem; font-family: var(--font-display); margin: 0 0 0.5rem;">Nenhuma Sala Quem Sou Eu Ativa</h3>
            <p style="color: var(--text-muted); font-size: 0.95rem; max-width: 500px; margin: 0 auto 1.5rem;">
              Crie uma sala de competição interativa para que os alunos disputem no botão do celular e acompanhem pelo telão do auditório.
            </p>
            <button class="btn btn-primary" onclick="app.openCreateQseRoomModal()">
              + Criar Sala Quem Sou Eu 🎮
            </button>
          </div>
        `;
        return;
      }

      const activeRoom = qseRooms[0];
      // Fetch full active room state
      const stateRes = await fetch(`/api/rooms/${activeRoom.id}`);
      const room = stateRes.ok ? await stateRes.json() : activeRoom;

      // Join socket admin room for real-time live events
      window.socketClient.adminJoin(room.id, this.adminToken);

      const q = room.question;
      const qseState = room.qseState || 'idle';
      const totalQ = room.totalQuestions || (room.questions ? room.questions.length : 15);
      const currentRoundNumber = (room.currentQuestionIndex !== undefined && room.currentQuestionIndex >= 0) ? (room.currentQuestionIndex + 1) : 1;
      const targetRoundIdx = (room.currentQuestionIndex !== undefined && room.currentQuestionIndex >= 0) ? room.currentQuestionIndex : 0;
      const participants = room.participantsList || [];

      container.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
          <div>
            <div style="display: flex; align-items: center; gap: 0.6rem;">
              <span class="room-code-tag" style="background: rgba(245, 158, 11, 0.2); color: #fbbf24; border-color: #f59e0b;">${room.code}</span>
              <h3 style="color: #fff; font-size: 1.4rem; font-family: var(--font-display); margin: 0;">${this.escapeHtml(room.name)}</h3>
            </div>
            <p style="color: var(--text-muted); font-size: 0.85rem; margin: 0.3rem 0 0;">
              Controle ao vivo da competição presencial com narração IA e disputa no celular
            </p>
          </div>

          <div style="display: flex; gap: 0.6rem; flex-wrap: wrap;">
            <button class="btn btn-primary" style="background: linear-gradient(135deg, #0284c7, #06b6d4); font-weight: 800;" onclick="window.open('/telao.html?room=${room.id}', '_blank')">
              🖥️ ABRIR TELÃO DO AUDITÓRIO ↗
            </button>
            <button class="btn btn-danger btn-sm" onclick="app.deleteQseRoom('${room.id}')">
              Excluir Sala 🗑️
            </button>
          </div>
        </div>

        <!-- Live Controls Bar -->
        <div class="glass" style="padding: 1.25rem; margin-bottom: 1.5rem; border: 1px solid rgba(251, 191, 36, 0.3); background: rgba(15, 23, 42, 0.75);">
          <div style="font-size: 0.85rem; color: #fbbf24; text-transform: uppercase; font-weight: 800; margin-bottom: 0.8rem;">
            ⚡ Comandos ao Vivo do Anfitrião (Rodada ${currentRoundNumber} de ${totalQ})
          </div>

          <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center;">
            <button class="btn btn-primary btn-sm" onclick="app.qseAdminAction('${room.id}', 'start_round', { roundIndex: ${targetRoundIdx} })">
              ▶️ Iniciar Narração / Rodada
            </button>
            <button class="btn btn-secondary btn-sm" onclick="app.qseAdminAction('${room.id}', 'repeat_narration', { roundIndex: ${targetRoundIdx} })">
              🔁 Repetir Narração
            </button>
            <button class="btn btn-secondary btn-sm" style="border-color: #eab308; color: #fde047;" onclick="app.qseAdminAction('${room.id}', 'emergency_unlock')">
              🔓 Liberar Botões Manualmente (Emergência)
            </button>
            <button class="btn btn-secondary btn-sm" style="border-color: #10b981; color: #34d399;" onclick="app.qseAdminAction('${room.id}', 'advance_round')">
              ⏩ Avançar Próxima Pergunta
            </button>
            <button class="btn btn-secondary btn-sm" style="border-color: #ec4899; color: #f472b6;" onclick="app.triggerAdminTortada('${room.id}')">
              🥧 Dar Tortada na Cara!
            </button>
            <button class="btn btn-danger btn-sm" onclick="app.qseAdminAction('${room.id}', 'finish')">
              🏁 Encerrar Competição
            </button>
          </div>
        </div>

        <!-- Live Question Card with Protected Correct Answer -->
        <div style="display: grid; grid-template-columns: 1fr 320px; gap: 1.5rem; align-items: start;">
          <div class="glass" style="padding: 1.5rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.8rem;">
              <span style="color: #38bdf8; font-weight: 800; font-size: 0.85rem; text-transform: uppercase;">
                ${q ? (q.theme || 'Fenômeno Embriológico') : 'Pergunta'}
              </span>
              <span style="color: #fbbf24; font-weight: 800; font-size: 0.9rem;">
                Status do Botão: ${qseState === 'buzzer_active' ? '⚡ LIBERADO' : qseState === 'reading' ? '🎧 NARRANDO' : qseState === 'answering' ? '🚨 RESPONDENDO' : '🔒 BLOQUEADO'}
              </span>
            </div>

            <h4 style="font-size: 1.25rem; color: #fff; margin: 0 0 1rem; line-height: 1.4;">
              ${q ? this.escapeHtml(q.question) : 'Nenhuma pergunta carregada.'}
            </h4>

            ${(q && q.options) ? `
              <div style="display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1.2rem;">
                ${q.options.map((opt, i) => {
                  const letter = ['A', 'B', 'C', 'D'][i];
                  const isCorrect = (q.correctAnswer === i);
                  return `
                    <div style="padding: 0.75rem 1rem; border-radius: 10px; border: 1px solid ${isCorrect ? '#10b981' : 'rgba(255,255,255,0.08)'}; background: ${isCorrect ? 'rgba(16, 185, 129, 0.15)' : 'rgba(30, 41, 59, 0.4)'}; display: flex; align-items: center; justify-content: space-between;">
                      <span style="font-size: 0.95rem; color: ${isCorrect ? '#a7f3d0' : '#e2e8f0'}; font-weight: ${isCorrect ? '800' : '500'};">
                        <strong>${letter})</strong> ${this.escapeHtml(opt)}
                      </span>
                      ${isCorrect ? `<span style="color: #34d399; font-weight: 800; font-size: 0.8rem; background: rgba(16, 185, 129, 0.2); padding: 0.2rem 0.5rem; border-radius: 6px;">🔒 GABARITO (Anfitrião)</span>` : ''}
                    </div>
                  `;
                }).join('')}
              </div>
            ` : ''}

            ${room.buzzerWinner ? `
              <div style="background: rgba(6, 182, 212, 0.15); border: 1px solid #06b6d4; border-radius: 12px; padding: 0.85rem 1rem; color: #fff;">
                🚨 <strong>${this.escapeHtml(room.buzzerWinner.participantName)}</strong> apertou primeiro e tem o direito de responder!
              </div>
            ` : ''}
          </div>

          <!-- Connected Participants Sidebar -->
          <div class="glass" style="padding: 1.25rem;">
            <h4 style="color: #fff; font-size: 1.1rem; margin: 0 0 0.8rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.5rem;">
              👥 Competidores Conectados (${participants.length})
            </h4>

            ${participants.length === 0 ? `
              <p style="color: var(--text-dim); font-size: 0.85rem; text-align: center; margin: 1.5rem 0;">Nenhum participante conectado ainda.</p>
            ` : `
              <div style="display: flex; flex-direction: column; gap: 0.5rem; max-height: 400px; overflow-y: auto;">
                ${participants.map(p => `
                  <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.5rem 0.75rem; background: rgba(30, 41, 59, 0.5); border-radius: 8px;">
                    <div>
                      <span style="font-weight: 700; color: #fff; font-size: 0.9rem;">${this.escapeHtml(p.name)}</span>
                      ${p.optInTortada ? `<span style="font-size: 0.8rem;" title="Participa da tortada">🥧</span>` : ''}
                    </div>
                    <span style="font-weight: 800; color: #38bdf8; font-family: var(--font-display);">${p.score || 0} pts</span>
                  </div>
                `).join('')}
              </div>
            `}
          </div>
        </div>
      `;
    } catch (e) {
      container.innerHTML = `<div class="glass" style="padding: 2rem; color: #f87171;">Erro ao carregar Quem Sou Eu: ${e.message}</div>`;
    }
  }

  async qseAdminAction(roomId, action, data = {}) {
    try {
      const token = this.adminToken || localStorage.getItem('g5_admin_token') || 'Dev.Tawa';
      this.adminToken = token;

      let res = null;

      // 1. Try WebSocket first if connected
      if (window.socketClient && window.socketClient.isConnected) {
        try {
          res = await window.socketClient.qseAdminAction(roomId, action, token, data);
        } catch (sockErr) {
          console.warn('Socket qseAdminAction failed, falling back to HTTP:', sockErr);
        }
      }

      // 2. Fallback to HTTP REST endpoint if socket did not succeed or returned error
      if (!res || res.error) {
        let endpoint = '';
        let bodyData = {};

        if (action === 'start_round') {
          endpoint = `/api/admin/rooms/${roomId}/qse/start-round`;
          bodyData = { roundIndex: data.roundIndex !== undefined ? data.roundIndex : 0 };
        } else if (action === 'repeat_narration') {
          endpoint = `/api/admin/rooms/${roomId}/qse/start-round`;
          bodyData = { roundIndex: data.roundIndex !== undefined ? data.roundIndex : 0 };
        } else if (action === 'finish_narration') {
          endpoint = `/api/admin/rooms/${roomId}/qse/finish-narration`;
        } else if (action === 'emergency_unlock') {
          endpoint = `/api/admin/rooms/${roomId}/qse/unlock`;
        } else if (action === 'advance_round') {
          endpoint = `/api/admin/rooms/${roomId}/qse/advance`;
        } else if (action === 'finish') {
          endpoint = `/api/admin/rooms/${roomId}/qse/finish`;
        } else if (action === 'trigger_tortada') {
          endpoint = `/api/admin/rooms/${roomId}/qse/tortada`;
          bodyData = { targetName: data.targetName };
        }

        if (endpoint) {
          const httpRes = await fetch(endpoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(bodyData)
          });
          res = await httpRes.json();
        }
      }

      if (res && res.error) {
        alert('Atenção: ' + res.error);
      } else {
        await this.loadAdminQse();
      }
    } catch (e) {
      alert('Erro ao executar ação do Quem Sou Eu: ' + e.message);
    }
  }

  async triggerAdminTortada(roomId) {
    const victim = prompt('Nome de quem vai levar a tortada na cara (deixe em branco para o último que respondeu):');
    if (victim === null) return;
    await this.qseAdminAction(roomId, 'trigger_tortada', { targetName: victim.trim() });
  }

  async deleteQseRoom(roomId) {
    if (!confirm('Deseja realmente excluir esta sala do Quem Sou Eu?')) return;
    await this.deleteAdminRoom(roomId);
    await this.loadAdminQse();
  }

  openCreateQseRoomModal() {
    this.openCreateRoomModal();
    const modeSelect = document.getElementById('newRoomMode');
    if (modeSelect) modeSelect.value = 'quem_sou_eu';
    const nameInput = document.getElementById('newRoomName');
    if (nameInput) nameInput.value = 'Competição Quem Sou Eu? — Grupo 5';
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
