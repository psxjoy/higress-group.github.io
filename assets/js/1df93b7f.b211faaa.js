/*! For license information please see 1df93b7f.b211faaa.js.LICENSE.txt */
(self.webpackChunkhigress_website=self.webpackChunkhigress_website||[]).push([[3237,799,2972,3591,1519,5292,5707],{1262:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var n=s(7294),i=s(2389);function a(e){let{children:t,fallback:s}=e;return(0,i.Z)()?n.createElement(n.Fragment,null,t?.()):s??null}},5138:(e,t,s)=>{"use strict";s.d(t,{$Q:()=>d,N$:()=>m,zx:()=>c,JO:()=>o,iR:()=>h});var n=s(7294),i=s(4184),a=s.n(i),r=s(1876);const l={type:"primary",link:"",target:"_self"},c=function(e){return void 0===e&&(e=l),n.createElement("a",{className:a()({button:!0,[`button-${e.type}`]:!0}),target:e.target||"_self",href:(0,r.Rg)(e.link,e.language)},e.children||null)},o=e=>{const{type:t}=e;return n.createElement("i",{className:a()({"docsite-icon":!0,[`docsite-icon-${t}`]:!0})})},m=e=>n.createElement("div",{className:a()({bone:!0,[`bone-${e.type}`]:!0})}),d=e=>{const{text:t,img:s}=e,i=a()({bar:!0});return n.createElement("div",{className:i},n.createElement("div",{className:"bar-body"},n.createElement("img",{src:(0,r.Rg)(s),className:"front-img"}),n.createElement("span",null,t),n.createElement("img",{src:(0,r.Rg)(s),className:"back-img"})))};var g=s(3935);class u extends n.Component{constructor(e){super(e),this.getVisibleNum=()=>{let e=1;const t=this.container?.getBoundingClientRect().width,s=this.sliderItemChild0?.getBoundingClientRect?this.sliderItemChild0?.getBoundingClientRect().width:g.findDOMNode(this.sliderItemChild0)?.getBoundingClientRect().width;return t&&s&&(e=Math.floor(t/s)),e||1},this.getListWidth=()=>{let e=0;const{children:t}=this.props,{visibleNum:s}=this.state,i=n.Children.count(t),a=Math.ceil(i/s);if(this.container){const t=this.container?.getBoundingClientRect().width;e=t*a}return e},this.changeScreen=e=>{const{screenIndex:t}=this.state;e!==t&&this.setState({screenIndex:e})},this.renderSliderList=()=>{const{children:e}=this.props,{screenIndex:t,visibleNum:s}=this.state,i=[],a=n.Children.count(e),r=Math.ceil(a/s);for(let n=0;n<r;n++)i.push(Array.from(e).slice(n*s,(n+1)*s));return n.createElement("div",{className:"slider-list",style:{transform:`translateX(-${t*(this.container&&this.container?.getBoundingClientRect().width||0)}px)`,transition:"transform 500ms ease",width:this.getListWidth()}},i.map(((e,t)=>n.createElement("div",{className:"slider-screen",style:{width:this.container&&this.container?.getBoundingClientRect().width||0},key:t,ref:e=>{this[`sliderScreen${t}`]=e}},e.map(((e,i)=>n.createElement("div",{className:"slider-item",key:i},n.cloneElement(e,{ref:e=>{this[`sliderItemChild${t*s+i}`]=e}}))))))))},this.renderControl=()=>{const{children:e}=this.props,{screenIndex:t,visibleNum:s}=this.state,i=n.Children.count(e),r=Math.ceil(i/s),l=[];for(let c=0;c<r;c++)l.push(n.createElement("span",{key:c,className:a()({"slider-control-item":!0,"slider-control-item-active":c===t}),onClick:this.changeScreen.bind(this,c)}));return n.createElement("div",{className:"slider-control"},l)},this.container=null,this.state={screenIndex:0,visibleNum:1}}componentDidMount(){this.throttleAdjust=(0,r.P2)((()=>{this.setState({visibleNum:this.getVisibleNum()})}),200),window?.addEventListener?.("resize",this.throttleAdjust),this.setState({visibleNum:this.getVisibleNum()})}componentWillUnmount(){window?.removeEventListener?.("resize",this.throttleAdjust)}render(){return n.createElement("div",{className:"slider",ref:e=>{this.container=e}},this.renderSliderList(),this.renderControl())}}const h=u;class p extends n.Component{constructor(e){super(e),this.changePage=e=>{this.setState({page:e})},this.renderSliderList=()=>{const{children:e,pageSize:t}=this.props,{page:s,pageWidth:n}=this.state,i=[],a=React.Children.count(e),r=Math.ceil(a/t);for(let l=0;l<r;l++)i.push(Array.from(e).slice(l*t,(l+1)*t));return React.createElement("div",{className:"slider-list",style:{transform:`translateX(-${s*n}px)`,transition:"transform 500ms ease",width:r*n}},i.map(((e,t)=>React.createElement("div",{className:"slider-page",style:{width:n},key:t},e.map(((e,t)=>React.createElement("div",{className:"slider-item",key:t},e)))))))},this.renderControl=()=>{const{children:e,pageSize:t}=this.props,{page:s}=this.state,n=React.Children.count(e),i=Math.ceil(n/t);return React.createElement("div",{className:"slider-control"},React.createElement("img",{className:classnames({"slider-control-prev":!0,"slider-control-prev-hidden":0===s}),src:getLink("/img/system/prev.png"),onClick:this.changePage.bind(this,s-1)}),React.createElement("img",{className:classnames({"slider-control-next":!0,"slider-control-next-hidden":s===i-1}),src:getLink("/img/system/next.png"),onClick:this.changePage.bind(this,s+1)}))},this.container=null,this.state={page:0,pageWidth:0}}componentDidMount(){const e=this.container.getBoundingClientRect().width;this.setState({pageWidth:e}),this.throttleAdjust=throttle((()=>{this.setState({pageWidth:this.container.getBoundingClientRect().width})}),200),window.addEventListener("resize",this.throttleAdjust)}componentWillUnmount(){window.removeEventListener("resize",this.throttleAdjust)}render(){return React.createElement("div",{className:"page-slider",ref:e=>{this.container=e}},this.renderSliderList(),this.renderControl())}}var f=s(5999);(0,f.I)({id:"homepage.footerVersionTitle",message:"\u613f\u666f"}),(0,f.I)({id:"homepage.footerVersionContent",message:"\u4e3a\u7528\u6237\u63d0\u4f9b\u4e00\u7ad9\u5f0f\u4e91\u539f\u751f\u7f51\u5173\u89e3\u51b3\u65b9\u6848."}),(0,f.I)({id:"homepage.footerDocTitle",message:"\u6587\u6863"}),(0,f.I)({id:"homepage.footerDocListText1",message:"Higress \u662f\u4ec0\u4e48\uff1f"}),(0,f.I)({id:"homepage.footerDocListText2",message:"\u5feb\u901f\u5f00\u59cb"}),(0,f.I)({id:"homepage.footerDocListText3",message:"\u62a5\u544a\u6587\u6863\u95ee\u9898"}),(0,f.I)({id:"homepage.footerDocListText3",message:"\u5728Github\u4e0a\u7f16\u8f91\u6b64\u6587\u6863"}),(0,f.I)({id:"homepage.footerResourcesTitle",message:"\u8d44\u6e90"}),(0,f.I)({id:"homepage.footerResourcesListText1",message:"\u535a\u5ba2"}),(0,f.I)({id:"homepage.footerResourcesListText2",message:"\u793e\u533a"})},5212:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c});var n=s(7294),i=s(5999),a=s(1262),r=s(1876);const l={title:(0,i.I)({id:"homepage.introTitle",message:"\u53c2\u4e0e Higress \u793e\u533a"}),list:["https://img.alicdn.com/imgextra/i1/O1CN0166Gkdt1cRTVjJ2skL_!!6000000003597-2-tps-720-405.png"]},c=()=>n.createElement(a.Z,null,(()=>n.createElement("section",{className:"community-section"},n.createElement("h3",null,l.title),n.createElement("div",{className:"community"},l.list.map(((e,t)=>n.createElement("div",{className:"community-item",key:t},n.createElement("img",{src:(0,r.Rg)(e)}))))))))},7685:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o});var n=s(7294),i=s(5999),a=s(5138),r=s(1262);const l={list:[{icon:"feature-1",title:(0,i.I)({id:"homepage.featureListTitle1",message:"\u6613\u4e8e\u4f7f\u7528"}),content:[(0,i.I)({id:"homepage.featureListContent1",message:"\u63d0\u4f9b\u6d41\u91cf\u8c03\u5ea6\u3001\u670d\u52a1\u6cbb\u7406\u3001\u5b89\u5168\u9632\u62a4\u4e00\u7ad9\u5f0f\u7f51\u5173\u89e3\u51b3\u65b9\u6848\uff0c\u652f\u6301Console\u4e0eK8s Ingress\u3001Gateway API\u914d\u7f6e\u65b9\u5f0f\uff0c\u4e5f\u652f\u6301HTTP\u5230Dubbo\u534f\u8bae\u8f6c\u6362\uff0c\u4e00\u952e\u8f7b\u677e\u5b8c\u6210\u534f\u8bae\u6620\u5c04\u914d\u7f6e\u3002"})]},{icon:"feature-2",title:(0,i.I)({id:"homepage.featureListTitle2",message:"\u751f\u4ea7\u7b49\u7ea7"}),content:[(0,i.I)({id:"homepage.featureListContent2",message:"\u8131\u80ce\u4e8e\u963f\u91cc\u5df4\u5df4\u751f\u4ea7\u9a8c\u8bc1\u7684\u5185\u90e8\u4ea7\u54c1\uff0c\u7ecf\u5386\u53cc\u5341\u4e00\u6d2a\u5cf0\u9524\u70bc\uff0c\u4f01\u4e1a\u7ea7\u7684\u5f00\u6e90\u4ea7\u54c1"})]},{icon:"feature-3",title:(0,i.I)({id:"homepage.featureListTitle3",message:"\u4fbf\u4e8e\u6269\u5c55"}),content:(0,i.I)({id:"homepage.featureListContent3",message:"\u63d0\u4f9bWasm\u3001Lua\u3001\u8fdb\u7a0b\u5916\u4e09\u79cd\u63d2\u4ef6\u6269\u5c55\u673a\u5236\uff0c\u8ba9\u591a\u8bed\u8a00\u7f16\u5199\u63d2\u4ef6\u4e0d\u518d\u6210\u4e3a\u969c\u788d\uff0c\u63d2\u4ef6\u751f\u6548\u7c92\u5ea6\u65e2\u652f\u6301\u5168\u5c40\u7ea7\u3001\u57df\u540d\u7ea7\uff0c\u4e5f\u652f\u6301\u7ec6\u7c92\u5ea6\u7684\u8def\u7531\u7ea7"})},{icon:"feature-4",title:(0,i.I)({id:"homepage.featureListTitle4",message:"\u52a8\u6001\u70ed\u66f4\u65b0"}),content:(0,i.I)({id:"homepage.featureListContent4",message:"\u5f7b\u5e95\u6446\u8131reload\u5f15\u8d77\u7684\u6d41\u91cf\u6296\u52a8\uff0c\u914d\u7f6e\u53d8\u66f4\u6beb\u79d2\u7ea7\u751f\u6548\u4e14\u4e1a\u52a1\u65e0\u611f\uff0cWasm\u63d2\u4ef6\u70ed\u66f4\u65b0\u4e14\u6d41\u91cf\u65e0\u635f"})},{icon:"feature-5",title:(0,i.I)({id:"homepage.featureListTitle5",message:"\u5e73\u6ed1\u5347\u7ea7"}),content:(0,i.I)({id:"homepage.featureListContent5",message:"\u517c\u5bb9Nginx Ingress Annotation 80%+ \u7684\u4f7f\u7528\u573a\u666f\uff0c\u4e14\u63d0\u4f9b\u529f\u80fd\u66f4\u4e30\u5bcc\u7684\u6ce8\u89e3\uff0c\u7b80\u5355\u4e00\u6b65\u8f7b\u677e\u641e\u5b9aNginx Ingress\u8fc1\u79fb"})},{icon:"feature-6",title:(0,i.I)({id:"homepage.featureListTitle6",message:"\u5b89\u5168\u9632\u62a4"}),content:(0,i.I)({id:"homepage.featureListContent6",message:"\u63d0\u4f9bJWT\u3001OIDC\u3001\u81ea\u5b9a\u4e49\u8ba4\u8bc1\u9274\u6743\uff0c\u6df1\u5ea6\u96c6\u6210\u5f00\u6e90Web\u5e94\u7528\u9632\u706b\u5899\uff0c\u8ba9\u5b89\u5168\u9632\u62a4\u6210\u4e3a\u6807\u914d"})}],title:(0,i.I)({id:"homepage.featureTitle",message:"\u7279\u8272\u529f\u80fd"})},c=e=>{const{feature:t}=e;return n.createElement(r.Z,null,(()=>n.createElement("li",null,n.createElement(a.JO,{type:t.icon}),n.createElement("div",null,n.createElement("h4",null,t.title),n.createElement("p",null,t.content)))))},o=()=>n.createElement(r.Z,null,(()=>n.createElement("section",{className:"feature-section"},n.createElement("div",{className:"feature-container"},n.createElement("h3",null,l.title),n.createElement("ul",null,l.list.map(((e,t)=>n.createElement(c,{feature:e,key:t}))))))))},8413:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c});var n=s(7294),i=s(5999),a=s(1876),r=s(1262);const l={title:(0,i.I)({id:"homepage.introTitle",message:"Higress \u662f\u4ec0\u4e48\uff1f"}),desc:(0,i.I)({id:"homepage.introDesc",message:"Higress\u662f\u57fa\u4e8e\u963f\u91cc\u5185\u90e8\u4e24\u5e74\u591a\u7684Envoy Gateway\u5b9e\u8df5\u6c89\u6dc0\uff0c\u4ee5\u5f00\u6e90Istio + Envoy\u4e3a\u6838\u5fc3\u6784\u5efa\u7684\u4e0b\u4e00\u4ee3\u4e91\u539f\u751f\u7f51\u5173\uff0c\u5b9e\u73b0\u4e86\u6d41\u91cf\u8c03\u5ea6 + \u670d\u52a1\u6cbb\u7406 + \u5b89\u5168\u9632\u62a4\u4e09\u5408\u4e00\u7684\u9ad8\u96c6\u6210\u80fd\u529b\uff0c\u6df1\u5ea6\u96c6\u6210Dubbo\u3001Nacos\u3001Sentinel\u7b49\u5fae\u670d\u52a1\u6280\u672f\u6808\uff0c\u80fd\u591f\u4e3a\u60a8\u5e26\u6765\u4f4e\u6210\u672c\u7684\u7f51\u5173\u90e8\u7f72\u8fd0\u7ef4\u53ca\u9ad8\u6027\u80fd\u3001\u6613\u4f7f\u7528\u3001\u6613\u6269\u5c55\u3001\u529f\u80fd\u4e30\u5bcc\u7684\u4e00\u7ad9\u5f0f\u7f51\u5173\u89e3\u51b3\u65b9\u6848\u3002"}),img:{"zh-cn":"https://img.alicdn.com/imgextra/i4/O1CN01goCCMC1HBLZend9Gl_!!6000000000719-2-tps-3201-1561.png","en-us":"https://img.alicdn.com/imgextra/i3/O1CN01vndGtZ26dmaJ1SJg7_!!6000000007685-2-tps-3201-1561.png"}},c=e=>{let{language:t}=e;return n.createElement(r.Z,null,(()=>n.createElement("section",{className:"introduction-section"},n.createElement("div",{className:"introduction-body"},n.createElement("div",{className:"introduction"},n.createElement("h3",null,l.title),n.createElement("p",null,l.desc)),n.createElement("div",{className:"img-wrapper"},n.createElement("img",{src:(0,a.Rg)(l.img[t]||l.img["zh-cn"])}))))))}},7954:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>l});var n=s(7294),i=s(5999),a=s(1262);const r={title:(0,i.I)({id:"homepage.msemapTitle",message:"\u5fae\u670d\u52a1\u5168\u666f\u56fe"})},l=()=>n.createElement(a.Z,null,(()=>n.createElement("section",{className:"msemap-section"},n.createElement("div",{className:"msemap-container"},n.createElement("h3",null,r.title),n.createElement("div",{id:"mse-arc-container"})))))},8726:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o});var n=s(7294),i=s(5999),a=s(5138),r=s(1876),l=s(1262);const c={brandLogoUrl:"https://img.alicdn.com/imgextra/i1/O1CN01bmdCFQ1Zupzs0XIKc_!!6000000003255-55-tps-288-86.svg",briefIntroduction:(0,i.I)({id:"homepage.briefIntroduction",message:"\u4e00\u4e2a\u9075\u5faa\u5f00\u6e90Ingress/Gateway API\u6807\u51c6\uff0c\u63d0\u4f9b\u6d41\u91cf\u8c03\u5ea6\u3001\u670d\u52a1\u6cbb\u7406\u3001\u5b89\u5168\u9632\u62a4\u4e09\u5408\u4e00\u7684\u9ad8\u96c6\u6210\u3001\u6613\u4f7f\u7528\u3001\u6613\u6269\u5c55\u3001\u70ed\u66f4\u65b0\u7684\u4e0b\u4e00\u4ee3\u4e91\u539f\u751f\u7f51\u5173\u3002"}),buttons:[{text:(0,i.I)({id:"homepage.quickstartButton",message:"\u5feb\u901f\u5165\u95e8"}),link:"/docs/user/quickstart",type:"primary"},{text:"GitHub",link:"https://github.com/alibaba/higress",type:"normal",target:"_blank"}],versionNote:{text:"Release Note of 1.3.0",link:"https://github.com/alibaba/higress/releases/tag/v1.3.0"},releaseDate:"Released on Nov 3, 2023"},o=e=>{let{language:t}=e;const[s,i]=n.useState({starCount:"",forkCount:""}),{starCount:o,forkCount:m}=s;return n.useEffect((()=>{fetch("//api.github.com/repos/alibaba/higress").then((e=>e.json())).then((e=>{i({starCount:`${e.stargazers_count}`,forkCount:`${e.forks_count}`})}))}),[]),n.createElement(l.Z,null,(()=>n.createElement("section",{className:"top-section"},n.createElement("div",{className:"top-body"},n.createElement("div",{className:"vertical-middle"},n.createElement("div",{className:"product-name"},n.createElement("img",{src:(0,r.Rg)(c.brandLogoUrl)})),n.createElement("p",{className:"product-desc"},c.briefIntroduction),n.createElement("div",{className:"button-area"},c.buttons.map((e=>n.createElement(a.zx,{type:e.type,key:e.text,link:e.link,target:e.target,language:t},e.text)))),n.createElement("div",{className:"github-buttons"},n.createElement("a",{href:"https://github.com/alibaba/higress",target:"_blank",rel:"noopener noreferrer"},n.createElement("div",{className:"star"},n.createElement("img",{src:"https://img.alicdn.com/tfs/TB1FlB1JwHqK1RjSZFPXXcwapXa-32-32.png"}),n.createElement("span",{className:"type"},"Star"),n.createElement("span",{className:"line"}),n.createElement("span",{className:"count"},o))),n.createElement("a",{href:"https://github.com/alibaba/higress/fork",target:"_blank",rel:"noopener noreferrer"},n.createElement("div",{className:"fork"},n.createElement("img",{src:"https://img.alicdn.com/tfs/TB1zbxSJwDqK1RjSZSyXXaxEVXa-32-32.png"}),n.createElement("span",{className:"type"},"Fork"),n.createElement("span",{className:"line"}),n.createElement("span",{className:"count"},m)))),n.createElement("div",{className:"version-note"},n.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:(0,r.Rg)(c.versionNote.link)},c.versionNote.text)))))))}},7065:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c});var n=s(7294),i=s(5999),a=s(5138),r=s(1262);const l={desc:n.createElement("span",null,n.createElement(i.Z,{id:"homepage.userDesc1"},"\u8bf7\u5728")," ",n.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://survey.aliyun.com/apps/zhiliao/SmDQwdihe"},"Wanted: who's using Higress")," ",n.createElement(i.Z,{id:"homepage.userDesc2"},"\u4e0a\u63d0\u4f9b\u4fe1\u606f\u6765\u83b7\u53d6 Higress \u5f00\u6e90\u843d\u5730\u652f\u6301")),list:["https://img.alicdn.com/imgextra/i1/O1CN01TleQq128FAP8POtL5_!!6000000007902-2-tps-241-42.png","https://img.alicdn.com/imgextra/i4/O1CN01IOIk0s1bWgJ05f4HF_!!6000000003473-2-tps-1200-699.png","https://img.alicdn.com/tfs/TB1Ly5oS3HqK1RjSZFPXXcwapXa-238-54.png","https://img.alicdn.com/imgextra/i3/O1CN01pH2InM1iuDzpDxxox_!!6000000004472-0-tps-228-82.jpg","https://img.alicdn.com/imgextra/i3/O1CN013OMegK1xQCGX3CQNQ_!!6000000006437-0-tps-178-88.jpg","https://img.alicdn.com/imgextra/i1/O1CN01vrxF2I1rfs7rihLdy_!!6000000005659-0-tps-310-160.jpg","https://img.alicdn.com/imgextra/i1/O1CN01638eOX1ZcW9bTIID4_!!6000000003215-2-tps-700-394.png","https://img.alicdn.com/imgextra/i2/O1CN01T8c4by29tlErCcjHw_!!6000000008126-2-tps-170-170.png","https://img.alicdn.com/imgextra/i2/O1CN01j9lDmk1J7LLkD9jcJ_!!6000000000981-2-tps-2019-770.png","https://img.alicdn.com/imgextra/i1/O1CN01lxfk0h1k9AZkdpUD1_!!6000000004640-0-tps-225-225.jpg","https://img.alicdn.com/imgextra/i2/O1CN01gf8yAj1V7aybEg6hV_!!6000000002606-2-tps-140-44.png","https://img.alicdn.com/imgextra/i4/O1CN01Dn73yA1TXaDbBodqt_!!6000000002392-0-tps-262-224.jpg","https://img.alicdn.com/imgextra/i4/O1CN01UVr5D81iOAKlrECQa_!!6000000004402-2-tps-760-360.png"],title:(0,i.I)({id:"homepage.userTitle",message:"\u8c01\u5728\u4f7f\u7528 Higress"})},c=()=>n.createElement(r.Z,null,(()=>n.createElement("section",{className:"users-section"},n.createElement("h3",null,l.title),n.createElement(a.N$,{type:"dark"}),n.createElement("p",null,l.desc),n.createElement("div",{className:"users"},l.list.map(((e,t)=>n.createElement("div",{className:"user-item",key:t},n.createElement("img",{src:e}))))))))},9754:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>g});var n=s(7294),i=s(2263),a=s(9163),r=s(8726),l=s(8413),c=s(7954),o=s(7685),m=s(7065),d=s(5212);function g(){const{siteConfig:e,i18n:t}=(0,i.Z)(),s=t.currentLocale,g=n.useRef(null),u=(e,t)=>{t?(e.style.backgroundColor="transparent",e.style.boxShadow="unset"):(e.style.backgroundColor="#fff",e.style.boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 2px 0px")};return n.useEffect((()=>{g.current=document.getElementsByClassName("navbar")[0],g.current.style.position="fixed",g.current.style.width="100%",u(g.current,!0);window.addEventListener("scroll",(()=>{const e=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;u(g.current,e<60)}))}),[]),n.createElement(a.Z,{title:"Higress",description:"Higress official site"},n.createElement("div",{ref:g,className:"home-page"},n.createElement(r.default,{language:s}),n.createElement(l.default,{language:s}),n.createElement(c.default,null),n.createElement(o.default,null),n.createElement(m.default,null),n.createElement(d.default,null)))}},1876:(e,t,s)=>{"use strict";s.d(t,{P2:()=>n,Rg:()=>i});const n=(e,t)=>{let s=null;return function(){for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];const r=this;clearTimeout(s),s=setTimeout((()=>{e.apply(r,i)}),t)}},i=(e,t)=>{if(`${e}`.length>1&&/^\/[^/]/.test(`${e}`)){if(!t){const e=window.location.pathname;if("/"!==e){const s=e.indexOf("/",1),n=e.substring(1,s);t=-1!==n.indexOf("-")?n:null}t=t||"default"}return`${window?.rootPath||""}/${"default"===t?"zh-cn":t}${e}`}return e}},4184:(e,t)=>{var s;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var s=arguments[t];if(s){var a=typeof s;if("string"===a||"number"===a)e.push(s);else if(Array.isArray(s)){if(s.length){var r=i.apply(null,s);r&&e.push(r)}}else if("object"===a){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){e.push(s.toString());continue}for(var l in s)n.call(s,l)&&s[l]&&e.push(l)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(s=function(){return i}.apply(t,[]))||(e.exports=s)}()}}]);