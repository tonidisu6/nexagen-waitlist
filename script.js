// Nav: transparent over hero, solid when scrolled past it
(function () {
  const nav = document.querySelector('nav');
  const hero = document.querySelector('.hero');
  if (!nav || !hero) return;
  const update = () => {
    nav.classList.toggle('nav--scrolled', hero.getBoundingClientRect().bottom <= nav.offsetHeight + 10);
  };
  window.addEventListener('scroll', update, { passive: true });
  update();
})();

// Fade-up on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(el => {
    if (el.isIntersecting) el.target.classList.add('visible');
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.fade-up, .stagger-parent').forEach(el => observer.observe(el));

// Seamless institution logo carousel via rAF
(function () {
  const track = document.querySelector('.institutions-track');
  if (!track) return;
  let x = 0;
  const speed = 0.4;

  function tick() {
    x -= speed;
    const halfWidth = track.scrollWidth / 2;
    if (x <= -halfWidth) x += halfWidth;
    track.style.transform = 'translateX(' + x + 'px)';
    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
})();
