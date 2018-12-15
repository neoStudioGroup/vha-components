---
{
  "title": "弹出层",
  "name": "popup",
  "time": "2018-12-15 15:10:25"
}
---

<section id="popup">

# **[vha-popup 弹出层](#popup)**

vha所有的弹出类组件都是基于vha-popup的，你可以用它来做一切顶层展示。

vha-popup会先创建自身（遮罩和内容）然后创建挂载对象到内容区域再把自己挂载到body下

**用法：载入后直接挂载**

```javascript
import popupTest from "./popup/popupTest"
// mounted或方法内
let vhaPopup = this.$vhaPopup(popupTest) // 返回vhaPopup实例对象
vhaPopup.show()
```

<p class="ui-r-note _bdc-error">注意不要在html代码内挂载如&#60;div @click="this.$vhaPopup(popupTest)">&#60;/div>这样不会生效</p>

**用法：在组件内挂载**

```javascript
mounted() {
  this.$vhaPopup({
    mount: this // 将自身this实例挂载到vhaPopup
  }).show()
}
```

</section>
<!-- ------------------------------------------- -->
<section id="API">

# **[API](#API)**

支持的属性

```javascript
  callback: {
    show: undefined, // 显示时的回调
    close: undefined, // 关闭时的回调
    destroy: undefined, // 销毁时的回调
  },
  option: {
    leavePointer: true, // 离开时是否立即允许鼠标点击穿透
    autoDestroy: true // 是否自动销毁（如果自定义内容需要执行动画等待可以取消它动画结束后手动销毁）
  },
  mask: {
    style: {}, //遮罩层的style
    show: undefined, //是否显示遮罩层
    clickClose: true, //是否点击遮罩层后关闭popup
  },
  content: {
    pos: 'center', //默认位置居中显示，可选值"center","top","right","bottom","left"。
    animate: 'center', //默认动画的显示方式，可选值"center","top","right","bottom","left"。
  }
```

支持的方法

<p class="ui-r-note _bdc-info">show</p>

显示弹出层

<p class="ui-r-note _bdc-info">close</p>

关闭弹出层

<p class="ui-r-note _bdc-info">destroy</p>

销毁弹出层

</section>