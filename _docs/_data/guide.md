---
{
  "title": "开发指南",
  "name": "guide",
  "time": "2018-12-14 15:55:47"
}
---

<section id="intro">

# **[vha-components 介绍](#intro)**

基于vue开发的移动端组件库，为快速构建移动端“定制化”ui界面而生。

特点是即可快速构建也可自由修改。

如果你对界面有“定制化”的需求我推荐你使用它，如果有“快速构建”的需求我也推荐你使用它。

vha提供了cordova插件的封装[vha-native](https://github.com/neoStudioGroup/vha-native)和构建平台[vha](https://github.com/neoStudioGroup/vha)

当然你也可以使用它和weex，hbuild，mpvue等框架配合使用。

</section>
<!-- ------------------------------------------- -->
<section id="GettingStarted">

# **[快速开始](#GettingStarted)**

<p><a class="ui-r-npm" href="https://www.npmjs.com/package/vha-components" target="_blank">vha-components</a></p>

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
<!-- ------------------------------------------- -->
<section id="directory">

# **[目录结构](#directory)**

### vha

```
vha
├ _docs //官网源文件夹
├ docs //文档网站
├ _ui //ui工具界面源文件
├ ui //ui工具界面
└ bin //
 ├ apis.js //全局方法
 ├ config.js //配置文件方法
 ├ config.json //配置文件
 ├ config_debug.json //debug配置文件
 ├ global.js //全局挂载
 ├ index.js //入口文件
 └ index_ui.js //ui命令
├ README //README相关文件
├ .gitignore //git忽略文件
├ .npmignore //npm忽略文件
├ LICENSE //开源协议
├ package.json //包信息
└ README.md //说明文档
```

### vha-components

```
src
├ assets
├ ─fonts //图标文件夹
├ ─images //图片文件夹
└─ stylus //css文件夹
  ├ global.styl //全局样式
  ├ iconfont.styl //图标样式
  ├ method.styl //公共方法
  ├ mixin.styl //变量/方法
  └ reset.styl //重置默认css
├ components //组件文件夹
 └ utils.js //公共工具类方法
├ vhaEvent.js //vha事件
├ vhaInstall.js //vha组件挂载安装
├ vhaMixin.js //vha_rpx 等方法
└ vhaRouter.js //vhaRt等指令
```

</section>
<!-- ------------------------------------------- -->
<section id="design">

# **[设计指南](#design)**

vha全部采用了以750px为基准的rpx单位

设计图应采用iphone6尺寸（1334 x 750）。

应用rpx()按照设计图尺寸填写即可。

</section>
<!-- ------------------------------------------- -->
<section id="onepx">

# **[1px线](#onepx)**

vha的1px实现与其它库略有不同，因此支持圆角边框。

支持的css方法有：

```
border-radius-line($radius)
border-line($parm)
border-top-line($parm)
border-right-line($parm)
border-bottom-line($parm)
border-left-line($parm)
```

**例：**

```
border-line(1px solid red)
border-radius-line(rpx(10))
```

</section>
<!-- ------------------------------------------- -->
<section id="directive">

# **[指令&方法](#directive)**

vha指令支持将v-vhaRt绑定在任意元素上进行路由转跳用法与$Router相同只不过多了路由动画和动态缓存控制。

<p class="ui-r-note _bdc-info">v-vhaRt</p>

参数|类型|说明
-|-|-
push|location|转到路由的路径&参数
go|Number|前进后退的步数
animate|String|动画的字符串内置的参数"in","out","none"
keepAlive|Boolean|设置即将转跳的页面是否开启缓存(路由内也可完成相同设置)

相同作用的js代码为this.$vhaRt

<p class="ui-r-note _bdc-info">this.$vhaRt</p>

方法|参数
-|-
push|Object
go|Object

参数|类型|说明
-|-|-
value|any|指令附带的值
animate|String|动画的字符串内置的参数"in","out","none"
keepAlive|Boolean|设置即将转跳的页面是否开启缓存(路由内也可完成相同设置)


**例：**

```
<div v-vhaRt="{push:'/xxx', animate:'in', keepAlive:true}"></div>
<div @click="$vhaRt.push({value:'/xxx', animate: 'in', keepAlive:true})"></div>
```

</section>
<!-- ------------------------------------------- -->
<section id="componentized">

# **[neo组件化命名规范](#componentized)**

强烈推荐组合[neo组件化命名规范](https://github.com/mixingyu/Componentized-name-rules)开发

可以让开发过程非常简单清晰。

</section>
<!-- ------------------------------------------- -->