<template>
  <div class="vha_UI-swipeItem">
    <slot></slot>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'vhaUIswipeItem',
  mounted() {
    this.$parent && this.$parent.swipeItemCreated(this)
  },
  destroyed() {
    this.$parent && this.$parent.swipeItemDestroyed(this)
  }
}
</script>