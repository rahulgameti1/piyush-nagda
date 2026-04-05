// ===== CONTACT PAGE =====
function renderContactPage() {
  let html = '<div class="contact-page">';
  html += '<section class="contact-hero"><div class="container"><span class="section-label">Get in Touch</span><h1>Contact Balaji Electricals</h1><p>Have questions? Need help choosing a cooler? We\'re here to help.</p></div></section>';
  html += '<section class="section"><div class="container"><div class="contact-layout">';
  // Form
  html += '<div class="reveal-left"><form class="contact-form card" id="contact-form" onsubmit="handleContactSubmit(event)"><h3>Send us a Message</h3><div id="contact-status"></div>';
  html += '<div class="form-grid">';
  html += '<div class="input-group"><label for="contact-name">Your Name *</label><input type="text" id="contact-name" name="name" class="input-field" placeholder="Full name" required></div>';
  html += '<div class="input-group"><label for="contact-phone">Phone *</label><input type="tel" id="contact-phone" name="phone" class="input-field" placeholder="Your mobile number" required></div>';
  html += '<div class="input-group"><label for="contact-email">Email</label><input type="email" id="contact-email" name="email" class="input-field" placeholder="your@email.com"></div>';
  html += '<div class="input-group"><label for="contact-subject">Subject</label><select id="contact-subject" name="subject" class="input-field"><option value="">Select topic</option><option value="Product Inquiry">Product Inquiry</option><option value="Bulk Order">Bulk Order</option><option value="Dealership">Dealership Inquiry</option><option value="Support">After-Sales Support</option><option value="Other">Other</option></select></div>';
  html += '<div class="input-group full-width"><label for="contact-message">Message</label><textarea id="contact-message" name="message" class="input-field" placeholder="Tell us how we can help..."></textarea></div>';
  html += '</div>';
  html += '<button type="submit" class="btn btn-primary btn-lg" style="width:100%" id="send-message">Send via WhatsApp</button>';
  html += '</form></div>';
  // Info
  html += '<div class="reveal-right"><div class="contact-info">';
  html += '<div class="contact-card card"><span class="contact-card-icon">📞</span><h4>Call Us</h4><a href="tel:7339803084" class="contact-card-value">7339803084</a><p>Mon–Sat, 9 AM – 7 PM</p></div>';
  html += '<div class="contact-card card"><span class="contact-card-icon">✉️</span><h4>Email</h4><a href="mailto:info@balajielectricals.com" class="contact-card-value">info@balajielectricals.com</a><p>We reply within 24 hours</p></div>';
  html += '<div class="contact-card card"><span class="contact-card-icon">📍</span><h4>Location</h4><p class="contact-card-value">India</p><p>Serving customers nationwide</p></div>';
  html += '<div class="contact-callback card"><h4>💬 Quick WhatsApp Chat</h4><p>Chat with us directly on WhatsApp!</p><a href="https://wa.me/917339803084?text=Hi!%20I%20need%20help%20choosing%20a%20cooler." target="_blank" class="btn btn-warm btn-lg" style="width:100%">Chat on WhatsApp</a></div>';
  html += '</div></div>';
  html += '</div></div></section></div>';
  return html;
}

function handleContactSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('contact-name').value;
  const phone = document.getElementById('contact-phone').value;
  const email = document.getElementById('contact-email').value;
  const subject = document.getElementById('contact-subject').value;
  const message = document.getElementById('contact-message').value;
  if (!name || !phone) {
    document.getElementById('contact-status').innerHTML = '<div class="checkout-error">Please fill name and phone.</div>';
    return;
  }
  let waMsg = `📩 *Contact Form — Balaji Electricals*\n\n`;
  waMsg += `👤 *Name:* ${name}\n📞 *Phone:* ${phone}\n`;
  if (email) waMsg += `✉️ *Email:* ${email}\n`;
  if (subject) waMsg += `📋 *Subject:* ${subject}\n`;
  if (message) waMsg += `💬 *Message:* ${message}\n`;
  const url = 'https://wa.me/917339803084?text=' + encodeURIComponent(waMsg);
  window.open(url, '_blank');
  document.getElementById('contact-status').innerHTML = '<div class="contact-success">✓ Opening WhatsApp! Send the message to connect with us.</div>';
}
