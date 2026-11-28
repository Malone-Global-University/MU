import fs from 'node:fs/promises';
import path from 'node:path';
import {checkedPath, articlePaths} from './paths.mjs';
import {sha256} from './config.mjs';
import {BuildError, requireCondition as check} from './errors.mjs';
export function decodeUTF8(bytes) {
  try { return new TextDecoder('utf-8',{fatal:true}).decode(bytes); }
  catch { throw new BuildError('INVALID_UTF8','Source must be valid UTF-8.'); }
}
export async function discover(source,c) {
  const record = articlePaths(source,c);
  const absolute = await checkedPath(c.root,record.sourcePath);
  const st = await fs.stat(absolute);
  check(st.isFile() && st.size<=900000,'SOURCE_LIMIT','Source must be a regular file no larger than 900,000 bytes.');
  // A directory with the article stem would conflict with its public route.
  const stem = path.basename(absolute,'.md').toLowerCase();
  const siblings = await fs.readdir(path.dirname(absolute),{withFileTypes:true});
  check(!siblings.some(d=>d.name.toLowerCase()===stem),'OUTPUT_COLLISION','Article route conflicts with a sibling path.');
  const bytes = await fs.readFile(absolute);
  return {...record, absolute, sourceHash:sha256(bytes), text:decodeUTF8(bytes)};
}
