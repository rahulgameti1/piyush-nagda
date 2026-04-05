// ===== SPA ROUTER =====
function navigateTo(path) {
  window.location.hash = '#' + path;
}

function parseHash() {
  const hash = window.location.hash.slice(1) || '/';
  const [pathPart, queryPart] = hash.split('?');
  const path = pathPart || '/';
  const params = {};
  if (queryPart) {
    queryPart.split('&').forEach(p => {
      const [k, v] = p.split('=');
      params[decodeURIComponent(k)] = decodeURIComponent(v || '');
    });
  }
  return { path, params };
}

function route() {
  const { path, params } = parseHash();
  const app = document.getElementById('app');
  let html = '';
  let pageInit = null;

  if (path === '/' || path === '') {
    html = renderHomePage();
    pageInit = initHomePage;
    updateNavActive('/');
  } else if (path === '/products') {
    html = renderProductsPage(params);
    pageInit = initProductsPage;
    updateNavActive('/products');
  } else if (path.startsWith('/products/')) {
    const slug = path.split('/products/')[1];
    html = renderProductDetailPage(slug);
    updateNavActive('/products');
  } else if (path === '/find-your-cooler') {
    html = renderFinderPage();
    updateNavActive('/find-your-cooler');
  } else if (path === '/compare') {
    html = renderComparePage(params);
    updateNavActive('/compare');
  } else if (path === '/about') {
    html = renderAboutPage();
    updateNavActive('/about');
  } else if (path === '/contact') {
    html = renderContactPage();
    updateNavActive('/contact');
  } else if (path === '/cart') {
    html = renderCartPage();
    updateNavActive('/cart');
  } else if (path === '/checkout') {
    html = renderCheckoutPage();
    updateNavActive('/checkout');
  } else {
    html = '<div style="text-align:center;padding:100px 20px"><h1>404 — Page Not Found</h1><p>The page you\'re looking for doesn\'t exist.</p><a href="#/" class="btn btn-primary btn-lg" style="margin-top:20px">Go Home</a></div>';
    updateNavActive('');
  }

  app.innerHTML = html;
  app.classList.remove('page-enter');
  void app.offsetWidth; // trigger reflow
  app.classList.add('page-enter');

  window.scrollTo(0, 0);

  if (pageInit) pageInit();
  setTimeout(initScrollReveal, 50);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderFooter();
  initNavbar();
  initWhatsApp();
  route();
});

window.addEventListener('hashchange', route);
