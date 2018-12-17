---
{
  "title": "导航栏",
  "name": "navBar",
  "time": "2018-12-15 15:10:25"
}
---

<section id="navBar">

# **[vha-navbar 导航栏](#navBar)**

基础用法

```html
<vha-navbar title="normal"></vha-navbar>
```

标题和按钮参数需要在路由内配置

```json
meta: {
  vhaNavbar: {
    title: '路由标题',
    sideButton: 'none' // 隐藏侧边按钮
  }
}
```

</section>
<!-- ------------------------------------------- -->
<section id="SLOT">

# **[SLOT 插槽](#SLOT)**

name|说明
-|-
leftBox|左侧插槽
titleBox|标题插槽
rightBox|右侧插槽

</section>
<!-- ------------------------------------------- -->
<section id="API">

# **[API](#API)**

参数|类型|默认值|说明
-|-|-|-
type|String|normal|样式类型，可选值"none","base","normal"。
color|String|-|颜色，可选值"none","success","info","warning","error","dark","calm","stable","light"。为空时根据type自行判断, none为强制清除颜色
title|String|-|标题
sideButton|String|both|侧边按钮，可选值"none","left","right","both"

</section>