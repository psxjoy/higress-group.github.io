"use strict";(self.webpackChunkhigress_website=self.webpackChunkhigress_website||[]).push([[2856],{3905:(t,e,n)=>{n.d(e,{Zo:()=>b,kt:()=>c});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),i=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},b=function(t){var e=i(t.components);return a.createElement(u.Provider,{value:e},t.children)},d="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,b=p(t,["components","mdxType","originalType","parentName"]),d=i(n),m=r,c=d["".concat(u,".").concat(m)]||d[m]||s[m]||l;return n?a.createElement(c,o(o({ref:e},b),{},{components:n})):a.createElement(c,o({ref:e},b))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=m;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p[d]="string"==typeof t?t:r,o[1]=p;for(var i=2;i<l;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4866:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var a=n(7462),r=(n(7294),n(3905));const l={title:"\u5b9e\u73b0 Dubbo \u670d\u52a1\u53d1\u73b0\u548c\u8def\u7531",keywords:["Dubbo","discovery"],description:"\u5b9e\u73b0 Dubbo \u670d\u52a1\u53d1\u73b0\u548c\u8def\u7531",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/master/i18n/zh-cn/docusaurus-plugin-content-docs/current/user/dubbo.md"},o="\u5b9e\u73b0 Dubbo \u670d\u52a1\u53d1\u73b0\u548c\u8def\u7531",p={unversionedId:"user/dubbo",id:"user/dubbo",title:"\u5b9e\u73b0 Dubbo \u670d\u52a1\u53d1\u73b0\u548c\u8def\u7531",description:"\u5b9e\u73b0 Dubbo \u670d\u52a1\u53d1\u73b0\u548c\u8def\u7531",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/user/dubbo.md",sourceDirName:"user",slug:"/user/dubbo",permalink:"/docs/user/dubbo",draft:!1,editUrl:"https://github.com/higress-group/higress-group.github.io/blob/master/i18n/zh-cn/docusaurus-plugin-content-docs/current/user/dubbo.md",tags:[],version:"current",frontMatter:{title:"\u5b9e\u73b0 Dubbo \u670d\u52a1\u53d1\u73b0\u548c\u8def\u7531",keywords:["Dubbo","discovery"],description:"\u5b9e\u73b0 Dubbo \u670d\u52a1\u53d1\u73b0\u548c\u8def\u7531",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/master/i18n/zh-cn/docusaurus-plugin-content-docs/current/user/dubbo.md"},sidebar:"docs",previous:{title:"\u5b9e\u73b0 SpringCloud \u670d\u52a1\u53d1\u73b0\u548c\u8def\u7531",permalink:"/docs/user/spring-cloud"},next:{title:"\u57fa\u4e8e Prometheus \u5b9e\u73b0\u5165\u53e3\u6d41\u91cf\u89c2\u6d4b",permalink:"/docs/user/prometheus"}},u={},i=[{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"\u4e3aDubbo\u670d\u52a1\u914d\u7f6e\u8def\u7531",id:"\u4e3adubbo\u670d\u52a1\u914d\u7f6e\u8def\u7531",level:2},{value:"\u65b9\u6cd5\u4e00\uff1a\u901a\u8fc7Dubbo\u670d\u52a1\u7684Ip\u548cport\u5b9e\u73b0Dubbo\u670d\u52a1\u53d1\u73b0\u548c\u8def\u7531",id:"\u65b9\u6cd5\u4e00\u901a\u8fc7dubbo\u670d\u52a1\u7684ip\u548cport\u5b9e\u73b0dubbo\u670d\u52a1\u53d1\u73b0\u548c\u8def\u7531",level:3},{value:"\u65b9\u6cd5\u4e8c\uff1a\u901a\u8fc7\u5bf9\u63a5Nacos/Zookeeper\u6ce8\u518c\u4e2d\u5fc3\u5b9e\u73b0Dubbo\u670d\u52a1\u53d1\u73b0\u548c\u8def\u7531",id:"\u65b9\u6cd5\u4e8c\u901a\u8fc7\u5bf9\u63a5nacoszookeeper\u6ce8\u518c\u4e2d\u5fc3\u5b9e\u73b0dubbo\u670d\u52a1\u53d1\u73b0\u548c\u8def\u7531",level:3},{value:"\u901a\u8fc7EnvoyFilter\u914d\u7f6eHTTP\u5230Dubbo\u534f\u8bae\u8f6c\u6362\u89c4\u5219",id:"\u901a\u8fc7envoyfilter\u914d\u7f6ehttp\u5230dubbo\u534f\u8bae\u8f6c\u6362\u89c4\u5219",level:2},{value:"\u901a\u8fc7HTTP\u8bf7\u6c42\u8c03\u7528Dubbo\u670d\u52a1",id:"\u901a\u8fc7http\u8bf7\u6c42\u8c03\u7528dubbo\u670d\u52a1",level:2},{value:"Filter\u914d\u7f6e\u53c2\u8003",id:"filter\u914d\u7f6e\u53c2\u8003",level:2},{value:"HttpDubboTranscoder",id:"httpdubbotranscoder",level:3},{value:"HttpDubboTranscoder.RequestValidateOptions",id:"httpdubbotranscoderrequestvalidateoptions",level:3},{value:"HttpDubboTranscoder.DubboServiceMapping",id:"httpdubbotranscoderdubboservicemapping",level:3},{value:"HttpDubboTranscoder.DubboMethodMapping",id:"httpdubbotranscoderdubbomethodmapping",level:3},{value:"HttpDubboTranscoder.DubboMethodMapping.PathMatcher",id:"httpdubbotranscoderdubbomethodmappingpathmatcher",level:3},{value:"HttpDubboTranscoder.DubboMethodMapping.ParameterMapping",id:"httpdubbotranscoderdubbomethodmappingparametermapping",level:3},{value:"HttpDubboTranscoder.DubboMethodMapping.PassthroughSetting",id:"httpdubbotranscoderdubbomethodmappingpassthroughsetting",level:3}],b={toc:i},d="wrapper";function s(t){let{components:e,...n}=t;return(0,r.kt)(d,(0,a.Z)({},b,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5b9e\u73b0-dubbo-\u670d\u52a1\u53d1\u73b0\u548c\u8def\u7531"},"\u5b9e\u73b0 Dubbo \u670d\u52a1\u53d1\u73b0\u548c\u8def\u7531"),(0,r.kt)("p",null,"Higress\u63d0\u4f9b\u4e86\u4eceHTTP\u534f\u8bae\u5230Dubbo\u534f\u8bae\u8fdb\u884c\u8f6c\u6362\u7684\u529f\u80fd\uff0c\u7528\u6237\u901a\u8fc7\u914d\u7f6e\u534f\u8bae\u8f6c\u6362\uff0c\u53ef\u4ee5\u5c06\u4e00\u4e2aDubbo\u670d\u52a1\u4ee5HTTP\u63a5\u53e3\u66b4\u9732\u51fa\u6765\uff0c\u4ece\u800c\u7528HTTP\u8bf7\u6c42\u5b9e\u73b0\u5bf9Dubbo\u63a5\u53e3\u7684\u8c03\u7528\u3002\u672c\u6587\u5c06\u901a\u8fc7\u793a\u4f8b\u6765\u4ecb\u7ecd\u5982\u4f55\u7528Higress\u914d\u7f6eHTTP\u5230Dubbo\u7684\u534f\u8bae\u8f6c\u6362\u3002"),(0,r.kt)("h2",{id:"\u524d\u63d0\u6761\u4ef6"},"\u524d\u63d0\u6761\u4ef6"),(0,r.kt)("p",null,"Higress\u76ee\u524d\u652f\u6301\u7684Dubbo\u6846\u67b6\u7684\u7248\u672c\u4e3a2.x\u3002\u82e5\u60a8\u4f7f\u7528Dubbo3.0\uff0c\u8981\u6c42\u4f7f\u7528dubbo\u534f\u8bae\uff08\u76ee\u524d\u6682\u4e0d\u652f\u6301Triple\u534f\u8bae\uff09\u3002"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\u5047\u8bbe\u6211\u4eec\u6709\u5982\u4e0b\u4e00\u4e2aDubbo\u670d\u52a1\uff0c\u5e76\u6307\u5b9a\u4e86\u8be5\u670d\u52a1\u7684version\u4e3a\u201c1.0.0\u201d\uff0cgroup\u4e3a\u201cdev\u201d\uff0c\u4e0b\u9762\u6211\u4eec\u5c06\u4ecb\u7ecd\u5982\u4f55\u4e3a\u8be5\u670d\u52a1\u914d\u7f6e\u534f\u8bae\u8f6c\u6362\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"package com.alibaba.nacos.example.dubbo.service;\n\npublic interface DemoService {\n    String sayName(String name);\n}\n")),(0,r.kt)("h2",{id:"\u4e3adubbo\u670d\u52a1\u914d\u7f6e\u8def\u7531"},"\u4e3aDubbo\u670d\u52a1\u914d\u7f6e\u8def\u7531"),(0,r.kt)("h3",{id:"\u65b9\u6cd5\u4e00\u901a\u8fc7dubbo\u670d\u52a1\u7684ip\u548cport\u5b9e\u73b0dubbo\u670d\u52a1\u53d1\u73b0\u548c\u8def\u7531"},"\u65b9\u6cd5\u4e00\uff1a\u901a\u8fc7Dubbo\u670d\u52a1\u7684Ip\u548cport\u5b9e\u73b0Dubbo\u670d\u52a1\u53d1\u73b0\u548c\u8def\u7531"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u521b\u5efa\u4ee5\u4e0bServiceEntry\u8d44\u6e90\uff0c\u5176\u4e2d\u6307\u5b9a\u4e86Dubbo\u670d\u52a1\u7684Ip\u4e0e\u7aef\u53e3\u53f7\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.istio.io/v1beta1\nkind: ServiceEntry\nmetadata:\n  name: dubbo\n  namespace: higress-system\nspec:\n  endpoints:\n  # \u6b64\u5904\u66f4\u6362\u4e3a\u81ea\u5df1dubbo\u670d\u52a1\u7684ip\n  - address: xxx.xxx.xxx.xxx\n    ports:\n      http: 20880\n  hosts:\n  - dubbo.static\n  location: MESH_EXTERNAL\n  ports:\n  - name: http\n    number: 20880\n    protocol: HTTP\n  resolution: STATIC\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u521b\u5efa\u4ee5\u4e0bVirtualService\u8d44\u6e90\uff0c\u4e3aDubbo\u670d\u52a1\u521b\u5efa\u4e00\u6761\u540d\u4e3atest\u7684\u8def\u7531")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.istio.io/v1beta1\nkind: VirtualService\nmetadata:\n  name: global\n  namespace: higress-system\nspec:\n  gateways:\n  - higress-system/global\n  hosts:\n  - '*'\n  http:\n  - match:\n    - ignoreUriCase: false\n      uri:\n        prefix: /dubbo\n    name: test\n    route:\n    - destination:\n        host: dubbo.static\n        port:\n          number: 20880\n")),(0,r.kt)("h3",{id:"\u65b9\u6cd5\u4e8c\u901a\u8fc7\u5bf9\u63a5nacoszookeeper\u6ce8\u518c\u4e2d\u5fc3\u5b9e\u73b0dubbo\u670d\u52a1\u53d1\u73b0\u548c\u8def\u7531"},"\u65b9\u6cd5\u4e8c\uff1a\u901a\u8fc7\u5bf9\u63a5Nacos/Zookeeper\u6ce8\u518c\u4e2d\u5fc3\u5b9e\u73b0Dubbo\u670d\u52a1\u53d1\u73b0\u548c\u8def\u7531"),(0,r.kt)("p",null,"TBD"),(0,r.kt)("h2",{id:"\u901a\u8fc7envoyfilter\u914d\u7f6ehttp\u5230dubbo\u534f\u8bae\u8f6c\u6362\u89c4\u5219"},"\u901a\u8fc7EnvoyFilter\u914d\u7f6eHTTP\u5230Dubbo\u534f\u8bae\u8f6c\u6362\u89c4\u5219"),(0,r.kt)("p",null,"\u5728\u4e3aDubbo\u670d\u52a1\u521b\u5efa\u4e86\u8def\u7531\u4e4b\u540e\uff0c\u9700\u8981\u914d\u7f6e\u5177\u4f53\u7684\u534f\u8bae\u8f6c\u6362\u89c4\u5219\u3002Higress\u901a\u8fc7Envoy\u7684HTTP Filter\u5b9e\u73b0\u4eceHTTP\u534f\u8bae\u5230Dubbo\u534f\u8bae\u7684\u8f6c\u6362\uff0c\u672c\u793a\u4f8b\u901a\u8fc7\u521b\u5efa\u5982\u4e0bEnvoyFilter\u8d44\u6e90\u6765\u5bf9\u534f\u8bae\u8f6c\u6362\u89c4\u5219\u8fdb\u884c\u914d\u7f6e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.istio.io/v1alpha3\nkind: EnvoyFilter\nmetadata:\n  name: http-dubbo-transcoder-test\n  namespace: higress-system\nspec:\n  configPatches:\n  - applyTo: HTTP_FILTER\n    match:\n      context: GATEWAY\n      listener:\n        filterChain:\n          filter:\n            name: envoy.filters.network.http_connection_manager\n            subFilter:\n              name: envoy.filters.http.router\n    patch:\n      operation: INSERT_BEFORE\n      value:\n        name: envoy.filters.http.http_dubbo_transcoder\n        typed_config:\n          '@type': type.googleapis.com/udpa.type.v1.TypedStruct\n          type_url: type.googleapis.com/envoy.extensions.filters.http.http_dubbo_transcoder.v3.HttpDubboTranscoder\n  - applyTo: HTTP_ROUTE\n    match:\n      context: GATEWAY\n      routeConfiguration:\n        vhost:\n          route:\n            name: test\n    patch:\n      operation: MERGE\n      value:\n        route:\n          upgrade_configs:\n          - connect_config:\n              allow_post: true\n            upgrade_type: CONNECT\n        typed_per_filter_config:\n          envoy.filters.http.http_dubbo_transcoder:\n            '@type': type.googleapis.com/udpa.type.v1.TypedStruct\n            type_url: type.googleapis.com/envoy.extensions.filters.http.http_dubbo_transcoder.v3.HttpDubboTranscoder\n            value:\n              request_validation_options:\n                reject_unknown_method: true\n                reject_unknown_query_parameters: true\n              services_mapping:\n              - group: dev\n                method_mapping:\n                - name: sayName\n                  parameter_mapping:\n                  - extract_key: p\n                    extract_key_spec: ALL_QUERY_PARAMETER\n                    mapping_type: java.lang.String\n                  passthrough_setting:\n                    passthrough_all_headers: true\n                  path_matcher:\n                    match_http_method_spec: ALL_GET\n                    match_pattern: /dubbo/hello\n                name: com.alibaba.nacos.example.dubbo.service.DemoService\n                version: 1.0.0\n              url_unescape_spec: ALL_CHARACTERS_EXCEPT_RESERVED\n  - applyTo: CLUSTER\n    match:\n      cluster:\n        service: dubbo.static\n      context: GATEWAY\n    patch:\n      operation: MERGE\n      value:\n        upstream_config:\n          name: envoy.upstreams.http.dubbo_tcp\n          typed_config:\n            '@type': type.googleapis.com/udpa.type.v1.TypedStruct\n            type_url: type.googleapis.com/envoy.extensions.upstreams.http.dubbo_tcp.v3.DubboTcpConnectionPoolProto\n")),(0,r.kt)("h2",{id:"\u901a\u8fc7http\u8bf7\u6c42\u8c03\u7528dubbo\u670d\u52a1"},"\u901a\u8fc7HTTP\u8bf7\u6c42\u8c03\u7528Dubbo\u670d\u52a1"),(0,r.kt)("p",null,"\u5b8c\u6210\u4ee5\u4e0a\u914d\u7f6e\u540e\uff0c\u901a\u8fc7curl\u547d\u4ee4\u8c03\u7528sayName\u65b9\u6cd5\u8fdb\u884c\u9a8c\u8bc1\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl "localhost/dubbo/hello?p=higress" \n{"result":"Service [name :demoService , port : 20880] sayName(\\"higress\\") : Hello,higress"}\n')),(0,r.kt)("h2",{id:"filter\u914d\u7f6e\u53c2\u8003"},"Filter\u914d\u7f6e\u53c2\u8003"),(0,r.kt)("h3",{id:"httpdubbotranscoder"},"HttpDubboTranscoder"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"url_unescape_spec"),(0,r.kt)("td",{parentName:"tr",align:null},"enum"),(0,r.kt)("td",{parentName:"tr",align:null},"URL unescaping policy"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009\u503c\uff1a",(0,r.kt)("br",null)," - ALL_CHARACTERS_EXCEPT_RESERVED",(0,r.kt)("br",null),"- ALL_CHARACTERS_EXCEPT_SLASH",(0,r.kt)("br",null),"- ALL_CHARACTERS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"request_validation_options"),(0,r.kt)("td",{parentName:"tr",align:null},"RequestValidateOptions"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u9a8c\u8bc1\u9009\u9879"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"services_mapping"),(0,r.kt)("td",{parentName:"tr",align:null},"list of DubboServiceMapping"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6bcf\u4e00\u9879\u5bf9\u5e94\u4e86\u4e00\u6761\u6620\u5c04\u89c4\u5219"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"httpdubbotranscoderrequestvalidateoptions"},"HttpDubboTranscoder.RequestValidateOptions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reject_unknown_query_parameters"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5bf9\u4e8e\u65e0\u6cd5\u6210\u529f\u6620\u5c04query parameters\u7684\u8bf7\u6c42\u662f\u5426\u76f4\u63a5\u62d2\u7edd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reject_unknown_method"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5bf9\u4e8e\u65e0\u6cd5\u6620\u5c04\u4e3adubbo\u670d\u52a1\u7684\u8bf7\u6c42\u662f\u5426\u76f4\u63a5\u62d2\u7edd")))),(0,r.kt)("h3",{id:"httpdubbotranscoderdubboservicemapping"},"HttpDubboTranscoder.DubboServiceMapping"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"dubbo\u670d\u52a1\u540d"),(0,r.kt)("td",{parentName:"tr",align:null},'\u4f8b\u5982\uff1a"com.alibaba.nacos.example.dubbo.service.DemoService"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"version"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"dubbo\u670d\u52a1\u7684\u7248\u672c"),(0,r.kt)("td",{parentName:"tr",align:null},'\u4f8b\u5982\uff1a"1.0.0"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"group"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"dubbo\u670d\u52a1\u7684\u5206\u7ec4"),(0,r.kt)("td",{parentName:"tr",align:null},'\u4f8b\u5982\uff1a"dev"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"method_mapping"),(0,r.kt)("td",{parentName:"tr",align:null},"list of DubboMethodMapping"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6bcf\u4e00\u9879\u5bf9\u5e94\u4e86\u6307\u5b9adubbo\u670d\u52a1\u4e2d\u7684\u67d0\u4e2a\u65b9\u6cd5\u7684\u6620\u5c04\u89c4\u5219"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"httpdubbotranscoderdubbomethodmapping"},"HttpDubboTranscoder.DubboMethodMapping"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65b9\u6cd5\u540d"),(0,r.kt)("td",{parentName:"tr",align:null},'\u4f8b\uff1a"sayName"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"path_matcher"),(0,r.kt)("td",{parentName:"tr",align:null},"PathMatcher"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65b9\u6cd5\u5339\u914d\u89c4\u5219"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"parameter_mapping"),(0,r.kt)("td",{parentName:"tr",align:null},"lis of ParameterMapping"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6bcf\u4e00\u9879\u5bf9\u5e94\u4e00\u4e2a\u53c2\u6570\u6620\u5c04\u89c4\u5219"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"passthrough_setting"),(0,r.kt)("td",{parentName:"tr",align:null},"PassthroughSetting"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9aHeader\u900f\u4f20\u89c4\u5219"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"httpdubbotranscoderdubbomethodmappingpathmatcher"},"HttpDubboTranscoder.DubboMethodMapping.PathMatcher"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"match_pattern"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'\u65b9\u6cd5\u7684\u5339\u914d\u8def\u5f84\uff5c\u4f8b\u5982\uff1a"/dubbo/hello"'),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"match_http_method_spec"),(0,r.kt)("td",{parentName:"tr",align:null},"enum"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65b9\u6cd5\u5339\u914d\u7684HTTP Method"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009\u503c\uff1a",(0,r.kt)("br",null),"-ALL_GET",(0,r.kt)("br",null),"- ALL_POST",(0,r.kt)("br",null),"- ALL_PUT",(0,r.kt)("br",null),"- ALL_DELETE",(0,r.kt)("br",null),"- ALL_PATCH")))),(0,r.kt)("h3",{id:"httpdubbotranscoderdubbomethodmappingparametermapping"},"HttpDubboTranscoder.DubboMethodMapping.ParameterMapping"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"extract_key_spec"),(0,r.kt)("td",{parentName:"tr",align:null},"enum"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53c2\u6570\u63d0\u53d6\u4f4d\u7f6e"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009\u503c\uff1a",(0,r.kt)("br",null),"- ALL_QUERY_PARAMETER",(0,r.kt)("br",null),"- ALL_HEADER",(0,r.kt)("br",null),"- ALL_PATH",(0,r.kt)("br",null),"- ALL_BODY")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"extract_key"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53c2\u6570\u63d0\u53d6\u7684key"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f8b\uff1amy_param")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mapping_type"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53c2\u6570\u5728dubbo\u670d\u52a1\u4e2d\u7684\u7c7b\u578b"),(0,r.kt)("td",{parentName:"tr",align:null},'\u4f8b\uff1a"java.lang.String"')))),(0,r.kt)("h3",{id:"httpdubbotranscoderdubbomethodmappingpassthroughsetting"},"HttpDubboTranscoder.DubboMethodMapping.PassthroughSetting"),(0,r.kt)("p",null,"\u914d\u7f6eHTTP Header\u900f\u4f20\u89c4\u5219\uff0c\u88ab\u900f\u4f20\u7684Header\u4f1a\u88ab\u653e\u5728Dubbo\u8c03\u7528\u7684attachment\u4e2d\u4f20\u7ed9dubbo\u670d\u52a1"),(0,r.kt)("p",null,"\u6ce8\uff1aHeader\u7684\u900f\u4f20\u89c4\u5219\uff0c\u6b64\u9879\u914d\u7f6e\u4e3aone of\u7c7b\u578b\uff0c\u4e0b\u9762\u4e24\u4e2a\u5b57\u6bb5\u9009\u5176\u4e00\n| \u5b57\u6bb5                    | \u7c7b\u578b           | \u8bf4\u660e                                          |\n| ----------------------- | -------------- | --------------------------------------------- |\n| passthrough_all_headers | bool           | \u900f\u4f20\u6240\u6709Header                                |\n| passthrough_headers     | list of string | \u900f\u4f20\u6307\u5b9aHeader\uff0c\u6bcf\u4e00\u9879\u6307\u5b9a\u4e86Header\u4e2d\u7684\u4e00\u4e2akey |"))}s.isMDXComponent=!0}}]);