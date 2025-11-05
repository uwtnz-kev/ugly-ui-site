// script.j
// Animated background + safe export for Jest testing

function animateBackground(options = {}) {
  const body = typeof document !== 'undefined' ? document.body : null;
  if (!body) return false; // safe for test environment (no DOM)

  const speed = options.speed || 100; // ms
  let hue = 0;

  const id = setInterval(() => {
    body.style.transition = 'background-color 0.9s linear';
    body.style.backgroundColor = `hsl(${hue}, 80%, 70%)`;
    hue = (hue + 5) % 360;
  }, speed);

  // Return a function to stop the animation (useful for tests/cleanup)
  return () => clearInterval(id);
}

// Run when page loads (only in browser)
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    animateBackground();
    console.log('🎨 Background animation started!');
  });
}

// Export for Node/Jest. If module.exports not available (browser), attach to window.
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { animateBackground };
} else if (typeof window !== 'undefined') {
  window.animateBackground = animateBackground;
}
