// Smooth Scroll
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    window.scrollTo({
      top: target.offsetTop - 70,
      behavior: 'smooth'
    });
  });
});

// Fade-In Section Observer
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.25 });

document.querySelectorAll('.fade').forEach(sec => observer.observe(sec));
