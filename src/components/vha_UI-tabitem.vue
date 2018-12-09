<style lang="stylus">
@import "../assets/stylus/method.styl"
@import "../assets/stylus/mixin.styl"
// UI组件 - 标签
.vha_UI-tabItem
  position relative
  flex 1
  >.vha_UI-badge
    position absolute
    margin-left rpx(10)
    top rpx(-14)
    left 50%
    z-index 1001
  >.vha_UI-button
    >.vha_UI-view
      padding rpx(10)
      >.ui-t-i
        flex 6
        display inline-flex
        &:before
          margin auto
      >.ui-t-span
        flex 4
// ------------------------------
// UI组件 - 标签-类型-无
// vhaTab_type()
//   height rpx(100)
//   font-size rpx(28)
// // .vha_UI-tabItem.type-none
//   // transition all .1s

// // UI组件 - 标签-类型-基本
// .vha_UI-tabItem.type-base
//   vhaTab_type()
//   border-top-line(1px solid rgba(0,0,0,0.4))
//   z-index 1000

// // UI组件 - 标签-类型-正常
// .vha_UI-tabItem.type-normal
//   vhaTab_type()
//   position relative
//   box-shadow rgba(0, 0, 0, 0.15) 0px 0px 10px
//   z-index 1000
// ------------------------------
// UI组件 - 标签-颜色
vhaTab_color($color, $backgroundColor, $backgroundActiveColor)
  color $backgroundColor
.vha_UI-tabItem.color-success
  vhaTab_color(white_, Success_, Success_Focus)
.vha_UI-tabItem.color-info
  vhaTab_color(white_, Info_, Info_Focus)
.vha_UI-tabItem.color-warning
  vhaTab_color(white_, Warning_, Warning_Focus)
.vha_UI-tabItem.color-error
  vhaTab_color(white_, Error_, Error_Focus)
.vha_UI-tabItem.color-dark
  vhaTab_color(white_, Dark_, Dark_Focus)
.vha_UI-tabItem.color-calm
  vhaTab_color(white_, Calm_, Calm_Focus)
.vha_UI-tabItem.color-stable
  vhaTab_color(black_, Stable_, Stable_Focus)
.vha_UI-tabItem.color-light
  vhaTab_color(black_, Light_, Light_Focus)
</style>
<template>
  <div
    class="vha_UI-tabItem" 
    :class="[
      this.temp_color ? 'color-' + this.temp_color : '',
    ]" 
  >
    <vha-badge v-if="value" :value="value" :max="max" :tag="tag"></vha-badge>
    <vha-button :type="type" size="full" v-vhaRouter="{push: this.push, animate:'none'}">
      <vha-view axis="y">
        <i class="ui-t-i" :class="icon"></i>
        <span class="ui-t-span _oneEllipsis"><slot></slot></span>
      </vha-view>
    </vha-button>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'vhaUItabItem',
  props: {
    value: Number,
    max: Number,
    tag: String,
    push: String,
    icon: String,
    type: {
      type: String,
      default: 'none',
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
      default: 'none',
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
    }
  },
  data() {
    return {
      temp_color: ''
    }
  },
  methods: {
    procColor: function () {
      if (this.$route.path === this.push) {
        this.temp_color = 'info'
      } else {
        this.temp_color = this.color
      }
    }
  },
  watch: {
    '$route': function (to, from) {
      this.procColor()
    }
  },
  created() {
    this.procColor()
  }
}
</script>