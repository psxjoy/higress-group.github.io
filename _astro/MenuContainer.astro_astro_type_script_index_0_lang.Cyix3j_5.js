var ke=Object.defineProperty;var De=(w,g,y)=>g in w?ke(w,g,{enumerable:!0,configurable:!0,writable:!0,value:y}):w[g]=y;var h=(w,g,y)=>De(w,typeof g!="symbol"?g+"":g,y);import{_ as Ce,__tla as _e}from"./astro/assets-service.Da9pL5MS.js";import{A as qe,__tla as Oe}from"./constant.lHsJmLWZ.js";import{i as Re}from"./index.CTbVEFV3.js";let Me=Promise.all([(()=>{try{return _e}catch{}})(),(()=>{try{return Oe}catch{}})()]).then(async()=>{window.dataLayer=window.dataLayer||[];function w(){dataLayer.push(arguments)}w("js",new Date),w("config","G-YHS75WKFBR"),function(){if(!(window.location.hostname!=="higress.io"&&window.location.hostname!=="higress.cn")){var e=document.createElement("script");e.src="https://hm.baidu.com/hm.js?4debd66ec73a32e236b30b46d219e2e3";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}}(),function(e,t,n,o,r){e[o]=e[o]||[];var i=t.getElementsByTagName(n)[0],a=t.createElement(n);a.async=!0,a.id="beacon-aplus",a.setAttribute("exparams","userid=&aplus&sidx=aplusSidex&ckx=aplusCkx"),a.src="//g.alicdn.com/alilog/mlog/aplus_v2.js",a.crossorigin="anonymous",i.parentNode.insertBefore(a,i)}(window,document,"script","aplus_queue"),function(e){var t=e.createElement("script");t.type="text/javascript",t.async=!0,t.src="//g.alicdn.com/aes/??tracker/3.3.4/index.js,tracker-plugin-pv/3.0.5/index.js,tracker-plugin-event/3.0.0/index.js,tracker-plugin-autolog/3.0.3/index.js,tracker-plugin-survey/3.0.3/index.js,tracker-plugin-jserror/3.0.3/index.js,tracker-plugin-resourceError/3.0.3/index.js",t.onload=function(){window.location.hostname!=="higress.io"&&window.location.hostname!=="higress.cn"||(window.AES_CONFIG=window.AES_CONFIG||{env:"prod"},window.aes=new AES({pid:"ZAwmfA",user_type:6}),window.AESPluginAutologConfig={exposure:"auto"},window.AEMPluginInstances=[aes.use(AESPluginPV,window.AESPluginPVConfig||{enableHistory:!0}),aes.use(AESPluginEvent,window.AESPluginEventConfig||{}),aes.use(AESPluginSurvey,window.AESPluginEventConfig||{}),aes.use(AESPluginAutolog,window.AESPluginAutologConfig||{}),aes.use(AESPluginJSError,window.AESPluginJSError||{}),aes.use(AESPluginResourceError,window.AESPluginResourceError||{})])},setTimeout(function(){e.getElementsByTagName("body")[0].appendChild(t)},800)}(document);class g extends HTMLElement{constructor(){super();h(this,"ifscroll");h(this,"handleScroll",()=>{window.innerWidth<=800||(window.scrollY>=100&&!this.ifscroll&&(this.ifscroll=!0,this.classList.add("bg-neutral/[0.84]")),window.scrollY<=100&&this.ifscroll&&(this.ifscroll=!1,this.classList.remove("bg-neutral/[0.84]")))});this.ifscroll=!1,window.addEventListener("scroll",this.handleScroll)}}customElements.define("my-layout",g);function y(){const e=document.createElement("script");e.type="text/javascript",e.src="https://g.alicdn.com/cm-design/copilot-booter/0.0.26/copilot-booter.js",e.addEventListener("load",function(){window.CNPilot&&window.CNPilot.mounted({CNPilot_OPEN_SOURCE:["higress.cn","higress.io"],CNPilot_OPEN_SOURCE_API:"https://ai.nacos.io",CNPilot_OPEN_SOURCE_PRODUCT_NAME:"higress",showFloatICON:!0,globalStyle:{top:"0",height:"100vh"},entryIconProps:{"position-type":"updown","icon-hover-text":"\u4E13\u5BB6\u7B54\u7591","icon-style":{color:"red",background:"white",border:"2px solid red",borderRadius:"20px"}},headerProps:{closeIcon:{show:!0},titleText:"AI\u7B54\u7591\u4E13\u5BB6"}})}),document.body.append(e)}y(),document.addEventListener("astro:page-load",function(){window.CNPilot&&window.CNPilot.unmounted(),y()});let k=document.createElement("script");k.src="https://g.alicdn.com/cm-design/mw-vendor/1.6.12/web-animations-next.min.js?spm=defwork.home.0.0.413a5c4bEOqptl&file=web-animations-next.min.js",k.onload=function(){document.getAnimations||(document.getAnimations=window.Element.prototype.getAnimations)},document.head.appendChild(k);class Z extends HTMLElement{constructor(){super();const t=this.querySelector('[role="tablist"]');this.tabs=[...t.querySelectorAll('[role="tab"]')],this.panels=[...this.querySelectorAll(':scope > [role="tabpanel"]')],this.tabs.forEach((n,o)=>{n.addEventListener("click",r=>{r.preventDefault();const i=t.querySelector("[aria-selected]");r.currentTarget!==i&&this.switchTab(r.currentTarget,o)}),n.addEventListener("keydown",r=>{const i=this.tabs.indexOf(r.currentTarget),a=r.key==="ArrowLeft"?i-1:r.key==="ArrowRight"?i+1:r.key==="Home"?0:r.key==="End"?this.tabs.length-1:null;a!==null&&this.tabs[a]&&(r.preventDefault(),this.switchTab(this.tabs[a],a))})})}switchTab(t,n){if(!t)return;this.tabs.forEach(r=>{r.removeAttribute("aria-selected"),r.setAttribute("tabindex","-1")}),this.panels.forEach(r=>{r.hidden=!0});const o=this.panels[n];o&&(o.hidden=!1),t.removeAttribute("tabindex"),t.setAttribute("aria-selected","true"),t.focus()}}customElements.define("starlight-tabs",Z);let D="";class z extends HTMLElement{constructor(){super(),setTimeout(()=>{D&&D!==window.location.href&&this.initDocSearch(),D=window.location.href},0),window.addEventListener("DOMContentLoaded",this.initDocSearch)}async initDocSearch(){const{default:t}=await Ce(async()=>{const{default:o}=await import("./index.DTipdLNX.js");return{default:o}},[]),n={...qe,container:"sl-doc-search"};try{const o=JSON.parse(this.dataset.translations||"{}");Object.assign(n,o)}catch{}t(n)}}customElements.define("sl-doc-search",z);function Q(e){e.parentNode.style.display="none",window.alertBarClosed=!0}function M(){if(!["/","/en/","/cloud/","/en/cloud/","/news/","/en/news/","/activity","/en/activity","/blog/","/en/blog/","/wuyi/","/en/wuyi/","/plugin/","/en/plugin/"].includes(location.pathname))document.querySelector(".alert-bar")&&(document.querySelector(".alert-bar").style.display="none");else try{const e=document.querySelector(".alert-bar"),t=document.querySelector(".close-button");(window.alertBarClosed||!1)===!0?e.style.display="none":t.addEventListener("click",function(){Q(t)})}catch(e){console.log(e)}}window.addEventListener("DOMContentLoaded",M),document.addEventListener("astro:after-swap",M);class ee extends HTMLElement{constructor(){super();const t=this.querySelector("button");t.addEventListener("click",()=>this.toggleExpanded());const n=this.closest("nav");n&&n.addEventListener("keyup",o=>this.closeOnEscape(o,t))}setExpanded(t){this.setAttribute("aria-expanded",String(t)),document.body.toggleAttribute("data-mobile-menu-expanded",t)}toggleExpanded(){this.setExpanded(this.getAttribute("aria-expanded")!=="true")}closeOnEscape(t,n){t.code==="Escape"&&(this.setExpanded(!1),n.focus())}}customElements.define("mobile-menu-button",ee);const v="data-astro-transition-persist";function te(e){for(const t of document.scripts)for(const n of e.scripts)if(!n.hasAttribute("data-astro-rerun")&&(!t.src&&t.textContent===n.textContent||t.src&&t.type===n.type&&t.src===n.src)){n.dataset.astroExec="";break}}function ne(e){const t=document.documentElement,n=[...t.attributes].filter(({name:o})=>(t.removeAttribute(o),o.startsWith("data-astro-")));[...e.documentElement.attributes,...n].forEach(({name:o,value:r})=>t.setAttribute(o,r))}function oe(e){for(const t of Array.from(document.head.children)){const n=se(t,e);n?n.remove():t.remove()}document.head.append(...e.head.children)}function re(e,t){t.replaceWith(e);for(const n of t.querySelectorAll(`[${v}]`)){const o=n.getAttribute(v),r=e.querySelector(`[${v}="${o}"]`);r&&(r.replaceWith(n),r.localName==="astro-island"&&ae(n)&&(n.setAttribute("ssr",""),n.setAttribute("props",r.getAttribute("props"))))}}const ie=()=>{const e=document.activeElement;if(e!=null&&e.closest(`[${v}]`)){if(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement){const t=e.selectionStart,n=e.selectionEnd;return()=>C({activeElement:e,start:t,end:n})}return()=>C({activeElement:e})}else return()=>C({activeElement:null})},C=({activeElement:e,start:t,end:n})=>{e&&(e.focus(),(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement)&&(typeof t=="number"&&(e.selectionStart=t),typeof n=="number"&&(e.selectionEnd=n)))},se=(e,t)=>{const n=e.getAttribute(v),o=n&&t.head.querySelector(`[${v}="${n}"]`);if(o)return o;if(e.matches("link[rel=stylesheet]")){const r=e.getAttribute("href");return t.head.querySelector(`link[rel=stylesheet][href="${r}"]`)}return null},ae=e=>{const t=e.dataset.astroTransitionPersistProps;return t==null||t==="false"},ce=e=>{te(e),ne(e),oe(e);const t=ie();re(e.body,document.body),t()},le="astro:before-preparation",de="astro:after-preparation",ue="astro:before-swap",me="astro:after-swap",he=e=>document.dispatchEvent(new Event(e));class N extends Event{constructor(n,o,r,i,a,c,d,m,l,s){super(n,o);h(this,"from");h(this,"to");h(this,"direction");h(this,"navigationType");h(this,"sourceElement");h(this,"info");h(this,"newDocument");h(this,"signal");this.from=r,this.to=i,this.direction=a,this.navigationType=c,this.sourceElement=d,this.info=m,this.newDocument=l,this.signal=s,Object.defineProperties(this,{from:{enumerable:!0},to:{enumerable:!0,writable:!0},direction:{enumerable:!0,writable:!0},navigationType:{enumerable:!0},sourceElement:{enumerable:!0},info:{enumerable:!0},newDocument:{enumerable:!0,writable:!0},signal:{enumerable:!0}})}}class fe extends N{constructor(n,o,r,i,a,c,d,m,l,s){super(le,{cancelable:!0},n,o,r,i,a,c,d,m);h(this,"formData");h(this,"loader");this.formData=l,this.loader=s.bind(this,this),Object.defineProperties(this,{formData:{enumerable:!0},loader:{enumerable:!0,writable:!0}})}}class pe extends N{constructor(n,o){super(ue,void 0,n.from,n.to,n.direction,n.navigationType,n.sourceElement,n.info,n.newDocument,n.signal);h(this,"direction");h(this,"viewTransition");h(this,"swap");this.direction=n.direction,this.viewTransition=o,this.swap=()=>ce(this.newDocument),Object.defineProperties(this,{direction:{enumerable:!0},viewTransition:{enumerable:!0},swap:{enumerable:!0,writable:!0}})}}async function ge(e,t,n,o,r,i,a,c,d){const m=new fe(e,t,n,o,r,i,window.document,a,c,d);return document.dispatchEvent(m)&&(await m.loader(),m.defaultPrevented||(he(de),m.navigationType!=="traverse"&&_({scrollX,scrollY}))),m}function we(e,t){const n=new pe(e,t);return document.dispatchEvent(n),n.swap(),n}const ye=history.pushState.bind(history),T=history.replaceState.bind(history),_=e=>{history.state&&(history.scrollRestoration="manual",T({...history.state,...e},""))},q=!!document.startViewTransition,O=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),H=(e,t)=>e.pathname===t.pathname&&e.search===t.search;let f,b,x;const j=e=>document.dispatchEvent(new Event(e)),Y=()=>j("astro:page-load"),be=()=>{let e=document.createElement("div");e.setAttribute("aria-live","assertive"),e.setAttribute("aria-atomic","true"),e.className="astro-route-announcer",document.body.append(e),setTimeout(()=>{var n;let t=document.title||((n=document.querySelector("h1"))==null?void 0:n.textContent)||location.pathname;e.textContent=t},60)},I="data-astro-transition-persist",U="data-astro-transition",R="data-astro-transition-fallback";let P,A=0;history.state?(A=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):O()&&(T({index:A,scrollX,scrollY},""),history.scrollRestoration="manual");async function Ee(e,t){var n;try{const o=await fetch(e,t),r=((n=o.headers.get("content-type"))!=null?n:"").split(";",1)[0].trim();return r!=="text/html"&&r!=="application/xhtml+xml"?null:{html:await o.text(),redirected:o.redirected?o.url:void 0,mediaType:r}}catch{return null}}function X(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function ve(){let e=Promise.resolve();for(const t of Array.from(document.scripts)){if(t.dataset.astroExec==="")continue;const n=t.getAttribute("type");if(n&&n!=="module"&&n!=="text/javascript")continue;const o=document.createElement("script");o.innerHTML=t.innerHTML;for(const r of t.attributes){if(r.name==="src"){const i=new Promise(a=>{o.onload=o.onerror=a});e=e.then(()=>i)}o.setAttribute(r.name,r.value)}o.dataset.astroExec="",t.replaceWith(o)}return e}const F=(e,t,n,o,r)=>{const i=H(t,e),a=document.title;document.title=o;let c=!1;if(e.href!==location.href&&!r)if(n.history==="replace"){const d=history.state;T({...n.state,index:d.index,scrollX:d.scrollX,scrollY:d.scrollY},"",e.href)}else ye({...n.state,index:++A,scrollX:0,scrollY:0},"",e.href);if(document.title=a,x=e,i||(scrollTo({left:0,top:0,behavior:"instant"}),c=!0),r)scrollTo(r.scrollX,r.scrollY);else{if(e.hash){history.scrollRestoration="auto";const d=history.state;location.href=e.href,history.state||(T(d,""),i&&window.dispatchEvent(new PopStateEvent("popstate")))}else c||scrollTo({left:0,top:0,behavior:"instant"});history.scrollRestoration="manual"}};function Ae(e){const t=[];for(const n of e.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${I}="${n.getAttribute(I)}"], link[rel=stylesheet][href="${n.getAttribute("href")}"]`)){const o=document.createElement("link");o.setAttribute("rel","preload"),o.setAttribute("as","style"),o.setAttribute("href",n.getAttribute("href")),t.push(new Promise(r=>{["load","error"].forEach(i=>o.addEventListener(i,r)),document.head.append(o)}))}return t}async function $(e,t,n,o,r){async function i(d){function m(u){const p=u.effect;return!p||!(p instanceof KeyframeEffect)||!p.target?!1:window.getComputedStyle(p.target,p.pseudoElement).animationIterationCount==="infinite"}const l=document.getAnimations();document.documentElement.setAttribute(R,d);const s=document.getAnimations().filter(u=>!l.includes(u)&&!m(u));return Promise.allSettled(s.map(u=>u.finished))}if(r==="animate"&&!n.transitionSkipped&&!e.signal.aborted)try{await i("old")}catch{}const a=document.title,c=we(e,n.viewTransition);F(c.to,c.from,t,a,o),j(me),r==="animate"&&(!n.transitionSkipped&&!c.signal.aborted?i("new").finally(()=>n.viewTransitionFinished()):n.viewTransitionFinished())}function Se(){return f==null||f.controller.abort(),f={controller:new AbortController}}async function B(e,t,n,o,r){const i=Se();if(!O()||location.origin!==n.origin){i===f&&(f=void 0),location.href=n.href;return}const a=r?"traverse":o.history==="replace"?"replace":"push";if(a!=="traverse"&&_({scrollX,scrollY}),H(t,n)&&(e!=="back"&&n.hash||e==="back"&&t.hash)){F(n,t,o,document.title,r),i===f&&(f=void 0);return}const c=await ge(t,n,e,a,o.sourceElement,o.info,i.controller.signal,o.formData,d);if(c.defaultPrevented||c.signal.aborted){i===f&&(f=void 0),c.signal.aborted||(location.href=n.href);return}async function d(s){var G,J;const u=s.to.href,p={signal:s.signal};if(s.formData){p.method="POST";const L=s.sourceElement instanceof HTMLFormElement?s.sourceElement:s.sourceElement instanceof HTMLElement&&"form"in s.sourceElement?s.sourceElement.form:(G=s.sourceElement)==null?void 0:G.closest("form");p.body=((J=L==null?void 0:L.attributes.getNamedItem("enctype"))==null?void 0:J.value)==="application/x-www-form-urlencoded"?new URLSearchParams(s.formData):s.formData}const E=await Ee(u,p);if(E===null){s.preventDefault();return}if(E.redirected&&(s.to=new URL(E.redirected)),P!=null||(P=new DOMParser),s.newDocument=P.parseFromString(E.html,E.mediaType),s.newDocument.querySelectorAll("noscript").forEach(L=>L.remove()),!s.newDocument.querySelector('[name="astro-view-transitions-enabled"]')&&!s.formData){s.preventDefault();return}const S=Ae(s.newDocument);S.length&&!s.signal.aborted&&await Promise.all(S)}async function m(){if(b&&b.viewTransition){try{b.viewTransition.skipTransition()}catch{}try{await b.viewTransition.updateCallbackDone}catch{}}return b={transitionSkipped:!1}}const l=await m();if(c.signal.aborted){i===f&&(f=void 0);return}if(document.documentElement.setAttribute(U,c.direction),q)l.viewTransition=document.startViewTransition(async()=>await $(c,o,l,r));else{const s=(async()=>{await Promise.resolve(),await $(c,o,l,r,X())})();l.viewTransition={updateCallbackDone:s,ready:s,finished:new Promise(u=>l.viewTransitionFinished=u),skipTransition:()=>{l.transitionSkipped=!0,document.documentElement.removeAttribute(R)}}}l.viewTransition.updateCallbackDone.finally(async()=>{await ve(),Y(),be()}),l.viewTransition.finished.finally(()=>{l.viewTransition=void 0,l===b&&(b=void 0),i===f&&(f=void 0),document.documentElement.removeAttribute(U),document.documentElement.removeAttribute(R)});try{await l.viewTransition.updateCallbackDone}catch(s){const u=s;console.log("[astro]",u.name,u.message,u.stack)}}async function V(e,t){await B("forward",x,new URL(e,location.href),t!=null?t:{})}function Le(e){if(!O()&&e.state){location.reload();return}if(e.state===null)return;const t=history.state,n=t.index,o=n>A?"forward":"back";A=n,B(o,x,new URL(location.href),{},t)}const K=()=>{history.state&&(scrollX!==history.state.scrollX||scrollY!==history.state.scrollY)&&_({scrollX,scrollY})};{if(q||X()!=="none")if(x=new URL(location.href),addEventListener("popstate",Le),addEventListener("load",Y),"onscrollend"in window)addEventListener("scrollend",K);else{let e,t,n,o;const r=()=>{var i;if(o!==((i=history.state)==null?void 0:i.index)){clearInterval(e),e=void 0;return}if(t===scrollY&&n===scrollX){clearInterval(e),e=void 0,K();return}else t=scrollY,n=scrollX};addEventListener("scroll",()=>{e===void 0&&(o=history.state.index,t=scrollY,n=scrollX,e=window.setInterval(r,50))},{passive:!0})}for(const e of document.scripts)e.dataset.astroExec=""}function Te(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function W(e){return e.dataset.astroReload!==void 0}(q||Te()!=="none")&&(document.addEventListener("click",e=>{let t=e.target;if(e.composed&&(t=e.composedPath()[0]),t instanceof Element&&(t=t.closest("a, area")),!(t instanceof HTMLAnchorElement)&&!(t instanceof SVGAElement)&&!(t instanceof HTMLAreaElement))return;const n=t instanceof HTMLElement?t.target:t.target.baseVal,o=t instanceof HTMLElement?t.href:t.href.baseVal,r=new URL(o,location.href).origin;W(t)||t.hasAttribute("download")||!t.href||n&&n!=="_self"||r!==location.origin||e.button!==0||e.metaKey||e.ctrlKey||e.altKey||e.shiftKey||e.defaultPrevented||(e.preventDefault(),V(o,{history:t.dataset.astroHistory==="replace"?"replace":"auto",sourceElement:t}))}),document.addEventListener("submit",e=>{var l,s,u,p;let t=e.target;if(t.tagName!=="FORM"||e.defaultPrevented||W(t))return;const n=t,o=e.submitter,r=new FormData(n,o),i=typeof n.action=="string"?n.action:n.getAttribute("action"),a=typeof n.method=="string"?n.method:n.getAttribute("method");let c=(s=(l=o==null?void 0:o.getAttribute("formaction"))!=null?l:i)!=null?s:location.pathname;const d=(p=(u=o==null?void 0:o.getAttribute("formmethod"))!=null?u:a)!=null?p:"get";if(d==="dialog"||location.origin!==new URL(c,location.href).origin)return;const m={sourceElement:o!=null?o:n};if(d==="get"){const E=new URLSearchParams(r),S=new URL(c);S.search=E.toString(),c=S.toString()}else m.formData=r;e.preventDefault(),V(c,m)}),Re({prefetchAll:!0}));class xe extends HTMLElement{constructor(){super();const t=this.getAttribute("data-trigger"),n=this.querySelector(".toggle-dropdown"),o=this.querySelector("svg[data-updown]");o&&(t==="click"?this.addEventListener("click",()=>{n&&n.classList.toggle("toggle-dropdown-active"),document.body.classList.toggle("overflow-hidden"),Array.from(o.classList).includes("toggle-trigger-up")?this.toggleDown(o):this.toggleUp(o)}):t==="hover"&&(this.addEventListener("mouseenter",()=>{n&&n.classList.add("toggle-dropdown-active"),this.toggleUp(o)}),this.addEventListener("mouseleave",()=>{n&&n.classList.remove("toggle-dropdown-active"),this.toggleDown(o)})))}toggleUp(t){t.classList.remove("toggle-trigger-down"),t.classList.add("toggle-trigger-up")}toggleDown(t){t.classList.remove("toggle-trigger-up"),t.classList.add("toggle-trigger-down")}}customElements.define("toggle-component",xe);class Pe extends HTMLElement{constructor(){super();const t=this.parentElement;this.querySelector(".dropdown-overlay").addEventListener("mouseenter",()=>{t.classList.remove("toggle-dropdown-active"),t.classList.add("toggle-dropdown-notactive")})}}customElements.define("menu-container",Pe)});export{Me as __tla};
