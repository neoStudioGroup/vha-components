---
{
  "title": "信息提示",
  "name": "toast",
  "time": "2018-12-15 15:10:25"
}
---

<section id="toast">

# **[vha-toast 信息提示](#toast)**

该组件完全基于[vha-popup](https://neostudiogroup.com/vha-components/popup)制作

</section>
<!-- ------------------------------------------- -->
<section id="Methods">

# **[方法](#Methods)**

<p class="ui-r-note _bdc-info">this.$vhaToast(option)</p>

option = {pos, icon, duration, callback}

参数|类型|默认值|说明
-|-|-|-
option|Object|pos:'center',duration:1500|对应位置('top','center','bottom'),图标,持续时间,关闭回调


<p class="ui-r-note _bdc-info">show(text)</p>

参数|类型|默认值|说明
-|-|-|-
text|String|-|显示的文本内容

**示例：**

```javascript
this.$vhaToast().show('中间文字提示')
```

</section>