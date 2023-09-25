"use strict";(self.webpackChunkhigress_website=self.webpackChunkhigress_website||[]).push([[3388],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),g=i,d=p["".concat(o,".").concat(g)]||p[g]||m[g]||a;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=g;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:i,l[1]=s;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4292:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const a={title:"Custom Plugin",keywords:["higress","custom","plugin"],description:"Custom plugin configuration reference"},l=void 0,s={unversionedId:"plugins/custom",id:"plugins/custom",title:"Custom Plugin",description:"Custom plugin configuration reference",source:"@site/i18n/en-us/docusaurus-plugin-content-docs/current/plugins/custom.md",sourceDirName:"plugins",slug:"/plugins/custom",permalink:"/en-us/docs/plugins/custom",draft:!1,editUrl:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/en-us/docusaurus-plugin-content-docs/current/plugins/custom.md",tags:[],version:"current",frontMatter:{title:"Custom Plugin",keywords:["higress","custom","plugin"],description:"Custom plugin configuration reference"},sidebar:"docs",previous:{title:"Introduction to the use of Wasm plugins",permalink:"/en-us/docs/plugins/intro"},next:{title:"JWT authentication",permalink:"/en-us/docs/plugins/jwt-auth"}},o={},u=[{value:"Edit the Wasm file",id:"edit-the-wasm-file",level:2},{value:"Build the Wasm image",id:"build-the-wasm-image",level:2},{value:"step1. Compile wasm",id:"step1-compile-wasm",level:3},{value:"step2. Build and push the docker image of the plugin",id:"step2-build-and-push-the-docker-image-of-the-plugin",level:3},{value:"Enable Wasm plugin",id:"enable-wasm-plugin",level:2},{value:"Using the Higress console",id:"using-the-higress-console",level:3},{value:"Using CRDs",id:"using-crds",level:3}],c={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"edit-the-wasm-file"},"Edit the Wasm file"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/alibaba/higress/tree/main/plugins/wasm-go"},"SDK")," for developing Higress' Wasm plugin in Go language"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/en-us/docs/user/wasm-go"},"Example of plug-in development"))),(0,i.kt)("h2",{id:"build-the-wasm-image"},"Build the Wasm image"),(0,i.kt)("p",null,"You can also choose to build the wasm locally first, and then copy it to the Docker image. This requires you to build the build environment locally first."),(0,i.kt)("p",null,"The compilation environment requirements are as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Go version: >= 1.18 (need to support generic features)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"TinyGo version: 0.28.1 (0.28.1 recommended)"))),(0,i.kt)("p",null,"The following is an example of local steps to build the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/alibaba/higress/tree/main/plugins/wasm-go/extensions/request-block"},"request-block")," plugin."),(0,i.kt)("h3",{id:"step1-compile-wasm"},"step1. Compile wasm"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"tinygo build -o main.wasm -scheduler=none -target=wasi -gc=custom -tags='custommalloc nottinygc_finalizer' ./main.go\n")),(0,i.kt)("h3",{id:"step2-build-and-push-the-docker-image-of-the-plugin"},"step2. Build and push the docker image of the plugin"),(0,i.kt)("p",null,"Use this simple Dockerfile"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Dockerfile"},"FROM scratch\nCOPY main.wasm plugin.wasm\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t <your_registry_hub>/request-block:1.0.0 -f <your_dockerfile> .\ndocker push <your_registry_hub>/request-block:1.0.0\n")),(0,i.kt)("h2",{id:"enable-wasm-plugin"},"Enable Wasm plugin"),(0,i.kt)("h3",{id:"using-the-higress-console"},"Using the Higress console"),(0,i.kt)("p",null,"Click the ",(0,i.kt)("inlineCode",{parentName:"p"},"Create")," button to create a custom plug-in in the plug-in market, and fill in the Wasm mirror address built above in the mirror address column;"),(0,i.kt)("p",null,"After the creation is complete, click the configuration button of the plug-in card, fill in the configuration of the plug-in (if any), and turn on the switch to take effect."),(0,i.kt)("p",null,'If the plug-in logic changes, you can build a new image with a different image tag, click the "Edit" button in the upper right menu of the plug-in card, and change the address of the Wasm image to the address of the new version.'),(0,i.kt)("h3",{id:"using-crds"},"Using CRDs"),(0,i.kt)("p",null,"Write the WasmPlugin resource as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: extensions.higress.io/v1alpha1\nkind: WasmPlugin\nmetadata:\n   name: request-block\n   namespace: higress-system\nspec:\n   defaultConfig:\n     block_urls:\n     - "swagger.html"\n   url: oci://<your_registry_hub>/request-block:1.0.0 # The address of the image built and pushed before\n')),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl apply -f <your-wasm-plugin-yaml>")," to apply the resources.\nAfter the resource takes effect, if the request url carries ",(0,i.kt)("inlineCode",{parentName:"p"},"swagger.html"),", the request will be rejected, for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl <your_gateway_address>/api/user/swagger.html\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"HTTP/1.1 403 Forbidden\ndate: Wed, 09 Nov 2022 12:12:32 GMT\nserver: istio-envoy\ncontent-length: 0\n")))}m.isMDXComponent=!0}}]);