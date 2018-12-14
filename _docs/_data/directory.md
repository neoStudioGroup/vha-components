---
{
  "title": "目录结构",
  "name": "directory",
  "time": "2018-12-14 15:55:47"
}
---

<section id="vha-directory">

# [vha](#vha)

<br />

```
vha
├_docs //官网源文件夹
├docs //文档网站
├_ui //ui工具界面源文件
├ui //ui工具界面
└bin //
 ├apis.js //全局方法
 ├config.js //配置文件方法
 ├config.json //配置文件
 ├config_debug.json //debug配置文件
 ├global.js //全局挂载
 ├index.js //入口文件
 └index_ui.js //ui命令
├README //README相关文件
├.gitignore //git忽略文件
├.npmignore //npm忽略文件
├LICENSE //开源协议
├package.json //包信息
└README.md //说明文档
```

</section>

<section id="vha-components-directory">

# [vha-components](#vha-components)

<br />

```
src
├assets
├─fonts //图标文件夹
├─images //图片文件夹
└─stylus //css文件夹
  ├global.styl //全局样式
  ├iconfont.styl //图标样式
  ├method.styl //公共方法
  ├mixin.styl //变量/方法
  └reset.styl //重置默认css
├components //组件文件夹
 └utils.js //公共工具类方法
├vhaEvent.js //vha事件
├vhaInstall.js //vha组件挂载安装
├vhaMixin.js //vha_rpx 等方法
└vhaRouter.js //vhaRt等指令
```

</section>