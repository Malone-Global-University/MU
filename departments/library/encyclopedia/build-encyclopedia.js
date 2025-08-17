const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const { marked } = require("marked");

// ==== Paths ====
const rootDir = __dirname;                         // C:\mgu\encyclopedia
const mdDir = path.join(rootDir, "markdown");      // where .md live
const volumesDir = path.join(rootDir, "volumes");  // where .html are written
const searchJson = path.join(rootDir, "search.json");

// ==== Helpers ====
function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

function slugify(s) {
  return String(s || "")
    .toLowerCase()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function stripHTML(html) {
  return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

// ==== Step 1: Convert markdown -> HTML ====
ensureDir(volumesDir);
let convertedCount = 0;

if (fs.existsSync(mdDir)) {
  const mdFiles = fs.readdirSync(mdDir).filter(f => f.toLowerCase().endsWith(".md"));

  mdFiles.forEach(file => {
    const src = path.join(mdDir, file);
    const raw = fs.readFileSync(src, "utf8");
    const { data, content } = matter(raw);

    const title = data.title || path.basename(file, ".md");
    const category = data.category || "Uncategorized";
    const categorySlug = slugify(category);
    const htmlBody = marked.parse(content);

    const page = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${title} – MGU Encyclopedia</title>
  <meta name="category" content="${category}">
  <link rel="stylesheet" href="/style.css">
</head>
<body>
  <header>
    <h1>${title}</h1>
    <p><strong>Category:</strong> ${category}</p>
    <nav>
      <a href="../index.html">Back to Encyclopedia</a> |
      <a href="../categories/${categorySlug}.html">${category}</a>
    </nav>
  </header>

  ${htmlBody}
</body>
</html>`;

    const out = path.join(volumesDir, file.replace(/\.md$/i, ".html"));
    fs.writeFileSync(out, page, "utf8");
    convertedCount++;
  });
} else {
  // Optional: create the folder so it exists for future writes
  ensureDir(mdDir);
}

// ==== Step 2: Build deep search index from ALL volumes/*.html ====
const files = fs.existsSync(volumesDir)
  ? fs.readdirSync(volumesDir).filter(f => f.toLowerCase().endsWith(".html"))
  : [];

const indexData = files.map(file => {
  const html = fs.readFileSync(path.join(volumesDir, file), "utf8");

  const titleMatch = html.match(/<title>(.*?)<\/title>/i);
  const title = titleMatch ? titleMatch[1].replace("– MGU Encyclopedia", "").trim()
                           : file.replace(/\.html$/i, "");

  const categoryMatch = html.match(/<meta\s+name=["']category["']\s+content=["'](.*?)["'][^>]*>/i);
  const category = categoryMatch ? categoryMatch[1] : "Uncategorized";

  const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  const content = bodyMatch ? stripHTML(bodyMatch[1]) : "";

  return {
    title,
    category,
    url: `volumes/${file}`,
    content
  };
});

fs.writeFileSync(searchJson, JSON.stringify(indexData, null, 2), "utf8");

// ==== Logs ====
console.log(`✅ Converted ${convertedCount} Markdown file(s) to HTML.`);
console.log(`✅ Search index built with ${indexData.length} entr${indexData.length === 1 ? "y" : "ies"} at ${searchJson}`);
