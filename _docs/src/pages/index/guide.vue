<template>
  <div class="index_PG-guide">
<section id="intro">

<h1><strong><a href="#intro">介绍</a></strong></h1>
<p>##vha-components</p>
<p>基于vue开发的移动端组件库，为快速构建移动端“定制化”ui界面而生。</p>
<p>特点是即可快速构建也可自由修改。</p>
<p>如果你对界面有“定制化”的需求我推荐你使用它，如果有“快速构建”的需求我也推荐你使用它。</p>
<p>vha提供了cordova插件的封装<a href="https://github.com/neoStudioGroup/vha-native">vha-native</a>和构建平台<a href="https://github.com/neoStudioGroup/vha">vha</a></p>
<p>当然你也可以使用它和weex，hbuild，mpvue等框架配合使用。</p>
</section>
<!-- ------------------------------------------- -->
<section id="GettingStarted">

<h1><strong><a href="#GettingStarted">快速开始</a></strong></h1>
<p><a class="ui-r-npm" href="https://www.npmjs.com/package/vha-components" target="_blank">vha-components</a></p>

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
<!-- ------------------------------------------- -->
<section id="directory">

<h1><strong><a href="#directory">目录结构</a></strong></h1>
<h3>vha</h3>
<pre><code>vha
├ _docs //官网源文件夹
├ docs //文档网站
├ _ui //ui工具界面源文件
├ ui //ui工具界面
└ bin //
 ├ apis.js //全局方法
 ├ config.js //配置文件方法
 ├ config.json //配置文件
 ├ config_debug.json //debug配置文件
 ├ global.js //全局挂载
 ├ index.js //入口文件
 └ index_ui.js //ui命令
├ README //README相关文件
├ .gitignore //git忽略文件
├ .npmignore //npm忽略文件
├ LICENSE //开源协议
├ package.json //包信息
└ README.md //说明文档</code></pre><h3>vha-components</h3>
<pre><code>src
├ assets
├ ─fonts //图标文件夹
├ ─images //图片文件夹
└─ stylus //css文件夹
  ├ global.styl //全局样式
  ├ iconfont.styl //图标样式
  ├ method.styl //公共方法
  ├ mixin.styl //变量/方法
  └ reset.styl //重置默认css
├ components //组件文件夹
 └ utils.js //公共工具类方法
├ vhaEvent.js //vha事件
├ vhaInstall.js //vha组件挂载安装
├ vhaMixin.js //vha_rpx 等方法
└ vhaRouter.js //vhaRt等指令</code></pre></section>
<!-- ------------------------------------------- -->
<section id="design">

<h1><strong><a href="#design">设计指南</a></strong></h1>
<p>vha全部采用了以750px为基准的rpx单位</p>
<p>设计图应采用iphone6尺寸（1334 x 750）。</p>
<p>应用rpx()按照设计图尺寸填写即可。</p>
</section>
<!-- ------------------------------------------- -->
<section id="onepx">

<h1><strong><a href="#onepx">1px线</a></strong></h1>
<p>vha的1px实现与其它库略有不同，因此支持圆角边框。</p>
<p>支持的css方法有：</p>
<pre><code>border-radius-line($radius)
border-line($parm)
border-top-line($parm)
border-right-line($parm)
border-bottom-line($parm)
border-left-line($parm)</code></pre><p><strong>例：</strong></p>
<pre><code>border-line(1px solid red)
border-radius-line(rpx(10))</code></pre></section>
<!-- ------------------------------------------- -->
<section id="directive">

<h1><strong><a href="#directive">指令&amp;方法</a></strong></h1>
<p>vha指令支持将v-vhaRt绑定在任意元素上进行路由转跳用法与$Router相同只不过多了路由动画和动态缓存控制。</p>
<p class="ui-r-note _bdc-info">v-vhaRt</p>

<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody><tr>
<td>push</td>
<td>location</td>
<td>转到路由的路径&amp;参数</td>
</tr>
<tr>
<td>go</td>
<td>Number</td>
<td>前进后退的步数</td>
</tr>
<tr>
<td>animate</td>
<td>String</td>
<td>动画的字符串内置的参数&quot;in&quot;,&quot;out&quot;,&quot;none&quot;</td>
</tr>
<tr>
<td>keepAlive</td>
<td>Boolean</td>
<td>设置即将转跳的页面是否开启缓存(路由内也可完成相同设置)</td>
</tr>
</tbody></table>
<p>相同作用的js代码为this.$vhaRt</p>
<p class="ui-r-note _bdc-info">this.$vhaRt</p>

<table>
<thead>
<tr>
<th>方法</th>
<th>参数</th>
</tr>
</thead>
<tbody><tr>
<td>push</td>
<td>Object</td>
</tr>
<tr>
<td>go</td>
<td>Object</td>
</tr>
</tbody></table>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody><tr>
<td>value</td>
<td>any</td>
<td>指令附带的值</td>
</tr>
<tr>
<td>animate</td>
<td>String</td>
<td>动画的字符串内置的参数&quot;in&quot;,&quot;out&quot;,&quot;none&quot;</td>
</tr>
<tr>
<td>keepAlive</td>
<td>Boolean</td>
<td>设置即将转跳的页面是否开启缓存(路由内也可完成相同设置)</td>
</tr>
</tbody></table>
<p><strong>例：</strong></p>
<pre><code>&lt;div v-vhaRt=&quot;{push:&#39;/xxx&#39;, animate:&#39;in&#39;, keepAlive:true}&quot;&gt;&lt;/div&gt;
&lt;div @click=&quot;$vhaRt.push({value:&#39;/xxx&#39;, animate: &#39;in&#39;, keepAlive:true})&quot;&gt;&lt;/div&gt;</code></pre></section>
<!-- ------------------------------------------- -->
<section id="componentized">

<h1><strong><a href="#componentized">neo组件化命名规范</a></strong></h1>
<p>强烈推荐组合<a href="https://github.com/mixingyu/Componentized-name-rules">neo组件化命名规范</a>开发</p>
<p>可以让开发过程非常简单清晰。</p>
</section>
<!-- ------------------------------------------- -->
    <section id="lastSection" class="_df _jcsb">
      <a class="ui-r-a" href="https://github.com/neoStudioGroup/vha-native/blob/master/_docs/_data/guide.md" target="_blank">在 GitHub 上编辑此页</a>
      <span>上次更新：2018-12-14 15:55:47</span>
    </section>
  </div>
</template>