---
{
  "title": "标签栏",
  "name": "tabBar",
  "time": "2018-12-15 15:10:25"
}
---

<section id="tabBar">

# **[vha-tabbar 标签栏](#tabBar)**

基础用法

```html
<vha-tabbar>
  <vha-tab-item icon="home">主页</vha-tab-item>
  <vha-tab-item icon="commenting">消息</vha-tab-item>
  <vha-tab-item icon="eye">发现</vha-tab-item>
  <vha-tab-item icon="user">我的</vha-tab-item>
</vha-tabbar>
```

路由内配置显示隐藏

```json
meta: {
  vhaTabbar: {
    show: false // 不在这个路由页内显示标签栏，默认一直显示。
  }
}
```

</section>
<!-- ------------------------------------------- -->
<section id="API">

# **[API](#API)**

参数|类型|默认值|说明
-|-|-|-
type|String|normal|类型，可选值"none","base","normal"。
color|String|-|颜色，可选值"none","success","info","warning","error","dark","calm","stable","light"。为空时根据type自行判断, none为强制清除颜色
followMeta|Boolean|true|是否跟随路由自动点亮

</section>