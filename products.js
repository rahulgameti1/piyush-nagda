// ===== PRODUCTS PAGE =====
let currentFilters = { series: '', type: '', sortBy: '', maxPrice: 15000 };

function renderProductsPage(queryParams) {
  if (queryParams && queryParams.series) currentFilters.series = queryParams.series;

  const types = ['', 'Desert', 'Tower', 'Personal', 'Commercial', 'Premium', 'Standard', 'Compact'];

  return `
    <div class="products-page">
      <section class="products-hero">
        <div class="container">
          <h1>Our Cooler Collection</h1>
          <p>8 precision-engineered models across two patented series — find your perfect match.</p>
        </div>
      </section>
      <section class="products-main container">
        <aside class="products-sidebar">
          <div class="filter-group">
            <h4>Product Series</h4>
            <div class="filter-options">
              <button class="filter-btn ${currentFilters.series === '' ? 'active' : ''}" onclick="setFilter('series','')">All</button>
              <button class="filter-btn ${currentFilters.series === 'Onex' ? 'active' : ''}" onclick="setFilter('series','Onex')">Onex</button>
              <button class="filter-btn ${currentFilters.series === 'Air Excel' ? 'active' : ''}" onclick="setFilter('series','Air Excel')">Air Excel</button>
            </div>
          </div>
          <div class="filter-group">
            <h4>Type</h4>
            <div class="filter-options">
              ${types.map(t => `<button class="filter-btn ${currentFilters.type === t ? 'active' : ''}" onclick="setFilter('type','${t}')">${t || 'All'}</button>`).join('')}
            </div>
          </div>
          <div class="filter-group">
            <h4>Max Price: ₹<span id="price-label">${currentFilters.maxPrice.toLocaleString('en-IN')}</span></h4>
            <input type="range" min="2000" max="15000" step="500" value="${currentFilters.maxPrice}" class="price-slider" id="price-slider">
            <div class="price-range-labels"><span>₹2,000</span><span>₹15,000</span></div>
          </div>
          <div class="filter-group">
            <h4>Sort By</h4>
            <select class="input-field" id="sort-select" onchange="setFilter('sortBy',this.value)">
              <option value="" ${currentFilters.sortBy === '' ? 'selected' : ''}>Featured</option>
              <option value="price-asc" ${currentFilters.sortBy === 'price-asc' ? 'selected' : ''}>Price: Low to High</option>
              <option value="price-desc" ${currentFilters.sortBy === 'price-desc' ? 'selected' : ''}>Price: High to Low</option>
              <option value="airflow" ${currentFilters.sortBy === 'airflow' ? 'selected' : ''}>Max Airflow</option>
              <option value="cooling" ${currentFilters.sortBy === 'cooling' ? 'selected' : ''}>Cooling Area</option>
            </select>
          </div>
        </aside>
        <div class="products-grid-area">
          <div class="products-count" id="products-count"></div>
          <div class="products-grid" id="products-grid"></div>
        </div>
      </section>
    </div>`;
}

function setFilter(key, value) {
  currentFilters[key] = value;
  updateProductsGrid();
  // Update active buttons
  if (key === 'series' || key === 'type') {
    const sidebar = document.querySelector('.products-sidebar');
    if (sidebar) {
      sidebar.querySelectorAll('.filter-btn').forEach(btn => {
        const text = btn.textContent.trim();
        if (key === 'series') {
          if (btn.closest('.filter-group').querySelector('h4').textContent === 'Product Series') {
            btn.classList.toggle('active', (value === '' && text === 'All') || text === value);
          }
        }
        if (key === 'type') {
          if (btn.closest('.filter-group').querySelector('h4').textContent === 'Type') {
            btn.classList.toggle('active', (value === '' && text === 'All') || text === value);
          }
        }
      });
    }
  }
}

function updateProductsGrid() {
  const products = filterProducts(currentFilters);
  const grid = document.getElementById('products-grid');
  const count = document.getElementById('products-count');
  if (!grid) return;
  count.innerHTML = `<span>${products.length} product${products.length !== 1 ? 's' : ''} found</span>`;
  if (products.length === 0) {
    grid.innerHTML = `<div class="products-empty"><p>😕 No coolers match your filters. Try adjusting the criteria.</p><button class="btn btn-secondary" onclick="currentFilters={series:'',type:'',sortBy:'',maxPrice:15000};navigateTo('/products')">Clear Filters</button></div>`;
  } else {
    grid.innerHTML = products.map((p, i) => `<div class="reveal visible">${renderProductCard(p, i)}</div>`).join('');
  }
}

function initProductsPage() {
  const slider = document.getElementById('price-slider');
  const label = document.getElementById('price-label');
  if (slider) {
    slider.addEventListener('input', () => {
      currentFilters.maxPrice = Number(slider.value);
      label.textContent = currentFilters.maxPrice.toLocaleString('en-IN');
      updateProductsGrid();
    });
  }
  updateProductsGrid();
}
