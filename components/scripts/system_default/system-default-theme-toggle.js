(function() {
  const root = document.documentElement;
  const toggleBtn = document.getElementById("theme-toggle");

  const saved = localStorage.getItem("theme-preference");
  if (saved) setTheme(saved);
  else setTheme("system");

  toggleBtn?.addEventListener("click", () => {
    const current = localStorage.getItem("theme-preference") || "system";
    const next = current === "system" ? "dark" :
                 current === "dark" ? "light" : "system";
    setTheme(next);
  });

  function setTheme(mode) {
    root.classList.remove("light","dark");
    if (mode==="light") root.classList.add("light");
    else if(mode==="dark") root.classList.add("dark");
    localStorage.setItem("theme-preference",mode);
    updateIcon(mode);
  }

  function updateIcon(mode){
    if(!toggleBtn) return;
    toggleBtn.textContent = mode==="light" ? "☀️" : mode==="dark" ? "🌙" : "💻";
  }
})();
