<style lang="stylus">
// UI组件 - 视图区域
.vha_UI-view
  background-color transparent
// ------------------------------
// UI组件 - 视图区域-网格模式
// ------------------------------
// UI组件 - 视图区域-显示边线
.vha_UI-view.grid-line.axis-horizontal, .vha_UI-view.grid-line.axis-x
  >.vha_UI-subview
    border-right-line(1px solid rgba(0,0,0,0.3))
    &:last-child
      &:after
        display none

.vha_UI-view.grid-line.axis-vertical, .vha_UI-view.grid-line.axis-y
  >.vha_UI-subview
    border-bottom-line(1px solid rgba(0,0,0,0.3))
    &:last-child
      &:after
        display none
// ------------------------------
// UI组件 - 视图区域-显示方式
.vha_UI-view.display-block
  display flex
.vha_UI-view.display-inline
  display inline-flex
// ------------------------------
// UI组件 - 视图区域-轴向
.vha_UI-view.axis-horizontal
  flex-direction row
.vha_UI-view.axis-vertical
  flex-direction column
.vha_UI-view.axis-x
  flex-direction row
.vha_UI-view.axis-y
  flex-direction column
// ------------------------------
// UI组件 - 视图区域-轴对齐方式
.vha_UI-view.align-start
  align-items flex-start
.vha_UI-view.align-center
  align-items center
.vha_UI-view.align-end
  align-items flex-end
.vha_UI-view.align-stretch
  align-items stretch
// ------------------------------
// UI组件 - 视图区域-轴分布方式
.vha_UI-view.justify-start
  justify-content flex-start
.vha_UI-view.justify-center
  justify-content center
.vha_UI-view.justify-end
  justify-content flex-end
.vha_UI-view.justify-around
  justify-content space-around
.vha_UI-view.justify-between
  justify-content space-between
// ------------------------------
// UI组件 - 视图区域-开启自动换行
.vha_UI-view.wrap-true
  flex-wrap wrap
// ------------------------------
// UI组件 - 视图区域-自动换行对齐方式
.vha_UI-view.wrap-justify-stretch
  align-content stretch
.vha_UI-view.wrap-justify-start
  align-content flex-start
.vha_UI-view.wrap-justify-center
  align-content center
.vha_UI-view.wrap-justify-end
  align-content flex-end
.vha_UI-view.wrap-justify-around
  align-content space-around
.vha_UI-view.wrap-justify-between
  align-content space-between
// ------------------------------
// UI组件 - 视图区域-尺寸
.vha_UI-view.size-full
  width 100%
  height 100%
</style>
<template>
  <component
    :is="tag"
    class="vha_UI-view" 
    :class="[
      this.type === 'grid' ? 'type-grid' : '',
      this.type === 'grid' && this.gridLine ? 'grid-line' : '',
      
      'display-' + this.display,
      'axis-' + this.axis,
      this.align ? 'align-' + this.align : '',
      this.justify ? 'justify-' + this.justify : '',
      this.wrap ? 'wrap-true' : '',
      this.wrapJustify ? 'wrap-justify-' + this.wrapJustify : '',
      
      this.temp_size ? 'size-' + this.temp_size : ''
    ]"
    v-on="listeners"
  >
    <slot></slot>
  </component>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'vhaUIview',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    type: {
      type: String,
      default: 'flex',
      validator(value) {
        return [
          'flex',
          'grid'
        ].indexOf(value) > -1;
      }
    },
    gridLine: {
      type: Boolean,
      default: false
    },
    
    display: {
      type: String,
      default: 'block',
      validator(value) {
        return [
          'block',
          'inline'
        ].indexOf(value) > -1;
      }
    },
    axis: {
      type: String,
      default: 'x',
      validator(value) {
        return [
          'horizontal',
          'x',
          'vertical',
          'y'
        ].indexOf(value) > -1;
      }
    },
    align: {
      type: String,
      default: '',
      validator(value) {
        return [
          '',
          'start',
          'center',
          'end',
          'stretch'
        ].indexOf(value) > -1;
      }
    },
    justify: {
      type: String,
      default: '',
      validator(value) {
        return [
          '',
          'start',
          'center',
          'end',
          'around',
          'between'
        ].indexOf(value) > -1;
      }
    },
    wrap: {
      type: Boolean,
      default: false
    },
    wrapJustify: {
      type: String,
      default: '',
      validator(value) {
        return [
          '',
          'stretch',
          'start',
          'center',
          'end',
          'around',
          'between'
        ].indexOf(value) > -1;
      }
    },
    
    size: {
      type: String,
      default: '',
      validator(value) {
        return [
          '',
          'none',
          'full'
        ].indexOf(value) > -1;
      }
    }
  },
  data() {
    return {
      temp_size: ''
    }
  },
  computed: {
    listeners: function () {
      var vm = this
      return Object.assign({},
        this.$listeners,
      )
    }
  },
  created() {
    switch (this.display) {
      case 'block': {
        this.temp_size = this.size || 'full'
        break
      }
      case 'inline': {
        this.temp_size = this.size || ''
        break
      }
    }
  }
}
</script>