// Navigation utility with fade transitions
function navigateTo(page, delay = 800) {
  document.body.style.transition = 'opacity 0.8s ease';
  document.body.style.opacity = '0';
  setTimeout(() => {
    window.location.href = page;
  }, delay);
}

// Fade in on page load
document.addEventListener('DOMContentLoaded', () => {
  document.body.style.opacity = '0';
  requestAnimationFrame(() => {
    document.body.style.transition = 'opacity 1s ease';
    document.body.style.opacity = '1';
  });
});
