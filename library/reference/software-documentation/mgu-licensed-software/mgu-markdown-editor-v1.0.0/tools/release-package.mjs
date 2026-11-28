import {createHash} from 'node:crypto';
import {readFileSync,writeFileSync,mkdirSync,readdirSync,statSync,copyFileSync,existsSync} from 'node:fs';
import {join,dirname,relative,resolve} from 'node:path';
export const RELEASE_VERSION='1.0.0';
export const STATIC_FILES=['index.html','help.html','public/bootstrap.mjs','public/editor.css','public/editor.js','public/renderer.mjs','examples/index.html','examples/browser-example.mjs','smoke-test.md','THIRD-PARTY-NOTICES.txt'];
export function sha256(bytes){return createHash('sha256').update(bytes).digest('hex');}
export function createDistribution(root,bundleDir,out,notices){
  mkdirSync(out,{recursive:false});
  for(const file of STATIC_FILES){
    const to=join(out,file);mkdirSync(dirname(to),{recursive:true});
    if(file==='THIRD-PARTY-NOTICES.txt')writeFileSync(to,notices,'utf8');
    else copyFileSync(join(['public/editor.js','public/renderer.mjs'].includes(file)?bundleDir:root,file),to);
  }
  const files=Object.fromEntries([...STATIC_FILES].sort().map(file=>[file,sha256(readFileSync(join(out,file)))]));
  const manifest={name:'MGU Markdown Editor',version:RELEASE_VERSION,algorithm:'SHA-256',files};
  writeFileSync(join(out,'release-manifest.json'),JSON.stringify(manifest,null,2)+'\n');
  verifyDistribution(out);return manifest;
}
export function verifyDistribution(out){
  const m=JSON.parse(readFileSync(join(out,'release-manifest.json'),'utf8'));
  if(m.version!==RELEASE_VERSION||m.algorithm!=='SHA-256'||!m.files||Object.keys(m.files).sort().join('|')!==[...STATIC_FILES].sort().join('|'))throw new Error('Invalid distribution manifest.');
  for(const file of STATIC_FILES){if(sha256(readFileSync(join(out,file)))!==m.files[file])throw new Error(`Distribution checksum mismatch: ${file}`);}
  const actual=[];function scan(dir){for(const entry of readdirSync(dir,{withFileTypes:true})){const p=join(dir,entry.name);if(entry.isDirectory())scan(p);else if(entry.isFile())actual.push(relative(out,p).replaceAll('\\','/'));else throw new Error('Unexpected distribution entry.');}}scan(out);
  if(actual.sort().join('|')!==[...STATIC_FILES,'release-manifest.json'].sort().join('|'))throw new Error('Unexpected distribution files.');return m;
}
// Preserve installed package license and notice texts for packages actually bundled.
export function collectNotices(root,inputs){
  const packages=new Map();
  for(const input of inputs){let dir=dirname(resolve(root,input));if(!dir.split(/[\\/]/).includes('node_modules'))continue;
    while(dir!==dirname(dir)){
      const p=join(dir,'package.json');if(existsSync(p)){
        const meta=JSON.parse(readFileSync(p,'utf8'));if(meta.name&&meta.version){packages.set(`${meta.name}@${meta.version}`,{dir,meta});break;}
      }dir=dirname(dir);
    }
  }
  const blocks=['MGU Markdown Editor v1.0.0 — bundled third-party package notices','Generated from installed dependencies. This does not set the license for MGU-authored code. Review any missing notices before public redistribution.'];
  for(const [key,{dir,meta}] of [...packages].sort(([a],[b])=>a.localeCompare(b))){
    const files=readdirSync(dir).filter(n=>/^(?:licen[cs]e|copying|notice)(?:[._-].*|)$/i.test(n)&&statSync(join(dir,n)).isFile());
    blocks.push(`\n${key}\nDeclared license: ${typeof meta.license==='string'?meta.license:JSON.stringify(meta.license??'not specified')}\n${files.length?files.map(n=>`${n}\n${readFileSync(join(dir,n),'utf8')}`).join('\n\n'):'NOTICE: No root license text located; publisher review required.'}`);
  }
  return blocks.join('\n\n')+'\n';
}
