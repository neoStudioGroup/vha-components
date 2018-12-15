<template>
  <div class="index_PG-tabBar">
<section id="tabBar">

<h1><strong><a href="#tabBar">vha-tabbar 标签栏</a></strong></h1>
<p>基础用法</p>
<pre><code class="language-html">&lt;vha-tabbar&gt;
  &lt;vha-tab-item icon=&quot;home&quot;&gt;主页&lt;/vha-tab-item&gt;
  &lt;vha-tab-item icon=&quot;commenting&quot;&gt;消息&lt;/vha-tab-item&gt;
  &lt;vha-tab-item icon=&quot;eye&quot;&gt;发现&lt;/vha-tab-item&gt;
  &lt;vha-tab-item icon=&quot;user&quot;&gt;我的&lt;/vha-tab-item&gt;
&lt;/vha-tabbar&gt;</code></pre>
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
<td>followMeta</td>
<td>Boolean</td>
<td>true</td>
<td>是否跟随路由自动点亮</td>
</tr>
</tbody></table>
</section>
    <section id="lastSection" class="_df _jcsb">
      <a class="ui-r-a" href="https://github.com/neoStudioGroup/vha-components/blob/master/_docs/_data/tabBar.md" target="_blank">在 GitHub 上编辑此页</a>
      <span>上次更新：2018-12-15 15:10:25</span>
    </section>
  </div>
</template>