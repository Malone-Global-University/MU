import {WorkspaceStore,STORAGE_KEY,activeSnapshot,normalizePreferences,addDraft,addRecent,removeCopy,pauseAutosave,clearCopies} from './workspace-storage.mjs';
const now=()=>new Date().toISOString();
const id=()=>globalThis.crypto?.randomUUID?.()??`${Date.now()}-${Math.random().toString(36).slice(2)}`;
export function createWorkspaceController({getSnapshot,getPrefs,openCopy,isBusy,status}){
  const $=id=>document.getElementById(id);
  let storage;try{storage=window.localStorage;}catch{}
  const store=new WorkspaceStore(storage),initial=store.record;let timer,conflict=false;
  const badge=message=>{$('local-status').textContent=message;};
  $('autosave').checked=initial.autosave;
  function report(error){badge(`Local storage: ${error.message}`);}
  function commit(transform=x=>x,{capture=true,resetDamaged=false}={}){
    if(capture){clearTimeout(timer);timer=undefined;}
    try{
      if(conflict)throw new Error('Another tab changed local data. Save to disk and reload.');
      let candidate=transform({...store.record,prefs:normalizePreferences(getPrefs())});
      if(capture&&candidate.autosave)candidate={...candidate,active:activeSnapshot(...getSnapshot(),now())};
      const result=store.write(candidate,{resetDamaged});
      $('autosave').checked=result.autosave;if(!result.autosave){clearTimeout(timer);timer=undefined;}
      badge(result.autosave?(capture?'Local recovery saved · not a disk save':'Local copies updated · recovery not refreshed'):'Local autosave off');
      return true;
    }catch(e){report(e);return false;}
  }
  function schedule(){clearTimeout(timer);timer=undefined;if(!$('autosave').checked||conflict)return;badge('Local recovery pending…');timer=setTimeout(()=>commit(),450);}
  function prefsChanged(){commit();}
  function recent(doc){if(!$('autosave').checked)return commit();try{const entry={id:id(),name:doc.name,source:doc.source,at:now()};return commit(r=>addRecent(r,entry));}catch(e){report(e);return false;}}
  function fillList(){const list=$('local-list');list.replaceChildren();for(const [kind,label] of [['drafts','Kept drafts'],['recent','Recent opened/saved copies']]){const h=document.createElement('h3');h.textContent=label;list.append(h);if(!store.record[kind].length){const p=document.createElement('p');p.textContent='No local copies.';list.append(p);}for(const entry of store.record[kind]){const row=document.createElement('div');row.className='local-entry';const info=document.createElement('span');info.textContent=`${entry.name} · ${new Date(entry.at).toLocaleString()}`;const open=document.createElement('button');open.type='button';open.textContent='Open copy';open.addEventListener('click',async()=>{if(isBusy())return;$('local-dialog').close();await openCopy(entry);});const del=document.createElement('button');del.type='button';del.textContent='Remove';del.addEventListener('click',()=>{if(commit(r=>removeCopy(r,kind,entry.id),{capture:false}))fillList();});row.append(info,open,del);list.append(row);}}}
  $('autosave').addEventListener('change',()=>{const enabled=$('autosave').checked;const ok=commit(r=>enabled?{...r,autosave:true}:pauseAutosave(r));if(!ok)$('autosave').checked=store.record.autosave;});
  $('keep-draft').addEventListener('click',()=>{if(isBusy())return;const [snapshot]=getSnapshot();const name=window.prompt('Name this local draft (a browser copy, not a disk file):',snapshot.name);if(name===null||!name.trim())return;if(commit(r=>addDraft(r,{id:id(),name:name.trim(),source:snapshot.source,at:now()}),{capture:false}))status('Local draft kept. Use Save for a disk copy.');});
  $('local-open').addEventListener('click',()=>{fillList();$('local-dialog').showModal();});
  $('local-close').addEventListener('click',()=>$('local-dialog').close());
  $('local-clear').addEventListener('click',()=>{if(!window.confirm('Delete all kept drafts, recent copies and recovery data for this version? The current editor text and disk files are not deleted. Autosave will be turned off.'))return;if(commit(r=>clearCopies(r),{capture:false,resetDamaged:true})){fillList();status('Local document copies cleared; autosave off.');}});
  window.addEventListener('storage',e=>{if(e.storageArea===storage&&(e.key===STORAGE_KEY||e.key===null)){conflict=true;clearTimeout(timer);timer=undefined;badge('Local data changed in another tab. Save to disk and reload.');}});
  const flush=()=>{if(timer!==undefined&&$('autosave').checked&&!conflict)commit();};
  window.addEventListener('pagehide',flush);document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden')flush();});
  if(store.error)report(new Error(store.error+' — local storage unavailable or damaged; disk Save still works.'));else badge(initial.active?'Local session recovered · not a disk save':initial.autosave?'Local autosave on':'Local autosave off');
  return {initial,schedule,prefsChanged,recent,commit};
}
