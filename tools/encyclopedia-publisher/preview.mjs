import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import {loadConfig} from './src/config.mjs';
import {articlePaths,checkedPath} from './src/paths.mjs';
import {verifyOwned} from './src/output.mjs';
const mime={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.mjs':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.svg':'image/svg+xml','.ico':'image/x-icon','.webp':'image/webp','.gif':'image/gif','.woff':'font/woff','.woff2':'font/woff2','.ttf':'font/ttf','.otf':'font/otf'};
try{
  const args=process.argv.slice(2);
  if(args.length!==2||args[0]!=='--source')throw new Error('Usage: node tools/encyclopedia-publisher/preview.mjs --source library/encyclopedia/path/article.md');
  const c=await loadConfig();const record=articlePaths(args[1],c);
  const article=await checkedPath(c.root,record.previewPath);verifyOwned(await fs.readFile(article,'utf8'),record.sourcePath);
  const route='/'+record.outputPath;
  const server=http.createServer(async(req,res)=>{
    try{
      if(!['GET','HEAD'].includes(req.method)){res.writeHead(405);res.end();return;}
      const url=new URL(req.url,'http://127.0.0.1:4173');const p=decodeURIComponent(url.pathname);
      if(p==='/'){res.writeHead(302,{Location:route});res.end();return;}
      let file;
      if(p===route||p===route.slice(0,-5))file=await checkedPath(c.root,record.previewPath);
      else if(/^\/(component|image|font|fonts)\//.test(p)&&Object.hasOwn(mime,path.extname(p).toLowerCase()))file=await checkedPath(c.root,p.slice(1));
      else throw new Error('Not served by preview');
      const stat=await fs.stat(file);if(!stat.isFile()||stat.size>30_000_000)throw new Error('Not a preview asset');
      const bytes=await fs.readFile(file);
      res.writeHead(200,{'Content-Type':mime[path.extname(file).toLowerCase()]??'application/octet-stream','Content-Length':bytes.length,'Cache-Control':'no-store','X-Content-Type-Options':'nosniff','X-Robots-Tag':'noindex, nofollow'});
      res.end(req.method==='HEAD'?undefined:bytes);
    }catch{res.writeHead(404,{'Content-Type':'text/plain; charset=utf-8'});res.end('Not available in single-article preview.');}
  });
  server.on('error',e=>{console.error(`Preview server: ${e.message}`);process.exitCode=1;});
  server.listen(4173,'127.0.0.1',()=>console.log(`MEPS preview: http://127.0.0.1:4173${route}\nLoopback only. Ctrl+C to stop. Other article routes are not served.`));
}catch(e){console.error(e.message);process.exitCode=1;}
