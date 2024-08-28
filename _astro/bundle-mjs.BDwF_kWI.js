import{b as G,l as g,_ as oe,k as te,H as D}from"./preact.module.LHOPIhyX.js";import"./hooks.module.6Mr8QjZg.js";function ke(e,r){for(var o in r)e[o]=r[o];return e}function ne(e,r){for(var o in e)if(o!=="__source"&&!(o in r))return!0;for(var t in r)if(t!=="__source"&&e[t]!==r[t])return!0;return!1}function le(e,r){this.props=e,this.context=r}(le.prototype=new G).isPureReactComponent=!0,le.prototype.shouldComponentUpdate=function(e,r){return ne(this.props,e)||ne(this.state,r)};var se=g.__b;g.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),se&&se(e)};var ze=g.__e;g.__e=function(e,r,o,t){if(e.then){for(var l,n=r;n=n.__;)if((l=n.__c)&&l.__c)return r.__e==null&&(r.__e=o.__e,r.__k=o.__k),l.__c(e,r)}ze(e,r,o,t)};var ae=g.unmount;function ie(e,r,o){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(t){typeof t.__c=="function"&&t.__c()}),e.__c.__H=null),(e=ke({},e)).__c!=null&&(e.__c.__P===o&&(e.__c.__P=r),e.__c=null),e.__k=e.__k&&e.__k.map(function(t){return ie(t,r,o)})),e}function ce(e,r,o){return e&&o&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(t){return ce(t,r,o)}),e.__c&&e.__c.__P===r&&(e.__e&&o.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=o)),e}function L(){this.__u=0,this.t=null,this.__b=null}function de(e){var r=e.__.__c;return r&&r.__a&&r.__a(e)}function $(){this.u=null,this.o=null}g.unmount=function(e){var r=e.__c;r&&r.__R&&r.__R(),r&&32&e.__u&&(e.type=null),ae&&ae(e)},(L.prototype=new G).__c=function(e,r){var o=r.__c,t=this;t.t==null&&(t.t=[]),t.t.push(o);var l=de(t.__v),n=!1,s=function(){n||(n=!0,o.__R=null,l?l(a):a())};o.__R=s;var a=function(){if(!--t.__u){if(t.state.__a){var c=t.state.__a;t.__v.__k[0]=ce(c,c.__c.__P,c.__c.__O)}var p;for(t.setState({__a:t.__b=null});p=t.t.pop();)p.forceUpdate()}};t.__u++||32&r.__u||t.setState({__a:t.__b=t.__v.__k[0]}),e.then(s,s)},L.prototype.componentWillUnmount=function(){this.t=[]},L.prototype.render=function(e,r){if(this.__b){if(this.__v.__k){var o=document.createElement("div"),t=this.__v.__k[0].__c;this.__v.__k[0]=ie(this.__b,o,t.__O=t.__P)}this.__b=null}var l=r.__a&&oe(te,null,e.fallback);return l&&(l.__u&=-33),[oe(te,null,r.__a?null:e.children),l]};var ue=function(e,r,o){if(++o[1]===o[0]&&e.o.delete(r),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(o=e.u;o;){for(;o.length>3;)o.pop()();if(o[1]<o[0])break;e.u=o=o[2]}};($.prototype=new G).__a=function(e){var r=this,o=de(r.__v),t=r.o.get(e);return t[0]++,function(l){var n=function(){r.props.revealOrder?(t.push(l),ue(r,e,t)):l()};o?o(n):n()}},$.prototype.render=function(e){this.u=null,this.o=new Map;var r=D(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&r.reverse();for(var o=r.length;o--;)this.o.set(r[o],this.u=[1,0,this.u]);return e.children},$.prototype.componentDidUpdate=$.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(r,o){ue(e,o,r)})};var Ce=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Pe=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Ne=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,je=/[A-Z0-9]/g,Se=typeof document<"u",Ge=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};G.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(G.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(r){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:r})}})});var pe=g.event;function Oe(){}function Ie(){return this.cancelBubble}function Me(){return this.defaultPrevented}g.event=function(e){return pe&&(e=pe(e)),e.persist=Oe,e.isPropagationStopped=Ie,e.isDefaultPrevented=Me,e.nativeEvent=e};var Ee={enumerable:!1,configurable:!0,get:function(){return this.class}},fe=g.vnode;g.vnode=function(e){typeof e.type=="string"&&function(r){var o=r.props,t=r.type,l={};for(var n in o){var s=o[n];if(!(n==="value"&&"defaultValue"in o&&s==null||Se&&n==="children"&&t==="noscript"||n==="class"||n==="className")){var a=n.toLowerCase();n==="defaultValue"&&"value"in o&&o.value==null?n="value":n==="download"&&s===!0?s="":a==="translate"&&s==="no"?s=!1:a==="ondoubleclick"?n="ondblclick":a!=="onchange"||t!=="input"&&t!=="textarea"||Ge(o.type)?a==="onfocus"?n="onfocusin":a==="onblur"?n="onfocusout":Ne.test(n)?n=a:t.indexOf("-")===-1&&Pe.test(n)?n=n.replace(je,"-$&").toLowerCase():s===null&&(s=void 0):a=n="oninput",a==="oninput"&&l[n=a]&&(n="oninputCapture"),l[n]=s}}t=="select"&&l.multiple&&Array.isArray(l.value)&&(l.value=D(o.children).forEach(function(c){c.props.selected=l.value.indexOf(c.props.value)!=-1})),t=="select"&&l.defaultValue!=null&&(l.value=D(o.children).forEach(function(c){c.props.selected=l.multiple?l.defaultValue.indexOf(c.props.value)!=-1:l.defaultValue==c.props.value})),o.class&&!o.className?(l.class=o.class,Object.defineProperty(l,"className",Ee)):(o.className&&!o.class||o.class&&o.className)&&(l.class=l.className=o.className),r.props=l}(e),e.$$typeof=Ce,fe&&fe(e)};var be=g.__r;g.__r=function(e){be&&be(e),e.__c};var me=g.diffed;g.diffed=function(e){me&&me(e);var r=e.props,o=e.__e;o!=null&&e.type==="textarea"&&"value"in r&&r.value!==o.value&&(o.value=r.value==null?"":r.value)};const q="-";function Re(e){const r=We(e),{conflictingClassGroups:o,conflictingClassGroupModifiers:t}=e;function l(s){const a=s.split(q);return a[0]===""&&a.length!==1&&a.shift(),ge(a,r)||$e(s)}function n(s,a){const c=o[s]||[];return a&&t[s]?[...c,...t[s]]:c}return{getClassGroupId:l,getConflictingClassGroupIds:n}}function ge(e,r){var s;if(e.length===0)return r.classGroupId;const o=e[0],t=r.nextPart.get(o),l=t?ge(e.slice(1),t):void 0;if(l)return l;if(r.validators.length===0)return;const n=e.join(q);return(s=r.validators.find(({validator:a})=>a(n)))==null?void 0:s.classGroupId}const he=/^\[(.+)\]$/;function $e(e){if(he.test(e)){const r=he.exec(e)[1],o=r==null?void 0:r.substring(0,r.indexOf(":"));if(o)return"arbitrary.."+o}}function We(e){const{theme:r,prefix:o}=e,t={nextPart:new Map,validators:[]};return Ue(Object.entries(e.classGroups),o).forEach(([l,n])=>{B(n,t,l,r)}),t}function B(e,r,o,t){e.forEach(l=>{if(typeof l=="string"){const n=l===""?r:_e(r,l);n.classGroupId=o;return}if(typeof l=="function"){if(Te(l)){B(l(t),r,o,t);return}r.validators.push({validator:l,classGroupId:o});return}Object.entries(l).forEach(([n,s])=>{B(s,_e(r,n),o,t)})})}function _e(e,r){let o=e;return r.split(q).forEach(t=>{o.nextPart.has(t)||o.nextPart.set(t,{nextPart:new Map,validators:[]}),o=o.nextPart.get(t)}),o}function Te(e){return e.isThemeGetter}function Ue(e,r){return r?e.map(([o,t])=>{const l=t.map(n=>typeof n=="string"?r+n:typeof n=="object"?Object.fromEntries(Object.entries(n).map(([s,a])=>[r+s,a])):n);return[o,l]}):e}function Ae(e){if(e<1)return{get:()=>{},set:()=>{}};let r=0,o=new Map,t=new Map;function l(n,s){o.set(n,s),r++,r>e&&(r=0,t=o,o=new Map)}return{get(n){let s=o.get(n);if(s!==void 0)return s;if((s=t.get(n))!==void 0)return l(n,s),s},set(n,s){o.has(n)?o.set(n,s):l(n,s)}}}const ve="!";function Ve(e){const{separator:r,experimentalParseClassName:o}=e,t=r.length===1,l=r[0],n=r.length;function s(a){const c=[];let p=0,f=0,m;for(let b=0;b<a.length;b++){let h=a[b];if(p===0){if(h===l&&(t||a.slice(b,b+n)===r)){c.push(a.slice(f,b)),f=b+n;continue}if(h==="/"){m=b;continue}}h==="["?p++:h==="]"&&p--}const _=c.length===0?a:a.substring(f),y=_.startsWith(ve),N=y?_.substring(1):_,v=m&&m>f?m-f:void 0;return{modifiers:c,hasImportantModifier:y,baseClassName:N,maybePostfixModifierPosition:v}}return o?function(a){return o({className:a,parseClassName:s})}:s}function He(e){if(e.length<=1)return e;const r=[];let o=[];return e.forEach(t=>{t[0]==="["?(r.push(...o.sort(),t),o=[]):o.push(t)}),r.push(...o.sort()),r}function De(e){return{cache:Ae(e.cacheSize),parseClassName:Ve(e),...Re(e)}}const Le=/\s+/;function qe(e,r){const{parseClassName:o,getClassGroupId:t,getConflictingClassGroupIds:l}=r,n=new Set;return e.trim().split(Le).map(s=>{const{modifiers:a,hasImportantModifier:c,baseClassName:p,maybePostfixModifierPosition:f}=o(s);let m=!!f,_=t(m?p.substring(0,f):p);if(!_){if(!m)return{isTailwindClass:!1,originalClassName:s};if(_=t(p),!_)return{isTailwindClass:!1,originalClassName:s};m=!1}const y=He(a).join(":");return{isTailwindClass:!0,modifierId:c?y+ve:y,classGroupId:_,originalClassName:s,hasPostfixModifier:m}}).reverse().filter(s=>{if(!s.isTailwindClass)return!0;const{modifierId:a,classGroupId:c,hasPostfixModifier:p}=s,f=a+c;return n.has(f)?!1:(n.add(f),l(c,p).forEach(m=>n.add(a+m)),!0)}).reverse().map(s=>s.originalClassName).join(" ")}function Be(){let e=0,r,o,t="";for(;e<arguments.length;)(r=arguments[e++])&&(o=ye(r))&&(t&&(t+=" "),t+=o);return t}function ye(e){if(typeof e=="string")return e;let r,o="";for(let t=0;t<e.length;t++)e[t]&&(r=ye(e[t]))&&(o&&(o+=" "),o+=r);return o}function Ze(e,...r){let o,t,l,n=s;function s(c){const p=r.reduce((f,m)=>m(f),e());return o=De(p),t=o.cache.get,l=o.cache.set,n=a,a(c)}function a(c){const p=t(c);if(p)return p;const f=qe(c,o);return l(c,f),f}return function(){return n(Be.apply(null,arguments))}}function d(e){const r=o=>o[e]||[];return r.isThemeGetter=!0,r}const xe=/^\[(?:([a-z-]+):)?(.+)\]$/i,Fe=/^\d+\/\d+$/,Je=new Set(["px","full","screen"]),Ke=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Qe=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Xe=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Ye=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,er=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function w(e){return C(e)||Je.has(e)||Fe.test(e)}function k(e){return P(e,"length",ir)}function C(e){return!!e&&!Number.isNaN(Number(e))}function W(e){return P(e,"number",C)}function O(e){return!!e&&Number.isInteger(Number(e))}function rr(e){return e.endsWith("%")&&C(e.slice(0,-1))}function i(e){return xe.test(e)}function z(e){return Ke.test(e)}const or=new Set(["length","size","percentage"]);function tr(e){return P(e,or,we)}function nr(e){return P(e,"position",we)}const lr=new Set(["image","url"]);function sr(e){return P(e,lr,dr)}function ar(e){return P(e,"",cr)}function I(){return!0}function P(e,r,o){const t=xe.exec(e);return t?t[1]?typeof r=="string"?t[1]===r:r.has(t[1]):o(t[2]):!1}function ir(e){return Qe.test(e)&&!Xe.test(e)}function we(){return!1}function cr(e){return Ye.test(e)}function dr(e){return er.test(e)}function ur(){const e=d("colors"),r=d("spacing"),o=d("blur"),t=d("brightness"),l=d("borderColor"),n=d("borderRadius"),s=d("borderSpacing"),a=d("borderWidth"),c=d("contrast"),p=d("grayscale"),f=d("hueRotate"),m=d("invert"),_=d("gap"),y=d("gradientColorStops"),N=d("gradientColorStopPositions"),v=d("inset"),b=d("margin"),h=d("opacity"),x=d("padding"),Z=d("saturate"),T=d("scale"),F=d("sepia"),J=d("skew"),K=d("space"),Q=d("translate"),U=()=>["auto","contain","none"],A=()=>["auto","hidden","clip","visible","scroll"],V=()=>["auto",i,r],u=()=>[i,r],X=()=>["",w,k],M=()=>["auto",C,i],Y=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],E=()=>["solid","dashed","dotted","double","none"],ee=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],H=()=>["start","end","center","between","around","evenly","stretch"],j=()=>["","0",i],re=()=>["auto","avoid","all","avoid-page","page","left","right","column"],S=()=>[C,W],R=()=>[C,i];return{cacheSize:500,separator:":",theme:{colors:[I],spacing:[w,k],blur:["none","",z,i],brightness:S(),borderColor:[e],borderRadius:["none","","full",z,i],borderSpacing:u(),borderWidth:X(),contrast:S(),grayscale:j(),hueRotate:R(),invert:j(),gap:u(),gradientColorStops:[e],gradientColorStopPositions:[rr,k],inset:V(),margin:V(),opacity:S(),padding:u(),saturate:S(),scale:S(),sepia:j(),skew:R(),space:u(),translate:u()},classGroups:{aspect:[{aspect:["auto","square","video",i]}],container:["container"],columns:[{columns:[z]}],"break-after":[{"break-after":re()}],"break-before":[{"break-before":re()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Y(),i]}],overflow:[{overflow:A()}],"overflow-x":[{"overflow-x":A()}],"overflow-y":[{"overflow-y":A()}],overscroll:[{overscroll:U()}],"overscroll-x":[{"overscroll-x":U()}],"overscroll-y":[{"overscroll-y":U()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[v]}],"inset-x":[{"inset-x":[v]}],"inset-y":[{"inset-y":[v]}],start:[{start:[v]}],end:[{end:[v]}],top:[{top:[v]}],right:[{right:[v]}],bottom:[{bottom:[v]}],left:[{left:[v]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",O,i]}],basis:[{basis:V()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",i]}],grow:[{grow:j()}],shrink:[{shrink:j()}],order:[{order:["first","last","none",O,i]}],"grid-cols":[{"grid-cols":[I]}],"col-start-end":[{col:["auto",{span:["full",O,i]},i]}],"col-start":[{"col-start":M()}],"col-end":[{"col-end":M()}],"grid-rows":[{"grid-rows":[I]}],"row-start-end":[{row:["auto",{span:[O,i]},i]}],"row-start":[{"row-start":M()}],"row-end":[{"row-end":M()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",i]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",i]}],gap:[{gap:[_]}],"gap-x":[{"gap-x":[_]}],"gap-y":[{"gap-y":[_]}],"justify-content":[{justify:["normal",...H()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...H(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...H(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[x]}],px:[{px:[x]}],py:[{py:[x]}],ps:[{ps:[x]}],pe:[{pe:[x]}],pt:[{pt:[x]}],pr:[{pr:[x]}],pb:[{pb:[x]}],pl:[{pl:[x]}],m:[{m:[b]}],mx:[{mx:[b]}],my:[{my:[b]}],ms:[{ms:[b]}],me:[{me:[b]}],mt:[{mt:[b]}],mr:[{mr:[b]}],mb:[{mb:[b]}],ml:[{ml:[b]}],"space-x":[{"space-x":[K]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[K]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",i,r]}],"min-w":[{"min-w":[i,r,"min","max","fit"]}],"max-w":[{"max-w":[i,r,"none","full","min","max","fit","prose",{screen:[z]},z]}],h:[{h:[i,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[i,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[i,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[i,r,"auto","min","max","fit"]}],"font-size":[{text:["base",z,k]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",W]}],"font-family":[{font:[I]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",i]}],"line-clamp":[{"line-clamp":["none",C,W]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",w,i]}],"list-image":[{"list-image":["none",i]}],"list-style-type":[{list:["none","disc","decimal",i]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[h]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[h]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...E(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",w,k]}],"underline-offset":[{"underline-offset":["auto",w,i]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:u()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",i]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",i]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[h]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Y(),nr]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",tr]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},sr]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[N]}],"gradient-via-pos":[{via:[N]}],"gradient-to-pos":[{to:[N]}],"gradient-from":[{from:[y]}],"gradient-via":[{via:[y]}],"gradient-to":[{to:[y]}],rounded:[{rounded:[n]}],"rounded-s":[{"rounded-s":[n]}],"rounded-e":[{"rounded-e":[n]}],"rounded-t":[{"rounded-t":[n]}],"rounded-r":[{"rounded-r":[n]}],"rounded-b":[{"rounded-b":[n]}],"rounded-l":[{"rounded-l":[n]}],"rounded-ss":[{"rounded-ss":[n]}],"rounded-se":[{"rounded-se":[n]}],"rounded-ee":[{"rounded-ee":[n]}],"rounded-es":[{"rounded-es":[n]}],"rounded-tl":[{"rounded-tl":[n]}],"rounded-tr":[{"rounded-tr":[n]}],"rounded-br":[{"rounded-br":[n]}],"rounded-bl":[{"rounded-bl":[n]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[h]}],"border-style":[{border:[...E(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[h]}],"divide-style":[{divide:E()}],"border-color":[{border:[l]}],"border-color-x":[{"border-x":[l]}],"border-color-y":[{"border-y":[l]}],"border-color-t":[{"border-t":[l]}],"border-color-r":[{"border-r":[l]}],"border-color-b":[{"border-b":[l]}],"border-color-l":[{"border-l":[l]}],"divide-color":[{divide:[l]}],"outline-style":[{outline:["",...E()]}],"outline-offset":[{"outline-offset":[w,i]}],"outline-w":[{outline:[w,k]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:X()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[h]}],"ring-offset-w":[{"ring-offset":[w,k]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",z,ar]}],"shadow-color":[{shadow:[I]}],opacity:[{opacity:[h]}],"mix-blend":[{"mix-blend":[...ee(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":ee()}],filter:[{filter:["","none"]}],blur:[{blur:[o]}],brightness:[{brightness:[t]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",z,i]}],grayscale:[{grayscale:[p]}],"hue-rotate":[{"hue-rotate":[f]}],invert:[{invert:[m]}],saturate:[{saturate:[Z]}],sepia:[{sepia:[F]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[o]}],"backdrop-brightness":[{"backdrop-brightness":[t]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[p]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[f]}],"backdrop-invert":[{"backdrop-invert":[m]}],"backdrop-opacity":[{"backdrop-opacity":[h]}],"backdrop-saturate":[{"backdrop-saturate":[Z]}],"backdrop-sepia":[{"backdrop-sepia":[F]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",i]}],duration:[{duration:R()}],ease:[{ease:["linear","in","out","in-out",i]}],delay:[{delay:R()}],animate:[{animate:["none","spin","ping","pulse","bounce",i]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[T]}],"scale-x":[{"scale-x":[T]}],"scale-y":[{"scale-y":[T]}],rotate:[{rotate:[O,i]}],"translate-x":[{"translate-x":[Q]}],"translate-y":[{"translate-y":[Q]}],"skew-x":[{"skew-x":[J]}],"skew-y":[{"skew-y":[J]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",i]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",i]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":u()}],"scroll-mx":[{"scroll-mx":u()}],"scroll-my":[{"scroll-my":u()}],"scroll-ms":[{"scroll-ms":u()}],"scroll-me":[{"scroll-me":u()}],"scroll-mt":[{"scroll-mt":u()}],"scroll-mr":[{"scroll-mr":u()}],"scroll-mb":[{"scroll-mb":u()}],"scroll-ml":[{"scroll-ml":u()}],"scroll-p":[{"scroll-p":u()}],"scroll-px":[{"scroll-px":u()}],"scroll-py":[{"scroll-py":u()}],"scroll-ps":[{"scroll-ps":u()}],"scroll-pe":[{"scroll-pe":u()}],"scroll-pt":[{"scroll-pt":u()}],"scroll-pr":[{"scroll-pr":u()}],"scroll-pb":[{"scroll-pb":u()}],"scroll-pl":[{"scroll-pl":u()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",i]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[w,k,W]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const pr=Ze(ur);export{pr as t};