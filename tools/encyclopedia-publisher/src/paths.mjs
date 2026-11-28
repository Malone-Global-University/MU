import fs from 'node:fs/promises';
import path from 'node:path';
import { requireCondition as check } from './errors.mjs';

export function relativeParts(value) {
  check(typeof value === 'string' && value.length > 0 && !/^[\\/]|:/.test(value), 'PATH_ESCAPE', 'Use a repository-relative path.');
  const parts = value.replaceAll('\\', '/').split('/');
  for (const p of parts) {
    check(p && p !== '.' && p !== '..' && !/[<>:"|?*\x00-\x1f]/.test(p) && !/[. ]$/.test(p) && !/^(con|prn|aux|nul|com[1-9¹²³]|lpt[1-9¹²³])(?:\.|$)/i.test(p), 'PATH_ESCAPE', `Invalid path segment: ${p}`);
  }
  return parts;
}
export function inside(root, candidate) {
  const rel = path.relative(root, candidate);
  return rel !== '' && rel !== '..' && !rel.startsWith('..'+path.sep) && !path.isAbsolute(rel);
}
// Inspect existing ancestors; reject symlinks/junctions and case aliases. Missing descendants are permitted only for output.
export async function checkedPath(root, relative, {missing = false} = {}) {
  const parts = relativeParts(relative);
  let current = root;
  for (let i=0; i<parts.length; i++) {
    const p = parts[i];
    const entries = await fs.readdir(current);
    const matches = entries.filter(n => n.toLowerCase() === p.toLowerCase());
    if (!matches.length) {
      check(missing, 'PATH_MISSING', `Path not found: ${relative}`);
      return path.join(current, ...parts.slice(i));
    }
    check(matches.length === 1 && matches[0] === p, 'OUTPUT_COLLISION', `Case collision or noncanonical casing: ${p}`);
    current = path.join(current, p);
    const st = await fs.lstat(current);
    check(!st.isSymbolicLink(), 'PATH_ESCAPE', `Symbolic link or junction not allowed: ${current}`);
    check(inside(root, await fs.realpath(current)), 'PATH_ESCAPE', `Path escapes repository: ${relative}`);
    if (i < parts.length-1) check(st.isDirectory(), 'PATH_ESCAPE', `Expected directory: ${current}`);
  }
  return current;
}
export function articlePaths(source, config) {
  const p = relativeParts(source);
  const base = relativeParts(config.sourceRoot);
  check(base.every((v,i)=>p[i]===v) && p.length>base.length, 'PATH_ESCAPE', 'Source must be beneath library/encyclopedia.');
  const local = p.slice(base.length);
  const name = local.at(-1);
  check(/^[a-z0-9]+(?:-[a-z0-9]+)*\.md$/.test(name) && !/^(index|readme|license|changelog|draft|template)\.md$/i.test(name), 'SOURCE_INELIGIBLE', 'Specify one lowercase kebab-case article .md (not index or documentation).');
  check(!local.slice(0,-1).some(v=>/^(?:markdown|content|drafts?|private|archive|archives|assets|data|tests?|templates?|node_modules|tools|docs|documentation|\..*)$/i.test(v)), 'SOURCE_INELIGIBLE', 'Source is in an excluded directory.');
  check(local.slice(0,-1).every(v=>/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(v)), 'SOURCE_INELIGIBLE', 'Subject directories must use lowercase kebab-case for this preview release.');
  const normalized = p.join('/');
  const outputPath = normalized.replace(/\.md$/, '.html');
  return {sourcePath: normalized, id: local.join('/').replace(/\.md$/, ''), outputPath,
    previewPath: `${config.previewRoot}/${outputPath}`, canonicalUrl: `${config.siteOrigin}/${outputPath.slice(0,-5)}`,
    classification: {area:'library', collection:'encyclopedia', path:local.slice(0,-1)}};
}
