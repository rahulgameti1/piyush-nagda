// ===== NAVBAR COMPONENT =====
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger-menu');
  const links = document.getElementById('navbar-links');
  const overlay = document.getElementById('navbar-overlay');

  // Scroll effect
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('navbar-scrolled', window.scrollY > 30);
  });

  // Hamburger toggle
  hamburger.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    if (open) {
      overlay.style.display = 'block';
    } else {
      overlay.style.display = 'none';
    }
  });

  overlay.addEventListener('click', () => {
    links.classList.remove('open');
    hamburger.classList.remove('open');
    overlay.style.display = 'none';
  });
}

function updateNavActive(route) {
  document.querySelectorAll('.navbar-link').forEach(link => {
    const nav = link.dataset.nav;
    const isActive = (route === '' && nav === 'home') ||
                     (route === '/' && nav === 'home') ||
                     route === `/${nav}` ||
                     route.startsWith(`/${nav}/`);
    link.classList.toggle('active', isActive);
  });
  // Close mobile menu
  const links = document.getElementById('navbar-links');
  const hamburger = document.getElementById('hamburger-menu');
  const overlay = document.getElementById('navbar-overlay');
  links.classList.remove('open');
  hamburger.classList.remove('open');
  overlay.style.display = 'none';
}
