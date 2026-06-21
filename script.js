(() => {
"use strict";

/* ============ PORTFOLIO DATA ============ */
const DATA = {
  about: {
    tag: "01 // ABOUT",
    title: "ABOUT_ME",
    html: `
      <p>I work at the intersection of analytics, experimentation, and ML engineering. Over 4+ years, I've built production telemetry pipelines, designed A/B testing infrastructure, developed anomaly detection systems, and trained deep learning models that inform real product decisions.</p>
      <p>My toolkit: Python, SQL, PySpark, PyTorch. I've defined metric frameworks and event schemas, built feedback-loop pipelines surfacing usage patterns and regressions, and architected Azure data systems processing millions of records.</p>
      <p>Currently pursuing M.S. Data Science at the University of Houston.</p>
      <div class="info-row">
        <div class="info-item"><strong>LOCATION</strong>Houston, TX</div>
        <div class="info-item"><strong>EDUCATION</strong>M.S. Data Science, UH</div>
        <div class="info-item"><strong>FOCUS</strong>Analytics, ML, Experimentation</div>
      </div>
    `
  },
  skills: {
    tag: "02 // SKILLS",
    title: "TECH_STACK",
    html: `
      <h3>STATISTICS / DATA SCIENCE</h3>
      <div><span class="tag">A/B Testing</span><span class="tag">Hypothesis Testing</span><span class="tag">Experimental Design</span><span class="tag">Anomaly Detection</span><span class="tag">Regression</span><span class="tag">Metric Design</span></div>
      <h3>LANGUAGES & TOOLS</h3>
      <div><span class="tag">Python</span><span class="tag">Pandas</span><span class="tag">NumPy</span><span class="tag">scikit-learn</span><span class="tag">SQL</span><span class="tag">PySpark</span><span class="tag">PyTorch</span><span class="tag">Bash</span></div>
      <h3>DATA SYSTEMS</h3>
      <div><span class="tag">Azure ADLS</span><span class="tag">Synapse</span><span class="tag">Databricks</span><span class="tag">Fabric</span><span class="tag">Data Factory</span><span class="tag">Kafka</span><span class="tag">Docker</span><span class="tag">Kubernetes</span></div>
      <h3>ML / DEEP LEARNING</h3>
      <div><span class="tag">PyTorch</span><span class="tag">TensorFlow</span><span class="tag">Feature Engineering</span><span class="tag">Model Training</span><span class="tag">Experiment Logging</span><span class="tag">GPU Profiling</span></div>
    `
  },
  experience: {
    tag: "03 // EXPERIENCE",
    title: "EXP_LOG",
    html: `
      <div class="xp-block">
        <h4>Data Scientist Intern / Analytics Engineer</h4>
        <div class="xp-company">Advanced Energy</div>
        <div class="xp-meta">2025 - NOW · Houston, TX</div>
        <ul>
          <li>Define telemetry and event-tracking schemas; build Python/SQL data pipelines that clean, validate, and transform SAP enterprise data.</li>
          <li>Build feature-engineering and feature-selection workflows using Python, PySpark, and SQL.</li>
          <li>Investigate trends, anomalies, and data-quality issues; translate ambiguous business questions into measurable metrics.</li>
        </ul>
      </div>
      <div class="xp-block">
        <h4>Machine Learning Research Engineer</h4>
        <div class="xp-company">University of Houston</div>
        <div class="xp-meta">MAR 2025 - NOW · Houston, TX</div>
        <ul>
          <li>Design and train PyTorch deep learning models for large-scale spatial transcriptomics analysis.</li>
          <li>Profile model-training bottlenecks with torch.profiler and nvidia-smi.</li>
          <li>Convert statistical outputs into interpretable visualizations for research stakeholders.</li>
        </ul>
      </div>
      <div class="xp-block">
        <h4>Senior Data Engineer / Technical Lead</h4>
        <div class="xp-company">HCLTech</div>
        <div class="xp-meta">JUL 2022 - DEC 2024 · Chennai, India</div>
        <ul>
          <li>Owned product telemetry and instrumentation contracts for a medical application.</li>
          <li>Designed A/B testing infrastructure including metric definitions, treatment/control assignment, significance tooling.</li>
          <li>Built feedback-loop pipelines surfacing usage patterns, regressions, and anomalies.</li>
          <li>Architected Azure data systems with ADLS, Synapse, Databricks, PySpark processing millions of records.</li>
        </ul>
      </div>
      <div class="xp-block">
        <h4>Data Engineering Intern</h4>
        <div class="xp-company">BitWise Academy</div>
        <div class="xp-meta">MAY 2021 - SEP 2021 · Chennai, India</div>
        <ul>
          <li>Built Python ETL pipelines with REST API integrations and SQL validation.</li>
        </ul>
      </div>
    `
  },
  projects: {
    tag: "04 // PROJECTS",
    title: "PROJ_FILES",
    html: `
      <div class="proj-card">
        <h4>Performance Metrics & Experimentation Framework</h4>
        <p>Event-schema contracts, metric definitions, treatment/control datasets, and significance-testing outputs for feature-rollout decisions at scale.</p>
        <div><span class="tag">PySpark</span><span class="tag">SQL</span><span class="tag">Azure Synapse</span><span class="tag">ADLS</span></div>
      </div>
      <div class="proj-card">
        <h4>Real-Time Anomaly Detection Feedback Loop</h4>
        <p>Telemetry aggregation and anomaly checks to detect metric regressions and alert engineering teams.</p>
        <div><span class="tag">PySpark</span><span class="tag">SQL</span><span class="tag">Kafka</span><span class="tag">Power BI</span></div>
      </div>
      <div class="proj-card">
        <h4>Deep Learning Evaluation Pipeline</h4>
        <p>Reproducible large-data ML workflow: ingestion, feature engineering, training, validation, checkpointing, experiment logging.</p>
        <div><span class="tag">PyTorch</span><span class="tag">Python</span><span class="tag">HPC</span><span class="tag">Git</span></div>
      </div>
      <div class="proj-card">
        <h4>Sensor / Test Data Validation Tool</h4>
        <p>Processed multimodal sensor/test data, benchmarked outputs, flagged anomalies and failure modes for safety analysis.</p>
        <div><span class="tag">Python</span><span class="tag">Pandas</span><span class="tag">PyTorch</span></div>
      </div>
    `
  },
  contact: {
    tag: "05 // CONTACT",
    title: "INIT_CONTACT",
    html: `
      <p>Looking for Data Scientist and ML Engineer opportunities. My inbox is always open.</p>
      <div class="info-row">
        <div class="info-item"><strong>EMAIL</strong><a href="mailto:shaikwasimakram2000@gmail.com">shaikwasimakram2000@gmail.com</a></div>
        <div class="info-item"><strong>PHONE</strong>+1 (346) 383-7704</div>
      </div>
      <div class="info-row">
        <div class="info-item"><strong>LINKEDIN</strong><a href="https://linkedin.com/in/wasimakramshaik" target="_blank">linkedin.com/in/wasimakramshaik</a></div>
        <div class="info-item"><strong>GITHUB</strong><a href="https://github.com/wasimakrammind" target="_blank">github.com/wasimakrammind</a></div>
      </div>
    `
  }
};

/* ============ CANVAS SETUP ============ */
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
let W, H, scale;

function resize() {
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
  scale = H / 600;
}
resize();
window.addEventListener("resize", resize);

/* ============ WORLD CONFIG ============ */
const WORLD_W = 3200;
const GROUND_Y = 0.78;
const COLORS = {
  sky1: "#05050f", sky2: "#0c0c25",
  ground: "#0a0a14", groundLine: "#0ff",
  cyan: "#00f0ff", pink: "#ff2d7b", purple: "#b44dff",
  green: "#39ff14", yellow: "#ffe600", orange: "#ff6b2b"
};

/* ============ BUILDINGS ============ */
const buildings = [
  { x: 200,  w: 220, h: 260, color: "#111835", signColor: COLORS.cyan,   sign: "ABOUT",      key: "about",      doorX: 100 },
  { x: 550,  w: 200, h: 300, color: "#0f1230", signColor: COLORS.pink,   sign: "SKILLS",     key: "skills",     doorX: 90  },
  { x: 900,  w: 250, h: 280, color: "#121540", signColor: COLORS.green,  sign: "EXPERIENCE", key: "experience", doorX: 115 },
  { x: 1300, w: 230, h: 320, color: "#0e1035", signColor: COLORS.purple, sign: "PROJECTS",   key: "projects",   doorX: 105 },
  { x: 1680, w: 210, h: 250, color: "#10133a", signColor: COLORS.yellow, sign: "CONTACT",    key: "contact",    doorX: 95  },
];

/* Background buildings (decoration) */
const bgBuildings = [];
for (let i = 0; i < 30; i++) {
  bgBuildings.push({
    x: i * 120 - 200 + Math.random() * 60,
    w: 40 + Math.random() * 80,
    h: 80 + Math.random() * 200,
    color: `rgba(${10 + Math.random()*15|0},${10 + Math.random()*15|0},${20 + Math.random()*30|0},0.8)`,
    windows: Math.random() > 0.3
  });
}

/* Stars */
const stars = [];
for (let i = 0; i < 80; i++) {
  stars.push({ x: Math.random() * WORLD_W * 1.5, y: Math.random() * H * 0.5, s: Math.random() * 2 + 0.5, blink: Math.random() * Math.PI * 2 });
}

/* Rain drops */
const rain = [];
for (let i = 0; i < 80; i++) {
  rain.push({ x: Math.random() * WORLD_W * 1.5, y: Math.random() * H, speed: 3 + Math.random() * 5, len: 8 + Math.random() * 15 });
}

/* NPCs */
const npcs = [
  { x: 450, dir: 1, speed: 0.3, color: "#e08040", shirtColor: "#2040a0" },
  { x: 1100, dir: -1, speed: 0.4, color: "#d0a070", shirtColor: "#a02040" },
  { x: 1800, dir: 1, speed: 0.25, color: "#c09060", shirtColor: "#20a040" },
];

/* Flying vehicles */
const flyers = [
  { x: -100, y: 80, speed: 1.2, color: COLORS.pink, w: 40, h: 12 },
  { x: WORLD_W + 200, y: 140, speed: -0.8, color: COLORS.cyan, w: 50, h: 10 },
];

/* ============ PLAYER ============ */
const player = {
  x: 100,
  y: 0,
  w: 24,
  h: 40,
  speed: 3,
  dir: 1,
  walking: false,
  frame: 0,
  frameTimer: 0,
};

/* ============ CAMERA ============ */
let camX = 0;

/* ============ INPUT ============ */
const keys = {};
window.addEventListener("keydown", e => { keys[e.key] = true; });
window.addEventListener("keyup", e => { keys[e.key] = false; });

/* ============ GAME STATE ============ */
let started = false;
let modalOpen = false;
let tick = 0;

/* ============ DOM ELEMENTS ============ */
const loadingScreen = document.getElementById("loading-screen");
const loadBar = document.getElementById("loadBar");
const loadPct = document.getElementById("loadPct");
const introEl = document.getElementById("intro");
const startBtn = document.getElementById("startBtn");
const hudEl = document.getElementById("hud");
const hudHint = document.getElementById("hudHint");
const modalEl = document.getElementById("modal");
const modalClose = document.getElementById("modalClose");
const modalTag = document.getElementById("modalTag");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");

/* ============ LOADING ============ */
let loadProgress = 0;
const loadInterval = setInterval(() => {
  loadProgress += 2 + Math.random() * 5;
  if (loadProgress >= 100) {
    loadProgress = 100;
    clearInterval(loadInterval);
    setTimeout(() => {
      loadingScreen.style.display = "none";
      introEl.style.display = "flex";
    }, 400);
  }
  loadBar.style.width = loadProgress + "%";
  loadPct.textContent = Math.floor(loadProgress) + "%";
}, 80);

/* ============ START ============ */
startBtn.addEventListener("click", () => {
  introEl.style.display = "none";
  hudEl.classList.remove("hidden");
  started = true;
  requestAnimationFrame(gameLoop);
});

/* ============ MODAL ============ */
function openModal(key) {
  const d = DATA[key];
  if (!d) return;
  modalTag.textContent = d.tag;
  modalTitle.textContent = d.title;
  modalBody.innerHTML = d.html;
  modalEl.classList.remove("hidden");
  modalOpen = true;
}
function closeModal() {
  modalEl.classList.add("hidden");
  modalOpen = false;
}
modalClose.addEventListener("click", closeModal);
modalEl.addEventListener("click", e => { if (e.target === modalEl) closeModal(); });
window.addEventListener("keydown", e => { if (e.key === "Escape" && modalOpen) closeModal(); });

/* ============ MOBILE TOUCH ============ */
let touchX = null;
canvas.addEventListener("touchstart", e => {
  const t = e.touches[0];
  touchX = t.clientX;
});
canvas.addEventListener("touchmove", e => {
  e.preventDefault();
  const t = e.touches[0];
  const diff = t.clientX - (touchX || t.clientX);
  if (Math.abs(diff) > 10) {
    keys["ArrowRight"] = diff > 0;
    keys["ArrowLeft"] = diff < 0;
  }
  touchX = t.clientX;
}, { passive: false });
canvas.addEventListener("touchend", () => {
  keys["ArrowLeft"] = false;
  keys["ArrowRight"] = false;
  touchX = null;
  const b = getNearbyBuilding();
  if (b) openModal(b.key);
});

/* ============ CLICK TO INTERACT ============ */
canvas.addEventListener("click", e => {
  if (modalOpen || !started) return;
  const b = getNearbyBuilding();
  if (b) openModal(b.key);
});

/* ============ HELPERS ============ */
function groundY() { return H * GROUND_Y; }

function getNearbyBuilding() {
  const px = player.x + player.w / 2;
  for (const b of buildings) {
    const doorCenter = b.x + b.doorX;
    if (Math.abs(px - doorCenter) < 50) return b;
  }
  return null;
}

/* ============ DRAW FUNCTIONS ============ */

function drawSky() {
  const grad = ctx.createLinearGradient(0, 0, 0, H);
  grad.addColorStop(0, COLORS.sky1);
  grad.addColorStop(0.6, COLORS.sky2);
  grad.addColorStop(1, "#0a0a18");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);
}

function drawStars() {
  for (const s of stars) {
    const sx = (s.x - camX * 0.1) % (WORLD_W * 1.5);
    const alpha = 0.3 + 0.7 * Math.abs(Math.sin(tick * 0.02 + s.blink));
    ctx.fillStyle = `rgba(255,255,255,${alpha})`;
    ctx.fillRect(sx, s.y, s.s, s.s);
  }
}

function drawMoon() {
  const mx = W * 0.8 - camX * 0.05;
  const my = 60;
  ctx.fillStyle = "rgba(200,200,255,0.08)";
  ctx.beginPath(); ctx.arc(mx, my, 60, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = "rgba(220,220,255,0.15)";
  ctx.beginPath(); ctx.arc(mx, my, 30, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = "rgba(240,240,255,0.5)";
  ctx.beginPath(); ctx.arc(mx, my, 18, 0, Math.PI * 2); ctx.fill();
}

function drawBgBuildings() {
  const gy = groundY();
  for (const b of bgBuildings) {
    const bx = b.x - camX * 0.3;
    if (bx + b.w < -50 || bx > W + 50) continue;
    ctx.fillStyle = b.color;
    ctx.fillRect(bx, gy - b.h, b.w, b.h);
    if (b.windows) {
      for (let wy = 10; wy < b.h - 10; wy += 18) {
        for (let wx = 6; wx < b.w - 6; wx += 14) {
          const lit = Math.sin(b.x + wx + wy + tick * 0.005) > 0;
          ctx.fillStyle = lit ? "rgba(255,230,100,0.25)" : "rgba(0,0,0,0.3)";
          ctx.fillRect(bx + wx, gy - b.h + wy, 6, 8);
        }
      }
    }
  }
}

function drawGround() {
  const gy = groundY();
  ctx.fillStyle = COLORS.ground;
  ctx.fillRect(0, gy, W, H - gy);
  ctx.strokeStyle = COLORS.cyan;
  ctx.globalAlpha = 0.15;
  ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(W, gy); ctx.stroke();
  for (let gx = -camX % 60; gx < W; gx += 60) {
    ctx.beginPath(); ctx.moveTo(gx, gy); ctx.lineTo(gx, H); ctx.stroke();
  }
  for (let gy2 = gy + 30; gy2 < H; gy2 += 30) {
    ctx.beginPath(); ctx.moveTo(0, gy2); ctx.lineTo(W, gy2); ctx.stroke();
  }
  ctx.globalAlpha = 1;
}

function drawBuilding(b) {
  const gy = groundY();
  const bx = b.x - camX;
  if (bx + b.w < -20 || bx > W + 20) return;

  const by = gy - b.h;

  // Building body
  ctx.fillStyle = b.color;
  ctx.fillRect(bx, by, b.w, b.h);

  // Border glow
  ctx.strokeStyle = b.signColor;
  ctx.globalAlpha = 0.2;
  ctx.lineWidth = 1;
  ctx.strokeRect(bx, by, b.w, b.h);
  ctx.globalAlpha = 1;

  // Windows
  for (let wy = 40; wy < b.h - 50; wy += 28) {
    for (let wx = 15; wx < b.w - 15; wx += 30) {
      const lit = Math.sin(b.x + wx * 3 + wy * 2 + tick * 0.01) > -0.2;
      ctx.fillStyle = lit ? "rgba(255,200,50,0.3)" : "rgba(0,0,0,0.4)";
      ctx.fillRect(bx + wx, by + wy, 14, 16);
      if (lit) {
        ctx.fillStyle = "rgba(255,200,50,0.05)";
        ctx.fillRect(bx + wx - 2, by + wy - 2, 18, 20);
      }
    }
  }

  // Neon sign
  const signW = ctx.measureText ? b.sign.length * 9 : 80;
  const signX = bx + (b.w - signW) / 2;
  const signY = by + 14;

  // Sign glow
  ctx.shadowColor = b.signColor;
  ctx.shadowBlur = 12 + Math.sin(tick * 0.05) * 4;
  ctx.fillStyle = b.signColor;
  ctx.font = "bold 11px 'Press Start 2P', monospace";
  ctx.textAlign = "center";
  ctx.fillText(b.sign, bx + b.w / 2, signY);
  ctx.shadowBlur = 0;

  // Door
  const doorW = 22;
  const doorH = 36;
  const doorX = bx + b.doorX - doorW / 2;
  const doorY = gy - doorH;
  ctx.fillStyle = "#000";
  ctx.fillRect(doorX, doorY, doorW, doorH);
  ctx.strokeStyle = b.signColor;
  ctx.globalAlpha = 0.5;
  ctx.strokeRect(doorX, doorY, doorW, doorH);
  ctx.globalAlpha = 1;

  // Door glow when nearby
  const px = player.x + player.w / 2;
  if (Math.abs(px - (b.x + b.doorX)) < 50) {
    ctx.fillStyle = b.signColor;
    ctx.globalAlpha = 0.08 + Math.sin(tick * 0.1) * 0.04;
    ctx.fillRect(doorX - 4, doorY - 4, doorW + 8, doorH + 8);
    ctx.globalAlpha = 1;

    // Arrow indicator above door
    const arrowY = doorY - 16 + Math.sin(tick * 0.08) * 4;
    ctx.fillStyle = COLORS.yellow;
    ctx.beginPath();
    ctx.moveTo(bx + b.doorX, arrowY);
    ctx.lineTo(bx + b.doorX - 6, arrowY - 8);
    ctx.lineTo(bx + b.doorX + 6, arrowY - 8);
    ctx.fill();
  }

  // Neon accent lines on building edges
  ctx.strokeStyle = b.signColor;
  ctx.globalAlpha = 0.15 + Math.sin(tick * 0.03 + b.x) * 0.05;
  ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(bx, by); ctx.lineTo(bx, gy); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(bx + b.w, by); ctx.lineTo(bx + b.w, gy); ctx.stroke();
  ctx.globalAlpha = 1;
  ctx.lineWidth = 1;
}

function drawPlayer() {
  const gy = groundY();
  const px = player.x - camX;
  const py = gy - player.h;

  // Shadow
  ctx.fillStyle = "rgba(0,240,255,0.08)";
  ctx.beginPath();
  ctx.ellipse(px + player.w / 2, gy, 14, 4, 0, 0, Math.PI * 2);
  ctx.fill();

  const legOffset = player.walking ? Math.sin(tick * 0.3) * 4 : 0;

  // Legs
  ctx.fillStyle = "#333";
  ctx.fillRect(px + 4, py + 28 + Math.max(0, legOffset), 6, 12 - Math.max(0, legOffset));
  ctx.fillRect(px + 14, py + 28 + Math.max(0, -legOffset), 6, 12 - Math.max(0, -legOffset));

  // Body (jacket)
  ctx.fillStyle = "#1a1a5e";
  ctx.fillRect(px + 2, py + 16, 20, 14);
  // Jacket glow trim
  ctx.strokeStyle = COLORS.cyan;
  ctx.globalAlpha = 0.4;
  ctx.strokeRect(px + 2, py + 16, 20, 14);
  ctx.globalAlpha = 1;

  // Head
  ctx.fillStyle = "#f0c890";
  ctx.fillRect(px + 5, py + 4, 14, 13);

  // Hair
  ctx.fillStyle = "#222";
  ctx.fillRect(px + 4, py + 2, 16, 6);

  // Eyes (direction-aware)
  const eyeOff = player.dir > 0 ? 2 : -2;
  ctx.fillStyle = "#0ff";
  ctx.fillRect(px + 8 + eyeOff, py + 10, 2, 2);
  ctx.fillRect(px + 14 + eyeOff, py + 10, 2, 2);

  // Cyber visor line
  ctx.strokeStyle = COLORS.cyan;
  ctx.globalAlpha = 0.6;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(px + 4, py + 10);
  ctx.lineTo(px + 20, py + 10);
  ctx.stroke();
  ctx.globalAlpha = 1;
}

function drawNPCs() {
  const gy = groundY();
  for (const npc of npcs) {
    const nx = npc.x - camX;
    if (nx < -30 || nx > W + 30) continue;
    const ny = gy - 34;
    const legOff = Math.sin(tick * 0.2 * npc.speed * 3) * 3;

    // Legs
    ctx.fillStyle = "#333";
    ctx.fillRect(nx + 4, ny + 22 + Math.max(0, legOff), 5, 12 - Math.max(0, legOff));
    ctx.fillRect(nx + 11, ny + 22 + Math.max(0, -legOff), 5, 12 - Math.max(0, -legOff));
    // Body
    ctx.fillStyle = npc.shirtColor;
    ctx.fillRect(nx + 2, ny + 12, 16, 12);
    // Head
    ctx.fillStyle = npc.color;
    ctx.fillRect(nx + 4, ny + 2, 12, 11);
    // Hair
    ctx.fillStyle = "#222";
    ctx.fillRect(nx + 3, ny, 14, 5);
  }
}

function drawFlyers() {
  for (const f of flyers) {
    const fx = f.x - camX * 0.5;
    ctx.fillStyle = f.color;
    ctx.globalAlpha = 0.6;
    // Body
    ctx.fillRect(fx, f.y, f.w, f.h);
    // Trail
    const trailDir = f.speed > 0 ? -1 : 1;
    ctx.globalAlpha = 0.2;
    ctx.fillRect(fx + (trailDir > 0 ? f.w : -20), f.y + 2, 20, f.h - 4);
    ctx.globalAlpha = 0.08;
    ctx.fillRect(fx + (trailDir > 0 ? f.w + 20 : -50), f.y + 3, 30, f.h - 6);
    ctx.globalAlpha = 1;
    // Light
    ctx.fillStyle = "#fff";
    ctx.globalAlpha = 0.8;
    ctx.fillRect(fx + (f.speed > 0 ? f.w - 3 : 0), f.y + f.h / 2 - 1, 3, 2);
    ctx.globalAlpha = 1;
  }
}

function drawRain() {
  ctx.strokeStyle = "rgba(0,200,255,0.15)";
  ctx.lineWidth = 1;
  for (const r of rain) {
    const rx = (r.x - camX * 0.8) % (W + 200) - 100;
    ctx.beginPath();
    ctx.moveTo(rx, r.y);
    ctx.lineTo(rx - 1, r.y + r.len);
    ctx.stroke();
  }
}

function drawHoloBillboard() {
  const bx = 80 - camX;
  if (bx > W + 50 || bx < -250) return;
  const gy = groundY();
  const by = gy - 180;

  // Pole
  ctx.fillStyle = "#222";
  ctx.fillRect(bx + 90, by + 80, 6, 100);

  // Billboard frame
  ctx.fillStyle = "rgba(10,10,30,0.7)";
  ctx.fillRect(bx, by, 186, 80);
  ctx.strokeStyle = COLORS.cyan;
  ctx.globalAlpha = 0.3;
  ctx.strokeRect(bx, by, 186, 80);
  ctx.globalAlpha = 1;

  // Text
  ctx.fillStyle = COLORS.cyan;
  ctx.font = "8px 'Press Start 2P', monospace";
  ctx.textAlign = "left";
  ctx.shadowColor = COLORS.cyan;
  ctx.shadowBlur = 6;
  ctx.fillText("WASIM AKRAM", bx + 12, by + 24);
  ctx.fillStyle = COLORS.pink;
  ctx.shadowColor = COLORS.pink;
  ctx.fillText("DATA SCIENTIST", bx + 12, by + 42);
  ctx.fillStyle = "#666";
  ctx.shadowBlur = 0;
  ctx.font = "6px 'Press Start 2P', monospace";
  ctx.fillText("& ML ENGINEER", bx + 12, by + 58);
  ctx.shadowBlur = 0;
}

/* ============ UPDATE ============ */
function update() {
  if (modalOpen) return;
  tick++;

  // Player movement
  player.walking = false;
  if (keys["ArrowLeft"] || keys["a"]) {
    player.x -= player.speed;
    player.dir = -1;
    player.walking = true;
  }
  if (keys["ArrowRight"] || keys["d"]) {
    player.x += player.speed;
    player.dir = 1;
    player.walking = true;
  }
  player.x = Math.max(0, Math.min(WORLD_W - player.w, player.x));

  // Interact
  if (keys["ArrowUp"] || keys["Enter"] || keys["w"]) {
    keys["ArrowUp"] = false;
    keys["Enter"] = false;
    keys["w"] = false;
    const b = getNearbyBuilding();
    if (b) openModal(b.key);
  }

  // Camera follow
  const targetCam = player.x - W / 2 + player.w / 2;
  camX += (targetCam - camX) * 0.08;
  camX = Math.max(0, Math.min(WORLD_W - W, camX));

  // NPCs
  for (const npc of npcs) {
    npc.x += npc.speed * npc.dir;
    if (npc.x < 100 || npc.x > WORLD_W - 100) npc.dir *= -1;
  }

  // Flyers
  for (const f of flyers) {
    f.x += f.speed;
    if (f.speed > 0 && f.x > WORLD_W + 300) f.x = -100;
    if (f.speed < 0 && f.x < -300) f.x = WORLD_W + 200;
  }

  // Rain
  for (const r of rain) {
    r.y += r.speed;
    if (r.y > H) { r.y = -20; r.x = Math.random() * WORLD_W * 1.5; }
  }

  // HUD hint
  const nearby = getNearbyBuilding();
  hudHint.textContent = nearby ? `Press ↑ to enter ${nearby.sign}` : "";
}

/* ============ DRAW ============ */
function draw() {
  ctx.clearRect(0, 0, W, H);
  drawSky();
  drawStars();
  drawMoon();
  drawBgBuildings();
  drawFlyers();
  drawHoloBillboard();
  for (const b of buildings) drawBuilding(b);
  drawGround();
  drawNPCs();
  drawPlayer();
  drawRain();

  // Scanline overlay
  ctx.fillStyle = "rgba(0,0,0,0.03)";
  for (let sy = 0; sy < H; sy += 4) {
    ctx.fillRect(0, sy, W, 2);
  }
}

/* ============ GAME LOOP ============ */
function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

})();
