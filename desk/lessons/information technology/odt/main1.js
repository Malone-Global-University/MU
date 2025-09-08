<script>
  fetch('/partials/navbar.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('navbar-placeholder').innerHTML = data;

      // === Mobile menu toggle ===
      const navToggle = document.querySelector('.nav-toggle');
      const navLinks = document.querySelector('.nav-links');
      navToggle.addEventListener('click', () => {
        const expanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', !expanded);
        navLinks.classList.toggle('open');
      });

      // === Theme toggle ===
      const themeToggle = document.getElementById('theme-toggle');
      const html = document.documentElement;

      function setTheme(mode) {
        if (mode) {
          html.classList.toggle('dark', mode === 'dark');
          localStorage.setItem('site-theme', mode);
        } else {
          html.classList.remove('dark');
          localStorage.removeItem('site-theme');
        }
      }

      function loadTheme() {
        const savedTheme = localStorage.getItem('site-theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const mode = savedTheme || (prefersDark ? 'dark' : 'light');
        setTheme(mode);
      }

      themeToggle.addEventListener('click', () => {
        const currentTheme = localStorage.getItem('site-theme') || (html.classList.contains('dark') ? 'dark' : 'light');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        themeToggle.setAttribute('aria-pressed', newTheme === 'dark');
        document.getElementById('icon-sun').style.display = newTheme === 'light' ? 'block' : 'none';
        document.getElementById('icon-moon').style.display = newTheme === 'dark' ? 'block' : 'none';
      });

      loadTheme();
    })
    .catch(err => console.error('Error loading navbar:', err));
</script>
