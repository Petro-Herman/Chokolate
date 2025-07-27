const openBtn = document.querySelector(".loved-btn");
const closeBtn = document.querySelector(".modal-close");
const modal = document.querySelector(".backdrop");

function openModal() {
  modal.classList.add("is-open");
  document.body.classList.add("modal-open");
}

function closeModal() {
  modal.classList.remove("is-open");
  document.body.classList.remove("modal-open");
}

openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});

const openMenuBtn = document.querySelector(".mob-menu-btn");
const closeMenuBtn = document.querySelector(".mob-menu-close");
const mobMenu = document.querySelector(".mob-menu");
const menuLinks = document.querySelectorAll(".mob-item-link, .mob-nav-item a");

function openMenu() {
  mobMenu.classList.add("is-open");
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  mobMenu.classList.remove("is-open");
  document.body.style.overflow = "";
}

openMenuBtn.addEventListener("click", openMenu);
closeMenuBtn.addEventListener("click", closeMenu);

menuLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

mobMenu.addEventListener("click", (event) => {
  if (!event.target.closest(".mob-menu-wrap")) {
    closeMenu();
  }
});

// =================================darkTheme

const toggle = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-theme");
  toggle.checked = true;
}

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    document.body.classList.add("dark-theme");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark-theme");
    localStorage.setItem("theme", "light");
  }
});
