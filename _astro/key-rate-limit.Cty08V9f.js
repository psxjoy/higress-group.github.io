import{c as i,r as n,m as p}from"./render-template.CJlwwtnB.js";import{u as y}from"./constant.CxavaNFL.js";import"./preload-helper.BiBI96sQ.js";const t=`<h2 id="\u529F\u80FD\u8BF4\u660E">\u529F\u80FD\u8BF4\u660E</h2>
<p><code dir="auto">key-rate-limit</code> \u63D2\u4EF6\u5B9E\u73B0\u4E86\u57FA\u4E8E\u7279\u5B9A\u952E\u503C\u5B9E\u73B0\u9650\u6D41\uFF0C\u952E\u503C\u6765\u6E90\u53EF\u4EE5\u662F URL \u53C2\u6570\u3001HTTP \u8BF7\u6C42\u5934\u3002</p>
<h2 id="\u914D\u7F6E\u5B57\u6BB5">\u914D\u7F6E\u5B57\u6BB5</h2>

































<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>limit_by_header</td><td>string</td><td>\u9009\u586B\uFF0C<code dir="auto">limit_by_header</code>,<code dir="auto">limit_by_param</code> \u4E2D\u9009\u586B\u4E00\u9879</td><td>-</td><td>\u914D\u7F6E\u83B7\u53D6\u9650\u6D41\u952E\u503C\u7684\u6765\u6E90 http \u8BF7\u6C42\u5934\u540D\u79F0</td></tr><tr><td>limit_by_param</td><td>string</td><td>\u9009\u586B\uFF0C<code dir="auto">limit_by_header</code>,<code dir="auto">limit_by_param</code> \u4E2D\u9009\u586B\u4E00\u9879</td><td>-</td><td>\u914D\u7F6E\u83B7\u53D6\u9650\u6D41\u952E\u503C\u7684\u6765\u6E90 URL \u53C2\u6570\u540D\u79F0</td></tr><tr><td>limit_keys</td><td>array of object</td><td>\u5FC5\u586B</td><td>-</td><td>\u914D\u7F6E\u5339\u914D\u952E\u503C\u540E\u7684\u9650\u6D41\u6B21\u6570</td></tr></tbody></table>
<p><code dir="auto">limit_keys</code> \u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u3002</p>















































<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>key</td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u5339\u914D\u7684\u952E\u503C</td></tr><tr><td>query_per_second</td><td>number</td><td>\u9009\u586B\uFF0C<code dir="auto">query_per_second</code>,<code dir="auto">query_per_minute</code>,<code dir="auto">query_per_hour</code>,<code dir="auto">query_per_day</code> \u4E2D\u9009\u586B\u4E00\u9879</td><td>-</td><td>\u5141\u8BB8\u6BCF\u79D2\u8BF7\u6C42\u6B21\u6570</td></tr><tr><td>query_per_minute</td><td>number</td><td>\u9009\u586B\uFF0C<code dir="auto">query_per_second</code>,<code dir="auto">query_per_minute</code>,<code dir="auto">query_per_hour</code>,<code dir="auto">query_per_day</code> \u4E2D\u9009\u586B\u4E00\u9879</td><td>-</td><td>\u5141\u8BB8\u6BCF\u5206\u949F\u8BF7\u6C42\u6B21\u6570</td></tr><tr><td>query_per_hour</td><td>number</td><td>\u9009\u586B\uFF0C<code dir="auto">query_per_second</code>,<code dir="auto">query_per_minute</code>,<code dir="auto">query_per_hour</code>,<code dir="auto">query_per_day</code> \u4E2D\u9009\u586B\u4E00\u9879</td><td>-</td><td>\u5141\u8BB8\u6BCF\u5C0F\u65F6\u8BF7\u6C42\u6B21\u6570</td></tr><tr><td>query_per_day</td><td>number</td><td>\u9009\u586B\uFF0C<code dir="auto">query_per_second</code>,<code dir="auto">query_per_minute</code>,<code dir="auto">query_per_hour</code>,<code dir="auto">query_per_day</code> \u4E2D\u9009\u586B\u4E00\u9879</td><td>-</td><td>\u5141\u8BB8\u6BCF\u5929\u8BF7\u6C42\u6B21\u6570</td></tr></tbody></table>
<h2 id="\u914D\u7F6E\u793A\u4F8B">\u914D\u7F6E\u793A\u4F8B</h2>
<h3 id="\u8BC6\u522B\u8BF7\u6C42\u53C2\u6570-apikey\u8FDB\u884C\u533A\u522B\u9650\u6D41">\u8BC6\u522B\u8BF7\u6C42\u53C2\u6570 apikey\uFF0C\u8FDB\u884C\u533A\u522B\u9650\u6D41</h3>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">limit_by_param</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">apikey</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">limit_keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">9a342114-ba8a-11ec-b1bf-00163e1250b5</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">query_per_second</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">a6a6d7f2-ba8a-11ec-bec2-00163e1250b5</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">query_per_minute</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">100</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="limit_by_param: apikey\x7Flimit_keys:\x7F- key: 9a342114-ba8a-11ec-b1bf-00163e1250b5\x7F  query_per_second: 10\x7F- key: a6a6d7f2-ba8a-11ec-bec2-00163e1250b5\x7F  query_per_minute: 100"><div></div></button></div></figure></div>
<h3 id="\u8BC6\u522B\u8BF7\u6C42\u5934-x-ca-key\u8FDB\u884C\u533A\u522B\u9650\u6D41">\u8BC6\u522B\u8BF7\u6C42\u5934 x-ca-key\uFF0C\u8FDB\u884C\u533A\u522B\u9650\u6D41</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">limit_by_header</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-ca-key</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">limit_keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">102234</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">query_per_second</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">308239</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">query_per_hour</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="limit_by_header: x-ca-key\x7Flimit_keys:\x7F- key: 102234\x7F  query_per_second: 10\x7F- key: 308239\x7F  query_per_hour: 10"><div></div></button></div></figure></div>`,d={title:"\u57FA\u4E8E Key \u9650\u6D41",keywords:["higress","rate-limit"],description:"Key \u9650\u6D41\u63D2\u4EF6\u5B9E\u73B0\u4E86\u57FA\u4E8E\u7279\u5B9A\u952E\u503C\u5B9E\u73B0\u9650\u6D41\uFF0C\u952E\u503C\u6765\u6E90\u53EF\u4EE5\u662F URL \u53C2\u6570\u3001HTTP \u8BF7\u6C42\u5934\u3002"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/traffic/key-rate-limit.md",s=void 0;function c(){return"\n## \u529F\u80FD\u8BF4\u660E\n\n`key-rate-limit` \u63D2\u4EF6\u5B9E\u73B0\u4E86\u57FA\u4E8E\u7279\u5B9A\u952E\u503C\u5B9E\u73B0\u9650\u6D41\uFF0C\u952E\u503C\u6765\u6E90\u53EF\u4EE5\u662F URL \u53C2\u6570\u3001HTTP \u8BF7\u6C42\u5934\u3002\n\n## \u914D\u7F6E\u5B57\u6BB5\n\n| \u540D\u79F0 | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 |  \u9ED8\u8BA4\u503C | \u63CF\u8FF0 |\n| -------- | -------- | -------- | -------- | -------- |\n|  limit_by_header     |  string     | \u9009\u586B\uFF0C`limit_by_header`,`limit_by_param` \u4E2D\u9009\u586B\u4E00\u9879     |   -  |  \u914D\u7F6E\u83B7\u53D6\u9650\u6D41\u952E\u503C\u7684\u6765\u6E90 http \u8BF7\u6C42\u5934\u540D\u79F0   |\n|  limit_by_param     |  string     | \u9009\u586B\uFF0C`limit_by_header`,`limit_by_param` \u4E2D\u9009\u586B\u4E00\u9879     |   -  |  \u914D\u7F6E\u83B7\u53D6\u9650\u6D41\u952E\u503C\u7684\u6765\u6E90 URL \u53C2\u6570\u540D\u79F0   |\n|  limit_keys     |  array of object     | \u5FC5\u586B     |   -  |  \u914D\u7F6E\u5339\u914D\u952E\u503C\u540E\u7684\u9650\u6D41\u6B21\u6570   |\n\n`limit_keys` \u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u3002\n\n| \u540D\u79F0 | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 |  \u9ED8\u8BA4\u503C | \u63CF\u8FF0 |\n| -------- | -------- | -------- | -------- | -------- |\n|  key     |  string     | \u5FC5\u586B     |   -  |  \u5339\u914D\u7684\u952E\u503C |\n|  query_per_second     |  number     | \u9009\u586B\uFF0C`query_per_second`,`query_per_minute`,`query_per_hour`,`query_per_day` \u4E2D\u9009\u586B\u4E00\u9879     |   -  |  \u5141\u8BB8\u6BCF\u79D2\u8BF7\u6C42\u6B21\u6570 |\n|  query_per_minute     |  number     | \u9009\u586B\uFF0C`query_per_second`,`query_per_minute`,`query_per_hour`,`query_per_day` \u4E2D\u9009\u586B\u4E00\u9879     |   -  |  \u5141\u8BB8\u6BCF\u5206\u949F\u8BF7\u6C42\u6B21\u6570 |\n|  query_per_hour     |  number     | \u9009\u586B\uFF0C`query_per_second`,`query_per_minute`,`query_per_hour`,`query_per_day` \u4E2D\u9009\u586B\u4E00\u9879     |   -  |  \u5141\u8BB8\u6BCF\u5C0F\u65F6\u8BF7\u6C42\u6B21\u6570 |\n|  query_per_day     |  number     | \u9009\u586B\uFF0C`query_per_second`,`query_per_minute`,`query_per_hour`,`query_per_day` \u4E2D\u9009\u586B\u4E00\u9879     |   -  |  \u5141\u8BB8\u6BCF\u5929\u8BF7\u6C42\u6B21\u6570 |\n\n## \u914D\u7F6E\u793A\u4F8B\n\n### \u8BC6\u522B\u8BF7\u6C42\u53C2\u6570 apikey\uFF0C\u8FDB\u884C\u533A\u522B\u9650\u6D41\n```yaml\nlimit_by_param: apikey\nlimit_keys:\n- key: 9a342114-ba8a-11ec-b1bf-00163e1250b5\n  query_per_second: 10\n- key: a6a6d7f2-ba8a-11ec-bec2-00163e1250b5\n  query_per_minute: 100\n```\n\n### \u8BC6\u522B\u8BF7\u6C42\u5934 x-ca-key\uFF0C\u8FDB\u884C\u533A\u522B\u9650\u6D41\n```yaml\nlimit_by_header: x-ca-key\nlimit_keys:\n- key: 102234\n  query_per_second: 10\n- key: 308239\n  query_per_hour: 10\n```\n"}function o(){return t}function _(){return[{depth:2,slug:"\u529F\u80FD\u8BF4\u660E",text:"\u529F\u80FD\u8BF4\u660E"},{depth:2,slug:"\u914D\u7F6E\u5B57\u6BB5",text:"\u914D\u7F6E\u5B57\u6BB5"},{depth:2,slug:"\u914D\u7F6E\u793A\u4F8B",text:"\u914D\u7F6E\u793A\u4F8B"},{depth:3,slug:"\u8BC6\u522B\u8BF7\u6C42\u53C2\u6570-apikey\u8FDB\u884C\u533A\u522B\u9650\u6D41",text:"\u8BC6\u522B\u8BF7\u6C42\u53C2\u6570 apikey\uFF0C\u8FDB\u884C\u533A\u522B\u9650\u6D41"},{depth:3,slug:"\u8BC6\u522B\u8BF7\u6C42\u5934-x-ca-key\u8FDB\u884C\u533A\u522B\u9650\u6D41",text:"\u8BC6\u522B\u8BF7\u6C42\u5934 x-ca-key\uFF0C\u8FDB\u884C\u533A\u522B\u9650\u6D41"}]}const r=i((l,u,m)=>{const{layout:h,...e}=d;return e.file=a,e.url=s,n`${p()}${y(t)}`});export{r as Content,o as compiledContent,r as default,a as file,d as frontmatter,_ as getHeadings,c as rawContent,s as url};
