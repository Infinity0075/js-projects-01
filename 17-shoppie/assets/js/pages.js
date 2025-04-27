// assets/js/pages.js

// Animate Titles on Scroll
document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".title");
  const text = document.querySelector(".hero-text");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      title.style.transform = "translateY(0)";
      title.style.opacity = 1;
      text.style.transform = "translateY(0)";
      text.style.opacity = 1;
    }
  });
});

// Highlight Active Nav Link
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".navbar-link");
  const currentPage = window.location.pathname.split("/").pop();

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});
