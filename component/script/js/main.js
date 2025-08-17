<script>
    (function() {
      const root = document.documentElement;
      const toggleBtn = document.getElementById("theme-toggle");
      const navLinks = document.getElementById("nav-links");
      const navToggle = document.getElementById("nav-toggle");

      const saved = localStorage.getItem("theme-preference");
      if (saved) setTheme(saved);
      else setTheme("system");

      toggleBtn.addEventListener("click", () => {
        const current = localStorage.getItem("theme-preference") || "system";
        const next = current === "system" ? "dark" :
                     current === "dark" ? "light" : "system";
        setTheme(next);
      });

      function setTheme(mode) {
        root.classList.remove("light", "dark");
        if (mode === "light") root.classList.add("light");
        else if (mode === "dark") root.classList.add("dark");
        localStorage.setItem("theme-preference", mode);
        updateIcon(mode);
        toggleBtn.setAttribute("aria-pressed", mode === "dark");
      }

      function updateIcon(mode) {
        toggleBtn.textContent = mode === "light" ? "☀️" :
                                mode === "dark" ? "🌙" : "💻";
      }

      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if(localStorage.getItem('theme-preference') === 'system') setTheme('system');
      });

      navToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
      });
      navToggle.addEventListener("keypress", (e) => {
        if(e.key === "Enter" || e.key === " ") navLinks.classList.toggle("show");
      });
    })();