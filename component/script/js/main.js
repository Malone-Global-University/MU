(function () {
  const root = document.documentElement;
  const toggleBtn = document.getElementById("theme-toggle");
  const navLinks = document.getElementById("nav-links");
  const navToggle = document.getElementById("nav-toggle");

  // Prevent flash of wrong theme before JS runs
  document.documentElement.classList.add("no-flash");

  const saved = localStorage.getItem("theme-preference");
  if (saved) setTheme(saved, true);
  else setTheme("system", true);

  // Theme toggle button (now inside the menu as last item)
  toggleBtn.addEventListener("click", () => {
    const current = localStorage.getItem("theme-preference") || "system";
    const next = current === "system" ? "dark" : current === "dark" ? "light" : "system";
    setTheme(next);
  });

  function setTheme(mode, isInit = false) {
    root.classList.remove("light", "dark");
    if (mode === "light") root.classList.add("light");
    else if (mode === "dark") root.classList.add("dark");

    localStorage.setItem("theme-preference", mode);
    updateIcon(mode);
    toggleBtn.setAttribute("aria-pressed", mode === "dark");

    if (isInit) requestAnimationFrame(() => {
      document.documentElement.classList.remove("no-flash");
    });
  }

  function updateIcon(mode) {
    toggleBtn.textContent = mode === "light" ? "☀️" : mode === "dark" ? "🌙" : "💻";
  }

  // Respond to system changes while in "system" mode
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    if (localStorage.getItem("theme-preference") === "system") setTheme("system");
  });

  // Mobile nav toggle
  navToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("show");
    navToggle.setAttribute("aria-expanded", String(open));
  });
  navToggle.addEventListener("keypress", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      const open = navLinks.classList.toggle("show");
      navToggle.setAttribute("aria-expanded", String(open));
    }
  });

  // Close menu after clicking a link or the theme item (on mobile)
  navLinks.addEventListener("click", (e) => {
    if (window.matchMedia("(max-width: 768px)").matches) {
      if (e.target.closest("a") || e.target.closest(".theme-item")) {
        navLinks.classList.remove("show");
        navToggle.setAttribute("aria-expanded", "false");
      }
    }
  });
})();
