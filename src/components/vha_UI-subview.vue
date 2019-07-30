<style lang="stylus">
.type-grid
  >.vha_UI-subview
    flex 1
// UI组件 - 子视图
// .vha_UI-subview
// ------------------------------
// UI组件 - 子视图-撑满视图
.vha_UI-subview.full-height
  min-height 0 //需要flex为1时用0清除高度可达预期暂不明原因
  flex 1
.vha_UI-subview.full-width
  min-width 0
  flex 1
// ------------------------------
// UI组件 - fle弹性百分比
.vha_UI-subview.flex-10
  flex 0 0 10%
  // max-width 10%
.vha_UI-subview.flex-20
  flex 0 0 20%
  // max-width 20%
.vha_UI-subview.flex-25
  flex 0 0 25%
  // max-width 25%
.vha_UI-subview.flex-30
  flex 0 0 30%
  // max-width 30%
.vha_UI-subview.flex-33
  flex 0 0 33.3333%
  // max-width 33.3333%
.vha_UI-subview.flex-40
  flex 0 0 40%
  // max-width 40%
.vha_UI-subview.flex-50
  flex 0 0 50%
  // max-width 50%
.vha_UI-subview.flex-60
  flex 0 0 60%
  // max-width 60%
.vha_UI-subview.flex-66
  flex 0 0 66.6666%
  // max-width 66.6666%
.vha_UI-subview.flex-70
  flex 0 0 70%
  // max-width 70%
.vha_UI-subview.flex-75
  flex 0 0 75%
  // max-width 75%
.vha_UI-subview.flex-80
  flex 0 0 80%
  // max-width 80%
.vha_UI-subview.flex-90
  flex 0 0 90%
  // max-width 90%
// ------------------------------
// UI组件 - 滚动条-开启&关闭
.vha_UI-subview.scroll-Yon
  overflow-x hidden
  overflow-y auto
.vha_UI-subview.scroll-Xon
  overflow-x auto
  overflow-y hidden
</style>
<template>
  <div 
    class="vha_UI-subview" 
    :class="[
      this.full ? 'full-' + this.full : '',
      this.flex ? 'flex-' + this.flex : '',
      this.scroll && this.full ? ('scroll-' + (this.full === 'height' ? 'Yon' : 'Xon')) : '',
    ]"
    v-on="listeners"
  >
  <!-- 添加felx参数 -->
    <slot></slot>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'vhaUIsubview',
  props: {
    full: {
      type: String,
      default: '',
      validator(value) {
        return [
          '',
          'height',
          'width'
        ].indexOf(value) > -1;
      }
    },
    flex: {
      type: String,
      default: '',
      validator(value) {
        return [
          '',
          '10',
          '20',
          '25',
          '30',
          '33',
          '40',
          '50',
          '60',
          '66',
          '70',
          '75',
          '80',
          '90',
        ].indexOf(value) > -1;
      }
    },
    scroll: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    listeners: function () {
      var vm = this
      return Object.assign({},
        this.$listeners,
      )
    }
  }
}
</script>