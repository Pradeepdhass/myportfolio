
    // 1. Initialize AOS Animation
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });

    // 2. Typing Effect Logic
    const texts = ["Web Developer", "UI/UX Enthusiast", "Code Creator", "Music Composer"];
    let count = 0;
    let index = 0;
    let currentText = "";
    let letter = "";

    (function type() {
      if (count === texts.length) { count = 0; }
      currentText = texts[count];
      letter = currentText.slice(0, ++index);
      document.querySelector(".typing-text").textContent = letter;
      if (letter.length === currentText.length) {
        count++; index = 0; setTimeout(type, 2000); 
      } else {
        setTimeout(type, 200); 
      }
    })();

    // 3. Scroll Progress Bar
    window.onscroll = function() {
      let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      let scrolled = (winScroll / height) * 100;
      document.getElementById("progress-bar").style.width = scrolled + "%";
    };

    // 4. Mobile Sidebar Toggle
    function toggleSidebar() {
      document.getElementById('sidebar').classList.toggle('active');
    }
    document.addEventListener('click', function(event) {
        var sidebar = document.getElementById('sidebar');
        var toggleBtn = document.querySelector('.mobile-toggle');
        if (!sidebar.contains(event.target) && !toggleBtn.contains(event.target) && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        }
    });

    // 5. Dark/Light Mode Toggle

(function () {
  const themeToggle = document.getElementById('themeToggle');
  const palette = document.getElementById('themePalette');
  const body = document.body;
  const root = document.documentElement;

  const BASES = {
    dark: {
      '--bg-body': '#071017',
      '--bg-card': 'rgba(18,22,30,0.6)',
      '--text-main': '#e9f9ff',
      '--text-muted': 'rgba(255,255,255,0.68)',
      '--glass-border': 'rgba(255,255,255,0.06)',
      '--shadow-color': 'rgba(2,6,12,0.6)'
    },
    light: {
      '--bg-body': '#f0f2f5',
      '--bg-card': 'rgba(255,255,255,0.92)',
      '--text-main': '#0b1220',
      '--text-muted': '#64748b',
      '--glass-border': 'rgba(0,0,0,0.06)',
      '--shadow-color': 'rgba(0,0,0,0.08)'
    }
  };

  const ACCENTS = {
    pink: {
      '--color-pink': '#ff4db0',
      '--color-cyan': '#22d3ee',
      '--color-orange': '#fb923c',
      '--color-green': '#34d399',
      '--color-purple': '#a78bfa',
      '--gradient-primary': 'linear-gradient(135deg,#ff4db0 0%, #a78bfa 100%)',
      '--gradient-warm': 'linear-gradient(135deg,#ff7ab6 0%, #ff3b88 100%)'
    },
    red: {
      '--color-pink': '#ff6b6b',
      '--color-cyan': '#22d3ee',
      '--color-orange': '#ff4d4d',
      '--color-green': '#34d399',
      '--color-purple': '#ef4444',
      '--gradient-primary': 'linear-gradient(135deg,#ff6b6b 0%, #ef4444 100%)',
      '--gradient-warm': 'linear-gradient(135deg,#ff7b6b 0%, #ff3b3b 100%)'
    },
    green: {
      '--color-pink': '#fb7185',
      '--color-cyan': '#06b6d4',
      '--color-orange': '#f97316',
      '--color-green': '#10b981',
      '--color-purple': '#7c3aed',
      '--gradient-primary': 'linear-gradient(135deg,#34d399 0%, #059669 100%)',
      '--gradient-warm': 'linear-gradient(135deg,#34d399 0%, #10b981 100%)'
    },
    cyan: {
      '--color-pink': '#ff77d2',
      '--color-cyan': '#06b6d4',
      '--color-orange': '#fb923c',
      '--color-green': '#34d399',
      '--color-purple': '#60a5fa',
      '--gradient-primary': 'linear-gradient(135deg,#22d3ee 0%, #06b6d4 100%)',
      '--gradient-warm': 'linear-gradient(135deg,#22d3ee 0%, #60a5fa 100%)'
    },
    purple: {
      '--color-pink': '#f472b6',
      '--color-cyan': '#22d3ee',
      '--color-orange': '#fb923c',
      '--color-green': '#34d399',
      '--color-purple': '#8b5cf6',
      '--gradient-primary': 'linear-gradient(135deg,#a78bfa 0%, #7c3aed 100%)',
      '--gradient-warm': 'linear-gradient(135deg,#a78bfa 0%, #ff7ab6 100%)'
    },
    orange: {
      '--color-pink': '#ff7ab6',
      '--color-cyan': '#22d3ee',
      '--color-orange': '#fb923c',
      '--color-green': '#34d399',
      '--color-purple': '#f97316',
      '--gradient-primary': 'linear-gradient(135deg,#fb923c 0%, #f97316 100%)',
      '--gradient-warm': 'linear-gradient(135deg,#fb923c 0%, #ff7ab6 100%)'
    },
  
  };

  function applyVars(vars = {}) {
    if (!vars) return;
    root.classList.add('theme-anim');
    Object.keys(vars).forEach(k => root.style.setProperty(k, vars[k]));
    setTimeout(() => root.classList.remove('theme-anim'), 520);
  }

  // Apply theme mode base (dark or light)
  function applyThemeBase(mode = 'dark') {
    const base = BASES[mode] || BASES.dark;
    applyVars(base);
    if (mode === 'light') {
      body.classList.add('light-mode');
      body.classList.remove('dark-mode');
    } else {
      body.classList.remove('light-mode');
      body.classList.add('dark-mode');
    }
    localStorage.setItem('theme', mode);
  }

  function setAccent(accentName) {
    if (!ACCENTS[accentName]) return;
    applyVars(ACCENTS[accentName]);
    document.querySelectorAll('.palette-swatch').forEach(btn => {
      btn.classList.toggle('selected', btn.dataset.accent === accentName);
    });
    localStorage.setItem('accent', accentName);
  }

  const storedTheme = localStorage.getItem('theme') || 'dark'; 
  const storedAccent = localStorage.getItem('accent') || 'pink';
  applyThemeBase(storedTheme);
  if (ACCENTS[storedAccent]) setAccent(storedAccent);
  function openPalette(open = true) {
    if (!palette) return;
    palette.classList.toggle('open', !!open);
    themeToggle.setAttribute('aria-expanded', !!open);
    if (open) {
      const first = palette.querySelector('.palette-swatch');
      if (first) first.focus();
      setTimeout(() => {
        document.addEventListener('click', outsideClick);
        document.addEventListener('keydown', onKeyDown);
      }, 0);
    } else {
      document.removeEventListener('click', outsideClick);
      document.removeEventListener('keydown', onKeyDown);
    }
  }
  function outsideClick(e) {
    if (!palette.contains(e.target) && !themeToggle.contains(e.target)) openPalette(false);
  }
  function onKeyDown(e) { if (e.key === 'Escape') openPalette(false); }

  if (themeToggle) {
    themeToggle.addEventListener('click', (ev) => {
      const isOpen = palette.classList.contains('open');
      openPalette(!isOpen);
      ev.stopPropagation();
    });
  }

  if (palette) {
    palette.addEventListener('click', (ev) => {
      const sw = ev.target.closest('.palette-swatch');
      if (!sw) return;
      const accent = sw.dataset.accent;
      if (!accent) return;
      if (accent === 'light' || accent === 'dark') {
        applyThemeBase(accent);
        const savedAccent = localStorage.getItem('accent') || 'pink';
        if (ACCENTS[savedAccent]) applyVars(ACCENTS[savedAccent]);
        localStorage.setItem('theme', accent);
      } else {
        applyThemeBase('dark');
        setAccent(accent);
      }

      openPalette(false);
    });
    
    palette.addEventListener('keydown', (ev) => {
      const focusable = Array.from(palette.querySelectorAll('.palette-swatch'));
      const idx = focusable.indexOf(document.activeElement);
      if (ev.key === 'ArrowRight' || ev.key === 'ArrowDown') {
        ev.preventDefault(); focusable[(idx + 1) % focusable.length].focus();
      } else if (ev.key === 'ArrowLeft' || ev.key === 'ArrowUp') {
        ev.preventDefault(); focusable[(idx - 1 + focusable.length) % focusable.length].focus();
      } else if (ev.key === 'Enter' || ev.key === ' ') {
        ev.preventDefault(); document.activeElement.click();
      }
    });
  }
  window.__applyThemeBase = applyThemeBase;
  window.__setAccent = setAccent;
})();


/*6.Skill Bar Animation & Touch Support*/
document.addEventListener("DOMContentLoaded", function () {
  const tags = document.querySelectorAll(".skill-tag");
  tags.forEach(tag => {
    const raw = tag.getAttribute("data-percent") || "0";
    const pct = parseFloat(raw.replace("%","")) || 0;
    tag.style.setProperty("--percent-width", pct + "%");
    tag.addEventListener("touchstart", () => {
      tags.forEach(t => t.classList.remove("touch-hover")); 
      tag.classList.add("touch-hover");
    }, { passive: true });
    tag.addEventListener("touchend", () => {
      setTimeout(() => tag.classList.remove("touch-hover"), 1200);
    });
  });
});
  
/* --- FOOTER LOGIC --- */

document.addEventListener('DOMContentLoaded', function () {
  const yearEl = document.getElementById('footerYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  const back = document.getElementById('footerBackTop');
  if (back) {
    function scroller() {
      if (window.scrollY > 300) back.classList.add('show');
      else back.classList.remove('show');
    }
    scroller();
    window.addEventListener('scroll', scroller);
    back.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});

/* --- BLOB LOGIC --- */

(function(){
  const icons = Array.from(document.querySelectorAll('.ficon'));
  if (!icons.length) return;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) {
    icons.forEach(el => {
      const dx = Number(el.dataset.x) || 0;
      const dy = Number(el.dataset.y) || 0;
      el.style.left = `calc(50% + ${dx}vw)`;
      el.style.top  = `calc(50% + ${dy}vh)`;
    });
    return;
  }

  const global = {
    baseAmplitude: 40,
    baseSpeed: 0.0022,   
    parallaxStrength: 0.04,
  };

  const items = icons.map((el, i) => {
    const dx = Number(el.dataset.x) || 0; 
    const dy = Number(el.dataset.y) || 0;
    const speedAttr = Number(el.dataset.speed) || (10 + (i % 6));
    const amp = (global.baseAmplitude * (0.6 + Math.random() * 1.4)) * (1 + (i%3)*0.12);
    const omega = global.baseSpeed * (12 / (speedAttr || 10)); 
    const phase = Math.random() * Math.PI * 2;
    const dir = (Math.random() > 0.5) ? 1 : -1;
    const cx = (window.innerWidth / 2) + (dx / 100) * window.innerWidth;
    const cy = (window.innerHeight/ 2) + (dy / 100) * window.innerHeight;
    const zIndexFactor = 1 + (i % 5) * 0.12;
    const ax = amp * (0.6 + Math.random() * 0.9);
    const ay = amp * (0.4 + Math.random() * 0.9);

    el.style.left = `calc(50% + ${dx}vw)`;
    el.style.top  = `calc(50% + ${dy}vh)`;
    el.style.willChange = 'transform, left, top';
    return { el, cx, cy, ax, ay, omega, phase, dir, zIndexFactor };
  });

  let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }, { passive: true });
  let last = performance.now();
  function loop(now) {
    const dt = now - last;
    last = now;
    const nx = ((mouseX / window.innerWidth) - 0.5) * 2;
    const ny = ((mouseY / window.innerHeight) - 0.5) * 2;
    items.forEach((it, idx) => {
      const { el, cx, cy, ax, ay, omega, phase, dir, zIndexFactor } = it;
      it.phase += omega * dt * dir;
      const x = cx + Math.cos(it.phase * 1.0) * ax;
      const y = cy + Math.sin(it.phase * 1.3) * ay;
      const px = -nx * global.parallaxStrength * (60 * zIndexFactor);
      const py = -ny * global.parallaxStrength * (40 * zIndexFactor);
      const rect = el.getBoundingClientRect();
      const currentCenterX = rect.left + rect.width / 2;
      const currentCenterY = rect.top + rect.height / 2;
      const targetX = x + px;
      const targetY = y + py;
      const dxPixel = targetX - currentCenterX;
      const dyPixel = targetY - currentCenterY;
      el.style.transform = `translate3d(${dxPixel}px, ${dyPixel}px, 0)`;
      const rot = Math.sin(it.phase * 0.7) * 8 * (zIndexFactor / 1.8);
      el.style.rotate = `${rot}deg`;
      el.style.zIndex = String(Math.round(10 + zIndexFactor * 10));
      el.style.opacity = String(0.85 + (Math.sin(it.phase*0.6) * 0.06));
    });
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
  window.addEventListener('resize', () => {
    items.forEach(it => {
      const el = it.el;
      const left = parseFloat(getComputedStyle(el).left) || (window.innerWidth/2);
      const top  = parseFloat(getComputedStyle(el).top)  || (window.innerHeight/2);
      const dx = Number(el.dataset.x) || 0;
      const dy = Number(el.dataset.y) || 0;
      it.cx = (window.innerWidth / 2) + (dx / 100) * window.innerWidth;
      it.cy = (window.innerHeight/ 2) + (dy / 100) * window.innerHeight;
    });
  }, { passive: true });
  window.addEventListener('touchstart', () => {
  }, { passive: true });
})();

    document.addEventListener('DOMContentLoaded', async () => {
      try {
        const res = await fetch('floating-icons.html');
        if (!res.ok) throw new Error('HTTP ' + res.status);
        const text = await res.text();
        document.getElementById('particles-container').innerHTML = text;
        console.log('Inserted floating-icons.html');
      } catch (err) {
        console.error('Failed to load floating-icons.html —', err);
      }
    });

/* --- PRELOADER LOGIC --- */

(function(){
  const pre = document.getElementById('preloader-term');
  if(!pre) return;
  const output = pre.querySelector('.term-output');
  const footer = pre.querySelector('.term-footer');
  const lines = [
  "Warming up creativity… ✨",
  "Designing UI elements… 🎨",
  "Linking frontend scripts… 💻",
  "Final touches… 🚀"
];

  let lineIndex = 0;
  let charIndex = 0;
  let typedLines = [""]; 
  function typeChar() {
    if (!pre) return;
    const current = lines[lineIndex] || "";
    if (charIndex <= current.length) {
      typedLines[typedLines.length - 1] = current.slice(0, charIndex);
      render();
      charIndex++;
      const delay = 18 + Math.random() * 30;
      setTimeout(typeChar, delay);
    } else {
      lineIndex++;
      charIndex = 0;
      if (lineIndex < lines.length) {
        typedLines.push("");
        setTimeout(typeChar, 420 + Math.random() * 260);
      } else {
        setTimeout(finalize, 600);
      }
    }
  }

  function render(){
    if (!output) return;
    output.textContent = typedLines.join("\n");
    if (footer) {
      const pct = Math.round((lineIndex / lines.length) * 100);
      footer.textContent = pct < 100 ? "Loading — " + pct + "%" : "Ready";
    }
  }

  function finalize(){
    if (!pre) return;

    typedLines.push("");
    output.textContent = typedLines.join("\n") + "\n\nAll systems ready.";
    if (footer) footer.textContent = "Ready";
  
    setTimeout(() => {
      document.body.classList.add('loaded');
      setTimeout(()=> pre.remove?.(), 700);
    }, 600);
  }
 
  window.addEventListener('load', () => setTimeout(typeChar, 180));
  setTimeout(() => {
    if (!document.body.classList.contains('loaded')) {
      setTimeout(typeChar, 150);
    }
  }, 1600);

  window.__preloaderReady = function(){
    finalize();
  };
})();


/* ===== Scroll Mask Reveal — Repeat on every enter ===== */
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('[data-reveal]').forEach(el => {
      el.classList.add('reveal', 'is-visible');
    });
    return;
  }

  const rootMargin = '0px 0px -12% 0px';
  const threshold = 0.12;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const el = entry.target;
      if (entry.isIntersecting) {
        if (!el.classList.contains('reveal')) el.classList.add('reveal');
        el.classList.add('is-visible');
      } else {
        const repeatAttr = el.getAttribute('data-reveal-repeat');
        if (repeatAttr === 'false') {
        } else {
          el.classList.remove('is-visible');
        }
      }
    });
  }, { root: null, rootMargin, threshold });

  document.querySelectorAll('[data-reveal]').forEach(target => {
    if (!target.classList.contains('reveal')) target.classList.add('reveal');
    if (!target.hasAttribute('data-direction')) target.setAttribute('data-direction', 'ltr');
    const group = target.closest('.reveal-group');
    if (group) {
      const children = Array.from(group.querySelectorAll('[data-reveal]'));
      const index = children.indexOf(target);
      const base = Number(group.getAttribute('data-stagger-base')) || 80;
      target.style.setProperty('--reveal-delay', `${index * base}ms`);
    }
    io.observe(target);
  });
})();



document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("scrollToggle");
  const icon = btn.querySelector("i");

  const THRESHOLD = 50;

  function updateButton() {
    if (window.scrollY > THRESHOLD) {
      // show UP arrow
      icon.className = "fas fa-arrow-up";
    } else {
      // show DOWN arrow
      icon.className = "fas fa-arrow-down";
    }
    btn.classList.add("show");
  }

  function onClick() {
    if (window.scrollY > THRESHOLD) {
      // scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // scroll down one viewport
      window.scrollBy({ top: window.innerHeight * 0.9, behavior: "smooth" });
    }
  }

  window.addEventListener("scroll", updateButton, { passive: true });
  btn.addEventListener("click", onClick);

  updateButton(); // initial state
});
