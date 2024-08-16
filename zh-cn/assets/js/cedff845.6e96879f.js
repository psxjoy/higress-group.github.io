"use strict";(self.webpackChunkhigress_website=self.webpackChunkhigress_website||[]).push([[5640],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),d=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(m.Provider,{value:t},e.children)},k="mdxType",o={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},N=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),k=d(n),N=r,y=k["".concat(m,".").concat(N)]||k[N]||o[N]||l;return n?a.createElement(y,i(i({ref:t},u),{},{components:n})):a.createElement(y,i({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=N;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p[k]="string"==typeof e?e:r,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},940:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const l={title:"\u57fa\u4e8e Key \u96c6\u7fa4\u9650\u6d41",keywords:["higress","rate-limit"],description:"\u57fa\u4e8e Key \u96c6\u7fa4\u9650\u6d41\u63d2\u4ef6\u914d\u7f6e\u53c2\u8003"},i=void 0,p={unversionedId:"plugins/traffic/cluster-key-rate-limit",id:"plugins/traffic/cluster-key-rate-limit",title:"\u57fa\u4e8e Key \u96c6\u7fa4\u9650\u6d41",description:"\u57fa\u4e8e Key \u96c6\u7fa4\u9650\u6d41\u63d2\u4ef6\u914d\u7f6e\u53c2\u8003",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/plugins/traffic/cluster-key-rate-limit.md",sourceDirName:"plugins/traffic",slug:"/plugins/traffic/cluster-key-rate-limit",permalink:"/zh-cn/docs/plugins/traffic/cluster-key-rate-limit",draft:!1,editUrl:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/plugins/traffic/cluster-key-rate-limit.md",tags:[],version:"current",frontMatter:{title:"\u57fa\u4e8e Key \u96c6\u7fa4\u9650\u6d41",keywords:["higress","rate-limit"],description:"\u57fa\u4e8e Key \u96c6\u7fa4\u9650\u6d41\u63d2\u4ef6\u914d\u7f6e\u53c2\u8003"},sidebar:"docs",previous:{title:"\u57fa\u4e8e Key \u9650\u6d41",permalink:"/zh-cn/docs/plugins/traffic/key-rate-limit"},next:{title:"IP \u9650\u5236",permalink:"/zh-cn/docs/plugins/traffic/ip-restriction"}},m={},d=[{value:"\u529f\u80fd\u8bf4\u660e",id:"\u529f\u80fd\u8bf4\u660e",level:2},{value:"\u914d\u7f6e\u8bf4\u660e",id:"\u914d\u7f6e\u8bf4\u660e",level:2},{value:"\u914d\u7f6e\u793a\u4f8b",id:"\u914d\u7f6e\u793a\u4f8b",level:2},{value:"\u8bc6\u522b\u8bf7\u6c42\u53c2\u6570 apikey\uff0c\u8fdb\u884c\u533a\u522b\u9650\u6d41",id:"\u8bc6\u522b\u8bf7\u6c42\u53c2\u6570-apikey\u8fdb\u884c\u533a\u522b\u9650\u6d41",level:3},{value:"\u8bc6\u522b\u8bf7\u6c42\u5934 x-ca-key\uff0c\u8fdb\u884c\u533a\u522b\u9650\u6d41",id:"\u8bc6\u522b\u8bf7\u6c42\u5934-x-ca-key\u8fdb\u884c\u533a\u522b\u9650\u6d41",level:3},{value:"\u6839\u636e\u8bf7\u6c42\u5934 x-forwarded-for \u83b7\u53d6\u5bf9\u7aef IP\uff0c\u8fdb\u884c\u533a\u522b\u9650\u6d41",id:"\u6839\u636e\u8bf7\u6c42\u5934-x-forwarded-for-\u83b7\u53d6\u5bf9\u7aef-ip\u8fdb\u884c\u533a\u522b\u9650\u6d41",level:3},{value:"\u8bc6\u522b consumer\uff0c\u8fdb\u884c\u533a\u522b\u9650\u6d41",id:"\u8bc6\u522b-consumer\u8fdb\u884c\u533a\u522b\u9650\u6d41",level:3},{value:"\u8bc6\u522b Cookie \u4e2d\u7684\u952e\u503c\u5bf9\uff0c\u8fdb\u884c\u533a\u522b\u9650\u6d41",id:"\u8bc6\u522b-cookie-\u4e2d\u7684\u952e\u503c\u5bf9\u8fdb\u884c\u533a\u522b\u9650\u6d41",level:3}],u={toc:d},k="wrapper";function o(e){let{components:t,...n}=e;return(0,r.kt)(k,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u529f\u80fd\u8bf4\u660e"},"\u529f\u80fd\u8bf4\u660e"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"cluster-key-rate-limit")," \u63d2\u4ef6\u57fa\u4e8e Redis \u5b9e\u73b0\u96c6\u7fa4\u9650\u6d41\uff0c\u9002\u7528\u4e8e\u9700\u8981\u8de8\u591a\u4e2a Higress Gateway \u5b9e\u4f8b\u5b9e\u73b0\u5168\u5c40\u4e00\u81f4\u901f\u7387\u9650\u5236\u7684\u573a\u666f\u3002\n\u9650\u6d41\u6240\u4f7f\u7528\u7684 Key \u53ef\u4ee5\u6765\u6e90\u4e8e URL \u53c2\u6570\u3001HTTP \u8bf7\u6c42\u5934\u3001\u5ba2\u6237\u7aef IP \u5730\u5740\u3001\u6d88\u8d39\u8005\u540d\u79f0\u6216 Cookie \u4e2d\u7684 Key\u3002"),(0,r.kt)("h2",{id:"\u914d\u7f6e\u8bf4\u660e"},"\u914d\u7f6e\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rule_name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9650\u6d41\u89c4\u5219\u540d\u79f0\uff0c\u6839\u636e\u9650\u6d41\u89c4\u5219\u540d\u79f0 + \u9650\u6d41\u7c7b\u578b + \u9650\u6d41 key \u540d\u79f0 + \u9650\u6d41 key \u5bf9\u5e94\u7684\u5b9e\u9645\u503c\u6765\u62fc\u88c5 redis key")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rule_items"),(0,r.kt)("td",{parentName:"tr",align:null},"array of object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9650\u6d41\u89c4\u5219\u9879\uff0c\u6309\u7167 rule_items \u4e0b\u7684\u6392\u5217\u987a\u5e8f\uff0c\u5339\u914d\u7b2c\u4e00\u4e2a rule_item \u540e\u547d\u4e2d\u9650\u6d41\u89c4\u5219\uff0c\u540e\u7eed\u89c4\u5219\u5c06\u88ab\u5ffd\u7565")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"show_limit_quota_header"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"\u54cd\u5e94\u5934\u4e2d\u662f\u5426\u663e\u793a ",(0,r.kt)("inlineCode",{parentName:"td"},"X-RateLimit-Limit"),"\uff08\u9650\u5236\u7684\u603b\u8bf7\u6c42\u6570\uff09\u548c ",(0,r.kt)("inlineCode",{parentName:"td"},"X-RateLimit-Remaining"),"\uff08\u5269\u4f59\u8fd8\u53ef\u4ee5\u53d1\u9001\u7684\u8bf7\u6c42\u6570\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rejected_code"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"429"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u88ab\u9650\u6d41\u65f6\uff0c\u8fd4\u56de\u7684 HTTP \u72b6\u6001\u7801")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rejected_msg"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"Too many requests"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u88ab\u9650\u6d41\u65f6\uff0c\u8fd4\u56de\u7684\u54cd\u5e94\u4f53")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"redis"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"redis \u76f8\u5173\u914d\u7f6e")))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"rule_items")," \u4e2d\u6bcf\u4e00\u9879\u7684\u914d\u7f6e\u5b57\u6bb5\u8bf4\u660e\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"limit_by_header"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"limit_by_*")," \u4e2d\u9009\u586b\u4e00\u9879"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e\u83b7\u53d6\u9650\u6d41\u952e\u503c\u7684\u6765\u6e90 HTTP \u8bf7\u6c42\u5934\u540d\u79f0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"limit_by_param"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"limit_by_*")," \u4e2d\u9009\u586b\u4e00\u9879"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e\u83b7\u53d6\u9650\u6d41\u952e\u503c\u7684\u6765\u6e90 URL \u53c2\u6570\u540d\u79f0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"limit_by_consumer"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"limit_by_*")," \u4e2d\u9009\u586b\u4e00\u9879"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6839\u636e consumer \u540d\u79f0\u8fdb\u884c\u9650\u6d41\uff0c\u65e0\u9700\u6dfb\u52a0\u5b9e\u9645\u503c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"limit_by_cookie"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"limit_by_*")," \u4e2d\u9009\u586b\u4e00\u9879"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e\u83b7\u53d6\u9650\u6d41\u952e\u503c\u7684\u6765\u6e90 Cookie\u4e2d key \u540d\u79f0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"limit_by_per_header"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"limit_by_*")," \u4e2d\u9009\u586b\u4e00\u9879"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6309\u89c4\u5219\u5339\u914d\u7279\u5b9a HTTP \u8bf7\u6c42\u5934\uff0c\u5e76\u5bf9\u6bcf\u4e2a\u8bf7\u6c42\u5934\u5206\u522b\u8ba1\u7b97\u9650\u6d41\uff0c\u914d\u7f6e\u83b7\u53d6\u9650\u6d41\u952e\u503c\u7684\u6765\u6e90 HTTP \u8bf7\u6c42\u5934\u540d\u79f0\uff0c\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"td"},"limit_keys")," \u65f6\u652f\u6301\u6b63\u5219\u8868\u8fbe\u5f0f\u6216 ",(0,r.kt)("inlineCode",{parentName:"td"},"*"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"limit_by_per_param"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"limit_by_*")," \u4e2d\u9009\u586b\u4e00\u9879"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6309\u89c4\u5219\u5339\u914d\u7279\u5b9a URL \u53c2\u6570\uff0c\u5e76\u5bf9\u6bcf\u4e2a\u53c2\u6570\u5206\u522b\u8ba1\u7b97\u9650\u6d41\uff0c\u914d\u7f6e\u83b7\u53d6\u9650\u6d41\u952e\u503c\u7684\u6765\u6e90 URL \u53c2\u6570\u540d\u79f0\uff0c\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"td"},"limit_keys")," \u65f6\u652f\u6301\u6b63\u5219\u8868\u8fbe\u5f0f\u6216 ",(0,r.kt)("inlineCode",{parentName:"td"},"*"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"limit_by_per_consumer"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"limit_by_*")," \u4e2d\u9009\u586b\u4e00\u9879"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6309\u89c4\u5219\u5339\u914d\u7279\u5b9a consumer\uff0c\u5e76\u5bf9\u6bcf\u4e2a consumer \u5206\u522b\u8ba1\u7b97\u9650\u6d41\uff0c\u6839\u636e consumer \u540d\u79f0\u8fdb\u884c\u9650\u6d41\uff0c\u65e0\u9700\u6dfb\u52a0\u5b9e\u9645\u503c\uff0c\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"td"},"limit_keys")," \u65f6\u652f\u6301\u6b63\u5219\u8868\u8fbe\u5f0f\u6216 ",(0,r.kt)("inlineCode",{parentName:"td"},"*"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"limit_by_per_cookie"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"limit_by_*")," \u4e2d\u9009\u586b\u4e00\u9879"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6309\u89c4\u5219\u5339\u914d\u7279\u5b9a Cookie\uff0c\u5e76\u5bf9\u6bcf\u4e2a Cookie \u5206\u522b\u8ba1\u7b97\u9650\u6d41\uff0c\u914d\u7f6e\u83b7\u53d6\u9650\u6d41\u952e\u503c\u7684\u6765\u6e90 Cookie\u4e2d key \u540d\u79f0\uff0c\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"td"},"limit_keys")," \u65f6\u652f\u6301\u6b63\u5219\u8868\u8fbe\u5f0f\u6216 ",(0,r.kt)("inlineCode",{parentName:"td"},"*"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"limit_by_per_ip"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"limit_by_*")," \u4e2d\u9009\u586b\u4e00\u9879"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6309\u89c4\u5219\u5339\u914d\u7279\u5b9a IP\uff0c\u5e76\u5bf9\u6bcf\u4e2a IP \u5206\u522b\u8ba1\u7b97\u9650\u6d41\uff0c\u914d\u7f6e\u83b7\u53d6\u9650\u6d41\u952e\u503c\u7684\u6765\u6e90 IP \u53c2\u6570\u540d\u79f0\uff0c\u4ece\u8bf7\u6c42\u5934\u83b7\u53d6\uff0c\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"td"},"from-header-\u5bf9\u5e94\u7684header\u540d"),"\uff0c\u793a\u4f8b\uff1a",(0,r.kt)("inlineCode",{parentName:"td"},"from-header-x-forwarded-for"),"\uff0c\u76f4\u63a5\u83b7\u53d6\u5bf9\u7aef socket ip\uff0c\u914d\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"from-remote-addr"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"limit_keys"),(0,r.kt)("td",{parentName:"tr",align:null},"array of object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e\u5339\u914d\u952e\u503c\u540e\u7684\u9650\u6d41\u6b21\u6570")))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"limit_keys")," \u4e2d\u6bcf\u4e00\u9879\u7684\u914d\u7f6e\u5b57\u6bb5\u8bf4\u660e\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5339\u914d\u7684\u952e\u503c\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"limit_by_per_header"),",",(0,r.kt)("inlineCode",{parentName:"td"},"limit_by_per_param"),",",(0,r.kt)("inlineCode",{parentName:"td"},"limit_by_per_consumer"),",",(0,r.kt)("inlineCode",{parentName:"td"},"limit_by_per_cookie")," \u7c7b\u578b\u652f\u6301\u914d\u7f6e\u6b63\u5219\u8868\u8fbe\u5f0f\uff08\u4ee5regexp:\u5f00\u5934\u540e\u9762\u8ddf\u6b63\u5219\u8868\u8fbe\u5f0f\uff09\u6216\u8005",(0,r.kt)("em",{parentName:"td"},"\uff08\u4ee3\u8868\u6240\u6709\uff09\uff0c\u6b63\u5219\u8868\u8fbe\u5f0f\u793a\u4f8b\uff1a`regexp:^d."),(0,r.kt)("inlineCode",{parentName:"td"},"\uff08\u4ee5d\u5f00\u5934\u7684\u6240\u6709\u5b57\u7b26\u4e32\uff09\uff1b"),"limit_by_per_ip`\u652f\u6301\u914d\u7f6e IP \u5730\u5740\u6216 IP \u6bb5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"query_per_second"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"query_per_second"),",",(0,r.kt)("inlineCode",{parentName:"td"},"query_per_minute"),",",(0,r.kt)("inlineCode",{parentName:"td"},"query_per_hour"),",",(0,r.kt)("inlineCode",{parentName:"td"},"query_per_day")," \u4e2d\u9009\u586b\u4e00\u9879"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u6bcf\u79d2\u8bf7\u6c42\u6b21\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"query_per_minute"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"query_per_second"),",",(0,r.kt)("inlineCode",{parentName:"td"},"query_per_minute"),",",(0,r.kt)("inlineCode",{parentName:"td"},"query_per_hour"),",",(0,r.kt)("inlineCode",{parentName:"td"},"query_per_day")," \u4e2d\u9009\u586b\u4e00\u9879"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u6bcf\u5206\u949f\u8bf7\u6c42\u6b21\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"query_per_hour"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"query_per_second"),",",(0,r.kt)("inlineCode",{parentName:"td"},"query_per_minute"),",",(0,r.kt)("inlineCode",{parentName:"td"},"query_per_hour"),",",(0,r.kt)("inlineCode",{parentName:"td"},"query_per_day")," \u4e2d\u9009\u586b\u4e00\u9879"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u6bcf\u5c0f\u65f6\u8bf7\u6c42\u6b21\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"query_per_day"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"query_per_second"),",",(0,r.kt)("inlineCode",{parentName:"td"},"query_per_minute"),",",(0,r.kt)("inlineCode",{parentName:"td"},"query_per_hour"),",",(0,r.kt)("inlineCode",{parentName:"td"},"query_per_day")," \u4e2d\u9009\u586b\u4e00\u9879"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u6bcf\u5929\u8bf7\u6c42\u6b21\u6570")))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"redis")," \u4e2d\u6bcf\u4e00\u9879\u7684\u914d\u7f6e\u5b57\u6bb5\u8bf4\u660e\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"service_name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5fc5\u586b"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"redis \u670d\u52a1\u540d\u79f0\uff0c\u5e26\u670d\u52a1\u7c7b\u578b\u7684\u5b8c\u6574 FQDN \u540d\u79f0\uff0c\u4f8b\u5982 my-redis.dns\u3001redis.my-ns.svc.cluster.local")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"service_port"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1\u7c7b\u578b\u4e3a\u56fa\u5b9a\u5730\u5740\uff08static service\uff09\u9ed8\u8ba4\u503c\u4e3a80\uff0c\u5176\u4ed6\u4e3a6379"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8f93\u5165redis\u670d\u52a1\u7684\u670d\u52a1\u7aef\u53e3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"username"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"redis \u7528\u6237\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"password"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"redis \u5bc6\u7801")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"1000"),(0,r.kt)("td",{parentName:"tr",align:null},"redis \u8fde\u63a5\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u6beb\u79d2")))),(0,r.kt)("h2",{id:"\u914d\u7f6e\u793a\u4f8b"},"\u914d\u7f6e\u793a\u4f8b"),(0,r.kt)("h3",{id:"\u8bc6\u522b\u8bf7\u6c42\u53c2\u6570-apikey\u8fdb\u884c\u533a\u522b\u9650\u6d41"},"\u8bc6\u522b\u8bf7\u6c42\u53c2\u6570 apikey\uff0c\u8fdb\u884c\u533a\u522b\u9650\u6d41"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'rule_name: default_rule\nrule_items:\n- limit_by_param: apikey\n  limit_keys:\n  - key: 9a342114-ba8a-11ec-b1bf-00163e1250b5\n    query_per_minute: 10\n  - key: a6a6d7f2-ba8a-11ec-bec2-00163e1250b5\n    query_per_hour: 100\n- limit_by_per_param: apikey\n  limit_keys:\n  # \u6b63\u5219\u8868\u8fbe\u5f0f\uff0c\u5339\u914d\u4ee5 a \u5f00\u5934\u7684\u6240\u6709\u5b57\u7b26\u4e32\uff0c\u6bcf\u4e2a apikey \u5bf9\u5e94\u7684\u8bf7\u6c42 10qds\n  - key: "regexp:^a.*"\n    query_per_second: 10\n  # \u6b63\u5219\u8868\u8fbe\u5f0f\uff0c\u5339\u914d\u4ee5 b \u5f00\u5934\u7684\u6240\u6709\u5b57\u7b26\u4e32\uff0c\u6bcf\u4e2a apikey \u5bf9\u5e94\u7684\u8bf7\u6c42 100qd\n  - key: "regexp:^b.*"\n    query_per_minute: 100\n  # \u515c\u5e95\u7528\uff0c\u5339\u914d\u6240\u6709\u8bf7\u6c42\uff0c\u6bcf\u4e2a apikey \u5bf9\u5e94\u7684\u8bf7\u6c42 1000qdh\n  - key: "*"\n    query_per_hour: 1000\nredis:\n  service_name: redis.static\nshow_limit_quota_header: true\n')),(0,r.kt)("h3",{id:"\u8bc6\u522b\u8bf7\u6c42\u5934-x-ca-key\u8fdb\u884c\u533a\u522b\u9650\u6d41"},"\u8bc6\u522b\u8bf7\u6c42\u5934 x-ca-key\uff0c\u8fdb\u884c\u533a\u522b\u9650\u6d41"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'rule_name: default_rule\nrule_items:\n- limit_by_header: x-ca-key\n  limit_keys:\n  - key: 102234\n    query_per_minute: 10\n  - key: 308239\n    query_per_hour: 10\n- limit_by_per_header: x-ca-key\n  limit_keys:\n  # \u6b63\u5219\u8868\u8fbe\u5f0f\uff0c\u5339\u914d\u4ee5 a \u5f00\u5934\u7684\u6240\u6709\u5b57\u7b26\u4e32\uff0c\u6bcf\u4e2a apikey \u5bf9\u5e94\u7684\u8bf7\u6c42 10qds\n  - key: "regexp:^a.*"\n    query_per_second: 10\n  # \u6b63\u5219\u8868\u8fbe\u5f0f\uff0c\u5339\u914d\u4ee5b\u5f00\u5934\u7684\u6240\u6709\u5b57\u7b26\u4e32\uff0c\u6bcf\u4e2a apikey \u5bf9\u5e94\u7684\u8bf7\u6c42 100qd\n  - key: "regexp:^b.*"\n    query_per_minute: 100\n  # \u515c\u5e95\u7528\uff0c\u5339\u914d\u6240\u6709\u8bf7\u6c42\uff0c\u6bcf\u4e2a apikey \u5bf9\u5e94\u7684\u8bf7\u6c42 1000qdh\n  - key: "*"\n    query_per_hour: 1000            \nredis:\n  service_name: redis.static\nshow_limit_quota_header: true\n')),(0,r.kt)("h3",{id:"\u6839\u636e\u8bf7\u6c42\u5934-x-forwarded-for-\u83b7\u53d6\u5bf9\u7aef-ip\u8fdb\u884c\u533a\u522b\u9650\u6d41"},"\u6839\u636e\u8bf7\u6c42\u5934 x-forwarded-for \u83b7\u53d6\u5bf9\u7aef IP\uff0c\u8fdb\u884c\u533a\u522b\u9650\u6d41"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"rule_name: default_rule\nrule_items:\n- limit_by_per_ip: from-header-x-forwarded-for\n  limit_keys:\n  # \u7cbe\u786e IP\n  - key: 1.1.1.1\n    query_per_day: 10\n  # IP \u6bb5\uff0c\u7b26\u5408\u8fd9\u4e2a IP \u6bb5\u7684 IP\uff0c\u6bcf\u4e2a IP 100qpd\n  - key: 1.1.1.0/24\n    query_per_day: 100\n  # \u515c\u5e95\u7528\uff0c\u5373\u9ed8\u8ba4\u6bcf\u4e2a IP 1000 qpd\n  - key: 0.0.0.0/0\n    query_per_day: 1000\nredis:\n  service_name: redis.static\nshow_limit_quota_header: true\n")),(0,r.kt)("h3",{id:"\u8bc6\u522b-consumer\u8fdb\u884c\u533a\u522b\u9650\u6d41"},"\u8bc6\u522b consumer\uff0c\u8fdb\u884c\u533a\u522b\u9650\u6d41"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'rule_name: default_rule\nrule_items:\n- limit_by_consumer: \'\'\n  limit_keys:\n  - key: consumer1\n    query_per_second: 10\n  - key: consumer2\n    query_per_hour: 100\n- limit_by_per_consumer: \'\'\n  limit_keys:\n  # \u6b63\u5219\u8868\u8fbe\u5f0f\uff0c\u5339\u914d\u4ee5 a \u5f00\u5934\u7684\u6240\u6709\u5b57\u7b26\u4e32\uff0c\u6bcf\u4e2a consumer \u5bf9\u5e94\u7684\u8bf7\u6c42 10qds\n  - key: "regexp:^a.*"\n    query_per_second: 10\n  # \u6b63\u5219\u8868\u8fbe\u5f0f\uff0c\u5339\u914d\u4ee5 b \u5f00\u5934\u7684\u6240\u6709\u5b57\u7b26\u4e32\uff0c\u6bcf\u4e2a consumer \u5bf9\u5e94\u7684\u8bf7\u6c42 100qd\n  - key: "regexp:^b.*"\n    query_per_minute: 100\n  # \u515c\u5e95\u7528\uff0c\u5339\u914d\u6240\u6709\u8bf7\u6c42\uff0c\u6bcf\u4e2a consumer \u5bf9\u5e94\u7684\u8bf7\u6c42 1000qdh\n  - key: "*"\n    query_per_hour: 1000     \nredis:\n  service_name: redis.static\nshow_limit_quota_header: true \n')),(0,r.kt)("h3",{id:"\u8bc6\u522b-cookie-\u4e2d\u7684\u952e\u503c\u5bf9\u8fdb\u884c\u533a\u522b\u9650\u6d41"},"\u8bc6\u522b Cookie \u4e2d\u7684\u952e\u503c\u5bf9\uff0c\u8fdb\u884c\u533a\u522b\u9650\u6d41"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'rule_name: default_rule\nrule_items:\n- limit_by_cookie: key1\n  limit_keys:\n  - key: value1\n    query_per_minute: 10\n  - key: value2\n    query_per_hour: 100\n- limit_by_per_cookie: key1\n  limit_keys:\n  # \u6b63\u5219\u8868\u8fbe\u5f0f\uff0c\u5339\u914d\u4ee5 a \u5f00\u5934\u7684\u6240\u6709\u5b57\u7b26\u4e32\uff0c\u6bcf\u4e2a cookie \u4e2d\u7684 value \u5bf9\u5e94\u7684\u8bf7\u6c42 10qds\n  - key: "regexp:^a.*"\n    query_per_second: 10\n  # \u6b63\u5219\u8868\u8fbe\u5f0f\uff0c\u5339\u914d\u4ee5 b \u5f00\u5934\u7684\u6240\u6709\u5b57\u7b26\u4e32\uff0c\u6bcf\u4e2a cookie \u4e2d\u7684 value \u5bf9\u5e94\u7684\u8bf7\u6c42 100qd\n  - key: "regexp:^b.*"\n    query_per_minute: 100\n  # \u515c\u5e95\u7528\uff0c\u5339\u914d\u6240\u6709\u8bf7\u6c42\uff0c\u6bcf\u4e2a cookie \u4e2d\u7684 value \u5bf9\u5e94\u7684\u8bf7\u6c42 1000qdh\n  - key: "*"\n    query_per_hour: 1000 \nrejected_code: 200\nrejected_msg: \'{"code":-1,"msg":"Too many requests"}\'\nredis:\n  service_name: redis.static\nshow_limit_quota_header: true\n')))}o.isMDXComponent=!0}}]);