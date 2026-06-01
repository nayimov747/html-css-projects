// ================ Offcanvas menu =================

const header__toggle = document.querySelector(".header__toggle");
const offcanvas = document.querySelector(".offcanvas");
const closeBtn = document.querySelector(".offcanvas__close");
const overlay = document.querySelector(".overlay");

// Offcanvas ochish
header__toggle.addEventListener("click", () => {
  offcanvas.classList.add("active");
  overlay.classList.add("active");
});

// Yopish (close tugmasi yoki overlay bosilganda)
function closeOffcanvas() {
  offcanvas.classList.remove("active");
  overlay.classList.remove("active");
}

closeBtn.addEventListener("click", closeOffcanvas);
overlay.addEventListener("click", closeOffcanvas);


// ===================== Team card =====================

const buttons = document.querySelectorAll(".team__card-btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.parentElement;
    card.classList.toggle("active");
  });
});