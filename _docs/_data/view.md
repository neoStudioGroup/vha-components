---
{
  "title": "视图区域",
  "name": "view",
  "time": "2018-12-15 15:10:25"
}
---

<section id="view">

# **[vha-view 视图区域](#view)**

vha-view是css3盒子模型的抽象组件，并以极简的方式实现了自由网格、自由宫格，你可以使用它展示一切内容。

你也可以使用css3盒子组合使用它，下面是vha-view常见用法展示。

更详细的用法请查阅css3盒子模型相关资料。

<br />

<p class="ui-r-note _bdc-warning">该组件支持tag，可以把它渲染成其它标签或组件。默认为div标签</p>

例如

```html
<vha-view tag="span"> <!-- 将渲染成span -->
  <vha-subview>
  </vha-subview>
</vha-view>

<vha-view tag="vha-button"> <!-- 将渲染成vha-button但不推荐这么做，你可以渲染成自己的组件。 -->
  <vha-subview>
  </vha-subview>
</vha-view>
```

</section>
<!-- ------------------------------------------- -->
<section id="API">

# **[API](#API)**

参数|类型|默认值|说明
-|-|-|-
type|String|flex|类型，可选值"flex","grid"。
gridLine|Boolean|false|网格时是否自动画分割线(手动较为麻烦所以提供它)
display|String|block|显示方式，可选值"block","inline"。设置display:flex 或 display:inline-flex
axis|String|x|轴的方向，可选值"x","y"。
align|String|-|轴线的对齐方式默认align-items:flex-start
justify|String|-|轴线的分布方式默认justify-content:flex-start
wrap|Boolean|false|是否开启换行模式设置flex-wrap:wrap
wrapJustify|String|-|换行的分布方式默认align-content:flex-start
size|String|-|尺寸，可选值"none","full"。display为block时会自动full撑满


</section>