// ===== HOME PAGE =====
function renderHomePage() {
  const featured = getFeaturedProducts();
  const testimonials = [
    { name: 'Rajesh Kumar', location: 'Jaipur', rating: 5, text: 'The Sumo cooler transformed our shop. Even at 48°C outside, the inside stays comfortable. Best ₹9,000 I ever spent.' },
    { name: 'Priya Sharma', location: 'Delhi', rating: 5, text: 'Spyder is perfect for my apartment. Super quiet at night and the tower design looks beautiful in my bedroom.' },
    { name: 'Mohammed Ansari', location: 'Hyderabad', rating: 5, text: 'Running the 22-inch Commercial in our warehouse. It cools the entire 1000 sq ft space. Incredible value.' },
    { name: 'Anita Patel', location: 'Ahmedabad', rating: 4, text: 'Kohinoor is the king of coolers! Huge tank, powerful throw, and the build quality is top-notch. Highly recommend.' },
  ];

  const benefits = [
    { icon: '🏆', title: 'Patented Technology', desc: 'Two exclusive product series with patented cooling innovation — engineered in India, for India.' },
    { icon: '⚡', title: 'Energy Efficient', desc: 'Our coolers deliver maximum cooling with minimum power consumption. Inverter compatible across the range.' },
    { icon: '📦', title: '8 Models, Every Need', desc: "From personal table coolers to 22-inch commercial beasts — there's a Balaji cooler for every space." },
    { icon: '🛡️', title: 'Built to Last', desc: 'Anti-corrosion bodies, copper-wound motors, and heavy-duty construction for years of reliable cooling.' },
  ];

  const useCases = {
    home: { title: 'Home & Bedrooms', desc: 'Quiet, efficient cooling for restful sleep and comfortable living.', products: ['Spyder', 'Table Cooler', '16-inch Regular'], icon: '🏠' },
    shop: { title: 'Shops & Offices', desc: 'Reliable cooling for customer comfort and productive work environments.', products: ['Sumo', '18-inch Diamond', '12-inch Wheel'], icon: '🏪' },
    commercial: { title: 'Commercial & Industrial', desc: 'Heavy-duty cooling for warehouses, venues, and large-scale operations.', products: ['22-inch Commercial', 'Kohinoor', 'Sumo'], icon: '🏭' },
  };

  return `
    <div class="home-page">
      <!-- HERO -->
      <section class="hero" id="hero">
        <div class="hero-bg">
          <div class="hero-orb hero-orb-1"></div>
          <div class="hero-orb hero-orb-2"></div>
          <div class="hero-orb hero-orb-3"></div>
          <div class="hero-grid-pattern"></div>
        </div>
        <div class="container hero-content">
          <div class="hero-text">
            <div class="hero-badge"><span class="hero-badge-dot"></span> Patented Cooling Technology</div>
            <h1>Engineered for<br><span class="text-gradient">Indian Summers</span></h1>
            <p class="hero-subtitle">Two iconic product series. Eight precision-engineered coolers. One promise — the best cooling experience for every Indian space, from bedside tables to commercial warehouses.</p>
            <div class="hero-actions">
              <a href="#/products" class="btn btn-primary btn-lg" id="hero-cta-products">Explore Products →</a>
              <a href="#/find-your-cooler" class="btn btn-secondary btn-lg" id="hero-cta-finder">✦ Find Your Cooler</a>
            </div>
            <div class="hero-stats">
              <div class="hero-stat"><span class="hero-stat-number">8</span><span class="hero-stat-label">Models</span></div>
              <div class="hero-stat-divider"></div>
              <div class="hero-stat"><span class="hero-stat-number">2</span><span class="hero-stat-label">Patented Series</span></div>
              <div class="hero-stat-divider"></div>
              <div class="hero-stat"><span class="hero-stat-number">5500+</span><span class="hero-stat-label">Max CMH</span></div>
            </div>
          </div>
          <div class="hero-visual">
            <div class="hero-product-showcase">
              <div class="hero-cooler-ring"><div class="hero-cooler-icon">🌊</div></div>
              <div class="hero-floating-specs">
                <div class="floating-spec floating-spec-1">💨 5500 CMH</div>
                <div class="floating-spec floating-spec-2">❄️ -10°C Cooling</div>
                <div class="floating-spec floating-spec-3">⚡ Energy Efficient</div>
              </div>
            </div>
          </div>
        </div>
        <div class="hero-scroll-indicator"><span>Scroll to explore</span><div class="scroll-arrow">↓</div></div>
      </section>

      <!-- BRAND STORY -->
      <section class="section brand-story" id="brand-story">
        <div class="container">
          <div class="reveal" data-delay="0">
            <div class="brand-story-inner">
              <div class="brand-story-content">
                <span class="section-label">Our Story</span>
                <h2>One Vision. Two Revolutionary Series.</h2>
                <p>Balaji Electricals was born from a single founder's obsession with cooling excellence. While others copied, we innovated — creating two patented product lines that redefine what air coolers can do.</p>
                <div class="brand-series-cards">
                  <div class="brand-series-card brand-series-onex">
                    <span class="badge badge-onex">Onex Series</span>
                    <h4>Modern. Compact. Stylish.</h4>
                    <p>Designed for the contemporary Indian home — sleek aesthetics, quiet operation, and space-saving designs without compromising performance.</p>
                  </div>
                  <div class="brand-series-card brand-series-airexcel">
                    <span class="badge badge-airexcel">Air Excel Series</span>
                    <h4>Powerful. Commercial-Grade.</h4>
                    <p>Built for demanding environments — maximum airflow, heavy-duty construction, and unmatched cooling capacity for spaces that need serious performance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- FEATURED PRODUCTS -->
      <section class="section featured-section" id="featured-products">
        <div class="container">
          <div class="reveal"><div class="section-header"><span class="section-label">Best Sellers</span><h2>Featured Coolers</h2><p>Our most popular models — trusted by thousands of homes and businesses across India.</p></div></div>
          <div class="featured-grid">
            ${featured.slice(0, 4).map((p, i) => `<div class="reveal" data-delay="${i * 100}">${renderProductCard(p, i)}</div>`).join('')}
          </div>
          <div class="reveal"><div class="featured-cta"><a href="#/products" class="btn btn-secondary btn-lg">View All 8 Models →</a></div></div>
        </div>
      </section>

      <!-- AI FINDER CTA -->
      <section class="section ai-finder-cta" id="ai-finder-cta">
        <div class="container">
          <div class="reveal-scale">
            <div class="ai-finder-card">
              <div class="ai-finder-glow"></div>
              <div class="ai-finder-content">
                <span class="ai-finder-icon">✦</span>
                <h2>Not Sure Which Cooler?<br><span class="text-gradient">Let AI Decide.</span></h2>
                <p>Answer 4 simple questions about your room, usage, budget, and preferences. Our smart algorithm analyzes all 8 models and recommends the perfect match.</p>
                <a href="#/find-your-cooler" class="btn btn-primary btn-lg" id="ai-finder-cta-button">✦ Find My Perfect Cooler</a>
              </div>
              <div class="ai-finder-visual">
                <div class="ai-visual-step">1. Room Size</div>
                <div class="ai-visual-step">2. Usage Type</div>
                <div class="ai-visual-step">3. Budget</div>
                <div class="ai-visual-step">4. Priority</div>
                <div class="ai-visual-result">= Perfect Match ✓</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- BENEFITS -->
      <section class="section benefits-section" id="why-choose-us">
        <div class="container">
          <div class="reveal"><div class="section-header"><span class="section-label">Why Balaji</span><h2>Built Different. Cools Better.</h2><p>What makes Balaji Electricals the smart choice for your cooling needs.</p></div></div>
          <div class="grid-4 benefits-grid">
            ${benefits.map((b, i) => `<div class="reveal" data-delay="${i * 100}"><div class="benefit-card card"><span class="benefit-icon">${b.icon}</span><h3>${b.title}</h3><p>${b.desc}</p></div></div>`).join('')}
          </div>
        </div>
      </section>

      <!-- USE CASES -->
      <section class="section use-cases-section" id="use-cases">
        <div class="container">
          <div class="reveal"><div class="section-header"><span class="section-label">Solutions</span><h2>A Cooler for Every Space</h2><p>Whether it's your bedroom, retail shop, or warehouse — we have you covered.</p></div></div>
          <div class="reveal">
            <div class="use-case-tabs" id="use-case-tabs">
              ${Object.entries(useCases).map(([key, uc]) => `<button class="use-case-tab ${key === 'home' ? 'active' : ''}" data-uc="${key}"><span>${uc.icon}</span> ${uc.title}</button>`).join('')}
            </div>
            <div class="use-case-content card" id="use-case-content">
              <div class="use-case-info">
                <h3>${useCases.home.title}</h3>
                <p>${useCases.home.desc}</p>
                <div class="use-case-products">
                  <span class="use-case-label">Recommended:</span>
                  ${useCases.home.products.map(name => `<span class="use-case-product-tag">${name}</span>`).join('')}
                </div>
                <a href="#/find-your-cooler" class="btn btn-primary" id="use-case-finder-link">Find Best Match →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- TESTIMONIALS -->
      <section class="section testimonials-section" id="testimonials">
        <div class="container">
          <div class="reveal"><div class="section-header"><span class="section-label">Reviews</span><h2>Trusted by Thousands</h2><p>Real customers, real cooling experiences.</p></div></div>
          <div class="reveal">
            <div class="testimonial-carousel">
              <div class="testimonial-card card" id="testimonial-card">
                <div class="testimonial-stars">${'★'.repeat(testimonials[0].rating)}${'☆'.repeat(5 - testimonials[0].rating)}</div>
                <p class="testimonial-text">"${testimonials[0].text}"</p>
                <div class="testimonial-author">
                  <div class="testimonial-avatar">${testimonials[0].name.charAt(0)}</div>
                  <div><strong>${testimonials[0].name}</strong><span>${testimonials[0].location}</span></div>
                </div>
              </div>
              <div class="testimonial-dots" id="testimonial-dots">
                ${testimonials.map((_, i) => `<button class="testimonial-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></button>`).join('')}
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- FINAL CTA -->
      <section class="section final-cta" id="final-cta">
        <div class="container">
          <div class="reveal-scale">
            <div class="final-cta-card">
              <h2>Get the Best Deal Today</h2>
              <p>Call us directly or chat on WhatsApp. Our cooling experts will find the perfect cooler for you.</p>
              <div class="final-cta-actions">
                <a href="tel:7339803084" class="btn btn-warm btn-lg" id="cta-call">📞 Call 7339803084</a>
                <a href="https://wa.me/917339803084?text=Hi!%20I%27d%20like%20to%20know%20more%20about%20your%20coolers." target="_blank" class="btn btn-secondary btn-lg" id="cta-whatsapp">💬 WhatsApp Us</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>`;
}

function initHomePage() {
  const testimonials = [
    { name: 'Rajesh Kumar', location: 'Jaipur', rating: 5, text: 'The Sumo cooler transformed our shop. Even at 48°C outside, the inside stays comfortable. Best ₹9,000 I ever spent.' },
    { name: 'Priya Sharma', location: 'Delhi', rating: 5, text: 'Spyder is perfect for my apartment. Super quiet at night and the tower design looks beautiful in my bedroom.' },
    { name: 'Mohammed Ansari', location: 'Hyderabad', rating: 5, text: 'Running the 22-inch Commercial in our warehouse. It cools the entire 1000 sq ft space. Incredible value.' },
    { name: 'Anita Patel', location: 'Ahmedabad', rating: 4, text: 'Kohinoor is the king of coolers! Huge tank, powerful throw, and the build quality is top-notch. Highly recommend.' },
  ];

  const useCases = {
    home: { title: 'Home & Bedrooms', desc: 'Quiet, efficient cooling for restful sleep and comfortable living.', products: ['Spyder', 'Table Cooler', '16-inch Regular'], icon: '🏠' },
    shop: { title: 'Shops & Offices', desc: 'Reliable cooling for customer comfort and productive work environments.', products: ['Sumo', '18-inch Diamond', '12-inch Wheel'], icon: '🏪' },
    commercial: { title: 'Commercial & Industrial', desc: 'Heavy-duty cooling for warehouses, venues, and large-scale operations.', products: ['22-inch Commercial', 'Kohinoor', 'Sumo'], icon: '🏭' },
  };

  // Testimonial carousel
  let current = 0;
  const card = document.getElementById('testimonial-card');
  const dots = document.getElementById('testimonial-dots');
  if (card && dots) {
    function showTestimonial(idx) {
      current = idx;
      const t = testimonials[idx];
      card.innerHTML = `
        <div class="testimonial-stars">${'★'.repeat(t.rating)}${'☆'.repeat(5 - t.rating)}</div>
        <p class="testimonial-text">"${t.text}"</p>
        <div class="testimonial-author">
          <div class="testimonial-avatar">${t.name.charAt(0)}</div>
          <div><strong>${t.name}</strong><span>${t.location}</span></div>
        </div>`;
      dots.querySelectorAll('.testimonial-dot').forEach((d, i) => d.classList.toggle('active', i === idx));
    }
    dots.addEventListener('click', e => {
      if (e.target.classList.contains('testimonial-dot')) showTestimonial(parseInt(e.target.dataset.index));
    });
    setInterval(() => showTestimonial((current + 1) % testimonials.length), 5000);
  }

  // Use case tabs
  const tabsEl = document.getElementById('use-case-tabs');
  const contentEl = document.getElementById('use-case-content');
  if (tabsEl && contentEl) {
    tabsEl.addEventListener('click', e => {
      const btn = e.target.closest('.use-case-tab');
      if (!btn) return;
      const key = btn.dataset.uc;
      const uc = useCases[key];
      if (!uc) return;
      tabsEl.querySelectorAll('.use-case-tab').forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      contentEl.innerHTML = `<div class="use-case-info">
        <h3>${uc.title}</h3><p>${uc.desc}</p>
        <div class="use-case-products"><span class="use-case-label">Recommended:</span>
          ${uc.products.map(n => `<span class="use-case-product-tag">${n}</span>`).join('')}
        </div>
        <a href="#/find-your-cooler" class="btn btn-primary">Find Best Match →</a>
      </div>`;
    });
  }
}
