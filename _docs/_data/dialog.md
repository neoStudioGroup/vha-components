---
{
  "title": "对话框",
  "name": "dialog",
  "time": "2018-12-15 15:10:25"
}
---

<section id="dialog">

# **[vha-dialog 对话框](#dialog)**

该组件完全基于[vha-popup](https://neostudiogroup.com/vha-components/popup)制作

如果只是弹出一段信息用法非常简单

```javascript
this.$vhaDialog.alert('弹出一段消息')
```

</section>
<!-- ------------------------------------------- -->
<section id="Methods">

# **[方法](#Methods)**

<p class="ui-r-note _bdc-info">this.$vhaDialog.alert(text, option)</p>

option = {title, buttons, cancelText, callback}

参数|类型|默认值|说明
-|-|-|-
text|String|-|显示的文本内容
option|Object|title:'消息',buttons:\['取消'\]|对应标题,按钮组,取消文本,回调(id)

<p class="ui-r-note _bdc-info">this.$vhaDialog.confirm(title, text, option)</p>

option = {buttons, cancelText, okText, callback}

参数|类型|默认值|说明
-|-|-|-
title|String|'消息'|显示的标题
text|String|-|显示的文本内容
option|Object|buttons:\['取消','确定'\]|对应按钮组,取消文本,确定文本,回调(id)

<p class="ui-r-note _bdc-info">this.$vhaDialog.prompt(title, text, option)</p>

option = {buttons, callback}

参数|类型|默认值|说明
-|-|-|-
title|String|'消息'|显示的标题
text|String|-|显示的文本内容
option|Object|buttons:\['取消','确定'\]|对应按钮组,回调(id)

</section>