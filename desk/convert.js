// convert.js
const fs = require("fs");
const path = require("path");
const { unified } = require("unified");
const remarkParse = require("remark-parse");
const remarkGfm = require("remark-gfm");
const remarkRehype = require("remark-rehype");
const rehypeStringify = require("rehype-stringify");

async function convertFile(srcPath, outPath, id) {
  const md = fs.readFileSync(srcPath, "utf8");
  const vfile = await unified()
    .use(remarkParse)
    .use(remarkGfm)               // GitHub Flavored Markdown (tables, task lists, etc.)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(md);

  const html = `<section id="${id}">\n${String(vfile)}\n</section>\n`;
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, html, "utf8");
}

(async () => {
  const lessonDir = "lessons";
  const outDir = "public";

  // recursive file walker
  function walk(dir) {
    return fs.readdirSync(dir, { withFileTypes: true }).flatMap(ent => {
      const p = path.join(dir, ent.name);
      return ent.isDirectory() ? walk(p) : p;
    });
  }

  for (const file of walk(lessonDir)) {
    if (!file.endsWith(".md")) continue;
    const rel = path.relative(lessonDir, file);
    const outPath = path.join(outDir, rel.replace(/\.md$/, ".html"));
    const id = path.basename(file, ".md");
    await convertFile(file, outPath, id);
    console.log("Wrote", outPath);
  }
})();
