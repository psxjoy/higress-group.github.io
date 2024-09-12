import{c as o,__tla as g}from"./astro-component.cI6d52vQ.js";import{r as c,m as d,u as y,__tla as v}from"./constant.CrEfIH7u.js";import{__tla as h}from"./astro/assets-service.Da9pL5MS.js";let e,a,t,i,p,l,r,m=Promise.all([(()=>{try{return g}catch{}})(),(()=>{try{return v}catch{}})(),(()=>{try{return h}catch{}})()]).then(async()=>{let s;s=`<p><img src="https://gw.alicdn.com/imgextra/i3/O1CN01WHnllZ1yP74eQYWHs_!!6000000006570-2-tps-2483-2024.png" alt="" referrerpolicy="no-referrer"></p>
<p>Higress\u662F\u57FA\u4E8E\u963F\u91CC\u5185\u90E8\u7684Envoy Gateway\u5B9E\u8DF5\u6C89\u6DC0\u3001\u4EE5\u5F00\u6E90 Istio + Envoy \u4E3A\u6838\u5FC3\u6784\u5EFA\u7684\u4E0B\u4E00\u4EE3\u4E91\u539F\u751F\u7F51\u5173\uFF0C\u5B9E\u73B0\u4E86\u6D41\u91CF\u7F51\u5173 + \u5FAE\u670D\u52A1\u7F51\u5173 + \u5B89\u5168\u7F51\u5173\u4E09\u5408\u4E00\u7684\u9AD8\u96C6\u6210\u80FD\u529B\uFF0C\u6DF1\u5EA6\u96C6\u6210Dubbo\u3001Nacos\u3001Sentinel\u7B49\u5FAE\u670D\u52A1\u6280\u672F\u6808\uFF0C\u80FD\u591F\u5E2E\u52A9\u7528\u6237\u6781\u5927\u7684\u964D\u4F4E\u7F51\u5173\u7684\u90E8\u7F72\u53CA\u8FD0\u7EF4\u6210\u672C\u4E14\u80FD\u529B\u4E0D\u6253\u6298\uFF1B\u5728\u6807\u51C6\u4E0A\u5168\u9762\u652F\u6301 Ingress \u4E0E Gateway API\uFF0C\u79EF\u6781\u62E5\u62B1\u4E91\u539F\u751F\u4E0B\u7684\u6807\u51C6API\u89C4\u8303\uFF1B\u540C\u65F6\uFF0CHigress Controller\u4E5F\u652F\u6301Nginx Ingress\u5E73\u6ED1\u8FC1\u79FB\uFF0C\u5E2E\u52A9\u7528\u6237\u96F6\u6210\u672C\u5FEB\u901F\u8FC1\u79FB\u5230Higress\u3002</p>
<p>Higress \u5177\u6709\u4E30\u5BCC\u7684\u53EF\u89C2\u6D4B\u80FD\u529B\uFF0C\u5305\u542B\u65E5\u5FD7\u3001\u76D1\u63A7\u3001\u94FE\u8DEF\u8FFD\u8E2A\u7B49\uFF0C\u672C\u6587\u4E3B\u8981\u4ECB\u7ECD Higress \u7684\u94FE\u8DEF\u8FFD\u8E2A\u529F\u80FD\u4EE5\u53CA\u5982\u4F55\u4E0E\u4E3B\u6D41\u7684\u94FE\u8DEF\u8FFD\u8E2A\u7CFB\u7EDF\u8FDB\u884C\u96C6\u6210\u3002</p>
<h2 id="\u5206\u5E03\u5F0F\u94FE\u8DEF\u8FFD\u8E2A\u4ECB\u7ECD">\u5206\u5E03\u5F0F\u94FE\u8DEF\u8FFD\u8E2A\u4ECB\u7ECD</h2>
<p>\u5206\u5E03\u5F0F\u94FE\u8DEF\u8FFD\u8E2A\uFF08Distributed Tracing\uFF09\u662F\u4E00\u79CD\u7528\u4E8E\u8DDF\u8E2A\u548C\u76D1\u63A7\u5206\u5E03\u5F0F\u7CFB\u7EDF\u4E2D\u8BF7\u6C42\u7684\u8DEF\u5F84\u548C\u6027\u80FD\u7684\u6280\u672F\u3002\u5B83\u53EF\u4EE5\u5E2E\u52A9\u5F00\u53D1\u4EBA\u5458\u548C\u8FD0\u7EF4\u56E2\u961F\u5728\u590D\u6742\u7684\u5206\u5E03\u5F0F\u7CFB\u7EDF\u4E2D\u5FEB\u901F\u5B9A\u4F4D\u548C\u89E3\u51B3\u95EE\u9898\u3002</p>
<p>\u5728\u5206\u5E03\u5F0F\u7CFB\u7EDF\u4E2D\uFF0C\u591A\u4E2A\u670D\u52A1\u4E4B\u95F4\u7684\u4EA4\u4E92\u6D89\u53CA\u5230\u590D\u6742\u7684\u7F51\u7EDC\u901A\u4FE1\u548C\u6570\u636E\u4F20\u8F93\uFF0C\u5176\u4E2D\u6BCF\u4E2A\u670D\u52A1\u53EF\u80FD\u7531\u4E0D\u540C\u7684\u56E2\u961F\u6216\u7EC4\u7EC7\u8D1F\u8D23\u7EF4\u62A4\u548C\u5F00\u53D1\u3002\u56E0\u6B64\uFF0C\u5728\u8FD9\u6837\u7684\u73AF\u5883\u4E0B\uFF0C\u5F53\u4E00\u4E2A\u8BF7\u6C42\u88AB\u53D1\u51FA\u5E76\u7ECF\u8FC7\u591A\u4E2A\u670D\u52A1\u7684\u5904\u7406\u540E\uFF0C\u5982\u679C\u51FA\u73B0\u4E86\u95EE\u9898\u6216\u9519\u8BEF\uFF0C\u5F88\u96BE\u5FEB\u901F\u5B9A\u4F4D\u5230\u6839\u56E0\u3002\u5206\u5E03\u5F0F\u5168\u94FE\u8DEF\u8FFD\u8E2A\u6280\u672F\u5219\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u5B83\u80FD\u591F\u8DDF\u8E2A\u548C\u8BB0\u5F55\u8BF7\u6C42\u5728\u7CFB\u7EDF\u4E2D\u7684\u4F20\u8F93\u8FC7\u7A0B\uFF0C\u5E76\u63D0\u4F9B\u8BE6\u7EC6\u7684\u6027\u80FD\u548C\u65E5\u5FD7\u4FE1\u606F\uFF0C\u4F7F\u5F97\u5F00\u53D1\u4EBA\u5458\u80FD\u591F\u5FEB\u901F\u8BCA\u65AD\u548C\u5B9A\u4F4D\u95EE\u9898\u3002\u5BF9\u4E8E\u5206\u5E03\u5F0F\u7CFB\u7EDF\u7684\u53EF\u9760\u6027\u3001\u6027\u80FD\u548C\u53EF\u7EF4\u62A4\u6027\u8D77\u5230\u4E86\u975E\u5E38\u91CD\u8981\u7684\u4F5C\u7528\u3002</p>
<p>\u5206\u5E03\u5F0F\u94FE\u8DEF\u8FFD\u8E2A\u4E2D\u6709\u4EE5\u4E0B\u51E0\u4E2A\u6838\u5FC3\u672F\u8BED\uFF1A</p>
<ol>
<li>Trace: \u7528\u6765\u63CF\u8FF0\u5728\u5206\u5E03\u5F0F\u7CFB\u7EDF\u4E2D\u4E00\u4E2A\u5B8C\u6574\u7684\u4E8B\u52A1\uFF08\u8FD9\u91CC\u7684\u4E8B\u52A1\u4E0D\u662F\u6307\u6570\u636E\u5E93\u4E2D\u7684\u4E8B\u52A1\uFF0C\u800C\u662F\u6307\u4E00\u4E2A\u5B8C\u6574\u7684\u4E1A\u52A1\u6D41\uFF09</li>
<li>Span: \u53EF\u547D\u540D\u7684\u3001\u8BB0\u5F55\u8017\u65F6\u7684\u4E00\u4E2A\u5DE5\u4F5C\u6D41\u7247\u6BB5\uFF0CSpan\u4E0A\u53EF\u8BBE\u7F6E\u591A\u4E2Akey:value
\u7684tags\uFF0C\u4E5F\u53EF\u4EE5\u8BB0\u5F55\u67D0\u4E2A\u65F6\u95F4\u70B9\u7684\u7ED3\u6784\u5316\u7684log</li>
<li>SpanContext: \u8FFD\u8E2A\u4FE1\u606F\u4F1A\u4F34\u968F\u7740\u6574\u4E2A\u5206\u5E03\u5F0F\u4E8B\u52A1\uFF0C\u4F1A\u901A\u8FC7\u7F51\u7EDC\u6216\u8005\u6D88\u606F\u603B\u7EBF\u6765\u4F20\u9012\u5230\u4E0B\u6E38\u670D\u52A1\u4E2D\uFF0C\u5305\u542B\u4E86 trace id\u3001span id \u548C\u5176\u5B83\u9700\u8981\u4F20\u64AD\u7684\u6570\u636E</li>
</ol>
<p>\u5206\u5E03\u5F0F\u94FE\u8DEF\u8FFD\u8E2A\u901A\u8FC7\u5728\u5206\u5E03\u5F0F\u7CFB\u7EDF\u4E2D\u7684\u6BCF\u4E2A\u8BF7\u6C42\u4E0A\u6DFB\u52A0\u552F\u4E00\u7684\u6807\u8BC6\u7B26\uFF08\u901A\u5E38\u662F\u4E00\u4E2Atrace ID\uFF09\uFF0C\u4EE5\u53CA\u53E6\u5916\u4E00\u4E9B\u5173\u952E\u7684\u4E0A\u4E0B\u6587\u4FE1\u606F\uFF08\u4F8B\u5982span ID\u3001\u7236span ID\u7B49\uFF09\uFF0C\u6765\u8DDF\u8E2A\u8BF7\u6C42\u7684\u6D41\u8F6C\u548C\u8DEF\u5F84\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\u3002\u5F53\u8BF7\u6C42\u901A\u8FC7\u4E0D\u540C\u7684\u670D\u52A1\u548C\u7EC4\u4EF6\u65F6\uFF0C\u6BCF\u4E2A\u7EC4\u4EF6\u90FD\u4F1A\u521B\u5EFA\u4E00\u4E2Aspan\u5E76\u8BB0\u5F55\u76F8\u5173\u7684\u4FE1\u606F\uFF0C\u5305\u62EC\u8BE5\u7EC4\u4EF6\u7684\u5904\u7406\u65F6\u95F4\u3001\u8C03\u7528\u7684\u5176\u4ED6\u7EC4\u4EF6\u7B49\u3002\u8FD9\u4E9Bspan\u5C06\u5F62\u6210\u4E00\u4E2A\u5206\u5E03\u5F0F\u7684\u94FE\u8DEF\uFF0C\u63CF\u8FF0\u4E86\u8BF7\u6C42\u7684\u5B8C\u6574\u8DEF\u5F84\u548C\u5404\u4E2A\u7EC4\u4EF6\u7684\u6027\u80FD\u3002</p>
<p><img src="https://gw.alicdn.com/imgextra/i4/O1CN01Ibdbyn1dCBxwoOPZP_!!6000000003699-2-tps-910-240.png" alt="" referrerpolicy="no-referrer"></p>
<h2 id="skywalking\u4ECB\u7ECD">Skywalking\u4ECB\u7ECD</h2>
<p>SkyWalking\u662F\u4E00\u4E2A\u5F00\u6E90\u7684\u5206\u5E03\u5F0F\u7CFB\u7EDF\u6027\u80FD\u76D1\u63A7\u548C\u8DDF\u8E2A\u89E3\u51B3\u65B9\u6848\u3002\u5B83\u4E13\u4E3A\u4E91\u539F\u751F\u548C\u5FAE\u670D\u52A1\u67B6\u6784\u8BBE\u8BA1\uFF0C\u53EF\u4EE5\u5E2E\u52A9\u5F00\u53D1\u4EBA\u5458\u548C\u8FD0\u7EF4\u56E2\u961F\u5B9E\u65F6\u76D1\u63A7\u548C\u5206\u6790\u5206\u5E03\u5F0F\u7CFB\u7EDF\u7684\u6027\u80FD\u548C\u94FE\u8DEF\u8FFD\u8E2A\u6570\u636E\u3002</p>
<p>SkyWalking \u903B\u8F91\u4E0A\u5206\u4E3A\u56DB\u90E8\u5206\uFF1A\u63A2\u9488\uFF0C\u5E73\u53F0\u540E\u7AEF\uFF0C\u5B58\u50A8\u548C\u7528\u6237\u754C\u9762\uFF1A</p>
<ul>
<li>\u63A2\u9488\uFF1A\u57FA\u4E8E\u4E0D\u540C\u7684\u6765\u6E90\u53EF\u80FD\u662F\u4E0D\u4E00\u6837\u7684\uFF0C\u4F46\u4F5C\u7528\u90FD\u662F\u6536\u96C6\u6570\u636E\uFF0C\u5C06\u6570\u636E\u683C\u5F0F\u5316\u4E3A SkyWalking \u9002\u7528\u7684\u683C\u5F0F</li>
<li>\u5E73\u53F0\u540E\u7AEF\uFF1A\u652F\u6301\u6570\u636E\u805A\u5408\uFF0C\u6570\u636E\u5206\u6790\u4EE5\u53CA\u9A71\u52A8\u6570\u636E\u6D41\u4ECE\u63A2\u9488\u5230\u7528\u6237\u754C\u9762\u7684\u6D41\u7A0B\u3002\u5206\u6790\u5305\u62EC Skywalking \u539F\u751F\u8FFD\u8E2A\u548C\u6027\u80FD\u6307\u6807\u4EE5\u53CA\u7B2C\u4E09\u65B9\u6765\u6E90\uFF0C\u5305\u62EC Istio \u53CA Envoy telemetry\uFF0CZipkin \u8FFD\u8E2A\u683C\u5F0F\u5316\u7B49</li>
<li>\u5B58\u50A8\uFF1A\u901A\u8FC7\u5F00\u653E\u7684\u63D2\u4EF6\u5316\u7684\u63A5\u53E3\u5B58\u653E SkyWalking \u6570\u636E\uFF0C\u652F\u6301 ElasticSearch\u3001MySQL\u7B49</li>
<li>UI\uFF1A\u4E00\u4E2A\u57FA\u4E8E\u63A5\u53E3\u9AD8\u5EA6\u5B9A\u5236\u5316\u7684Web\u7CFB\u7EDF\uFF0C\u7528\u6237\u53EF\u4EE5\u53EF\u89C6\u5316\u67E5\u770B\u548C\u7BA1\u7406 SkyWalking \u6570\u636E</li>
</ul>
<p>\u67B6\u6784\u56FE\u5982\u4E0B\u6240\u793A\uFF1A</p>
<p><img src="https://gw.alicdn.com/imgextra/i2/O1CN01RuF17i29VUMOLlkdi_!!6000000008073-2-tps-2160-721.png" alt="" referrerpolicy="no-referrer"></p>
<p>\u5E94\u7528\u7A0B\u5E8F\u63A5\u5165skywalking\u65F6\u4E3B\u8981\u6709\u4E24\u79CD\u65B9\u6CD5\uFF0C\u5206\u522B\u662F\u901A\u8FC7agent\u65B9\u5F0F\u63A5\u5165\u4EE5\u53CA\u901A\u8FC7SDK\u65B9\u5F0F\u63A5\u5165\u3002skywalking \u5B98\u65B9\u63D0\u4F9B\u4E86\u9002\u7528\u4E8E\u591A\u79CD\u8BED\u8A00\u7684agent\u4F9B\u5F00\u53D1\u8005\u4F7F\u7528\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p>
<p><img src="https://gw.alicdn.com/imgextra/i2/O1CN01MJVq8J1hyWDtqlHI5_!!6000000004346-0-tps-1500-875.jpg" alt="" referrerpolicy="no-referrer"></p>
<h2 id="higress\u94FE\u8DEF\u8FFD\u8E2A\u80FD\u529B">Higress\u94FE\u8DEF\u8FFD\u8E2A\u80FD\u529B</h2>
<p>Higress \u652F\u6301\u591A\u79CD\u94FE\u8DEF\u8FFD\u8E2A\u670D\u52A1\uFF0C\u8BE6\u60C5\u53C2\u89C1 <a href="https://www.envoyproxy.io/docs/envoy/latest/intro/arch_overview/observability/tracing#overview" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">envoy \u5B98\u65B9\u6587\u6863</a>\u3002\u5728 Higress 1.1 \u7248\u672C\u4EE5\u4E0A\uFF0C\u4EC5\u9700\u8981\u5728 configmap \u4E2D\u589E\u52A0\u4EE5\u4E0B\u914D\u7F6E\u5373\u53EF\u96C6\u6210skywalking\uFF0C\u5176\u4E2Dsampling\u5B57\u6BB5\u8BBE\u7F6E\u91C7\u6837\u7387\u3002</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">data</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">higress</span><span style="--0:#E1E4E8">: </span><span style="--0:#F97583">|-</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">tracing:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">enable: true</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">sampling: 100</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">timeout: 500</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">skywalking:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">       </span></span><span style="--0:#9ECBFF">service: skywalking-oap-server.op-system.svc.cluster.local</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">       </span></span><span style="--0:#9ECBFF">port: 11800</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="data:\x7F  higress: |-\x7F    tracing:\x7F      enable: true\x7F      sampling: 100\x7F      timeout: 500\x7F      skywalking:\x7F       service: skywalking-oap-server.op-system.svc.cluster.local\x7F       port: 11800"><div></div></button></div></figure></div>
<h2 id="\u6D4B\u8BD5\u73AF\u5883\u67B6\u6784">\u6D4B\u8BD5\u73AF\u5883\u67B6\u6784</h2>
<p>\u672C\u6587\u4E2D\u4F7F\u7528 6 \u4E2A spring boot \u5E94\u7528\u5728\u672C\u5730 k8s \u96C6\u7FA4\u4E2D\u6784\u5EFA\u5982\u4E0B\u8C03\u7528\u94FE\u8DEF\uFF1A</p>
<p><img src="https://gw.alicdn.com/imgextra/i1/O1CN01QciF4Z24NdUSNA4Pg_!!6000000007379-0-tps-2032-743.jpg" alt="" referrerpolicy="no-referrer"></p>
<p>\u672C\u6B21\u6D4B\u8BD5\u4E2D\u6D89\u53CA\u7684\u4EE3\u7801\u53EF\u4EE5\u5728 <a href="https://github.com/higress-group/higress-demo/tree/main/observability/skywalking" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">higress-demo</a> \u4E2D\u83B7\u53D6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4FEE\u6539\u73AF\u5883\u53D8\u91CF\u4E2D<code dir="auto">remote_addrs</code>\u548C<code dir="auto">sleep_time</code>\u6765\u6307\u5B9Aspringboot\u7A0B\u5E8F\u8981\u8C03\u7528\u7684\u4E0B\u6E38\u670D\u52A1\u4EE5\u53CA\u5F53\u524D\u670D\u52A1\u4F11\u7720\u7684\u65F6\u95F4\uFF0C\u4ECE\u800C\u521B\u9020\u4E0D\u540C\u7684\u6D4B\u8BD5\u573A\u666F\u3002</p>
<h2 id="\u94FE\u8DEF\u8FFD\u8E2A\u793A\u4F8B">\u94FE\u8DEF\u8FFD\u8E2A\u793A\u4F8B</h2>
<p>\u6D4B\u8BD5\u65F6\uFF0C\u8BBE\u7F6Espringboot\u670D\u52A1\u7684rt\u5206\u522B\u4E3A\uFF1A</p>

































<table><thead><tr><th align="center">service</th><th align="center">rt(ms)</th></tr></thead><tbody><tr><td align="center">springboot-svc-1</td><td align="center">100</td></tr><tr><td align="center">springboot-svc-2-1</td><td align="center">200</td></tr><tr><td align="center">springboot-svc-2-2</td><td align="center">200</td></tr><tr><td align="center">springboot-svc-3</td><td align="center">300</td></tr><tr><td align="center">springboot-svc-4-1</td><td align="center">100</td></tr><tr><td align="center">springboot-svc-4-2</td><td align="center">500</td></tr></tbody></table>
<p>\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u521B\u9020\u8BF7\u6C42\u793A\u4F8B\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#F97583">while</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8">; </span><span style="--0:#F97583">do</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">springboot.higress.io/spring-svc-1</span><span style="--0:#E1E4E8"> ; </span><span style="--0:#F97583">done</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="while :; do curl springboot.higress.io/spring-svc-1 ; done"><div></div></button></div></figure></div>
<h3 id="\u83B7\u53D6\u5FAE\u670D\u52A1\u8C03\u7528\u94FE\u8DEF">\u83B7\u53D6\u5FAE\u670D\u52A1\u8C03\u7528\u94FE\u8DEF</h3>
<p>skywalking\u57FA\u4E8E\u8BF7\u6C42\u8C03\u7528\u94FE\u8DEF\u751F\u6210\u5FAE\u670D\u52A1\u4E4B\u95F4\u7684\u62D3\u6251\u56FE\uFF0C\u901A\u8FC7\u62D3\u6251\u56FE\u53EF\u4EE5\u6E05\u6670\u7684\u770B\u5230\u7CFB\u7EDF\u67B6\u6784\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p>
<p><img src="https://gw.alicdn.com/imgextra/i4/O1CN01ao3Ul11c3CZy88XvE_!!6000000003544-0-tps-1330-1166.jpg" alt="" referrerpolicy="no-referrer"></p>
<h3 id="\u6392\u67E5\u7CFB\u7EDF\u6027\u80FD\u74F6\u9888">\u6392\u67E5\u7CFB\u7EDF\u6027\u80FD\u74F6\u9888</h3>
<p>\u5F53\u7CFB\u7EDF\u6574\u4F53rt\u8F83\u9AD8\u65F6\uFF0C\u5982\u4F55\u6392\u67E5\u7CFB\u7EDF\u7684\u6027\u80FD\u74F6\u9888\u5F80\u5F80\u662F\u5F00\u53D1\u8005\u5173\u5FC3\u7684\u95EE\u9898\u3002\u901A\u8FC7\u94FE\u8DEF\u8FFD\u8E2A\u80FD\u591F\u5E2E\u52A9\u5F00\u53D1\u8005\u6392\u67E5\u7CFB\u7EDF\u7684\u6027\u80FD\u74F6\u9888\u3002</p>
<p>\u6839\u636Etrace id\u80FD\u591F\u67E5\u770B\u8BF7\u6C42\u7684\u94FE\u8DEF\uFF0C\u5E76\u4E14\u80FD\u591F\u770B\u5230\u94FE\u8DEF\u4E2D\u5404\u8282\u70B9\u8BB0\u5F55\u7684\u76F8\u5173\u4FE1\u606F\uFF0C\u4E0B\u56FE\u8F83\u4E3A\u76F4\u89C2\u7684\u53CD\u6620\u4E86\u8BF7\u6C42\u8C03\u7528\u94FE\u8DEF\u4E2D\u5404\u73AF\u8282\u54CD\u5E94\u65F6\u95F4\u7684\u5BF9\u6BD4\uFF1A</p>
<p><img src="https://gw.alicdn.com/imgextra/i2/O1CN01l3XQmj22Wg4x9XA8i_!!6000000007128-0-tps-1500-981.jpg" alt="" referrerpolicy="no-referrer"></p>
<p>\u4EE5\u4E0B\u8868\u683C\u53CD\u6620\u4E86\u6BCF\u4E2A\u8BF7\u6C42\u81EA\u8EAB\u5360\u7528\u7684\u65F6\u95F4\uFF0C\u901A\u8FC7\u8BE5\u8868\u683C\u53EF\u4EE5\u770B\u5230 springboot-svc-4-2 \u8017\u65F6\u6700\u4E45\uFF0C\u4E3A 504 ms\uFF0C\u5F00\u53D1\u8005\u53EF\u4EE5\u6839\u636E\u6B64\u7ED3\u679C\u5BF9\u670D\u52A1\u8FDB\u884C\u6027\u80FD\u4F18\u5316\u3002</p>
<p><img src="https://gw.alicdn.com/imgextra/i2/O1CN01yYJb9Q1nQ47hZvFb1_!!6000000005083-0-tps-1500-720.jpg" alt="" referrerpolicy="no-referrer"></p>
<h3 id="\u6392\u67E5\u7CFB\u7EDF\u9519\u8BEF\u8282\u70B9">\u6392\u67E5\u7CFB\u7EDF\u9519\u8BEF\u8282\u70B9</h3>
<p>\u5F53\u7CFB\u7EDF\u4E2D\u8C03\u7528\u94FE\u8DEF\u8F83\u4E3A\u590D\u6742\u65F6\uFF0C\u5982\u679C\u67D0\u4E2A\u73AF\u8282\u51FA\u73B0\u9519\u8BEF\uFF0C\u6392\u67E5\u95EE\u9898\u5BF9\u4E8E\u5F00\u53D1\u8005\u6765\u8BF4\u662F\u4E00\u4EF6\u56F0\u96BE\u7684\u4E8B\u60C5\uFF0C\u73B0\u5728\u5220\u9664 springboot svc 4-2\u6765\u6A21\u62DF\u7CFB\u7EDF\u67D0\u4E00\u73AF\u8282\u51FA\u73B0\u9519\u8BEF\u7684\u60C5\u51B5\uFF0C\u901A\u8FC7\u94FE\u8DEF\u8FFD\u8E2A\u6765\u6392\u67E5\u95EE\u9898\u3002</p>
<p><img src="https://gw.alicdn.com/imgextra/i4/O1CN01xkresx1M3AhMbI9KN_!!6000000001378-0-tps-1500-794.jpg" alt="" referrerpolicy="no-referrer"></p>
<p>\u6B64\u65F6\u94FE\u8DEF\u8FFD\u8E2A\u663E\u793A\u7684\u8C03\u7528\u94FE\u8DEF\u5982\u4E0A\u56FE\u6240\u793A\uFF0C\u5176\u4E2D\u7EA2\u8272\u5706\u5708\u8868\u793A\u670D\u52A1\u51FA\u73B0\u9519\u8BEF\uFF0C\u53EF\u4EE5\u770B\u5230\u6B64\u65F6\u94FE\u8DEF\u4E2D springboot svc 1\uFF0Cspringboot svc 2-1\uFF0Cspringboot svc 3\uFF0Cspringboot svc 4-2 \u7684\u8C03\u7528\u90FD\u662F\u9519\u8BEF\u7684\uFF0C\u8FD9\u4E9B\u670D\u52A1\u8C03\u7528\u9519\u8BEF\u90FD\u662F\u7531 springboot svc 4-2 \u8C03\u7528\u9519\u8BEF\u5F15\u53D1\u7684\u8FDE\u9501\u53CD\u5E94\uFF0C\u53EA\u6709 springboot svc 4-1 \u8C03\u7528\u662F\u6210\u529F\u7684\u3002</p>
<p>\u8C03\u7528 springboot svc 4-2 \u65F6 skywalking span \u4E2D\u8BB0\u5F55\u7684\u4FE1\u606F\u5982\u4E0B\uFF1A</p>
<p><img src="https://gw.alicdn.com/imgextra/i4/O1CN01irM65421nnGPRsBwV_!!6000000007030-0-tps-1500-713.jpg" alt="" referrerpolicy="no-referrer"></p>
<p>\u901A\u8FC7\u4EE5\u4E0A\u4FE1\u606F\u6211\u4EEC\u80FD\u591F\u77E5\u9053 springboot svc 4-2 \u7684\u670D\u52A1\u7AEF\u51FA\u73B0\u4E86\u95EE\u9898\uFF0C\u4ECE\u800C\u80FD\u591F\u7CBE\u51C6\u5730\u53BB\u89E3\u51B3\u95EE\u9898\u3002</p>
<h2 id="\u52A0\u5165higress\u793E\u533A">\u52A0\u5165Higress\u793E\u533A</h2>
<p><img src="https://gw.alicdn.com/imgextra/i4/O1CN01z65KzP1VZzcl9y0cZ_!!6000000002668-0-tps-1500-909.jpg" alt="" referrerpolicy="no-referrer"></p>`,i={title:"Higress + Skywalking + SpringBoot \u94FE\u8DEF\u8FFD\u8E2A\u63A2\u7D22"},t="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/user/skywalking-springboot.md",r=void 0,l=function(){return`# Higress + Skywalking + SpringBoot \u94FE\u8DEF\u8FFD\u8E2A\u63A2\u7D22
![](https://gw.alicdn.com/imgextra/i3/O1CN01WHnllZ1yP74eQYWHs_!!6000000006570-2-tps-2483-2024.png)

Higress\u662F\u57FA\u4E8E\u963F\u91CC\u5185\u90E8\u7684Envoy Gateway\u5B9E\u8DF5\u6C89\u6DC0\u3001\u4EE5\u5F00\u6E90 Istio + Envoy \u4E3A\u6838\u5FC3\u6784\u5EFA\u7684\u4E0B\u4E00\u4EE3\u4E91\u539F\u751F\u7F51\u5173\uFF0C\u5B9E\u73B0\u4E86\u6D41\u91CF\u7F51\u5173 + \u5FAE\u670D\u52A1\u7F51\u5173 + \u5B89\u5168\u7F51\u5173\u4E09\u5408\u4E00\u7684\u9AD8\u96C6\u6210\u80FD\u529B\uFF0C\u6DF1\u5EA6\u96C6\u6210Dubbo\u3001Nacos\u3001Sentinel\u7B49\u5FAE\u670D\u52A1\u6280\u672F\u6808\uFF0C\u80FD\u591F\u5E2E\u52A9\u7528\u6237\u6781\u5927\u7684\u964D\u4F4E\u7F51\u5173\u7684\u90E8\u7F72\u53CA\u8FD0\u7EF4\u6210\u672C\u4E14\u80FD\u529B\u4E0D\u6253\u6298\uFF1B\u5728\u6807\u51C6\u4E0A\u5168\u9762\u652F\u6301 Ingress \u4E0E Gateway API\uFF0C\u79EF\u6781\u62E5\u62B1\u4E91\u539F\u751F\u4E0B\u7684\u6807\u51C6API\u89C4\u8303\uFF1B\u540C\u65F6\uFF0CHigress Controller\u4E5F\u652F\u6301Nginx Ingress\u5E73\u6ED1\u8FC1\u79FB\uFF0C\u5E2E\u52A9\u7528\u6237\u96F6\u6210\u672C\u5FEB\u901F\u8FC1\u79FB\u5230Higress\u3002

Higress \u5177\u6709\u4E30\u5BCC\u7684\u53EF\u89C2\u6D4B\u80FD\u529B\uFF0C\u5305\u542B\u65E5\u5FD7\u3001\u76D1\u63A7\u3001\u94FE\u8DEF\u8FFD\u8E2A\u7B49\uFF0C\u672C\u6587\u4E3B\u8981\u4ECB\u7ECD Higress \u7684\u94FE\u8DEF\u8FFD\u8E2A\u529F\u80FD\u4EE5\u53CA\u5982\u4F55\u4E0E\u4E3B\u6D41\u7684\u94FE\u8DEF\u8FFD\u8E2A\u7CFB\u7EDF\u8FDB\u884C\u96C6\u6210\u3002

## \u5206\u5E03\u5F0F\u94FE\u8DEF\u8FFD\u8E2A\u4ECB\u7ECD
\u5206\u5E03\u5F0F\u94FE\u8DEF\u8FFD\u8E2A\uFF08Distributed Tracing\uFF09\u662F\u4E00\u79CD\u7528\u4E8E\u8DDF\u8E2A\u548C\u76D1\u63A7\u5206\u5E03\u5F0F\u7CFB\u7EDF\u4E2D\u8BF7\u6C42\u7684\u8DEF\u5F84\u548C\u6027\u80FD\u7684\u6280\u672F\u3002\u5B83\u53EF\u4EE5\u5E2E\u52A9\u5F00\u53D1\u4EBA\u5458\u548C\u8FD0\u7EF4\u56E2\u961F\u5728\u590D\u6742\u7684\u5206\u5E03\u5F0F\u7CFB\u7EDF\u4E2D\u5FEB\u901F\u5B9A\u4F4D\u548C\u89E3\u51B3\u95EE\u9898\u3002

\u5728\u5206\u5E03\u5F0F\u7CFB\u7EDF\u4E2D\uFF0C\u591A\u4E2A\u670D\u52A1\u4E4B\u95F4\u7684\u4EA4\u4E92\u6D89\u53CA\u5230\u590D\u6742\u7684\u7F51\u7EDC\u901A\u4FE1\u548C\u6570\u636E\u4F20\u8F93\uFF0C\u5176\u4E2D\u6BCF\u4E2A\u670D\u52A1\u53EF\u80FD\u7531\u4E0D\u540C\u7684\u56E2\u961F\u6216\u7EC4\u7EC7\u8D1F\u8D23\u7EF4\u62A4\u548C\u5F00\u53D1\u3002\u56E0\u6B64\uFF0C\u5728\u8FD9\u6837\u7684\u73AF\u5883\u4E0B\uFF0C\u5F53\u4E00\u4E2A\u8BF7\u6C42\u88AB\u53D1\u51FA\u5E76\u7ECF\u8FC7\u591A\u4E2A\u670D\u52A1\u7684\u5904\u7406\u540E\uFF0C\u5982\u679C\u51FA\u73B0\u4E86\u95EE\u9898\u6216\u9519\u8BEF\uFF0C\u5F88\u96BE\u5FEB\u901F\u5B9A\u4F4D\u5230\u6839\u56E0\u3002\u5206\u5E03\u5F0F\u5168\u94FE\u8DEF\u8FFD\u8E2A\u6280\u672F\u5219\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u5B83\u80FD\u591F\u8DDF\u8E2A\u548C\u8BB0\u5F55\u8BF7\u6C42\u5728\u7CFB\u7EDF\u4E2D\u7684\u4F20\u8F93\u8FC7\u7A0B\uFF0C\u5E76\u63D0\u4F9B\u8BE6\u7EC6\u7684\u6027\u80FD\u548C\u65E5\u5FD7\u4FE1\u606F\uFF0C\u4F7F\u5F97\u5F00\u53D1\u4EBA\u5458\u80FD\u591F\u5FEB\u901F\u8BCA\u65AD\u548C\u5B9A\u4F4D\u95EE\u9898\u3002\u5BF9\u4E8E\u5206\u5E03\u5F0F\u7CFB\u7EDF\u7684\u53EF\u9760\u6027\u3001\u6027\u80FD\u548C\u53EF\u7EF4\u62A4\u6027\u8D77\u5230\u4E86\u975E\u5E38\u91CD\u8981\u7684\u4F5C\u7528\u3002

\u5206\u5E03\u5F0F\u94FE\u8DEF\u8FFD\u8E2A\u4E2D\u6709\u4EE5\u4E0B\u51E0\u4E2A\u6838\u5FC3\u672F\u8BED\uFF1A
1. Trace: \u7528\u6765\u63CF\u8FF0\u5728\u5206\u5E03\u5F0F\u7CFB\u7EDF\u4E2D\u4E00\u4E2A\u5B8C\u6574\u7684\u4E8B\u52A1\uFF08\u8FD9\u91CC\u7684\u4E8B\u52A1\u4E0D\u662F\u6307\u6570\u636E\u5E93\u4E2D\u7684\u4E8B\u52A1\uFF0C\u800C\u662F\u6307\u4E00\u4E2A\u5B8C\u6574\u7684\u4E1A\u52A1\u6D41\uFF09
2. Span: \u53EF\u547D\u540D\u7684\u3001\u8BB0\u5F55\u8017\u65F6\u7684\u4E00\u4E2A\u5DE5\u4F5C\u6D41\u7247\u6BB5\uFF0CSpan\u4E0A\u53EF\u8BBE\u7F6E\u591A\u4E2Akey:value\u7684tags\uFF0C\u4E5F\u53EF\u4EE5\u8BB0\u5F55\u67D0\u4E2A\u65F6\u95F4\u70B9\u7684\u7ED3\u6784\u5316\u7684log
3. SpanContext: \u8FFD\u8E2A\u4FE1\u606F\u4F1A\u4F34\u968F\u7740\u6574\u4E2A\u5206\u5E03\u5F0F\u4E8B\u52A1\uFF0C\u4F1A\u901A\u8FC7\u7F51\u7EDC\u6216\u8005\u6D88\u606F\u603B\u7EBF\u6765\u4F20\u9012\u5230\u4E0B\u6E38\u670D\u52A1\u4E2D\uFF0C\u5305\u542B\u4E86 trace id\u3001span id \u548C\u5176\u5B83\u9700\u8981\u4F20\u64AD\u7684\u6570\u636E

\u5206\u5E03\u5F0F\u94FE\u8DEF\u8FFD\u8E2A\u901A\u8FC7\u5728\u5206\u5E03\u5F0F\u7CFB\u7EDF\u4E2D\u7684\u6BCF\u4E2A\u8BF7\u6C42\u4E0A\u6DFB\u52A0\u552F\u4E00\u7684\u6807\u8BC6\u7B26\uFF08\u901A\u5E38\u662F\u4E00\u4E2Atrace ID\uFF09\uFF0C\u4EE5\u53CA\u53E6\u5916\u4E00\u4E9B\u5173\u952E\u7684\u4E0A\u4E0B\u6587\u4FE1\u606F\uFF08\u4F8B\u5982span ID\u3001\u7236span ID\u7B49\uFF09\uFF0C\u6765\u8DDF\u8E2A\u8BF7\u6C42\u7684\u6D41\u8F6C\u548C\u8DEF\u5F84\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\u3002\u5F53\u8BF7\u6C42\u901A\u8FC7\u4E0D\u540C\u7684\u670D\u52A1\u548C\u7EC4\u4EF6\u65F6\uFF0C\u6BCF\u4E2A\u7EC4\u4EF6\u90FD\u4F1A\u521B\u5EFA\u4E00\u4E2Aspan\u5E76\u8BB0\u5F55\u76F8\u5173\u7684\u4FE1\u606F\uFF0C\u5305\u62EC\u8BE5\u7EC4\u4EF6\u7684\u5904\u7406\u65F6\u95F4\u3001\u8C03\u7528\u7684\u5176\u4ED6\u7EC4\u4EF6\u7B49\u3002\u8FD9\u4E9Bspan\u5C06\u5F62\u6210\u4E00\u4E2A\u5206\u5E03\u5F0F\u7684\u94FE\u8DEF\uFF0C\u63CF\u8FF0\u4E86\u8BF7\u6C42\u7684\u5B8C\u6574\u8DEF\u5F84\u548C\u5404\u4E2A\u7EC4\u4EF6\u7684\u6027\u80FD\u3002

![](https://gw.alicdn.com/imgextra/i4/O1CN01Ibdbyn1dCBxwoOPZP_!!6000000003699-2-tps-910-240.png)

## Skywalking\u4ECB\u7ECD
SkyWalking\u662F\u4E00\u4E2A\u5F00\u6E90\u7684\u5206\u5E03\u5F0F\u7CFB\u7EDF\u6027\u80FD\u76D1\u63A7\u548C\u8DDF\u8E2A\u89E3\u51B3\u65B9\u6848\u3002\u5B83\u4E13\u4E3A\u4E91\u539F\u751F\u548C\u5FAE\u670D\u52A1\u67B6\u6784\u8BBE\u8BA1\uFF0C\u53EF\u4EE5\u5E2E\u52A9\u5F00\u53D1\u4EBA\u5458\u548C\u8FD0\u7EF4\u56E2\u961F\u5B9E\u65F6\u76D1\u63A7\u548C\u5206\u6790\u5206\u5E03\u5F0F\u7CFB\u7EDF\u7684\u6027\u80FD\u548C\u94FE\u8DEF\u8FFD\u8E2A\u6570\u636E\u3002

SkyWalking \u903B\u8F91\u4E0A\u5206\u4E3A\u56DB\u90E8\u5206\uFF1A\u63A2\u9488\uFF0C\u5E73\u53F0\u540E\u7AEF\uFF0C\u5B58\u50A8\u548C\u7528\u6237\u754C\u9762\uFF1A
- \u63A2\u9488\uFF1A\u57FA\u4E8E\u4E0D\u540C\u7684\u6765\u6E90\u53EF\u80FD\u662F\u4E0D\u4E00\u6837\u7684\uFF0C\u4F46\u4F5C\u7528\u90FD\u662F\u6536\u96C6\u6570\u636E\uFF0C\u5C06\u6570\u636E\u683C\u5F0F\u5316\u4E3A SkyWalking \u9002\u7528\u7684\u683C\u5F0F
- \u5E73\u53F0\u540E\u7AEF\uFF1A\u652F\u6301\u6570\u636E\u805A\u5408\uFF0C\u6570\u636E\u5206\u6790\u4EE5\u53CA\u9A71\u52A8\u6570\u636E\u6D41\u4ECE\u63A2\u9488\u5230\u7528\u6237\u754C\u9762\u7684\u6D41\u7A0B\u3002\u5206\u6790\u5305\u62EC Skywalking \u539F\u751F\u8FFD\u8E2A\u548C\u6027\u80FD\u6307\u6807\u4EE5\u53CA\u7B2C\u4E09\u65B9\u6765\u6E90\uFF0C\u5305\u62EC Istio \u53CA Envoy telemetry\uFF0CZipkin \u8FFD\u8E2A\u683C\u5F0F\u5316\u7B49
- \u5B58\u50A8\uFF1A\u901A\u8FC7\u5F00\u653E\u7684\u63D2\u4EF6\u5316\u7684\u63A5\u53E3\u5B58\u653E SkyWalking \u6570\u636E\uFF0C\u652F\u6301 ElasticSearch\u3001MySQL\u7B49
- UI\uFF1A\u4E00\u4E2A\u57FA\u4E8E\u63A5\u53E3\u9AD8\u5EA6\u5B9A\u5236\u5316\u7684Web\u7CFB\u7EDF\uFF0C\u7528\u6237\u53EF\u4EE5\u53EF\u89C6\u5316\u67E5\u770B\u548C\u7BA1\u7406 SkyWalking \u6570\u636E

\u67B6\u6784\u56FE\u5982\u4E0B\u6240\u793A\uFF1A

![](https://gw.alicdn.com/imgextra/i2/O1CN01RuF17i29VUMOLlkdi_!!6000000008073-2-tps-2160-721.png)

\u5E94\u7528\u7A0B\u5E8F\u63A5\u5165skywalking\u65F6\u4E3B\u8981\u6709\u4E24\u79CD\u65B9\u6CD5\uFF0C\u5206\u522B\u662F\u901A\u8FC7agent\u65B9\u5F0F\u63A5\u5165\u4EE5\u53CA\u901A\u8FC7SDK\u65B9\u5F0F\u63A5\u5165\u3002skywalking \u5B98\u65B9\u63D0\u4F9B\u4E86\u9002\u7528\u4E8E\u591A\u79CD\u8BED\u8A00\u7684agent\u4F9B\u5F00\u53D1\u8005\u4F7F\u7528\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A

![](https://gw.alicdn.com/imgextra/i2/O1CN01MJVq8J1hyWDtqlHI5_!!6000000004346-0-tps-1500-875.jpg)

## Higress\u94FE\u8DEF\u8FFD\u8E2A\u80FD\u529B
Higress \u652F\u6301\u591A\u79CD\u94FE\u8DEF\u8FFD\u8E2A\u670D\u52A1\uFF0C\u8BE6\u60C5\u53C2\u89C1 [envoy \u5B98\u65B9\u6587\u6863](https://www.envoyproxy.io/docs/envoy/latest/intro/arch_overview/observability/tracing#overview)\u3002\u5728 Higress 1.1 \u7248\u672C\u4EE5\u4E0A\uFF0C\u4EC5\u9700\u8981\u5728 configmap \u4E2D\u589E\u52A0\u4EE5\u4E0B\u914D\u7F6E\u5373\u53EF\u96C6\u6210skywalking\uFF0C\u5176\u4E2Dsampling\u5B57\u6BB5\u8BBE\u7F6E\u91C7\u6837\u7387\u3002

\`\`\`yaml
data:
  higress: |-
    tracing:
      enable: true
      sampling: 100
      timeout: 500
      skywalking:
       service: skywalking-oap-server.op-system.svc.cluster.local
       port: 11800
\`\`\`

## \u6D4B\u8BD5\u73AF\u5883\u67B6\u6784
\u672C\u6587\u4E2D\u4F7F\u7528 6 \u4E2A spring boot \u5E94\u7528\u5728\u672C\u5730 k8s \u96C6\u7FA4\u4E2D\u6784\u5EFA\u5982\u4E0B\u8C03\u7528\u94FE\u8DEF\uFF1A

![](https://gw.alicdn.com/imgextra/i1/O1CN01QciF4Z24NdUSNA4Pg_!!6000000007379-0-tps-2032-743.jpg)

\u672C\u6B21\u6D4B\u8BD5\u4E2D\u6D89\u53CA\u7684\u4EE3\u7801\u53EF\u4EE5\u5728 [higress-demo](https://github.com/higress-group/higress-demo/tree/main/observability/skywalking) \u4E2D\u83B7\u53D6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4FEE\u6539\u73AF\u5883\u53D8\u91CF\u4E2D\`remote_addrs\`\u548C\`sleep_time\`\u6765\u6307\u5B9Aspringboot\u7A0B\u5E8F\u8981\u8C03\u7528\u7684\u4E0B\u6E38\u670D\u52A1\u4EE5\u53CA\u5F53\u524D\u670D\u52A1\u4F11\u7720\u7684\u65F6\u95F4\uFF0C\u4ECE\u800C\u521B\u9020\u4E0D\u540C\u7684\u6D4B\u8BD5\u573A\u666F\u3002

## \u94FE\u8DEF\u8FFD\u8E2A\u793A\u4F8B
\u6D4B\u8BD5\u65F6\uFF0C\u8BBE\u7F6Espringboot\u670D\u52A1\u7684rt\u5206\u522B\u4E3A\uFF1A
| service |	rt(ms) |
| :-: | :-: |
| springboot-svc-1 | 100 |
| springboot-svc-2-1 | 200 |
| springboot-svc-2-2 | 200 |
| springboot-svc-3 | 300 |
| springboot-svc-4-1 | 100 |
| springboot-svc-4-2 | 500 |

\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u521B\u9020\u8BF7\u6C42\u793A\u4F8B\uFF1A

\`\`\`bash
while :; do curl springboot.higress.io/spring-svc-1 ; done
\`\`\`

### \u83B7\u53D6\u5FAE\u670D\u52A1\u8C03\u7528\u94FE\u8DEF
skywalking\u57FA\u4E8E\u8BF7\u6C42\u8C03\u7528\u94FE\u8DEF\u751F\u6210\u5FAE\u670D\u52A1\u4E4B\u95F4\u7684\u62D3\u6251\u56FE\uFF0C\u901A\u8FC7\u62D3\u6251\u56FE\u53EF\u4EE5\u6E05\u6670\u7684\u770B\u5230\u7CFB\u7EDF\u67B6\u6784\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A

![](https://gw.alicdn.com/imgextra/i4/O1CN01ao3Ul11c3CZy88XvE_!!6000000003544-0-tps-1330-1166.jpg)

### \u6392\u67E5\u7CFB\u7EDF\u6027\u80FD\u74F6\u9888
\u5F53\u7CFB\u7EDF\u6574\u4F53rt\u8F83\u9AD8\u65F6\uFF0C\u5982\u4F55\u6392\u67E5\u7CFB\u7EDF\u7684\u6027\u80FD\u74F6\u9888\u5F80\u5F80\u662F\u5F00\u53D1\u8005\u5173\u5FC3\u7684\u95EE\u9898\u3002\u901A\u8FC7\u94FE\u8DEF\u8FFD\u8E2A\u80FD\u591F\u5E2E\u52A9\u5F00\u53D1\u8005\u6392\u67E5\u7CFB\u7EDF\u7684\u6027\u80FD\u74F6\u9888\u3002

\u6839\u636Etrace id\u80FD\u591F\u67E5\u770B\u8BF7\u6C42\u7684\u94FE\u8DEF\uFF0C\u5E76\u4E14\u80FD\u591F\u770B\u5230\u94FE\u8DEF\u4E2D\u5404\u8282\u70B9\u8BB0\u5F55\u7684\u76F8\u5173\u4FE1\u606F\uFF0C\u4E0B\u56FE\u8F83\u4E3A\u76F4\u89C2\u7684\u53CD\u6620\u4E86\u8BF7\u6C42\u8C03\u7528\u94FE\u8DEF\u4E2D\u5404\u73AF\u8282\u54CD\u5E94\u65F6\u95F4\u7684\u5BF9\u6BD4\uFF1A

![](https://gw.alicdn.com/imgextra/i2/O1CN01l3XQmj22Wg4x9XA8i_!!6000000007128-0-tps-1500-981.jpg)

\u4EE5\u4E0B\u8868\u683C\u53CD\u6620\u4E86\u6BCF\u4E2A\u8BF7\u6C42\u81EA\u8EAB\u5360\u7528\u7684\u65F6\u95F4\uFF0C\u901A\u8FC7\u8BE5\u8868\u683C\u53EF\u4EE5\u770B\u5230 springboot-svc-4-2 \u8017\u65F6\u6700\u4E45\uFF0C\u4E3A 504 ms\uFF0C\u5F00\u53D1\u8005\u53EF\u4EE5\u6839\u636E\u6B64\u7ED3\u679C\u5BF9\u670D\u52A1\u8FDB\u884C\u6027\u80FD\u4F18\u5316\u3002

![](https://gw.alicdn.com/imgextra/i2/O1CN01yYJb9Q1nQ47hZvFb1_!!6000000005083-0-tps-1500-720.jpg)

### \u6392\u67E5\u7CFB\u7EDF\u9519\u8BEF\u8282\u70B9
\u5F53\u7CFB\u7EDF\u4E2D\u8C03\u7528\u94FE\u8DEF\u8F83\u4E3A\u590D\u6742\u65F6\uFF0C\u5982\u679C\u67D0\u4E2A\u73AF\u8282\u51FA\u73B0\u9519\u8BEF\uFF0C\u6392\u67E5\u95EE\u9898\u5BF9\u4E8E\u5F00\u53D1\u8005\u6765\u8BF4\u662F\u4E00\u4EF6\u56F0\u96BE\u7684\u4E8B\u60C5\uFF0C\u73B0\u5728\u5220\u9664 springboot svc 4-2\u6765\u6A21\u62DF\u7CFB\u7EDF\u67D0\u4E00\u73AF\u8282\u51FA\u73B0\u9519\u8BEF\u7684\u60C5\u51B5\uFF0C\u901A\u8FC7\u94FE\u8DEF\u8FFD\u8E2A\u6765\u6392\u67E5\u95EE\u9898\u3002

![](https://gw.alicdn.com/imgextra/i4/O1CN01xkresx1M3AhMbI9KN_!!6000000001378-0-tps-1500-794.jpg)

\u6B64\u65F6\u94FE\u8DEF\u8FFD\u8E2A\u663E\u793A\u7684\u8C03\u7528\u94FE\u8DEF\u5982\u4E0A\u56FE\u6240\u793A\uFF0C\u5176\u4E2D\u7EA2\u8272\u5706\u5708\u8868\u793A\u670D\u52A1\u51FA\u73B0\u9519\u8BEF\uFF0C\u53EF\u4EE5\u770B\u5230\u6B64\u65F6\u94FE\u8DEF\u4E2D springboot svc 1\uFF0Cspringboot svc 2-1\uFF0Cspringboot svc 3\uFF0Cspringboot svc 4-2 \u7684\u8C03\u7528\u90FD\u662F\u9519\u8BEF\u7684\uFF0C\u8FD9\u4E9B\u670D\u52A1\u8C03\u7528\u9519\u8BEF\u90FD\u662F\u7531 springboot svc 4-2 \u8C03\u7528\u9519\u8BEF\u5F15\u53D1\u7684\u8FDE\u9501\u53CD\u5E94\uFF0C\u53EA\u6709 springboot svc 4-1 \u8C03\u7528\u662F\u6210\u529F\u7684\u3002

\u8C03\u7528 springboot svc 4-2 \u65F6 skywalking span \u4E2D\u8BB0\u5F55\u7684\u4FE1\u606F\u5982\u4E0B\uFF1A

![](https://gw.alicdn.com/imgextra/i4/O1CN01irM65421nnGPRsBwV_!!6000000007030-0-tps-1500-713.jpg)

\u901A\u8FC7\u4EE5\u4E0A\u4FE1\u606F\u6211\u4EEC\u80FD\u591F\u77E5\u9053 springboot svc 4-2 \u7684\u670D\u52A1\u7AEF\u51FA\u73B0\u4E86\u95EE\u9898\uFF0C\u4ECE\u800C\u80FD\u591F\u7CBE\u51C6\u5730\u53BB\u89E3\u51B3\u95EE\u9898\u3002

## \u52A0\u5165Higress\u793E\u533A
![](https://gw.alicdn.com/imgextra/i4/O1CN01z65KzP1VZzcl9y0cZ_!!6000000002668-0-tps-1500-909.jpg)
`},a=function(){return s},p=function(){return[{depth:2,slug:"\u5206\u5E03\u5F0F\u94FE\u8DEF\u8FFD\u8E2A\u4ECB\u7ECD",text:"\u5206\u5E03\u5F0F\u94FE\u8DEF\u8FFD\u8E2A\u4ECB\u7ECD"},{depth:2,slug:"skywalking\u4ECB\u7ECD",text:"Skywalking\u4ECB\u7ECD"},{depth:2,slug:"higress\u94FE\u8DEF\u8FFD\u8E2A\u80FD\u529B",text:"Higress\u94FE\u8DEF\u8FFD\u8E2A\u80FD\u529B"},{depth:2,slug:"\u6D4B\u8BD5\u73AF\u5883\u67B6\u6784",text:"\u6D4B\u8BD5\u73AF\u5883\u67B6\u6784"},{depth:2,slug:"\u94FE\u8DEF\u8FFD\u8E2A\u793A\u4F8B",text:"\u94FE\u8DEF\u8FFD\u8E2A\u793A\u4F8B"},{depth:3,slug:"\u83B7\u53D6\u5FAE\u670D\u52A1\u8C03\u7528\u94FE\u8DEF",text:"\u83B7\u53D6\u5FAE\u670D\u52A1\u8C03\u7528\u94FE\u8DEF"},{depth:3,slug:"\u6392\u67E5\u7CFB\u7EDF\u6027\u80FD\u74F6\u9888",text:"\u6392\u67E5\u7CFB\u7EDF\u6027\u80FD\u74F6\u9888"},{depth:3,slug:"\u6392\u67E5\u7CFB\u7EDF\u9519\u8BEF\u8282\u70B9",text:"\u6392\u67E5\u7CFB\u7EDF\u9519\u8BEF\u8282\u70B9"},{depth:2,slug:"\u52A0\u5165higress\u793E\u533A",text:"\u52A0\u5165Higress\u793E\u533A"}]},e=o((b,k,w)=>{const{layout:u,...n}=i;return n.file=t,n.url=r,c`${d()}${y(s)}`})});export{e as Content,m as __tla,a as compiledContent,e as default,t as file,i as frontmatter,p as getHeadings,l as rawContent,r as url};
