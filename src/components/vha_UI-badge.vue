<style lang="stylus">
@import "../assets/stylus/method.styl"
@import "../assets/stylus/mixin.styl"
// UI组件 - 角标
.vha_UI-badge
  pointer-events none
// ------------------------------
// UI组件 - 角标-类型-点
.vha_UI-badge.type-dot
  padding rpx(10)
  border-radius 50%
// UI组件 - 角标-类型-正常
.vha_UI-badge.type-normal
  padding 0 rpx(10)
  height rpx(36)
  font-size rpx(22)
  border-radius rpx(100)
// ------------------------------
vhaBadge_Color($color, $backgroundColor)
  color $color
  background-color $backgroundColor
// UI组件 - 角标-颜色-信息
.vha_UI-badge.color-success
  vhaBadge_Color(white_, Success_)
.vha_UI-badge.color-info
  vhaBadge_Color(white_, Info_)
.vha_UI-badge.color-warning
  vhaBadge_Color(white_, Warning_)
.vha_UI-badge.color-error
  vhaBadge_Color(white_, Error_)
// UI组件 - 按钮-颜色-基本
.vha_UI-badge.color-dark
  vhaBadge_Color(white_, Dark_)
.vha_UI-badge.color-calm
  vhaBadge_Color(white_, Calm_)
.vha_UI-badge.color-stable
  vhaBadge_Color(black_, Stable_)
.vha_UI-badge.color-light
  vhaBadge_Color(black_, Light_)
</style>
<template>
  <div 
    class="vha_UI-badge _dif _aic"
    :class="[
      'type-' + this.type,
      this.color ? 'color-' + this.color : ''
    ]"
  >
    <span v-if="type === 'normal'">{{value > max ? max : value}}{{tag}}</span>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'vhaUIbadge',
  props: {
    type: {
      type: String,
      default: 'normal',
      validator(value) {
        return [
          'dot',
          'normal'
        ].indexOf(value) > -1;
      }
    },
    value: Number,
    max: Number,
    tag: String,
    color: {
      type: String,
      default: 'error',
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
    }
  }
}
</script>