import"./Sidebar.astro_astro_type_script_index_0_lang.xm2ZZZKq.js";import{__tla as w}from"./hoisted.CfeLRHuz.js";import"./Particles.astro_astro_type_script_index_0_lang.BiyDd7c3.js";import"./LanguageToggle.astro_astro_type_script_index_0_lang.C1TXaPhW.js";import{__tla as x}from"./astro/assets-service.B3vdYoe2.js";import{__tla as v}from"./constant.CPvuqMat.js";import"./index.CTbVEFV3.js";let S=Promise.all([(()=>{try{return w}catch{}})(),(()=>{try{return x}catch{}})(),(()=>{try{return v}catch{}})()]).then(async()=>{function d(){let o=new URL(window.location.href).searchParams.get("source");o&&(o=o.replace(/_/g,"/"));const t=document.querySelector("#back-btn a");t&&(t.onclick=r=>{r.preventDefault();const n=new URLSearchParams(window.location.search);n.delete("source");let s="";o&&o!=="undefined"?s=`/${o}/`:s="/",console.log("======backbtn");const c=`${s}${n.toString()?`?${n.toString()}`:""}`;window.location.href=c})}document.addEventListener("astro:page-load",d),document.addEventListener("DOMContentLoaded",d);const f="_top";class m extends HTMLElement{constructor(){super(),this._current=this.querySelector('a[aria-current="true"]'),this.minH=parseInt(this.dataset.minH||"2",10),this.maxH=parseInt(this.dataset.maxH||"3",10);const t=[...this.querySelectorAll("a")],r=e=>{if(e instanceof HTMLHeadingElement){if(e.id===f)return!0;const l=e.tagName[1];if(l){const a=parseInt(l,10);if(a>=this.minH&&a<=this.maxH)return!0}}return!1},n=e=>{if(!e)return null;const l=e;for(;e;){if(r(e))return e;for(e=e.previousElementSibling;e!=null&&e.lastElementChild;)e=e.lastElementChild;const a=n(e);if(a)return a}return n(l.parentElement)},s=e=>{for(const{isIntersecting:l,target:a}of e){if(!l)continue;const p=n(a);if(!p)continue;const g=t.find(y=>y.hash==="#"+encodeURIComponent(p.id));if(g){this.current=g;break}}},c=document.querySelectorAll("main [id], main [id] ~ *, main .content > *");let i;const u=()=>{i&&i.disconnect(),i=new IntersectionObserver(s,{rootMargin:this.getRootMargin()}),c.forEach(e=>i.observe(e))};u();const b=window.requestIdleCallback||(e=>setTimeout(e,1));let h;window.addEventListener("resize",()=>{i&&i.disconnect(),clearTimeout(h),h=setTimeout(()=>b(u),200)})}set current(t){t!==this._current&&(this._current&&this._current.removeAttribute("aria-current"),t.setAttribute("aria-current","true"),this._current=t)}getRootMargin(){var i,u;const t=((i=document.querySelector("header"))==null?void 0:i.getBoundingClientRect().height)||0,r=((u=this.querySelector("summary"))==null?void 0:u.getBoundingClientRect().height)||0,n=t+r+32,s=n+53,c=document.documentElement.clientHeight;return`-${n}px 0% ${s-c}px`}}customElements.define("starlight-toc",m);class E extends m{set current(t){super.current=t;const r=this.querySelector(".display-current");r&&(r.textContent=t.textContent)}constructor(){super();const t=this.querySelector("details");if(!t)return;const r=()=>{t.open=!1};t.querySelectorAll("a").forEach(n=>{n.addEventListener("click",r)}),window.addEventListener("click",n=>{t.contains(n.target)||r()}),window.addEventListener("keydown",n=>{if(n.key==="Escape"&&t.open){const s=t.contains(document.activeElement);if(r(),s){const c=t.querySelector("summary");c&&c.focus()}}})}}customElements.define("mobile-starlight-toc",E);class _ extends HTMLElement{constructor(){super(),this.btn=this.querySelector("button"),this.btn.addEventListener("click",()=>this.toggleExpanded());const t=this.closest("nav");t&&t.addEventListener("keyup",r=>this.closeOnEscape(r))}setExpanded(t){this.setAttribute("aria-expanded",String(t)),document.body.toggleAttribute("data-mobile-menu-expanded",t)}toggleExpanded(){this.setExpanded(this.getAttribute("aria-expanded")!=="true")}closeOnEscape(t){t.code==="Escape"&&(this.setExpanded(!1),this.btn.focus())}}customElements.define("starlight-menu-button",_)});export{S as __tla};
