<template>
  <div class="index_PG-toast">
<section id="toast">

<h1><strong><a href="#toast">vha-toast 信息提示</a></strong></h1>
<p>该组件完全基于<a href="https://neostudiogroup.com/vha-components/popup">vha-popup</a>制作</p>
</section>
<!-- ------------------------------------------- -->
<section id="Methods">

<h1><strong><a href="#Methods">方法</a></strong></h1>
<p class="ui-r-note _bdc-info">this.$vhaToast(option)</p>

<p>option = {pos, icon, duration, callback}</p>
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
<td>option</td>
<td>Object</td>
<td>pos:&#39;center&#39;,duration:1500</td>
<td>对应位置(&#39;top&#39;,&#39;center&#39;,&#39;bottom&#39;),图标,持续时间,关闭回调</td>
</tr>
</tbody></table>
<p class="ui-r-note _bdc-info">show(text)</p>

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
<td>text</td>
<td>String</td>
<td>-</td>
<td>显示的文本内容</td>
</tr>
</tbody></table>
<p><strong>示例：</strong></p>
<pre><code class="language-javascript">this.$vhaToast().show(&#39;中间文字提示&#39;)</code></pre>
</section>
    <section id="lastSection" class="_df _jcsb">
      <a class="ui-r-a" href="https://github.com/neoStudioGroup/vha-components/blob/master/_docs/_data/toast.md" target="_blank">在 GitHub 上编辑此页</a>
      <span>上次更新：2018-12-15 15:10:25</span>
    </section>
  </div>
</template>