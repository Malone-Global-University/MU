import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {requireCondition as check} from './errors.mjs';
import {checkedPath} from './paths.mjs';
export const projectRoot = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
export const sha256 = bytes => createHash('sha256').update(bytes).digest('hex').toUpperCase();
export async function loadConfig() {
  const root = await fs.realpath(path.resolve(projectRoot,'../..'));
  const c = JSON.parse(await fs.readFile(path.join(projectRoot,'config.json'),'utf8'));
  check(c.schemaVersion===1 && c.publicationMode==='preview' && c.sourceRoot==='library/encyclopedia' && c.previewRoot==='.mgu-build/encyclopedia/preview' && c.rendererPath==='component/mgu-markdown-renderer.mjs' && c.siteOrigin==='https://maloneuniversity.org' && c.rendererName==='mgu-website-markdown-renderer' && c.rendererVersion==='1.0.0', 'CONFIG_INVALID', 'Unsupported config or renderer identity. v0.1.0 is preview-only.');
  await checkedPath(root,c.sourceRoot);
  await checkedPath(root,c.previewRoot,{missing:true});
  return {...c,root};
}
export async function verifyRenderer(c) {
  const renderer = await checkedPath(c.root,c.rendererPath);
  check((await fs.stat(renderer)).isFile(), 'RENDERER_MISMATCH', 'Central MGU website renderer is not a file.');
  return renderer;
}
