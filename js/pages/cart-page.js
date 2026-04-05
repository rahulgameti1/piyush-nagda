// ===== CART PAGE =====
function renderCartPage() {
  if (Cart.items.length === 0) {
    return '<div class="cart-page"><div class="container"><div class="cart-empty"><span class="cart-empty-icon">🛒</span><h2>Your Cart is Empty</h2><p>Looks like you haven\'t added any coolers yet.</p><a href="#/products" class="btn btn-primary btn-lg">Browse Products</a></div></div></div>';
  }
  let items = '';
  Cart.items.forEach(item => {
    items += '<div class="cart-item card">';
    items += '<div class="cart-item-image" style="background:' + (item.series === 'Onex' ? '#E8F4FC' : '#FFF0E8') + '">🌊</div>';
    items += '<div class="cart-item-info"><h3>' + item.name + '</h3><span class="badge ' + (item.series === 'Onex' ? 'badge-onex' : 'badge-airexcel') + '">' + item.series + '</span><span class="price price-md">₹' + item.price.toLocaleString('en-IN') + '</span></div>';
    items += '<div class="cart-item-qty"><button class="qty-btn" onclick="cartUpdateQty(\'' + item.id + '\',' + (item.quantity - 1) + ')">−</button><span class="qty-value">' + item.quantity + '</span><button class="qty-btn" onclick="cartUpdateQty(\'' + item.id + '\',' + (item.quantity + 1) + ')">+</button></div>';
    items += '<div class="cart-item-subtotal"><span class="price price-md">₹' + (item.price * item.quantity).toLocaleString('en-IN') + '</span></div>';
    items += '<button class="cart-item-remove" onclick="cartRemove(\'' + item.id + '\')">×</button>';
    items += '</div>';
  });

  return '<div class="cart-page"><div class="container"><h1 class="cart-title">Shopping Cart</h1><div class="cart-layout"><div class="cart-items">' + items + '</div>'
    + '<div class="cart-summary card"><h3>Order Summary</h3>'
    + '<div class="cart-summary-row"><span>Items (' + Cart.count + ')</span><span>₹' + Cart.total.toLocaleString('en-IN') + '</span></div>'
    + '<div class="cart-summary-row"><span>Delivery</span><span class="cart-free-delivery">FREE</span></div>'
    + '<div class="cart-summary-divider"></div>'
    + '<div class="cart-summary-row cart-total"><span>Total</span><span class="price price-lg">₹' + Cart.total.toLocaleString('en-IN') + '</span></div>'
    + '<a href="#/checkout" class="btn btn-primary btn-lg" style="width:100%" id="proceed-checkout">Proceed to Checkout →</a>'
    + '<a href="tel:7339803084" class="btn btn-ghost" style="width:100%">📞 Order via Call</a>'
    + '</div></div></div></div>';
}

function cartUpdateQty(id, qty) {
  Cart.updateQty(id, qty);
  document.getElementById('app').innerHTML = renderCartPage();
}

function cartRemove(id) {
  Cart.remove(id);
  document.getElementById('app').innerHTML = renderCartPage();
}
