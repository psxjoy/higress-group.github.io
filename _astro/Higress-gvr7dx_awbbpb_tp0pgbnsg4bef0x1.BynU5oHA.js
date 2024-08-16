const e="Higress-gvr7dx_awbbpb_tp0pgbnsg4bef0x1.mdx",i="blog",a="higress-gvr7dx_awbbpb_tp0pgbnsg4bef0x1",t=`
OpenAI \u56FD\u5185\u505C\u670D\uFF0C\u9664\u4E86\u5404\u4E2A\u5927\u6A21\u578B\u5382\u5546\u63D0\u4F9B\u7684\u8FC1\u79FB\u65B9\u6848\u5916\uFF0C\u662F\u5426\u6709\u5176\u4ED6\u66F4\u5E73\u6ED1\u7684\u8FC1\u79FB\u65B9\u6848\u5462\uFF1F\u672C\u6587\u4EE5 OpenAI \u5207\u6362\u5230\u901A\u4E49\u5343\u95EE\u4E3A\u4F8B\uFF0C\u4ECB\u7ECD\u5F00\u6E90\u7F51\u5173 Higress \u7684\u5E94\u5BF9\u65B9\u6848\u3002\u4F18\u52BF\u662F\uFF1A

- \u9ED8\u8BA4\u6309\u7167\u6A21\u578B\u4EF7\u683C\u548C\u80FD\u529B\u8FDB\u884C\u4E86\u5408\u7406\u6620\u5C04\uFF0C\u4E14\u652F\u6301\u7528\u6237\u81EA\u5B9A\u4E49\u8C03\u6574\u914D\u7F6E
- \u53EF\u4EE5\u901A\u8FC7 OpenAI \u7684\u7EDF\u4E00\u534F\u8BAE\u5BF9\u63A5\u591A\u79CD\u5927\u6A21\u578B\uFF0C\u5C4F\u853D\u5B9E\u73B0\u7EC6\u8282\uFF0C\u964D\u4F4E\u63A5\u5165\u65B0\u5927\u6A21\u578B\u7684 API \u9002\u914D\u6210\u672C
- Higress \u53EF\u4EE5\u63D0\u4F9B token \u9650\u6D41\u63D2\u4EF6\u3001\u5185\u5BB9\u5BA1\u6838\u63D2\u4EF6\uFF0C\u901A\u8FC7\u7F51\u5173\u7684\u5DE5\u7A0B\u5316\u80FD\u529B\u5B9E\u73B0\u4E1A\u52A1\u6536\u76CA
<a name="MY7ym"></a>
## \u5B9E\u64CD\u89C6\u9891
<video width="100%" controls> 
<source type="video/mp4" src="https://cloud.video.taobao.com/vod/play/WGgwVXpBRW90UjQya2JETGNRTGllUmx0a0lacnNNOEZQSGkybXdKck03VzZQZWw1SnpKVVVCTlh4OVFON0V5UUVMUDduY1RJak82VE1sdXdHTjNOaHc9PQ"></source>
</video>
## \u6B65\u9AA4\u4ECB\u7ECD
> \u51C6\u5907\u5DE5\u4F5C\uFF1A\u9700\u8981\u767B\u9646\u963F\u91CC\u4E91[\u7533\u8BF7\u901A\u4E49\u5343\u95EE API Key](https://help.aliyun.com/zh/dashscope/opening-service?spm=a2c4g.11186623.0.0.72c2369dLprd45)

<a name="ew4c2"></a>
### \u7B2C\u4E00\u6B65\uFF1A\u542F\u52A8 Higress AI \u7F51\u5173
Higress \u6709\u591A\u79CD\u90E8\u7F72\u65B9\u5F0F\uFF0C\u4F8B\u5982 K8s Helm \u90E8\u7F72\uFF0C\u6216\u8005\u5BF9\u63A5 Nacos \u90E8\u7F72\u7B49\u3002\u6700\u7B80\u5355\u7684\u65B9\u5F0F\u662F\u901A\u8FC7\u4E00\u4E2A Docker \u547D\u4EE4\u76F4\u63A5\u5728\u672C\u5730\u542F\u52A8\uFF1A
\`\`\`bash
# \u521B\u5EFA\u4E00\u4E2A\u5DE5\u4F5C\u76EE\u5F55
mkdir higress; cd higress
# \u542F\u52A8 higress\uFF0C\u914D\u7F6E\u6587\u4EF6\u4F1A\u5199\u5230\u5DE5\u4F5C\u76EE\u5F55\u4E0B
docker run -d --rm --name higress-ai -v \${PWD}:/data \\
        -p 8001:8001 -p 8080:8080 \\
        -e CONFIG_TEMPLATE=ai-proxy -e DEFAULT_AI_SERVICE=qwen \\
        -e DASHSCOPE_API_KEY=\u8FD9\u91CC\u586B\u4F60\u81EA\u5DF1\u7684\u901A\u4E49\u5343\u95EEAPIKey \\
        higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/all-in-one:1.4.1
\`\`\`
<a name="RpVeh"></a>
### \u7B2C\u4E8C\u6B65\uFF1A\u8C03\u6574 API \u5730\u5740
\u4E0D\u7528\u6539\u4EFB\u4F55\u4EE3\u7801\u903B\u8F91\uFF0C\u53EA\u9700\u901A\u8FC7\`base_url\`\u8C03\u6574 API \u5730\u5740\u4E3A Higress AI \u7F51\u5173\u7684 API \u5730\u5740\uFF0C\u8FD9\u91CC\u662F\u91CC\u672C\u5730\u542F\u52A8\u7684\uFF0C\u6240\u4EE5\u586B\uFF1A\`http://127.0.0.1:8080/v1\`<br />\u4F8B\u5982\u4E0B\u9762\u662F openai \u6D41\u5F0F\u54CD\u5E94\u7684\u4F8B\u5B50\uFF1A
\`\`\`python
from openai import OpenAI

client = OpenAI(
    api_key="your-api-key",
    base_url="http://127.0.0.1:8080/v1"
)

# \u4E0D\u9700\u8981\u4FEE\u6539\u6A21\u578B\uFF0Chigress \u505A\u4E86\u7B49\u4EF7\u6620\u5C04
stream = client.chat.completions.create(
    model="gpt-4o",
    messages=[{"role": "user", "content": "\u4F60\u662F\u8C01"}],
    stream=True,
)

# \u6362\u884C\u6253\u5370\u6536\u5230\u7684\u6BCF\u4E2A\u6D41\u5F0F\u54CD\u5E94
for chunk in stream:
    if chunk.choices[0].delta.content:
        print(chunk.choices[0].delta.content)
\`\`\`
\u6D4B\u8BD5\u751F\u6548\uFF1A<br />![higress-qwen.gif](https://intranetproxy.alipay.com/skylark/lark/0/2024/gif/22499/1719385493294-68196bc5-e442-42d2-9757-1ec6d562832b.gif#clientId=u02eca281-8b6f-4&from=drop&id=u645ff861&originHeight=644&originWidth=876&originalType=binary&ratio=1&rotation=0&showTitle=false&size=67549&status=done&style=none&taskId=u515cb675-caeb-4759-848f-a29c2413e9d&title=)

<a name="pfLTG"></a>
## Higress AI \u4EE3\u7406\u80FD\u529B\u4ECB\u7ECD
AI \u4EE3\u7406\u63D2\u4EF6\u76EE\u524D\u652F\u6301\u7684\u5927\u6A21\u578B API \u6709\uFF1A**\u901A\u4E49\u5343\u95EE\uFF0COpenAI/Azure OpenAI\uFF0C\u6708\u4E4B\u6697\u9762\uFF0C\u767E\u5DDD\u667A\u80FD\uFF0C\u96F6\u4E00\u4E07\u7269\uFF0C\u667A\u8C31 AI\uFF0C\u9636\u8DC3\u661F\u8FB0\uFF0C\u6587\u5FC3\u4E00\u8A00\uFF0C\u817E\u8BAF\u6DF7\u5143\uFF0CDeepSeek\uFF0CAnthropic Claude\uFF0CGroq\uFF0CMiniMax\uFF0COllama**<br />\u53EF\u4EE5\u7528\u7C7B\u4F3C\u65B9\u5F0F\uFF0C\u901A\u8FC7 Higress \u5C06\u4E1A\u52A1\u5BF9 OpenAI \u7684\u4F9D\u8D56\u5FEB\u901F\u8FC1\u79FB\u5230\u5176\u4ED6\u5382\u5546\u7684\u5927\u6A21\u578B\u3002<br />\u4E0B\u56FE\u4EE5 OpenAI SDK \u6D41\u5F0F\u5904\u7406\u4E3A\u4F8B\uFF0C Higress \u7684 AI \u4EE3\u7406\u539F\u7406\u5982\u4E0B\uFF0C\u53EF\u4EE5\u7EAF\u6D41\u5F0F\u5904\u7406\u591A\u79CD\u4E0D\u540C\u5382\u5546\u7684\u6A21\u578B\u534F\u8BAE\uFF1A<br />![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2024/png/22499/1719392361143-dcd4c5d6-b9f0-442b-afc7-175482b20b78.png#clientId=u219dd788-f291-4&from=paste&height=500&id=u1d85fb45&originHeight=500&originWidth=570&originalType=binary&ratio=1&rotation=0&showTitle=false&size=164585&status=done&style=none&taskId=u36398831-baeb-465a-adcf-40510fa0af8&title=&width=570)
<a name="H3VBl"></a>
## \u63A2\u7D22\u66F4\u591A Higress AI \u7F51\u5173\u80FD\u529B
<a name="HjrFu"></a>
### \u81EA\u5B9A\u4E49\u6A21\u578B\u6620\u5C04
Higress \u9ED8\u8BA4\u5C06\u6240\u6709 OpenAI \u6A21\u578B\u6309\u80FD\u529B\u548C\u4EF7\u683C\u505A\u4E86\u5230\u901A\u4E49\u5343\u95EE\u7684\u7B49\u4EF7\u6620\u5C04\uFF1A<br />![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2024/png/22499/1719385723442-1806431a-98fa-4700-b9b4-205aea6d3336.png#clientId=u02eca281-8b6f-4&from=paste&height=758&id=u33daf3fc&originHeight=758&originWidth=1829&originalType=binary&ratio=1&rotation=0&showTitle=false&size=823665&status=done&style=none&taskId=u9a774f82-10ab-4438-8230-d50f1eece6d&title=&width=1829)<br />\u7528\u6237\u4E5F\u53EF\u4EE5\u8FDB\u5165 Higress \u63A7\u5236\u53F0\uFF0C\u81EA\u5B9A\u4E49\u6A21\u578B\u6620\u5C04
<a name="xQ22M"></a>
### \u5F00\u542F\u901A\u4E49\u5343\u95EE\u8054\u7F51\u641C\u7D22\u80FD\u529B
AI \u4EE3\u7406\u63D2\u4EF6\u914D\u7F6E\u4E3A:
\`\`\`yaml
provider:
  type: qwen
  apiTokens:
  - "\u4F60\u81EA\u5DF1\u7684\u901A\u4E49\u5343\u95EE API Key"
  modelMapping:
  # \u6620\u5C04\u914D\u7F6E\u7701\u7565
  ...
  # \u5F00\u542F\u8054\u7F51\u641C\u7D22\u80FD\u529B
  qwenEnableSearch: true
\`\`\`
\u7136\u540E\u4F7F\u7528 LobeChat \u8FDB\u884C\u6D4B\u8BD5\uFF08\u8FD9\u91CC\u67E5\u770B\uFF1A[LobeChat \u5BF9\u63A5\u65B9\u5F0F](https://github.com/alibaba/higress/issues/1023)\uFF09\uFF1A<br />![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2024/png/22499/1719386509759-dc19cfeb-9222-4177-9d8f-4c4e84903f29.png#clientId=u02eca281-8b6f-4&from=paste&height=762&id=ub923b6b6&originHeight=762&originWidth=856&originalType=binary&ratio=1&rotation=0&showTitle=false&size=396161&status=done&style=none&taskId=u5f7db87e-474b-4043-b4d8-6efac20cf1c&title=&width=856)
<a name="ipC2A"></a>
### \u5B9E\u73B0\u6700\u7B80\u5355\u7684 RAG 
\u4E0A\u4F20\u4E00\u4EFD\u6587\u4EF6\u7528\u4E8E RAG (\u8BE6\u7EC6\u53EF\u4EE5\u67E5\u770B\u8FD9\u91CC\u7684[\u6587\u6863](https://help.aliyun.com/zh/dashscope/developer-reference/openai-file-interface?spm=a2c4g.11186623.0.0.4f5e4ad0clKblp)):
\`\`\`bash
curl --location --request POST 'https://dashscope.aliyuncs.com/compatible-mode/v1/files' \\
  --header 'Authorization: Bearer \u8FD9\u91CC\u586BAPIKey' \\
  --form 'file=@" ./doc.md"' \\
  --form 'purpose="file-extract"'

# \u8FD4\u56DE\u5185\u5BB9\u4E2D\u5305\u542B\u6587\u4EF6id\uFF1A
{"id":"file-fe-xxxxxxx","object":"file","bytes":596687,"created_at":1716635947,"filename":"doc.md","purpose":"file-extract","status":"processed"}
\`\`\`
AI \u4EE3\u7406\u63D2\u4EF6\u914D\u7F6E\u4E3A:
\`\`\`yaml
provider:
  type: qwen
  apiTokens:
  - "\u4F60\u81EA\u5DF1\u7684\u901A\u4E49\u5343\u95EE API Key"
  modelMapping:
  # \u6620\u5C04\u914D\u7F6E\u7701\u7565
  ...
  # \u5728\u8FD9\u91CC\u914D\u7F6E\u4E0A\u9762\u8FD4\u56DE\u7684\u6587\u4EF6id
  qwenFileIds:
  - "file-fe-xxxxxxx"
\`\`\`
\u5BFC\u5165 Higress \u5B98\u7F51\u6587\u6863\u7684\u6587\u4EF6 id\uFF0C\u6D4B\u8BD5\u6548\u679C\uFF1A<br />![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2024/png/22499/1719386150679-e08e6f59-7b6c-4b0c-865f-eee60741a570.png#clientId=u02eca281-8b6f-4&from=paste&height=985&id=u7fd4d87d&originHeight=985&originWidth=750&originalType=binary&ratio=1&rotation=0&showTitle=false&size=207537&status=done&style=none&taskId=u7b068c09-4c87-49f6-b1da-25011b9d108&title=&width=750)
<a name="vZjce"></a>
### Higress \u7684\u66F4\u591A AI \u80FD\u529B
\u4ECE 2020 \u5E74\u5F00\u59CB\uFF0C\u6211\u4EEC\u901A\u8FC7\u670D\u52A1\u963F\u91CC\u5185\u90E8\uFF0C\u4EE5\u53CA\u4E91\u4E0A\u5BA2\u6237\u7684\u9700\u6C42\uFF0C\u6C89\u6DC0\u4E86\u4E91\u539F\u751F\u7F51\u5173 Higress\uFF0C\u5728\u5F00\u6E90\u793E\u533A\u5206\u4EAB\u4EE3\u7801\u548C\u77E5\u8BC6\u7684\u540C\u65F6\uFF0C\u901A\u8FC7\u5927\u91CF\u5F00\u6E90\u7528\u6237\u7684\u4F7F\u7528\u53CD\u9988\uFF0C\u5F97\u4EE5\u8FDB\u4E00\u6B65\u5B8C\u5584\u81EA\u8EAB\u80FD\u529B\u3002<br />\u4ECA\u5929\uFF0C**Higress \u4F01\u4E1A\u7248\u65E2\u662F\u901A\u4E49\u5343\u95EE\u7B49\u963F\u91CC\u4E91\u6838\u5FC3 AI \u4E1A\u52A1\u7684 API \u7F51\u5173\uFF0C\u53C8\u662F\u4E91\u4E0A\u591A\u5BB6 AGI \u5382\u5546\u7684\u7684 API \u7F51\u5173**\uFF0C\u6211\u4EEC\u4E5F\u5F88\u4E50\u4E8E\u5206\u4EAB\u5728\u63A5\u5165\u8FD9\u4E9B\u573A\u666F\u8FC7\u7A0B\u4E2D\u79EF\u7D2F\u7684\u5FC3\u5F97\u4F53\u4F1A\uFF0C\u5E76\u5C06\u76F8\u5173 AI \u80FD\u529B\u5168\u9762\u5F00\u6E90\uFF1A<br />![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2024/png/22499/1719386865977-fac1767d-6c28-4900-954c-09b85dc82d95.png#clientId=u02eca281-8b6f-4&from=paste&height=4500&id=u782c7e5f&originHeight=4500&originWidth=8000&originalType=binary&ratio=1&rotation=0&showTitle=false&size=11007747&status=done&style=none&taskId=u31630184-427a-449a-8bec-f0184487b18&title=&width=8000)<br />Higress AI \u7F51\u5173\u76F8\u5173\u80FD\u529B\u5DF2\u7ECF\u5168\u9762\u5F00\u6E90\uFF0C\u53EF\u4EE5\u67E5\u770B\u8FD9\u7BC7\u6587\u6863\uFF1A[\u300AHigress \u91CD\u78C5\u66F4\u65B0\uFF1AAI \u80FD\u529B\u5168\u9762\u5F00\u6E90\uFF0C\u4E91\u539F\u751F\u80FD\u529B\u518D\u5347\u7EA7\u300B](https://mp.weixin.qq.com/s/7yaN1wQSQC0JPdUenE53lg)<br />\u5173\u4E8E AI \u4EE3\u7406\u63D2\u4EF6\uFF0C\u4EE5\u53CA Higress \u5176\u4ED6 AI \u63D2\u4EF6\u7684\u80FD\u529B\u4ECB\u7ECD\u548C\u4F7F\u7528\u65B9\u5F0F\u5728 Higress \u5B98\u7F51\u6587\u6863\u5747\u6709\u8BE6\u7EC6\u8BF4\u660E\uFF0C\u53EF\u4EE5\u8BBF\u95EE [https://higress.cn](https://higress.cn) \u67E5\u770B\u3002<br />\u5982\u679C\u4F60\u6709\u4F01\u4E1A\u7EA7 AI \u7F51\u5173\u9700\u6C42\uFF0C\u53EF\u4EE5\u70B9\u51FB[\u67E5\u770B\u539F\u6587](https://www.aliyun.com/product/aliware/mse?spm=higress-website.topbar.0.0.0)\uFF0C\u4E86\u89E3 Higress \u4F01\u4E1A\u7248\uFF0C\u7ACB\u5373\u62E5\u6709\u901A\u4E49\u5343\u95EE\u7684\u540C\u6B3E\u6D41\u91CF\u7F51\u5173\u3002
<a name="ugyFg"></a>
### \u52A0\u5165 Higress \u793E\u533A
\u6B22\u8FCE\u66F4\u591A\u5C0F\u4F19\u4F34\u4E00\u8D77\u53C2\u4E0E\u5230 Higress \u793E\u533A\u7684\u5EFA\u8BBE\u4E2D\uFF0C\u8FD1\u671F\u7684\u793E\u533A\u6D3B\u52A8\u6709\uFF1A

- [22.5\u4E07\u5956\u91D1\u6C60\uFF5CHigress AI \u7F51\u5173\u7F16\u7A0B\u6311\u6218\u8D5B\u542F\u52A8](https://mp.weixin.qq.com/s/HD9Jq-2u_fQNsDWBzDsbcg)
- [GLCC \u5F00\u6E90\u590F\u4EE4\u8425\u7684 Higress \u4E09\u5927\u8BFE\u9898](https://www.gitlink.org.cn/glcc/2024/projects)

\u4E86\u89E3\u66F4\u591A\u793E\u533A\u52A8\u6001\uFF0C\u53EF\u4EE5\u52A0\u5165 Higress \u5FAE\u4FE1/\u9489\u9489\u7FA4\uFF08\u7FA4\u53F7\uFF1A_30735012403 _\uFF09\uFF1A<br />![higress-comm.jpg](https://intranetproxy.alipay.com/skylark/lark/0/2024/jpeg/22499/1719387999764-639f6a5d-3241-4706-8198-9b5e875e8faa.jpeg#clientId=u02eca281-8b6f-4&from=drop&id=u63a8b77f&originHeight=405&originWidth=720&originalType=binary&ratio=1&rotation=0&showTitle=false&size=58254&status=done&style=none&taskId=u23872761-8747-46a9-bc35-a679f7f57d4&title=)

`,s={title:"OpenAI \u56FD\u5185\u505C\u670D\uFF0C\u9664\u4E86\u505C\u673A\u8FC1\u79FB\uFF0C\u8FD9\u4E2A\u65B9\u6848\u66F4\u5E73\u6ED1",description:"OpenAI \u56FD\u5185\u505C\u670D\uFF0C\u9664\u4E86\u505C\u673A\u8FC1\u79FB\uFF0C\u8FD9\u4E2A\u65B9\u6848\u66F4\u5E73\u6ED1",keywords:["AI\u7F51\u5173","AI\u4EE3\u7406"],date:"2024-07-23",category:"article"},r={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/blog/Higress-gvr7dx_awbbpb_tp0pgbnsg4bef0x1.mdx",rawData:void 0};export{r as _internal,t as body,i as collection,s as data,e as id,a as slug};