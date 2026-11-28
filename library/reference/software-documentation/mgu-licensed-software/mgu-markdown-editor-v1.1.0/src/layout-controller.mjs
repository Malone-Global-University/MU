import {normalizeLayout,isSplit,togglePane,flipOrientation,pointerSplit,dividerKey,layoutShortcut} from './layout-state.mjs';
// UI state only. The editor, iframe, document state and their event listeners stay mounted.
export function createLayoutController({initial,onChange,onLayout,onResize,status,frame}){
  const $=id=>document.getElementById(id), ws=$('workspace'), sep=$('divider'), split=$('split');
  let prefs=normalizeLayout(initial), lastSplit=prefs.splitMode;
  let focus=false, full=null, pending=false, drag=null;
  const menus=[...document.querySelectorAll('.app-menu')];
  const mode=()=>full?.mode??prefs.viewMode;
  const closeMenus=()=>menus.forEach(m=>m.open=false);
  const both=()=>isSplit(mode());
  function syncDivider(){sep.setAttribute('aria-valuenow',split.value);sep.setAttribute('aria-orientation',mode()==='vertical'?'horizontal':'vertical');}
  function apply(){
    const m=mode();ws.dataset.view=m;
    $('source-pane').hidden=m==='preview';$('preview-pane').hidden=m==='source';sep.hidden=!isSplit(m);
    $('view-mode').value=m; $('chrome').hidden=!prefs.menusVisible||focus||!!full;
    $('toggle-chrome').textContent=$('chrome').hidden?'Show menus':'Hide menus';$('toggle-chrome').setAttribute('aria-expanded',String(!$('chrome').hidden));
    $('focus-mode').textContent=focus?'Exit focus':'Focus mode';$('focus-mode').setAttribute('aria-pressed',String(focus));
    $('fullscreen').textContent=full?'Exit full screen':'Full screen';$('fullscreen').setAttribute('aria-pressed',String(!!full));
    document.body.classList.toggle('workspace-focus',focus||!!full);
    for(const b of document.querySelectorAll('[data-pane-view]')){b.textContent=m===b.dataset.paneView?'Restore split':'Isolate';b.setAttribute('aria-pressed',String(m===b.dataset.paneView));}
    if($('chrome').hidden)closeMenus();syncDivider();onLayout(both());
  }
  function setMode(m){if(isSplit(m))lastSplit=m;if(full)full.mode=m;else prefs={...prefs,viewMode:m,splitMode:lastSplit};apply();if(!full)onChange();}
  function toggleMenus(){if(full){status('Exit full screen to show the application menus.');return;}if(focus){focus=false;prefs={...prefs,menusVisible:true};}else prefs={...prefs,menusVisible:!prefs.menusVisible};apply();onChange();}
  function toggleFocus(){if(full){status('Exit full screen to change focus mode.');return;}focus=!focus;apply();}
  function endFull(){if(!full)return;full=null;pending=false;lastSplit=prefs.splitMode;apply();}
  async function toggleFull(target){
    if(pending)return;
    if(full){if(document.fullscreenElement){try{await document.exitFullscreen();}catch(e){status(`Full screen: ${e.message}`);}}else endFull();return;}
    full={mode:target??mode()};apply();
    if(!document.documentElement.requestFullscreen){status('Browser fullscreen unavailable; expanded focus view enabled.');return;}
    pending=true;
    try{await document.documentElement.requestFullscreen();}catch(e){status('Browser fullscreen unavailable; expanded focus view enabled.');}finally{pending=false;}
  }
  document.addEventListener('fullscreenchange',()=>{if(!document.fullscreenElement)endFull();else onLayout(both());});
  $('toggle-chrome').addEventListener('click',toggleMenus);$('focus-mode').addEventListener('click',toggleFocus);$('fullscreen').addEventListener('click',()=>void toggleFull());
  $('view-mode').addEventListener('change',e=>setMode(e.target.value));
  for(const b of document.querySelectorAll('[data-pane-view]'))b.addEventListener('click',()=>setMode(togglePane(mode(),b.dataset.paneView,lastSplit)));
  for(const b of document.querySelectorAll('[data-pane-fullscreen]'))b.addEventListener('click',()=>void toggleFull(b.dataset.paneFullscreen));
  $('reset-workspace').addEventListener('click',()=>{prefs=normalizeLayout();lastSplit='horizontal';focus=false;split.value='50';onResize();apply();onChange();});
  function resize(value,commit=false){split.value=String(value);syncDivider();onResize();if(commit)onChange();}
  split.addEventListener('input',syncDivider);$('reset-split').addEventListener('click',syncDivider);
  sep.addEventListener('pointerdown',e=>{if(e.button!==0||!both())return;e.preventDefault();drag=e.pointerId;sep.setPointerCapture(drag);document.body.classList.add('resizing-workspace');});
  sep.addEventListener('pointermove',e=>{if(drag===e.pointerId)resize(pointerSplit(mode(),ws.getBoundingClientRect(),e.clientX,e.clientY));});
  function finish(e){if(drag!==e.pointerId)return;drag=null;document.body.classList.remove('resizing-workspace');onChange();}
  for(const name of ['pointerup','pointercancel','lostpointercapture'])sep.addEventListener(name,finish);
  sep.addEventListener('dblclick',()=>resize(50,true));sep.addEventListener('keydown',e=>{const v=dividerKey(mode(),e.key,Number(split.value));if(v!==null){e.preventDefault();resize(v,true);}});
  for(const m of menus)m.addEventListener('toggle',()=>{if(m.open)for(const other of menus)if(other!==m)other.open=false;});
  document.addEventListener('click',e=>{const m=e.target.closest('.app-menu');if(!m)closeMenus();else if(e.target.closest('button,a'))closeMenus();});
  function shortcut(e){
    if(document.querySelector('dialog[open]'))return;
    if(e.key==='Escape'){const open=menus.find(m=>m.open);if(open){e.preventDefault();closeMenus();open.querySelector('summary').focus();}else if(full&&!document.fullscreenElement){e.preventDefault();endFull();}else if(focus&&!full){e.preventDefault();focus=false;apply();}return;}
    const key=layoutShortcut(e);if(!key)return;e.preventDefault();
    if(key==='menus')toggleMenus();else if(key==='orientation')setMode(flipOrientation(mode(),lastSplit));else if(key==='both')setMode(lastSplit);else if(key==='fullscreen')void toggleFull();else setMode(key);
  }
  document.addEventListener('keydown',shortcut);frame.addEventListener('load',()=>frame.contentDocument?.addEventListener('keydown',shortcut));
  // Editing commands remain accessible; reveal source before operating on it.
  document.addEventListener('click',e=>{const b=e.target.closest('[data-format],[data-action]');if(mode()==='preview'&&b&&(b.hasAttribute('data-format')||['new','open','undo','redo','cut','paste','find','replace'].includes(b.dataset.action)))setMode('source');},true);
  $('heading').addEventListener('change',()=>{if(mode()==='preview')setMode('source');},true);
  apply();return {getPrefs:()=>({...prefs}),both};
}
