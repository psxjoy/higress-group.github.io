import{c as l,__tla as n}from"./astro-component.CD2fzakh.js";import{r as c,m as h,u,__tla as d}from"./constant.T0rttORd.js";import{__tla as f}from"./astro/assets-service.Bk7KqR8o.js";let e,a,r,t,g,p,i,m=Promise.all([(()=>{try{return n}catch{}})(),(()=>{try{return d}catch{}})(),(()=>{try{return f}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u524D\u8A00">\u524D\u8A00</h2>
<p>\u5386\u65F6 5 \u4E2A\u591A\u6708\uFF0CHigress \u63A8\u51FA\u4E86\u9996\u4E2A RC \uFF08Release Candidate\uFF0C\u5373\u6B63\u5F0F\u53D1\u5E03\u7684\u5019\u9009\uFF09\u7248\u672C 1.0.0-rc\uFF0C\u7528\u6237\u53EF\u4EE5\u901A\u8FC7\u63A7\u5236\u53F0\uFF0C\u5F00\u7BB1\u5373\u7528\u5730\u4F7F\u7528\u4E91\u539F\u751F\u7F51\u5173\u3002</p>
<p>\u9009\u7528 Higress \u4F5C\u4E3A\u4E91\u539F\u751F\u7F51\u5173\u7684\u6838\u5FC3\u4F18\u52BF\u5982\u4E0B\uFF1A</p>
<ul>
<li>
<p><strong>\u6613\u7528\u6027</strong></p>
<p>\u201C\u4E91\u539F\u751F\u201D\u5DF2\u7ECF\u4E0D\u518D\u662F\u4E00\u4E2A\u65B0\u9C9C\u8BCD\uFF0C\u4F46\u4F01\u4E1A\u5BF9\u4E91\u539F\u751F\u6280\u672F\u7684\u5B66\u4E60\u4F7F\u7528\u6210\u672C\u4ECD\u6709\u8BB8\u591A\u987E\u8651\uFF0C\u5BF9\u4E91\u539F\u751F\u65B0\u6807\u51C6\u7684\u8FFD\u8D76\u53C8\u6709\u5F88\u591A\u7126\u8651\uFF1B</p>
<p>Higress \u540C\u65F6\u63D0\u4F9B\u4E86\u672C\u5730\u5B89\u88C5/\u751F\u4EA7\u90E8\u7F72\u7684 <a href="https://higress.io/zh-cn/docs/user/quickstart" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">quickstart</a>\uFF0C\u53EF\u4EE5\u4E00\u952E\u90E8\u7F72\uFF0C\u5E76\u901A\u8FC7\u63A7\u5236\u53F0\u64CD\u4F5C\u5FEB\u901F\u4E0A\u624B\uFF1B\u57FA\u4E8E\u7B80\u5355\u6613\u7528\u7684\u63A7\u5236\u53F0\uFF0CHigress \u53EF\u4EE5\u5C01\u88C5 Ingress/Gateway API \u7684\u6807\u51C6\u7EC6\u8282\uFF0C\u6839\u6CBB\u6280\u672F\u8FFD\u8D76\u7126\u8651\u3002</p>
</li>
<li>
<p><strong>\u6807\u51C6\u5316</strong></p>
<p>K8s \u5E26\u6765\u4E86\u4E91\u539F\u751F\u7684\u8DEF\u7531\u6807\u51C6 Ingress/Gateway API\uFF0C\u5982\u540C POSIX \u5B9A\u4E49 Unix \u53EF\u79FB\u690D\u64CD\u4F5C\u7CFB\u7EDF\u6807\u51C6\uFF0C\u5386\u65F6 35 \u5E74\u7ECF\u4E45\u4E0D\u8870\uFF0C\u4E91\u539F\u751F\u7684\u8DEF\u7531\u6807\u51C6\u7684\u751F\u547D\u5468\u671F\u4E00\u5B9A\u4F1A\u8FDC\u8D85\u8FC7 K8s \u672C\u8EAB\uFF1B</p>
<p>Higress \u7ED3\u5408\u963F\u91CC\u5185\u90E8\u5B9E\u8DF5\u4EE5\u53CA\u963F\u91CC\u4E91\u4EA7\u54C1\u6C89\u6DC0\uFF0C\u79EF\u7D2F\u4E86\u57FA\u4E8E Ingress API \u7684\u4E30\u5BCC\u7684\u8DEF\u7531\u7B56\u7565\u6269\u5C55\u80FD\u529B\uFF0C\u540C\u65F6\u8FD8\u517C\u5BB9\u5927\u90E8\u5206 Nginx Ingress \u80FD\u529B\uFF0C\u8FD9\u4E9B\u80FD\u529B\u540E\u7EED\u4E5F\u5C06\u5728 Gateway API \u4E0A\u652F\u6301\u3002</p>
</li>
<li>
<p><strong>\u9AD8\u96C6\u6210</strong></p>
<p>\u4F01\u4E1A\u5185\u6709\u5927\u91CF\u4F20\u7EDF\u67B6\u6784\u90E8\u7F72\u7684\u670D\u52A1\uFF0C\u4F1A\u6210\u4E3A\u5411\u4E91\u539F\u751F\u67B6\u6784\u6F14\u8FDB\u7684\u6280\u672F\u8D1F\u62C5\uFF0C\u8981\u6C42\u4E91\u539F\u751F\u7F51\u5173\u5177\u5907\u5BF9\u63A5\u5F02\u6784\u670D\u52A1\u67B6\u6784\u7684\u80FD\u529B\uFF1B</p>
<p>\u57FA\u4E8E Higress \u63D0\u4F9B\u7684\u591A\u79CD\u670D\u52A1\u53D1\u73B0\u673A\u5236\uFF0C\u7F51\u5173\u8DEF\u7531\u4E0D\u4EC5\u53EF\u4EE5\u8F6C\u53D1\u5230 K8s \u670D\u52A1\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5\u914D\u7F6E IP \u8F6C\u53D1\u5230\u5230\u7269\u7406\u673A\u4E0A\u7684\u670D\u52A1\uFF1B\u57FA\u4E8E Nacos/ZooKeeper \u7B49\u6CE8\u518C\u4E2D\u5FC3\u5BF9\u63A5\uFF0C\u8FD8\u53EF\u4EE5\u8F7B\u677E\u5B9E\u73B0 <a href="https://higress.io/zh-cn/docs/user/spring-cloud" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Spring Cloud</a> \u548C <a href="https://higress.io/zh-cn/docs/user/dubbo" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Dubbo</a> \u5FAE\u670D\u52A1\u7684\u8DEF\u7531\uFF0C\u65E0\u8BBA\u5176\u662F\u5426\u90E8\u7F72\u5728 K8s \u5185\u3002</p>
</li>
<li>
<p><strong>\u6613\u6269\u5C55</strong></p>
<p>\u57FA\u4E8E\u6269\u5C55\u673A\u5236\u8FDB\u884C\u4E8C\u6B21\u5F00\u53D1\u7684\u80FD\u529B\uFF0C\u662F\u4E91\u539F\u751F\u7F51\u5173\u5728\u4E0D\u540C\u4E1A\u52A1\u573A\u666F\u4E0B\u90FD\u80FD\u9002\u914D\u843D\u5730\u7684\u5173\u952E\uFF1B</p>
<p>Higress\u63D0\u4F9B\u4E86\u7075\u6D3B\u7684\u63D2\u4EF6\u6269\u5C55\u673A\u5236\uFF0C\u76EE\u524D\u63D2\u4EF6\u5E02\u573A\u5DF2\u7ECF\u63A8\u51FA\u591A\u4E2A\u5B98\u65B9\u63D2\u4EF6\uFF0C\u5E76\u652F\u6301\u7528\u6237\u901A\u8FC7\u63A7\u5236\u53F0\u76F4\u63A5\u4E0A\u4F20\u81EA\u5DF1\u5F00\u53D1\u7684\u63D2\u4EF6\uFF0C\u540C\u65F6\u5F00\u6E90\u793E\u533A\u7684\u63D2\u4EF6\u5E02\u573A\u751F\u6001\u4E5F\u5728\u4E0D\u65AD\u5EFA\u8BBE\u4E2D\u3002</p>
</li>
<li>
<p><strong>\u70ED\u66F4\u65B0</strong></p>
<p>\u4F20\u7EDF Nginx \u66F4\u65B0\u89C4\u5219\u9700\u8981 reload \u4F1A\u5BFC\u81F4\u94FE\u63A5\u6296\u52A8\uFF0C\u5BFC\u81F4\u6D41\u91CF\u635F\u5931\uFF0C\u5BF9\u5B9E\u65F6\u901A\u4FE1\u3001\u89C6\u9891\u3001IOT\u65E0\u6CD5\u5BB9\u5FCD\uFF1B</p>
<p>\u5BF9\u4E8E\u8DEF\u7531\u89C4\u5219\uFF0CWasm \u63D2\u4EF6\u903B\u8F91\u66F4\u65B0\uFF0C\u4EE5\u53CA\u8BC1\u4E66\u6539\u52A8\u7B49\u7B49\uFF0CHigress \u5168\u90E8\u652F\u6301\u70ED\u66F4\u65B0\uFF0C\u4E0D\u4F1A\u9020\u6210\u4EFB\u4F55\u8FDE\u63A5\u6296\u52A8\u3002</p>
</li>
</ul>
<h3 id="\u4F01\u4E1A\u843D\u5730\u652F\u6301">\u4F01\u4E1A\u843D\u5730\u652F\u6301</h3>
<p>\u5728 RC \u7248\u672C\u9636\u6BB5\u4F7F\u7528 Higress \u7684\u4F01\u4E1A\u7528\u6237\uFF0C\u793E\u533A\u4F1A\u5728\u843D\u5730\u9636\u6BB5\u63D0\u4F9B\u66F4\u591A\u5E2E\u52A9\uFF0C\u6211\u4EEC\u5EFA\u7ACB\u4E86 Higress \u4F01\u4E1A\u843D\u5730\u7FA4\uFF0C\u53EF\u4EE5\u8054\u7CFB\u6211(\u5FAE\u4FE1:nomadao
 \u9489\u9489:chengtanzty
)\uFF0C\u4F1A\u5C06\u4F60\u52A0\u8FDB\u7FA4\uFF0C\u7FA4\u91CC\u6709\u793E\u533A\u6838\u5FC3\u7814\u53D1\u540C\u5B66\uFF0C\u53EF\u4EE5\u63D0\u4F9B\u66F4\u53CA\u65F6\u7684\u54CD\u5E94\u548C\u5E2E\u52A9\u3002</p>
<h3 id="\u5B89\u88C5\u5347\u7EA7\u65B9\u5F0F">\u5B89\u88C5\u5347\u7EA7\u65B9\u5F0F</h3>
<p>\u5B89\u88C5 RC \u7248\u672C\uFF0C\u9700\u8981 helm <a href="https://higress.io/zh-cn/docs/user/quickstart" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5B89\u88C5</a>\u6216<a href="https://higress.io/zh-cn/docs/ops/upgrade" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5347\u7EA7</a>\u65F6\u9700\u8981\u6307\u5B9A<code dir="auto">--devel</code>\u53C2\u6570\uFF0C\u4F8B\u5982\uFF1A<code dir="auto">helm upgrade higress -n higress-system --devel</code></p>
<p>1.0.0 RC \u7248\u672C\u5DF2\u7ECF\u5728\u793E\u533A\u5C0F\u4F19\u4F34\u7684\u534F\u4F5C\u4E0B\u5B8C\u6210\u4E86\u591A\u8F6E\u6D4B\u8BD5\u548C\u4FEE\u590D\u5DE5\u4F5C\uFF0C\u6B22\u8FCE\u5927\u5BB6\u4F7F\u7528\u3002\u6700\u7EC8\u7684\u6B63\u5F0F\u7248\u672C\uFF0C\u4E5F\u5C06\u5728\u8FD1\u671F\u5F88\u5FEB\u63A8\u51FA\u3002</p>
<h2 id="\u63A7\u5236\u53F0\u529F\u80FD\u901F\u89C8">\u63A7\u5236\u53F0\u529F\u80FD\u901F\u89C8</h2>
<ul>
<li>
<p><strong>\u4E30\u5BCC\u7684\u53EF\u89C2\u6D4B</strong></p>
<p>\u63D0\u4F9B\u5F00\u7BB1\u5373\u7528\u7684\u53EF\u89C2\u6D4B\uFF0CGrafana&#x26;Prometheus \u53EF\u4EE5\u4F7F\u7528\u5185\u7F6E\u7684\u4E5F\u53EF\u5BF9\u63A5\u81EA\u5EFA\u7684\uFF0C\u5177\u4F53\u53EF\u4EE5\u53C2\u8003<a href="https://higress.io/zh-cn/docs/user/prometheus" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u6587\u6863</a></p>
<p><img src="https://img.alicdn.com/imgextra/i1/O1CN016n7gBU1UCnrfOBOZC_!!6000000002482-1-tps-1778-1012.gif" alt="" referrerpolicy="no-referrer"></p>
</li>
<li>
<p><strong>\u63D2\u4EF6\u6269\u5C55\u673A\u5236</strong></p>
<p>\u5B98\u65B9\u63D0\u4F9B\u4E86\u591A\u79CD\u63D2\u4EF6\uFF0C\u7528\u6237\u4E5F\u53EF\u4EE5<a href="https://higress.io/zh-cn/docs/user/wasm-go" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5F00\u53D1</a>\u81EA\u5DF1\u7684\u63D2\u4EF6\uFF0C\u6784\u5EFA\u6210 docker/oci <a href="https://higress.io/zh-cn/docs/plugins/custom" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u955C\u50CF</a>\u540E\u5728\u63A7\u5236\u53F0\u914D\u7F6E\uFF0C\u53EF\u4EE5\u5B9E\u65F6\u53D8\u66F4\u63D2\u4EF6\u903B\u8F91\uFF0C\u5BF9\u6D41\u91CF\u5B8C\u5168\u65E0\u635F\u3002</p>
<p><img src="https://img.alicdn.com/imgextra/i2/O1CN01t7XqQB1s6R8cM5ZRS_!!6000000005717-1-tps-1778-1012.gif" alt="" referrerpolicy="no-referrer"></p>
</li>
<li>
<p><strong>\u591A\u79CD\u670D\u52A1\u53D1\u73B0</strong></p>
<p>\u9ED8\u8BA4\u63D0\u4F9B K8s Service \u670D\u52A1\u53D1\u73B0\uFF0C\u901A\u8FC7\u914D\u7F6E\u53EF\u4EE5\u5BF9\u63A5 Nacos/ZooKeeper \u7B49\u6CE8\u518C\u4E2D\u5FC3\u5B9E\u73B0\u670D\u52A1\u53D1\u73B0\uFF0C\u4E5F\u53EF\u4EE5\u57FA\u4E8E\u9759\u6001 IP \u6216\u8005 DNS \u6765\u53D1\u73B0</p>
<p><img src="https://img.alicdn.com/imgextra/i2/O1CN0142CxRS1of0ZKg5soq_!!6000000005251-1-tps-1778-1012.gif" alt="" referrerpolicy="no-referrer"></p>
</li>
<li>
<p><strong>\u57DF\u540D\u548C\u8BC1\u4E66</strong></p>
<p>\u53EF\u4EE5\u521B\u5EFA\u7BA1\u7406 TLS \u8BC1\u4E66\uFF0C\u5E76\u914D\u7F6E\u57DF\u540D\u7684 HTTP/HTTPS \u884C\u4E3A\uFF0C\u57DF\u540D\u7B56\u7565\u91CC\u652F\u6301\u5BF9\u7279\u5B9A\u57DF\u540D\u751F\u6548\u63D2\u4EF6</p>
<p><img src="https://img.alicdn.com/imgextra/i4/O1CN01eQhgZD1ggMonjdj9u_!!6000000004171-1-tps-1778-1012.gif" alt="" referrerpolicy="no-referrer"></p>
</li>
<li>
<p><strong>\u4E30\u5BCC\u7684\u8DEF\u7531\u80FD\u529B</strong></p>
<p>\u57FA\u4E8E\u4E0A\u9762\u914D\u7F6E\u7684\u670D\u52A1\u53D1\u73B0\u673A\u5236\uFF0C\u53D1\u73B0\u7684\u670D\u52A1\u4F1A\u51FA\u73B0\u5728\u670D\u52A1\u5217\u8868\u4E2D\uFF1B\u521B\u5EFA\u8DEF\u7531\u65F6\uFF0C\u9009\u62E9\u57DF\u540D\uFF0C\u5B9A\u4E49\u8DEF\u7531\u5339\u914D\u673A\u5236\uFF0C\u518D\u9009\u62E9\u76EE\u6807\u670D\u52A1\u8FDB\u884C\u8DEF\u7531\uFF1B\u8DEF\u7531\u7B56\u7565\u91CC\u652F\u6301\u5BF9\u7279\u5B9A\u8DEF\u7531\u751F\u6548\u63D2\u4EF6</p>
<p><img src="https://img.alicdn.com/imgextra/i3/O1CN01lExhus1IvR4Q8kGmY_!!6000000000955-1-tps-1778-1012.gif" alt="" referrerpolicy="no-referrer"></p>
</li>
</ul>
<h3 id="\u8FDB\u9636\u4F7F\u7528">\u8FDB\u9636\u4F7F\u7528</h3>
<p>Higress \u63A7\u5236\u53F0\u7684\u529F\u80FD\u8FD8\u5728\u4E0D\u65AD\u4E30\u5BCC\u548C\u6F14\u8FDB\u4E2D\uFF0C\u5F53\u524D\u8FD8\u6709\u5F88\u591A Higress Ingress \u6CE8\u89E3\u7684\u80FD\u529B\u6CA1\u6709\u652F\u6301\uFF0C\u5982\u679C\u6709\u8FD9\u90E8\u5206\u6DF1\u5EA6\u4F7F\u7528\u7684\u9700\u6C42\uFF0C\u53EF\u4EE5\u53C2\u8003<a href="https://higress.io/zh-cn/docs/user/annotation-use-case" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u8FD9\u7BC7\u6587\u6863</a>\u8FDB\u884C\u8FDB\u9636\u914D\u7F6E</p>
<p>\u5982\u679C\u5E0C\u671B\u4F7F\u7528 Istio \u7684\u80FD\u529B\u8FDB\u884C\u6D41\u91CF\u6CBB\u7406\uFF0C\u53EF\u4EE5\u53C2\u8003<a href="https://higress.io/zh-cn/docs/ops/deploy-by-helm" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u8FD9\u7BC7\u6587\u6863</a>\u7684\u652F\u6301 Istio CRD \u4E00\u8282\u3002\u57FA\u4E8E Istio \u7684 <a href="https://istio.io/latest/docs/reference/config/networking/envoy-filter/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">EnvoyFilter API</a> \u53EF\u4EE5\u5B9E\u73B0\u66F4\u591A\u7EC6\u7C92\u5EA6\u7684\u7BA1\u63A7\u80FD\u529B\u3002</p>
<h2 id="\u793E\u533A">\u793E\u533A</h2>
<p>\u6B22\u8FCE\u8BA4\u9886 Higress Issue \u4EFB\u52A1\uFF1A<a href="https://github.com/alibaba/higress/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://github.com/alibaba/higress/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22</a></p>
<p>\u5B8C\u6210\u4E00\u5B9A\u6570\u91CF\u7684 Issues \u5C31\u53EF\u4EE5\u6210\u4E3A Higress Committer\uFF0C\u4E5F\u6709\u673A\u4F1A\u83B7\u5F97\u5F00\u6E90\u793E\u533A\u7684\u793C\u7269\u548C\u8363\u8A89\u{1F3C6}</p>
<p>\u6B22\u8FCE\u52A0\u5165 Higress \u793E\u533A\u7FA4\uFF0C\u53CA\u65F6\u4E86\u89E3\u66F4\u591A Higress \u52A8\u5411\uFF1A</p>
<p><img src="https://img.alicdn.com/imgextra/i2/O1CN0171Hg8d1XMMz4eFo3b_!!6000000002909-0-tps-720-405.jpg" alt="" referrerpolicy="no-referrer"></p>`,t={title:"\u4E0A\u7EBF\u63A7\u5236\u53F0\uFF0C\u964D\u4F4E\u4F7F\u7528\u95E8\u69DB \uFF5C Higress 1.0.0 RC \u7248\u672C\u53D1\u5E03",keywords:["higress","GA"],description:"\u5386\u65F6 5 \u4E2A\u591A\u6708\uFF0CHigress \u4E91\u539F\u751F\u7F51\u5173\u5F00\u6E90\u7684\u7B2C\u4E00\u4E2A\u91CD\u8981\u91CC\u7A0B\u7891\u8FBE\u6210\u4E86",author:"\u6F84\u6F6D",date:"2023-04-10",category:"article"},r="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/blog/release-100.md",i=void 0,p=function(){return`
## \u524D\u8A00

\u5386\u65F6 5 \u4E2A\u591A\u6708\uFF0CHigress \u63A8\u51FA\u4E86\u9996\u4E2A RC \uFF08Release Candidate\uFF0C\u5373\u6B63\u5F0F\u53D1\u5E03\u7684\u5019\u9009\uFF09\u7248\u672C 1.0.0-rc\uFF0C\u7528\u6237\u53EF\u4EE5\u901A\u8FC7\u63A7\u5236\u53F0\uFF0C\u5F00\u7BB1\u5373\u7528\u5730\u4F7F\u7528\u4E91\u539F\u751F\u7F51\u5173\u3002

\u9009\u7528 Higress \u4F5C\u4E3A\u4E91\u539F\u751F\u7F51\u5173\u7684\u6838\u5FC3\u4F18\u52BF\u5982\u4E0B\uFF1A

- **\u6613\u7528\u6027**

  \u201C\u4E91\u539F\u751F\u201D\u5DF2\u7ECF\u4E0D\u518D\u662F\u4E00\u4E2A\u65B0\u9C9C\u8BCD\uFF0C\u4F46\u4F01\u4E1A\u5BF9\u4E91\u539F\u751F\u6280\u672F\u7684\u5B66\u4E60\u4F7F\u7528\u6210\u672C\u4ECD\u6709\u8BB8\u591A\u987E\u8651\uFF0C\u5BF9\u4E91\u539F\u751F\u65B0\u6807\u51C6\u7684\u8FFD\u8D76\u53C8\u6709\u5F88\u591A\u7126\u8651\uFF1B

  Higress \u540C\u65F6\u63D0\u4F9B\u4E86\u672C\u5730\u5B89\u88C5/\u751F\u4EA7\u90E8\u7F72\u7684 [quickstart](https://higress.io/zh-cn/docs/user/quickstart)\uFF0C\u53EF\u4EE5\u4E00\u952E\u90E8\u7F72\uFF0C\u5E76\u901A\u8FC7\u63A7\u5236\u53F0\u64CD\u4F5C\u5FEB\u901F\u4E0A\u624B\uFF1B\u57FA\u4E8E\u7B80\u5355\u6613\u7528\u7684\u63A7\u5236\u53F0\uFF0CHigress \u53EF\u4EE5\u5C01\u88C5 Ingress/Gateway API \u7684\u6807\u51C6\u7EC6\u8282\uFF0C\u6839\u6CBB\u6280\u672F\u8FFD\u8D76\u7126\u8651\u3002

- **\u6807\u51C6\u5316**

  K8s \u5E26\u6765\u4E86\u4E91\u539F\u751F\u7684\u8DEF\u7531\u6807\u51C6 Ingress/Gateway API\uFF0C\u5982\u540C POSIX \u5B9A\u4E49 Unix \u53EF\u79FB\u690D\u64CD\u4F5C\u7CFB\u7EDF\u6807\u51C6\uFF0C\u5386\u65F6 35 \u5E74\u7ECF\u4E45\u4E0D\u8870\uFF0C\u4E91\u539F\u751F\u7684\u8DEF\u7531\u6807\u51C6\u7684\u751F\u547D\u5468\u671F\u4E00\u5B9A\u4F1A\u8FDC\u8D85\u8FC7 K8s \u672C\u8EAB\uFF1B

  Higress \u7ED3\u5408\u963F\u91CC\u5185\u90E8\u5B9E\u8DF5\u4EE5\u53CA\u963F\u91CC\u4E91\u4EA7\u54C1\u6C89\u6DC0\uFF0C\u79EF\u7D2F\u4E86\u57FA\u4E8E Ingress API \u7684\u4E30\u5BCC\u7684\u8DEF\u7531\u7B56\u7565\u6269\u5C55\u80FD\u529B\uFF0C\u540C\u65F6\u8FD8\u517C\u5BB9\u5927\u90E8\u5206 Nginx Ingress \u80FD\u529B\uFF0C\u8FD9\u4E9B\u80FD\u529B\u540E\u7EED\u4E5F\u5C06\u5728 Gateway API \u4E0A\u652F\u6301\u3002

- **\u9AD8\u96C6\u6210**

  \u4F01\u4E1A\u5185\u6709\u5927\u91CF\u4F20\u7EDF\u67B6\u6784\u90E8\u7F72\u7684\u670D\u52A1\uFF0C\u4F1A\u6210\u4E3A\u5411\u4E91\u539F\u751F\u67B6\u6784\u6F14\u8FDB\u7684\u6280\u672F\u8D1F\u62C5\uFF0C\u8981\u6C42\u4E91\u539F\u751F\u7F51\u5173\u5177\u5907\u5BF9\u63A5\u5F02\u6784\u670D\u52A1\u67B6\u6784\u7684\u80FD\u529B\uFF1B

  \u57FA\u4E8E Higress \u63D0\u4F9B\u7684\u591A\u79CD\u670D\u52A1\u53D1\u73B0\u673A\u5236\uFF0C\u7F51\u5173\u8DEF\u7531\u4E0D\u4EC5\u53EF\u4EE5\u8F6C\u53D1\u5230 K8s \u670D\u52A1\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5\u914D\u7F6E IP \u8F6C\u53D1\u5230\u5230\u7269\u7406\u673A\u4E0A\u7684\u670D\u52A1\uFF1B\u57FA\u4E8E Nacos/ZooKeeper \u7B49\u6CE8\u518C\u4E2D\u5FC3\u5BF9\u63A5\uFF0C\u8FD8\u53EF\u4EE5\u8F7B\u677E\u5B9E\u73B0 [Spring Cloud](https://higress.io/zh-cn/docs/user/spring-cloud) \u548C [Dubbo](https://higress.io/zh-cn/docs/user/dubbo) \u5FAE\u670D\u52A1\u7684\u8DEF\u7531\uFF0C\u65E0\u8BBA\u5176\u662F\u5426\u90E8\u7F72\u5728 K8s \u5185\u3002
  
- **\u6613\u6269\u5C55**

  \u57FA\u4E8E\u6269\u5C55\u673A\u5236\u8FDB\u884C\u4E8C\u6B21\u5F00\u53D1\u7684\u80FD\u529B\uFF0C\u662F\u4E91\u539F\u751F\u7F51\u5173\u5728\u4E0D\u540C\u4E1A\u52A1\u573A\u666F\u4E0B\u90FD\u80FD\u9002\u914D\u843D\u5730\u7684\u5173\u952E\uFF1B
  
  Higress\u63D0\u4F9B\u4E86\u7075\u6D3B\u7684\u63D2\u4EF6\u6269\u5C55\u673A\u5236\uFF0C\u76EE\u524D\u63D2\u4EF6\u5E02\u573A\u5DF2\u7ECF\u63A8\u51FA\u591A\u4E2A\u5B98\u65B9\u63D2\u4EF6\uFF0C\u5E76\u652F\u6301\u7528\u6237\u901A\u8FC7\u63A7\u5236\u53F0\u76F4\u63A5\u4E0A\u4F20\u81EA\u5DF1\u5F00\u53D1\u7684\u63D2\u4EF6\uFF0C\u540C\u65F6\u5F00\u6E90\u793E\u533A\u7684\u63D2\u4EF6\u5E02\u573A\u751F\u6001\u4E5F\u5728\u4E0D\u65AD\u5EFA\u8BBE\u4E2D\u3002
  
  
- **\u70ED\u66F4\u65B0**

  \u4F20\u7EDF Nginx \u66F4\u65B0\u89C4\u5219\u9700\u8981 reload \u4F1A\u5BFC\u81F4\u94FE\u63A5\u6296\u52A8\uFF0C\u5BFC\u81F4\u6D41\u91CF\u635F\u5931\uFF0C\u5BF9\u5B9E\u65F6\u901A\u4FE1\u3001\u89C6\u9891\u3001IOT\u65E0\u6CD5\u5BB9\u5FCD\uFF1B

  \u5BF9\u4E8E\u8DEF\u7531\u89C4\u5219\uFF0CWasm \u63D2\u4EF6\u903B\u8F91\u66F4\u65B0\uFF0C\u4EE5\u53CA\u8BC1\u4E66\u6539\u52A8\u7B49\u7B49\uFF0CHigress \u5168\u90E8\u652F\u6301\u70ED\u66F4\u65B0\uFF0C\u4E0D\u4F1A\u9020\u6210\u4EFB\u4F55\u8FDE\u63A5\u6296\u52A8\u3002


### \u4F01\u4E1A\u843D\u5730\u652F\u6301

\u5728 RC \u7248\u672C\u9636\u6BB5\u4F7F\u7528 Higress \u7684\u4F01\u4E1A\u7528\u6237\uFF0C\u793E\u533A\u4F1A\u5728\u843D\u5730\u9636\u6BB5\u63D0\u4F9B\u66F4\u591A\u5E2E\u52A9\uFF0C\u6211\u4EEC\u5EFA\u7ACB\u4E86 Higress \u4F01\u4E1A\u843D\u5730\u7FA4\uFF0C\u53EF\u4EE5\u8054\u7CFB\u6211(\u5FAE\u4FE1:nomadao \u9489\u9489:chengtanzty)\uFF0C\u4F1A\u5C06\u4F60\u52A0\u8FDB\u7FA4\uFF0C\u7FA4\u91CC\u6709\u793E\u533A\u6838\u5FC3\u7814\u53D1\u540C\u5B66\uFF0C\u53EF\u4EE5\u63D0\u4F9B\u66F4\u53CA\u65F6\u7684\u54CD\u5E94\u548C\u5E2E\u52A9\u3002


### \u5B89\u88C5\u5347\u7EA7\u65B9\u5F0F

\u5B89\u88C5 RC \u7248\u672C\uFF0C\u9700\u8981 helm [\u5B89\u88C5](https://higress.io/zh-cn/docs/user/quickstart)\u6216[\u5347\u7EA7](https://higress.io/zh-cn/docs/ops/upgrade)\u65F6\u9700\u8981\u6307\u5B9A\`--devel\`\u53C2\u6570\uFF0C\u4F8B\u5982\uFF1A\`helm upgrade higress -n higress-system --devel\`

1.0.0 RC \u7248\u672C\u5DF2\u7ECF\u5728\u793E\u533A\u5C0F\u4F19\u4F34\u7684\u534F\u4F5C\u4E0B\u5B8C\u6210\u4E86\u591A\u8F6E\u6D4B\u8BD5\u548C\u4FEE\u590D\u5DE5\u4F5C\uFF0C\u6B22\u8FCE\u5927\u5BB6\u4F7F\u7528\u3002\u6700\u7EC8\u7684\u6B63\u5F0F\u7248\u672C\uFF0C\u4E5F\u5C06\u5728\u8FD1\u671F\u5F88\u5FEB\u63A8\u51FA\u3002


## \u63A7\u5236\u53F0\u529F\u80FD\u901F\u89C8

- **\u4E30\u5BCC\u7684\u53EF\u89C2\u6D4B**

  \u63D0\u4F9B\u5F00\u7BB1\u5373\u7528\u7684\u53EF\u89C2\u6D4B\uFF0CGrafana&Prometheus \u53EF\u4EE5\u4F7F\u7528\u5185\u7F6E\u7684\u4E5F\u53EF\u5BF9\u63A5\u81EA\u5EFA\u7684\uFF0C\u5177\u4F53\u53EF\u4EE5\u53C2\u8003[\u6587\u6863](https://higress.io/zh-cn/docs/user/prometheus)

  ![](https://img.alicdn.com/imgextra/i1/O1CN016n7gBU1UCnrfOBOZC_!!6000000002482-1-tps-1778-1012.gif)
    

- **\u63D2\u4EF6\u6269\u5C55\u673A\u5236**

  \u5B98\u65B9\u63D0\u4F9B\u4E86\u591A\u79CD\u63D2\u4EF6\uFF0C\u7528\u6237\u4E5F\u53EF\u4EE5[\u5F00\u53D1](https://higress.io/zh-cn/docs/user/wasm-go)\u81EA\u5DF1\u7684\u63D2\u4EF6\uFF0C\u6784\u5EFA\u6210 docker/oci [\u955C\u50CF](https://higress.io/zh-cn/docs/plugins/custom)\u540E\u5728\u63A7\u5236\u53F0\u914D\u7F6E\uFF0C\u53EF\u4EE5\u5B9E\u65F6\u53D8\u66F4\u63D2\u4EF6\u903B\u8F91\uFF0C\u5BF9\u6D41\u91CF\u5B8C\u5168\u65E0\u635F\u3002

  ![](https://img.alicdn.com/imgextra/i2/O1CN01t7XqQB1s6R8cM5ZRS_!!6000000005717-1-tps-1778-1012.gif)


- **\u591A\u79CD\u670D\u52A1\u53D1\u73B0**

  \u9ED8\u8BA4\u63D0\u4F9B K8s Service \u670D\u52A1\u53D1\u73B0\uFF0C\u901A\u8FC7\u914D\u7F6E\u53EF\u4EE5\u5BF9\u63A5 Nacos/ZooKeeper \u7B49\u6CE8\u518C\u4E2D\u5FC3\u5B9E\u73B0\u670D\u52A1\u53D1\u73B0\uFF0C\u4E5F\u53EF\u4EE5\u57FA\u4E8E\u9759\u6001 IP \u6216\u8005 DNS \u6765\u53D1\u73B0

  ![](https://img.alicdn.com/imgextra/i2/O1CN0142CxRS1of0ZKg5soq_!!6000000005251-1-tps-1778-1012.gif)
    

- **\u57DF\u540D\u548C\u8BC1\u4E66**

  \u53EF\u4EE5\u521B\u5EFA\u7BA1\u7406 TLS \u8BC1\u4E66\uFF0C\u5E76\u914D\u7F6E\u57DF\u540D\u7684 HTTP/HTTPS \u884C\u4E3A\uFF0C\u57DF\u540D\u7B56\u7565\u91CC\u652F\u6301\u5BF9\u7279\u5B9A\u57DF\u540D\u751F\u6548\u63D2\u4EF6

  ![](https://img.alicdn.com/imgextra/i4/O1CN01eQhgZD1ggMonjdj9u_!!6000000004171-1-tps-1778-1012.gif)


- **\u4E30\u5BCC\u7684\u8DEF\u7531\u80FD\u529B**

  \u57FA\u4E8E\u4E0A\u9762\u914D\u7F6E\u7684\u670D\u52A1\u53D1\u73B0\u673A\u5236\uFF0C\u53D1\u73B0\u7684\u670D\u52A1\u4F1A\u51FA\u73B0\u5728\u670D\u52A1\u5217\u8868\u4E2D\uFF1B\u521B\u5EFA\u8DEF\u7531\u65F6\uFF0C\u9009\u62E9\u57DF\u540D\uFF0C\u5B9A\u4E49\u8DEF\u7531\u5339\u914D\u673A\u5236\uFF0C\u518D\u9009\u62E9\u76EE\u6807\u670D\u52A1\u8FDB\u884C\u8DEF\u7531\uFF1B\u8DEF\u7531\u7B56\u7565\u91CC\u652F\u6301\u5BF9\u7279\u5B9A\u8DEF\u7531\u751F\u6548\u63D2\u4EF6

  ![](https://img.alicdn.com/imgextra/i3/O1CN01lExhus1IvR4Q8kGmY_!!6000000000955-1-tps-1778-1012.gif)


### \u8FDB\u9636\u4F7F\u7528

Higress \u63A7\u5236\u53F0\u7684\u529F\u80FD\u8FD8\u5728\u4E0D\u65AD\u4E30\u5BCC\u548C\u6F14\u8FDB\u4E2D\uFF0C\u5F53\u524D\u8FD8\u6709\u5F88\u591A Higress Ingress \u6CE8\u89E3\u7684\u80FD\u529B\u6CA1\u6709\u652F\u6301\uFF0C\u5982\u679C\u6709\u8FD9\u90E8\u5206\u6DF1\u5EA6\u4F7F\u7528\u7684\u9700\u6C42\uFF0C\u53EF\u4EE5\u53C2\u8003[\u8FD9\u7BC7\u6587\u6863](https://higress.io/zh-cn/docs/user/annotation-use-case)\u8FDB\u884C\u8FDB\u9636\u914D\u7F6E

\u5982\u679C\u5E0C\u671B\u4F7F\u7528 Istio \u7684\u80FD\u529B\u8FDB\u884C\u6D41\u91CF\u6CBB\u7406\uFF0C\u53EF\u4EE5\u53C2\u8003[\u8FD9\u7BC7\u6587\u6863](https://higress.io/zh-cn/docs/ops/deploy-by-helm)\u7684\u652F\u6301 Istio CRD \u4E00\u8282\u3002\u57FA\u4E8E Istio \u7684 [EnvoyFilter API](https://istio.io/latest/docs/reference/config/networking/envoy-filter/) \u53EF\u4EE5\u5B9E\u73B0\u66F4\u591A\u7EC6\u7C92\u5EA6\u7684\u7BA1\u63A7\u80FD\u529B\u3002



## \u793E\u533A

\u6B22\u8FCE\u8BA4\u9886 Higress Issue \u4EFB\u52A1\uFF1Ahttps://github.com/alibaba/higress/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22

\u5B8C\u6210\u4E00\u5B9A\u6570\u91CF\u7684 Issues \u5C31\u53EF\u4EE5\u6210\u4E3A Higress Committer\uFF0C\u4E5F\u6709\u673A\u4F1A\u83B7\u5F97\u5F00\u6E90\u793E\u533A\u7684\u793C\u7269\u548C\u8363\u8A89\u{1F3C6}

\u6B22\u8FCE\u52A0\u5165 Higress \u793E\u533A\u7FA4\uFF0C\u53CA\u65F6\u4E86\u89E3\u66F4\u591A Higress \u52A8\u5411\uFF1A

![](https://img.alicdn.com/imgextra/i2/O1CN0171Hg8d1XMMz4eFo3b_!!6000000002909-0-tps-720-405.jpg)
`},a=function(){return s},g=function(){return[{depth:2,slug:"\u524D\u8A00",text:"\u524D\u8A00"},{depth:3,slug:"\u4F01\u4E1A\u843D\u5730\u652F\u6301",text:"\u4F01\u4E1A\u843D\u5730\u652F\u6301"},{depth:3,slug:"\u5B89\u88C5\u5347\u7EA7\u65B9\u5F0F",text:"\u5B89\u88C5\u5347\u7EA7\u65B9\u5F0F"},{depth:2,slug:"\u63A7\u5236\u53F0\u529F\u80FD\u901F\u89C8",text:"\u63A7\u5236\u53F0\u529F\u80FD\u901F\u89C8"},{depth:3,slug:"\u8FDB\u9636\u4F7F\u7528",text:"\u8FDB\u9636\u4F7F\u7528"},{depth:2,slug:"\u793E\u533A",text:"\u793E\u533A"}]},e=l((y,H,_)=>{const{layout:b,...o}=t;return o.file=r,o.url=i,c`${h()}${u(s)}`})});export{e as Content,m as __tla,a as compiledContent,e as default,r as file,t as frontmatter,g as getHeadings,p as rawContent,i as url};
