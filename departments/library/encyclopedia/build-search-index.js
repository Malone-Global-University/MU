const fs = require("fs");
const path = require("path");

// Paths
const volumesDir = path.join(__dirname, "volumes");
const outputFile = path.join(__dirname, "search.json");

// Helper to strip HTML tags
function stripHTML(html) {
  return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

// Read all HTML files in volumes folder
const files = fs.readdirSync(volumesDir).filter(file => file.endsWith(".html"));

let indexData = [];

files.forEach(file => {
  const filePath = path.join(volumesDir, file);
  const html = fs.readFileSync(filePath, "utf8");

  // Extract <title>
  const titleMatch = html.match(/<title>(.*?)<\/title>/i);
  const title = titleMatch ? titleMatch[1].replace("– MGU Encyclopedia", "").trim() : file.replace(".html", "");

  // Extract category from meta tag
  const categoryMatch = html.match(/<meta\s+name=["']category["']\s+content=["'](.*?)["']\s*\/?>/i);
  const category = categoryMatch ? categoryMatch[1] : "Uncategorized";

  // Extract body text
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  const content = bodyMatch ? stripHTML(bodyMatch[1]) : "";

  // Add entry
  indexData.push({
    title,
    category,
    url: `volumes/${file}`,
    content
  });
});

// Save JSON file
fs.writeFileSync(outputFile, JSON.stringify(indexData, null, 2), "utf8");

console.log(`✅ Search index built with ${indexData.length} entries at ${outputFile}`);
