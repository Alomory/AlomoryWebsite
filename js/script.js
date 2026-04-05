// script.js
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const toggle = document.getElementById("themeToggle");

  // SYSTEM DEFAULT DARK MODE
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    body.setAttribute("data-theme", "dark");
  }

  // TOGGLE DARK/LIGHT
  if (toggle) {
    toggle.addEventListener("click", () => {
      const isDark = body.getAttribute("data-theme") === "dark";
      body.setAttribute("data-theme", isDark ? "light" : "dark");
    });
  }

  // REVEAL ANIMATIONS
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("active");
    });
  });
  document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

  // CUSTOM CURSOR
  const cursor = document.getElementById("cursor");
  if (cursor) {
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    });
  }
});