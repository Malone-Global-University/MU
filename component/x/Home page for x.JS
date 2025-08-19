<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Malone University - Explore knowledge, courses, and community resources.">
  <title>Home | Malone University</title>
  <link rel="icon" href="/images/favicon.ico">
  <link rel="stylesheet" href="/components/css/main.css">
</head>
<body>
  <header id="navbar-placeholder"></header>
  <section id="hero-placeholder"></section>

  <main class="container">
    <section class="grid grid-3">
      <div class="card">
        <h3>Course 101</h3>
        <p>Introductory course description goes here.</p>
        <a href="/courses.html">Learn More</a>
      </div>
      <div class="card">
        <h3>Course 102</h3>
        <p>Intermediate course description.</p>
        <a href="/courses.html">Learn More</a>
      </div>
      <div class="card">
        <h3>Course 103</h3>
        <p>Advanced course description.</p>
        <a href="/courses.html">Learn More</a>
      </div>
    </section>
  </main>

  <footer id="footer-placeholder"></footer>

  <script src="/components/js/theme-toggle.js" defer></script>
  <script src="/components/js/main.js" defer></script>
  <script>
    document.addEventListener('DOMContentLoaded', async () => {
      const loadComponent = async (id, path) => {
        const res = await fetch(path);
        const html = await res.text();
        document.getElementById(id).innerHTML = html;
      };
      loadComponent('navbar-placeholder', '/components/navbar.html');
      loadComponent('hero-placeholder', '/components/hero.html');
      loadComponent('footer-placeholder', '/components/footer.html');
    });
  </script>
</body>
</html>
