<template>
  <div class="index_PG-dialog">
<section id="dialog">

<h1><strong><a href="#dialog">vha-dialog </a></strong></h1>
<blockquote>
<p>cordova plugin add cordova-plugin-chrome</p>
</blockquote>
<p><router-link to="/aaa">router-link-aaa</router-link></p>
<p>Welcome to our API.</p>
<p>This API document is designed for those interested in developing for our platform.</p>
<p>This API is still under development anll under development anll under development anll under development anll under development anll under development anll under development anll under development and will evolve.</p>
<p>This API is still under development and will evolve.</p>
<p class="_cl-aaaaaa">You’ll succeed if you do this.</p>

<p class="ui-r-note _bdc-success">You’ll succeed if you do this.</p>
<p class="ui-r-note _bdc-info">Here’s some useful information.</p>
<p class="ui-r-note _bdc-warning">Something may not happen if you try and do this.</p>
<p class="ui-r-note _bdc-error">Something bad will happen if you do this.</p>

<h3><strong>事件 (Event)</strong></h3>
<p class="ui-r-return"><span>↪ 返回值：Promise(any)</span> 复制后返回一个Promise对象</p>
<p class="ui-r-return"><span>↪ 返回值：Function(any)</span> 回调函数。参数为result</p>
<p class="ui-r-return"><span>↪ 返回值：String(any)</span> 回调函数。参数为result</p>
<p class="ui-r-return"><span>↪ 返回值：Object(any)</span> 对象</p>
<p class="ui-r-return"><span>↪ 返回值：Boolean</span> 布尔型</p>

<dl>
  <dt>title</dt>
  <dd>The title for the book</dd>
  <dt>score</dt>
  <dd>The book's score between 0 and 5</dd>
</dl>

<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody><tr>
<td>networkState</td>
<td>String</td>
<td>网络连接类型</td>
</tr>
<tr>
<td>networkState</td>
<td>String</td>
<td>网络连接类型</td>
</tr>
<tr>
<td>networkState</td>
<td>String</td>
<td>网络连接类型</td>
</tr>
</tbody></table>
<table>
<thead>
<tr>
<th>Code</th>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td>200</td>
<td>OK</td>
<td>Success</td>
</tr>
<tr>
<td>201</td>
<td>Created</td>
<td>Creation Successful</td>
</tr>
<tr>
<td>400</td>
<td>Bad Request</td>
<td>We could not process that action</td>
</tr>
<tr>
<td>403</td>
<td>Forbidden</td>
<td>We couldn’t authenticate you</td>
</tr>
</tbody></table>
<pre><code class="language-javascript">StatusBaroverlaysWebView: function () {
  this.$vha.statusbar.overlaysWebView(this.overlaysWebViewtruefalse)
  if(this.overlaysWebViewtruefalse){
    this.logText += &quot;设置 overlaysWebView = false&quot; + &quot;\n&quot;
    this.overlaysWebViewtruefalse = false
    this.$vha.statusbar.overlaysWebView(this.overlaysWebViewtruefalse)
  }else{
    this.logText += &quot;设置 overlaysWebView = true&quot; + &quot;\n&quot;
    this.overlaysWebViewtruefalse = true
    this.$vha.statusbar.overlaysWebView(this.overlaysWebViewtruefalse)
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
<td>flex</td>
<td>类型，可选值&quot;flex&quot;,&quot;grid&quot;。</td>
</tr>
<tr>
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
<!-- ------------------------------------------- -->
<section id="Event">

<h1><strong><a href="#Event">Event</a></strong></h1>
<table>
<thead>
<tr>
<th>事件</th>
<th>参数</th>
<th>说明</th>
</tr>
</thead>
<tbody><tr>
<td>networkState</td>
<td>String</td>
<td>网络连接类型</td>
</tr>
<tr>
<td>networkState</td>
<td>String</td>
<td>网络连接类型</td>
</tr>
<tr>
<td>networkState</td>
<td>String</td>
<td>网络连接类型</td>
</tr>
</tbody></table>
</section>
    <section id="lastSection" class="_df _jcsb">
      <a class="ui-r-a" href="https://github.com/neoStudioGroup/vha-components/blob/master/_docs/_data/dialog.md" target="_blank">在 GitHub 上编辑此页</a>
      <span>上次更新：2018-12-15 15:10:25</span>
    </section>
  </div>
</template>