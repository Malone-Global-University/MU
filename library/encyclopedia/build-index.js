// build-indexes.js
// Generates encyclopedia homepage (index.html) + category pages

const fs = require('fs');
const path = require('path');

const VOLUMES_DIR = path.join(__dirname, 'volumes');
const CATEGORIES_DIR = path.join(__dirname, 'categories');
const INDEX_FILE = path.join(__dirname, 'index.html');

// Ensure categories dir exists
if (!fs.existsSync(CATEGORIES_DIR)) {
  fs.mkdirSync(CATEGORIES_DIR);
}

// Load all HTML files in volumes
const files = fs.readdirSync(VOLUMES_DIR).filter(f => f.endsWith('.html'));

// Parse metadata from HTML <meta> tags
function parseMeta(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');

  const titleMatch = content.match(/<title>(.*?)<\/title>/);
  const title = titleMatch ? titleMatch[1] : path.basename(filePath, '.html');

  const categoryMatch = content.match(/<meta name="category" content="(.*?)">/);
  const category = categoryMatch ? categoryMatch[1] : 'Uncategorized';

  return { title, category };
}

// Collect entries
const entries = files.map(file => {
  const filePath = path.join(VOLUMES_DIR, file);
  const { title, category } = parseMeta(filePath);
  return { title, category, file };
});

// --- Build index.html ---
let indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>MGU Encyclopedia Index</title>
  <link rel="stylesheet" href="../css/style.css">
</head>
<body>
  <h1>MGU Encyclopedia</h1>
  <ul>
`;

entries.sort((a, b) => a.title.localeCompare(b.title)).forEach(entry => {
  indexHtml += `    <li><a href="volumes/${entry.file}">${entry.title}</a> (${entry.category})</li>\n`;
});

indexHtml += `  </ul>
</body>
</html>`;

fs.writeFileSync(INDEX_FILE, indexHtml, 'utf-8');
console.log(`✅ Encyclopedia index built at ${INDEX_FILE}`);

// --- Build category pages ---
const categories = {};
entries.forEach(entry => {
  if (!categories[entry.category]) categories[entry.category] = [];
  categories[entry.category].push(entry);
});

for (const [category, items] of Object.entries(categories)) {
  let catHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${category} | MGU Encyclopedia</title>
  <link rel="stylesheet" href="../css/style.css">
</head>
<body>
  <h1>${category}</h1>
  <ul>
`;

  items.sort((a, b) => a.title.localeCompare(b.title)).forEach(entry => {
    catHtml += `    <li><a href="../volumes/${entry.file}">${entry.title}</a></li>\n`;
  });

  catHtml += `  </ul>
  <p><a href="../index.html">← Back to Encyclopedia Index</a></p>
</body>
</html>`;

  const catFile = path.join(CATEGORIES_DIR, `${category}.html`);
  fs.writeFileSync(catFile, catHtml, 'utf-8');
  console.log(`✅ Category page built: ${catFile}`);
}
