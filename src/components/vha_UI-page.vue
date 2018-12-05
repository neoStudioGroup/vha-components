<style lang="stylus">
// UI组件 - 页面
.vha_UI-page
  width 100%
  height 100%
  background-color transparent
</style>
<template>
  <div class="vha_UI-page">
    <slot></slot>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'vhaUIpage'
}
</script>