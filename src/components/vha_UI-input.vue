<style lang="stylus">
@import "../assets/stylus/method.styl"
@import "../assets/stylus/mixin.styl"
// UI组件 - 输入框
.vha_UI-input
  border none
  resize none
  cursor text
  overflow hidden
  vertical-align top
  transition all .2s
  .ui-i-ileft
    font-size rpx(34)
    padding rpx(20)
    padding-right 0
  .ui-i-iright
    padding rpx(20)
    padding-left 0
  textarea
    border none
    resize none
// ------------------------------
// UI组件 - 输入框-类型-无
.vha_UI-input.type-none
  background-color transparent
  input,textarea
    background-color transparent
// UI组件 - 输入框-类型-正常
.vha_UI-input.type-normal
  font-size rpx(26)
  input,textarea
    padding rpx(10)
    width 100%
    height 100%
// ------------------------------
// UI组件 - 输入框-尺寸-撑满(父)
.vha_UI-input.size-full
  width 100%
  height 100%
// ------------------------------
// UI组件 - 输入框-状态-无边框
.vha_UI-input.type-normal.state-border
  border 1px solid #d9d9d9
  border-radius rpx(8)
// ------------------------------
// UI组件 - 输入框-状态-禁止
.vha_UI-input.state-disabled
  cursor not-allowed !important
  opacity .6 !important
</style>
<template>

  <!-- 如果类型是none无, 就只渲染组件, 无图标 -->
  <component 
    v-if="this.vhaType === 'none'"
    
    :is="tag"
    class="vha_UI-input" 
    :class="[
      'type-' + this.vhaType,
      this.size ? 'size-' + this.size : '',
      this.disabled ? 'state-disabled' : '',
    ]"
    
    v-bind="$attrs"
    :value="value"
    v-on="inputListeners"
    
    :disabled="disabled"
  >
  </component>
  
  <!-- 如果类型是normal正常, 就渲染完整的label和图标组件 -->
  <label 
    v-else
    
    class="vha_UI-input _dif _aic" 
    :class="[
      'type-' + this.vhaType,
      this.size ? 'size-' + this.size : '',
      this.noBorder ? '' : 'state-border',
      this.disabled ? 'state-disabled' : '',
    ]"
  >
    <i class="ui-i-ileft" :class="icon" v-if="icon"></i>
    <component 
      :is="tag"
      
      v-bind="$attrs"
      :value="value"
      v-on="inputListeners"
      
      :disabled="disabled"
    >
    </component>
    <i class="ui-i-iright" :class="iconRight" v-if="iconRight"></i>
  </label>

</template>
<script type="text/ecmascript-6">
export default {
  name: 'vhaUIinput',
  inheritAttrs: false,
  props: {
    vhaType: {
      type: String,
      default: 'normal',
      validator(value) {
        return [
          'none',
          'normal'
        ].indexOf(value) > -1;
      }
    },
    tag: {
      type: String,
      default: 'input',
      validator(value) {
        return [
          'input',
          'textarea'
        ].indexOf(value) > -1;
      }
    },
    value: String,
    size: {
      type: String,
      default: '',
      validator(value) {
        return [
          '',
          'full'
        ].indexOf(value) > -1;
      }
    },
    autofocus: Boolean,
    disabled: Boolean,
    icon: String,
    iconRight: String,
    noBorder: Boolean,
  },
  computed: {
    inputListeners: function () {
      var vm = this
      return Object.assign({},
        this.$listeners,
        {
          input: function (event) {
            vm.$emit('input', event.target.value)
          }
        }
      )
    }
  },
  methods: {
    setFocus: function () {
      if (this.autofocus) {
        if (this.vhaType === 'none') {
          this.$el.focus()
        } else {
          this.$el.querySelector('input').focus()
        }
      }
    }
  },
  mounted() {
    // vhaRouterviewAnimateEnd事件 路由动画结束事件
    window.addEventListener('vha:RouterviewAnimateEnd', this.setFocus)
  },
  beforeDestroy() {
    // 注销路由动画结束事件
    window.removeEventListener('vha:RouterviewAnimateEnd', this.setFocus)
  }
}
</script>