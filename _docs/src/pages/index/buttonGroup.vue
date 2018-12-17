<template>
  <div class="index_PG-buttonGroup">
<section id="buttonGroup">

<h1><strong><a href="#buttonGroup">vha-buttonGroup 按钮组</a></strong></h1>
<p>管理一组按钮状态的按钮组</p>
<pre><code class="language-html">&lt;vha-buttongroup v-model=&quot;selectData&quot;&gt;
  &lt;vha-button groupNote=&quot;第一个&quot;&gt;
    按钮1
  &lt;/vha-button&gt;
  &lt;vha-button groupNote=&quot;第二个&quot;&gt;
    按钮2
  &lt;/vha-button&gt;
  &lt;vha-button groupNote=&quot;第三个&quot;&gt;
    按钮3
  &lt;/vha-button&gt;
&lt;/vha-buttongroup&gt;</code></pre>
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
<td>value</td>
<td>Array</td>
<td>-</td>
<td>设置默认的选中状态</td>
</tr>
<tr>
<td>groupStyle</td>
<td>String</td>
<td>none</td>
<td>内置组风格，可选值&quot;ios&quot;,&quot;topline&quot;,&quot;bottomline&quot;。</td>
</tr>
<tr>
<td>selectMode</td>
<td>String</td>
<td>single</td>
<td>选择的模式，可选值&quot;single&quot;,&quot;multiple&quot;。（单选，多选）</td>
</tr>
<tr>
<td>selectClass</td>
<td>String</td>
<td>-</td>
<td>被选择按钮附加的类名，默认根据风格自行判断。</td>
</tr>
</tbody></table>
</section>
<!-- ------------------------------------------- -->
<section id="Event">

<h1><strong><a href="#Event">Event</a></strong></h1>
<p class="ui-r-note _bdc-info">click</p>

<p class="ui-r-return"><span>↪ 返回值：event, info</span> 点击事件返回的按钮参数</p>

</section>
    <section id="lastSection" class="_df _jcsb">
      <a class="ui-r-a" href="https://github.com/neoStudioGroup/vha-components/blob/master/_docs/_data/buttonGroup.md" target="_blank">在 GitHub 上编辑此页</a>
      <span>上次更新：2018-12-15 15:10:25</span>
    </section>
  </div>
</template>