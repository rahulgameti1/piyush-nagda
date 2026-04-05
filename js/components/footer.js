// ===== FOOTER COMPONENT =====
function renderFooter() {
  document.getElementById('footer').innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-logo">
            <span class="logo-icon">❄️</span>
            <div class="logo-text">
              <span class="logo-brand">Balaji</span>
              <span class="logo-sub">Electricals</span>
            </div>
          </div>
          <p class="footer-desc">Two patented product series. One visionary owner. Cooling solutions engineered for every Indian space — from bedside tables to commercial warehouses.</p>
          <div class="footer-series-tags">
            <span class="badge badge-onex">Onex Series</span>
            <span class="badge badge-airexcel">Air Excel Series</span>
          </div>
        </div>
        <div class="footer-col">
          <h4>Quick Links</h4>
          <a href="#/">Home</a>
          <a href="#/products">All Products</a>
          <a href="#/find-your-cooler">AI Cooler Finder</a>
          <a href="#/compare">Compare Models</a>
          <a href="#/about">About Us</a>
        </div>
        <div class="footer-col">
          <h4>Product Series</h4>
          <a href="#/products?series=Onex">Onex — Modern & Compact</a>
          <a href="#/products?series=Air Excel">Air Excel — Powerful</a>
          <a href="#/products/sumo">Sumo Desert Cooler</a>
          <a href="#/products/kohinoor">Kohinoor Premium</a>
          <a href="#/products/spyder">Spyder Tower</a>
        </div>
        <div class="footer-col">
          <h4>Get in Touch</h4>
          <a href="tel:7339803084" class="footer-contact-item">📞 7339803084</a>
          <a href="mailto:info@balajielectricals.com" class="footer-contact-item">✉️ info@balajielectricals.com</a>
          <p class="footer-contact-item">📍 India</p>
          <a href="https://wa.me/917339803084?text=Hi!%20I%27m%20interested%20in%20Balaji%20Electricals%20coolers." target="_blank" class="btn btn-primary btn-sm footer-cta" style="margin-top: var(--space-sm);">💬 WhatsApp Us</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© ${new Date().getFullYear()} Balaji Electricals. All rights reserved. Patented Technology.</p>
        <div class="footer-bottom-links">
          <a href="#/about">About</a>
          <a href="#/contact">Contact</a>
        </div>
      </div>
    </div>`;
}
