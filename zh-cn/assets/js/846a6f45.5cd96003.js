"use strict";(self.webpackChunkhigress_website=self.webpackChunkhigress_website||[]).push([[1963],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>g});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),s=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=s(t.components);return a.createElement(u.Provider,{value:e},t.children)},o="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),o=s(n),m=r,g=o["".concat(u,".").concat(m)]||o[m]||c[m]||l;return n?a.createElement(g,i(i({ref:e},d),{},{components:n})):a.createElement(g,i({ref:e},d))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p[o]="string"==typeof t?t:r,i[1]=p;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4588:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={title:"Mcp Bridge \u914d\u7f6e\u8bf4\u660e",keywords:["discovery"],description:"Higress Mcp Bridge \u914d\u7f6e\u8bf4\u660e\u3002",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/user/mcp-bridge.md"},i="Mcp Bridge \u914d\u7f6e\u8bf4\u660e",p={unversionedId:"user/mcp-bridge",id:"user/mcp-bridge",title:"Mcp Bridge \u914d\u7f6e\u8bf4\u660e",description:"Higress Mcp Bridge \u914d\u7f6e\u8bf4\u660e\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/user/mcp-bridge.md",sourceDirName:"user",slug:"/user/mcp-bridge",permalink:"/zh-cn/docs/user/mcp-bridge",draft:!1,editUrl:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/user/mcp-bridge.md",tags:[],version:"current",frontMatter:{title:"Mcp Bridge \u914d\u7f6e\u8bf4\u660e",keywords:["discovery"],description:"Higress Mcp Bridge \u914d\u7f6e\u8bf4\u660e\u3002",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/user/mcp-bridge.md"},sidebar:"docs",previous:{title:"\u8fd0\u7ef4\u53c2\u6570\u914d\u7f6e\u8bf4\u660e",permalink:"/zh-cn/docs/user/configurations"},next:{title:"HTTP\u8f6cDubbo \u914d\u7f6e\u8bf4\u660e",permalink:"/zh-cn/docs/user/dubbo-http2rpc"}},u={},s=[{value:"McpBridge \u5b57\u6bb5\u8bf4\u660e",id:"mcpbridge-\u5b57\u6bb5\u8bf4\u660e",level:2},{value:"RegistryConfig \u5b57\u6bb5\u8bf4\u660e",id:"registryconfig-\u5b57\u6bb5\u8bf4\u660e",level:2},{value:"authSecretName \u5b57\u6bb5\u8bf4\u660e",id:"authsecretname-\u5b57\u6bb5\u8bf4\u660e",level:2},{value:"nacos \u8ba4\u8bc1",id:"nacos-\u8ba4\u8bc1",level:3},{value:"consul \u8ba4\u8bc1",id:"consul-\u8ba4\u8bc1",level:3},{value:"\u652f\u6301\u914d\u7f6e\u9759\u6001\u7684\u670d\u52a1\u53d1\u73b0\u65b9\u5f0f",id:"\u652f\u6301\u914d\u7f6e\u9759\u6001\u7684\u670d\u52a1\u53d1\u73b0\u65b9\u5f0f",level:2},{value:"\u901a\u8fc7\u56fa\u5b9aIP\u53d1\u73b0\u670d\u52a1",id:"\u901a\u8fc7\u56fa\u5b9aip\u53d1\u73b0\u670d\u52a1",level:3},{value:"\u901a\u8fc7DNS\u57df\u540d\u53d1\u73b0\u670d\u52a1",id:"\u901a\u8fc7dns\u57df\u540d\u53d1\u73b0\u670d\u52a1",level:3}],d={toc:s},o="wrapper";function c(t){let{components:e,...n}=t;return(0,r.kt)(o,(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mcp-bridge-\u914d\u7f6e\u8bf4\u660e"},"Mcp Bridge \u914d\u7f6e\u8bf4\u660e"),(0,r.kt)("h2",{id:"mcpbridge-\u5b57\u6bb5\u8bf4\u660e"},"McpBridge \u5b57\u6bb5\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"registries"),(0,r.kt)("td",{parentName:"tr",align:null},"RegistryConfig \u6570\u7ec4"),(0,r.kt)("td",{parentName:"tr",align:null},"\u652f\u6301\u914d\u7f6e\u591a\u4e2a\u4e0d\u540c\u6ce8\u518c\u4e2d\u5fc3\u7684\u670d\u52a1\u6765\u6e90"),(0,r.kt)("td",{parentName:"tr",align:null},"[]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426")))),(0,r.kt)("h2",{id:"registryconfig-\u5b57\u6bb5\u8bf4\u660e"},"RegistryConfig \u5b57\u6bb5\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32"),(0,r.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1\u53d1\u73b0\u7c7b\u578b\uff0c\u53ef\u9009\u9879\uff1anacos,nacos2,zookeeper,consul,eureka,static,dns"),(0,r.kt)("td",{parentName:"tr",align:null},"nacos2"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32"),(0,r.kt)("td",{parentName:"tr",align:null},"\u81ea\u5b9a\u4e49\u7684\u670d\u52a1\u6765\u6e90\u540d\u79f0"),(0,r.kt)("td",{parentName:"tr",align:null},"my-nacos"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"domain"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32"),(0,r.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1\u53d1\u73b0\u5730\u5740\uff0c\u4e00\u822c\u662f\u6ce8\u518c\u4e2d\u5fc3\u5730\u5740; \u5f53\u7c7b\u578b\u662fstatic\u6216dns\u65f6\uff0c\u8fd9\u4e2a\u5b57\u6bb5\u7528\u4e8e\u76f4\u63a5\u914d\u7f6e\u540e\u7aef\u5730\u5740"),(0,r.kt)("td",{parentName:"tr",align:null},"192.168.1.2"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"port"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6574\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6ce8\u518c\u4e2d\u5fc3\u8bbf\u95ee\u7aef\u53e3"),(0,r.kt)("td",{parentName:"tr",align:null},"8848"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"zkServicesPath"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32\u6570\u7ec4"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528zk\u65f6,\u586b\u5199\u670d\u52a1\u6ce8\u518c\u7684\u6839\u8def\u5f84,\u9ed8\u8ba4\u76d1\u542c /dubbo \u548c /services\uff0c\u524d\u8005\u4e3adubbo \u670d\u52a1\u9ed8\u8ba4\u6839\u8def\u5f84\uff0c\u540e\u8005\u4e3aSpringCloud\u670d\u52a1\u9ed8\u8ba4\u6839\u8def\u5f84"),(0,r.kt)("td",{parentName:"tr",align:null},'["/service-provider"]'),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacosNamespaceId"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32"),(0,r.kt)("td",{parentName:"tr",align:null},"nacos\u547d\u540d\u7a7a\u95f4id"),(0,r.kt)("td",{parentName:"tr",align:null},"d8ac64f3-xxxx-xxxx-xxxx-47a814ecf358"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacosGroups"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32\u6570\u7ec4"),(0,r.kt)("td",{parentName:"tr",align:null},"nacos\u670d\u52a1\u5206\u7ec4\u5217\u8868"),(0,r.kt)("td",{parentName:"tr",align:null},'["DEFAULT_GROUP"]'),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacosAccessKey"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32"),(0,r.kt)("td",{parentName:"tr",align:null},"nacos\u9700\u8981\u8ba4\u8bc1\u65f6\u586b\u5199\u7684ak\u4fe1\u606f"),(0,r.kt)("td",{parentName:"tr",align:null},"xxxx"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacosSecretKey"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32"),(0,r.kt)("td",{parentName:"tr",align:null},"nacos\u9700\u8981\u8ba4\u8bc1\u65f6\u586b\u5199\u7684sk\u4fe1\u606f"),(0,r.kt)("td",{parentName:"tr",align:null},"xxxx"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacosRefreshInterval"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6574\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},"nacos\u9700\u8981\u8ba4\u8bc1\u65f6\u586b\u5199\u7684\u670d\u52a1\u5237\u65b0\u95f4\u9694\u7eb3\u79d2\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},"30000000000\uff0830\u79d2\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"consulDatacenter"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32"),(0,r.kt)("td",{parentName:"tr",align:null},"consul\u9700\u8981\u8ba4\u8bc1\u65f6\u586b\u5199\u7684\u6570\u636e\u4e2d\u5fc3\u540d\u79f0"),(0,r.kt)("td",{parentName:"tr",align:null},"dc1"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"consulServiceTag"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32"),(0,r.kt)("td",{parentName:"tr",align:null},"consul\u9700\u8981\u8ba4\u8bc1\u65f6\u586b\u5199\u7684\u670d\u52a1\u6807\u7b7e\u8fc7\u6ee4"),(0,r.kt)("td",{parentName:"tr",align:null},"higress"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"consulRefreshInterval"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6574\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},"consul\u9700\u8981\u8ba4\u8bc1\u65f6\u586b\u5199\u7684\u670d\u52a1\u5237\u65b0\u95f4\u9694\u7eb3\u79d2\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},"30000000000\uff0830\u79d2\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"authSecretName"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32"),(0,r.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1\u53d1\u73b0\u8ba4\u8bc1\u4fe1\u606f Secret \u540d\u79f0, \u5177\u4f53\u770b\u4e0b\u9762\u8bf4\u660e"),(0,r.kt)("td",{parentName:"tr",align:null},"higress-nacos-auth"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426")))),(0,r.kt)("h2",{id:"authsecretname-\u5b57\u6bb5\u8bf4\u660e"},"authSecretName \u5b57\u6bb5\u8bf4\u660e"),(0,r.kt)("p",null,"\u670d\u52a1\u53d1\u73b0\u6765\u6e90\u8ba4\u8bc1\u4fe1\u606f\u4fdd\u5b58\u5728 higress-system \u547d\u540d\u7a7a\u95f4\u4e0b\u5bf9\u5e94 Secret \u4e0b \uff0c\u73b0\u5728\u652f\u6301 nacos \u548c consul \u670d\u52a1\u53d1\u73b0\u3002"),(0,r.kt)("p",null,"nacos \u8ba4\u8bc1\u4fe1\u606f\u5305\u542b\u7528\u6237\u540d\u548c\u5bc6\u7801\uff0c consul \u8ba4\u8bc1\u4fe1\u606f\u5305\u542b\u8ba4\u8bc1 token\uff0c \u5177\u4f53 Secret \u914d\u7f6e\u6837\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("h3",{id:"nacos-\u8ba4\u8bc1"},"nacos \u8ba4\u8bc1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\ndata:\n  nacosPassword: aGlncmVzcw==\n  nacosUsername: aGlncmVzcw==\nkind: Secret\nmetadata:\n  name: higress-nacos-auth\n  namespace: higress-system\ntype: Opaque\n")),(0,r.kt)("h3",{id:"consul-\u8ba4\u8bc1"},"consul \u8ba4\u8bc1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\ndata:\n  consulToken: NGFkZDE2NjUtNTM5NC03YzU1LTIzYTUtNzA4MDZkNTFiYzQy\nkind: Secret\nmetadata:\n  name: higress-consul-auth\n  namespace: higress-system\ntype: Opaque\n")),(0,r.kt)("h2",{id:"\u652f\u6301\u914d\u7f6e\u9759\u6001\u7684\u670d\u52a1\u53d1\u73b0\u65b9\u5f0f"},"\u652f\u6301\u914d\u7f6e\u9759\u6001\u7684\u670d\u52a1\u53d1\u73b0\u65b9\u5f0f"),(0,r.kt)("h3",{id:"\u901a\u8fc7\u56fa\u5b9aip\u53d1\u73b0\u670d\u52a1"},"\u901a\u8fc7\u56fa\u5b9aIP\u53d1\u73b0\u670d\u52a1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: networking.higress.io/v1\nkind: McpBridge\nmetadata:\n  name: default\n  namespace: higress-system\nspec:\n  registries:\n  - domain: "1.1.1.1:80,2.2.2.2:80"\n    name: test\n    port: 80\n    type: static\n')),(0,r.kt)("h3",{id:"\u901a\u8fc7dns\u57df\u540d\u53d1\u73b0\u670d\u52a1"},"\u901a\u8fc7DNS\u57df\u540d\u53d1\u73b0\u670d\u52a1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.higress.io/v1\nkind: McpBridge\nmetadata:\n  name: default\n  namespace: higress-system\nspec:\n  registries:\n  - domain: www.alibaba.com\n    name: alibaba\n    port: 80\n    type: dns\n")))}c.isMDXComponent=!0}}]);