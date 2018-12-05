<style lang="stylus">
@import "../assets/stylus/method.styl"
@import "../assets/stylus/mixin.styl"
// UI组件 - 列表
.vha_UI-list
  .ui-l-title
    position relative
    margin-bottom rpx(20)
    padding rpx(8) rpx(18)
    font-size rpx(28)
    font-weight bold
    // border-left 3px solid #65a1e6
    // border-top 3px solid transparent
    // border-bottom 3px solid transparent
    color #65a1e6
    &:before
      position absolute
      left 0
      top 0
      content ' '
      width 3px
      height 100%
      border-radius 0 6px 6px 0
      background-color #65a1e6
// ------------------------------
// UI组件 - 列表-类型-无
// .vha_UI-list.type-none
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
  <div class="vha_UI-list">
    <p class="ui-l-title" style="">{{title}}</p>
    <ul class="ui-l-ul">
      <slot></slot>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'vhaUIlist',
  props: {
    title: String
  }
}
</script>