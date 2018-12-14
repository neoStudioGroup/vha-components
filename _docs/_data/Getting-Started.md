---
{
  "title": "快速开始",
  "name": "Getting-Started",
  "time": "2018-12-14 15:55:47"
}
---

<section id="Getting-Started">

# [快速开始](#Getting-Started)

<br />

<p><a class="ui-r-npm" href="https://www.npmjs.com/package/vha-components" target="_blank">vha-components</a></p>

<br />
<br />

1.添加npm包到项目。

> npm install vha-components --save

2.在main.js内引入组件库

```javascript
// import
import Vue from 'vue'
import vhaComponents from 'vha-components'
Vue.use(vhaComponents)
```

<br />

3.全局使用 rpx() （根目录建立vue.config.js文件内配置）

```javascript
module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        import: ['~vha-components/src/assets/stylus/method.styl']
      }
    }
  }
}
```

</section>