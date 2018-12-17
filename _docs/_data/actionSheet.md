---
{
  "title": "上拉菜单",
  "name": "actionSheet",
  "time": "2018-12-15 15:10:25"
}
---

<section id="actionSheet">

# **[vha-actionSheet ](#actionSheet)**

> cordova plugin add cordova-plugin-chrome

<router-link to="/aaa">router-link-aaa</router-link>

Welcome to our API.

This API document is designed for those interested in developing for our platform.

This API is still under development anll under development anll under development anll under development anll under development anll under development anll under development anll under development and will evolve.

This API is still under development and will evolve.

<p class="_cl-aaaaaa">You’ll succeed if you do this.</p>

<p class="ui-r-note _bdc-success">You’ll succeed if you do this.</p>
<p class="ui-r-note _bdc-info">Here’s some useful information.</p>
<p class="ui-r-note _bdc-warning">Something may not happen if you try and do this.</p>
<p class="ui-r-note _bdc-error">Something bad will happen if you do this.</p>

### **事件 (Event)**

<p class="ui-r-return"><span>↪ 返回值：Promise(any)</span> 复制后返回一个Promise对象</p>
<p class="ui-r-return"><span>↪ 返回值：Function(any)</span> 回调函数。参数为result</p>
<p class="ui-r-return"><span>↪ 返回值：String(any)</span> 回调函数。参数为result</p>
<p class="ui-r-return"><span>↪ 返回值：Object(any)</span> 对象</p>
<p class="ui-r-return"><span>↪ 返回值：Boolean</span> 布尔型</p>

<dl>
  <dt>title</dt>
  <dd>The title for the book</dd>
  <dt>score</dt>
  <dd>The book's score between 0 and 5</dd>
</dl>

参数|类型|说明
-|-|-
networkState|String|网络连接类型
networkState|String|网络连接类型
networkState|String|网络连接类型

Code|Name|Description
-|-|-
200|OK|Success
201|Created|Creation Successful
400|Bad Request|We could not process that action
403|Forbidden|We couldn’t authenticate you

```javascript
StatusBaroverlaysWebView: function () {
  this.$vha.statusbar.overlaysWebView(this.overlaysWebViewtruefalse)
  if(this.overlaysWebViewtruefalse){
    this.logText += "设置 overlaysWebView = false" + "\n"
    this.overlaysWebViewtruefalse = false
    this.$vha.statusbar.overlaysWebView(this.overlaysWebViewtruefalse)
  }else{
    this.logText += "设置 overlaysWebView = true" + "\n"
    this.overlaysWebViewtruefalse = true
    this.$vha.statusbar.overlaysWebView(this.overlaysWebViewtruefalse)
  }
}
```

</section>
<!-- ------------------------------------------- -->
<section id="API">

# **[API](#API)**

参数|类型|默认值|说明
-|-|-|-
type|String|flex|类型，可选值"flex","grid"。
size|String|auto|类型，可选值"auto","full"。(默认根据网页宽度自动适配)
include|String|-|包含的缓存路由name，与router-view一致。
exclude|String|-|排除的缓存路由name，与router-view一致。
max|Number|0|最大缓存数

</section>
<!-- ------------------------------------------- -->
<section id="Event">

# **[Event](#Event)**

事件|参数|说明
-|-|-
networkState|String|网络连接类型
networkState|String|网络连接类型
networkState|String|网络连接类型

</section>