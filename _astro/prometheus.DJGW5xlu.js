import{c as i,r,m as l}from"./render-template.CJlwwtnB.js";import{u as p}from"./constant.CxavaNFL.js";import"./preload-helper.BiBI96sQ.js";const s=`<h2 id="use-the-higress-console-built-in-monitor-suite">Use the Higress Console Built-In Monitor Suite</h2>
<p>Higress Console has a built-in monitor suite based on Prometheus + Grafana, which isn\u2019t installed by default. When installing Higress with Helm, you can enable it by adding the following argument to the command line: <code dir="auto">--set higress-console.o11y.enabled=true</code>.</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">repo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">add</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.io</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://higress.io/helm-charts</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">install</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.io/higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--create-namespace</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--render-subchart-notes</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-console.o11y.enabled=</span><span style="--0:#79B8FF">true</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="helm repo add higress.io https://higress.io/helm-charts\x7Fhelm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes --set higress-console.o11y.enabled=true"><div></div></button></div></figure></div>
<p>Note: When installing to a standard K8s cluster (meaning without specifying <code dir="auto">global.local=true</code> or <code dir="auto">global.kind=true</code>), the PersistentVolumeClaim configured in the suite uses the access mode of <code dir="auto">ReadWriteMany</code> by default. If the target K8s cluster doesn\u2019t support this mode, you can add the following argument to the command line to change the access mode to <code dir="auto">ReadWriteOnce</code>: <code dir="auto">--set higress-console.pvc.rwxSupported=false</code>.</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">repo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">add</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.io</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://higress.io/helm-charts</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">install</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.io/higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--create-namespace</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--render-subchart-notes</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-console.o11y.enabled=</span><span style="--0:#79B8FF">true</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-console.pvc.rwxSupported=</span><span style="--0:#79B8FF">false</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="helm repo add higress.io https://higress.io/helm-charts\x7Fhelm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes --set higress-console.o11y.enabled=true --set higress-console.pvc.rwxSupported=false"><div></div></button></div></figure></div>
<p>After installation, open Higress Console in your browser, and click \u201CDashboard\u201D on the left navigation area. The built-in dashboard will be displayed on the right.</p>
<p><img src="/img/user/prometheus/en-us/builtin.png" alt="image" referrerpolicy="no-referrer"></p>
<h2 id="use-a-standalone-monitor-suite">Use a Standalone Monitor Suite</h2>
<p>Both the data and control planes of Higress expose a set of metrics via API. To monitor them, you just need to add probe configurations into Prometheus and configure a dashboard in Grafana.</p>
<p>Before starting the configuration, please open Higress Console in your browser and switch to \u201CDashboard\u201D from the left navigation area. The external dashboard configuration page and related notes will be displayed on the right.</p>
<p><img src="/img/user/prometheus/en-us/external-before.png" alt="image" referrerpolicy="no-referrer"></p>
<p>Update the configurations of Prometheus and Grafana following the notes. Then put the Grafana dashboard into the textbox above and save. The page will reload automatically and your dashboard will be shown on the right.</p>
<p><img src="/img/user/prometheus/en-us/external-after.png" alt="image" referrerpolicy="no-referrer"></p>
<p>If you\u2019d like to update the dashboard URL, you can click the \u201CReconfigure\u201D button on the top left corner.</p>`,t={title:"Request Monitoring Based on Prometheus",keywords:["Higress","Prometheus"],description:"Request Monitoring Based on Prometheus",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/en-us/docusaurus-plugin-content-docs/current/user/prometheus.md"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/user/prometheus.md",n=void 0;function d(){return`
# Request Monitoring Based on Prometheus

## Use the Higress Console Built-In Monitor Suite

Higress Console has a built-in monitor suite based on Prometheus + Grafana, which isn't installed by default. When installing Higress with Helm, you can enable it by adding the following argument to the command line: \`--set higress-console.o11y.enabled=true\`.

\`\`\`bash
helm repo add higress.io https://higress.io/helm-charts
helm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes --set higress-console.o11y.enabled=true
\`\`\`

Note: When installing to a standard K8s cluster (meaning without specifying \`global.local=true\` or \`global.kind=true\`), the PersistentVolumeClaim configured in the suite uses the access mode of \`ReadWriteMany\` by default. If the target K8s cluster doesn't support this mode, you can add the following argument to the command line to change the access mode to \`ReadWriteOnce\`: \`--set higress-console.pvc.rwxSupported=false\`.

\`\`\`bash
helm repo add higress.io https://higress.io/helm-charts
helm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes --set higress-console.o11y.enabled=true --set higress-console.pvc.rwxSupported=false
\`\`\`

After installation, open Higress Console in your browser, and click "Dashboard" on the left navigation area. The built-in dashboard will be displayed on the right.

![image](/img/user/prometheus/en-us/builtin.png)

## Use a Standalone Monitor Suite

Both the data and control planes of Higress expose a set of metrics via API. To monitor them, you just need to add probe configurations into Prometheus and configure a dashboard in Grafana.

Before starting the configuration, please open Higress Console in your browser and switch to "Dashboard" from the left navigation area. The external dashboard configuration page and related notes will be displayed on the right.

![image](/img/user/prometheus/en-us/external-before.png)

Update the configurations of Prometheus and Grafana following the notes. Then put the Grafana dashboard into the textbox above and save. The page will reload automatically and your dashboard will be shown on the right.

![image](/img/user/prometheus/en-us/external-after.png)

If you'd like to update the dashboard URL, you can click the "Reconfigure" button on the top left corner.`}function h(){return s}function c(){return[{depth:2,slug:"use-the-higress-console-built-in-monitor-suite",text:"Use the Higress Console Built-In Monitor Suite"},{depth:2,slug:"use-a-standalone-monitor-suite",text:"Use a Standalone Monitor Suite"}]}const o=i((u,g,m)=>{const{layout:y,...e}=t;return e.file=a,e.url=n,r`${l()}${p(s)}`});export{o as Content,h as compiledContent,o as default,a as file,t as frontmatter,c as getHeadings,d as rawContent,n as url};
