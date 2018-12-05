<style lang="stylus">
@import "../assets/stylus/method.styl"
@import "../assets/stylus/mixin.styl"
// UI组件 - 表项
.vha_UI-listItem
  // border-bottom-line(1px solid #ddd)
  padding 0 rpx(10) 0 rpx(40)
  height rpx(100)
  font-size rpx(28)
  .ui-l-i
    margin-left auto
    display inline-flex
    width rpx(80)
    font-size rpx(50)
  // &:last-child
  //   &:after
  //     display none
// ------------------------------
// UI组件 - 表项-类型-无
// .vha_UI-listItem.type-none
//   cursor pointer
//   margin 0
//   padding 0
//   border none
//   color inherit
//   background-color transparent
//   display inline-block
//   transition all .08s
</style>
<template>
  <li class="vha_UI-listItem _df _aic">
    <slot></slot>
    <i class="ui-l-i" v-if="icon" :class="icon"></i>
  </li>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'vhaUIlistItem',
  props: {
    icon: String
  }
}
</script>