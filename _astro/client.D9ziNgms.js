const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/signals.module.7ZRJVL24.js","_astro/preact.module.DSP1G4xJ.js","_astro/hooks.module.Citze9Tm.js"])))=>i.map(i=>d[i]);
import{_ as h,__tla as y}from"./astro/assets-service.BSoMdJpH.js";import{_ as s,B as m,D as v}from"./preact.module.DSP1G4xJ.js";let f,O=Promise.all([(()=>{try{return y}catch{}})()]).then(async()=>{const u=({value:t,name:o,hydrate:a=!0})=>t?s(a?"astro-slot":"astro-static-slot",{name:o,dangerouslySetInnerHTML:{__html:t}}):null;u.shouldComponentUpdate=()=>!1;var _=u;const l=new Map;f=t=>async(o,a,{default:r,...p},{client:d})=>{if(t.hasAttribute("ssr")){for(const[e,i]of Object.entries(p))a[e]=s(_,{value:i,name:e});if(t.dataset.preactSignals){const{signal:e}=await h(async()=>{const{signal:n}=await import("./signals.module.7ZRJVL24.js");return{signal:n}},__vite__mapDeps([0,1,2]));let i=JSON.parse(t.dataset.preactSignals);for(const[n,c]of Object.entries(i)){if(!l.has(c)){const g=e(a[n]);l.set(c,g)}a[n]=l.get(c)}}(d!=="only"?v:m)(s(o,a,r!=null?s(_,{value:r}):r),t),t.addEventListener("astro:unmount",()=>m(null,t),{once:!0})}}});export{O as __tla,f as default};
