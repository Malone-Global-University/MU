/* theme-toggle.js
   Provides MGUToggleTheme() with "system" support (system → dark → light → system).
   Persists choice to localStorage and updates button icon + aria-pressed.
*/
(function(){
  const storageKey = 'mgu_theme';

  function setTheme(mode){
    const root = document.documentElement;

    // Reset
    root.removeAttribute('data-theme');
    root.removeAttribute('data-theme-system');

    if (mode === 'dark') {
      root.setAttribute('data-theme', 'dark');
    } else if (mode === 'light') {
      root.setAttribute('data-theme', 'light');
    } else if (mode === 'system') {
      root.setAttribute('data-theme-system', 'true'); // marker
      // respect system
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        root.setAttribute('data-theme', 'dark');
      } else {
        root.setAttribute('data-theme', 'light');
      }
    }

    try { localStorage.setItem(storageKey, mode);}catch(e){}
    updateButton(mode);
  }

  function updateButton(mode){
    const btn = document.getElementById('themeToggleBtn');
    if (!btn) return;
    btn.textContent = mode === 'light' ? "☀️"
                  : mode === 'dark'  ? "🌙"
                  : "💻";
    btn.setAttribute('aria-pressed', mode === 'dark');
  }

  function init(){
    let stored = null;
    try { stored = localStorage.getItem(storageKey); } catch(e){}

    if (stored === 'dark') setTheme('dark');
    else if (stored === 'light') setTheme('light');
    else if (stored === 'system') setTheme('system');
    else {
      // default: system
      setTheme('system');
    }

    // listen for OS changes if in system mode
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        const current = localStorage.getItem(storageKey);
        if (current === 'system') setTheme('system');
      });
    }

    // expose cycle function
    window.MGUToggleTheme = () => {
      const current = localStorage.getItem(storageKey) || 'system';
      const next = current === 'system' ? 'dark'
                 : current === 'dark'   ? 'light'
                 : 'system';
      setTheme(next);
    };
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
