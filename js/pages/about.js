// ===== ABOUT PAGE =====
function renderAboutPage() {
  const values = [
    { icon: '🔬', title: 'Innovation First', desc: 'We invest in R&D to create patented cooling technologies instead of copying existing designs.' },
    { icon: '💯', title: 'Honest Quality', desc: 'No shortcuts. Copper-wound motors, honeycomb pads, and anti-corrosion bodies in every product.' },
    { icon: '🤝', title: 'Customer Trust', desc: 'Fair pricing, genuine warranties, and after-sales support that actually responds.' },
  ];
  let html = '<div class="about-page">';
  html += '<section class="about-hero"><div class="container"><span class="section-label">Our Story</span><h1>The Balaji Electricals Story</h1><p>One visionary founder. Two patented product series. A relentless pursuit of cooling excellence.</p></div></section>';
  html += '<section class="section"><div class="container-narrow"><div class="reveal"><div class="about-vision card"><h2>Born from Innovation</h2>';
  html += '<p>Balaji Electricals started with a simple observation: Indian homes and businesses deserve coolers that don\'t just blow air — they deliver genuine, engineered cooling experiences.</p>';
  html += '<p>The result? Two patented product series. The <strong>Onex</strong> series for the modern Indian home — compact, stylish, and whisper-quiet. The <strong>Air Excel</strong> series for demanding environments — powerful, heavy-duty, and built to cool large commercial spaces.</p>';
  html += '<p>Today, Balaji Electricals serves thousands of satisfied customers across India. Every product carries our promise: <strong>engineered performance, honest pricing, and real durability</strong>.</p>';
  html += '</div></div></div></section>';
  // Two Series
  html += '<section class="section about-series-section"><div class="container"><div class="reveal"><div class="section-header"><span class="section-label">Two Series</span><h2>Two Philosophies. One Standard of Excellence.</h2></div></div><div class="grid-2">';
  html += '<div class="reveal" data-delay="100"><div class="about-series-card card"><div class="series-icon-wrapper" style="background:linear-gradient(135deg,#E8F4FC,#D4E8F8)">🌀</div><span class="badge badge-onex">Onex Series</span><h3>Modern. Compact. Stylish.</h3><p>Designed for the contemporary Indian lifestyle — aesthetics, noise control, and space efficiency.</p><div class="series-products"><span>Spyder • Table Cooler • 16" Regular • 12" Wheel</span></div></div></div>';
  html += '<div class="reveal" data-delay="200"><div class="about-series-card card"><div class="series-icon-wrapper" style="background:linear-gradient(135deg,#FFF0E8,#FFE0D0)">💨</div><span class="badge badge-airexcel">Air Excel Series</span><h3>Powerful. Commercial-Grade.</h3><p>For spaces that demand serious cooling power — higher airflow, larger tanks, industrial construction.</p><div class="series-products"><span>Sumo • Kohinoor • 22" Commercial • 18" Diamond</span></div></div></div>';
  html += '</div></div></section>';
  // Values
  html += '<section class="section about-values"><div class="container"><div class="reveal"><div class="section-header"><span class="section-label">Our Values</span><h2>What Drives Us</h2></div></div><div class="grid-3">';
  values.forEach((v, i) => { html += '<div class="reveal" data-delay="' + (i*100) + '"><div class="card value-card"><span class="value-icon">' + v.icon + '</span><h3>' + v.title + '</h3><p>' + v.desc + '</p></div></div>'; });
  html += '</div></div></section>';
  // CTA
  html += '<section class="section"><div class="container"><div class="reveal-scale"><div class="about-cta card" style="text-align:center"><h2>Ready to Experience the Difference?</h2><p>Explore our complete range or let our AI find the perfect cooler for you.</p><div style="display:flex;gap:var(--space-md);justify-content:center;flex-wrap:wrap;margin-top:var(--space-xl)"><a href="#/products" class="btn btn-primary btn-lg">Browse All Products</a><a href="#/find-your-cooler" class="btn btn-secondary btn-lg">✦ AI Cooler Finder</a></div></div></div></div></section>';
  html += '</div>';
  return html;
}
