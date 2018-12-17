<template>
  <div class="index_PG-navBar">
<section id="navBar">

<h1><strong><a href="#navBar">vha-navbar 导航栏</a></strong></h1>
<p>基础用法</p>
<pre><code class="language-html">&lt;vha-navbar title=&quot;normal&quot;&gt;&lt;/vha-navbar&gt;</code></pre>
<p>标题和按钮参数需要在路由内配置</p>
<pre><code class="language-json">meta: {
  vhaNavbar: {
    title: &#39;路由标题&#39;,
    sideButton: &#39;none&#39; // 隐藏侧边按钮
  }
}</code></pre>
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
<td>type</td>
<td>String</td>
<td>normal</td>
<td>类型，可选值&quot;none&quot;,&quot;base&quot;,&quot;normal&quot;。</td>
</tr>
<tr>
<td>color</td>
<td>String</td>
<td>-</td>
<td>颜色，可选值&quot;none&quot;,&quot;success&quot;,&quot;info&quot;,&quot;warning&quot;,&quot;error&quot;,&quot;dark&quot;,&quot;calm&quot;,&quot;stable&quot;,&quot;light&quot;。为空时根据type自行判断, none为强制清除颜色</td>
</tr>
<tr>
<td>title</td>
<td>String</td>
<td>-</td>
<td>标题</td>
</tr>
<tr>
<td>sideButton</td>
<td>String</td>
<td>both</td>
<td>侧边按钮，可选值&quot;none&quot;,&quot;left&quot;,&quot;right&quot;,&quot;both&quot;</td>
</tr>
</tbody></table>
</section>
    <section id="lastSection" class="_df _jcsb">
      <a class="ui-r-a" href="https://github.com/neoStudioGroup/vha-components/blob/master/_docs/_data/navBar.md" target="_blank">在 GitHub 上编辑此页</a>
      <span>上次更新：2018-12-15 15:10:25</span>
    </section>
  </div>
</template>