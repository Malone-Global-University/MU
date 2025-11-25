(function() {
  const root = document.documentElement;
  const toggleBtn = document.getElementById("theme-toggle");
  const navLinks = document.getElementById("nav-menu");
  const navToggle = document.getElementById("nav-toggle");

  // load saved theme or default to dark
  const saved = localStorage.getItem("theme-preference") || "dark";
  setTheme(saved);

  toggleBtn.addEventListener("click", () => {
    const current = localStorage.getItem("theme-preference") || "dark";
    const next = current === "dark" ? "light" : "dark";
    setTheme(next);
  });

  function setTheme(mode) {
    root.classList.remove("light", "dark");
    root.classList.add(mode);
    localStorage.setItem("theme-preference", mode);
    updateIcon(mode);
    toggleBtn.setAttribute("aria-pressed", mode === "dark");
  }

  function updateIcon(mode) {
    toggleBtn.textContent = mode === "light" ? "☀️" : "🌙";
  }

  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
  navToggle.addEventListener("keypress", (e) => {
    if(e.key === "Enter" || e.key === " ") navLinks.classList.toggle("show");
  });
})();
