<template>
  <div class="index_PG-Getting-Started">
<section id="Getting-Started">

<h1><a href="#Getting-Started">快速开始</a></h1>
<br />

<p><a class="ui-r-npm" href="https://www.npmjs.com/package/vha-components" target="_blank">vha-components</a></p>

<br />
<br />
<br />

<p>1.添加npm包到项目。</p>
<blockquote>
<p>npm install vha-components --save</p>
</blockquote>
<p>2.在main.js内引入组件库</p>
<pre><code class="language-javascript">// import
import Vue from &#39;vue&#39;
import vhaComponents from &#39;vha-components&#39;
Vue.use(vhaComponents)</code></pre>
<br />

<p>3.全局使用 rpx() （根目录建立vue.config.js文件内配置）</p>
<pre><code class="language-javascript">module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        import: [&#39;~vha-components/src/assets/stylus/method.styl&#39;]
      }
    }
  }
}</code></pre>
</section>
    <section id="lastSection" class="_df _jcsb">
      <a class="ui-r-a" href="https://github.com/neoStudioGroup/vha-native/blob/master/_docs/_data/Getting-Started.md" target="_blank">在 GitHub 上编辑此页</a>
      <span>上次更新：2018-10-17 16:33:09</span>
    </section>
  </div>
</template>