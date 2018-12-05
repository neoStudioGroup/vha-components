<style lang="stylus">
@import "../assets/stylus/method.styl"
@import "../assets/stylus/mixin.styl"
// UI组件 - 开关
.vha_UI-switch
  position relative
  width rpx(110)
  height rpx(64)
  display inline-block
  >.ui-r-input
    display none
  >.ui-r-class
    position absolute
    width 100%
    height 100%
    background-color #fff
    transition all .3s
    border-line(4px solid #e6e6e6)
    border-radius-line(rpx(200))
    &:after
      transition all .3s
    &:before
      content ' '
      position absolute
      width rpx(54)
      height rpx(54)
      border-radius 50%
      background-color #fff
      box-shadow 0 2px 7px rgba(0,0,0,.35), 0 1px 1px rgba(0,0,0,.15)
      transition transform .3s cubic-bezier(.2,.7,.4,1.2)
      transform translate3d(3px,0,0)
      z-index 2
  >.action-select
    &:before
      transform translate3d(rpx(50),0,0)
// ------------------------------
vhaSwitch_color($color)
  >.action-select
    background-color $color
    &:after
      border-color $color
// UI组件 - 开关-颜色
.vha_UI-switch.color-success
  vhaSwitch_color(Success_)
.vha_UI-switch.color-info
  vhaSwitch_color(Info_)
.vha_UI-switch.color-warning
  vhaSwitch_color(Warning_)
.vha_UI-switch.color-error
  vhaSwitch_color(Error_)
.vha_UI-switch.color-dark
  vhaSwitch_color(Dark_)
.vha_UI-switch.color-calm
  vhaSwitch_color(Calm_)
.vha_UI-switch.color-stable
  vhaSwitch_color(Stable_)
.vha_UI-switch.color-light
  vhaSwitch_color(Light_)
</style>
<template>
  <label 
    class="vha_UI-switch" 
    :class="['color-' + this.color]"
  >
    <input 
      class="ui-r-input" 
      type="checkbox" 
      
      v-bind="$attrs"
      v-on="inputListeners"
      
      :value="value" 
      :checked="state_checked" 
    >
    <div 
      class="ui-r-class _dif _aic"
      :class="[
        this.state_checked ? 'action-select' : 'action-unSelect',
      ]"
    >
    </div>
  </label>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'vhaUIswitch',
  inheritAttrs: false,
  model: {
    prop: 'modelVal',
    event: 'change'
  },
  props: {
    color: {
      type: String,
      default: 'info',
      validator(value) {
        return [
          'success',
          'info',
          'warning',
          'error',
          'dark',
          'calm',
          'stable',
          'light'
        ].indexOf(value) > -1;
      }
    },
    
    checked: Boolean,
    value: {
      type: String,
    },
    modelVal: {
      default: false
    }
  },
  data() {
    return {
      state_checked: false,
    }
  },
  computed: {
    inputListeners: function () {
      var vm = this
      return Object.assign({},
        this.$listeners,
        {
          change: function (event) {
            // 改变选中事件被触发
            vm.state_checked = event.target.checked
          }
        }
      )
    }
  },
  watch: {
    // 当选中状态改变时更新数据
    'state_checked': function () {
      // 这里也要判断是一个还是多个 checkbox
      if (this.modelVal instanceof Array) {
        const newVal = [...this.modelVal]
        if (this.state_checked) {
          if (!newVal.includes(this.value)) {
            newVal.push(this.value)
          }
        } else {
          newVal.splice(newVal.indexOf(this.value), 1)
        }
        this.$emit('change', newVal)
      } else {
        this.$emit('change', this.state_checked)
      }
    }
  },
  mounted() {
    // 如果默认选中为真, 就置状态, 否则根据是否为一个还是多个 checkbox设置状态
    setTimeout(() => {
      if (this.checked) {
        this.state_checked = this.checked
      } else {
        if (this.modelVal instanceof Array) {
          this.state_checked = this.modelVal.includes(this.value)
        } else {
          this.state_checked = this.modelVal
        }
      }
    }, 10)
  }
}
</script>