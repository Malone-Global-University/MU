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

  // Theme toggle button
  toggleBtn.addEventListener("click", () => {
    const current = localStorage.getItem("theme-preference") || "system";
    const next =
      current === "system" ? "dark" : current === "dark" ? "light" : "system";
    setTheme(next);
  });

  function setTheme(mode, isInit = false) {
    root.classList.remove("light", "dark");
    if (mode === "light") root.classList.add("light");
    else if (mode === "dark") root.classList.add("dark");

    localStorage.setItem("theme-preference", mode);
    updateIcon(mode);
    toggleBtn.setAttribute("aria-pressed", mode === "dark");

    // Remove no-flash once the initial theme is applied
    if (isInit) requestAnimationFrame(() => {
      document.documentElement.classList.remove("no-flash");
    });
  }

  function updateIcon(mode) {
    toggleBtn.textContent =
      mode === "light" ? "☀️" : mode === "dark" ? "🌙" : "💻";
  }

  // Listen for system changes if "system" is active
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    if (localStorage.getItem("theme-preference") === "system") setTheme("system");
  });

  // Mobile nav toggle
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
  navToggle.addEventListener("keypress", (e) => {
    if (e.key === "Enter" || e.key === " ") navLinks.classList.toggle("show");
  });
})();
