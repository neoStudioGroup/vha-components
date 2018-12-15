---
{
  "title": "滚动视图",
  "name": "scrollView",
  "time": "2018-12-15 15:10:25"
}
---

<section id="scrollView">

# **[vha-scrollView 滚动视图](#scrollView)**

vha的滚动视图是在原生滚动（为了性能）的基础上增加了下拉刷新和上拉加载等功能。

该组件在未来会极大的增强，将替换掉swipe和选择器。

</section>
<!-- ------------------------------------------- -->
<section id="API">

# **[API](#API)**

参数|类型|默认值|说明
-|-|-|-
offset|Number|44|触发下拉动作的偏移值
onRefresh|Function|-|刷新动作回调函数
onInfinite|Function|-|加载更多动作回调函数
keepBottom|Boolean|false|滚动条保持在底部（用来制作聊天框类组件）

</section>