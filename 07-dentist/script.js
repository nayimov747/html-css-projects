const mobileMenuBtn = document.querySelector(".mobile-menu-btn i");
const navLinks = document.querySelector(".nav-links");

mobileMenuBtn.addEventListener("click", () => {
  if (mobileMenuBtn.classList.contains("fa-bars")) {
    mobileMenuBtn.classList.replace("fa-bars", "fa-times");
  } else {
    mobileMenuBtn.classList.replace("fa-times", "fa-bars");
  }
  navLinks.classList.toggle("active");
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove("active");
    mobileMenuBtn.classList.replace("fa-times", "fa-bars");
  })
})

// document.addEventListener('click', (e) => {
//   if(!e.target.closest('nav')) {
//     navLinks.classList.remove("active");
//     mobileMenuBtn.classList.replace("fa-times", "fa-bars");
//   }
// })