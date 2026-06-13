const mobileNavLinks = document.querySelectorAll('.mobile-nav a');

mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    const mobileNav = document.getElementById('mobileNav');
    mobileNav.classList.remove('active');
  });
});

function toggleMenu() {
  const mobileNav = document.getElementById('mobileNav');
  mobileNav.classList.toggle('active');
}