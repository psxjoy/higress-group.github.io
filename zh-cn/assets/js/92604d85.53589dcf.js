"use strict";(self.webpackChunkhigress_website=self.webpackChunkhigress_website||[]).push([[7721],{3905:(t,e,r)=>{r.d(e,{Zo:()=>a,kt:()=>f});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},s=Object.keys(t);for(n=0;n<s.length;n++)r=s[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)r=s[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var i=n.createContext({}),u=function(t){var e=n.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):p(p({},e),t)),r},a=function(t){var e=u(t.components);return n.createElement(i.Provider,{value:e},t.children)},l="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,s=t.originalType,i=t.parentName,a=c(t,["components","mdxType","originalType","parentName"]),l=u(r),h=o,f=l["".concat(i,".").concat(h)]||l[h]||m[h]||s;return r?n.createElement(f,p(p({ref:e},a),{},{components:r})):n.createElement(f,p({ref:e},a))}));function f(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var s=r.length,p=new Array(s);p[0]=h;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c[l]="string"==typeof t?t:o,p[1]=c;for(var u=2;u<s;u++)p[u]=r[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},6053:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const s={title:"\u914d\u7f6e\u8def\u7531\u6307\u5411 HTTPS \u670d\u52a1",keywords:["ops","config","route","upstream","https"],description:"\u4ecb\u7ecd\u5982\u4f55\u4e3a\u4f7f\u7528 HTTPS \u534f\u8bae\u7684\u540e\u7aef\u670d\u52a1\u914d\u7f6e\u8def\u7531",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/ops/config/https-upstream.md"},p="\u914d\u7f6e\u8def\u7531\u6307\u5411 HTTPS \u670d\u52a1",c={unversionedId:"ops/how-tos/https-upstream",id:"ops/how-tos/https-upstream",title:"\u914d\u7f6e\u8def\u7531\u6307\u5411 HTTPS \u670d\u52a1",description:"\u4ecb\u7ecd\u5982\u4f55\u4e3a\u4f7f\u7528 HTTPS \u534f\u8bae\u7684\u540e\u7aef\u670d\u52a1\u914d\u7f6e\u8def\u7531",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/ops/how-tos/https-upstream.md",sourceDirName:"ops/how-tos",slug:"/ops/how-tos/https-upstream",permalink:"/zh-cn/docs/ops/how-tos/https-upstream",draft:!1,editUrl:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/ops/config/https-upstream.md",tags:[],version:"current",frontMatter:{title:"\u914d\u7f6e\u8def\u7531\u6307\u5411 HTTPS \u670d\u52a1",keywords:["ops","config","route","upstream","https"],description:"\u4ecb\u7ecd\u5982\u4f55\u4e3a\u4f7f\u7528 HTTPS \u534f\u8bae\u7684\u540e\u7aef\u670d\u52a1\u914d\u7f6e\u8def\u7531",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/ops/config/https-upstream.md"},sidebar:"docs",previous:{title:"\u914d\u7f6e\u8def\u7531\u6307\u5411 gRPC \u670d\u52a1",permalink:"/zh-cn/docs/ops/how-tos/grpc-upstream"},next:{title:"\u914d\u7f6e TCP \u56db\u5c42\u8def\u7531",permalink:"/zh-cn/docs/ops/how-tos/tcp-route"}},i={},u=[],a={toc:u},l="wrapper";function m(t){let{components:e,...r}=t;return(0,o.kt)(l,(0,n.Z)({},a,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u914d\u7f6e\u8def\u7531\u6307\u5411-https-\u670d\u52a1"},"\u914d\u7f6e\u8def\u7531\u6307\u5411 HTTPS \u670d\u52a1"),(0,o.kt)("p",null,"TBD"))}m.isMDXComponent=!0}}]);