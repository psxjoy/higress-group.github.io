"use strict";(self.webpackChunkhigress_website=self.webpackChunkhigress_website||[]).push([[2537],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a=n.createContext({}),u=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(a.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),g=i,h=p["".concat(a,".").concat(g)]||p[g]||d[g]||s;return r?n.createElement(h,o(o({ref:t},l),{},{components:r})):n.createElement(h,o({ref:t},l))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=r.length,o=new Array(s);o[0]=g;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c[p]="string"==typeof e?e:i,o[1]=c;for(var u=2;u<s;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},6514:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var n=r(7462),i=(r(7294),r(3905));const s={title:"\u7ec4\u4ef6\u7f16\u8bd1\u8bf4\u660e",keywords:["higress","architecture"],description:"Higress \u7ec4\u4ef6\u7f16\u8bd1\u8bf4\u660e.",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/master/i18n/zh-cn/docusaurus-plugin-content-docs/current/dev/architecture.md"},o="\u7ec4\u4ef6\u7f16\u8bd1\u8bf4\u660e",c={unversionedId:"dev/architecture",id:"dev/architecture",title:"\u7ec4\u4ef6\u7f16\u8bd1\u8bf4\u660e",description:"Higress \u7ec4\u4ef6\u7f16\u8bd1\u8bf4\u660e.",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/dev/architecture.md",sourceDirName:"dev",slug:"/dev/architecture",permalink:"/docs/dev/architecture",draft:!1,editUrl:"https://github.com/higress-group/higress-group.github.io/blob/master/i18n/zh-cn/docusaurus-plugin-content-docs/current/dev/architecture.md",tags:[],version:"current",frontMatter:{title:"\u7ec4\u4ef6\u7f16\u8bd1\u8bf4\u660e",keywords:["higress","architecture"],description:"Higress \u7ec4\u4ef6\u7f16\u8bd1\u8bf4\u660e.",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/master/i18n/zh-cn/docusaurus-plugin-content-docs/current/dev/architecture.md"},sidebar:"docs",previous:{title:"\u6e90\u7801\u9605\u8bfb\u6307\u5f15",permalink:"/docs/dev/code"}},a={},u=[{value:"Higress Controller",id:"higress-controller",level:2},{value:"Higress istio",id:"higress-istio",level:2},{value:"Higress Gateway",id:"higress-gateway",level:2}],l={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u7ec4\u4ef6\u7f16\u8bd1\u8bf4\u660e"},"\u7ec4\u4ef6\u7f16\u8bd1\u8bf4\u660e"),(0,i.kt)("h2",{id:"higress-controller"},"Higress Controller"),(0,i.kt)("p",null,"Higress \u7684\u63a7\u5236\u9762\u7a0b\u5e8f\uff0c\u4f1a\u8fde\u63a5 Istio \uff0c\u7528\u4e8e\u751f\u6210 Istio API \u5bf9\u8c61\uff0c\u901a\u8fc7 xDS \u534f\u8bae\u53d1\u9001\u7ed9 Istio\u3002"),(0,i.kt)("p",null,"\u5728 higress \u4ed3\u5e93\u76ee\u5f55\u4e0b\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"make build")," \u5373\u53ef\u8fdb\u884c\u672c\u5730\u73af\u5883\u80fd\u8fd0\u884c\u7684\u4e8c\u8fdb\u5236\u7f16\u8bd1"),(0,i.kt)("p",null,"\u82e5\u9700\u8981\u7f16\u8bd1 docker \u955c\u50cf\uff0c\u8bf7\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"make docker-build")),(0,i.kt)("h2",{id:"higress-istio"},"Higress istio"),(0,i.kt)("p",null,"\u540c\u5c5e\u4e8e Higress \u7684\u63a7\u5236\u9762\u7a0b\u5e8f\uff0c\u76f4\u63a5\u8fde\u63a5 Higress Gateway\uff0c\u7528\u4e8e\u751f\u6210 Envoy API \u5bf9\u8c61\uff0c\u901a\u8fc7 xDS \u534f\u8bae\u53d1\u9001\u7ed9 Higress Gateway\u3002"),(0,i.kt)("p",null,"\u5728 higress \u4ed3\u5e93\u76ee\u5f55\u4e0b\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"make build-istio")," \u4f1a\u7f16\u8bd1\u51fa istio \u7684\u955c\u50cf\u3002"),(0,i.kt)("h2",{id:"higress-gateway"},"Higress Gateway"),(0,i.kt)("p",null,"Higress \u7684\u6570\u636e\u9762\u7a0b\u5e8f\uff0c\u7528\u4e8e\u5b9e\u73b0\u7f51\u5173\u8def\u7531\u8f6c\u53d1\u7b49\u80fd\u529b\u3002"),(0,i.kt)("p",null,"\u5728 higress \u4ed3\u5e93\u76ee\u5f55\u4e0b\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"make build-gateway")," \u4f1a\u7f16\u8bd1\u51fa Higress Gateway \u7684\u955c\u50cf\u3002"))}d.isMDXComponent=!0}}]);