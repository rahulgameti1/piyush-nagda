// ===== PRODUCT CARD COMPONENT =====
function renderProductCard(product, index) {
  const discount = product.original_price
    ? Math.round(((product.original_price - product.price) / product.original_price) * 100) : 0;
  const typeIcon = product.type === 'Tower' ? '🗼' : product.type === 'Personal' ? '❄️' : product.type === 'Compact' ? '🌀' : '🌊';
  const bgStyle = product.series === 'Onex'
    ? 'linear-gradient(135deg, #E8F4FC, #D4E8F8)'
    : 'linear-gradient(135deg, #FFF0E8, #FFE0D0)';

  return `
    <a href="#/products/${product.slug}" class="product-card" id="product-${product.id}">
      <div class="product-card-image">
        <div class="product-card-image-inner" style="background: ${bgStyle}">
          <div class="product-card-cooler-icon">${typeIcon}</div>
          <span class="product-card-type">${product.type}</span>
        </div>
        ${discount > 0 ? `<span class="product-card-discount">-${discount}%</span>` : ''}
        <span class="badge ${product.series === 'Onex' ? 'badge-onex' : 'badge-airexcel'} product-card-series">${product.series}</span>
      </div>
      <div class="product-card-body">
        <h3 class="product-card-name">${product.name}</h3>
        <p class="product-card-tagline">${product.tagline}</p>
        <div class="product-card-specs">
          <div class="product-card-spec"><span class="spec-icon">💨</span><span>${product.airflow} CMH</span></div>
          <div class="product-card-spec"><span class="spec-icon">📐</span><span>${product.cooling_area} sq ft</span></div>
          <div class="product-card-spec"><span class="spec-icon">💧</span><span>${product.tank_capacity}L</span></div>
          <div class="product-card-spec"><span class="spec-icon">⚡</span><span>${product.power_consumption}W</span></div>
        </div>
        <div class="product-card-footer">
          <div class="product-card-price">
            <span class="price price-md">₹${product.price.toLocaleString('en-IN')}</span>
            ${product.original_price ? `<span class="product-card-original">₹${product.original_price.toLocaleString('en-IN')}</span>` : ''}
          </div>
          <button class="btn btn-primary btn-sm" onclick="event.preventDefault();event.stopPropagation();Cart.add(PRODUCTS.find(p=>p.id==='${product.id}'))" id="add-to-cart-${product.id}">Add to Cart</button>
        </div>
      </div>
    </a>`;
}
