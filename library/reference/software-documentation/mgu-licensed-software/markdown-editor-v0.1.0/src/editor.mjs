import { updatePreview } from './preview.mjs';
import { RENDERER_VERSION } from './renderer.mjs';
const source = document.querySelector('#source');
const frame = document.querySelector('#preview');
const status = document.querySelector('#status');
const stats = document.querySelector('#stats');
const workspace = document.querySelector('#workspace');
const split = document.querySelector('#split');
const manual = document.querySelector('#render-now');
let timer;
function render() {
  clearTimeout(timer);
  const result = updatePreview(frame, source.value);
  status.textContent = result.diagnostics.map(d => d.message).join(' ') || 'Preview up to date';
}
function measure() {
  const value = source.value;
  const words = value.trim() ? value.trim().split(/\s+/u).length : 0;
  stats.textContent = `${value.split('\n').length} lines · ${words} words · ${value.length} code units`;
}
source.addEventListener('input', () => {
  measure(); status.textContent = 'Updating preview…'; clearTimeout(timer); timer = setTimeout(render, 180);
});
manual.addEventListener('click', render);
split.addEventListener('input', () => workspace.style.setProperty('--split', `${split.value}%`));
document.querySelector('#reset-split').addEventListener('click', () => { split.value = '50'; workspace.style.setProperty('--split', '50%'); });
document.querySelector('#renderer-version').textContent = `Renderer ${RENDERER_VERSION}`;
measure(); render();
