(() => {
"use strict";

/* ============ NEURAL NETWORK BACKGROUND ============ */
const neuralCanvas = document.getElementById("neuralBg");
const nCtx = neuralCanvas.getContext("2d");
let nW, nH;

const nodes = [];
const NODE_COUNT = 60;

function resizeNeural() {
  nW = neuralCanvas.width = window.innerWidth;
  nH = neuralCanvas.height = window.innerHeight;
}
resizeNeural();

for (let i = 0; i < NODE_COUNT; i++) {
  nodes.push({
    x: Math.random() * 3000,
    y: Math.random() * 2000,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4,
    r: 2 + Math.random() * 2,
    pulse: Math.random() * Math.PI * 2
  });
}

function drawNeural(t) {
  nCtx.clearRect(0, 0, nW, nH);

  // Update & draw nodes
  for (const n of nodes) {
    n.x += n.vx;
    n.y += n.vy;
    if (n.x < 0 || n.x > nW) n.vx *= -1;
    if (n.y < 0 || n.y > nH) n.vy *= -1;
    n.pulse += 0.02;

    const alpha = 0.15 + 0.1 * Math.sin(n.pulse);
    nCtx.fillStyle = `rgba(0,240,255,${alpha})`;
    nCtx.beginPath();
    nCtx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
    nCtx.fill();

    // Glow
    nCtx.fillStyle = `rgba(0,240,255,${alpha * 0.15})`;
    nCtx.beginPath();
    nCtx.arc(n.x, n.y, n.r * 4, 0, Math.PI * 2);
    nCtx.fill();
  }

  // Draw connections
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 200) {
        const alpha = (1 - dist / 200) * 0.08;
        nCtx.strokeStyle = `rgba(0,240,255,${alpha})`;
        nCtx.lineWidth = 0.5;
        nCtx.beginPath();
        nCtx.moveTo(nodes[i].x, nodes[i].y);
        nCtx.lineTo(nodes[j].x, nodes[j].y);
        nCtx.stroke();
      }
    }
  }
}

/* ============ FLOATING SVG ICONS ============ */
const svgIcons = [
  // Brain / Neural
  `<svg viewBox="0 0 24 24" fill="none" stroke="CL" stroke-width="1.5"><path d="M12 2a4 4 0 014 4c0 1.95-1.4 3.57-3.25 3.92"/><path d="M8 6a4 4 0 014-4"/><circle cx="12" cy="14" r="4"/><path d="M12 18v4M8 22h8"/><path d="M7 14H3M21 14h-4"/></svg>`,
  // Bar chart
  `<svg viewBox="0 0 24 24" fill="none" stroke="CL" stroke-width="1.5"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>`,
  // Code
  `<svg viewBox="0 0 24 24" fill="none" stroke="CL" stroke-width="1.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  // Database / Server
  `<svg viewBox="0 0 24 24" fill="none" stroke="CL" stroke-width="1.5"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`,
  // Network nodes
  `<svg viewBox="0 0 24 24" fill="none" stroke="CL" stroke-width="1.5"><circle cx="12" cy="5" r="3"/><circle cx="5" cy="19" r="3"/><circle cx="19" cy="19" r="3"/><line x1="12" y1="8" x2="5" y2="16"/><line x1="12" y1="8" x2="19" y2="16"/></svg>`,
  // Gear
  `<svg viewBox="0 0 24 24" fill="none" stroke="CL" stroke-width="1.5"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>`,
  // Trending up
  `<svg viewBox="0 0 24 24" fill="none" stroke="CL" stroke-width="1.5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
  // CPU / Chip
  `<svg viewBox="0 0 24 24" fill="none" stroke="CL" stroke-width="1.5"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>`,
  // Lightning
  `<svg viewBox="0 0 24 24" fill="none" stroke="CL" stroke-width="1.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  // Layers
  `<svg viewBox="0 0 24 24" fill="none" stroke="CL" stroke-width="1.5"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
  // Target
  `<svg viewBox="0 0 24 24" fill="none" stroke="CL" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
  // Scatter / Grid
  `<svg viewBox="0 0 24 24" fill="none" stroke="CL" stroke-width="1.5"><circle cx="7" cy="7" r="2"/><circle cx="17" cy="7" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>`,
];

const floatColors = ["#00f0ff", "#b44dff", "#39ff14", "#ff2d7b", "#ffe600", "#ff6b2b"];
const floatContainer = document.getElementById("floatingIcons");

function spawnIcon() {
  const el = document.createElement("div");
  el.className = "fl-icon";
  const color = floatColors[Math.random() * floatColors.length | 0];
  const svg = svgIcons[Math.random() * svgIcons.length | 0].replace(/CL/g, color);
  el.innerHTML = svg;
  el.style.left = Math.random() * 100 + "%";
  const size = 24 + Math.random() * 20;
  el.style.width = size + "px";
  el.style.height = size + "px";
  el.style.animationDuration = (14 + Math.random() * 16) + "s";
  el.style.animationDelay = "0s";
  floatContainer.appendChild(el);
  setTimeout(() => el.remove(), 32000);
}

// Initial batch
for (let i = 0; i < 8; i++) {
  setTimeout(spawnIcon, i * 2000);
}
setInterval(spawnIcon, 3000);

/* ============ MOUSE PARTICLE TRAIL ============ */
const trailCanvas = document.getElementById("particleTrail");
const tCtx = trailCanvas.getContext("2d");
let tW, tH;
const particles = [];
let mouseX = -100, mouseY = -100;

function resizeTrail() {
  tW = trailCanvas.width = window.innerWidth;
  tH = trailCanvas.height = window.innerHeight;
}
resizeTrail();

window.addEventListener("mousemove", e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  for (let i = 0; i < 2; i++) {
    particles.push({
      x: mouseX + (Math.random() - 0.5) * 10,
      y: mouseY + (Math.random() - 0.5) * 10,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      life: 1,
      color: Math.random() > 0.5 ? "0,240,255" : "180,77,255"
    });
  }
});

function drawTrail() {
  tCtx.clearRect(0, 0, tW, tH);
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.x += p.vx;
    p.y += p.vy;
    p.life -= 0.02;
    if (p.life <= 0) { particles.splice(i, 1); continue; }
    tCtx.fillStyle = `rgba(${p.color},${p.life * 0.5})`;
    tCtx.beginPath();
    tCtx.arc(p.x, p.y, p.life * 3, 0, Math.PI * 2);
    tCtx.fill();
  }
}

/* ============ HERO NEURAL NETWORK DIAGRAM ============ */
const heroCanvas = document.getElementById("heroNN");
const hCtx = heroCanvas.getContext("2d");

const layers = [3, 5, 6, 5, 3, 2];
const nnNodes = [];

function initHeroNN() {
  nnNodes.length = 0;
  const cw = heroCanvas.width;
  const ch = heroCanvas.height;
  const layerGap = cw / (layers.length + 1);

  for (let l = 0; l < layers.length; l++) {
    const count = layers[l];
    const nodeGap = ch / (count + 1);
    for (let n = 0; n < count; n++) {
      nnNodes.push({
        x: layerGap * (l + 1),
        y: nodeGap * (n + 1),
        layer: l,
        idx: n,
        pulse: Math.random() * Math.PI * 2
      });
    }
  }
}
initHeroNN();

function drawHeroNN(t) {
  hCtx.clearRect(0, 0, heroCanvas.width, heroCanvas.height);

  // Draw connections
  for (const n1 of nnNodes) {
    for (const n2 of nnNodes) {
      if (n2.layer === n1.layer + 1) {
        const signal = (Math.sin(t * 0.003 + n1.idx + n2.idx) + 1) / 2;
        const alpha = 0.03 + signal * 0.08;
        hCtx.strokeStyle = `rgba(0,240,255,${alpha})`;
        hCtx.lineWidth = 0.5 + signal * 0.5;
        hCtx.beginPath();
        hCtx.moveTo(n1.x, n1.y);
        hCtx.lineTo(n2.x, n2.y);
        hCtx.stroke();

        // Signal dot traveling along connection
        if (signal > 0.7) {
          const prog = (t * 0.002 + n1.idx * 0.3) % 1;
          const sx = n1.x + (n2.x - n1.x) * prog;
          const sy = n1.y + (n2.y - n1.y) * prog;
          hCtx.fillStyle = `rgba(0,240,255,${signal * 0.4})`;
          hCtx.beginPath();
          hCtx.arc(sx, sy, 1.5, 0, Math.PI * 2);
          hCtx.fill();
        }
      }
    }
  }

  // Draw nodes
  const colors = ["#00f0ff", "#b44dff", "#39ff14", "#ff2d7b", "#ffe600", "#ff6b2b"];
  for (const n of nnNodes) {
    n.pulse += 0.03;
    const glow = 0.4 + 0.3 * Math.sin(n.pulse);
    const c = colors[n.layer % colors.length];

    // Glow
    hCtx.fillStyle = c;
    hCtx.globalAlpha = glow * 0.15;
    hCtx.beginPath();
    hCtx.arc(n.x, n.y, 12, 0, Math.PI * 2);
    hCtx.fill();

    // Node
    hCtx.globalAlpha = glow;
    hCtx.beginPath();
    hCtx.arc(n.x, n.y, 4, 0, Math.PI * 2);
    hCtx.fill();

    hCtx.globalAlpha = 1;
  }

  // Layer labels
  hCtx.font = "9px 'JetBrains Mono', monospace";
  hCtx.textAlign = "center";
  const labelNames = ["Input", "Hidden", "Hidden", "Hidden", "Dense", "Output"];
  const layerGap = heroCanvas.width / (layers.length + 1);
  hCtx.fillStyle = "rgba(255,255,255,0.15)";
  for (let l = 0; l < layers.length; l++) {
    hCtx.fillText(labelNames[l] || "", layerGap * (l + 1), heroCanvas.height - 10);
  }
}

/* ============ SKILLS ORBIT ============ */
const skillsCanvas = document.getElementById("skillsOrbit");
const sCtx = skillsCanvas ? skillsCanvas.getContext("2d") : null;

const orbitItems = [
  { label: "Python", dist: 80, speed: 0.008, color: "#00f0ff", size: 14 },
  { label: "PyTorch", dist: 130, speed: -0.006, color: "#ff2d7b", size: 13 },
  { label: "SQL", dist: 100, speed: 0.01, color: "#39ff14", size: 13 },
  { label: "PySpark", dist: 160, speed: 0.005, color: "#b44dff", size: 12 },
  { label: "Azure", dist: 190, speed: -0.004, color: "#ffe600", size: 11 },
  { label: "Pandas", dist: 110, speed: 0.009, color: "#00f0ff", size: 11 },
  { label: "Docker", dist: 220, speed: 0.003, color: "#ff6b2b", size: 10 },
  { label: "TensorFlow", dist: 170, speed: -0.007, color: "#ff2d7b", size: 11 },
  { label: "Kafka", dist: 200, speed: 0.004, color: "#39ff14", size: 10 },
  { label: "scikit", dist: 140, speed: -0.008, color: "#b44dff", size: 11 },
  { label: "NumPy", dist: 120, speed: 0.007, color: "#00f0ff", size: 10 },
  { label: "Databricks", dist: 240, speed: -0.003, color: "#ffe600", size: 10 },
  { label: "AI Agents", dist: 150, speed: 0.006, color: "#ff2d7b", size: 11 },
  { label: "SAP", dist: 180, speed: -0.005, color: "#00f0ff", size: 11 },
  { label: "AWS", dist: 210, speed: 0.0045, color: "#ff6b2b", size: 11 },
];

function drawSkillsOrbit(t) {
  if (!sCtx) return;
  const cw = skillsCanvas.width;
  const ch = skillsCanvas.height;
  const cx = cw / 2;
  const cy = ch / 2;

  sCtx.clearRect(0, 0, cw, ch);

  // Orbit rings
  [80, 130, 160, 200, 240].forEach(r => {
    sCtx.strokeStyle = "rgba(0,240,255,0.04)";
    sCtx.lineWidth = 0.5;
    sCtx.beginPath();
    sCtx.arc(cx, cy, r, 0, Math.PI * 2);
    sCtx.stroke();
  });

  // Center node
  sCtx.fillStyle = "rgba(0,240,255,0.08)";
  sCtx.beginPath();
  sCtx.arc(cx, cy, 30, 0, Math.PI * 2);
  sCtx.fill();
  sCtx.fillStyle = "#00f0ff";
  sCtx.font = "bold 11px 'JetBrains Mono', monospace";
  sCtx.textAlign = "center";
  sCtx.textBaseline = "middle";
  sCtx.fillText("ML", cx, cy);

  // Orbiting items
  for (const item of orbitItems) {
    const angle = t * item.speed;
    const x = cx + Math.cos(angle) * item.dist;
    const y = cy + Math.sin(angle) * item.dist * 0.6;

    // Connection to center
    sCtx.strokeStyle = `${item.color}15`;
    sCtx.lineWidth = 0.5;
    sCtx.beginPath();
    sCtx.moveTo(cx, cy);
    sCtx.lineTo(x, y);
    sCtx.stroke();

    // Node glow
    sCtx.fillStyle = item.color;
    sCtx.globalAlpha = 0.08;
    sCtx.beginPath();
    sCtx.arc(x, y, 18, 0, Math.PI * 2);
    sCtx.fill();

    // Node
    sCtx.globalAlpha = 0.7;
    sCtx.beginPath();
    sCtx.arc(x, y, 4, 0, Math.PI * 2);
    sCtx.fill();

    // Label
    sCtx.globalAlpha = 0.6;
    sCtx.font = `${item.size}px 'JetBrains Mono', monospace`;
    sCtx.fillText(item.label, x, y - 12);
    sCtx.globalAlpha = 1;
  }
}

/* ============ TYPING ANIMATION ============ */
const roles = ["Data Scientist", "ML Engineer", "Analytics Engineer", "Deep Learning Researcher", "Experimentation Engineer"];
let rIdx = 0, cIdx = 0, deleting = false;
const roleEl = document.getElementById("roleText");

function typeRole() {
  const cur = roles[rIdx];
  if (!deleting) {
    roleEl.textContent = cur.slice(0, cIdx + 1);
    cIdx++;
    if (cIdx === cur.length) { deleting = true; setTimeout(typeRole, 2200); return; }
    setTimeout(typeRole, 70);
  } else {
    roleEl.textContent = cur.slice(0, cIdx - 1);
    cIdx--;
    if (cIdx === 0) { deleting = false; rIdx = (rIdx + 1) % roles.length; setTimeout(typeRole, 400); return; }
    setTimeout(typeRole, 35);
  }
}
typeRole();

/* ============ COUNTER ANIMATION ============ */
function animateCounters() {
  document.querySelectorAll(".stat-num").forEach(el => {
    const target = +el.dataset.target;
    const dur = 1500;
    const start = performance.now();
    function step(now) {
      const p = Math.min((now - start) / dur, 1);
      el.textContent = Math.round(p * target);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  });
}

/* ============ SCROLL REVEAL ============ */
let countersAnimated = false;
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("v");
      // Trigger skill bar fill
      const fill = e.target.querySelector(".skill-fill");
      if (fill) {
        e.target.classList.add("v");
      }
      // Trigger counters
      if (!countersAnimated && e.target.closest(".hero-stats")) {
        countersAnimated = true;
        animateCounters();
      }
    }
  });
}, { threshold: 0.15, rootMargin: "0px 0px -30px 0px" });

document.querySelectorAll(".rv").forEach(el => observer.observe(el));

/* ============ NAV ============ */
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 60);
});

/* Mobile Menu */
const navToggle = document.getElementById("navToggle");
const mobileNav = document.getElementById("mobileNav");
navToggle.addEventListener("click", () => mobileNav.classList.toggle("open"));
mobileNav.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => mobileNav.classList.remove("open"));
});

/* Smooth Scroll */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href === "#") return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

/* ============ SKILL CARD COLORS ============ */
document.querySelectorAll(".skill-card").forEach(card => {
  const color = card.dataset.color;
  if (color) card.style.setProperty("--card-color", color);
});

/* ============ RESIZE ============ */
window.addEventListener("resize", () => {
  resizeNeural();
  resizeTrail();
});

/* ============ MAIN ANIMATION LOOP ============ */
let frame = 0;
function animate() {
  frame++;
  drawNeural(frame);
  drawTrail();
  drawHeroNN(frame);
  if (frame % 2 === 0) drawSkillsOrbit(frame);
  requestAnimationFrame(animate);
}
animate();

})();
