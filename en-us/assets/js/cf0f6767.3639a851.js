"use strict";(self.webpackChunkhigress_website=self.webpackChunkhigress_website||[]).push([[8885],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},992:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={title:"Basic Auth",keywords:["higress","basic auth"],description:"Basic authentication plug-in configuration reference"},l=void 0,o={unversionedId:"plugins/authentication/basic-auth",id:"plugins/authentication/basic-auth",title:"Basic Auth",description:"Basic authentication plug-in configuration reference",source:"@site/i18n/en-us/docusaurus-plugin-content-docs/current/plugins/authentication/basic-auth.md",sourceDirName:"plugins/authentication",slug:"/plugins/authentication/basic-auth",permalink:"/en-us/docs/plugins/authentication/basic-auth",draft:!1,editUrl:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/en-us/docusaurus-plugin-content-docs/current/plugins/authentication/basic-auth.md",tags:[],version:"current",frontMatter:{title:"Basic Auth",keywords:["higress","basic auth"],description:"Basic authentication plug-in configuration reference"},sidebar:"docs",previous:{title:"ai-security-guard",permalink:"/en-us/docs/plugins/ai/ai-security-guard"},next:{title:"Key Authentication",permalink:"/en-us/docs/plugins/authentication/key-auth"}},u={},s=[{value:"Description",id:"description",level:2},{value:"Configuration Fields",id:"configuration-fields",level:2},{value:"Configuration Samples",id:"configuration-samples",level:2},{value:"Enable Authentication and Authorization for specific routes or domains",id:"enable-authentication-and-authorization-for-specific-routes-or-domains",level:3},{value:"According to this configuration, the following requests are allowed:",id:"according-to-this-configuration-the-following-requests-are-allowed",level:4},{value:"The following requests will be denied:",id:"the-following-requests-will-be-denied",level:4},{value:"Enable basic auth for gateway instance",id:"enable-basic-auth-for-gateway-instance",level:3},{value:"Error Codes",id:"error-codes",level:2}],c={toc:s},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"basic-auth")," plugin implements the function of authentication based on the HTTP Basic Auth standard."),(0,r.kt)("h2",{id:"configuration-fields"},"Configuration Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"consumers")),(0,r.kt)("td",{parentName:"tr",align:null},"array of object"),(0,r.kt)("td",{parentName:"tr",align:null},"Required"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Caller of the service for authentication of requests")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_rules_")),(0,r.kt)("td",{parentName:"tr",align:null},"array of object"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Configure access permission list for specific routes or domains to authenticate requests")))),(0,r.kt)("p",null,"Filed descriptions of ",(0,r.kt)("inlineCode",{parentName:"p"},"consumers")," items:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"credential")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Credential for this consumer's access")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of this consumer")))),(0,r.kt)("p",null,"Configuration field descriptions for each item in ",(0,r.kt)("inlineCode",{parentName:"p"},"_rules_")," are as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_match_route_")),(0,r.kt)("td",{parentName:"tr",align:null},"array of string"),(0,r.kt)("td",{parentName:"tr",align:null},"One of ",(0,r.kt)("inlineCode",{parentName:"td"},"_match_route_")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"_match_domain_")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Configure the routes to match for request authorization")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_match_domain_")),(0,r.kt)("td",{parentName:"tr",align:null},"array of string"),(0,r.kt)("td",{parentName:"tr",align:null},"One of ",(0,r.kt)("inlineCode",{parentName:"td"},"_match_route_")," , ",(0,r.kt)("inlineCode",{parentName:"td"},"_match_domain_")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Configure the domains to match for request authorization")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"allow")),(0,r.kt)("td",{parentName:"tr",align:null},"array of string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Configure the consumer names allowed to access requests that match the match condition")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If the ",(0,r.kt)("inlineCode",{parentName:"li"},"_rules_")," field is not configured, authentication is enabled for all routes of the current gateway instance by default;"),(0,r.kt)("li",{parentName:"ul"},"For authenticated requests,  ",(0,r.kt)("inlineCode",{parentName:"li"},"X-Mse-Consumer")," field will be added to the request header to identify the name of the caller.")),(0,r.kt)("h2",{id:"configuration-samples"},"Configuration Samples"),(0,r.kt)("h3",{id:"enable-authentication-and-authorization-for-specific-routes-or-domains"},"Enable Authentication and Authorization for specific routes or domains"),(0,r.kt)("p",null,'The following configuration will enable Basic Auth authentication and authorization for specific routes or domains of the gateway. Note that the username and password in the credential information are separated by a ":", and the ',(0,r.kt)("inlineCode",{parentName:"p"},"credential")," field cannot be repeated."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# use the _rules_ field for fine-grained rule configuration.\nconsumers:\n- credential: 'admin:123456'\n  name: consumer1\n- credential: 'guest:abc'\n  name: consumer2\n_rules_:\n# rule 1: match by the route name.\n  - _match_route_:\n    - route-a\n    - route-b\n    allow:\n    - consumer1\n# rule 2: match by the domain.\n  - _match_domain_:\n    - \"*.example.com\"\n    - test.com\n    allow:\n    - consumer2\n")),(0,r.kt)("p",null,"In this sample, ",(0,r.kt)("inlineCode",{parentName:"p"},"route-a")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"route-b")," specified in ",(0,r.kt)("inlineCode",{parentName:"p"},"_match_route_")," are the route names filled in when creating gateway routes. When these two routes are matched, the caller with ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"consumer1")," is allowed to access, and other callers are not allowed to access."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"*.example.com")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"test.com")," specified in ",(0,r.kt)("inlineCode",{parentName:"p"},"_match_domain_")," are used to match the domain name of the request. When the domain name is matched, the caller with ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"consumer2")," is allowed to access, and other callers are not allowed to access."),(0,r.kt)("h4",{id:"according-to-this-configuration-the-following-requests-are-allowed"},"According to this configuration, the following requests are allowed:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Requests with specified username and password")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Assuming the following request will match with route-a\n# Use -u option of curl to specify the credentials\ncurl -u admin:123456  http://xxx.hello.com/test\n# Or specify the Authorization request header directly with the credentials in base64 encoding\ncurl -H 'Authorization: Basic YWRtaW46MTIzNDU2'  http://xxx.hello.com/test\n")),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"X-Mse-Consumer")," field will be added to the headers of the request, and its value in this example is ",(0,r.kt)("inlineCode",{parentName:"p"},"consumer1"),", used to identify the name of the caller when passed authentication and authorization."),(0,r.kt)("h4",{id:"the-following-requests-will-be-denied"},"The following requests will be denied:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Requests without providing username and password, returning 401")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl  http://xxx.hello.com/test\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Requests with incorrect username or password, returning 401")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -u admin:abc  http://xxx.hello.com/test\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Requests matched with a caller who has no access permission, returning 403")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# consumer2 is not in the allow list of route-a\ncurl -u guest:abc  http://xxx.hello.com/test\n")),(0,r.kt)("h3",{id:"enable-basic-auth-for-gateway-instance"},"Enable basic auth for gateway instance"),(0,r.kt)("p",null,"The following configuration does not specify the ",(0,r.kt)("inlineCode",{parentName:"p"},"_rules_")," field, so Basic Auth authentication will be effective for the whole gateway instance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"consumers:\n- credential: 'admin:123456'\n  name: consumer1\n- credential: 'guest:abc'\n  name: consumer2\n")),(0,r.kt)("h2",{id:"error-codes"},"Error Codes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"HTTP Status Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Error Info"),(0,r.kt)("th",{parentName:"tr",align:null},"Reason"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"401"),(0,r.kt)("td",{parentName:"tr",align:null},"Request denied by Basic Auth check. No Basic Authentication information found."),(0,r.kt)("td",{parentName:"tr",align:null},"Credentials not provided in the request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"401"),(0,r.kt)("td",{parentName:"tr",align:null},"Request denied by Basic Auth check. Invalid username and/or password"),(0,r.kt)("td",{parentName:"tr",align:null},"Invalid username and/or password")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"403"),(0,r.kt)("td",{parentName:"tr",align:null},"Request denied by Basic Auth check. Unauthorized consumer"),(0,r.kt)("td",{parentName:"tr",align:null},"Unauthorized consumer")))))}p.isMDXComponent=!0}}]);