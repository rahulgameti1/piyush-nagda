// ===== WHATSAPP WIDGET =====
function initWhatsApp() {
  const float = document.getElementById('whatsapp-float');
  if (!float) return;
  // Show after 2 seconds
  float.style.opacity = '0';
  float.style.transform = 'scale(0.5)';
  float.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
  setTimeout(() => {
    float.style.opacity = '1';
    float.style.transform = 'scale(1)';
  }, 2000);
}
