/* ===== Role Typing ===== */
const roles = [
    "Data Scientist",
    "ML Engineer",
    "Analytics Engineer",
    "Deep Learning Researcher",
    "Experimentation Engineer"
];
let rIdx = 0, cIdx = 0, deleting = false;
const roleEl = document.getElementById('roleText');

function typeRole() {
    const cur = roles[rIdx];
    if (!deleting) {
        roleEl.textContent = cur.slice(0, cIdx + 1);
        cIdx++;
        if (cIdx === cur.length) {
            deleting = true;
            setTimeout(typeRole, 2200);
            return;
        }
        setTimeout(typeRole, 70);
    } else {
        roleEl.textContent = cur.slice(0, cIdx - 1);
        cIdx--;
        if (cIdx === 0) {
            deleting = false;
            rIdx = (rIdx + 1) % roles.length;
            setTimeout(typeRole, 400);
            return;
        }
        setTimeout(typeRole, 35);
    }
}
typeRole();

/* ===== Rain ===== */
const rainContainer = document.getElementById('rain');
function createRain() {
    const drop = document.createElement('div');
    drop.className = 'raindrop';
    drop.style.left = Math.random() * 100 + '%';
    drop.style.height = 15 + Math.random() * 25 + 'px';
    drop.style.animationDuration = 0.6 + Math.random() * 0.8 + 's';
    drop.style.animationDelay = Math.random() * 2 + 's';
    drop.style.opacity = 0.2 + Math.random() * 0.4;
    rainContainer.appendChild(drop);
    setTimeout(() => drop.remove(), 4000);
}
for (let i = 0; i < 30; i++) {
    setTimeout(() => createRain(), i * 100);
}
setInterval(createRain, 300);

/* ===== Scroll Reveal ===== */
const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((e) => {
            if (e.isIntersecting) e.target.classList.add('visible');
        });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);
document.querySelectorAll('.reveal-cyber').forEach((el) => revealObserver.observe(el));

/* ===== Nav ===== */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    nav.style.borderBottomColor = window.scrollY > 50
        ? 'rgba(0,240,255,0.15)'
        : 'rgba(0,240,255,0.1)';
});

/* ===== Mobile Menu ===== */
const hudToggle = document.getElementById('hudToggle');
const mobileNav = document.getElementById('mobileNav');
hudToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
});
mobileNav.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => mobileNav.classList.remove('open'));
});

/* ===== Smooth Scroll ===== */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

/* ===== Character Parallax ===== */
const character = document.getElementById('character');
if (character) {
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const moveX = Math.min(scrollY * 0.15, 200);
        character.style.transform = `translateX(${moveX}px)`;
    });
}

/* ===== Skill Bars Animation ===== */
const barObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((e) => {
            if (e.isIntersecting) {
                const fill = e.target.querySelector('.bar-fill');
                if (fill) {
                    const w = fill.style.width;
                    fill.style.width = '0';
                    setTimeout(() => { fill.style.width = w; }, 100);
                }
            }
        });
    },
    { threshold: 0.3 }
);
document.querySelectorAll('.skill-node').forEach((n) => barObserver.observe(n));
