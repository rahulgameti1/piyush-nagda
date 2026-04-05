// ===== AI COOLER FINDER =====
const finderSteps = [
  { id: 'roomSize', title: "What's your room size?", subtitle: 'Help us understand the space you need to cool.', options: [
    { value: 'small', label: 'Small', desc: 'Up to 150 sq ft — bedrooms, cabins', icon: '🏠' },
    { value: 'medium', label: 'Medium', desc: '150–350 sq ft — living rooms, offices', icon: '🏢' },
    { value: 'large', label: 'Large', desc: '350–600 sq ft — halls, large rooms', icon: '🏛️' },
    { value: 'commercial', label: 'Commercial', desc: '600+ sq ft — warehouses, venues', icon: '🏭' },
  ]},
  { id: 'usage', title: 'Where will you use it?', subtitle: 'Different spaces need different cooling approaches.', options: [
    { value: 'bedroom', label: 'Bedroom', desc: 'Quiet, personal cooling for restful sleep', icon: '🛏️' },
    { value: 'living', label: 'Living Room', desc: 'Family space cooling with wide coverage', icon: '🛋️' },
    { value: 'office', label: 'Office / Study', desc: 'Focused cooling without distraction', icon: '💼' },
    { value: 'shop', label: 'Shop / Retail', desc: 'Customer comfort in commercial spaces', icon: '🏪' },
    { value: 'commercial', label: 'Industrial', desc: 'Heavy-duty cooling for large operations', icon: '🏭' },
  ]},
  { id: 'budget', title: "What's your budget?", subtitle: "We'll find the best value in your range.", options: [
    { value: 'low', label: 'Under ₹4,000', desc: 'Great entry-level cooling solutions', icon: '💰' },
    { value: 'medium', label: '₹4,000 – ₹8,000', desc: 'Best value with premium features', icon: '💎' },
    { value: 'high', label: '₹8,000 – ₹12,000', desc: 'High-performance cooling machines', icon: '⭐' },
    { value: 'premium', label: '₹12,000+', desc: 'Commercial-grade, no compromises', icon: '👑' },
  ]},
  { id: 'priority', title: 'What matters most to you?', subtitle: "We'll optimize our recommendation based on your priority.", options: [
    { value: 'max-cooling', label: 'Maximum Cooling', desc: 'I want the most powerful airflow possible', icon: '🌪️' },
    { value: 'energy-saving', label: 'Energy Saving', desc: 'Low electricity bills matter to me', icon: '⚡' },
    { value: 'low-noise', label: 'Low Noise', desc: 'Quiet operation is essential', icon: '🤫' },
    { value: 'portable', label: 'Portability', desc: 'I want to move it between rooms easily', icon: '🔄' },
  ]},
];

let finderState = { step: 0, answers: {}, results: null };

function recommendCoolers(answers) {
  const { roomSize, usage, budget, priority } = answers;
  const scored = PRODUCTS.map(product => {
    let score = 0, reasons = [];
    // Room size
    const roomSizeMap = { small: 150, medium: 300, large: 500, commercial: 800 };
    const targetArea = roomSizeMap[roomSize] || 300;
    const areaRatio = product.cooling_area / targetArea;
    if (areaRatio >= 0.85 && areaRatio <= 1.5) { score += 30; reasons.push('Perfect fit for your room size'); }
    else if (areaRatio >= 0.6 && areaRatio <= 2) { score += 20; reasons.push('Good coverage for your room'); }
    else if (areaRatio >= 0.4) { score += 10; reasons.push('Adequate for your space'); }
    // Budget
    const budgetMap = { low: 4000, medium: 8000, high: 12000, premium: 16000 };
    const maxBudget = budgetMap[budget] || 8000;
    if (product.price <= maxBudget) { score += Math.round(15 + (1 - product.price / maxBudget) * 10); reasons.push('Within your budget'); }
    else if (product.price <= maxBudget * 1.2) { score += 8; reasons.push('Slightly above budget but worth considering'); }
    // Usage
    const usageMap = { bedroom: ['Bedrooms','Small bedrooms','Master bedrooms','Personal use'], living: ['Living rooms','Large living rooms','Large bedrooms'], office: ['Small offices','Medium offices','Home offices','Study rooms'], shop: ['Shops','Retail shops','Restaurants'], commercial: ['Warehouses','Factories','Wedding venues','Banquet halls','Gyms','Large halls','Showrooms'] };
    const targetUses = usageMap[usage] || [];
    const matchCount = product.use_cases.filter(uc => targetUses.some(tu => uc.toLowerCase().includes(tu.toLowerCase()) || tu.toLowerCase().includes(uc.toLowerCase()))).length;
    if (matchCount >= 2) { score += 25; reasons.push('Designed for exactly your use case'); }
    else if (matchCount >= 1) { score += 18; reasons.push('Well-suited for your intended use'); }
    else { score += 5; }
    // Priority
    switch (priority) {
      case 'max-cooling': { const s = Math.min(20, Math.round((product.airflow / 5500) * 20)); score += s; if (product.airflow >= 3500) reasons.push('Delivers powerful airflow'); break; }
      case 'energy-saving': { const eff = product.cooling_area / product.power_consumption; score += Math.min(20, Math.round(eff * 8)); if (product.power_consumption <= 160) reasons.push('Energy efficient operation'); break; }
      case 'low-noise': { const noise = parseInt(product.specs['Noise Level']) || 60; score += Math.max(0, 20 - Math.max(0, noise - 45)); if (noise <= 55) reasons.push('Ultra-quiet operation'); break; }
      case 'portable': { if (product.tank_capacity <= 30) { score += 20; reasons.push('Compact and easy to move'); } else if (product.tank_capacity <= 45) { score += 12; reasons.push('Manageable size with good cooling'); } else { score += 5; } break; }
      default: score += 10;
    }
    return { ...product, score: Math.min(100, score), matchPercentage: Math.min(98, Math.round(score)), reasons: reasons.slice(0, 3) };
  });
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, 3);
}

function renderFinderPage() {
  finderState = { step: 0, answers: {}, results: null };
  return renderFinderWizard();
}

function renderFinderWizard() {
  if (finderState.results) return renderFinderResults();
  const step = finderSteps[finderState.step];
  return `
    <div class="finder-page">
      <div class="container">
        <div class="finder-wizard">
          <div class="finder-header"><span class="section-label">✦ AI Cooler Finder</span><h1>Find Your Perfect Cooler</h1><p>Answer 4 quick questions. Our smart algorithm does the rest.</p></div>
          <div class="finder-progress">
            ${finderSteps.map((s, i) => `<div class="progress-step ${i <= finderState.step ? 'active' : ''} ${i < finderState.step ? 'done' : ''}"><div class="progress-dot">${i < finderState.step ? '✓' : i + 1}</div><span>${s.id === 'roomSize' ? 'Room' : s.id === 'usage' ? 'Usage' : s.id === 'budget' ? 'Budget' : 'Priority'}</span></div>`).join('')}
            <div class="progress-line"><div class="progress-fill" style="width:${(finderState.step / (finderSteps.length - 1)) * 100}%"></div></div>
          </div>
          <div class="finder-question page-enter">
            <h2>${step.title}</h2><p>${step.subtitle}</p>
            <div class="finder-options">
              ${step.options.map(opt => `<button class="finder-option ${finderState.answers[step.id] === opt.value ? 'selected' : ''}" onclick="finderSelect('${step.id}','${opt.value}')" id="finder-${step.id}-${opt.value}"><span class="finder-option-icon">${opt.icon}</span><div><strong>${opt.label}</strong><p>${opt.desc}</p></div></button>`).join('')}
            </div>
            ${finderState.step > 0 ? `<button class="btn btn-ghost" onclick="finderBack()" style="margin-top:var(--space-lg)">← Go Back</button>` : ''}
          </div>
        </div>
      </div>
    </div>`;
}

function renderFinderResults() {
  const recs = finderState.results;
  return `
    <div class="finder-page">
      <div class="container">
        <div class="finder-results">
          <div class="finder-results-header"><span class="section-label">✦ AI Recommendation</span><h1>Your Perfect Cooler Match</h1><p>Based on your preferences, here are our top picks — ranked by compatibility.</p></div>
          <div class="results-grid">
            ${recs.map((rec, i) => `
              <div class="result-card card ${i === 0 ? 'result-card-top' : ''}">
                ${i === 0 ? '<div class="result-badge-top">🏆 Best Match</div>' : ''}
                <div class="result-match"><div class="match-circle" style="background:conic-gradient(var(--accent-primary) ${rec.matchPercentage * 3.6}deg, var(--border-light) 0deg)"><span>${rec.matchPercentage}%</span></div></div>
                <div class="result-info">
                  <span class="badge ${rec.series === 'Onex' ? 'badge-onex' : 'badge-airexcel'}">${rec.series}</span>
                  <h3>${rec.name}</h3>
                  <p class="result-tagline">${rec.tagline}</p>
                  <div class="result-specs"><span>💨 ${rec.airflow} CMH</span><span>📐 ${rec.cooling_area} sq ft</span><span>💧 ${rec.tank_capacity}L</span></div>
                  <div class="result-reasons">${rec.reasons.map(r => `<div class="result-reason">✓ ${r}</div>`).join('')}</div>
                  <div class="result-price"><span class="price price-lg">₹${rec.price.toLocaleString('en-IN')}</span>${rec.original_price ? `<span class="detail-original-price">₹${rec.original_price.toLocaleString('en-IN')}</span>` : ''}</div>
                  <div class="result-actions"><button class="btn btn-primary" onclick="Cart.add(getProductBySlug('${rec.slug}'))">Add to Cart</button><a href="#/products/${rec.slug}" class="btn btn-ghost">View Details</a></div>
                </div>
              </div>`).join('')}
          </div>
          <div class="finder-results-footer">
            <a href="#/compare?products=${recs.map(r => r.id).join(',')}" class="btn btn-secondary btn-lg">Compare These Models →</a>
            <button class="btn btn-ghost btn-lg" onclick="navigateTo('/find-your-cooler')">Start Over</button>
          </div>
        </div>
      </div>
    </div>`;
}

function finderSelect(stepId, value) {
  finderState.answers[stepId] = value;
  if (finderState.step < finderSteps.length - 1) {
    finderState.step++;
    document.getElementById('app').innerHTML = renderFinderWizard();
    initScrollReveal();
  } else {
    finderState.results = recommendCoolers(finderState.answers);
    document.getElementById('app').innerHTML = renderFinderResults();
    initScrollReveal();
    window.scrollTo(0, 0);
  }
}

function finderBack() {
  if (finderState.step > 0) {
    finderState.step--;
    document.getElementById('app').innerHTML = renderFinderWizard();
    initScrollReveal();
  }
}
