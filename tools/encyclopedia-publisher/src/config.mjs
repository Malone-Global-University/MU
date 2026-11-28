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
  check(c.schemaVersion===1 && c.publicationMode==='preview' && c.sourceRoot==='library/encyclopedia' && c.previewRoot==='.mgu-build/encyclopedia/preview' && c.rendererPath==='component/renderer.mjs' && c.siteOrigin==='https://maloneuniversity.org' && c.rendererVersion==='1.1.0' && c.rendererSha256==='AE162B0FBB4DE7791CF9AFE05F60A3D1948E968B60743E8E458B40D0D1D93CA6', 'CONFIG_INVALID', 'Unsupported config or renderer identity. v0.1.0 is preview-only.');
  await checkedPath(root,c.sourceRoot);
  await checkedPath(root,c.previewRoot,{missing:true});
  return {...c,root};
}
export async function verifyRenderer(c) {
  const renderer = await checkedPath(c.root,c.rendererPath);
  const bytes = await fs.readFile(renderer);
  check(bytes.length===385726 && sha256(bytes)===c.rendererSha256,'RENDERER_MISMATCH','Install the exact tested v1.1.0 production bundle, not src/renderer.mjs. Check SHA-256 and LF/CRLF conversion.');
  const notices = await checkedPath(c.root,'component/renderer-THIRD-PARTY-NOTICES.txt');
  check((await fs.stat(notices)).size>0,'RENDERER_NOTICES','Renderer licensing notices missing or empty.');
  return renderer;
}
