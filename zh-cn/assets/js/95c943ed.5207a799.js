"use strict";(self.webpackChunkhigress_website=self.webpackChunkhigress_website||[]).push([[2197],{3905:(A,e,t)=>{t.d(e,{Zo:()=>i,kt:()=>u});var n=t(7294);function a(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function r(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,n)}return t}function p(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){a(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function l(A,e){if(null==A)return{};var t,n,a=function(A,e){if(null==A)return{};var t,n,a={},r=Object.keys(A);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(a[t]=A[t]);return a}(A,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(a[t]=A[t])}return a}var s=n.createContext({}),g=function(A){var e=n.useContext(s),t=e;return A&&(t="function"==typeof A?A(e):p(p({},e),A)),t},i=function(A){var e=g(A.components);return n.createElement(s.Provider,{value:e},A.children)},o="mdxType",c={inlineCode:"code",wrapper:function(A){var e=A.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(A,e){var t=A.components,a=A.mdxType,r=A.originalType,s=A.parentName,i=l(A,["components","mdxType","originalType","parentName"]),o=g(t),d=a,u=o["".concat(s,".").concat(d)]||o[d]||c[d]||r;return t?n.createElement(u,p(p({ref:e},i),{},{components:t})):n.createElement(u,p({ref:e},i))}));function u(A,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof A||a){var r=t.length,p=new Array(r);p[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=A,l[o]="string"==typeof A?A:a,p[1]=l;for(var g=2;g<r;g++)p[g]=t[g];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5537:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>g});var n=t(7462),a=(t(7294),t(3905));const r={title:"Windows \u4e0b Higress \u90e8\u7f72\u5b9e\u8df5",keywords:["higress"],description:"Windows\u90e8\u7f72Higress",author:"Fkbqf",date:new Date("2023-07-28T00:00:00.000Z"),custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-blog/DeployOnWindows.md"},p=void 0,l={permalink:"/zh-cn/blog/DeployOnWindows",editUrl:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-blog/DeployOnWindows.md",source:"@site/i18n/zh-cn/docusaurus-plugin-content-blog/DeployOnWindows.md",title:"Windows \u4e0b Higress \u90e8\u7f72\u5b9e\u8df5",description:"Windows\u90e8\u7f72Higress",date:"2023-07-28T00:00:00.000Z",formattedDate:"2023\u5e747\u670828\u65e5",tags:[],readingTime:3.49,hasTruncateMarker:!1,authors:[{name:"Fkbqf"}],frontMatter:{title:"Windows \u4e0b Higress \u90e8\u7f72\u5b9e\u8df5",keywords:["higress"],description:"Windows\u90e8\u7f72Higress",author:"Fkbqf",date:"2023-07-28T00:00:00.000Z",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-blog/DeployOnWindows.md"},nextItem:{title:"Higress \u5168\u5c40\u914d\u7f6e\u63a7\u5236\u9762\u539f\u7406\u5206\u6790",permalink:"/zh-cn/blog/configmap"}},s={authorsImageUrls:[void 0]},g=[{value:"\u524d\u7f6e\u51c6\u5907",id:"\u524d\u7f6e\u51c6\u5907",level:2},{value:"\u914d\u7f6e WSL2",id:"\u914d\u7f6e-wsl2",level:3},{value:"\u4e0b\u8f7d Docker Desktop",id:"\u4e0b\u8f7d-docker-desktop",level:3},{value:"\u5b89\u88c5 Cygwin",id:"\u5b89\u88c5-cygwin",level:3},{value:"\u9a8c\u8bc1 Cygwin \u5b89\u88c5\u662f\u5426\u6210\u529f",id:"\u9a8c\u8bc1-cygwin-\u5b89\u88c5\u662f\u5426\u6210\u529f",level:4},{value:"\u4e3a Cygwin \u914d\u7f6e\u73af\u5883\u53d8\u91cf",id:"\u4e3a-cygwin-\u914d\u7f6e\u73af\u5883\u53d8\u91cf",level:4},{value:"\u5b89\u88c5 Higrees",id:"\u5b89\u88c5-higrees",level:2},{value:"\u51c6\u5907 Nacos",id:"\u51c6\u5907-nacos",level:3},{value:"\u4f7f\u7528 Higrees \u5bf9\u63a5 Nacos",id:"\u4f7f\u7528-higrees-\u5bf9\u63a5-nacos",level:3},{value:"Higress \u63a7\u5236\u53f0\u914d\u7f6e",id:"higress-\u63a7\u5236\u53f0\u914d\u7f6e",level:3},{value:"\u8bf7\u6c42\u9a8c\u8bc1",id:"\u8bf7\u6c42\u9a8c\u8bc1",level:3}],i={toc:g},o="wrapper";function c(A){let{components:e,...r}=A;return(0,a.kt)(o,(0,n.Z)({},i,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u524d\u7f6e\u51c6\u5907"},"\u524d\u7f6e\u51c6\u5907"),(0,a.kt)("h3",{id:"\u914d\u7f6e-wsl2"},"\u914d\u7f6e WSL2"),(0,a.kt)("p",null,"\u8be6\u60c5\u53c2\u770b\u6b65\u9aa41-5,\u987a\u4fbf\u5728\u5fae\u8f6f\u5546\u5e97\u4e2d\u4e0b\u8f7dTerminal\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/zh-cn/windows/wsl/install-manual"},"WSL\u624b\u52a8\u5b89\u88c5\u6b65\u9aa4")),(0,a.kt)("h3",{id:"\u4e0b\u8f7d-docker-desktop"},"\u4e0b\u8f7d Docker Desktop"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u8bbf\u95ee Docker Desktop \u5b98\u65b9\u4e0b\u8f7d\u9875\u9762")),(0,a.kt)("p",{parentName:"li"},"\u5728\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00 ",(0,a.kt)("a",{parentName:"p",href:"https://www.docker.com/products/docker-desktop"},"Docker Desktop \u7684\u5b98\u65b9\u4e0b\u8f7d\u9875\u9762"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u4e0b\u8f7d Docker Desktop")),(0,a.kt)("p",{parentName:"li"},"\u5728\u4e0b\u8f7d\u9875\u9762\uff0c\u627e\u5230\u9002\u7528\u4e8e Windows \u7684 Docker Desktop \u7248\u672c\uff0c\u7136\u540e\u70b9\u51fb\u4e0b\u8f7d\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u8fd0\u884c\u5b89\u88c5\u7a0b\u5e8f")),(0,a.kt)("p",{parentName:"li"},'\u4e0b\u8f7d\u5b8c\u6210\u540e\uff0c\u627e\u5230\u4e0b\u8f7d\u7684\u5b89\u88c5\u7a0b\u5e8f\uff08\u901a\u5e38\u5728\u4f60\u7684 "\u4e0b\u8f7d" \u6587\u4ef6\u5939\u4e2d\uff09\uff0c\u7136\u540e\u53cc\u51fb\u8fd0\u884c\u3002'))),(0,a.kt)("h3",{id:"\u5b89\u88c5-cygwin"},"\u5b89\u88c5 Cygwin"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://www.cygwin.com/"},"cygwin\u5b98\u7f51")),(0,a.kt)("p",null,"\u9009\u62e9setup-x86_64.exe\uff0c\u7b49\u5f85\u5b89\u88c5\u5b8c\u6210\u3002"),(0,a.kt)("h4",{id:"\u9a8c\u8bc1-cygwin-\u5b89\u88c5\u662f\u5426\u6210\u529f"},"\u9a8c\u8bc1 Cygwin \u5b89\u88c5\u662f\u5426\u6210\u529f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cygcheck -c cygwin\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"7.png",src:t(5453).Z,width:"595",height:"377"})),(0,a.kt)("h4",{id:"\u4e3a-cygwin-\u914d\u7f6e\u73af\u5883\u53d8\u91cf"},"\u4e3a Cygwin \u914d\u7f6e\u73af\u5883\u53d8\u91cf"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"8.png",src:t(8979).Z,width:"776",height:"627"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"9.png",src:t(5740).Z,width:"493",height:"605"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"10.png",src:t(1986).Z,width:"632",height:"666"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"11.png",src:t(8550).Z,width:"541",height:"570"})),(0,a.kt)("p",null,"\u70b9\u51fb\u786e\u5b9a\u5373\u53ef\u6dfb\u52a0\u6210\u529f"),(0,a.kt)("h2",{id:"\u5b89\u88c5-higrees"},"\u5b89\u88c5 Higrees"),(0,a.kt)("h3",{id:"\u51c6\u5907-nacos"},"\u51c6\u5907 Nacos"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://nacos.io/zh-cn/docs/v2/quickstart/quick-start-docker.html"},"nacos\u5b98\u7f51\u624b\u518c")),(0,a.kt)("p",null,"\u6211\u4eec\u8fd9\u91cc\u9009\u62e9nacos-docker\u7684\u6a21\u5f0f\u5b89\u88c5"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"A.png",src:t(4837).Z,width:"1076",height:"564"})),(0,a.kt)("p",null,"\u4e0b\u8f7d\u89e3\u538bzip\u6587\u4ef6,\u8fdb\u5165 nacos-docker-master \u6587\u4ef6\u5939\u53f3\u952e\u9009\u62e9\u7ec8\u7aef\u6253\u5f00\uff0c\u6267\u884c\u547d\u4ee4\uff0c\u6211\u4eec\u8fd9\u91cc\u9009\u62e9\u5355\u673a\u6a21\u5f0f\u90e8\u7f72"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"    docker-compose -f example/standalone-derby.yaml up\n")),(0,a.kt)("p",null,"\u7b49\u5f85\u51fa\u73b0\u754c\u9762\uff0c\u5373\u5b89\u88c5\u6210\u529f"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"B.png",src:t(9792).Z,width:"1731",height:"1195"})),(0,a.kt)("h3",{id:"\u4f7f\u7528-higrees-\u5bf9\u63a5-nacos"},"\u4f7f\u7528 Higrees \u5bf9\u63a5 Nacos"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5b89\u88c5\u547d\u4ee4\uff1a\u4f7f\u7528\u72ec\u7acb\u90e8\u7f72\u7684 Nacos")),(0,a.kt)("p",null,"\u5f53\u8bbf\u95eedocker\u5bb9\u5668\u4e92\u76f8\u8bbf\u95ee\u65f6\u5019\u672c\u5730\u56de\u73af\u5730\u5740\u5e76\u4e0d\u662f\u771f\u6b63\u7684\u5730\u5740\uff0c\u6240\u4ee5\u9700\u8981\u5728cywin\u4e2d\u6267\u884c\u83b7\u53d6\u672c\u5730\u7f51\u5361\u5730\u5740"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"ipconfig\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"C.png",src:t(5835).Z,width:"1993",height:"1209"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curl -fsSL https://higress.io/standalone/get-higress.sh | bash -s -- -c nacos://192.168.0.1:8848 --nacos-username=nacos --nacos-password=nacos -p admin\n")),(0,a.kt)("p",null,"\u8bf7\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"192.168.0.1")," \u66ff\u6362\u4e3a Nacos \u670d\u52a1\u5668\u7684 IP\uff08\u5982\u679c Nacos \u90e8\u7f72\u5728\u672c\u673a\uff0c\u8bf7\u4e0d\u8981\u4f7f\u7528\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," \u7684 Loopback \u5730\u5740\uff09\uff0c\u5e76\u6309\u9700\u8c03\u6574 ",(0,a.kt)("inlineCode",{parentName:"p"},"--nacos-username")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"--nacos-password")," \u7684\u53d6\u503c\u3002\u5982\u679c Nacos \u670d\u52a1\u672a\u5f00\u542f\u8ba4\u8bc1\u529f\u80fd\uff0c\u5219\u53ef\u4ee5\u79fb\u9664\u8fd9\u4e24\u4e2a\u53c2\u6570\u3002"),(0,a.kt)("p",null,"\u5728\u8fd9\u91cc\u672a\u5f00\u542f\u6388\u6743\u670d\u52a1\uff0c\u76f4\u63a5\u4f7f\u7528WLANIP\u66ff\u6362\u5bf9\u5e94\u7684IP"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl -fsSL https://higress.io/standalone/get-higress.sh | bash -s -- -c nacos://10.30.0.225:8848\n\n")),(0,a.kt)("p",null,"\u8f93\u5165\u547d\u4ee4\u7b49\u5f85\u90e8\u7f72\uff0c\u5373\u53ef\u770b\u5230\u751f\u6210\u7684\u7528\u6237\u540d\u540d\u4e0e\u5bc6\u7801"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"D.png",src:t(7357).Z,width:"606",height:"662"})),(0,a.kt)("h3",{id:"higress-\u63a7\u5236\u53f0\u914d\u7f6e"},"Higress \u63a7\u5236\u53f0\u914d\u7f6e"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8bbf\u95ee ",(0,a.kt)("inlineCode",{parentName:"strong"},"http://localhost:8080/"),", \u4f7f\u7528 admin \u4f5c\u4e3a\u7528\u6237\u540d\u5bc6\u7801\u767b\u5f55 Higress \u63a7\u5236\u53f0\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"13.png",src:t(5213).Z,width:"536",height:"330"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u70b9\u51fb\u5de6\u4fa7\u201c\u670d\u52a1\u6765\u6e90\u201d\u5bfc\u822a\u680f\uff0c\u7136\u540e\u70b9\u51fb\u9875\u9762\u53f3\u4fa7\u7684\u201c\u521b\u5efa\u670d\u52a1\u6765\u6e90\u201d\u6309\u94ae\u3002\u6309\u7167\u4e0b\u56fe\u6240\u793a\u5185\u5bb9\u586b\u5199\u8868\u5355\u5e76\u70b9\u51fb\u201c\u786e\u5b9a\u201d\u6309\u94ae\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"14.png",src:t(9664).Z,width:"970",height:"435"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u70b9\u51fb\u5de6\u4fa7\u201c\u57df\u540d\u7ba1\u7406\u201d\u5bfc\u822a\u680f\uff0c\u7136\u540e\u70b9\u51fb\u9875\u9762\u53f3\u4fa7\u7684\u201c\u521b\u5efa\u57df\u540d\u201d\u6309\u94ae\u3002\u6309\u7167\u4e0b\u56fe\u6240\u793a\u5185\u5bb9\u586b\u5199\u8868\u5355\u5e76\u70b9\u51fb\u201c\u786e\u5b9a\u201d\u6309\u94ae\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"15.png",src:t(5047).Z,width:"957",height:"467"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u70b9\u51fb\u5de6\u4fa7\u201c\u8def\u7531\u7ba1\u7406\u201d\u5bfc\u822a\u680f\uff0c\u7136\u540e\u70b9\u51fb\u9875\u9762\u53f3\u4fa7\u7684\u201c\u521b\u5efa\u8def\u7531\u201d\u6309\u94ae\u3002\u6309\u7167\u4e0b\u56fe\u7247\u6240\u793a\u5185\u5bb9\u586b\u5199\u8868\u5355\u5e76\u70b9\u51fb\u201c\u786e\u5b9a\u201d\u6309\u94ae\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"16.png",src:t(9252).Z,width:"979",height:"935"})),(0,a.kt)("h3",{id:"\u8bf7\u6c42\u9a8c\u8bc1"},"\u8bf7\u6c42\u9a8c\u8bc1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# should output a JSON object containing request data \ncurl http://localhost/get?foo=bar -H 'host: foo.bar.com'\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"E.png",src:t(5575).Z,width:"465",height:"307"})),(0,a.kt)("p",null,"\u66f4\u591a\u8be6\u60c5\u4e0e\u90e8\u7f72\u65b9\u6848\u53ef\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"https://higress.io/zh-cn/docs/user/quickstart"},"quick start")))}c.isMDXComponent=!0},1986:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/10-f7ca28c3f9f21b743a80b5d989dd74ae.png"},8550:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/11-70aebeb53894ffb9cfffd3bfade7d8ee.png"},5213:(A,e,t)=>{t.d(e,{Z:()=>n});const n="data:image/png;base64,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"},9664:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/14-38328e899b78267f27be2e99f8f7cb72.png"},5047:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/15-a79679960f6542a80ae4626bb5741ce4.png"},9252:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/16-f68a4a744e7c6ef008ef7d0b44e03ce0.png"},5453:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/7-f31de94adfaa4fac24dbf1d410079a70.png"},8979:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/8-0edaba7a8d7beee2abf67ed25756fe11.png"},5740:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/9-e13e9c70896872ee5ba92afcdb4e5c34.png"},4837:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/A-321115aaea59ff9a6e4a07b9393b9207.png"},9792:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/B-f819ffcf4f15baa1010207f2726bb032.png"},5835:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/C-c0ee57511e3244545ceebb126834c3d3.png"},7357:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/D-42927806049c82e382d903d50a93841b.png"},5575:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/E-bef754877d8c43a714b121f04b4e3071.png"}}]);