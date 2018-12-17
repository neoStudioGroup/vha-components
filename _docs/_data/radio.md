---
{
  "title": "单选框",
  "name": "radio",
  "time": "2018-12-15 15:10:25"
}
---

<section id="radio">

# **[vha-radio 单选框](#radio)**

vha实现了原生radio的参数，事件，model绑定，所以像使用原生radio一样使用它吧。

</section>
<!-- ------------------------------------------- -->
<section id="SLOT">

# **[SLOT 插槽](#SLOT)**

name|说明
-|-
slotSelectContent|选中时展示的插槽
slotUnselectContent|未选中时展示的插槽
content|默认插槽：如果设置了上面的两个插槽将不会显示它，否则默认插槽也可以替换

</section>
<!-- ------------------------------------------- -->
<section id="API">

# **[API](#API)**

参数|类型|默认值|说明
-|-|-|-
selectClass|String|action-select|选中时应用的class
unSelectClass|String|action-unselect|未选中时应用的class
color|String|info|颜色，可选值"none","success","info","warning","error","dark","calm","stable","light"。none为强制清除颜色
icon|String|vha_icon-radio|左侧的图标
textLeft|String|-|图标左侧的文字
text|String|-|图标右侧的文字
checked|Boolean|-|是否选中

</section>