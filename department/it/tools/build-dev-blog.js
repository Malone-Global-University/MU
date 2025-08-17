const fs = require("fs");
const path = require("path");
const { marked } = require("marked");

// ==== Paths ====
const journalPath = path.join(__dirname, "MGU-DOCS", "journal.md");
const blogDir = path.join(__dirname, "dev-blog");

// ==== Ensure blog dir exists ====
if (!fs.existsSync(blogDir)) {
  fs.mkdirSync(blogDir);
}

// ==== Read Journal ====
const journalContent = fs.readFileSync(journalPath, "utf-8");

// ==== Split Entries ====
// Every entry starts with "##"
const entries = journalContent.split(/^##/m).filter(Boolean);

// ==== Generate HTML Files ====
entries.forEach((entry, i) => {
  const entryContent = "##" + entry.trim();
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>MGU Dev Blog - Entry ${i + 1}</title>
  <link rel="stylesheet" href="../css/style.css" />
</head>
<body>
  <main class="blog-post">
    ${marked.parse(entryContent)}
  </main>
</body>
</html>
  `;

  const filename = `entry-${i + 1}.html`;
  fs.writeFileSync(path.join(blogDir, filename), html);
  console.log(`✅ Generated ${filename}`);
});

// ==== Create Blog Index ====
let indexHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>MGU Dev Blog</title>
  <link rel="stylesheet" href="../css/style.css" />
</head>
<body>
  <h1>Development Blog</h1>
  <ul>
`;

entries.forEach((entry, i) => {
  const title = entry.split("\n")[0].trim();
  indexHTML += `<li><a href="entry-${i + 1}.html">${title}</a></li>\n`;
});

indexHTML += `
  </ul>
</body>
</html>
`;

fs.writeFileSync(path.join(blogDir, "index.html"), indexHTML);
console.log("✅ Generated blog index");