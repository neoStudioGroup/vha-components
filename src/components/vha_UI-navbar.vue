<style lang="stylus">
@import "../assets/stylus/method.styl"
@import "../assets/stylus/mixin.styl"
// UI组件 - 导航栏
.vha_UI-navbar
  transition all 200ms
  .ui-n-leftBox
    .vha_UI-button
      // width rpx(90)
      font-size rpx(26)
      color inherit
  
  .ui-n-middleBox
    position relative
    >.ui-n-m-box
      position absolute
      width 100%
      height 100%
      pointer-events none
      span
        font-weight 700

    .vhaNavbarAnimate-none-enter-active //进入路由-上层-进场 过程中保持的状态
      transition all 0ms
    .vhaNavbarAnimate-none-leave-active //进入路由-下层-退场 过程中保持的状态
      transition all 0ms

    // 原标题
    .vhaNavbarAnimate-in-leave-active //退场过程中保持的状态
      transition all 400ms
    .vhaNavbarAnimate-in-leave //退场开始值
      transform translate(0, 0)
      opacity 1
    .vhaNavbarAnimate-in-leave-to //退场目标值
      transform translate(rpx(-300), 0)
      opacity 0
    .vhaNavbarAnimate-out-enter-active //进场过程中保持的状态
      transition all 400ms
    .vhaNavbarAnimate-out-enter //进场开始值
      transform translate(rpx(-300), 0)
      opacity 0
    .vhaNavbarAnimate-out-enter-to //进场目标值
      transform translate(0, 0)
      opacity 1
    
    // 新标题
    .vhaNavbarAnimate-in-enter-active //进场过程中保持的状态
      transition all 400ms
    .vhaNavbarAnimate-in-enter //进场开始值
      transform translate(rpx(300), 0)
      opacity 0
    .vhaNavbarAnimate-in-enter-to //进场目标值
      transform translate(0, 0)
      opacity 1
    .vhaNavbarAnimate-out-leave-active //退场过程中保持的状态
      transition all 400ms
    .vhaNavbarAnimate-out-leave //退场开始值
      transform translate(0, 0)
      opacity 1
    .vhaNavbarAnimate-out-leave-to //退场目标值
      transform translate(rpx(300), 0)
      opacity 0
  
  .ui-n-rightBox
    .vha_UI-button
      // width rpx(90)
      font-size rpx(26)
      color inherit
// ------------------------------
vhaNavbar_type()
  height rpx(90)
  font-size rpx(28)
  .vha_UI-subview
    &:first-child, &:last-child
      width rpx(90)

// UI组件 - 导航栏-类型-无
// .vha_UI-navbar.type-none
  // background-color transparent

// UI组件 - 导航栏-类型-基本
.vha_UI-navbar.type-base
  vhaNavbar_type()
  position relative
  z-index 1000
  border-bottom-line(1px solid rgba(0,0,0,0.2))

// UI组件 - 导航栏-类型-正常
.vha_UI-navbar.type-normal
  vhaNavbar_type()
  position relative
  z-index 1000
  box-shadow rgba(0, 0, 0, 0.15) 0px 0px rpx(20)
// ------------------------------
vhaNavbar_color($color, $backgroundColor, $backgroundActiveColor)
  color $color
  background-color $backgroundColor

// UI组件 - 导航栏-颜色
.vha_UI-navbar.color-success
  vhaNavbar_color(white_, Success_, Success_Focus)
.vha_UI-navbar.color-info
  vhaNavbar_color(white_, Info_, Info_Focus)
.vha_UI-navbar.color-warning
  vhaNavbar_color(white_, Warning_, Warning_Focus)
.vha_UI-navbar.color-error
  vhaNavbar_color(white_, Error_, Error_Focus)
.vha_UI-navbar.color-dark
  vhaNavbar_color(white_, Dark_, Dark_Focus)
.vha_UI-navbar.color-calm
  vhaNavbar_color(white_, Calm_, Calm_Focus)
.vha_UI-navbar.color-stable
  vhaNavbar_color(black_, Stable_, Stable_Focus)
.vha_UI-navbar.color-light
  vhaNavbar_color(black_, Light_, Light_Focus)
  .ui-n-leftBox
    .vha_UI-button
      color Info_
  .ui-n-rightBox
    .vha_UI-button
      color Info_
</style>
<template>
  <div 
    class="vha_UI-navbar" 
    :class="[
      'type-' + this.type,
      this.color === 'color-none' ? '' : 'color-' + this.temp_color,
    ]"
    v-if="this.temp_show"
  >
    <slot>
      <vha-view>
        <vha-subview class="ui-n-leftBox">
          <slot name="leftBox" v-if="this.temp_sideButton != 'none'">
            <vha-button
              type="base" 
              size="full" 
              icon="vha_icon-left" 
              v-if="this.temp_sideButton === 'left' || this.temp_sideButton === 'both'"
              @click="onLeftButton"
            >
            </vha-button>
          </slot>
        </vha-subview>
        <vha-subview class="ui-n-middleBox" full="width">
          <slot name="titleBox">
            <transition :name="'vhaNavbarAnimate-' + this.transitionName">
              <div class="ui-n-m-box" v-if="routeAction" key="oldTitle">
                <vha-view align="center" justify="center">
                  <span class="_oneEllipsis">{{title || new_Title}}</span>
                </vha-view>
              </div>
              <span class="ui-n-m-box" v-else key="new_Title">
                <vha-view align="center" justify="center">
                  <span class="_oneEllipsis">{{title || new_Title}}</span>
                </vha-view>
              </span>
            </transition>
          </slot>
        </vha-subview>
        <vha-subview class="ui-n-rightBox">
          <slot name="rightBox" v-if="this.temp_sideButton != 'none'">
            <vha-button 
              type="base" 
              size="full" 
              icon="vha_icon-menu" 
              v-if="this.temp_sideButton === 'right' || this.temp_sideButton === 'both'"
              @click="onRightButton"
            >
            </vha-button>
          </slot>
        </vha-subview>
      </vha-view>
    </slot>
  </div>
</template>
<script type="text/ecmascript-6">
import vhaView from "./vha_UI-view";
import vhaSubview from "./vha_UI-subview";
import vhaButton from "./vha_UI-button";
export default {
  name: 'vhaUInavbar',
  beforeCreate() {
  },
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
      default: '',//为空时根据type自行判断, none为强制清除颜色
      validator(value) {
        return [
          '',
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
    sideButton: {
      type: String,
      default: 'both',
      validator(value) {
        return [
          'none',
          'left',
          'right',
          'both'
        ].indexOf(value) > -1;
      }
    },
    title: {type: String}
  },
  data() {
    return {
      temp_show: true,
      temp_color: '',
      transitionName: 'in',
      routeAction: true,
      new_Title: '',
      temp_sideButton: '',
      nextAnimate: ''
    }
  },
  components: {
    vhaView,
    vhaSubview,
    vhaButton
  },
  methods: {
    onLeftButton: function () {
      try {
        if (typeof this.$route.meta.vhaNavbar != 'undefined') {
          if (typeof this.$route.meta.vhaNavbar.leftButtonEvent === 'function') {
            this.$route.meta.vhaNavbar.leftButtonEvent()
          } else {
            throw 0
          }
        } else {
          throw 0
        }
      } catch (e) {
        this.$vhaRt.go({value: -1, animate: 'out'})
      }
    },
    onRightButton: function () {
      try {
        if (typeof this.$route.meta.vhaNavbar != 'undefined') {
          if (typeof this.$route.meta.vhaNavbar.rightButtonEvent === 'function') {
            this.$route.meta.vhaNavbar.rightButtonEvent()
          } else {
            throw 0
          }
        } else {
          throw 0
        }
      } catch (e) {
      }
    },
    getRouteProps: function (source) {
      // 获取路由navbar的标题和信息
      try {
        if (typeof source.meta.vhaNavbar != 'undefined') {
          if (typeof source.meta.vhaNavbar.show != 'undefined') {
            this.$nextTick(function () {
              this.temp_show = source.meta.vhaNavbar.show
            })
          } else {
            this.$nextTick(function () {
              this.temp_show = true
            })
          }
          
          this.new_Title = source.meta.vhaNavbar.title
          
          if (typeof source.meta.vhaNavbar.sideButton != 'undefined') {
            this.temp_sideButton = source.meta.vhaNavbar.sideButton
          } else {
            this.temp_sideButton = this.sideButton
          }
        } else {
          throw 0
        }
      } catch (error) {
        this.new_Title = source ? source.name : ''
        this.temp_sideButton = this.sideButton
      }
    },
    vhaRouterviewEvent: function (event) {
      this.nextAnimate = event.detail.animate
      if (this.nextAnimate === 'none') {
        // 如果设置为空, 10毫秒后清空避免影响下次动画, 否则设置了动画或自动判断动画则在动画结束后清空
        setTimeout(() => {
          this.nextAnimate = ''
        }, 10)
      }
    },
    vhaRouterviewAnimateEnd: function (event) {
      this.nextAnimate = ''
    }
  },
  watch: {
    'color': function () {
      this.temp_color = this.color
    },
    '$route': function (to, from) {
      this.getRouteProps(to)
      this.routeAction = !this.routeAction
      
      let toDepth = to.path.split('/').length
      let fromDepth = from.path.split('/').length
      
      
      // 默认根据路径自动判断
      let temp_nextAnimate = ''
      
      // 如果vhaRouter转跳有设置路由动画方式就选择
      if (this.nextAnimate) {
        temp_nextAnimate = this.nextAnimate
      } else {
        // 如果本页路由有设置"退出动画"就优先应用
        if (typeof from.meta.vhaAnime != 'undefined') {
          if (typeof from.meta.vhaAnime.out != 'undefined') {
            temp_nextAnimate = from.meta.vhaAnime.out
          }
        }
        // 否则如果新页路由有设置"进入动画"就应用
        if (temp_nextAnimate === '') {
          if (typeof to.meta.vhaAnime != 'undefined') {
            if (typeof to.meta.vhaAnime.in != 'undefined') {
              temp_nextAnimate = to.meta.vhaAnime.in
            }
          }
        }
      }
      
      // 如果都没有就自行判断
      this.transitionName = temp_nextAnimate || (toDepth === fromDepth ? '' : toDepth < fromDepth ? 'out' : 'in')
      
      // 嵌套的路由顶层不会触发动画&结束事件, 所以强制动画开启10毫秒后设置下次动画为空
      setTimeout(() => {
        this.nextAnimate = ''
      }, 10)
    }
  },
  created() {
    switch (this.type) {
      case 'none': {
        this.temp_color = this.color || ''
        break
      }
      case 'base': {
        this.temp_color = this.color || 'light'
        break
      }
      case 'normal': {
        this.temp_color = this.color || 'light'
        break
      }
    }
    
    this.getRouteProps(this.$route)
  },
  mounted() {
    // vhaRouterviewEvent事件 处理路由转跳动画
    window.addEventListener('vha:RouterviewEvent', this.vhaRouterviewEvent)
    // vhaRouterviewAnimateEnd事件 路由动画结束事件
    window.addEventListener('vha:RouterviewAnimateEnd', this.vhaRouterviewAnimateEnd)
  },
  beforeDestroy() {
    // 注销处理路由转跳动画
    window.removeEventListener('vha:RouterviewEvent', this.vhaRouterviewEvent)
    // 注销处理路由转跳动画
    window.removeEventListener('vha:RouterviewAnimateEnd', this.vhaRouterviewAnimateEnd)
  }
}
</script>