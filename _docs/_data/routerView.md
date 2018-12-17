---
{
  "title": "路由视图",
  "name": "routerView",
  "time": "2018-12-15 15:10:25"
}
---

<section id="routerView">

# **[vha-routerview 路由视图](#routerView)**

vha的路由基本只包含page页面的展示，可以在路由router.js里控制页面的缓存。

```json
meta: {
  keepAlive: true
}
```

默认路由页面动画根据路由层级自动判断，同级页面会出现不理想的效果。所以这里提供了一个强制指定页面动画的参数。

```json
meta: {
  vhaAnime: {
    in: 'in',
    out: 'out'
  }
}
```

如下是[vha-template-tabs](https://github.com/mixingyu/vha-template-tabs)模板的路由逻辑

<img width="600" src="https://raw.githubusercontent.com/mixingyu/vha-template-tabs/master/README/router.png">

</section>
<!-- ------------------------------------------- -->
<section id="API">

# **[API](#API)**

参数|类型|默认值|说明
-|-|-|-
size|String|auto|类型，可选值"auto","full"。(默认根据网页宽度自动适配)
include|String|-|包含的缓存路由name，与router-view一致。
exclude|String|-|排除的缓存路由name，与router-view一致。
max|Number|0|最大缓存数

</section>