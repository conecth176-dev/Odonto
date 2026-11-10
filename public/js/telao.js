/**
 * TELÃO AO VIVO — MINIGAME: QUEM SOU EU? 🧠🥧
 * Grupo 5 — Bases Celulares e Embriologia
 * Desenvolvido por Tawa Estrela
 */

class TelaoApp {
  constructor() {
    this.socket = null;
    this.roomId = null;
    this.roomState = null;
    this.soundEnabled = true;
    this.currentNarratorIndex = -1;
    this.isNarrating = false;
    this.currentRoundIndex = -1;
    this.activeNarrationSession = 0;
    this._currentRoundKey = null;
    this._narrationTimer = null;
    this._utteranceSafetyTimer = null;
    this._isCompetitionFinished = false;

    this.init();
  }

  async init() {
    // Auto-unlock audio context on any user interaction
    ['click', 'touchstart', 'keydown'].forEach(evt => {
      window.addEventListener(evt, () => this.unlockAudio(), { passive: true });
    });

    const urlParams = new URLSearchParams(window.location.search);
    this.roomId = urlParams.get('room') || urlParams.get('id');
    this.adminToken = urlParams.get('adminToken') || localStorage.getItem('g5_admin_token') || 'Dev.Tawa';

    // Connect socket immediately so Telão is never offline
    this.initSocket();
    this.initSpeech();

    // If roomId was not in URL, query server for active room without blocking
    if (!this.roomId) {
      try {
        const res = await fetch('/api/rooms');
        if (res.ok) {
          const rooms = await res.json();
          const qseRooms = (rooms || []).filter(r => r.mode === 'quem_sou_eu');
          if (qseRooms.length > 0) {
            const activeQse = qseRooms.filter(r => r.status !== 'finished');
            const target = activeQse.length > 0 ? activeQse[activeQse.length - 1] : qseRooms[qseRooms.length - 1];
            this.roomId = target.id;
            if (this.socket && this.socket.connected) {
              this.socket.emit('telao_join_room', { roomId: this.roomId, adminToken: this.adminToken }, (res) => {
                if (res && res.room) this.updateState(res.room);
              });
            }
          }
        }
      } catch (e) {}
    }
  }

  unlockAudio() {
    this.soundEnabled = true;
    const soundIcon = document.getElementById('soundIcon');
    const soundText = document.getElementById('soundText');
    if (soundIcon) soundIcon.innerText = '🔊';
    if (soundText) soundText.innerText = 'Som do Telão Ativado';

    const alertBanner = document.getElementById('telaoAudioAlertFloating');
    if (alertBanner) alertBanner.style.display = 'none';

    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        if (!this._audioCtx) this._audioCtx = new AudioCtx();
        if (this._audioCtx.state === 'suspended') {
          this._audioCtx.resume();
        }
      }
    } catch (e) {}

    try {
      const silent = new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA');
      silent.play().catch(() => {});
    } catch (e) {}

    try {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    } catch (e) {}
  }

  async checkAdminAuth() {
    const urlParams = new URLSearchParams(window.location.search);
    let token = urlParams.get('adminToken') || localStorage.getItem('g5_admin_token') || 'Dev.Tawa';
    this.adminToken = token;
    localStorage.setItem('g5_admin_token', token);
    return true;
  }

  renderAdminLockScreen() {
    let lockOverlay = document.getElementById('telaoAdminLockModal');
    if (!lockOverlay) {
      lockOverlay = document.createElement('div');
      lockOverlay.id = 'telaoAdminLockModal';
      lockOverlay.style.cssText = `
        position: fixed;
        inset: 0;
        background: radial-gradient(circle at 50% 30%, #1e1b4b 0%, #030712 100%);
        z-index: 999999;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1.5rem;
        backdrop-filter: blur(25px);
      `;
      document.body.appendChild(lockOverlay);
    }

    lockOverlay.innerHTML = `
      <div style="background: rgba(15, 23, 42, 0.95); border: 2px solid rgba(251, 191, 36, 0.4); border-radius: 28px; padding: 2.5rem; max-width: 520px; width: 100%; text-align: center; box-shadow: 0 0 50px rgba(0,0,0,0.8), 0 0 25px rgba(251, 191, 36, 0.2);">
        <div style="font-size: 3.5rem; margin-bottom: 0.5rem; filter: drop-shadow(0 0 15px rgba(251, 191, 36, 0.5));">🔒🖥️</div>
        <h2 style="font-family: 'Outfit', sans-serif; font-size: 1.8rem; color: #fbbf24; margin: 0 0 0.5rem; font-weight: 900;">
          ACESSO RESTRITO AO TELÃO
        </h2>
        <p style="color: #94a3b8; font-size: 0.95rem; line-height: 1.5; margin-bottom: 1.8rem;">
          Esta tela de projeção é exclusiva para o <strong>Anfitrião / Administrador</strong> da competição Quem Sou Eu. Digite a senha do painel para desbloquear o Telão.
        </p>

        <form id="telaoUnlockForm" onsubmit="event.preventDefault(); window.telaoApp.handleUnlockSubmit();" style="display: flex; flex-direction: column; gap: 1rem;">
          <input 
            type="password" 
            id="telaoAdminPassInput" 
            placeholder="Senha de Administrador" 
            autofocus
            style="width: 100%; padding: 1rem 1.25rem; font-size: 1.1rem; border-radius: 14px; border: 2px solid rgba(56, 189, 248, 0.4); background: rgba(30, 41, 59, 0.7); color: #fff; text-align: center; letter-spacing: 2px; outline: none; box-sizing: border-box;"
          />
          <div id="telaoLockError" style="display: none; color: #ef4444; font-weight: 700; font-size: 0.9rem;"></div>
          
          <button 
            type="submit" 
            style="background: linear-gradient(135deg, #0284c7, #06b6d4); color: #fff; padding: 1rem; font-size: 1.1rem; font-weight: 800; border: none; border-radius: 14px; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 0.6rem; box-shadow: 0 4px 15px rgba(6, 182, 212, 0.4);"
          >
            <span>Desbloquear Telão</span> 🔓
          </button>

          <button 
            type="button" 
            onclick="window.location.href='/'"
            style="background: transparent; border: 1px solid rgba(255,255,255,0.15); color: #94a3b8; padding: 0.75rem; font-size: 0.9rem; font-weight: 600; border-radius: 12px; cursor: pointer;"
          >
            Voltar à Plataforma Inicial 🚪
          </button>
        </form>
      </div>
    `;

    setTimeout(() => {
      const input = document.getElementById('telaoAdminPassInput');
      if (input) input.focus();
    }, 150);
  }

  async handleUnlockSubmit() {
    const input = document.getElementById('telaoAdminPassInput');
    const errEl = document.getElementById('telaoLockError');
    if (!input) return;

    const pass = input.value.trim();
    if (!pass) {
      if (errEl) {
        errEl.innerText = 'Digite a senha de administrador.';
        errEl.style.display = 'block';
      }
      return;
    }

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: pass })
      });
      const data = await res.json();
      if (data && data.token) {
        this.adminToken = data.token;
        localStorage.setItem('g5_admin_token', data.token);

        const lockOverlay = document.getElementById('telaoAdminLockModal');
        if (lockOverlay) lockOverlay.remove();

        if (!this.roomId) {
          await this.promptSelectRoom();
        } else {
          this.initSocket();
          this.initSpeech();
        }
      } else {
        if (errEl) {
          errEl.innerText = data.error || 'Senha incorreta. Acesso restrito.';
          errEl.style.display = 'block';
        }
      }
    } catch (e) {
      if (errEl) {
        errEl.innerText = 'Erro ao verificar: ' + e.message;
        errEl.style.display = 'block';
      }
    }
  }

  async promptSelectRoom() {
    try {
      const res = await fetch('/api/rooms');
      if (res.ok) {
        const rooms = await res.json();
        const qseRooms = (rooms || []).filter(r => r.mode === 'quem_sou_eu');
        if (qseRooms.length > 0) {
          this.roomId = qseRooms[0].id;
          window.history.replaceState({}, '', `?room=${this.roomId}`);
          this.initSocket();
          this.initSpeech();
          return;
        }
      }
    } catch (e) {}

    const promptCode = prompt('Digite o código ou ID da Sala Quem Sou Eu para o Telão:');
    if (promptCode) {
      this.roomId = promptCode.trim();
      window.history.replaceState({}, '', `?room=${this.roomId}`);
      this.initSocket();
      this.initSpeech();
    } else {
      document.getElementById('questionPrompt').innerText = 'Nenhuma sala selecionada para o Telão.';
    }
  }

  initSocket() {
    if (typeof io === 'undefined') {
      console.error('Socket.io não carregado.');
      return;
    }

    this.socket = io();

    this.socket.on('connect', () => {
      console.log('Telão conectado via WebSocket');
      this.socket.emit('telao_join_room', { roomId: this.roomId, adminToken: this.adminToken }, (res) => {
        if (res && res.error) {
          console.warn('Acesso ao Telão rejeitado pelo servidor:', res.error);
          this.renderAdminLockScreen();
          return;
        }
        if (res && res.room) {
          this.updateState(res.room);
        }
      });
    });

    this.socket.on('telao_state_update', (state) => {
      this.updateState(state);
    });

    this.socket.on('qse_round_started', (data) => {
      console.log('Nova rodada iniciada no Telão:', data);
      if (data && (data.roomId || data.roomCode)) {
        if (!this.roomId) this.roomId = data.roomId;
        const codeEl = document.getElementById('telaoRoomCode');
        if (codeEl) codeEl.innerText = data.roomCode || data.roomId || '------';
      }
      this.onRoundStarted(data);
    });

    this.socket.on('qse_buzzer_unlocked', () => {
      console.log('Botões liberados: VALENDO!');
      this.onBuzzerUnlocked();
    });

    this.socket.on('qse_buzzer_winner', (winner) => {
      console.log('Vencedor do botão:', winner);
      this.onBuzzerWinner(winner);
    });

    this.socket.on('qse_answer_revealed', (result) => {
      console.log('Resposta revelada:', result);
      this.onAnswerRevealed(result);
    });

    this.socket.on('qse_tortada_triggered', (payload) => {
      console.log('Tortada acionada:', payload);
      this.showTortadaAnimation(payload.targetName);
    });

    this.socket.on('qse_finished', (payload) => {
      console.log('Competição finalizada:', payload);
      this.onCompetitionFinished(payload);
    });
  }

  initSpeech() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = () => {
        this.getBestPortugueseVoice();
      };
      this.getBestPortugueseVoice();
    }
  }

  getBestPortugueseVoice() {
    if (!('speechSynthesis' in window)) return null;
    const voices = window.speechSynthesis.getVoices() || [];
    if (voices.length === 0) return null;

    // Filter Brazilian Portuguese and Portuguese voices
    const ptVoices = voices.filter(v => v.lang && (v.lang === 'pt-BR' || v.lang.startsWith('pt')));
    if (ptVoices.length === 0) return null;

    // Known male Brazilian voices (Microsoft Daniel, Antonio, Julio, Felipe, Fabio, Google pt-BR male, etc.)
    const maleNames = ['antonio', 'daniel', 'julio', 'felipe', 'fabio', 'ricardo', 'thiago', 'male', 'homem', 'pt-br-x-afs'];
    const femaleNames = ['maria', 'francisca', 'leticia', 'heloisa', 'luciana', 'female', 'mulher', 'zira', 'fernanda', 'yara', 'raquel'];

    // 1. Natural / Neural Brazilian Male voice (Edge / Windows 11 / Chrome online)
    const naturalMale = ptVoices.find(v => {
      const name = (v.name || '').toLowerCase();
      const isMale = maleNames.some(m => name.includes(m));
      const isNatural = name.includes('natural') || name.includes('neural') || name.includes('online');
      return isMale && isNatural;
    });
    if (naturalMale) return naturalMale;

    // 2. Explicit male pt-BR voice
    const anyMale = ptVoices.find(v => {
      const name = (v.name || '').toLowerCase();
      return maleNames.some(m => name.includes(m));
    });
    if (anyMale) return anyMale;

    // 3. Avoid known robotic female voices (Maria, Francisca, Luciana, etc.)
    const nonFemale = ptVoices.find(v => {
      const name = (v.name || '').toLowerCase();
      return !femaleNames.some(f => name.includes(f));
    });
    if (nonFemale) return nonFemale;

    return ptVoices.find(v => v.lang === 'pt-BR') || ptVoices[0];
  }

  getBestFemaleVoice() {
    if (!('speechSynthesis' in window)) return null;
    const voices = window.speechSynthesis.getVoices() || [];
    const ptVoices = voices.filter(v => v.lang && (v.lang === 'pt-BR' || v.lang.startsWith('pt')));
    if (ptVoices.length === 0) return null;

    const femaleNames = ['maria', 'francisca', 'leticia', 'heloisa', 'luciana', 'female', 'mulher', 'zira', 'fernanda', 'yara', 'raquel'];
    const female = ptVoices.find(v => {
      const name = (v.name || '').toLowerCase();
      return femaleNames.some(f => name.includes(f));
    });
    return female || ptVoices[0];
  }

  toCebolinha(text) {
    if (!text) return '';
    return text
      .replace(/rr/gi, 'l')
      .replace(/RR/gi, 'L')
      .replace(/r([a-záéíóúâêîôûãõ])/gi, (m, v) => (m[0] === 'R' ? 'L' : 'l') + v)
      .replace(/([ptbcfgdv])r/gi, (m, c) => c + (m[1] === 'R' ? 'L' : 'l'))
      .replace(/r([bcdfghjklmnpqrstvwxyz])/gi, (m, c) => (m[0] === 'R' ? 'L' : 'l') + c);
  }

  toggleSound() {
    this.soundEnabled = !this.soundEnabled;
    const icon = document.getElementById('soundIcon');
    const text = document.getElementById('soundText');
    if (this.soundEnabled) {
      if (icon) icon.innerText = '🔊';
      if (text) text.innerText = 'Som do Telão Ativado';
      this.unlockAudio();
    } else {
      if (icon) icon.innerText = '🔇';
      if (text) text.innerText = 'Som do Telão Mudo';
      if (this.currentAudio) {
        try { this.currentAudio.pause(); } catch (e) {}
      }
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    }
  }

  updateState(state) {
    if (!state) return;
    this.roomState = state;

    // Header info
    document.getElementById('telaoRoomCode').innerText = state.code || state.id;
    const currentQIdx = state.currentQuestionIndex !== undefined ? state.currentQuestionIndex : -1;
    const totalQ = state.totalQuestions || 0;
    document.getElementById('telaoRoundLabel').innerText = currentQIdx >= 0 ? `${currentQIdx + 1} / ${totalQ}` : `-- / ${totalQ}`;

    const currentQ = state.question;
    if (currentQ && state.currentQuestionIndex !== undefined && state.currentQuestionIndex >= 0) {
      const diff = currentQ.difficulty || 'Médio';
      const pts = currentQ.points || (diff === 'Difícil' ? 30 : diff === 'Médio' ? 20 : 10);
      document.getElementById('telaoPointsLabel').innerText = `${pts} pts (${diff})`;
      const tEl1 = document.getElementById('questionThemeTag'); if (tEl1) { tEl1.innerText = ''; tEl1.style.display = 'none'; }
      document.getElementById('questionPrompt').innerText = currentQ.question || '';

      if (currentQ.options && currentQ.options.length === 4) {
        for (let i = 0; i < 4; i++) {
          const txtEl = document.getElementById(`optionText${i}`);
          if (txtEl) txtEl.innerText = currentQ.options[i];
        }
      }
    } else {
      document.getElementById('questionPrompt').innerText = 'Aguardando o anfitrião iniciar a rodada...';
      document.getElementById('telaoRoundLabel').innerText = `-- / ${totalQ || 10}`;
      document.getElementById('telaoPointsLabel').innerText = '-- pts';
      for (let i = 0; i < 4; i++) {
        const txtEl = document.getElementById(`optionText${i}`);
        if (txtEl) txtEl.innerText = `Aguardando alternativa ${['A','B','C','D'][i]}...`;
      }
      const banner = document.getElementById('statusBanner');
      if (banner) {
        banner.className = 'telao-banner banner-locked';
        banner.innerHTML = `<span>🔒</span><span>SALA ABERTA • AGUARDANDO O INÍCIO PELO ANFITRIÃO</span>`;
      }
    }

    // Ranking sidebar
    this.renderRanking(state.leaderboard || state.participantsList || []);

    // Status sync strictly visual (NO audio trigger on passive state update)
    if (state.qseState === 'buzzer_active') {
      const banner = document.getElementById('statusBanner');
      if (banner) {
        banner.className = 'telao-banner banner-active';
        banner.innerHTML = `<span>⚡</span><span>VALENDO! APERTEM O BOTÃO NO CELULAR!</span>`;
      }
    } else if (state.qseState === 'answering' && state.buzzerWinner) {
      const name = state.buzzerWinner.participantName || state.buzzerWinner.name || 'Participante';
      const rawTeam = state.buzzerWinner.team || '';
      const team = (rawTeam === 'Equipe 2' || String(rawTeam).toLowerCase().includes('2')) ? 'Equipe 2' : 'Equipe 1';
      const banner = document.getElementById('statusBanner');
      if (banner) {
        banner.className = 'telao-banner banner-winner';
        banner.innerHTML = `<span>🚨</span><span><strong>${team.toUpperCase()}</strong> (${name}) APERTOU PRIMEIRO!</span>`;
      }
    }
  }

  renderRanking(list) {
    const container = document.getElementById('telaoRankingList');
    if (!container) return;

    if (!list || list.length === 0) {
      container.innerHTML = `<div style="color: #64748b; text-align: center; padding: 2rem 0;">Aguardando participantes entrarem...</div>`;
      return;
    }

    // Sort by score desc
    const sorted = [...list].sort((a, b) => (b.score || 0) - (a.score || 0));

    container.innerHTML = sorted.map((p, idx) => {
      const topClass = idx === 0 ? 'top1' : idx === 1 ? 'top2' : idx === 2 ? 'top3' : '';
      const medal = idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : `${idx + 1}º`;
      return `
        <div class="rank-item ${topClass}">
          <div class="rank-user">
            <span class="rank-pos">${medal}</span>
            <span class="rank-name">${p.name || 'Aluno'}</span>
          </div>
          <div class="rank-score">${p.score || 0} pts</div>
        </div>
      `;
    }).join('');
  }

  // AI Voice Narration Sequence
  async onRoundStarted(data) {
    const q = data.question;
    if (!q) return;

    // Guard against duplicate socket events for the same round
    const roundKey = `${data.roundIndex}_${q.id || q.question}`;
    if (this._currentRoundKey === roundKey && this.isNarrating) {
      console.log('Evento duplicado de rodada ignorado no Telão.');
      return;
    }
    this._currentRoundKey = roundKey;

    // Terminate any previous speech or narration loops immediately
    this._isCompetitionFinished = false;
    this.stopNarration();
    this.currentRoundIndex = data.roundIndex;

    // Reset visual cards
    this.resetOptionCards();

    // Set Header
    document.getElementById('telaoRoundLabel').innerText = `${data.roundIndex + 1} / ${data.totalQuestions}`;
    const diff = q.difficulty || 'Médio';
    const pts = q.points || (diff === 'Difícil' ? 30 : diff === 'Médio' ? 20 : 10);
    document.getElementById('telaoPointsLabel').innerText = `${pts} pts (${diff})`;
    const tEl2 = document.getElementById('questionThemeTag'); if (tEl2) { tEl2.innerText = ''; tEl2.style.display = 'none'; }
    document.getElementById('questionPrompt').innerText = q.question || '';

    for (let i = 0; i < 4; i++) {
      const el = document.getElementById(`optionText${i}`);
      if (el && q.options && q.options[i]) el.innerText = q.options[i];
    }

    // Banner: Reading in progress
    const banner = document.getElementById('statusBanner');
    banner.className = 'telao-banner banner-locked';
    banner.innerHTML = `<span>🔒</span><span>OUÇA COM ATENÇÃO! A IA ESTÁ NARRANDO A PERGUNTA</span>`;

    // Start Narration
    this.narrateFullQuestion(q);
  }

  stopNarration() {
    if (this._autoAdvanceCountdown) { clearInterval(this._autoAdvanceCountdown); this._autoAdvanceCountdown = null; }
    this.activeNarrationSession++;
    this.isNarrating = false;
    window._activeUtterance = null;
    if (this.currentAudio) {
      try {
        this.currentAudio.pause();
        this.currentAudio.currentTime = 0;
      } catch (e) {}
      this.currentAudio = null;
    }
    if (this._narrationTimer) {
      clearTimeout(this._narrationTimer);
      this._narrationTimer = null;
    }
    if (this._utteranceSafetyTimer) {
      clearTimeout(this._utteranceSafetyTimer);
      this._utteranceSafetyTimer = null;
    }
    if ('speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
      } catch (e) {}
    }
    this.resetOptionCards();
  }

  getQuestionNumber(q) {
    if (!q) return 1;
    if (q.audioNumber) return parseInt(q.audioNumber, 10);
    if (q.id) {
      const matchFacil = q.id.match(/facil-(\d+)/i);
      if (matchFacil) return parseInt(matchFacil[1], 10);
      const matchMedia = q.id.match(/medi[ao]-(\d+)/i);
      if (matchMedia) return 10 + parseInt(matchMedia[1], 10);
      const matchDificil = q.id.match(/dificil-(\d+)/i);
      if (matchDificil) return 20 + parseInt(matchDificil[1], 10);
      const matchNum = q.id.match(/(\d+)/);
      if (matchNum) return parseInt(matchNum[1], 10);
    }
    if (this.currentRoundIndex !== undefined && this.currentRoundIndex !== null && this.currentRoundIndex >= 0) {
      return (this.currentRoundIndex % 30) + 1;
    }
    return 1;
  }

  narrateFullQuestion(q) {
    this.stopNarration();

    if (!this.soundEnabled) {
      console.warn('Som desativado. Liberando após delay visual.');
      this.setNarratorVisual(true, 'Leitura da pergunta em andamento...');
      this._narrationTimer = setTimeout(() => {
        this.setNarratorVisual(false, 'Leitura concluída! Liberando botões...');
        this.notifyNarrationFinished();
      }, 7000);
      return;
    }

    const sessionId = ++this.activeNarrationSession;
    this.isNarrating = true;
    this.setNarratorVisual(true, 'Apresentadores narrando a pergunta...');

    // Clean question to not say "Quem sou eu?" or "Atenção participante" at the start
    let cleanQuestion = (q.question || '')
      .replace(/^(\s*quem\s+sou\s+eu\s*[\?:!\-—,\.]?\s*)+/gi, '')
      .replace(/(\s*quem\s+sou\s+eu\s*[\?:!\-—,\.]?\s*)+$/gi, '')
      .replace(/^(\s*atenção\s+participantes?\s*[\?:!\-—,\.]?\s*)+/gi, '')
      .replace(/(\s*atenção\s+participantes?\s*[\?:!\-—,\.]?\s*)+$/gi, '')
      .trim();

    const qNum = this.getQuestionNumber(q);

    // Dynamic comedic dialogue and official voice tracks!
    const parts = [
      // 1. Cebolinha lê a pergunta
      { audioUrl: `/audio/qse/questions/q${qNum}.mp3`, character: 'cebolinha', text: cleanQuestion, cardIdx: -1 },
      // 2. Mônica interrompe bravinha
      { audioUrl: '/audio/qse/monica/interrupcao.mp3', character: 'monica', text: 'Pára tudo, Cebolinha! Cala a boca e deixa que a dona da rua lê essas alternativas!', cardIdx: -1 },
      // 3. Alternativa A
      { audioUrl: `/audio/qse/options/q${qNum}_a.mp3`, character: 'cebolinha', text: `Alternativa A: ${q.options[0]}`, cardIdx: 0 },
      // 4. Alternativa B
      { audioUrl: `/audio/qse/options/q${qNum}_b.mp3`, character: 'monica', text: `Alternativa B: ${q.options[1]}`, cardIdx: 1 },
      // 5. Alternativa C
      { audioUrl: `/audio/qse/options/q${qNum}_c.mp3`, character: 'cebolinha', text: `Alternativa C: ${q.options[2]}`, cardIdx: 2 },
      // 6. Alternativa D
      { audioUrl: `/audio/qse/options/q${qNum}_d.mp3`, character: 'monica', text: `Alternativa D: ${q.options[3]}`, cardIdx: 3 },
      // 7. Chamada final da Mônica
      { audioUrl: '/audio/qse/monica/chamada_final.mp3', character: 'monica', text: 'Apertem o botão no celular agora!', cardIdx: -1 }
    ];

    let currentPart = 0;

    const speakNext = async () => {
      // Abort if session changed or narration stopped
      if (this.activeNarrationSession !== sessionId || !this.isNarrating) {
        return;
      }

      if (currentPart >= parts.length) {
        this.isNarrating = false;
        this.setNarratorVisual(false, 'Narração finalizada!');
        this.resetOptionCards();
        this.notifyNarrationFinished();
        return;
      }

      const item = parts[currentPart];
      this.resetOptionCards();
      if (item.cardIdx >= 0) {
        const card = document.getElementById(`optionCard${item.cardIdx}`);
        if (card) card.classList.add('narrating');
      }

      const isLastPart = (currentPart === parts.length - 1);
      await this.playAudioOrSpeak(item.audioUrl, item.character || 'cebolinha', sessionId, item.text, isLastPart);

      if (this.activeNarrationSession !== sessionId || !this.isNarrating) return;

      if (isLastPart) {
        // Mônica terminou "Apertem o botão no celular agora!" -> Libera em menos de 1 milissegundo!
        this.isNarrating = false;
        this.setNarratorVisual(false, 'Narração finalizada! Botões liberados!');
        this.resetOptionCards();
        this.notifyNarrationFinished();
        this.onBuzzerUnlocked();
        return;
      }

      currentPart++;
      this._narrationTimer = setTimeout(speakNext, 250);
    };

    speakNext();
  }

  playAudioOrSpeak(audioUrlOrText, character = 'cebolinha', sessionId = null, fallbackText = null, isImmediate = false) {
    return new Promise((resolve) => {
      if (!this.soundEnabled) return resolve();
      if (sessionId && this.activeNarrationSession !== sessionId) return resolve();

      const isAudioFile = typeof audioUrlOrText === 'string' && (audioUrlOrText.startsWith('/audio/') || audioUrlOrText.endsWith('.mp3'));
      const audioUrl = isAudioFile ? audioUrlOrText : null;
      const text = isAudioFile ? (fallbackText || '') : audioUrlOrText;

      const charTag = (character === 'cebolinha') ? '🧅 Cebolinha' : (character === 'magali') ? '🍉 Magali' : (character === 'cascao') ? '🧦 Cascão' : '🐰 Mônica';
      this.setNarratorVisual(true, `${charTag}: "${text}"`, character);

      if (audioUrl) {
        try {
          if (this.currentAudio) {
            try { this.currentAudio.pause(); } catch (e) {}
            this.currentAudio = null;
          }

          const audio = new Audio(audioUrl);
          this.currentAudio = audio;
          window._activeAudioElement = audio;
          let resolved = false;

          const finish = () => {
            if (!resolved) {
              resolved = true;
              if (this._utteranceSafetyTimer) {
                clearTimeout(this._utteranceSafetyTimer);
                this._utteranceSafetyTimer = null;
              }
              if (this.currentAudio === audio) {
                try { audio.pause(); } catch (e) {}
                this.currentAudio = null;
                window._activeAudioElement = null;
              }
              resolve();
            }
          };

          audio.onended = () => {
            if (isImmediate) {
              finish();
            } else {
              setTimeout(finish, 200);
            }
          };

          audio.onerror = (err) => {
            console.warn('Áudio MP3 indisponível:', audioUrl, err);
            // Voz de IA desativada - aguarda breve pausa e segue sem síntese robótica
            setTimeout(finish, 150);
          };

          // Timeout de segurança proporcional: perguntas têm até 25s de áudio oficial
          let defaultSafety = 35000;
          if (audioUrl.includes('/options/')) {
            defaultSafety = 15000;
          } else if (audioUrl.includes('/monica/') || audioUrl.includes('/magali/') || audioUrl.includes('/cascao/')) {
            defaultSafety = 15000;
          }

          this._utteranceSafetyTimer = setTimeout(finish, defaultSafety);

          audio.onloadedmetadata = () => {
            if (audio.duration && !isNaN(audio.duration) && audio.duration > 0) {
              if (this._utteranceSafetyTimer) clearTimeout(this._utteranceSafetyTimer);
              this._utteranceSafetyTimer = setTimeout(finish, Math.round((audio.duration + 3) * 1000));
            }
          };

          if (!sessionId || this.activeNarrationSession === sessionId) {
            audio.load();
            const playPromise = audio.play();
            if (playPromise !== undefined) {
              playPromise.catch((err) => {
                console.warn('Erro ao reproduzir arquivo MP3 (bloqueio de autoplay?):', audioUrl, err);
                const alertBanner = document.getElementById('telaoAudioAlertFloating');
                if (alertBanner) alertBanner.style.display = 'flex';
                setTimeout(finish, 200);
              });
            }
          } else {
            finish();
          }
          return;
        } catch (e) {
          console.warn('Erro na inicialização do áudio:', e);
        }
      }

      this.fallbackSpeechSynthesis(text, character, sessionId).then(resolve);
    });
  }

  fallbackSpeechSynthesis(text, character = 'cebolinha', sessionId = null) {
    return new Promise((resolve) => {
      if (!this.soundEnabled || !('speechSynthesis' in window)) return resolve();
      if (sessionId && this.activeNarrationSession !== sessionId) return resolve();

      try {
        window.speechSynthesis.cancel();

        // Converte para a pronúncia do Cebolinha trocando R por L
        const spokenText = (character === 'cebolinha') ? this.toCebolinha(text) : text;
        const charTag = (character === 'cebolinha') ? '🧅 Cebolinha' : (character === 'magali') ? '🍉 Magali' : (character === 'cascao') ? '🧦 Cascão' : '🐰 Mônica';
        this.setNarratorVisual(true, `${charTag}: "${spokenText}"`, character);

        const utter = new SpeechSynthesisUtterance(spokenText);
        utter.lang = 'pt-BR';

        if (character === 'cebolinha') {
          // Tom do Cebolinha: agudo, nasal e travesso
          utter.pitch = 1.45;
          utter.rate = 1.05;
          const maleVoice = this.getBestPortugueseVoice();
          if (maleVoice) utter.voice = maleVoice;
        } else if (character === 'magali') {
          // Tom da Magali: meigo, alegre e esfomeada
          utter.pitch = 1.40;
          utter.rate = 1.05;
          const femaleVoice = this.getBestFemaleVoice();
          if (femaleVoice) utter.voice = femaleVoice;
        } else if (character === 'cascao') {
          // Tom do Cascão: esperto, moleque e animado
          utter.pitch = 1.15;
          utter.rate = 1.08;
          const maleVoice = this.getBestPortugueseVoice();
          if (maleVoice) utter.voice = maleVoice;
        } else {
          // Tom da Mônica: voz decidida, enérgica e animada
          utter.pitch = 1.30;
          utter.rate = 1.10;
          const femaleVoice = this.getBestFemaleVoice();
          if (femaleVoice) utter.voice = femaleVoice;
        }

        let finished = false;
        const finish = () => {
          if (!finished) {
            finished = true;
            window._activeUtterance = null;
            if (this._utteranceSafetyTimer) {
              clearTimeout(this._utteranceSafetyTimer);
              this._utteranceSafetyTimer = null;
            }
            resolve();
          }
        };

        utter.onend = () => {
          setTimeout(finish, 220);
        };

        utter.onerror = (e) => {
          console.warn('Speech error:', e);
          finish();
        };

        window._activeUtterance = utter;
        const maxTime = Math.max(3000, Math.min(22000, spokenText.length * 120));
        this._utteranceSafetyTimer = setTimeout(finish, maxTime);

        setTimeout(() => {
          if (!sessionId || this.activeNarrationSession === sessionId) {
            window.speechSynthesis.speak(utter);
          } else {
            finish();
          }
        }, 100);

      } catch (err) {
        console.warn('SpeechSynthesis error:', err);
        resolve();
      }
    });
  }

  setNarratorVisual(isActive, text, character = 'cebolinha') {
    const waves = document.getElementById('audioWaves');
    const statusText = document.getElementById('narratorStatusText');
    const avatar = document.querySelector('.narrator-avatar');
    const bar = document.getElementById('narratorBar');

    if (waves) {
      if (isActive) waves.classList.add('active');
      else waves.classList.remove('active');
    }
    if (statusText) statusText.innerText = text;
    if (avatar) {
      avatar.innerText = (character === 'monica') ? '🐰' : '🧅';
    }
    if (bar) {
      if (character === 'monica') {
        bar.style.borderColor = 'rgba(244, 114, 182, 0.7)';
        bar.style.boxShadow = '0 0 20px rgba(244, 114, 182, 0.3)';
      } else {
        bar.style.borderColor = 'rgba(52, 211, 153, 0.7)';
        bar.style.boxShadow = '0 0 20px rgba(52, 211, 153, 0.3)';
      }
    }
  }

  notifyNarrationFinished() {
    if (this.socket && this.roomId) {
      console.log('Notificando servidor: narração concluída');
      this.socket.emit('qse_finish_narration', { roomId: this.roomId });
    }
  }

  onBuzzerUnlocked() {
    this.resetOptionCards();
    this.setNarratorVisual(false, 'Disputa no botão liberada!');

    const banner = document.getElementById('statusBanner');
    banner.className = 'telao-banner banner-active';
    banner.innerHTML = `<span>⚡</span><span>VALENDO! APERTEM O BOTÃO NO CELULAR!</span>`;

    if (window.soundManager && typeof window.soundManager.playCorrect === 'function') {
      try { window.soundManager.playStart(); } catch(e) {}
    }
  }

  onBuzzerWinner(winner) {
    this.stopNarration();
    const name = winner.participantName || winner.name || 'Participante';
    const rawTeam = winner.team || '';
    const team = (rawTeam === 'Equipe 2' || String(rawTeam).toLowerCase().includes('2') || name.toLowerCase().includes('equipe 2') || name.toLowerCase().includes('time 2')) ? 'Equipe 2' : 'Equipe 1';
    const banner = document.getElementById('statusBanner');
    banner.className = 'telao-banner banner-winner';
    banner.innerHTML = `<span>🚨</span><span><strong>${team.toUpperCase()}</strong> (${name}) APERTOU PRIMEIRO!</span>`;

    if (window.soundManager) {
      try { window.soundManager.playCountdownTick(); } catch(e) {}
    }

    // Mônica fala anunciando qual equipe apertou primeiro!
    const buzzerAudio = (team === 'Equipe 2') ? '/audio/qse/monica/equipe2_apertou.mp3' : '/audio/qse/monica/equipe1_apertou.mp3';
    this.playAudioOrSpeak(buzzerAudio, 'monica', null, `${team} apertou o botão primeiro!`);
  }

  onAnswerRevealed(result) {
    this.stopNarration();
    const banner = document.getElementById('statusBanner');
    this.resetOptionCards();

    // Highlight user's chosen option
    const chosenCard = document.getElementById(`optionCard${result.optionIndex}`);
    if (chosenCard) {
      chosenCard.classList.add(result.isCorrect ? 'correct' : 'wrong');
    }

    // Always highlight the correct answer
    const correctCard = document.getElementById(`optionCard${result.correctAnswer}`);
    if (correctCard) {
      correctCard.classList.add('correct');
    }

    if (result.isCorrect) {
      banner.className = 'telao-banner banner-correct';
      if (window.soundManager) {
        try { window.soundManager.playCorrect(); } catch(e) {}
      }

      // Cebolinha comemora acerto com áudio oficial
      this.playAudioOrSpeak('/audio/qse/cebolinha/acerto.mp3', 'cebolinha', null, "A lesposta tá colétaaaa! Tolta na cala desse advelsálioooo! O meu plano infalível funcionou!");

      // Trigger Tortada Animation on screen
      setTimeout(() => {
        this.showTortadaAnimation("Torta no adversário!");
      }, 1500);

      // Contagem regressiva visual de 15 segundos para a próxima pergunta automática
      let countdown = 15;
      const updateBannerCountdown = () => {
        if (!banner) return;
        banner.innerHTML = `<span>🎉</span><span>A RESPOSTA ESTÁ CORRETA! ${result.participantName} GANHOU +${result.pointsAwarded} PONTOS! &nbsp;•&nbsp; <span style="background: rgba(0,0,0,0.4); padding: 4px 12px; border-radius: 999px; border: 1px solid #fef08a; color: #fef08a; font-weight: 800; display: inline-flex; align-items: center; gap: 6px;">⏱️ Próxima pergunta em ${countdown}s...</span></span>`;
      };
      updateBannerCountdown();
      if (this._autoAdvanceCountdown) clearInterval(this._autoAdvanceCountdown);
      this._autoAdvanceCountdown = setInterval(() => {
        countdown--;
        if (countdown <= 0) {
          clearInterval(this._autoAdvanceCountdown);
          this._autoAdvanceCountdown = null;
        } else {
          updateBannerCountdown();
        }
      }, 1000);
    } else {
      banner.className = 'telao-banner banner-wrong';
      banner.innerHTML = `<span>❌</span><span>RESPOSTA INCORRETA! ${result.participantName} NÃO PONTUOU!</span>`;
      if (window.soundManager) {
        try { window.soundManager.playIncorrect(); } catch(e) {}
      }

      // Mônica briga divertida com áudio oficial de tortada
      this.playAudioOrSpeak('/audio/qse/monica/erro_tortada.mp3', 'monica', null, "Resposta erradaaaa! Toma tortada na cara e coelhada do Sansão, bebêee!");

      // Trigger Tortada Animation on screen
      setTimeout(() => {
        this.showTortadaAnimation(result.participantName);
      }, 1500);
    }
  }

  speakAnnouncement(text, character = 'cebolinha') {
    if (!this.soundEnabled) return;
    this.playAudioOrSpeak(text, character);
  }

  showTortadaAnimation(victimName) {
    const overlay = document.getElementById('tortadaOverlay');
    const victimEl = document.getElementById('tortadaVictimName');
    if (!overlay) return;

    victimEl.innerHTML = `🥧💥🐰 <strong>${victimName || 'Participante'}</strong> levou tortada na cara e coelhada da Mônica!`;
    overlay.classList.add('active');

    // Splat sound
    if (window.soundManager) {
      try { window.soundManager.playIncorrect(); } catch(e) {}
    }

    setTimeout(() => {
      overlay.classList.remove('active');
    }, 4000);
  }

  async onCompetitionFinished(payload) {
    if (this._isCompetitionFinished) {
      console.log('[Telão] Cerimônia de encerramento já em andamento, ignorando evento duplicado.');
      return;
    }
    this._isCompetitionFinished = true;
    this.stopNarration();

    const stageMain = document.querySelector('.telao-stage');
    const questionBox = document.getElementById('questionBox');
    const optionsGrid = document.getElementById('optionsGrid');
    const statusBanner = document.getElementById('statusBanner');
    const podiumContainer = document.getElementById('podiumContainer');
    const podiumTeamBanner = document.getElementById('podiumTeamBanner');
    const podiumSteps = document.getElementById('podiumSteps');

    if (questionBox) questionBox.style.display = 'none';
    if (optionsGrid) optionsGrid.style.display = 'none';
    if (statusBanner) statusBanner.style.display = 'none';

    // 1. Cálculo da pontuação com critério rigoroso de EMPATE
    let team1Score = 0;
    let team2Score = 0;

    if (payload && payload.teamScores && typeof payload.teamScores.team1 === 'number') {
      team1Score = payload.teamScores.team1;
      team2Score = payload.teamScores.team2;
    } else {
      const list = (payload && payload.leaderboard) || (this.roomState && (this.roomState.leaderboard || this.roomState.participantsList)) || [];
      list.forEach(p => {
        const isTeam2 = (p.team === 'Equipe 2' || String(p.team || '').toLowerCase().includes('2'));
        if (isTeam2) {
          team2Score += (p.score || 0);
        } else {
          team1Score += (p.score || 0);
        }
      });
    }

    // Regra estrita: Se os pontos forem iguais (inclusive 0 a 0), é EMPATE!
    let winningTeam = 'Empate';
    if (team1Score > team2Score) {
      winningTeam = 'Equipe 1';
    } else if (team2Score > team1Score) {
      winningTeam = 'Equipe 2';
    } else {
      winningTeam = 'Empate';
    }

    console.log(`[Telão] Placar Final: Equipe 1 (${team1Score} pts) x Equipe 2 (${team2Score} pts) -> Resultado: ${winningTeam}`);

    if (podiumContainer) {
      podiumContainer.style.display = 'flex';

      if (podiumTeamBanner) {
        if (winningTeam === 'Empate') {
          podiumTeamBanner.innerHTML = `
            <div style="background: linear-gradient(135deg, rgba(234, 179, 8, 0.25), rgba(56, 189, 248, 0.25)); border: 3px solid #fbbf24; border-radius: 20px; padding: 1.5rem 2.5rem; margin-bottom: 2rem; text-align: center; box-shadow: 0 0 45px rgba(251, 191, 36, 0.45);">
              <div style="font-size: 1.2rem; color: #fef08a; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">🍉 Placar Final das Equipes 🧦</div>
              <div style="font-size: 2.8rem; font-weight: 900; color: #fbbf24; margin: 0.6rem 0; font-family: 'Outfit', sans-serif;">
                🤝 EMPATE ENTRE AS EQUIPES! 🤝
              </div>
              <p style="font-size: 1.2rem; color: #e2e8f0; font-weight: 700; margin: 0.3rem 0 1.2rem;">
                As duas equipes foram fantásticas e terminaram com a mesma pontuação!
              </p>
              <div style="display: flex; justify-content: center; gap: 3rem; font-size: 1.5rem; font-weight: 900;">
                <span style="color: #f87171; background: rgba(239, 68, 68, 0.2); padding: 0.5rem 1.4rem; border-radius: 14px; border: 1px solid rgba(239, 68, 68, 0.4);">🔴 Equipe 1: ${team1Score} pts</span>
                <span style="color: #60a5fa; background: rgba(59, 130, 246, 0.2); padding: 0.5rem 1.4rem; border-radius: 14px; border: 1px solid rgba(59, 130, 246, 0.4);">🔵 Equipe 2: ${team2Score} pts</span>
              </div>
            </div>
          `;
        } else {
          podiumTeamBanner.innerHTML = `
            <div style="background: linear-gradient(135deg, rgba(234, 179, 8, 0.25), rgba(244, 114, 182, 0.25)); border: 3px solid #fbbf24; border-radius: 20px; padding: 1.5rem 2.5rem; margin-bottom: 2rem; text-align: center; box-shadow: 0 0 45px rgba(251, 191, 36, 0.45);">
              <div style="font-size: 1.2rem; color: #fef08a; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">🍉 Placar Final das Equipes 🧦</div>
              <div style="font-size: 2.8rem; font-weight: 900; color: #fff; margin: 0.6rem 0; font-family: 'Outfit', sans-serif;">
                🏆 GRANDE CAMPEÃ: ${winningTeam.toUpperCase()}! 🏆
              </div>
              <div style="display: flex; justify-content: center; gap: 3rem; font-size: 1.5rem; font-weight: 900; margin-top: 0.8rem;">
                <span style="color: #f87171; background: rgba(239, 68, 68, 0.2); padding: 0.5rem 1.4rem; border-radius: 14px; border: 1px solid rgba(239, 68, 68, 0.4);">🔴 Equipe 1: ${team1Score} pts</span>
                <span style="color: #60a5fa; background: rgba(59, 130, 246, 0.2); padding: 0.5rem 1.4rem; border-radius: 14px; border: 1px solid rgba(59, 130, 246, 0.4);">🔵 Equipe 2: ${team2Score} pts</span>
              </div>
            </div>
          `;
        }
      }

      if (podiumSteps) {
        const list = (payload && payload.leaderboard) || (this.roomState && this.roomState.leaderboard) || [];
        const p1 = list[0] || { name: '---', score: 0 };
        const p2 = list[1] || { name: '---', score: 0 };
        const p3 = list[2] || { name: '---', score: 0 };

        podiumSteps.innerHTML = `
          <div class="podium-step step-2">
            <div class="pos-medal">🥈</div>
            <div class="user-name">${p2.name}</div>
            <div class="user-score">${p2.score} pts</div>
          </div>
          <div class="podium-step step-1">
            <div class="pos-medal">👑🥇</div>
            <div class="user-name">${p1.name}</div>
            <div class="user-score">${p1.score} pts</div>
          </div>
          <div class="podium-step step-3">
            <div class="pos-medal">🥉</div>
            <div class="user-name">${p3.name}</div>
            <div class="user-score">${p3.score} pts</div>
          </div>
        `;
      }
    }

    if (window.soundManager && typeof window.soundManager.playCorrect === 'function') {
      try { window.soundManager.playCorrect(); } catch(e) {}
    }

    // 2. Sequência de Áudio Oficial:
    // Parte 1: Magali anuncia que o Cascão dará o resultado final
    const magaliSpeech = "Gente, essa disputa foi emocionante demais, me deu até fominha de melancia! Mas agora o Cascão vai revelar qual equipe foi a grande campeã e dar os parabéns pra todo mundo!";
    console.log('[Telão] 🍉 Reproduzindo áudio da Magali...');
    await this.playAudioOrSpeak('/audio/qse/magali/final.mp3', 'magali', null, magaliSpeech);

    // Pausa garantida de 450ms entre os personagens
    await new Promise(r => setTimeout(r, 450));

    // Parte 2: Cascão parabeniza e diz a equipe vencedora ou empate!
    let cascaoAudio = '/audio/qse/cascao/equipe1_venceu.mp3';
    let cascaoSpeech = "É isso aí, Magali! E sem precisar tomar banho, eu anuncio com muito orgulho que a grande vencedora do Quem Sou Eu é a EQUIPE 1! Meus parabéns, galera da Equipe 1! Vocês deram um verdadeiro show e arrasaram!";

    if (winningTeam === 'Equipe 2') {
      cascaoAudio = '/audio/qse/cascao/equipe2_venceu.mp3';
      cascaoSpeech = "É isso aí, Magali! E sem precisar tomar banho, eu anuncio com muito orgulho que a grande vencedora do Quem Sou Eu é a EQUIPE 2! Meus parabéns, galera da Equipe 2! Vocês deram um verdadeiro show e arrasaram!";
    } else if (winningTeam === 'Empate') {
      cascaoAudio = '/audio/qse/cascao/empate.mp3';
      cascaoSpeech = "É isso aí, Magali! E olha só que loucura: deu EMPATE! A Equipe 1 e a Equipe 2 foram tão bem que terminaram iguaizinhas! Parabéns pra todo mundo, vocês foram incríveis demais!";
    }

    console.log('[Telão] 🧦 Reproduzindo áudio do Cascão:', cascaoAudio, winningTeam);
    await this.playAudioOrSpeak(cascaoAudio, 'cascao', null, cascaoSpeech);
    console.log('[Telão] 🎉 Cerimônia de encerramento finalizada com sucesso!');
  }

  resetOptionCards() {
    for (let i = 0; i < 4; i++) {
      const card = document.getElementById(`optionCard${i}`);
      if (card) {
        card.className = 'option-card';
      }
    }
  }
}

// Start on load
window.addEventListener('DOMContentLoaded', () => {
  window.telaoApp = new TelaoApp();
});
