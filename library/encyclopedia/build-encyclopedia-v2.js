// build-encyclopedia.js
// Converts Markdown -> HTML, builds search index, homepage, and categories

const fs = require("fs");
const path = require("path");
const marked = require("marked");

const MARKDOWN_DIR = path.join(__dirname, "markdown");
const VOLUMES_DIR = path.join(__dirname, "volumes");
const CATEGORIES_DIR = path.join(__dirname, "categories");
const INDEX_FILE = path.join(__dirname, "index.html");
const SEARCH_INDEX = path.join(__dirname, "search.json");

// Ensure output dirs exist
if (!fs.existsSync(VOLUMES_DIR)) fs.mkdirSync(VOLUMES_DIR);
if (!fs.existsSync(CATEGORIES_DIR)) fs.mkdirSync(CATEGORIES_DIR);

// --- Parse frontmatter (YAML style at top of file) ---
function parseFrontmatter(content) {
  let meta = {};
  if (content.startsWith("---")) {
    const end = content.indexOf("---", 3);
    if (end !== -1) {
      const rawMeta = content.slice(3, end).trim();
      rawMeta.split("\n").forEach(line => {
        const [key, ...rest] = line.split(":");
        if (key && rest.length > 0) {
          meta[key.trim()] = rest.join(":").trim();
        }
      });
      content = content.slice(end + 3).trim();
    }
  }
  return { meta, content };
}

// --- Convert Markdown to HTML ---
function convertMarkdown(filePath) {
  const md = fs.readFileSync(filePath, "utf-8");
  const { meta, content } = parseFrontmatter(md);

  const htmlContent = marked.parse(content);
  const title = meta.title || path.basename(filePath, ".md");
  const category = meta.category || "Uncategorized";

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${title} | MGU Encyclopedia</title>
  <meta name="category" content="${category}">
  <link rel="stylesheet" href="../css/style.css">
</head>
<body>
  <h1>${title}</h1>
  ${htmlContent}
  <p><a href="../index.html">← Back to Encyclopedia Index</a></p>
</body>
</html>`;

  return { html, title, category };
}

// --- Main process ---
const files = fs.readdirSync(MARKDOWN_DIR).filter(f => f.endsWith(".md"));

let entries = [];

files.forEach(file => {
  const filePath = path.join(MARKDOWN_DIR, file);
  const { html, title, category } = convertMarkdown(filePath);

  const outFile = file.replace(".md", ".html");
  const outPath = path.join(VOLUMES_DIR, outFile);
  fs.writeFileSync(outPath, html, "utf-8");

  entries.push({ title, category, file: outFile });
});

console.log(`✅ Converted ${entries.length} Markdown file(s) to HTML.`);

// --- Build search.json ---
fs.writeFileSync(SEARCH_INDEX, JSON.stringify(entries, null, 2), "utf-8");
console.log(`✅ Search index built with ${entries.length} entries at ${SEARCH_INDEX}`);

// --- Build index.html ---
let indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>MGU Encyclopedia Index</title>
  <link rel="stylesheet" href="css/style.css">
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

fs.writeFileSync(INDEX_FILE, indexHtml, "utf-8");
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
  fs.writeFileSync(catFile, catHtml, "utf-8");
  console.log(`✅ Category page built: ${catFile}`);
}