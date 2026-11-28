import {exportHTML,RENDERER_VERSION} from '../public/renderer.mjs';
const source=document.querySelector('#source'),preview=document.querySelector('#preview'),status=document.querySelector('#status');
function render(){const r=exportHTML(source.value,{preset:'academic',title:'Standalone example'});preview.srcdoc=r.valid?r.html:'<!doctype html><p>Preview unavailable.</p>';status.textContent=r.diagnostics.map(d=>d.message).join(' ')||`Renderer ${RENDERER_VERSION} — complete`;}
document.querySelector('#run').addEventListener('click',render);render();
