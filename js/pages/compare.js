// ===== COMPARE PAGE =====
let compareSelected = [];

function renderComparePage(queryParams) {
  if (queryParams && queryParams.products) {
    const ids = queryParams.products.split(',');
    compareSelected = PRODUCTS.filter(p => ids.includes(p.id)).slice(0, 3);
  } else {
    compareSelected = [];
  }
  return renderCompareContent();
}

function renderCompareContent() {
  const numericSpecs = [
    { key: 'airflow', label: 'Airflow (CMH)', invert: false },
    { key: 'cooling_area', label: 'Cooling Area (sq ft)', invert: false },
    { key: 'tank_capacity', label: 'Tank (L)', invert: false },
    { key: 'power_consumption', label: 'Power (W)', invert: true },
    { key: 'price', label: 'Price (₹)', invert: true },
  ];
  const specKeys = ['Air Delivery', 'Tank Capacity', 'Cooling Area', 'Power', 'Noise Level', 'Fan Size', 'Body Material', 'Warranty'];

  function getBest(key, invert) {
    if (compareSelected.length === 0) return null;
    return compareSelected.reduce((best, p) => invert ? (p[key] < best[key] ? p : best) : (p[key] > best[key] ? p : best)).id;
  }

  const available = PRODUCTS.filter(p => !compareSelected.find(s => s.id === p.id));

  return `
    <div class="compare-page">
      <div class="container">
        <div class="compare-header"><span class="section-label">Compare</span><h1>Compare Coolers Side by Side</h1><p>Select up to 3 models to compare specifications, features, and pricing.</p></div>
        <div class="compare-selectors">
          ${[0, 1, 2].map(i => `
            <div class="compare-slot">
              ${compareSelected[i] ? `
                <div class="compare-slot-filled">
                  <button class="compare-slot-remove" onclick="compareRemove('${compareSelected[i].id}')">×</button>
                  <div class="compare-slot-icon" style="background:${compareSelected[i].series === 'Onex' ? '#E8F4FC' : '#FFF0E8'}">${compareSelected[i].type === 'Tower' ? '🗼' : compareSelected[i].type === 'Personal' ? '❄️' : '🌊'}</div>
                  <span class="badge ${compareSelected[i].series === 'Onex' ? 'badge-onex' : 'badge-airexcel'}">${compareSelected[i].series}</span>
                  <h4>${compareSelected[i].name}</h4>
                  <span class="price price-md">₹${compareSelected[i].price.toLocaleString('en-IN')}</span>
                </div>
              ` : `
                <div class="compare-slot-empty">
                  <select class="input-field" onchange="compareAdd(this.value);this.value=''">
                    <option value="">+ Add Cooler</option>
                    ${available.map(p => `<option value="${p.id}">${p.name} — ${p.series}</option>`).join('')}
                  </select>
                </div>
              `}
            </div>
          `).join('')}
        </div>
        ${compareSelected.length >= 2 ? `
          <div class="compare-table-wrapper">
            <table class="compare-table">
              <thead><tr><th>Specification</th>${compareSelected.map(p => `<th>${p.name}</th>`).join('')}</tr></thead>
              <tbody>
                ${numericSpecs.map(spec => {
                  const bestId = getBest(spec.key, spec.invert);
                  return `<tr><td class="compare-spec-label">${spec.label}</td>${compareSelected.map(p => `<td class="compare-value ${p.id === bestId ? 'compare-best' : ''}">${spec.key === 'price' ? '₹' + p[spec.key].toLocaleString('en-IN') : p[spec.key]}${p.id === bestId ? '<span class="best-badge">Best</span>' : ''}</td>`).join('')}</tr>`;
                }).join('')}
                ${specKeys.map(key => `<tr><td class="compare-spec-label">${key}</td>${compareSelected.map(p => `<td>${p.specs[key] || '—'}</td>`).join('')}</tr>`).join('')}
                <tr><td class="compare-spec-label">Series</td>${compareSelected.map(p => `<td><span class="badge ${p.series === 'Onex' ? 'badge-onex' : 'badge-airexcel'}">${p.series}</span></td>`).join('')}</tr>
                <tr><td class="compare-spec-label">Type</td>${compareSelected.map(p => `<td>${p.type}</td>`).join('')}</tr>
                <tr class="compare-actions-row"><td></td>${compareSelected.map(p => `<td><button class="btn btn-primary btn-sm" onclick="Cart.add(getProductBySlug('${p.slug}'))">Add to Cart</button></td>`).join('')}</tr>
              </tbody>
            </table>
          </div>
        ` : `<div class="compare-empty"><p>Select at least 2 products to compare them side by side.</p></div>`}
      </div>
    </div>`;
}

function compareAdd(id) {
  if (compareSelected.length >= 3 || !id) return;
  const product = PRODUCTS.find(p => p.id === id);
  if (product && !compareSelected.find(s => s.id === id)) {
    compareSelected.push(product);
    document.getElementById('app').innerHTML = renderCompareContent();
  }
}

function compareRemove(id) {
  compareSelected = compareSelected.filter(s => s.id !== id);
  document.getElementById('app').innerHTML = renderCompareContent();
}
