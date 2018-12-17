<template>
  <div class="index_PG-dialog">
<section id="dialog">

<h1><strong><a href="#dialog">vha-dialog 对话框</a></strong></h1>
<p>该组件完全基于<a href="https://neostudiogroup.com/vha-components/popup">vha-popup</a>制作</p>
<p>如果只是弹出一段信息用法非常简单</p>
<pre><code class="language-javascript">this.$vhaDialog.alert(&#39;弹出一段消息&#39;)</code></pre>
</section>
<!-- ------------------------------------------- -->
<section id="Methods">

<h1><strong><a href="#Methods">方法</a></strong></h1>
<p class="ui-r-note _bdc-info">this.$vhaDialog.alert(text, option)</p>

<p>option = {title, buttons, cancelText, callback}</p>
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
<tr>
<td>option</td>
<td>Object</td>
<td>title:&#39;消息&#39;,buttons:[&#39;取消&#39;]</td>
<td>对应标题,按钮组,取消文本,回调(id)</td>
</tr>
</tbody></table>
<p class="ui-r-note _bdc-info">this.$vhaDialog.confirm(title, text, option)</p>

<p>option = {buttons, cancelText, okText, callback}</p>
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
<td>title</td>
<td>String</td>
<td>&#39;消息&#39;</td>
<td>显示的标题</td>
</tr>
<tr>
<td>text</td>
<td>String</td>
<td>-</td>
<td>显示的文本内容</td>
</tr>
<tr>
<td>option</td>
<td>Object</td>
<td>buttons:[&#39;取消&#39;,&#39;确定&#39;]</td>
<td>对应按钮组,取消文本,确定文本,回调(id)</td>
</tr>
</tbody></table>
<p class="ui-r-note _bdc-info">this.$vhaDialog.prompt(title, text, option)</p>

<p>option = {buttons, callback}</p>
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
<td>title</td>
<td>String</td>
<td>&#39;消息&#39;</td>
<td>显示的标题</td>
</tr>
<tr>
<td>text</td>
<td>String</td>
<td>-</td>
<td>显示的文本内容</td>
</tr>
<tr>
<td>option</td>
<td>Object</td>
<td>buttons:[&#39;取消&#39;,&#39;确定&#39;]</td>
<td>对应按钮组,回调(id)</td>
</tr>
</tbody></table>
</section>
    <section id="lastSection" class="_df _jcsb">
      <a class="ui-r-a" href="https://github.com/neoStudioGroup/vha-components/blob/master/_docs/_data/dialog.md" target="_blank">在 GitHub 上编辑此页</a>
      <span>上次更新：2018-12-15 15:10:25</span>
    </section>
  </div>
</template>