// build-index.js
// JSON → index.html + domain pages

const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const CONTENT_DIR = path.join(ROOT, "content");
const INDEX_FILE = path.join(ROOT, "index.html");

if (!fs.existsSync(CONTENT_DIR)) {
  console.log("No content directory found.");
  process.exit(0);
}

const files = fs
  .readdirSync(CONTENT_DIR)
  .filter(f => f.endsWith(".json"));

const entries = files.map(file => {
  const data = JSON.parse(
    fs.readFileSync(path.join(CONTENT_DIR, file), "utf8")
  );

  return {
    title: data.title,
    domain: data.domain,
    url: data.output.url,
    summary: data.summary
  };
});


// ======================
// GROUP BY DOMAIN
// ======================

const domains = {};

entries.forEach(entry => {
  if (!domains[entry.domain]) {
    domains[entry.domain] = [];
  }
  domains[entry.domain].push(entry);
});


// ======================
// BUILD MAIN INDEX
// ======================

let indexHtml = `<!DOCTYPE html>
<html>
<head>
  <title>Encyclopedia</title>
  <link rel="stylesheet" href="/component/css/main.css">
</head>
<body>

<h1>Encyclopedia</h1>

<ul>
`;

Object.keys(domains).sort().forEach(domain => {
  indexHtml += `<li><a href="./${domain}/index.html">${domain}</a></li>\n`;
});

indexHtml += `
</ul>

</body>
</html>`;

fs.writeFileSync(INDEX_FILE, indexHtml, "utf8");

console.log("✅ Main index built");


// ======================
// BUILD DOMAIN PAGES
// ======================

Object.entries(domains).forEach(([domain, items]) => {
  const dir = path.join(ROOT, domain);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  let html = `<!DOCTYPE html>
<html>
<head>
  <title>${domain} | Encyclopedia</title>
  <link rel="stylesheet" href="/component/css/main.css">
</head>
<body>

<h1>${domain}</h1>

<ul>
`;

  items
    .sort((a, b) => a.title.localeCompare(b.title))
    .forEach(entry => {
      html += `<li>
        <a href="/${entry.domain}/${entry.url.split("/").pop()}">
          ${entry.title}
        </a>
        <p>${entry.summary}</p>
      </li>\n`;
    });

  html += `
</ul>

<a href="/library/encyclopedia/index.html">Back</a>

</body>
</html>`;

  fs.writeFileSync(path.join(dir, "index.html"), html, "utf8");

  console.log(`✅ Built domain page: ${domain}`);
});