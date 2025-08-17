const fs = require('fs');
const path = require('path');

// Get lesson name from command line argument
const lessonName = process.argv[2];

if (!lessonName) {
  console.error("Usage: node generate-lesson-page.js <lesson-name>");
  process.exit(1);
}

// Paths
const lessonDir = path.join(__dirname, 'components', lessonName);
const lessonHtmlPath = path.join(__dirname, `${lessonName}.html`);

// --- Step 1: Create lesson components folder ---
if (!fs.existsSync(lessonDir)) {
  fs.mkdirSync(lessonDir, { recursive: true });
  console.log(`Created folder: ${lessonDir}`);
}

// --- Step 2: Create lesson component files ---
const templates = {
  'intro.html': `<section id="introduction">
  <h2>Introduction</h2>
  <p>Introduction content for ${lessonName} goes here.</p>
</section>`,

  'key-concepts.html': `<section id="key-concepts">
  <h2>Key Concepts</h2>
  <article>
    <h3>Concept 1</h3>
    <p>Description of concept 1.</p>
  </article>
</section>`,

  'diagrams.html': `<section id="diagrams">
  <h2>Visual Diagrams</h2>
  <p>Placeholder for diagrams.</p>
</section>`,

  'exercises.html': `<section id="exercises">
  <h2>Exercises</h2>
  <article>
    <h3>Exercise 1</h3>
    <p>Exercise description here.</p>
  </article>
</section>`,

  'summary.html': `<section id="summary">
  <h2>Summary</h2>
  <p>Summary points for ${lessonName}.</p>
</section>`
};

for (const [fileName, content] of Object.entries(templates)) {
  const filePath = path.join(lessonDir, fileName);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Created: ${filePath}`);
  }
}

// --- Step 3: Create skeleton lesson HTML page ---
if (!fs.existsSync(lessonHtmlPath)) {
  const lessonHtmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${lessonName.replace(/-/g,' ')} | Malone University</title>
  <link rel="stylesheet" href="components/css/theme.css">
</head>
<body>

  <!-- Navbar / Hero -->
  <div id="navbar-placeholder"></div>
  <div id="hero-placeholder"></div>

  <main>
    <div id="lesson-intro"></div>
    <div id="lesson-key-concepts"></div>
    <div id="lesson-diagrams"></div>
    <div id="lesson-exercises"></div>
    <div id="lesson-summary"></div>
  </main>

  <!-- Footer -->
  <div id="footer-placeholder"></div>

  <!-- Theme toggle -->
  <script src="components/js/theme-toggle.js"></script>

  <!-- Load components -->
  <script>
    async function loadComponent(id, path) {
      const res = await fetch(path);
      const html = await res.text();
      document.getElementById(id).innerHTML = html;
    }

    // Core components
    loadComponent('navbar-placeholder', 'components/navbar.html');
    loadComponent('hero-placeholder', 'components/hero.html');
    loadComponent('footer-placeholder', 'components/footer.html');

    // Lesson components
    loadComponent('lesson-intro', 'components/${lessonName}/intro.html');
    loadComponent('lesson-key-concepts', 'components/${lessonName}/key-concepts.html');
    loadComponent('lesson-diagrams', 'components/${lessonName}/diagrams.html');
    loadComponent('lesson-exercises', 'components/${lessonName}/exercises.html');
    loadComponent('lesson-summary', 'components/${lessonName}/summary.html');
  </script>

</body>
</html>
`;

  fs.writeFileSync(lessonHtmlPath, lessonHtmlContent, 'utf8');
  console.log(`Created lesson page: ${lessonHtmlPath}`);
} else {
  console.log(`Lesson page already exists: ${lessonHtmlPath}`);
}

console.log(`Lesson scaffolding and page for '${lessonName}' is complete.`);
