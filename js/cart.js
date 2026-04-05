// ===== CART (localStorage) =====
const Cart = {
  KEY: 'balaji-cart',
  items: [],

  init() {
    try {
      const saved = localStorage.getItem(this.KEY);
      if (saved) this.items = JSON.parse(saved);
    } catch (e) {}
    this.updateBadge();
  },

  save() {
    localStorage.setItem(this.KEY, JSON.stringify(this.items));
    this.updateBadge();
  },

  add(product) {
    const exists = this.items.find(i => i.id === product.id);
    if (exists) {
      exists.quantity++;
    } else {
      this.items.push({
        id: product.id, name: product.name, price: product.price,
        series: product.series, slug: product.slug, quantity: 1
      });
    }
    this.save();
    this.showToast(`✓ ${product.name} added to cart`);
  },

  remove(productId) {
    this.items = this.items.filter(i => i.id !== productId);
    this.save();
  },

  updateQty(productId, qty) {
    if (qty <= 0) { this.remove(productId); return; }
    const item = this.items.find(i => i.id === productId);
    if (item) item.quantity = qty;
    this.save();
  },

  clear() {
    this.items = [];
    this.save();
  },

  get total() {
    return this.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  },

  get count() {
    return this.items.reduce((sum, i) => sum + i.quantity, 0);
  },

  updateBadge() {
    const c = this.count;
    const badges = document.querySelectorAll('#cart-badge, #cart-badge-mobile');
    badges.forEach(b => {
      if (c > 0) { b.textContent = c; b.style.display = 'flex'; }
      else { b.style.display = 'none'; }
    });
  },

  showToast(msg) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = msg;
    container.appendChild(toast);
    setTimeout(() => {
      toast.classList.add('toast-exit');
      setTimeout(() => toast.remove(), 300);
    }, 2000);
  },

  // Build WhatsApp order message
  buildOrderMessage(customer) {
    let msg = `🛒 *New Order — Balaji Electricals*\n\n`;
    msg += `👤 *Customer:* ${customer.name}\n`;
    msg += `📞 *Phone:* ${customer.phone}\n`;
    if (customer.email) msg += `✉️ *Email:* ${customer.email}\n`;
    msg += `📍 *Address:* ${customer.address}, ${customer.city}`;
    if (customer.pincode) msg += ` - ${customer.pincode}`;
    msg += `\n\n📦 *Order Items:*\n`;
    this.items.forEach(item => {
      msg += `  • ${item.name} × ${item.quantity} = ₹${(item.price * item.quantity).toLocaleString('en-IN')}\n`;
    });
    msg += `\n💰 *Total: ₹${this.total.toLocaleString('en-IN')}*\n`;
    msg += `💳 *Payment:* Cash on Delivery\n`;
    msg += `🚚 *Delivery:* FREE`;
    return msg;
  }
};

Cart.init();
