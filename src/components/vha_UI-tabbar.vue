<style lang="stylus">
@import "../assets/stylus/method.styl"
@import "../assets/stylus/mixin.styl"
// UI组件 - 标签栏
.vha_UI-tabbar
  transition all 200ms
// ------------------------------
vhaTabbar_type()
  height rpx(106)
  font-size rpx(28)
// UI组件 - 标签栏-类型-无
.vha_UI-tabbar.type-none
  .vha_UI-tab
    flex none

// UI组件 - 标签栏-类型-基本
.vha_UI-tabbar.type-base
  vhaTabbar_type()
  position relative
  z-index 1000
  border-top-line(1px solid rgba(0,0,0,0.2))

// UI组件 - 标签栏-类型-正常
.vha_UI-tabbar.type-normal
  vhaTabbar_type()
  position relative
  z-index 1000
  box-shadow rgba(0, 0, 0, 0.15) 0px 0px rpx(20)
// ------------------------------
// UI组件 - 标签栏-颜色
vhaTabbar_color($color, $backgroundColor, $backgroundActiveColor)
  color $color
  background-color $backgroundColor
.vha_UI-tabbar.color-success
  vhaTabbar_color(white_, Success_, Success_Focus)
.vha_UI-tabbar.color-info
  vhaTabbar_color(white_, Info_, Info_Focus)
.vha_UI-tabbar.color-warning
  vhaTabbar_color(white_, Warning_, Warning_Focus)
.vha_UI-tabbar.color-error
  vhaTabbar_color(white_, Error_, Error_Focus)
.vha_UI-tabbar.color-dark
  vhaTabbar_color(white_, Dark_, Dark_Focus)
.vha_UI-tabbar.color-calm
  vhaTabbar_color(white_, Calm_, Calm_Focus)
.vha_UI-tabbar.color-stable
  vhaTabbar_color(black_, Stable_, Stable_Focus)
.vha_UI-tabbar.color-light
  vhaTabbar_color(black_, Light_, Light_Focus)
</style>
<template>
  <div 
    class="vha_UI-tabbar" 
    :class="[
      'type-' + this.type,
      'color-' + this.color
    ]" 
    v-if="this.temp_show"
  >
    <vha-view>
      <slot></slot>
    </vha-view>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'vhaUItabbar',
  props: {
    type: {
      type: String,
      default: 'normal',
      validator(value) {
        return [
          'none',
          'base',
          'normal'
        ].indexOf(value) > -1;
      }
    },
    color: {
      type: String,
      default: 'light',
      validator(value) {
        return [
          'none',
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
    followMeta: {
      type: Boolean,
      default: true,
    }
  },
  data() {
    return {
      temp_show: true
    }
  },
  methods: {
    getRouteProps: function (source) {
      if (!this.followMeta) {
        return
      }
      try {
        if (typeof source.meta.vhaTabbar != 'undefined') {
          if (typeof source.meta.vhaTabbar.show != 'undefined') {
            this.$nextTick(function () {
              this.temp_show = source.meta.vhaTabbar.show
            })
          } else {
            throw 0
          }
        } else {
          throw 0
        }
      } catch (error) {
        this.$nextTick(function () {
          this.temp_show = true
        })
      }
    }
  },
  watch: {
    '$route': function (to, from) {
      this.getRouteProps(to)
    }
  },
  mounted() {
    setTimeout(() => {
      this.getRouteProps(this.$route)
    }, 10)
  }
}
</script>