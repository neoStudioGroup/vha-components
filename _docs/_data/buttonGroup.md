---
{
  "title": "按钮组",
  "name": "buttonGroup",
  "time": "2018-12-15 15:10:25"
}
---

<section id="buttonGroup">

# **[vha-buttonGroup 按钮组](#buttonGroup)**

管理一组按钮状态的按钮组
```html
<vha-buttongroup v-model="selectData">
  <vha-button groupNote="第一个">
    按钮1
  </vha-button>
  <vha-button groupNote="第二个">
    按钮2
  </vha-button>
  <vha-button groupNote="第三个">
    按钮3
  </vha-button>
</vha-buttongroup>
```

</section>
<!-- ------------------------------------------- -->
<section id="API">

# **[API](#API)**

参数|类型|默认值|说明
-|-|-|-
value|Array|-|设置默认的选中状态
groupStyle|String|none|内置组风格，可选值"ios","topline","bottomline"。
selectMode|String|single|选择的模式，可选值"single","multiple"。（单选，多选）
selectClass|String|-|被选择按钮附加的类名，默认根据风格自行判断。

</section>
<!-- ------------------------------------------- -->
<section id="Event">

# **[Event](#Event)**

<p class="ui-r-note _bdc-info">click</p>

<p class="ui-r-return"><span>↪ 返回值：event, info</span> 点击事件返回的按钮参数</p>

</section>