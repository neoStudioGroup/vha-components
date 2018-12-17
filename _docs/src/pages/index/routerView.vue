<template>
  <div class="index_PG-routerView">
<section id="routerView">

<h1><strong><a href="#routerView">vha-routerview 路由视图</a></strong></h1>
<p>vha的路由基本只包含page页面的展示，可以在路由router.js里控制页面的缓存。</p>
<pre><code class="language-json">meta: {
  keepAlive: true
}</code></pre>
<p>默认路由页面动画根据路由层级自动判断，同级页面会出现不理想的效果。所以这里提供了一个强制指定页面动画的参数。</p>
<pre><code class="language-json">meta: {
  vhaAnime: {
    in: &#39;in&#39;,
    out: &#39;out&#39;
  }
}</code></pre>
<p>如下是<a href="https://github.com/mixingyu/vha-template-tabs">vha-template-tabs</a>模板的路由逻辑</p>
<img width="600" src="https://raw.githubusercontent.com/mixingyu/vha-template-tabs/master/README/router.png">

</section>
<!-- ------------------------------------------- -->
<section id="API">

<h1><strong><a href="#API">API</a></strong></h1>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody><tr>
<td>size</td>
<td>String</td>
<td>auto</td>
<td>类型，可选值&quot;auto&quot;,&quot;full&quot;。(默认根据网页宽度自动适配)</td>
</tr>
<tr>
<td>include</td>
<td>String</td>
<td>-</td>
<td>包含的缓存路由name，与router-view一致。</td>
</tr>
<tr>
<td>exclude</td>
<td>String</td>
<td>-</td>
<td>排除的缓存路由name，与router-view一致。</td>
</tr>
<tr>
<td>max</td>
<td>Number</td>
<td>0</td>
<td>最大缓存数</td>
</tr>
</tbody></table>
</section>
    <section id="lastSection" class="_df _jcsb">
      <a class="ui-r-a" href="https://github.com/neoStudioGroup/vha-components/blob/master/_docs/_data/routerView.md" target="_blank">在 GitHub 上编辑此页</a>
      <span>上次更新：2018-12-15 15:10:25</span>
    </section>
  </div>
</template>