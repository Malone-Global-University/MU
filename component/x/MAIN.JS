// Component loader for modular template
document.addEventListener('DOMContentLoaded', async () => {
  const loadComponent = async (id, path) => {
    try {
      const res = await fetch(path);
      if (!res.ok) throw new Error(`Failed to load ${path}`);
      const html = await res.text();
      document.getElementById(id).innerHTML = html;
    } catch (err) {
      console.error(err);
    }
  };

  loadComponent('navbar-placeholder', '/components/navbar.html');
  loadComponent('hero-placeholder', '/components/hero.html');
  loadComponent('footer-placeholder', '/components/footer.html');
});
