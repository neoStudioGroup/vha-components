<template>
  <div class="index_PG-scrollView">
<section id="scrollView">

<h1><strong><a href="#scrollView">vha-scrollView 滚动视图</a></strong></h1>
<p>vha的滚动视图是在原生滚动（为了性能）的基础上增加了下拉刷新和上拉加载等功能。</p>
<p>该组件在未来会极大的增强，将替换掉swipe和选择器。</p>
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
<td>offset</td>
<td>Number</td>
<td>44</td>
<td>触发下拉动作的偏移值</td>
</tr>
<tr>
<td>onRefresh</td>
<td>Function</td>
<td>-</td>
<td>刷新动作回调函数</td>
</tr>
<tr>
<td>onInfinite</td>
<td>Function</td>
<td>-</td>
<td>加载更多动作回调函数</td>
</tr>
<tr>
<td>keepBottom</td>
<td>Boolean</td>
<td>false</td>
<td>滚动条保持在底部（用来制作聊天框类组件）</td>
</tr>
</tbody></table>
</section>
    <section id="lastSection" class="_df _jcsb">
      <a class="ui-r-a" href="https://github.com/neoStudioGroup/vha-components/blob/master/_docs/_data/scrollView.md" target="_blank">在 GitHub 上编辑此页</a>
      <span>上次更新：2018-12-15 15:10:25</span>
    </section>
  </div>
</template>