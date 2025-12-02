// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    window.scrollTo({
      top: target.offsetTop - 20,
      behavior: 'smooth'
    });
  });
});

// Fade-in animation when sections enter view
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll('.section').forEach(section => {
  observer.observe(section);
});

// Add basic reveal styling dynamically
document.querySelectorAll('.section').forEach(sec => {
  sec.style.opacity = '0';
  sec.style.transform = 'translateY(40px)';
  sec.style.transition = 'all 0.8s ease';
});

// Apply visibility change when class added
const style = document.createElement('style');
style.innerHTML = `.visible { opacity: 1 !important; transform: translateY(0) !important; }`;
document.head.appendChild(style);

