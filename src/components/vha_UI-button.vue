<style lang="stylus">
@import "../assets/stylus/method.styl"
@import "../assets/stylus/mixin.styl"
// UI组件 - 按钮
.vha_UI-button
  >.left-mr
    margin-right rpx(6)
  >.right-mr
    margin-left rpx(6)
// ------------------------------
vhaButton_type()
  cursor pointer
  margin 0
  padding 0
  border none
  font-size rpx(24)
  color inherit
  background-color transparent
  transition all .08s
// UI组件 - 按钮-类型-无
.vha_UI-button.type-none
  vhaButton_type()
// UI组件 - 按钮-类型-基本
.vha_UI-button.type-base
  vhaButton_type()
  color black_
  background-color transparent
  &:active
    color white_
// UI组件 - 按钮-类型-正常
.vha_UI-button.type-normal
  vhaButton_type()
  border-radius rpx(8)
// UI组件 - 按钮-类型-线框
.vha_UI-button.type-outline
  @extend .vha_UI-button.type-normal
  border 2px solid red
  &:active
    background-color Success_Focus
// ------------------------------
// UI组件 - 按钮-尺寸-小
.vha_UI-button.size-small
  padding rpx(4) rpx(6)
  height auto
  font-size rpx(16)
// UI组件 - 按钮-尺寸-正常
.vha_UI-button.size-normal
  padding 0 rpx(30)
  height rpx(90)
  font-size rpx(24)
// UI组件 - 按钮-尺寸-大
.vha_UI-button.size-large
  padding 0 rpx(60)
  height rpx(120)
  font-size: rpx(32)
// UI组件 - 按钮-尺寸-全宽
.vha_UI-button.size-fullWidth
  @extend .vha_UI-button.size-normal
  width 100%
// UI组件 - 按钮-尺寸-撑满(父)
.vha_UI-button.size-full
  // @extend .vha_UI-button.size-normal
  padding 0
  width 100%
  height 100%
  border-radius 0
// ------------------------------
// UI组件 - 按钮-状态-禁止
.vha_UI-button.state-disabled
  cursor not-allowed !important
  opacity .6 !important
// ------------------------------
// UI组件 - 按钮-display-块
.vha_UI-button.display-block
  display block
// ------------------------------
vhaButton_baseColor($color, $activeColor)
  color $color
  &:active
    color $activeColor
vhaButton_normalColor($color, $backgroundColor, $backgroundActiveColor)
  color $color
  background-color $backgroundColor
  &:active
    background-color $backgroundActiveColor
vhaButton_outlineColor($color, $activeColor, $backgroundActiveColor)
  color $color
  border 1px solid $color
  background-color transparent
  &:active
    color $activeColor
    background-color $backgroundActiveColor

// UI组件 - 按钮-颜色-信息
.vha_UI-button.type-base.color-success
  vhaButton_baseColor(Success_, Success_Dodge)
.vha_UI-button.type-normal.color-success
  vhaButton_normalColor(white_, Success_, Success_Focus)
.vha_UI-button.type-outline.color-success
  vhaButton_outlineColor(Success_, white_, Success_Focus)

.vha_UI-button.type-base.color-info
  vhaButton_baseColor(Info_, Info_Dodge)
.vha_UI-button.type-normal.color-info
  vhaButton_normalColor(white_, Info_, Info_Focus)
.vha_UI-button.type-outline.color-info
  vhaButton_outlineColor(Info_, white_, Info_Focus)

.vha_UI-button.type-base.color-warning
  vhaButton_baseColor(Warning_, Warning_Dodge)
.vha_UI-button.type-normal.color-warning
  vhaButton_normalColor(white_, Warning_, Warning_Focus)
.vha_UI-button.type-outline.color-warning
  vhaButton_outlineColor(Warning_, white_, Warning_Focus)

.vha_UI-button.type-base.color-error
  vhaButton_baseColor(Error_, Error_Dodge)
.vha_UI-button.type-normal.color-error
  vhaButton_normalColor(white_, Error_, Error_Focus)
.vha_UI-button.type-outline.color-error
  vhaButton_outlineColor(Error_, white_, Error_Focus)

// UI组件 - 按钮-颜色-基本
.vha_UI-button.type-base.color-dark
  vhaButton_baseColor(Dark_, Dark_Dodge)
.vha_UI-button.type-normal.color-dark
  vhaButton_normalColor(white_, Dark_, Dark_Focus)
.vha_UI-button.type-outline.color-dark
  vhaButton_outlineColor(Dark_, white_, Dark_Focus)

.vha_UI-button.type-base.color-calm
  vhaButton_baseColor(Calm_, Calm_Dodge)
.vha_UI-button.type-normal.color-calm
  vhaButton_normalColor(white_, Calm_, Calm_Focus)
.vha_UI-button.type-outline.color-calm
  vhaButton_outlineColor(Calm_, white_, Calm_Focus)

.vha_UI-button.type-base.color-stable
  vhaButton_baseColor(#efefef, Stable_)
.vha_UI-button.type-normal.color-stable
  vhaButton_normalColor(black_, Stable_, Stable_Focus)
.vha_UI-button.type-outline.color-stable
  vhaButton_outlineColor(Stable_, black_, Stable_Focus)

.vha_UI-button.type-base.color-light
  vhaButton_baseColor(Light_, Stable_)
.vha_UI-button.type-normal.color-light
  vhaButton_normalColor(black_, Light_, Light_Focus)
.vha_UI-button.type-outline.color-light
  vhaButton_outlineColor(Light_, black_, Light_Focus)
// ------------------------------
// UI组件 - 按钮-效果-扩散
vhaButton_effectColor($backgroundColor)
  position relative
  &:after
    content ""
    display block
    position absolute
    top rpx(-12)
    left rpx(-12)
    right rpx(-12)
    bottom rpx(-12)
    pointer-events none
    border-radius inherit
    background-color $backgroundColor
    opacity 0
    transition all .2s
  &:active
    &:after
      opacity .6
      top 0
      left 0
      right 0
      bottom 0
      transition 0s
.vha_UI-button.effect-spread.color-success
  vhaButton_effectColor(Success_Focus)
.vha_UI-button.effect-spread.color-info
  vhaButton_effectColor(Info_Focus)
.vha_UI-button.effect-spread.color-warning
  vhaButton_effectColor(Warning_Focus)
.vha_UI-button.effect-spread.color-error
  vhaButton_effectColor(Error_Focus)
.vha_UI-button.effect-spread.color-dark
  vhaButton_effectColor(Dark_)
.vha_UI-button.effect-spread.color-calm
  vhaButton_effectColor(Calm_)
.vha_UI-button.effect-spread.color-stable
  vhaButton_effectColor(#dbdbdb)
.vha_UI-button.effect-spread.color-light
  vhaButton_effectColor(Light_Focus)
</style>
<template>
  <button 
    class="vha_UI-button" 
    :class="[
      'type-' + this.type,
      this.size != 'none' ? 'size-' + this.size : '',
      this.temp_color ? 'color-' + this.temp_color : '',
      this.temp_effect ? 'effect-' + this.temp_effect : '',
      this.block ? 'display-block' : '',
      this.disabled ? 'state-disabled' : '',
      this.group_selectClass
    ]" 
    v-on="inputListeners"
    :type="nativeType"
    :disabled="disabled"
  >
    <i :class="['ui-b-ileft', icon, this.left_mr ? 'left-mr' : '']" v-if="icon"></i>
    <slot></slot>
    <i :class="['ui-b-iright', iconRight, this.right_mr ? 'right-mr' : '']" v-if="iconRight"></i>
  </button>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'vhaUIbutton',
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
    },
    size: {
      type: String,
      default: 'normal',
      validator(value) {
        return [
          'none',
          'small',
          'normal',
          'large',
          'fullWidth',
          'full'
        ].indexOf(value) > -1;
      }
    },
    effect: {
      type: String,
      default: '',
      validator(value) {
        return [
          '',
          'spread'
        ].indexOf(value) > -1;
      }
    },
    color: {
      type: String,
      default: '',
      validator(value) {
        return [
          '',
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
    block: Boolean,
    nativeType: String,
    disabled: Boolean,
    icon: String,
    iconRight: String,
    
    groupNote: String,
  },
  data() {
    return {
      group_id: undefined,
      group_selectClass: '',
      temp_effect: '',
      temp_color: '',
      
      left_mr: true,
      right_mr: true
    }
  },
  computed: {
    inputListeners: function () {
      var vm = this
      return Object.assign({},
        this.$listeners,
        {
          click: function (event) {
            vm.$emit('click', event)
            
            // 如果这个button被赋予了ID则被证明被包含在了buttongroup组内, 就获取父实例将当前按钮点击信息写入
            if (typeof vm.group_id != 'undefined') {
              vm.$parent.$data.changeStateEvent = {
                event: event,
                id: vm.group_id,
                note: vm.groupNote
              }
            }
          }
        }
      )
    }
  },
  watch: {
    'group_id': function () {
      this.$parent.$data.buttonState[this.group_id].note = this.groupNote
    },
    'color': function () {
      this.temp_color = this.color
    },
    'effect': function () {
      this.temp_effect = this.effect
    }
  },
  created() {
    switch (this.type) {
      case 'none': {
        this.temp_color = this.color || ''
        break
      }
      case 'base': {
        this.temp_color = this.color || ''
        break
      }
      case 'normal': {
        this.temp_effect = this.effect || ''
        this.temp_color = this.color || 'stable'
        break
      }
      case 'outline': {
        this.temp_effect = this.effect || ''
        this.temp_color = this.color || 'calm'
        break
      }
    }
  },
  mounted() {
    if (this.$slots.default) {
      if (!this.$slots.default[0].text) {
        this.left_mr = false
        this.right_mr = false
      }
    } else {
      this.left_mr = false
      this.right_mr = false
    }
  }
}
</script>