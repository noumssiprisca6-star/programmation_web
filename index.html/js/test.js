// MENU MOBILE
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// SCROLL BOUTON
function scrollToSection() {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth'
  });
}