---
{
  "title": "按钮",
  "name": "button",
  "time": "2018-12-15 15:10:25"
}
---

<section id="button">

# **[vha-button 按钮](#button)**

组件可以使用view接管视图区域，自由布局。

```html
<vha-button>
  <vha-view align="center">
    <span>diy</span>
  </vha-view>
</vha-button>
```

</section>
<!-- ------------------------------------------- -->
<section id="API">

# **[API](#API)**

参数|类型|默认值|说明
-|-|-|-
type|String|normal|样式类型，可选值"none","base","normal","outline"。
size|String|normal|尺寸，可选值"none","small","normal","large","fullWidth","full"。
effect|String|spread|点击效果，可选值"spread"。
color|String|-|颜色，可选值"none","success","info","warning","error","dark","calm","stable","light"。为空时根据type自行判断, none为强制清除颜色
block|Boolean|false|是否为块状元素
nativeType|String|-|由于type用在了类型判断，所以提供它，需要时可以使用它制作原生表单
disabled|Boolean|false|是否禁止
icon|String|-|默认左侧的图标
iconRight|String|-|默认右侧的图标
groupNote|String|-|当使用组按钮的时候可以设定一个标记

</section>