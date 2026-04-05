// ===== CHECKOUT PAGE =====
function renderCheckoutPage() {
  if (Cart.items.length === 0) {
    return '<div class="checkout-page"><div class="container"><div class="cart-empty"><h2>No items to checkout</h2><a href="#/products" class="btn btn-primary">Browse Products</a></div></div></div>';
  }
  let itemsHtml = '';
  Cart.items.forEach(item => {
    itemsHtml += '<div class="checkout-item"><div><strong>' + item.name + '</strong><span class="checkout-item-qty">× ' + item.quantity + '</span></div><span class="price">₹' + (item.price * item.quantity).toLocaleString('en-IN') + '</span></div>';
  });

  let html = '<div class="checkout-page"><div class="container"><h1 class="checkout-title">Checkout</h1><div class="checkout-layout">';
  // Form
  html += '<form class="checkout-form card" id="checkout-form" onsubmit="handleCheckoutSubmit(event)"><h3>Delivery Details</h3><div id="checkout-status"></div>';
  html += '<div class="form-grid">';
  html += '<div class="input-group"><label for="co-name">Full Name *</label><input type="text" id="co-name" class="input-field" placeholder="Enter your full name" required></div>';
  html += '<div class="input-group"><label for="co-phone">Phone Number *</label><input type="tel" id="co-phone" class="input-field" placeholder="10-digit mobile number" required></div>';
  html += '<div class="input-group"><label for="co-email">Email (Optional)</label><input type="email" id="co-email" class="input-field" placeholder="your@email.com"></div>';
  html += '<div class="input-group full-width"><label for="co-address">Address *</label><textarea id="co-address" class="input-field" placeholder="House no., Street, Area" required style="min-height:80px"></textarea></div>';
  html += '<div class="input-group"><label for="co-city">City *</label><input type="text" id="co-city" class="input-field" placeholder="Your city" required></div>';
  html += '<div class="input-group"><label for="co-pincode">Pincode</label><input type="text" id="co-pincode" class="input-field" placeholder="6-digit pincode"></div>';
  html += '</div>';
  html += '<div class="payment-section"><h3>Payment Method</h3>';
  html += '<label class="payment-option active"><input type="radio" name="pay" value="COD" checked><div><strong>💰 Cash on Delivery</strong><p>Pay when your cooler is delivered</p></div></label>';
  html += '<label class="payment-option opacity-50"><input type="radio" name="pay" value="online" disabled><div><strong>💳 Online Payment</strong><p>Coming soon — call us for online payment options</p></div></label>';
  html += '</div>';
  html += '<button type="submit" class="btn btn-primary btn-lg" style="width:100%" id="place-order">Place Order via WhatsApp — ₹' + Cart.total.toLocaleString('en-IN') + '</button>';
  html += '</form>';
  // Summary
  html += '<div class="checkout-summary card"><h3>Order Review</h3>' + itemsHtml;
  html += '<div class="cart-summary-divider"></div><div class="checkout-total"><span>Total (' + Cart.count + ' items)</span><span class="price price-lg">₹' + Cart.total.toLocaleString('en-IN') + '</span></div>';
  html += '<div class="checkout-delivery-note">🚚 Free Delivery</div></div>';
  html += '</div></div></div>';
  return html;
}

function handleCheckoutSubmit(e) {
  e.preventDefault();
  const customer = {
    name: document.getElementById('co-name').value,
    phone: document.getElementById('co-phone').value,
    email: document.getElementById('co-email').value,
    address: document.getElementById('co-address').value,
    city: document.getElementById('co-city').value,
    pincode: document.getElementById('co-pincode').value
  };
  if (!customer.name || !customer.phone || !customer.address || !customer.city) {
    document.getElementById('checkout-status').innerHTML = '<div class="checkout-error">Please fill all required fields.</div>';
    return;
  }
  const msg = Cart.buildOrderMessage(customer);
  const url = 'https://wa.me/917339803084?text=' + encodeURIComponent(msg);
  window.open(url, '_blank');
  Cart.clear();
  document.getElementById('app').innerHTML = renderOrderSuccess(customer);
  window.scrollTo(0, 0);
}

function renderOrderSuccess(customer) {
  return '<div class="checkout-page"><div class="container"><div class="order-success card">'
    + '<div class="success-icon">✓</div><h1>Order Sent via WhatsApp!</h1>'
    + '<p>Your order details have been sent to our WhatsApp. We will confirm your order and contact you at ' + (customer.phone || 'your number') + ' for delivery details.</p>'
    + '<div class="order-payment-info"><span>💰 Payment: Cash on Delivery (COD)</span></div>'
    + '<div class="success-actions"><a href="#/" class="btn btn-primary btn-lg">Back to Home</a><a href="#/products" class="btn btn-secondary btn-lg">Continue Shopping</a></div>'
    + '</div></div></div>';
}
