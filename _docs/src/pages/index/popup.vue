<template>
  <div class="index_PG-popup">
<section id="popup">

<h1><strong><a href="#popup">vha-popup 弹出层</a></strong></h1>
<p>vha所有的弹出类组件都是基于vha-popup的，你可以用它来做一切顶层展示。</p>
<p>vha-popup会先创建自身（遮罩和内容）然后创建挂载对象到内容区域再把自己挂载到body下</p>
<p><strong>用法：载入后直接挂载</strong></p>
<pre><code class="language-javascript">import popupTest from &quot;./popup/popupTest&quot;
// mounted或方法内
let vhaPopup = this.$vhaPopup(popupTest) // 返回vhaPopup实例对象
vhaPopup.show()</code></pre>
<p class="ui-r-note _bdc-error">注意不要在html代码内挂载如&#60;div @click="this.$vhaPopup(popupTest)">&#60;/div>这样不会生效</p>

<p><strong>用法：在组件内挂载</strong></p>
<pre><code class="language-javascript">mounted() {
  this.$vhaPopup({
    mount: this // 将自身this实例挂载到vhaPopup
  }).show()
}</code></pre>
</section>
<!-- ------------------------------------------- -->
<section id="API">

<h1><strong><a href="#API">API</a></strong></h1>
<p>支持的属性</p>
<pre><code class="language-javascript">  callback: {
    show: undefined, // 显示时的回调
    close: undefined, // 关闭时的回调
    destroy: undefined, // 销毁时的回调
  },
  option: {
    leavePointer: true, // 离开时是否立即允许鼠标点击穿透
    autoDestroy: true // 是否自动销毁（如果自定义内容需要执行动画等待可以取消它动画结束后手动销毁）
  },
  mask: {
    style: {}, //遮罩层的style
    show: undefined, //是否显示遮罩层
    clickClose: true, //是否点击遮罩层后关闭popup
  },
  content: {
    pos: &#39;center&#39;, //默认位置居中显示，可选值&quot;center&quot;,&quot;top&quot;,&quot;right&quot;,&quot;bottom&quot;,&quot;left&quot;。
    animate: &#39;center&#39;, //默认动画的显示方式，可选值&quot;center&quot;,&quot;top&quot;,&quot;right&quot;,&quot;bottom&quot;,&quot;left&quot;。
  }</code></pre>
<p>支持的方法</p>
<p class="ui-r-note _bdc-info">show</p>

<p>显示弹出层</p>
<p class="ui-r-note _bdc-info">close</p>

<p>关闭弹出层</p>
<p class="ui-r-note _bdc-info">destroy</p>

<p>销毁弹出层</p>
</section>
    <section id="lastSection" class="_df _jcsb">
      <a class="ui-r-a" href="https://github.com/neoStudioGroup/vha-components/blob/master/_docs/_data/popup.md" target="_blank">在 GitHub 上编辑此页</a>
      <span>上次更新：2018-12-15 15:10:25</span>
    </section>
  </div>
</template>