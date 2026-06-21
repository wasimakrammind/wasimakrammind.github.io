/* ===== Typing Animation ===== */
const phrases = [
    "reliable cloud platforms.",
    "automated test frameworks.",
    "CI/CD quality gates.",
    "scalable data pipelines.",
    "REST API validation suites."
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingEl = document.getElementById('typingText');

function typeLoop() {
    const current = phrases[phraseIndex];
    if (!isDeleting) {
        typingEl.textContent = current.slice(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
            isDeleting = true;
            setTimeout(typeLoop, 2000);
            return;
        }
        setTimeout(typeLoop, 60);
    } else {
        typingEl.textContent = current.slice(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            setTimeout(typeLoop, 400);
            return;
        }
        setTimeout(typeLoop, 30);
    }
}
typeLoop();

/* ===== Scroll Reveal ===== */
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
);
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

/* ===== Nav Scroll ===== */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
});

/* ===== Mobile Menu ===== */
const toggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');
toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    mobileMenu.classList.toggle('open');
});
mobileMenu.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
        toggle.classList.remove('active');
        mobileMenu.classList.remove('open');
    });
});

/* ===== Cursor Glow ===== */
const glow = document.getElementById('cursorGlow');
if (window.matchMedia('(pointer: fine)').matches) {
    glow.style.opacity = '1';
    document.addEventListener('mousemove', (e) => {
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';
    });
}

/* ===== Counter Animation ===== */
const counters = document.querySelectorAll('.stat-num');
const counterObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.count);
                let current = 0;
                const step = Math.max(1, Math.floor(target / 40));
                const timer = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    el.textContent = current;
                }, 30);
                counterObserver.unobserve(el);
            }
        });
    },
    { threshold: 0.5 }
);
counters.forEach((c) => counterObserver.observe(c));

/* ===== Particles ===== */
const particlesContainer = document.getElementById('particles');
function createParticle() {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDuration = 8 + Math.random() * 12 + 's';
    p.style.animationDelay = Math.random() * 5 + 's';
    p.style.width = p.style.height = 1 + Math.random() * 2 + 'px';
    particlesContainer.appendChild(p);
    setTimeout(() => p.remove(), 20000);
}
for (let i = 0; i < 30; i++) {
    setTimeout(() => createParticle(), i * 300);
}
setInterval(createParticle, 800);

/* ===== Smooth Scroll for anchor links ===== */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
