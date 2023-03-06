"use strict";(self.webpackChunkhigress_website=self.webpackChunkhigress_website||[]).push([[2271],{3905:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>c});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=a.createContext({}),s=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},d=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},m="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},f=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),m=s(r),f=n,c=m["".concat(p,".").concat(f)]||m[f]||g[f]||l;return r?a.createElement(c,o(o({ref:e},d),{},{components:r})):a.createElement(c,o({ref:e},d))}));function c(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,o=new Array(l);o[0]=f;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[m]="string"==typeof t?t:n,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5626:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const l={title:"\u65e5\u5fd7\u8bf4\u660e",keywords:["higress","log"],description:"Higress \u65e5\u5fd7\u8bf4\u660e.",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/master/i18n/zh-cn/docusaurus-plugin-content-docs/current/ops/log.md"},o="\u65e5\u5fd7\u8bf4\u660e",i={unversionedId:"ops/log",id:"ops/log",title:"\u65e5\u5fd7\u8bf4\u660e",description:"Higress \u65e5\u5fd7\u8bf4\u660e.",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/ops/log.md",sourceDirName:"ops",slug:"/ops/log",permalink:"/docs/ops/log",draft:!1,editUrl:"https://github.com/higress-group/higress-group.github.io/blob/master/i18n/zh-cn/docusaurus-plugin-content-docs/current/ops/log.md",tags:[],version:"current",frontMatter:{title:"\u65e5\u5fd7\u8bf4\u660e",keywords:["higress","log"],description:"Higress \u65e5\u5fd7\u8bf4\u660e.",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/master/i18n/zh-cn/docusaurus-plugin-content-docs/current/ops/log.md"},sidebar:"docs",previous:{title:"\u7248\u672c\u5347\u7ea7",permalink:"/docs/ops/upgrade"},next:{title:"\u6e90\u7801\u9605\u8bfb\u6307\u5f15",permalink:"/docs/dev/code"}},p={},s=[],d={toc:s},m="wrapper";function g(t){let{components:e,...r}=t;return(0,n.kt)(m,(0,a.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u65e5\u5fd7\u8bf4\u660e"},"\u65e5\u5fd7\u8bf4\u660e"),(0,n.kt)("p",null,"Higress \u9ed8\u8ba4\u4f7f\u7528\u7684\u65e5\u5fd7\u683c\u5f0f\u4e3a JSON \u683c\u5f0f\uff0c\u5982\u4e0b\u6240\u793a:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "authority": "%REQ(:AUTHORITY)%",\n    "bytes_received": "%BYTES_RECEIVED%",\n    "bytes_sent": "%BYTES_SENT%",\n    "downstream_local_address": "%DOWNSTREAM_LOCAL_ADDRESS%",\n    "downstream_remote_address": "%DOWNSTREAM_REMOTE_ADDRESS%",\n    "duration": "%DURATION%",\n    "method": "%REQ(:METHOD)%",\n    "path": "%REQ(X-ENVOY-ORIGINAL-PATH?:PATH)%",\n    "protocol": "%PROTOCOL%",\n    "request_id": "%REQ(X-REQUEST-ID)%",\n    "requested_server_name": "%REQUESTED_SERVER_NAME%",\n    "response_code": "%RESPONSE_CODE%",\n    "response_flags": "%RESPONSE_FLAGS%",\n    "route_name": "%ROUTE_NAME%",\n    "start_time": "%START_TIME%",\n    "trace_id": "%REQ(X-B3-TRACEID)%",\n    "upstream_cluster": "%UPSTREAM_CLUSTER%",\n    "upstream_host": "%UPSTREAM_HOST%",\n    "upstream_local_address": "%UPSTREAM_LOCAL_ADDRESS%",\n    "upstream_service_time": "%RESP(X-ENVOY-UPSTREAM-SERVICE-TIME)%",\n    "upstream_transport_failure_reason": "%UPSTREAM_TRANSPORT_FAILURE_REASON%",\n    "user_agent": "%REQ(USER-AGENT)%",\n    "x_forwarded_for": "%REQ(X-FORWARDED-FOR)%"\n}\n')),(0,n.kt)("p",null,"Value \u7684\u914d\u7f6e\u542b\u4e49\u53ef\u4ee5\u53c2\u8003",(0,n.kt)("a",{parentName:"p",href:"https://www.envoyproxy.io/docs/envoy/latest/configuration/observability/access_log/usage#config-access-log"}," envoy \u65e5\u5fd7\u8bf4\u660e")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u5b57\u6bb5\u540d"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u542b\u4e49"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"authority"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u6c42\u62a5\u6587\u4e2d\u7684Host Header\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"bytes_received"),(0,n.kt)("td",{parentName:"tr",align:"left"},"long"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u6c42\u7684Body\u5927\u5c0f\uff08\u4e0d\u5305\u542bHeader\uff09\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"bytes_sent"),(0,n.kt)("td",{parentName:"tr",align:"left"},"long"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u54cd\u5e94\u7684Body\u5927\u5c0f\uff08\u4e0d\u5305\u542bHeader\uff09\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"downstream_local_address"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7f51\u5173Pod\u5730\u5740\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"downstream_remote_address"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8fde\u63a5\u5230\u7f51\u5173\u7684Client\u7aef\u5730\u5740\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"duration"),(0,n.kt)("td",{parentName:"tr",align:"left"},"long"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u6c42\u6574\u4f53\u8017\u65f6\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"method"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"HTTP\u65b9\u6cd5\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"path"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"HTTP\u8bf7\u6c42\u4e2d\u7684Path\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"protocol"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"HTTP\u7684\u534f\u8bae\u7248\u672c\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"request_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7f51\u5173\u4f1a\u4e3a\u6bcf\u6b21\u8bf7\u6c42\u4ea7\u751f\u4e00\u4e2aID\uff0c\u5e76\u653e\u5728Header\u7684x-request-id\u4e2d\uff0c\u540e\u7aef\u53ef\u4ee5\u6839\u636e\u8fd9\u4e2a\u5b57\u6bb5\u8bb0\u5f55\u5e76\u8fdb\u884c\u6392\u67e5\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"requested_server_name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSL\u8fde\u63a5\u65f6\u4f7f\u7528\u7684Server Name\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"response_code"),(0,n.kt)("td",{parentName:"tr",align:"left"},"long"),(0,n.kt)("td",{parentName:"tr",align:"left"},"HTTP\u54cd\u5e94\u7684\u72b6\u6001\u7801\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"response_flags"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u54cd\u5e94\u5931\u8d25\u7684\u539f\u56e0\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"route_name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8def\u7531\u540d\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"start_time"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u6c42\u5f00\u59cb\u65f6\u95f4\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"trace_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Trace ID\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"upstream_cluster"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u4e0a\u6e38\u96c6\u7fa4\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"upstream_host"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u4e0a\u6e38IP\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"upstream_local_address"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u672c\u5730\u8fde\u63a5\u4e0a\u6e38\u7684\u5730\u5740\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"upstream_service_time"),(0,n.kt)("td",{parentName:"tr",align:"left"},"long"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6700\u540e\u4e00\u6b21\u8c03\u7528\u4e0a\u6e38\u670d\u52a1\u7684\u65f6\u95f4\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"upstream_transport_failure_reason"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u4e0a\u6e38\u94fe\u63a5\u5931\u8d25\u7684\u539f\u56e0\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"user_agent"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"HTTP Header\u4e2d\u7684UserAgent\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"x_forwarded_for"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"HTTP Header\u4e2d\u7684x-forwarded-for\uff0c\u901a\u5e38\u7528\u6765\u8868\u793aHTTP\u8bf7\u6c42\u7aef\u771f\u5b9eIP\u3002")))))}g.isMDXComponent=!0}}]);