import fs from "fs";
import path from "path";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

const lessonDir = "lessons";
const outDir = "public";

async function convertFile(srcPath, outPath, id) {
  const md = fs.readFileSync(srcPath, "utf8");

  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(md);

  const html = `<section id="${id}">\n${String(file)}\n</section>`;
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, html, "utf8");
}

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(ent => {
    const p = path.join(dir, ent.name);
    return ent.isDirectory() ? walk(p) : p;
  });
}

(async () => {
  for (const file of walk(lessonDir)) {
    if (!file.endsWith(".md")) continue;
    const rel = path.relative(lessonDir, file);
    const outPath = path.join(outDir, rel.replace(/\.md$/, ".html"));
    const id = path.basename(file, ".md");
    await convertFile(file, outPath, id);
    console.log("✅ Wrote", outPath);
  }
})();
