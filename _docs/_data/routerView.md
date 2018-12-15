---
{
  "title": "路由视图",
  "name": "routerView",
  "time": "2018-12-15 15:10:25"
}
---

<section id="routerView">

# **[vha-routerview](#routerView)**

vha的路由基本只包含page页面的展示，可以在路由router.js里控制页面的缓存。

```json
meta: {
  keepAlive: true
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