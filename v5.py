import os

BASE_DIR = "departments"
CSS_PATH = "/components/css/pyc.css"
FAVICON_PATH = "/images/logo.png"

HTML_TEMPLATE = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Malone University - Explore knowledge, courses, and community resources.">
  <title>{title}</title>
  <link rel="stylesheet" href="{css_path}">
  <link rel="icon" href="{favicon}" type="image/x-icon">
  <link rel="stylesheet" href="/components/css/pyc.css" />

</head>
<body>

<a href="#main-content" class="skip-link">Skip to content</a>

<header class="navbar" role="navigation" aria-label="Main Navigation">
  <div class="logo-container">
    <a href="/index.html"><img src="{favicon}" alt="Malone University Logo" class="logo-img"></a>
    <span class="school-name">Malone University</span>
  </div>

  <ul class="nav-links" id="nav-links">
    <li><a href="/">Home</a></li>
    <li><a href="/contact">Contact</a></li>
    <li><a href="/jm">Founder</a></li>
    <li><a href="/mission">Mission</a></li>
    <li><a href="/departments">Departments</a></li>
    <li><a href="/departments/library">Library</a></li>
  </ul>

  <div style="display:flex;align-items:center;">
    <div class="nav-toggle" id="nav-toggle" aria-label="Toggle menu" role="button" tabindex="0">
      <span></span><span></span><span></span>
    </div>
    <button id="theme-toggle" title="Toggle theme">💻</button>
  </div>
</header>

<div class="hero">
  <h1>{h1}</h1>
  <p>Explore knowledge, courses, and community resources.</p>
</div>

<main id="main-content" role="main">
  <section aria-labelledby="subfolders-section">
    <h2 id="subfolders-section">Subfolders</h2>
    {subfolders_links}
  </section>
</main>

<footer>
  <p>© 2025 Malone University. Building the future, on our own terms.</p>
</footer>

<script>
(function() {{
  const root = document.documentElement;
  const toggleBtn = document.getElementById("theme-toggle");
  const navLinks = document.getElementById("nav-links");
  const navToggle = document.getElementById("nav-toggle");

  const saved = localStorage.getItem("theme-preference");
  if (saved) setTheme(saved);
  else setTheme("system");

  toggleBtn.addEventListener("click", () => {{
    const current = localStorage.getItem("theme-preference") || "system";
    const next = current === "system" ? "dark" :
                 current === "dark" ? "light" : "system";
    setTheme(next);
  }});

  function setTheme(mode) {{
    root.classList.remove("light", "dark");
    if (mode === "light") root.classList.add("light");
    else if (mode === "dark") root.classList.add("dark");
    localStorage.setItem("theme-preference", mode);
    toggleBtn.textContent = mode === "light" ? "☀️" :
                            mode === "dark" ? "🌙" : "💻";
  }}

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {{
    if(localStorage.getItem('theme-preference') === 'system') setTheme('system');
  }});

  navToggle.addEventListener("click", () => {{
    navLinks.classList.toggle("show");
  }});
  navToggle.addEventListener("keypress", (e) => {{
    if(e.key === "Enter" || e.key === " ") navLinks.classList.toggle("show");
  }});
}})();
</script>
</body>
</html>
"""

for root, dirs, files in os.walk(BASE_DIR):
    folder_name = os.path.basename(root).replace("-", " ").title()
    index_path = os.path.join(root, "index.html")

    # Generate HTML list of subfolders as links
    if dirs:
        links_html = "<ul>\n"
        for d in dirs:
            links_html += f'  <li><a href="{d}/index.html">{d.replace("-", " ").title()}</a></li>\n'
        links_html += "</ul>"
    else:
        links_html = "<p>No subfolders available.</p>"

    with open(index_path, "w", encoding="utf-8") as f:
        f.write(HTML_TEMPLATE.format(
            title=f"{folder_name} - Malone University",
            h1=folder_name,
            subfolders_links=links_html,
            css_path=CSS_PATH,
            favicon=FAVICON_PATH
        ))
    print(f"Created {index_path}")
