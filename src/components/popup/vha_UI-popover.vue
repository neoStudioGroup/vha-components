<style lang="stylus">
@import "../../assets/stylus/method.styl"
@import "../../assets/stylus/mixin.styl"
// UI组件 - 按钮
.vha_UI-popover
  >i
    &:first-child
      margin-right rpx(8)
    &:last-child
      margin-left rpx(8)
// ------------------------------
// UI组件 - 按钮-类型-无
.vha_UI-popover.type-none
  cursor pointer
  margin 0
  padding 0
  border none
  color inherit
  background-color transparent
  display inline-block
  transition all .08s
</style>
<template>
  <div class="vha_UI-popover">
    
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'vhaUIpopover',
  props: {
    type: {
      type: String,
      default: 'normal',
      validator(value) {
        return [
          'none',
          'base',
          'normal',
          'outline'
        ].indexOf(value) > -1;
      }
    }
  },
  data() {
    return {
    }
  },
  methods: {
  },
  watch: {
  },
  mounted() {
  }
}
</script>