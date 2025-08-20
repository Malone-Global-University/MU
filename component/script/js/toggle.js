(function() {
  const root = document.documentElement;
  const toggleBtn = document.getElementById("theme-toggle");

  function setTheme(mode) {
    root.classList.remove("light","dark");

    if (mode === "light") {
      root.classList.add("light");
    } else if (mode === "dark") {
      root.classList.add("dark");
    } else if (mode === "system") {
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      root.classList.add(systemDark ? "dark" : "light");

      // Live update when system theme changes
      window.matchMedia("(prefers-color-scheme: dark)").onchange = e => {
        if (localStorage.getItem("theme-preference") === "system") {
          root.classList.remove("light","dark");
          root.classList.add(e.matches ? "dark" : "light");
        }
      };
    }

    localStorage.setItem("theme-preference", mode);
    updateIcon(mode);
  }

  function updateIcon(mode) {
    if (!toggleBtn) return;
    if (mode === "light") {
      toggleBtn.textContent = "☀️";
      toggleBtn.setAttribute("aria-label", "Switch to dark mode");
    } else if (mode === "dark") {
      toggleBtn.textContent = "🌙";
      toggleBtn.setAttribute("aria-label", "Switch to system mode");
    } else {
      toggleBtn.textContent = "💻";
      toggleBtn.setAttribute("aria-label", "Switch to light mode");
    }
  }

  // Initialize from saved preference or system
  const saved = localStorage.getItem("theme-preference");
  setTheme(saved || "system");

  // Cycle through themes on click
  toggleBtn?.addEventListener("click", () => {
    const current = localStorage.getItem("theme-preference") || "system";
    const next = current === "system" ? "dark" :
                 current === "dark" ? "light" : "system";
    setTheme(next);
  });
})();
