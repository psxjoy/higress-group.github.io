"use strict";(self.webpackChunkhigress_website=self.webpackChunkhigress_website||[]).push([[2352],{3905:(e,t,s)=>{s.d(t,{Zo:()=>p,kt:()=>h});var n=s(7294);function a(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function r(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function i(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?r(Object(s),!0).forEach((function(t){a(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function o(e,t){if(null==e)return{};var s,n,a=function(e,t){if(null==e)return{};var s,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)s=r[n],t.indexOf(s)>=0||(a[s]=e[s]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)s=r[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(a[s]=e[s])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),s=t;return e&&(s="function"==typeof e?e(t):i(i({},t),e)),s},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var s=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(s),d=a,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||r;return s?n.createElement(h,i(i({ref:t},p),{},{components:s})):n.createElement(h,i({ref:t},p))}));function h(e,t){var s=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=s.length,i=new Array(r);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<r;c++)i[c]=s[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,s)}d.displayName="MDXCreateElement"},691:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=s(7462),a=(s(7294),s(3905));const r={title:"Deploy Higress By Helm",keywords:["kubernetes","helm","ops"],description:"Deploy Higress By Helm.",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/master/i18n/zh-cn/docusaurus-plugin-content-docs/current/ops/deploy-by-helm.md"},i="Deploy Higress By Helm",o={unversionedId:"ops/deploy-by-helm",id:"ops/deploy-by-helm",title:"Deploy Higress By Helm",description:"Deploy Higress By Helm.",source:"@site/i18n/en-us/docusaurus-plugin-content-docs/current/ops/deploy-by-helm.md",sourceDirName:"ops",slug:"/ops/deploy-by-helm",permalink:"/en-us/docs/ops/deploy-by-helm",draft:!1,editUrl:"https://github.com/higress-group/higress-group.github.io/blob/master/i18n/zh-cn/docusaurus-plugin-content-docs/current/ops/deploy-by-helm.md",tags:[],version:"current",frontMatter:{title:"Deploy Higress By Helm",keywords:["kubernetes","helm","ops"],description:"Deploy Higress By Helm.",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/master/i18n/zh-cn/docusaurus-plugin-content-docs/current/ops/deploy-by-helm.md"},sidebar:"docs",previous:{title:"Mcp Bridge Configuration",permalink:"/en-us/docs/user/mcp-bridge"},next:{title:"Upgrade",permalink:"/en-us/docs/ops/upgrade"}},l={},c=[{value:"Install Higress",id:"install-higress",level:2},{value:"Helm Installation Command",id:"helm-installation-command",level:3},{value:"Installation Parameters",id:"installation-parameters",level:3},{value:"Install Istio, and enable the Service Mesh mode",id:"install-istio-and-enable-the-service-mesh-mode",level:2},{value:"Option 1. Install Higress Istio (Recommended)",id:"option-1-install-higress-istio-recommended",level:3},{value:"<strong>Note:</strong>",id:"note",level:2},{value:"Option 2. Install Standard Istio",id:"option-2-install-standard-istio",level:3},{value:"Disable Service Mesh mode",id:"disable-service-mesh-mode",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...s}=e;return(0,a.kt)(u,(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deploy-higress-by-helm"},"Deploy Higress By Helm"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://helm.sh/"},"Helm")," is a package manager for Kubernetes used in software management and deployment. You can use Helm to perform a quick install of Higress Gateway in your Kubernetes cluster."),(0,a.kt)("h2",{id:"install-higress"},"Install Higress"),(0,a.kt)("p",null,"Higress Gateway consists of a control plane component ",(0,a.kt)("inlineCode",{parentName:"p"},"higress-controller")," and a data plane component ",(0,a.kt)("inlineCode",{parentName:"p"},"higress-gateway"),". It uses Istio to management ",(0,a.kt)("strong",{parentName:"p"},"API configurations of the data plane"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"higress-controller")," to manage ",(0,a.kt)("strong",{parentName:"p"},"API configurations of the control plane"),"."),(0,a.kt)("h3",{id:"helm-installation-command"},"Helm Installation Command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create ns higress-system\nhelm install higress -n higress-system  oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/charts/higress\n")),(0,a.kt)("h3",{id:"installation-parameters"},"Installation Parameters"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"enableStatus")),(0,a.kt)("p",null,"When migrating from Nginx Ingress, in order to avoid status field of Ingress objects being overwritten, Higress won't write the entry IP to the status field of the corresponding Ingress object."),(0,a.kt)("p",null,"You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"--set enableStatus=true")," enable to feature."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"ingressClass")),(0,a.kt)("p",null,"If there are multiple gateway instances deployed in the cluster, you can use ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/zh-cn/docs/concepts/services-networking/ingress/#ingress-class"},"IngressClass")," to distinguish the scope of each gateway instance."),(0,a.kt)("p",null,"You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"--set ingressClass=<name>")," to let Higress know which Ingress instances it shall listen to."),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"watchNamespace")),(0,a.kt)("p",null,"When isolating different business systems using K8s namespace, if each namespace requires a standalone gateway instance, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"watchNamespace")," to confine the Ingress watching of Higress within the given namespace."),(0,a.kt)("p",null,"You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"--set watchNamespace=<namespace>")," to set this value."),(0,a.kt)("h2",{id:"install-istio-and-enable-the-service-mesh-mode"},"Install Istio, and enable the Service Mesh mode"),(0,a.kt)("p",null,"Higress Gateway can use ",(0,a.kt)("a",{parentName:"p",href:"https://istio.io/"},"Istio")," to manage API configurations of the data plane. You can choose to deploy the custom version published by Higress, or the standard version provided by Istio authors.\nFor the feature differences of these two modes, you can check out the ",(0,a.kt)("a",{parentName:"p",href:"/en-us/docs/user/annotation"},"Higress Anntotaion Configuration Manual"),"."),(0,a.kt)("p",null,"In this mode, you should update the deployment options like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"helm upgrade higress -n higress-system --set global.enableMesh=true oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/charts/higress \n")),(0,a.kt)("h3",{id:"option-1-install-higress-istio-recommended"},"Option 1. Install Higress Istio (Recommended)"),(0,a.kt)("p",null,"After installation, ",(0,a.kt)("inlineCode",{parentName:"p"},"istiod")," will be ready once Higress is fully deployed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create ns istio-system\nhelm install istio -n istio-system oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/charts/istio\n")),(0,a.kt)("h2",{id:"note"},(0,a.kt)("strong",{parentName:"h2"},"Note:")),(0,a.kt)("p",null,"If Higress Gateway is not installed to the default namespace of ",(0,a.kt)("inlineCode",{parentName:"p"},"higress-system"),", you need to use ",(0,a.kt)("inlineCode",{parentName:"p"},"--set global.higressNamespace=")," to specify the actual namespace when installing Higress Istio. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"helm install istio -n istio-system --set global.higressNamespace=foo oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/charts/istio\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"option-2-install-standard-istio"},"Option 2. Install Standard Istio"),(0,a.kt)("p",null,"Please refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://istio.io/latest/docs/setup/install/"},"Installation Manual")," on the official website of Istio."),(0,a.kt)("p",null,"Unlike Higress Istio, the standard version of Istio won't try to retrieve configurations from Higress Controller by default. You need to configure ",(0,a.kt)("a",{parentName:"p",href:"https://istio.io/latest/docs/reference/config/istio.mesh.v1alpha1/#ConfigSource"},"MeshConfig.ConfigSource")," for this."),(0,a.kt)("p",null,"Here we use deploying with istioctl as an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'# my-config.yaml\napiVersion: install.istio.io/v1alpha1\nkind: IstioOperator\nspec:\n  meshConfig:\n    configSources:\n    # If there are multiple config sources, we need to add the k8s source explicitly.\n    - address: "k8s://"\n    # Assume Higress is installed in the namespace of higress-system\n    - address: "xds://higress-controller.higress-system:15051"\n    # If there are multiple Higress instances installed in different namespaces, you can add them below.\n')),(0,a.kt)("p",null,"Execute the installation command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"istioctl install -f my-config.yaml\n")),(0,a.kt)("h3",{id:"disable-service-mesh-mode"},"Disable Service Mesh mode"),(0,a.kt)("p",null,"First update the deployment parameters of Higress and wait for Higress to be ready:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"helm upgrade higress -n higress-system --set global.enableMesh=false oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/charts/higress\nkubectl wait -n higress-system deployment/higress-controller deployment/higress-gateway --for=condition=Available\n")),(0,a.kt)("p",null,"Delete istio and the corresponding CRDs."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"helm delete istio -n istio-system\nkubectl delete ns istio-system\nkubectl get crd -oname | grep --color=never 'istio.io' | xargs kubectl delete\n")))}m.isMDXComponent=!0}}]);