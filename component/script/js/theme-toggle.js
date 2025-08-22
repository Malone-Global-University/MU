/* theme-toggle.js
   Provides MGUToggleTheme() and persists choice to localStorage
*/
(function(){
  const storageKey = 'mgu_theme';
  function setTheme(name){
    if (name === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    try{ localStorage.setItem(storageKey, name);}catch(e){}
  }
  function init(){
    let stored = null;
    try { stored = localStorage.getItem(storageKey); } catch(e){}
    if (stored === 'dark') setTheme('dark');
    else if (stored === 'light') setTheme('light');
    else {
      // default: respect prefers-color-scheme
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) setTheme('dark');
      else setTheme('light');
    }
    // expose toggle function
    window.MGUToggleTheme = () => {
      const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      setTheme(current === 'dark' ? 'light' : 'dark');
    };
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();