<style lang="stylus">
@import "../assets/stylus/method.styl"
@import "../assets/stylus/mixin.styl"
// UI组件 - 滑块
.vha_UI-slider
  width 100%
  outline none
  display inline-block
  background linear-gradient(to right, #ccc 0%, #ccc 100%)
  background-position center
  background-size 99% rpx(4)
  background-repeat no-repeat
  -webkit-appearance none
  &::-webkit-slider-thumb 
    cursor pointer
    position relative
    width rpx(56)
    height rpx(56)
    border 0
    border-radius 50%
    background-color #fff
    box-shadow 0 0 rpx(4) rgba(0, 0, 0, 0.3), 0 rpx(6) rpx(10) rgba(0, 0, 0, 0.2)
    -webkit-appearance none
</style>
<template>
  <input 
    class="vha_UI-slider" 
    type="range"
    v-bind:value="value"
    v-on:input="$emit('input', $event.target.value)"
  >
</template>
<script type="text/ecmascript-6">
export default {
  name: 'vhaUIslider',
  props: {
    value: null
  }
}
</script>