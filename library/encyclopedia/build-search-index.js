// build-search-index.js
// JSON → search.json

const fs = require("fs");
const path = require("path");

const CONTENT_DIR = path.join(__dirname, "content");
const OUTPUT_FILE = path.join(__dirname, "search.json");

if (!fs.existsSync(CONTENT_DIR)) {
  console.log("No content directory found.");
  process.exit(0);
}

const files = fs
  .readdirSync(CONTENT_DIR)
  .filter(f => f.endsWith(".json"));

const indexData = files.map(file => {
  const fullPath = path.join(CONTENT_DIR, file);
  const data = JSON.parse(fs.readFileSync(fullPath, "utf8"));

  return {
    id: data.id,
    title: data.title,
    domain: data.domain,
    tags: data.tags,
    summary: data.summary,
    url: data.output.url,
    content: (data.body || "").slice(0, 2000) // limit size
  };
});

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(indexData, null, 2), "utf8");

console.log(`✅ Search index built with ${indexData.length} entries`);
console.log(`📦 Output: ${OUTPUT_FILE}`);