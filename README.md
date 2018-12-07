<h1 align="center">vha-components</h1>

<p align="center"><img src="https://raw.githubusercontent.com/neoStudioGroup/vha-appDemo/master/README/qr.png"/></p>

<p align="center">
  <a href="https://www.npmjs.com/package/vha-components"><img src="https://badgen.net/npm/v/vha-components" alt="Version"></a>
  <a href="https://codeload.github.com/neoStudioGroup/vha-components/zip/master"><img src="https://badgen.net/npm/dt/vha-components" alt="downloads"></a>
  <a href="https://github.com/neoStudioGroup/vha-components/blob/master/LICENSE"><img src="https://badgen.net/npm/license/vha-components" alt="License"></a>
</p>

<div align="center">

[![NPM](https://nodei.co/npm/vha-components.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/vha-components/)

</div>

## 关于vha-components

基于[Vue.js](https://vuejs.org/)的，强调定制化和实用性的，移动端UI组件库。[在线体验](https://neostudiogroup.com/vha-appDemo/)[vha-components中文文档](https://neostudiogroup.github.io/vha-components)

## 如何使用

添加npm包到项目.

```shell
npm install vha-components --save
```

在main.js内引入组件库

```javascript
// import
import Vue from 'vue'
import vhaComponents from 'vha-components'
Vue.use(vhaComponents)
```

全局使用 rpx() （根目录建立vue.config.js文件内配置）

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

### Demo

[完整的演示app](https://github.com/neoStudioGroup/vha-appDemo)

[apk文件](https://github.com/neoStudioGroup/vha-appDemo/releases/download/0.0.2/vha-appDemo.apk)