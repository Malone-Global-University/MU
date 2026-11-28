import {fileURLToPath} from 'node:url';
import {resolve} from 'node:path';
import {verifyDistribution} from './release-package.mjs';
try{const m=verifyDistribution(process.argv[2]?resolve(process.argv[2]):fileURLToPath(new URL('../dist/',import.meta.url)));console.log(`Verified ${Object.keys(m.files).length} files for MGU Markdown Editor ${m.version}.`);}catch(error){console.error(error.message);process.exitCode=1;}
