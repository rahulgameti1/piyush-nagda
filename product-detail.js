// ===== PRODUCT DETAIL PAGE =====
function renderProductDetailPage(slug) {
  const product = getProductBySlug(slug);
  if (!product) {
    return `<div class="detail-page"><div class="container"><div class="products-empty"><h2>Product Not Found</h2><p>Sorry, we couldn't find that product.</p><a href="#/products" class="btn btn-primary">Browse All Products</a></div></div></div>`;
  }

  const discount = product.original_price
    ? Math.round(((product.original_price - product.price) / product.original_price) * 100) : 0;
  const typeIcon = product.type === 'Tower' ? '🗼' : product.type === 'Personal' ? '❄️' : product.type === 'Compact' ? '🌀' : '🌊';
  const isOnex = product.series === 'Onex';
  const waMsg = encodeURIComponent(`Hi! I'm interested in the *${product.name}* (${product.series} Series) priced at ₹${product.price.toLocaleString('en-IN')}. Can you tell me more?`);

  return `
    <div class="detail-page">
      <div class="container">
        <a href="#/products" class="detail-back">← Back to Products</a>
        <div class="detail-layout">
          <div class="detail-image-area ${isOnex ? '' : 'airexcel'}">
            <div class="detail-badges">
              ${discount > 0 ? `<span class="detail-discount-badge">-${discount}% OFF</span>` : ''}
              <span class="badge ${isOnex ? 'badge-onex' : 'badge-airexcel'}">${product.series}</span>
            </div>
            <div class="detail-cooler-icon">${typeIcon}</div>
          </div>
          <div class="detail-info">
            <span class="badge ${isOnex ? 'badge-onex' : 'badge-airexcel'}">${product.series} Series</span>
            <h1 class="detail-name">${product.name}</h1>
            <p class="detail-tagline">${product.tagline}</p>
            <div class="detail-price-row">
              <span class="price price-lg">₹${product.price.toLocaleString('en-IN')}</span>
              ${product.original_price ? `<span class="detail-original-price">₹${product.original_price.toLocaleString('en-IN')}</span>` : ''}
              ${discount > 0 ? `<span class="badge" style="background:rgba(91,181,162,0.15);color:var(--accent-primary-dark)">Save ₹${(product.original_price - product.price).toLocaleString('en-IN')}</span>` : ''}
            </div>
            <p class="detail-description">${product.description}</p>
            <div class="detail-specs-grid">
              <div class="detail-spec-item"><span class="detail-spec-icon">💨</span><div class="detail-spec-text"><span class="detail-spec-label">Airflow</span><span class="detail-spec-value">${product.airflow} CMH</span></div></div>
              <div class="detail-spec-item"><span class="detail-spec-icon">📐</span><div class="detail-spec-text"><span class="detail-spec-label">Cooling Area</span><span class="detail-spec-value">${product.cooling_area} sq ft</span></div></div>
              <div class="detail-spec-item"><span class="detail-spec-icon">💧</span><div class="detail-spec-text"><span class="detail-spec-label">Tank</span><span class="detail-spec-value">${product.tank_capacity} Litres</span></div></div>
              <div class="detail-spec-item"><span class="detail-spec-icon">⚡</span><div class="detail-spec-text"><span class="detail-spec-label">Power</span><span class="detail-spec-value">${product.power_consumption} Watts</span></div></div>
            </div>
            <div class="detail-actions">
              <button class="btn btn-primary btn-lg" onclick="Cart.add(getProductBySlug('${product.slug}'))">🛒 Add to Cart</button>
              <a href="https://wa.me/917339803084?text=${waMsg}" target="_blank" class="btn btn-warm btn-lg">💬 Enquire on WhatsApp</a>
            </div>

            <div class="detail-features">
              <h3>Key Features</h3>
              <div class="detail-features-list">
                ${product.features.map(f => `<div class="detail-feature-item">${f}</div>`).join('')}
              </div>
            </div>

            <div class="detail-use-cases">
              <h3>Best For</h3>
              <div class="detail-use-tags">
                ${product.use_cases.map(uc => `<span class="detail-use-tag">${uc}</span>`).join('')}
              </div>
            </div>

            <div class="detail-full-specs">
              <h3>Full Specifications</h3>
              <table class="detail-specs-table">
                ${Object.entries(product.specs).map(([k, v]) => `<tr><td>${k}</td><td>${v}</td></tr>`).join('')}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>`;
}
