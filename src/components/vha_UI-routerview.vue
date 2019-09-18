<style lang="stylus">
@import "../assets/stylus/method.styl"
@import "../assets/stylus/mixin.styl"
// UI组件-路由视图
.vha_UI-routerview
  height 100%
  background-color #fcfcfc
  .ui-r-center
    position relative
    margin 0 auto
    width 100%
    height 100%
    box-sizing border-box
    background-color #fff
    overflow hidden
    box-shadow 0 0 rpx(68) rgba(0,0,0,0.1)
    >*
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      box-shadow 0 0 rpx(40) rgba(0,0,0,0.16)
      background-color inherit
      // transition transform 30000ms
      // z-index 102
    .ui-r-c-mask
      box-shadow none
      background-color transparent
      z-index 101
  .ui-r-center.size-auto
    min-width 320px
    max-width 540px
  
  .vhaRouterviewAnimate-none-enter-active //进入路由-上层-进场 过程中保持的状态
    transition all 0ms
  .vhaRouterviewAnimate-none-leave-active //进入路由-下层-退场 过程中保持的状态
    transition all 0ms
    
  .vhaRouterviewAnimate-in-enter-active //进入路由-上层-进场 过程中保持的状态
    transition transform 400ms cubic-bezier(0,1,1,1)
    // z-index 102
  .vhaRouterviewAnimate-in-enter //进场开始值
    transform translate(98vw, 0)
  .vhaRouterviewAnimate-in-enter-to //进场目标值
    // box-shadow 0 0 50px rgba(0,0,0,0.3)
    transform translate(0, 0)
  .vhaRouterviewAnimate-in-leave-active //进入路由-下层-退场 过程中保持的状态
    transition transform 500ms cubic-bezier(.2,0,.6,1)
    // z-index 100
  .vhaRouterviewAnimate-in-leave //退场开始值
    transform translate(0, 0)
  .vhaRouterviewAnimate-in-leave-to //退场目标值
    transform translate(rpx(-300), 0)
  
  .vhaRouterviewAnimate-out-enter-active //返回路由-上层-进场 过程中保持的状态
    transition transform 300ms cubic-bezier(0,1,1,1)
    // z-index 100
  .vhaRouterviewAnimate-out-enter //进场开始值
    transform translate(rpx(-300), 0)
  .vhaRouterviewAnimate-out-enter-to //进场目标值
    // box-shadow 0 0 50px rgba(0,0,0,0.3)
    transform translate(0, 0)
  .vhaRouterviewAnimate-out-leave-active //返回路由-下层-退场 过程中保持的状态
    transition transform 400ms cubic-bezier(.2,0,.6,1)
    // z-index 102
    z-index 100
  .vhaRouterviewAnimate-out-leave //退场开始值
    transform translate(0, 0)
  .vhaRouterviewAnimate-out-leave-to //退场目标值
    transform translate(100vw, 0)
</style>
<template>
  <div class="vha_UI-routerview">
    <div class="ui-r-center" :class="['size-' + this.size]">
      <div class="ui-r-c-mask" v-if="maskShow"></div>
      <transition 
        :name="'vhaRouterviewAnimate-' + this.transitionName" 
        @enter="enter" 
        @leave="leave" 
      >
        <keep-alive 
          :include="this.include || this.$vhaComponents.routerview.include" 
          :exclude="this.exclude || this.$vhaComponents.routerview.exclude"
          :max="this.max"
        >
          <router-view></router-view>
        </keep-alive>
      </transition>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import utils from "./utils";
export default {
  name: 'vhaUIrouterview',
  beforeCreate() {
  },
  props: {
    size: {
      type: String,
      default: 'auto',
      validator(value) {
        return [
          'auto',
          'full'
        ].indexOf(value) > -1;
      }
    },
    include: {
      type: String,
      default: ''
    },
    exclude: {
      type: String,
      default: ''
    },
    max: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      transitionName: 'in',
      enterEnd: false,
      leaveEnd: false,
      maskShow: false,
      nextAnimate: ''
    }
  },
  methods: {
    enter: function (el) {
      if (this.nextAnimate != 'none') {
        this.maskShow = true
      }
      // 偶尔失效BUG, 可能与元素被删除有关
      // el.addEventListener("transitionend", () => {})
      
      // 发送读取路由滚动条位置设置到元素事件
      let temp_vhaRouterAnimateEnter = new CustomEvent('vha:RouterAnimateEnter', {
        detail: el
      })
      window.dispatchEvent(temp_vhaRouterAnimateEnter)
      
      // 进入页面动画执行完毕
      utils.checkClass(el, '-enter-active').then(() => {
        this.enterEnd = true
        this.animateEnd()
      })
    },
    leave: function (el) {
      // 离开页面动画执行完毕
      utils.checkClass(el, '-leave-active').then(() => {
        this.leaveEnd = true
        this.animateEnd()
      })
    },
    // addEventListener transitionend 怎么都有偶尔不触发的bug, 改为timeout检测
    animateEnd: function () {
      if (this.enterEnd && this.leaveEnd) {
        this.maskShow = false
        this.enterEnd = false
        this.leaveEnd = false
        // 广播动画结束事件
        window.dispatchEvent(new CustomEvent('vha:RouterviewAnimateEnd'))
      }
    },
    vhaRouterviewEvent: function (event) {
      // console.log('vhaRouterviewEvent：', event.detail)
      this.nextAnimate = event.detail.animate
      if (this.nextAnimate === 'none') {
        // 如果设置为空, 10毫秒后清空避免影响下次动画, 否则设置了动画或自动判断动画则在动画结束后清空
        setTimeout(() => {
          this.nextAnimate = ''
        }, 10)
      }
    }
  },
  watch: {
    '$route': function (to, from) {
      // console.log('现在路由:',to.path.split('/')[1],'来自路由:',from.path.split('/')[1],'现在的动画:',this.transitionName)
      let toDepth = to.path.split('/').length
      let fromDepth = from.path.split('/').length
      // this.transitionName = to.path.split('/')[1] != "" ? 'in' : 'out'
      // this.transitionName = toDepth === fromDepth ? '' : toDepth < fromDepth ? 'navbarSlide-out' : 'navbarSlide-in'
      
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
  mounted() {
    // vhaRouterviewEvent事件 处理路由转跳动画
    window.addEventListener('vha:RouterviewEvent', this.vhaRouterviewEvent)
  },
  beforeDestroy() {
    // 注销处理路由转跳动画
    window.removeEventListener('vha:RouterviewEvent', this.vhaRouterviewEvent)
  }
}
</script>