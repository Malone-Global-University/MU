import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {join} from 'node:path';
import {readdirSync,mkdtempSync,mkdirSync,copyFileSync,renameSync,existsSync,rmSync} from 'node:fs';
import {createDistribution,collectNotices} from './release-package.mjs';
const root=fileURLToPath(new URL('../',import.meta.url));
let stage;
function run(args){const r=spawnSync(process.execPath,args,{cwd:root,stdio:'inherit'});if(r.error)throw r.error;if(r.status!==0)throw new Error(`Command failed: node ${args.join(' ')}`);}
try{
  const tests=readdirSync(join(root,'tests')).filter(n=>n.endsWith('.test.mjs')).sort().map(n=>join(root,'tests',n));
  run(['--test',...tests]);
  if(!process.argv.includes('--test-only')){
    const {build}=await import('esbuild');
    stage=mkdtempSync(join(root,'.release-stage-'));mkdirSync(join(stage,'public'));
    const common={absWorkingDir:root,bundle:true,platform:'browser',format:'esm',target:'es2022',minify:true,legalComments:'eof',metafile:true};
    const editor=await build({...common,entryPoints:['src/editor.mjs'],outfile:join(stage,'public/editor.js')});
    const renderer=await build({...common,entryPoints:['src/renderer-entry.mjs'],outfile:join(stage,'public/renderer.mjs')});
    run([join(root,'examples/verify-bundle.mjs'),join(stage,'public/renderer.mjs')]);
    const inputs=[...new Set([...Object.keys(editor.metafile.inputs),...Object.keys(renderer.metafile.inputs)])];
    const notices=collectNotices(root,inputs);
    const dist=join(root,'dist'),next=join(stage,'dist');
    createDistribution(root,stage,next,notices);
    // Preserve the prior distribution, including any operator-added files, rather than deleting it.
    if(existsSync(dist)){const archive=mkdtempSync(join(root,'previous-dist-'));renameSync(dist,join(archive,'dist'));console.log(`Previous distribution retained: ${archive}`);}
    renameSync(next,dist);
    for(const f of ['editor.js','renderer.mjs'])copyFileSync(join(stage,'public',f),join(root,'public',f));
    console.log('Build complete: public/editor.js, public/renderer.mjs and verified dist/');
  }
}catch(error){console.error(error.message);process.exitCode=1;}
finally{if(stage)rmSync(stage,{recursive:true,force:true});}
