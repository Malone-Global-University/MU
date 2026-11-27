export function interpolate(points,value){
  if(!points.length)return 0;
  if(value<=points[0][0])return points[0][1];
  for(let i=1;i<points.length;i++){
    const [x,y]=points[i], [a,b]=points[i-1];
    if(value<=x)return x===a?y:b+(y-b)*(value-a)/(x-a);
  }
  return points.at(-1)[1];
}
export function monotonicPoints(raw,maxX,maxY){
  const points=[[0,0]];
  for(const [x,y] of raw.filter(p=>p.every(Number.isFinite)).sort((a,b)=>a[0]-b[0]||a[1]-b[1])){
    const [px,py]=points.at(-1);
    if(x>px+1&&y>py+1&&x<maxX-1&&y<maxY-1)points.push([x,y]);
  }
  if(maxX>0&&maxY>0)points.push([maxX,maxY]);
  return points;
}
export class ScrollSync {
  constructor(view,frame,onStatus){this.view=view;this.frame=frame;this.onStatus=onStatus;this.enabled=true;this.valid=false;this.expected={};this.pending=0;this.points=[];
    view.scrollDOM.addEventListener('scroll',()=>this.scroll('source'),{passive:true});
    frame.contentWindow.addEventListener('scroll',()=>this.scroll('preview'),{passive:true});
    this.observer=new ResizeObserver(()=>this.refresh());this.observer.observe(view.scrollDOM);this.observer.observe(frame);
  }
  get source(){return this.view.scrollDOM;}
  get preview(){return this.frame.contentDocument.scrollingElement;}
  max(el){return Math.max(0,el.scrollHeight-el.clientHeight);}
  setEnabled(value){this.enabled=value;this.refresh();}
  setValid(value){this.valid=value;if(!value){cancelAnimationFrame(this.pending);this.pending=0;}this.refresh();}
  refresh(){
    if(!this.enabled||!this.valid){this.onStatus(!this.enabled?'Sync off':'Sync suspended — preview stale or unavailable');return;}
    const s=this.source,p=this.preview,mx=this.max(s),my=this.max(p),raw=[];
    const offset=this.view.documentTop-s.getBoundingClientRect().top+s.scrollTop;
    const nodes=this.frame.contentDocument.querySelectorAll('[data-source-line]');
    for(const node of nodes){
      const line=Number(node.dataset.sourceLine)+1;
      if(!Number.isInteger(line)||line<1||line>this.view.state.doc.lines)continue;
      const block=this.view.lineBlockAt(this.view.state.doc.line(line).from);
      raw.push([block.top+offset,node.getBoundingClientRect().top+p.scrollTop]);
    }
    this.points=monotonicPoints(raw,mx,my);
    this.onStatus(mx===0||my===0?'Sync on — short document':this.points.length>2?'Sync on — source mapped':'Sync on — approximate');
  }
  write(side,value){const el=side==='source'?this.source:this.preview;const target=Math.max(0,Math.min(this.max(el),value));if(Math.abs(el.scrollTop-target)<1)return;this.expected[side]=target;el.scrollTop=target;this.expected[side]=el.scrollTop;}
  scroll(side){
    const el=side==='source'?this.source:this.preview;
    if(this.expected[side]!=null&&Math.abs(el.scrollTop-this.expected[side])<2){delete this.expected[side];return;}
    delete this.expected[side];if(!this.enabled||!this.valid)return;
    this.driver=side;if(this.pending)return;
    this.pending=requestAnimationFrame(()=>{this.pending=0;if(!this.enabled||!this.valid)return;this.align(this.driver);});
  }
  align(side){this.refresh();const s=this.source,p=this.preview;if(!this.enabled||!this.valid||!this.max(s)||!this.max(p))return;
    const pts=side==='source'?this.points:this.points.map(([x,y])=>[y,x]);
    this.write(side==='source'?'preview':'source',interpolate(pts,side==='source'?s.scrollTop:p.scrollTop));}
  reset(){this.write('preview',0);if(this.enabled&&this.valid)this.write('source',0);}
}
