/* @ds-bundle: {"format":3,"namespace":"AcademiaCUNTICASistemaDeDiseO_03c2af","components":[],"sourceHashes":{"slides/cuantica-deck.js":"4542b7c4d88c","tienda/tensor/tensor.js":"0522f793ef4b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AcademiaCUNTICASistemaDeDiseO_03c2af = window.AcademiaCUNTICASistemaDeDiseO_03c2af || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// slides/cuantica-deck.js
try { (() => {
/* ============================================================
   ACADEMIA CUÁNTICA · cuantica-deck.js
   Vanilla deck engine — scaling, manual nav, cinematic FX.
   Sin auto-advance NUNCA. El presentador controla el ritmo.

   Markup esperado:
     .stage > .deck > section.slide[data-screen-label]...
     + .flare .vignette .grain  (FX)
     + .progress.chrome .counter.chrome .dots.chrome .hint.chrome
   Add data-flare="strong" on a <section.slide> for a strong lens flare.
   Set window.CUANTICA_DECK_KEY before this script to scope localStorage.
   ============================================================ */
(function () {
  const stage = document.querySelector('.stage');
  const deck = document.querySelector('.deck');
  const slides = Array.from(document.querySelectorAll('.slide'));
  const flare = document.querySelector('.flare');
  const counter = document.querySelector('.counter.chrome');
  const dotsWrap = document.querySelector('.dots');
  const progress = document.querySelector('.progress');
  const total = slides.length;
  let cur = 0;

  /* restore position (refresh-safe — common during recording/iteration) */
  const KEY = window.CUANTICA_DECK_KEY || 'cuantica-' + (document.title || 'deck').replace(/\W+/g, '-').toLowerCase();
  const saved = parseInt(localStorage.getItem(KEY), 10);
  if (!isNaN(saved) && saved >= 0 && saved < total) cur = saved;

  /* scaling — fixed 1920×1080 canvas letterboxed into any viewport */
  function fit() {
    const s = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
    deck.style.transform = `scale(${s})`;
  }
  window.addEventListener('resize', fit);
  fit();

  /* dots */
  if (dotsWrap) {
    slides.forEach((_, i) => {
      const b = document.createElement('button');
      b.className = 'dot';
      b.setAttribute('aria-label', 'Slide ' + (i + 1));
      b.addEventListener('click', e => {
        e.stopPropagation();
        go(i);
      });
      dotsWrap.appendChild(b);
    });
  }
  const dots = dotsWrap ? Array.from(dotsWrap.children) : [];
  const pad = n => String(n).padStart(2, '0');
  function paintChrome() {
    if (counter) counter.innerHTML = `<span class="cur">${pad(cur + 1)}</span> / ${pad(total)}`;
    dots.forEach((d, i) => d.classList.toggle('on', i === cur));
    if (progress) progress.style.width = (cur + 1) / total * 100 + '%';
  }
  function triggerFlare(strong) {
    if (!flare) return;
    flare.classList.remove('sweep', 'strong');
    void flare.offsetWidth; // reflow to restart
    flare.classList.add('sweep');
    if (strong) flare.classList.add('strong');
  }
  function manageVideo() {
    // play the active slide's bg-video from the start; pause & reset the rest
    slides.forEach((s, i) => {
      const v = s.querySelector('video.bg-video');
      if (!v) return;
      if (i === cur) {
        try {
          v.currentTime = 0;
        } catch (e) {}
        const p = v.play();
        if (p && p.catch) p.catch(() => {});
      } else {
        v.pause();
        try {
          v.currentTime = 0;
        } catch (e) {}
      }
    });
  }

  /* add .run to gate entrance animations. rAF is paused when the page isn't
     painting (background tab, headless capture); setTimeout is the fallback so
     content always reveals. */
  function runSoon(el) {
    requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('run')));
    setTimeout(() => el.classList.add('run'), 60);
  }
  function go(n) {
    n = Math.max(0, Math.min(total - 1, n));
    if (n === cur && slides[cur].classList.contains('active')) return;
    const strong = slides[n].dataset.flare === 'strong';
    slides.forEach(s => s.classList.remove('active', 'run'));
    cur = n;
    const el = slides[cur];
    el.classList.add('active');
    runSoon(el);
    triggerFlare(strong);
    manageVideo();
    paintChrome();
    localStorage.setItem(KEY, String(cur));
  }
  const next = () => go(cur + 1);
  const prev = () => go(cur - 1);
  window.cuanticaGo = go; // programmatic nav (PDF export, etc.)

  /* input — manual only */
  document.addEventListener('keydown', e => {
    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
      case 'PageDown':
      case ' ':
        e.preventDefault();
        next();
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
      case 'PageUp':
        e.preventDefault();
        prev();
        break;
      case 'Home':
        e.preventDefault();
        go(0);
        break;
      case 'End':
        e.preventDefault();
        go(total - 1);
        break;
      case 'f':
      case 'F':
        e.preventDefault();
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen?.();
        } else {
          document.exitFullscreen?.();
        }
        break;
    }
  });
  stage.addEventListener('click', e => {
    if (e.target.closest('.chrome')) return;
    next();
  });

  /* idle-hide cursor + chrome */
  let idleTimer;
  function wake() {
    stage.classList.remove('idle', 'hide-cursor');
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => stage.classList.add('idle', 'hide-cursor'), 3500);
  }
  ['mousemove', 'mousedown', 'keydown', 'touchstart', 'wheel'].forEach(ev => window.addEventListener(ev, wake, {
    passive: true
  }));
  wake();

  /* boot */
  const first = slides[cur];
  first.classList.add('active');
  runSoon(first);
  manageVideo();
  paintChrome();
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/cuantica-deck.js", error: String((e && e.message) || e) }); }

// tienda/tensor/tensor.js
try { (() => {
/* ============================================================
   COLECCIÓN TENSOR · motor de fondos vivos
   "El fondo dialoga con el frente": campos toroidales,
   vórtices y mallas que laten detrás del texto.
   Vanilla, sin dependencias. Respeta prefers-reduced-motion.
   ============================================================ */
(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion:reduce)').matches;
  const DPR = Math.min(window.devicePixelRatio || 1, 2);
  const TAU = Math.PI * 2;

  /* ---------- registro de canvases animados (pausa fuera de vista) ---------- */
  const scenes = [];
  function register(canvas, draw, init) {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const s = {
      canvas,
      ctx,
      draw,
      t: 0,
      live: true,
      w: 0,
      h: 0,
      data: {}
    };
    function resize() {
      const r = canvas.getBoundingClientRect();
      s.w = Math.max(1, r.width);
      s.h = Math.max(1, r.height);
      canvas.width = s.w * DPR;
      canvas.height = s.h * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      if (init) init(s);
    }
    s.resize = resize;
    resize();
    if (init) init(s);
    scenes.push(s);
    // IO sólo como optimización: pausa fuera de vista. Si no dispara, sigue vivo.
    try {
      const io = new IntersectionObserver(es => {
        es.forEach(e => s.live = e.isIntersecting);
      }, {
        threshold: 0.02
      });
      io.observe(canvas);
    } catch (e) {}
    return s;
  }
  let RO;
  if ('ResizeObserver' in window) {
    RO = new ResizeObserver(() => scenes.forEach(s => s.resize()));
  } else {
    window.addEventListener('resize', () => scenes.forEach(s => s.resize()));
  }
  let last = performance.now();
  function loop(now) {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    for (const s of scenes) {
      if (!s.live) continue;
      s.t += dt;
      s.ctx.clearRect(0, 0, s.w, s.h);
      s.draw(s, dt);
    }
    requestAnimationFrame(loop);
  }

  /* ---------- helper: línea de campo dipolar (toroide visto de canto) ----------
     Ecuación de línea de campo dipolar: r = L·sin²φ.
     φ recorre 0..2π → los dos pétalos (der/izq) que cruzan el centro:
     el campo "sube" por el eje y "llueve" por los costados. */
  function dipolePoint(cx, cy, L, phi, squash) {
    const r = L * Math.sin(phi) * Math.sin(phi);
    return [cx + r * Math.sin(phi), cy - r * Math.cos(phi) * squash];
  }

  /* ============================================================
     CAMPO TOROIDAL (hero + cierre)
     ============================================================ */
  function initTorus(s) {
    const shells = s.data.shellCount || 7;
    s.data.shells = [];
    for (let i = 0; i < shells; i++) {
      s.data.shells.push({
        frac: (i + 1) / shells,
        particles: Array.from({
          length: 3
        }, (_, k) => Math.random())
      });
    }
  }
  function drawTorus(s, dt) {
    const {
      ctx,
      w,
      h
    } = s;
    const cx = w * (s.data.cx ?? 0.5);
    const cy = h * (s.data.cy ?? 0.52);
    const Lmax = Math.min(w, h) * (s.data.scale ?? 0.46);
    const squash = s.data.squash ?? 1.0;
    const speed = s.data.speed ?? 0.18;
    const wobble = 1 + Math.sin(s.t * 0.6) * 0.012;
    for (const sh of s.data.shells) {
      const L = Lmax * sh.frac * wobble;
      // trazo guía tenue
      ctx.beginPath();
      const N = 90;
      for (let i = 0; i <= N; i++) {
        const phi = i / N * TAU;
        const [x, y] = dipolePoint(cx, cy, L, phi, squash);
        i ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
      }
      const fade = 0.10 + (1 - sh.frac) * 0.10;
      ctx.lineWidth = 1;
      ctx.strokeStyle = `rgba(196,122,53,${fade})`;
      ctx.stroke();

      // partículas de luz viajando por la línea
      for (let p = 0; p < sh.particles.length; p++) {
        sh.particles[p] = (sh.particles[p] + dt * speed * (0.6 + sh.frac * 0.7)) % 1;
        const phi = sh.particles[p] * TAU;
        const [x, y] = dipolePoint(cx, cy, L, phi, squash);
        // color: cobre en los costados, cyan al cruzar el eje (arriba/abajo)
        const axisProx = Math.abs(Math.sin(phi)); // 0 en el eje, 1 en los costados
        const cyanMix = 1 - axisProx;
        const rC = Math.round(196 + (60 - 196) * cyanMix);
        const gC = Math.round(122 + (231 - 122) * cyanMix);
        const bC = Math.round(53 + (225 - 53) * cyanMix);
        const rad = 1.6 + cyanMix * 2.2;
        const g = ctx.createRadialGradient(x, y, 0, x, y, rad * 5);
        g.addColorStop(0, `rgba(${rC},${gC},${bC},0.95)`);
        g.addColorStop(1, `rgba(${rC},${gC},${bC},0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, y, rad * 5, 0, TAU);
        ctx.fill();
        ctx.fillStyle = `rgba(255,255,255,${0.55 + cyanMix * 0.35})`;
        ctx.beginPath();
        ctx.arc(x, y, rad * 0.62, 0, TAU);
        ctx.fill();
      }
    }
    // núcleo latente
    const core = Math.sin(s.t * 1.1) * 0.5 + 0.5;
    const cr = Lmax * 0.05 * (0.8 + core * 0.5);
    const cg = ctx.createRadialGradient(cx, cy, 0, cx, cy, cr * 6);
    cg.addColorStop(0, `rgba(60,231,225,${0.18 + core * 0.16})`);
    cg.addColorStop(1, 'rgba(60,231,225,0)');
    ctx.fillStyle = cg;
    ctx.beginPath();
    ctx.arc(cx, cy, cr * 6, 0, TAU);
    ctx.fill();
  }

  /* ============================================================
     VÓRTICE (cómo funciona) — espiral que succiona al centro
     ============================================================ */
  function initVortex(s) {
    s.data.dots = Array.from({
      length: 150
    }, () => ({
      a: Math.random() * TAU,
      r: 0.2 + Math.random() * 0.85,
      sp: 0.4 + Math.random() * 0.8,
      tw: 2 + Math.random() * 3
    }));
  }
  function drawVortex(s, dt) {
    const {
      ctx,
      w,
      h
    } = s;
    const cx = w * (s.data.cx ?? 0.42);
    const cy = h * 0.5;
    const R = Math.min(w, h) * 0.62;
    // anillos guía
    for (let i = 1; i <= 5; i++) {
      ctx.beginPath();
      ctx.arc(cx, cy, R * (i / 5), 0, TAU);
      ctx.strokeStyle = `rgba(196,122,53,${0.05 + (5 - i) * 0.012})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    }
    for (const d of s.data.dots) {
      d.r -= dt * 0.06 * d.sp;
      d.a += dt * d.tw * (0.4 + (1 - d.r) * 1.3);
      if (d.r < 0.04) {
        d.r = 1.05;
        d.a = Math.random() * TAU;
      }
      const rr = d.r * R;
      const x = cx + Math.cos(d.a) * rr;
      const y = cy + Math.sin(d.a) * rr * 0.96;
      const close = 1 - d.r;
      const r = Math.round(196 + (60 - 196) * close);
      const g = Math.round(122 + (231 - 122) * close);
      const b = Math.round(53 + (225 - 53) * close);
      const alpha = Math.min(1, 0.25 + close * 0.75);
      const rad = 1 + close * 2.4;
      const grad = ctx.createRadialGradient(x, y, 0, x, y, rad * 4);
      grad.addColorStop(0, `rgba(${r},${g},${b},${alpha})`);
      grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(x, y, rad * 4, 0, TAU);
      ctx.fill();
    }
    const core = Math.sin(s.t * 1.3) * 0.5 + 0.5;
    const cg = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 0.16);
    cg.addColorStop(0, `rgba(60,231,225,${0.22 + core * 0.2})`);
    cg.addColorStop(1, 'rgba(60,231,225,0)');
    ctx.fillStyle = cg;
    ctx.beginPath();
    ctx.arc(cx, cy, R * 0.16, 0, TAU);
    ctx.fill();
  }

  /* ============================================================
     RIPPLES (beneficio · estructura el agua) — anillos hexagonales
     ============================================================ */
  function initRipple(s) {
    s.data.rings = [0, 0.33, 0.66];
  }
  function drawRipple(s) {
    const {
      ctx,
      w,
      h
    } = s;
    const cx = w * 0.5,
      cy = h * 0.42;
    const R = Math.min(w, h) * 0.62;
    const hexR = (cxp, cyp, rad, rot) => {
      ctx.beginPath();
      for (let i = 0; i <= 6; i++) {
        const a = rot + i / 6 * TAU;
        const x = cxp + Math.cos(a) * rad,
          y = cyp + Math.sin(a) * rad;
        i ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
      }
    };
    s.data.rings = s.data.rings.map(v => {
      let nv = v + 0.0016;
      if (nv > 1) nv -= 1;
      return nv;
    });
    for (const v of s.data.rings) {
      const rad = v * R;
      const alpha = (1 - v) * 0.5;
      hexR(cx, cy, rad, v * 1.2);
      ctx.strokeStyle = `rgba(60,231,225,${alpha})`;
      ctx.lineWidth = 1.2;
      ctx.stroke();
      hexR(cx, cy, rad * 0.7, -v * 1.2);
      ctx.strokeStyle = `rgba(196,122,53,${alpha * 0.7})`;
      ctx.stroke();
    }
  }

  /* ============================================================
     MALLA (beneficio · serena el campo) — red que respira
     ============================================================ */
  function initMesh(s) {
    const cols = 7,
      rows = 5;
    s.data.nodes = [];
    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) s.data.nodes.push({
      c,
      r,
      cols,
      rows,
      ph: Math.random() * TAU
    });
  }
  function drawMesh(s) {
    const {
      ctx,
      w,
      h
    } = s;
    const cols = 7,
      rows = 5;
    const px = c => c / (cols - 1) * w;
    const py = r => r / (rows - 1) * h;
    const pos = n => {
      const dx = Math.sin(s.t * 0.7 + n.ph) * 7;
      const dy = Math.cos(s.t * 0.6 + n.ph) * 7;
      return [px(n.c) + dx, py(n.r) + dy];
    };
    const idx = (c, r) => r * cols + c;
    ctx.lineWidth = 1;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const n = s.data.nodes[idx(c, r)];
        const [x, y] = pos(n);
        if (c < cols - 1) {
          const [x2, y2] = pos(s.data.nodes[idx(c + 1, r)]);
          ctx.strokeStyle = 'rgba(196,122,53,0.16)';
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        }
        if (r < rows - 1) {
          const [x2, y2] = pos(s.data.nodes[idx(c, r + 1)]);
          ctx.strokeStyle = 'rgba(196,122,53,0.16)';
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        }
        const pulse = Math.sin(s.t * 1.4 + n.ph) * 0.5 + 0.5;
        ctx.fillStyle = `rgba(60,231,225,${0.2 + pulse * 0.5})`;
        ctx.beginPath();
        ctx.arc(x, y, 1.4 + pulse * 1.6, 0, TAU);
        ctx.fill();
      }
    }
  }

  /* ============================================================
     ARRANQUE
     ============================================================ */
  function boot() {
    // ---------- REVEAL robusto: basado en scroll real (no depende de IO) ----------
    const rvEls = Array.from(document.querySelectorAll('.rv'));

    // espiral áurea — se construye con r = a·e^(bθ), b = ln(φ)/(π/2)
    const PHI = (1 + Math.sqrt(5)) / 2;
    const b = Math.log(PHI) / (Math.PI / 2);
    function buildGolden(p) {
      const cx = 470,
        cy = 545,
        a = 2.1,
        turns = 5.2;
      let d = '';
      const steps = 240,
        thetaMax = turns * Math.PI;
      for (let i = 0; i <= steps; i++) {
        const th = thetaMax - i / steps * thetaMax; // de afuera hacia el centro
        const r = a * Math.exp(b * th);
        const x = (cx + Math.cos(th) * r).toFixed(2);
        const y = (cy - Math.sin(th) * r).toFixed(2);
        d += (i ? 'L' : 'M') + x + ' ' + y + ' ';
      }
      p.setAttribute('d', d.trim());
    }
    const goldens = Array.from(document.querySelectorAll('path.golden'));
    goldens.forEach(p => {
      buildGolden(p);
      const len = p.getTotalLength();
      p.style.strokeDasharray = len;
      p.style.strokeDashoffset = len;
    });
    function revealCheck() {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      for (const el of rvEls) {
        if (el._shown) continue;
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.92 && r.bottom > 0) {
          el.classList.add('in');
          el._shown = true;
        }
      }
      for (const p of goldens) {
        if (p._drawn) continue;
        const r = p.getBoundingClientRect();
        if (r.top < vh * 0.85 && r.bottom > 0) {
          p.style.transition = 'stroke-dashoffset 2.6s cubic-bezier(.22,.61,.36,1)';
          p.style.strokeDashoffset = '0';
          p._drawn = true;
        }
      }
    }
    window.addEventListener('scroll', revealCheck, {
      passive: true
    });
    window.addEventListener('resize', revealCheck);
    revealCheck();
    requestAnimationFrame(revealCheck);
    // failsafe: si algo no se reveló (contexto sin scroll/IO raro), mostrarlo igual
    setTimeout(() => {
      rvEls.forEach(el => {
        if (!el._shown) {
          el.classList.add('in');
          el._shown = true;
        }
      });
      goldens.forEach(p => {
        if (!p._drawn) {
          p.style.transition = 'stroke-dashoffset 2.6s var(--ease,linear)';
          p.style.strokeDashoffset = '0';
          p._drawn = true;
        }
      });
    }, 2600);
    if (reduce) {
      // sin movimiento: todo visible, sin canvas
      rvEls.forEach(el => el.classList.add('in'));
      goldens.forEach(p => {
        p.style.strokeDashoffset = '0';
      });
      return;
    }

    // campos
    const hero = document.getElementById('field-hero');
    register(hero, drawTorus, initTorus);
    if (hero) {
      const s = scenes[scenes.length - 1];
      s.data.cx = 0.62;
      s.data.cy = 0.5;
      s.data.scale = 0.5;
      s.data.shellCount = 8;
      s.live = true;
    }
    register(document.getElementById('field-vortex'), drawVortex, initVortex);
    register(document.getElementById('field-close'), drawTorus, initTorus);
    const closeS = scenes[scenes.length - 1];
    if (closeS) {
      closeS.data.cx = 0.5;
      closeS.data.cy = 0.5;
      closeS.data.scale = 0.4;
      closeS.data.shellCount = 7;
      closeS.data.speed = 0.13;
    }
    document.querySelectorAll('canvas.fx-ripple').forEach(c => register(c, drawRipple, initRipple));
    document.querySelectorAll('canvas.fx-mesh').forEach(c => register(c, drawMesh, initMesh));
    document.querySelectorAll('canvas.fx-field').forEach(c => {
      register(c, drawTorus, initTorus);
      const s = scenes[scenes.length - 1];
      s.data.cx = 0.5;
      s.data.cy = 0.45;
      s.data.scale = 0.5;
      s.data.shellCount = 6;
      s.data.speed = 0.22;
    });
    scenes.forEach(s => {
      if (RO) RO.observe(s.canvas);
    });
    requestAnimationFrame(loop);

    // relayout defensivo: tras cargar fuentes/imágenes los tamaños cambian
    const relayout = () => scenes.forEach(s => s.resize());
    window.addEventListener('load', relayout);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(relayout);
    [200, 600, 1400].forEach(ms => setTimeout(relayout, ms));
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);else boot();
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "tienda/tensor/tensor.js", error: String((e && e.message) || e) }); }

})();
