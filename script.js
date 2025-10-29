// Simple script used in the demo site
document.addEventListener('DOMContentLoaded', function() {
  const img = document.getElementById('ugly-snap');
  if (!img || !img.src) {
    console.warn('Place an ugly UI screenshot at assets/ugly.png');
  } else {
    console.log('Screenshot present:', img.src)
  }
});

