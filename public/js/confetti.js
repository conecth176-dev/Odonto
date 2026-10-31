// Lightweight HTML5 Canvas Confetti Engine
class ConfettiEngine {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.particles = [];
    this.animId = null;
    this.colors = ['#06b6d4', '#38bdf8', '#8b5cf6', '#f59e0b', '#10b981', '#f43f5e', '#fbbf24'];
  }

  init() {
    this.canvas = document.getElementById('confettiCanvas');
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  launch(count = 120, durationMs = 4500) {
    if (!this.canvas) this.init();
    if (!this.canvas) return;

    this.particles = [];
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * -this.canvas.height * 0.5,
        w: Math.random() * 9 + 4,
        h: Math.random() * 6 + 4,
        color: this.colors[Math.floor(Math.random() * this.colors.length)],
        vx: (Math.random() - 0.5) * 4,
        vy: Math.random() * 4 + 2.5,
        rot: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 8
      });
    }

    if (this.animId) cancelAnimationFrame(this.animId);
    const startTime = Date.now();

    const loop = () => {
      const elapsed = Date.now() - startTime;
      if (elapsed > durationMs && this.particles.length === 0) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        return;
      }

      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      for (let i = this.particles.length - 1; i >= 0; i--) {
        const p = this.particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.rotSpeed;

        if (p.y > this.canvas.height) {
          if (elapsed < durationMs) {
            p.y = -10;
            p.x = Math.random() * this.canvas.width;
          } else {
            this.particles.splice(i, 1);
            continue;
          }
        }

        this.ctx.save();
        this.ctx.translate(p.x, p.y);
        this.ctx.rotate((p.rot * Math.PI) / 180);
        this.ctx.fillStyle = p.color;
        this.ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        this.ctx.restore();
      }

      this.animId = requestAnimationFrame(loop);
    };

    loop();
  }
}

window.confetti = new ConfettiEngine();
