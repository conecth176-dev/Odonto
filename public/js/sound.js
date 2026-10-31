// Web Audio API Sound Synthesizer for Embryology Quiz Platform
// Fully self-contained, offline-compatible, zero external audio assets required.

class SoundManager {
  constructor() {
    this.enabled = localStorage.getItem('g5_sound_enabled') !== 'false';
    this.ctx = null;
  }

  init() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    localStorage.setItem('g5_sound_enabled', this.enabled);
    return this.enabled;
  }

  playTone(freq, duration = 0.15, type = 'sine', gainVal = 0.15) {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      console.warn('Audio play error:', e);
    }
  }

  playCorrect() {
    if (!this.enabled) return;
    try {
      this.init();
      // Ascending major chord (C5, E5, G5, C6)
      const notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, idx) => {
        setTimeout(() => {
          this.playTone(freq, 0.25, 'triangle', 0.18);
        }, idx * 75);
      });
    } catch (e) {}
  }

  playIncorrect() {
    if (!this.enabled) return;
    try {
      this.init();
      // Descending minor interval
      this.playTone(311.13, 0.25, 'sawtooth', 0.12);
      setTimeout(() => {
        this.playTone(233.08, 0.35, 'sawtooth', 0.14);
      }, 140);
    } catch (e) {}
  }

  playTick() {
    if (!this.enabled) return;
    this.playTone(800, 0.03, 'sine', 0.05);
  }

  playUrgentTick() {
    if (!this.enabled) return;
    this.playTone(1100, 0.08, 'sine', 0.12);
  }

  playTurnChange() {
    if (!this.enabled) return;
    // Pleasant double chime
    this.playTone(587.33, 0.15, 'sine', 0.15); // D5
    setTimeout(() => {
      this.playTone(880.00, 0.25, 'sine', 0.18); // A5
    }, 120);
  }

  playRoundStart() {
    if (!this.enabled) return;
    this.playTone(440, 0.1, 'sine', 0.12);
    setTimeout(() => this.playTone(554.37, 0.1, 'sine', 0.12), 100);
    setTimeout(() => this.playTone(659.25, 0.2, 'sine', 0.16), 200);
  }

  playVictoryFanfare() {
    if (!this.enabled) return;
    const fanfare = [
      { f: 523.25, d: 0.15 },
      { f: 659.25, d: 0.15 },
      { f: 783.99, d: 0.2 },
      { f: 1046.50, d: 0.4 }
    ];
    let time = 0;
    fanfare.forEach(item => {
      setTimeout(() => {
        this.playTone(item.f, item.d, 'triangle', 0.22);
      }, time);
      time += item.d * 1000 * 0.85;
    });
  }
}

window.soundManager = new SoundManager();
