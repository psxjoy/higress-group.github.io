"use strict";(self.webpackChunkhigress_website=self.webpackChunkhigress_website||[]).push([[9771],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=u(n),d=l,m=g["".concat(o,".").concat(d)]||g[d]||c[d]||r;return n?a.createElement(m,s(s({ref:t},p),{},{components:n})):a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[g]="string"==typeof e?e:l,s[1]=i;for(var u=2;u<r;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7348:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var a=n(7462),l=(n(7294),n(3905));const r={title:"\u6559\u7a0b\uff1a\u5982\u4f55\u5728\u672c\u5730\u8fdb\u884chigress\u8c03\u8bd5\u548c\u7aef\u5230\u7aef\u6d4b\u8bd5",keywords:["higress"],description:"\u5728\u672c\u5730\u5feb\u901f\u5b8c\u6210e2e\u6d4b\u8bd5\u5e76\u5b9e\u73b0debug\u529f\u80fd",author:"SJC",date:new Date("2023-12-19T00:00:00.000Z"),custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/en/docusaurus-plugin-content-blog/e2e-debug.md"},s=void 0,i={permalink:"/zh-cn/blog/e2e-debug",editUrl:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-blog/e2e-debug.md",source:"@site/i18n/zh-cn/docusaurus-plugin-content-blog/e2e-debug.md",title:"\u6559\u7a0b\uff1a\u5982\u4f55\u5728\u672c\u5730\u8fdb\u884chigress\u8c03\u8bd5\u548c\u7aef\u5230\u7aef\u6d4b\u8bd5",description:"\u5728\u672c\u5730\u5feb\u901f\u5b8c\u6210e2e\u6d4b\u8bd5\u5e76\u5b9e\u73b0debug\u529f\u80fd",date:"2023-12-19T00:00:00.000Z",formattedDate:"2023\u5e7412\u670819\u65e5",tags:[],readingTime:8.125,hasTruncateMarker:!1,authors:[{name:"SJC"}],frontMatter:{title:"\u6559\u7a0b\uff1a\u5982\u4f55\u5728\u672c\u5730\u8fdb\u884chigress\u8c03\u8bd5\u548c\u7aef\u5230\u7aef\u6d4b\u8bd5",keywords:["higress"],description:"\u5728\u672c\u5730\u5feb\u901f\u5b8c\u6210e2e\u6d4b\u8bd5\u5e76\u5b9e\u73b0debug\u529f\u80fd",author:"SJC",date:"2023-12-19T00:00:00.000Z",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/en/docusaurus-plugin-content-blog/e2e-debug.md"},nextItem:{title:"Higress \u56e2\u961f\u62db\u52df\u5c0f\u4f19\u4f34\u52a0\u5165\uff5e",permalink:"/zh-cn/blog/hring"}},o={authorsImageUrls:[void 0]},u=[{value:"\u80cc\u666f\u8bf4\u660e",id:"\u80cc\u666f\u8bf4\u660e",level:2},{value:"\u672c\u5730\u8c03\u8bd5",id:"\u672c\u5730\u8c03\u8bd5",level:3},{value:"\u7aef\u5230\u7aef\u6d4b\u8bd5",id:"\u7aef\u5230\u7aef\u6d4b\u8bd5",level:3},{value:"\u5f0a\u7aef",id:"\u5f0a\u7aef",level:3},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:3},{value:"\u5177\u4f53\u5b9e\u73b0",id:"\u5177\u4f53\u5b9e\u73b0",level:2},{value:"\u7aef\u5230\u7aef\u6d4b\u8bd5\u4f18\u5316",id:"\u7aef\u5230\u7aef\u6d4b\u8bd5\u4f18\u5316",level:3},{value:"\u5728e2e\u4e2d\u5b9e\u73b0\u672c\u5730\u8c03\u8bd5",id:"\u5728e2e\u4e2d\u5b9e\u73b0\u672c\u5730\u8c03\u8bd5",level:3}],p={toc:u},g="wrapper";function c(e){let{components:t,...r}=e;return(0,l.kt)(g,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u80cc\u666f\u8bf4\u660e"},"\u80cc\u666f\u8bf4\u660e"),(0,l.kt)("h3",{id:"\u672c\u5730\u8c03\u8bd5"},"\u672c\u5730\u8c03\u8bd5"),(0,l.kt)("p",null,"\u672c\u5730\u8c03\u8bd5\u65e8\u5728\u5728\u5f00\u53d1\u8005\u7684\u672c\u5730\u5f00\u53d1\u73af\u5883\u4e2d\u8bc6\u522b\u3001\u5b9a\u4f4d\u548c\u4fee\u590d\u4ee3\u7801\u4e2d\u7684\u9519\u8bef\uff08bug\uff09\u3002\u8fd9\u4e2a\u9636\u6bb5\u7684\u4e3b\u8981\u76ee\u6807\u662f\u786e\u4fdd\u5355\u4e2a\u6a21\u5757\u6216\u7ec4\u4ef6\u7684\u6b63\u786e\u6027\uff0c\u4ee5\u4fbf\u66f4\u5bb9\u6613\u7406\u89e3\u548c\u89e3\u51b3\u95ee\u9898\u3002"),(0,l.kt)("p",null,"\u5f00\u53d1\u8005\u901a\u5e38\u4f7f\u7528\u672c\u5730\u96c6\u6210\u5f00\u53d1\u73af\u5883\uff08IDE\uff09\u6216\u8c03\u8bd5\u5668\u6765\u9010\u6b65\u6267\u884c\u4ee3\u7801\u3001\u67e5\u770b\u53d8\u91cf\u7684\u503c\u3001\u89c2\u5bdf\u7a0b\u5e8f\u7684\u6d41\u7a0b\uff0c\u5e76\u901a\u8fc7\u6253\u65ad\u70b9\u6765\u68c0\u67e5\u4ee3\u7801\u7684\u6267\u884c\u8fc7\u7a0b\u3002"),(0,l.kt)("p",null,"\u672c\u5730\u8c03\u8bd5\u662f\u4e00\u4e2a\u5feb\u901f\u3001\u8fc5\u901f\u5b9a\u4f4d\u95ee\u9898\u5e76\u8fdb\u884c\u4fee\u590d\u7684\u9636\u6bb5\uff0c\u80fd\u591f\u63d0\u4f9b\u5b9e\u65f6\u7684\u53cd\u9988\u3002\u5b83\u6709\u52a9\u4e8e\u786e\u4fdd\u4ee3\u7801\u7684\u5c40\u90e8\u6b63\u786e\u6027\uff0c\u800c\u4e0d\u9700\u8981\u8003\u8651\u6574\u4e2a\u7cfb\u7edf\u7684\u4ea4\u4e92\u3002"),(0,l.kt)("h3",{id:"\u7aef\u5230\u7aef\u6d4b\u8bd5"},"\u7aef\u5230\u7aef\u6d4b\u8bd5"),(0,l.kt)("p",null,"e2e\u6d4b\u8bd5\u662f\u4e00\u79cd\u7aef\u5230\u7aef\u7684\u6d4b\u8bd5\uff0c\u662f\u4e00\u79cd\u5168\u9762\u7684\u6d4b\u8bd5\u65b9\u6cd5\uff0c\u7528\u4e8e\u9a8c\u8bc1\u6574\u4e2a\u8f6f\u4ef6\u7cfb\u7edf\u5728\u771f\u5b9e\u73af\u5883\u4e2d\u7684\u529f\u80fd\u548c\u6027\u80fd\u3002\u5b83\u6a21\u62df\u7528\u6237\u7684\u5b9e\u9645\u4f7f\u7528\u60c5\u51b5\uff0c\u786e\u4fdd\u6574\u4e2a\u7cfb\u7edf\u7684\u5404\u4e2a\u90e8\u5206\u6b63\u786e\u534f\u540c\u5de5\u4f5c\uff0c\u4ee5\u8fbe\u5230\u7528\u6237\u671f\u671b\u7684\u529f\u80fd\u3002"),(0,l.kt)("p",null,"\u7aef\u5230\u7aef\u6d4b\u8bd5\u5173\u6ce8\u6574\u4e2a\u7cfb\u7edf\u7684\u96c6\u6210\u548c\u4ea4\u4e92\uff0c\u65e8\u5728\u53d1\u73b0\u4e0d\u540c\u7ec4\u4ef6\u4e4b\u95f4\u7684\u95ee\u9898\u4ee5\u53ca\u5728\u5b9e\u9645\u4f7f\u7528\u573a\u666f\u4e2d\u53ef\u80fd\u51fa\u73b0\u7684 bug\u3002\u8fd9\u6709\u52a9\u4e8e\u786e\u4fdd\u7cfb\u7edf\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u7684\u7a33\u5b9a\u6027\u548c\u53ef\u9760\u6027\u3002"),(0,l.kt)("p",null,"\u5728higress\u4e2d\uff0ce2e\u6d4b\u8bd5\u7684\u4e3b\u8981\u6d41\u7a0b\u53ef\u7528\u4e0b\u56fe\u6765\u8868\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mermaid"},"graph LR;\n    \u5220\u9664kind\u96c6\u7fa4 --\x3e \u521b\u5efakind\u96c6\u7fa4 --\x3e \u6784\u5efa\u955c\u50cf  --\x3e \u52a0\u8f7d\u955c\u50cf --\x3e \u5b89\u88c5higress --\x3e \u8fd0\u884ce2e\u6d4b\u8bd5 --\x3e \u5220\u9664kind\u96c6\u7fa4\n")),(0,l.kt)("h3",{id:"\u5f0a\u7aef"},"\u5f0a\u7aef"),(0,l.kt)("p",null,"\u5728\u672c\u5730\u5f00\u53d1\u7684\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u9700\u8981\u9891\u7e41\u7684\u8fdb\u884ce2e\u6d4b\u8bd5\uff0c\u4f46\u662f\u6bcf\u6b21\u90fd\u8981\u91cd\u65b0\u6784\u5efa\u955c\u50cf\u3001\u52a0\u8f7d\u955c\u50cf\u3001\u5b89\u88c5higress\u3001\u8fd0\u884ce2e\u6d4b\u8bd5\uff0c\u8fd9\u6837\u7684\u8fc7\u7a0b\u975e\u5e38\u8017\u65f6\uff0c\u56e0\u6b64\u6211\u4eec\u9700\u8981\u4e00\u4e2a\u5feb\u901f\u7684\u65b9\u6cd5\u6765\u5b8c\u6210e2e\u6d4b\u8bd5\u3002\n\u53e6\u5916makefile\u547d\u4ee4\u4e0d\u652f\u6301debug\u529f\u80fd\uff0c\u6211\u4eec\u4e5f\u9700\u8981\u4e00\u4e2a\u65b9\u6cd5\u6765\u5b9e\u73b0debug\u529f\u80fd\u3002"),(0,l.kt)("h3",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848"),(0,l.kt)("p",null,"\u53ef\u5206\u4e3a\u7aef\u5230\u7aef\u6d4b\u8bd5\u7684\u4f18\u5316\u548c\u5728\u7aef\u5230\u7aef\u6d4b\u8bd5\u4e2d\u5b9e\u73b0\u672c\u5730\u8c03\u8bd5\u7684\u529f\u80fd\uff0c\u7aef\u5230\u7aef\u4f18\u5316\u53ef\u91c7\u7528\u5b9e\u73b0\u6d4b\u8bd5\u73af\u5883\u590d\u7528\u7684\u65b9\u6cd5\uff0c\u901a\u8fc7\u4fee\u6539makefile\u6587\u4ef6\u6765\u51cf\u5c11\u73af\u5883\u7684\u521b\u5efa\u7b49\u5f00\u9500\u3002"),(0,l.kt)("p",null,"\u800c\u5728\u7aef\u5230\u7aef\u6d4b\u8bd5\u4e2d\u5b9e\u73b0\u672c\u5730\u8c03\u8bd5\u7684\u529f\u80fd\uff0c\u53ef\u901a\u8fc7Goland\u6765\u5b9e\u73b0\uff0c\u63d0\u524d\u51c6\u5907\u597d\u6d4b\u8bd5\u73af\u5883\uff0c\u4fee\u6539e2e\u6d4b\u8bd5\u7684\u90e8\u5206\u4ee3\u7801\u6765\u51cf\u5c11e2e\u73af\u5883\u521b\u5efa\u7684\u5f00\u9500\uff0c\u66f4\u52a0\u65b9\u4fbf\u7684\u5b9e\u73b0debug\u529f\u80fd\u3002"),(0,l.kt)("h2",{id:"\u5177\u4f53\u5b9e\u73b0"},"\u5177\u4f53\u5b9e\u73b0"),(0,l.kt)("h3",{id:"\u7aef\u5230\u7aef\u6d4b\u8bd5\u4f18\u5316"},"\u7aef\u5230\u7aef\u6d4b\u8bd5\u4f18\u5316"),(0,l.kt)("p",null,"\u901a\u8fc7makefile\u6765\u5b8c\u6210\uff0c\u5305\u542b\u542f\u52a8\u7cfb\u5217\u73af\u5883\u548c\u6267\u884ce2e\u6d4b\u8bd5\u3002"),(0,l.kt)("p",null,"\u4ee5\u8fd0\u884c\u63d2\u4ef6\u6d4b\u8bd5\u4e3a\u4f8b\uff0c\u5176make\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-makefile"},".PHONY: higress-wasmplugin-test\nhigress-wasmplugin-test: $(tools/kind) delete-cluster create-cluster docker-build kube-load-image install-dev-wasmplugin run-higress-e2e-test-wasmplugin delete-cluster\n")),(0,l.kt)("p",null,"\u5f00\u53d1\u8005\u9996\u6b21\u8fd0\u884c\u73af\u5883\u53ef\u5148\u5220\u9664\u6700\u540e\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"delete-cluster"),"\u7684\u64cd\u4f5c\uff0c\u7b2c\u4e8c\u6b21\u8fd0\u884ce2e\u6d4b\u8bd5\u7684\u65f6\u5019\u53ef\u4ee5\u5220\u9664\u524d\u9762\u7684\u64cd\u4f5c\uff0c\u53ea\u4fdd\u7559",(0,l.kt)("inlineCode",{parentName:"p"},"run-higress-e2e-test-wasmplugin"),"\u7684\u64cd\u4f5c\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u51cf\u5c11\u5f88\u591a\u65f6\u95f4\u3002"),(0,l.kt)("p",null,"\u7136\u800cmake\u547d\u4ee4\u4e0d\u652f\u6301\u6dfb\u52a0\u5230goland\u91cc\u9762\u5b9e\u73b0debug\u529f\u80fd\uff0c\u8fd0\u884c\u51fa\u9519\u7684\u65f6\u5019\u4e5f\u4e0d\u65b9\u4fbf\u5b9a\u4f4d\u95ee\u9898\uff0c\u66f4\u63a8\u8350\u4f7f\u7528\u4e0b\u9762\u8fd9\u4e2a\u65b9\u6cd5\u3002"),(0,l.kt)("h3",{id:"\u5728e2e\u4e2d\u5b9e\u73b0\u672c\u5730\u8c03\u8bd5"},"\u5728e2e\u4e2d\u5b9e\u73b0\u672c\u5730\u8c03\u8bd5"),(0,l.kt)("p",null,"\u901a\u8fc7Goland\u6765\u5b8c\u6210\uff0c\u63d0\u524d\u51c6\u5907\u597d\u73af\u5883\uff0c\u4fee\u6539Goland\u542f\u52a8\u53c2\u6570\u6765\u5b8c\u6210\u672c\u5730\u8c03\u8bd5\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"e2e\u6d4b\u8bd5\u4e4b\u524d\u7684\u51c6\u5907")),(0,l.kt)("p",null,"\u6839\u636e\u5404\u81ea\u7684\u9700\u6c42\u6765\u5b9a\u5236\u73af\u5883\uff0c\u5982\u679c\u6d4b\u8bd5\u73af\u5883\u4e2d\u9700\u8981\u7528\u5230higress\u7684controller\u3001gateway\u7b49\u7ec4\u4ef6\uff0c\u9700\u8981\u63d0\u524d\u672c\u5730\u5b89\u88c5\u597d\u73af\u5883\uff0c\u5b89\u88c5\u6559\u7a0b\u53ef\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"https://higress.io/zh-cn/docs/user/quickstart/"},"\u8fd9\u91cc"),"\u3002"),(0,l.kt)("p",null,"\u4f7f\u7528helm\u5b89\u88c5\u597dhigress\u540e\uff0c\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u6765\u67e5\u770bhigress\u7684pod\u662f\u5426\u6b63\u5e38\u8fd0\u884c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get pods --all-namespaces\n")),(0,l.kt)("p",null,"\u663e\u793a\u7ed3\u679c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"1.png",src:n(1286).Z,width:"980",height:"136"})),(0,l.kt)("p",null,"\u90fd\u663e\u793aRunning\u72b6\u6001\uff0c\u8bf4\u660ehigress\u5df2\u7ecf\u6b63\u5e38\u8fd0\u884c\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"e2e\u7684flag\u4fee\u6539")),(0,l.kt)("p",null,"\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"test/e2e/conformance/utils/flags"),"\u76ee\u5f55\u4e0b\uff0c\u6709\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"flags.go"),"\u6587\u4ef6\uff0c\u91cc\u9762\u5b9a\u4e49\u4e86e2e\u6d4b\u8bd5\u7684flag\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'var (\n    IngressClassName     = flag.String("ingress-class", "higress", "Name of IngressClass to use for tests")\n    ShowDebug            = flag.Bool("debug", false, "Whether to print debug logs")\n    CleanupBaseResources = flag.Bool("cleanup-base-resources", true, "Whether to cleanup base test resources after the run")\n    SupportedFeatures    = flag.String("supported-features", "", "Supported features included in conformance tests suites")\n    ExemptFeatures       = flag.String("exempt-features", "", "Exempt Features excluded from conformance tests suites")\n    IsWasmPluginTest     = flag.Bool("isWasmPluginTest", false, "Determine if run wasm plugin conformance test")\n    WasmPluginType       = flag.String("wasmPluginType", "GO", "Define wasm plugin type, currently supports GO, CPP")\n    WasmPluginName       = flag.String("wasmPluginName", "", "Define wasm plugin name")\n    IsEnvoyConfigTest    = flag.Bool("isEnvoyConfigTest", false, "Determine if run envoy config conformance test")\n)\n')),(0,l.kt)("p",null,"\u53ef\u4e34\u65f6\u4fee\u6539\u8fd9\u4e9bflag\u7684\u521d\u59cb\u503c\uff0c\u4e5f\u53ef\u4ee5\u5728Goland\u7f16\u8f91\u5668\u4e2d\u5b9a\u4e49\u542f\u52a8\u53c2\u6570\uff0c\u4f8b\u5982\u8bbe\u7f6e",(0,l.kt)("inlineCode",{parentName:"p"},"IsWasmPluginTest"),"\u4e3atrue\u53ef\u53ea\u8fd0\u884cwasm\u63d2\u4ef6\u7684e2e\u6d4b\u8bd5\u3002"),(0,l.kt)("p",null,"\u4fee\u6539\u597dflag\u4e4b\u540e\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u5728Goland\u4e2d\u901a\u8fc7debug\u7684\u65b9\u5f0f\u8fd0\u884ce2e\u6d4b\u8bd5\u3002\u53ef\u5148\u5728\u5982\u4e0b\u4f4d\u7f6e\u6dfb\u52a0\u4e00\u4e2a\u65ad\u70b9\uff0c\u7b49\u5f85e2e\u73af\u5883\u51c6\u5907\u5b8c\u6bd5\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"2.png",src:n(2601).Z,width:"1335",height:"987"})),(0,l.kt)("p",null,"e2e\u6d4b\u8bd5\u5728\u524d\u671f\u73af\u5883\u51c6\u5907\u7684\u8fc7\u7a0b\u4e2d\u4f1a\u521b\u5efa\u4e00\u4e9bnamespace\u5e76\u542f\u52a8\u4e00\u4e9bpod\uff0c\u53ef\u4ee5\u624b\u52a8\u67e5\u770b\u4e00\u4e0bpod\u7684\u542f\u52a8\u60c5\u51b5\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img.png",src:n(8020).Z,width:"1201",height:"605"})),(0,l.kt)("p",null,"\u5728\u8fd9\u5f20\u56fe\u91cc\u9762\uff0c\u9664\u4e86\u6211\u4eec\u63d0\u524d\u5b89\u88c5\u597d\u7684higress\u7ec4\u4ef6\u4e4b\u5916\uff0c\u8fd8\u6709\u4e00\u4e9b\u5176\u4ed6\u7684pod\uff0c\u8fd9\u4e9bpod\u662fe2e\u6d4b\u8bd5\u8fc7\u7a0b\u4e2d\u521b\u5efa\u7684\uff0c\u5982\u679c\u6709\u4e9bpod\u5728\u672c\u5730e2e\u6d4b\u8bd5\u4e2d\u7528\u4e0d\u5230\uff0c\u53ef\u624b\u52a8\u4fee\u6539\u4ee3\u7801\u6765\u51cf\u5c11\u524d\u671f\u73af\u5883\u7684\u51c6\u5907\u65f6\u95f4\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u5982\u679c\u8bbe\u7f6e\u4e86cleanup-base-resources\u4e3afalse\uff0c\u90a3\u4e48e2e\u6d4b\u8bd5\u7ed3\u675f\u4e4b\u540e\uff0c\u8fd9\u4e9bpod\u4e0d\u4f1a\u88ab\u5220\u9664\uff0c\u4f46\u662f\u91cd\u542f\u7684\u65f6\u5019\u4f1a\u62a5\u9519\uff0c\u4f8b\u5982\uff1a"),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre"},'Pod "consul-standlone" is invalid: spec: Forbidden: pod updates may not change fields other than `spec.containers[*].image`, `spec.initContainers[*].image`, `spec.activeDeadlineSeconds`, `spec.tolerations` (only additions to existing tolerations) or `spec.terminationGracePeriodSeconds` (allow it to be set to 1 if it was previously negative)\n'))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5efa\u8bae\u8bbe\u7f6e\u4e3atrue\uff0c\u6bcf\u6b21\u6d4b\u8bd5\u5b8c\u9700\u8981\u7b49\u5f85pod\u7684\u9500\u6bc1\uff0c\u7136\u540e\u91cd\u65b0\u6d4b\u8bd5\uff0c\u8fd9\u4e9b\u8fc7\u7a0b\u4e00\u822c\u5f88\u5feb\uff0c\u4e5f\u53ef\u4ee5\u4fee\u6539\u4ee3\u7801\u6765\u51cf\u5c11\u4e00\u4e9bpod\u7684\u521b\u5efa\u3002")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"e2e\u6d4b\u8bd5\u73af\u5883\u4f18\u5316")),(0,l.kt)("p",null,"\u4f8b\u5982\u53ea\u9700\u8981higress\u73af\u5883\uff0c\u800c\u4e0d\u9700\u8981",(0,l.kt)("inlineCode",{parentName:"p"},"higress-conformance-infra"),",",(0,l.kt)("inlineCode",{parentName:"p"},"higress-conformance-app-backend"),"\u7b49namespace\u73af\u5883\uff0c\u53ef\u4ee5\u624b\u52a8\u5728\u5982\u4e0b\u51e0\u884c\u4ee3\u7801\u91cc\u6dfb\u52a0\u6ce8\u91ca\uff0c\u6765\u8df3\u8fc7\u8fd9\u4e9b\u73af\u5883\u7684\u521b\u5efa\uff0c\u7136\u540e\u6d4b\u8bd5\u4e2d\u53ea\u7528\u5230\u4e86higress\u7684\u7ec4\u4ef6\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img.png",src:n(4177).Z,width:"1372",height:"984"})),(0,l.kt)("p",null,"\u5728\u8fd9\u91cc\uff0c\u6211\u53ea\u9700\u8981\u8fd0\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"EnvoyConfigTracing"),"\u7684Test\u6d4b\u8bd5\uff0c\u5b83\u53ea\u8ddfhigress\u6709\u5173\uff0c\u6ce8\u91ca\u6389\u4e86\u5176\u4ed6namespace\u7684\u51c6\u5907\u73af\u5883\uff0c\u53ef\u4ee5\u770b\u5230e2e\u6d4b\u8bd5\u4e0d\u52301s\u5c31\u7ed3\u675f\u4e86\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u9700\u8981\u5176\u4ed6namespace\u7684\u73af\u5883\uff0c\u800c\u4e0d\u9700\u8981nacos/consul\u7b49\u73af\u5883\uff0c\u53ef\u4ee5\u5728suite\u7684New\u65b9\u6cd5\u91cc\u627e\u5230\u4ee5\u4e0b\u4ee3\u7801\u5757\uff0c\u6839\u636e\u9700\u8981\u8fdb\u884c\u6ce8\u91ca\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'// apply defaults\nif suite.BaseManifests == nil {\n    suite.BaseManifests = []string{\n        "base/manifests.yaml",\n        "base/consul.yaml",\n        "base/eureka.yaml",\n        "base/nacos.yaml",\n        "base/dubbo.yaml",\n    }\n}\n')),(0,l.kt)("p",null,"\u89e3\u51b3\u597de2e\u6d4b\u8bd5\u7684\u73af\u5883\u76f8\u5173\u95ee\u9898\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u5728Goland\u91cc\u6dfb\u52a0\u81ea\u5df1\u60f3\u8981\u7684\u65ad\u70b9\uff0c\u6765debug\u6d4b\u8bd5\u7528\u4f8b\u4e86\u3002"))}c.isMDXComponent=!0},1286:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/e2e-debug1-6d4ad979b78fd26ceedc43b24fc18b3c.png"},2601:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/e2e-debug2-de7c59fff6871ae104cb9f1fdbae9f65.png"},8020:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/e2e-debug3-4d25bee1f70fb8ae0a0a90deee54244d.png"},4177:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/e2e-debug4-263420d802513c11800de3ce76b453f8.png"}}]);