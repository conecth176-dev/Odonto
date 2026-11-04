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

    this.init();
  }

  async init() {
    const urlParams = new URLSearchParams(window.location.search);
    this.roomId = urlParams.get('room') || urlParams.get('id');

    // Admin authentication protection
    const isAuthenticated = await this.checkAdminAuth();
    if (!isAuthenticated) return;

    if (!this.roomId) {
      await this.promptSelectRoom();
      return;
    }

    this.initSocket();
    this.initSpeech();
  }

  async checkAdminAuth() {
    const urlParams = new URLSearchParams(window.location.search);
    let token = urlParams.get('adminToken') || localStorage.getItem('g5_admin_token');

    if (token) {
      try {
        const verifyRes = await fetch(`/api/admin/verify?adminToken=${encodeURIComponent(token)}`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (verifyRes.ok) {
          const vData = await verifyRes.json();
          if (vData.authenticated) {
            this.adminToken = token;
            localStorage.setItem('g5_admin_token', token);
            return true;
          }
        }
      } catch (e) {
        console.warn('Admin token verification error:', e);
      }
    }

    this.renderAdminLockScreen();
    return false;
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

  toggleSound() {
    this.soundEnabled = !this.soundEnabled;
    const icon = document.getElementById('soundIcon');
    const text = document.getElementById('soundText');
    if (this.soundEnabled) {
      icon.innerText = '🔊';
      text.innerText = 'Voz IA Ativa';
      // Unlock audio context by saying a short silent wake-up utterance
      if ('speechSynthesis' in window) {
        const u = new SpeechSynthesisUtterance(' ');
        window.speechSynthesis.speak(u);
      }
    } else {
      icon.innerText = '🔇';
      text.innerText = 'Voz IA Muda';
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
    if (currentQ) {
      const diff = currentQ.difficulty || 'Médio';
      const pts = currentQ.points || (diff === 'Difícil' ? 30 : diff === 'Médio' ? 20 : 10);
      document.getElementById('telaoPointsLabel').innerText = `${pts} pts (${diff})`;
      document.getElementById('questionThemeTag').innerText = currentQ.theme || currentQ.category || 'Embriologia Humana';
      document.getElementById('questionPrompt').innerText = currentQ.question || '';

      if (currentQ.options && currentQ.options.length === 4) {
        for (let i = 0; i < 4; i++) {
          const txtEl = document.getElementById(`optionText${i}`);
          if (txtEl) txtEl.innerText = currentQ.options[i];
        }
      }
    }

    // Ranking sidebar
    this.renderRanking(state.leaderboard || state.participantsList || []);

    // Status sync if loading existing state
    if (state.qseState === 'buzzer_active') {
      this.onBuzzerUnlocked();
    } else if (state.qseState === 'answering' && state.buzzerWinner) {
      this.onBuzzerWinner(state.buzzerWinner);
    } else if (state.qseState === 'revealed' && state.lastResult) {
      this.onAnswerRevealed(state.lastResult);
    } else if (state.qseState === 'finished' || state.status === 'finished') {
      this.onCompetitionFinished({ leaderboard: state.leaderboard });
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
    this.currentRoundIndex = data.roundIndex;
    const q = data.question;
    if (!q) return;

    // Reset visual cards
    this.resetOptionCards();

    // Set Header
    document.getElementById('telaoRoundLabel').innerText = `${data.roundIndex + 1} / ${data.totalQuestions}`;
    const diff = q.difficulty || 'Médio';
    const pts = q.points || (diff === 'Difícil' ? 30 : diff === 'Médio' ? 20 : 10);
    document.getElementById('telaoPointsLabel').innerText = `${pts} pts (${diff})`;
    document.getElementById('questionThemeTag').innerText = q.theme || 'Embriologia Humana';
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

  narrateFullQuestion(q) {
    if (!('speechSynthesis' in window) || !this.soundEnabled) {
      // If sound is disabled or speech not supported, simulate natural reading delay then finish
      console.warn('Speech synthesis mudo ou desativado. Liberando após delay de leitura.');
      this.setNarratorVisual(true, 'Leitura da pergunta em andamento...');
      setTimeout(() => {
        this.setNarratorVisual(false, 'Leitura concluída! Liberando botões...');
        this.notifyNarrationFinished();
      }, 7000);
      return;
    }

    window.speechSynthesis.cancel();
    this.isNarrating = true;
    this.setNarratorVisual(true, 'Apresentador narrando a pergunta...');

    const voice = this.getBestPortugueseVoice();
    const letters = ['A', 'B', 'C', 'D'];

    // Clean question to not say "Quem sou eu?" or "Atenção participante" at the start
    let cleanQuestion = (q.question || '')
      .replace(/^(\s*quem\s+sou\s+eu\s*[\?:!\-—,\.]?\s*)+/gi, '')
      .replace(/(\s*quem\s+sou\s+eu\s*[\?:!\-—,\.]?\s*)+$/gi, '')
      .replace(/^(\s*atenção\s+participantes?\s*[\?:!\-—,\.]?\s*)+/gi, '')
      .replace(/(\s*atenção\s+participantes?\s*[\?:!\-—,\.]?\s*)+$/gi, '')
      .trim();

    // Construct speech parts: Speaks ONLY the question text directly, then alternatives, and "Quem sou eu?" ONLY at the end!
    const parts = [
      { text: `${cleanQuestion}`, cardIdx: -1 },
      { text: `Alternativa A: ${q.options[0]}`, cardIdx: 0 },
      { text: `Alternativa B: ${q.options[1]}`, cardIdx: 1 },
      { text: `Alternativa C: ${q.options[2]}`, cardIdx: 2 },
      { text: `Alternativa D: ${q.options[3]}`, cardIdx: 3 },
      { text: `Quem sou eu? Preparem-se... Está valendo!`, cardIdx: -1 }
    ];

    let currentPart = 0;

    const speakNext = async () => {
      if (!this.isNarrating || currentPart >= parts.length) {
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

      await this.playAudioOrSpeak(item.text);

      if (!this.isNarrating) return;
      currentPart++;
      setTimeout(speakNext, 250);
    };

    speakNext();
  }

  playAudioOrSpeak(text) {
    return new Promise((resolve) => {
      if (!this.soundEnabled) return resolve();

      if ('speechSynthesis' in window) {
        try { window.speechSynthesis.cancel(); } catch (e) {}
      }
      if (this.currentAudio) {
        try { this.currentAudio.pause(); } catch (e) {}
        this.currentAudio = null;
      }

      // 1. Prioritize Studio Quality Google Neural Voice (/api/tts)
      try {
        const audio = new Audio(`/api/tts?text=${encodeURIComponent(text)}`);
        this.currentAudio = audio;
        let resolved = false;

        const cleanup = () => {
          if (!resolved) {
            resolved = true;
            this.currentAudio = null;
            resolve();
          }
        };

        audio.onended = cleanup;
        audio.onerror = () => {
          this.fallbackSpeechSynthesis(text).then(cleanup);
        };

        setTimeout(() => {
          if (!resolved) cleanup();
        }, 16000);

        audio.play().catch(() => {
          this.fallbackSpeechSynthesis(text).then(cleanup);
        });
      } catch (err) {
        this.fallbackSpeechSynthesis(text).then(resolve);
      }
    });
  }

  fallbackSpeechSynthesis(text) {
    return new Promise((resolve) => {
      if (!('speechSynthesis' in window) || !this.soundEnabled) return resolve();
      try {
        window.speechSynthesis.cancel();
        const utter = new SpeechSynthesisUtterance(text);
        utter.lang = 'pt-BR';
        utter.rate = 0.98;
        utter.pitch = 1.0;
        const voice = this.getBestPortugueseVoice();
        if (voice) utter.voice = voice;
        utter.onend = () => resolve();
        utter.onerror = () => resolve();
        window.speechSynthesis.speak(utter);
      } catch (e) {
        resolve();
      }
    });
  }

  setNarratorVisual(isActive, text) {
    const waves = document.getElementById('audioWaves');
    const statusText = document.getElementById('narratorStatusText');
    if (waves) {
      if (isActive) waves.classList.add('active');
      else waves.classList.remove('active');
    }
    if (statusText) statusText.innerText = text;
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
    const banner = document.getElementById('statusBanner');
    banner.className = 'telao-banner banner-winner';
    banner.innerHTML = `<span>🚨</span><span>${winner.participantName} APERTOU PRIMEIRO! ESCOLHENDO RESPOSTA...</span>`;

    if (window.soundManager) {
      try { window.soundManager.playCountdownTick(); } catch(e) {}
    }
  }

  onAnswerRevealed(result) {
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
      banner.innerHTML = `<span>🎉</span><span>A RESPOSTA ESTÁ CORRETA! ${result.participantName} GANHOU +${result.pointsAwarded} PONTOS!</span>`;
      if (window.soundManager) {
        try { window.soundManager.playCorrect(); } catch(e) {}
      }

      // Voice Narration: "A resposta estáaaaaaaaaaaaa corretaaaa! Torta nesse adversárioooooo!"
      this.speakAnnouncement("A resposta estáaaaaaaaaaaaa corretaaaa! Torta nesse adversárioooooo!");

      // Trigger Tortada Animation on screen
      setTimeout(() => {
        this.showTortadaAnimation("Torta no adversário!");
      }, 1500);
    } else {
      banner.className = 'telao-banner banner-wrong';
      banner.innerHTML = `<span>❌</span><span>RESPOSTA INCORRETA! ${result.participantName} NÃO PONTUOU!</span>`;
      if (window.soundManager) {
        try { window.soundManager.playIncorrect(); } catch(e) {}
      }

      // Voice Narration: "Resposta está erradaaaaa, leva tortada bebê!"
      this.speakAnnouncement("Resposta está erradaaaaa, leva tortada bebê!");

      // Trigger Tortada Animation on screen
      setTimeout(() => {
        this.showTortadaAnimation(result.participantName);
      }, 1500);
    }
  }

  speakAnnouncement(text) {
    if (!this.soundEnabled) return;
    this.playAudioOrSpeak(text);
  }

  showTortadaAnimation(victimName) {
    const overlay = document.getElementById('tortadaOverlay');
    const victimEl = document.getElementById('tortadaVictimName');
    if (!overlay) return;

    victimEl.innerText = `Levou tortada na cara: ${victimName || 'Participante'}!`;
    overlay.classList.add('active');

    // Splat sound
    if (window.soundManager) {
      try { window.soundManager.playIncorrect(); } catch(e) {}
    }

    setTimeout(() => {
      overlay.classList.remove('active');
    }, 3500);
  }

  onCompetitionFinished(payload) {
    const stageMain = document.querySelector('.telao-stage');
    const questionBox = document.getElementById('questionBox');
    const optionsGrid = document.getElementById('optionsGrid');
    const narratorBar = document.getElementById('narratorBar');
    const statusBanner = document.getElementById('statusBanner');
    const podiumContainer = document.getElementById('podiumContainer');
    const podiumSteps = document.getElementById('podiumSteps');

    if (questionBox) questionBox.style.display = 'none';
    if (optionsGrid) optionsGrid.style.display = 'none';
    if (narratorBar) narratorBar.style.display = 'none';
    if (statusBanner) statusBanner.style.display = 'none';

    if (podiumContainer && podiumSteps) {
      podiumContainer.style.display = 'flex';
      const list = payload.leaderboard || [];
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

    if (window.soundManager) {
      try { window.soundManager.playTrophy(); } catch(e) {}
    }
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
