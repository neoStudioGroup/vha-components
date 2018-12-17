<template>
  <div class="index_PG-view">
<section id="view">

<h1><strong><a href="#view">vha-view 视图区域</a></strong></h1>
<p>vha-view是css3盒子模型的抽象组件，并以极简的方式实现了自由网格、自由宫格，你可以使用它展示一切内容。</p>
<p>你也可以使用css3盒子组合使用它，下面是vha-view常见用法展示。</p>
<p>更详细的用法请查阅css3盒子模型相关资料。</p>
<br />

<p class="ui-r-note _bdc-warning">该组件支持tag，可以把它渲染成其它标签或组件。默认为div标签</p>

<p>例如</p>
<pre><code class="language-html">&lt;vha-view tag=&quot;span&quot;&gt; &lt;!-- 将渲染成span --&gt;
  &lt;vha-subview&gt;
  &lt;/vha-subview&gt;
&lt;/vha-view&gt;

&lt;vha-view tag=&quot;vha-button&quot;&gt; &lt;!-- 将渲染成vha-button但不推荐这么做，你可以渲染成自己的组件。 --&gt;
  &lt;vha-subview&gt;
  &lt;/vha-subview&gt;
&lt;/vha-view&gt;</code></pre>
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
<td>flex</td>
<td>样式类型，可选值&quot;flex&quot;,&quot;grid&quot;。</td>
</tr>
<tr>
<td>gridLine</td>
<td>Boolean</td>
<td>false</td>
<td>网格时是否自动画分割线(手动较为麻烦所以提供它)</td>
</tr>
<tr>
<td>display</td>
<td>String</td>
<td>block</td>
<td>显示方式，可选值&quot;block&quot;,&quot;inline&quot;。设置display:flex 或 display:inline-flex</td>
</tr>
<tr>
<td>axis</td>
<td>String</td>
<td>x</td>
<td>轴的方向，可选值&quot;x&quot;,&quot;y&quot;。</td>
</tr>
<tr>
<td>align</td>
<td>String</td>
<td>-</td>
<td>轴线的对齐方式默认align-items:flex-start</td>
</tr>
<tr>
<td>justify</td>
<td>String</td>
<td>-</td>
<td>轴线的分布方式默认justify-content:flex-start</td>
</tr>
<tr>
<td>wrap</td>
<td>Boolean</td>
<td>false</td>
<td>是否开启换行模式设置flex-wrap:wrap</td>
</tr>
<tr>
<td>wrapJustify</td>
<td>String</td>
<td>-</td>
<td>换行的分布方式默认align-content:flex-start</td>
</tr>
<tr>
<td>size</td>
<td>String</td>
<td>-</td>
<td>尺寸，可选值&quot;none&quot;,&quot;full&quot;。display为block时会自动full撑满</td>
</tr>
</tbody></table>
</section>
    <section id="lastSection" class="_df _jcsb">
      <a class="ui-r-a" href="https://github.com/neoStudioGroup/vha-components/blob/master/_docs/_data/view.md" target="_blank">在 GitHub 上编辑此页</a>
      <span>上次更新：2018-12-15 15:10:25</span>
    </section>
  </div>
</template>