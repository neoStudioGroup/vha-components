<template>
  <div class="index_PG-button">
<section id="button">

<h1><strong><a href="#button">vha-button 按钮</a></strong></h1>
<p>组件可以使用view接管视图区域，自由布局。</p>
<pre><code class="language-html">&lt;vha-button&gt;
  &lt;vha-view align=&quot;center&quot;&gt;
    &lt;span&gt;diy&lt;/span&gt;
  &lt;/vha-view&gt;
&lt;/vha-button&gt;</code></pre>
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
<td>样式类型，可选值&quot;none&quot;,&quot;base&quot;,&quot;normal&quot;,&quot;outline&quot;。</td>
</tr>
<tr>
<td>size</td>
<td>String</td>
<td>normal</td>
<td>尺寸，可选值&quot;none&quot;,&quot;small&quot;,&quot;normal&quot;,&quot;large&quot;,&quot;fullWidth&quot;,&quot;full&quot;。</td>
</tr>
<tr>
<td>effect</td>
<td>String</td>
<td>spread</td>
<td>点击效果，可选值&quot;spread&quot;。</td>
</tr>
<tr>
<td>color</td>
<td>String</td>
<td>-</td>
<td>颜色，可选值&quot;none&quot;,&quot;success&quot;,&quot;info&quot;,&quot;warning&quot;,&quot;error&quot;,&quot;dark&quot;,&quot;calm&quot;,&quot;stable&quot;,&quot;light&quot;。为空时根据type自行判断, none为强制清除颜色</td>
</tr>
<tr>
<td>block</td>
<td>Boolean</td>
<td>false</td>
<td>是否为块状元素</td>
</tr>
<tr>
<td>nativeType</td>
<td>String</td>
<td>-</td>
<td>由于type用在了类型判断，所以提供它，需要时可以使用它制作原生表单</td>
</tr>
<tr>
<td>disabled</td>
<td>Boolean</td>
<td>false</td>
<td>是否禁止</td>
</tr>
<tr>
<td>icon</td>
<td>String</td>
<td>-</td>
<td>默认左侧的图标</td>
</tr>
<tr>
<td>iconRight</td>
<td>String</td>
<td>-</td>
<td>默认右侧的图标</td>
</tr>
<tr>
<td>groupNote</td>
<td>String</td>
<td>-</td>
<td>当使用组按钮的时候可以设定一个标记</td>
</tr>
</tbody></table>
</section>
    <section id="lastSection" class="_df _jcsb">
      <a class="ui-r-a" href="https://github.com/neoStudioGroup/vha-components/blob/master/_docs/_data/button.md" target="_blank">在 GitHub 上编辑此页</a>
      <span>上次更新：2018-12-15 15:10:25</span>
    </section>
  </div>
</template>