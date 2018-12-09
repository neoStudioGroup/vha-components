<style lang="stylus">
@import "../assets/stylus/method.styl"
// UI组件 - 滚动视图
.vha_UI-scrollview
  height 100%
  overflow-x hidden
  overflow-y auto
  background-color inherit
  -webkit-overflow-scrolling touch
  
  // 下拉刷新页, 上拉加载页
  .refresh-layer, .infinite-layer
    height rpx(80)
    color #aaa
    font-size rpx(26)
    display flex
    align-items center
    justify-content center
  // 下拉刷新页
  .refresh-layer
    margin-top rpx(-80)
    .vha_icon-loading
      display none
    .vha_icon-jiantou
      transform rotate(0deg) translateZ(0)
      transition-duration .3s
    .label-down, .label-refresh, .label-up
      margin-left rpx(10)
      display none
      
  // 上拉加载页
  .infinite-layer
    .label-loading
      margin-left rpx(10)
    
// UI组件 - 滚动视图 状态-下拉中
.vha_UI-scrollview.state-down
  .refresh-layer
    .label-down
      display inline-block

// UI组件 - 滚动视图 状态-到达偏移值释放
.vha_UI-scrollview.state-up
  .refresh-layer
    .label-up
      display inline-block
    .vha_icon-jiantou
      transform rotate(180deg) translateZ(0)

// UI组件 - 滚动视图 状态-刷新中
.vha_UI-scrollview.state-refreshing
  .refresh-layer
    .label-refresh
      display inline-block
    .vha_icon-loading
      display inline-block
    .vha_icon-jiantou
      display none
      transition-duration 0ms
  
</style>
<template>
  <div 
    class="vha_UI-scrollview"
    :class="{
      'state-down': (state === 0),
      'state-up': (state === 1),
      'state-refreshing': (state === 2)
    }"
    @touchstart="onRefresh ? touchStart($event) : undefined"
    @touchmove="onRefresh ? touchMove($event) : undefined"
    @touchend="onRefresh ? touchEnd($event) : undefined"
    @mousedown="onRefresh ? mouseDown($event) : undefined"
    @mousemove="onRefresh ? mouseMove($event) : undefined"
    @mouseup="onRefresh ? mouseUp($event) : undefined"
    @scroll="(onInfinite || infiniteLoading) ? onScroll($event) : undefined"
  >
    <div class="ui-s-wrap"
      :style="{
        transform: 'translate3d(0, ' + top + 'px, 0)',
        webkitTransform: 'translate3d(0, ' + top + 'px, 0)'
      }"
    >
      <div class="refresh-layer" v-if="onRefresh">
        <slot name="refresh">
          <i class="vha_icon-loading vha_icon-anim-pulse"></i>
          <i class="vha_icon-jiantou"></i>
          <span class="label-down">下拉刷新</span>
          <span class="label-up">释放刷新</span>
          <span class="label-refresh">正在刷新..</span>
        </slot>
      </div>
      <slot></slot>
      <div class="infinite-layer" v-if="onInfinite">
        <slot name="infinite">
          <i class="vha_icon-loading vha_icon-anim-pulse"></i>
          <span class="label-loading">正在加载..</span>
        </slot>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'vhaUIscrollview',
  props: {
    offset: {
      type: Number,
      default: 44
    },
    onRefresh: {
      type: Function,
      default: undefined,
      required: false
    },
    onInfinite: {
      type: Function,
      default: undefined,
      require: false
    },
    keepBottom: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      top: 0,
      state: 0, // 0:down, 1: up, 2: state-refreshing
      startY: 0,
      touching: false,
      infiniteLoading: false
    }
  },
  methods: {
    touchStart (e) {
      this.startY = e.targetTouches[0].pageY
      this.touching = true
    },
    mouseDown (e) {
      this.startY = e.pageY
      this.touching = true
    },
    touchMove (e) {
      if (this.$el.scrollTop > 0 || !this.touching) {
        return
      }
      let diff = e.targetTouches[0].pageY - this.startY
      if (diff > 0) e.preventDefault()
      this.top = Math.pow(diff, 0.8) + (this.state === 2 ? this.offset : 0)

      if (this.state === 2) { // in state-refreshing
        return
      }
      if (this.top >= this.offset) {
        this.state = 1
      } else {
        this.state = 0
      }
    },
    mouseMove(e) {
      if (this.$el.scrollTop > 0 || !this.touching) {
        return
      }
      let diff = e.pageY - this.startY
      if (diff > 0) e.preventDefault()
      this.top = Math.pow(diff, 0.8) + (this.state === 2 ? this.offset : 0)

      if (this.state === 2) { // in state-refreshing
        return
      }
      if (this.top >= this.offset) {
        this.state = 1
      } else {
        this.state = 0
      }
    },
    touchEnd (e) {
      this.touching = false
      if (this.state === 2) { // in state-refreshing
        this.state = 2
        this.top = this.offset
        return
      }
      if (this.top >= this.offset) { // do refresh
        this.refresh()
      } else {  // cancel refresh
        this.state = 0
        this.top = 0
      }
    },
    mouseUp (e) {
      this.touching = false
      if (this.state === 2) { // in state-refreshing
        this.state = 2
        this.top = this.offset
        return
      }
      if (this.top >= this.offset) { // do refresh
        this.refresh()
      } else {  // cancel refresh
        this.state = 0
        this.top = 0
      }
    },
    refresh () {
      this.state = 2
      this.top = this.offset
      this.onRefresh(this.refreshDone)
    },
    refreshDone () {
      this.state = 0
      this.top = 0
    },
    infinite () {
      this.infiniteLoading = true
      this.onInfinite(this.infiniteDone)
    },
    infiniteDone () {
      this.infiniteLoading = false
    },
    onScroll (e) {
      if (this.infiniteLoading) {
        return
      }
      let outerHeight = this.$el.clientHeight
      let innerHeight = this.$el.querySelector('.ui-s-wrap').clientHeight
      let scrollTop = this.$el.scrollTop
      let ptrHeight = this.onRefresh ? this.$el.querySelector('.refresh-layer').clientHeight : 0
      let infiniteHeight = this.$el.querySelector('.infinite-layer').clientHeight
      let bottom = innerHeight - outerHeight - scrollTop - ptrHeight

      if (bottom < infiniteHeight) this.infinite()
    },
    handleScroll (event) {
      // console.log(event.target.scrollTop)
    }
  },
  mounted() {
    this.$el.addEventListener('scroll', this.handleScroll)
  },
  updated() {
    // 数据变动更新后 - 最好使用计算属性或 watch
    if(this.keepBottom){
      this.$nextTick(function(){
        this.$el.scrollTop = this.$el.scrollHeight
      })
    }
  },
  beforeDestroy() {
    this.$el.removeEventListener('scroll', this.handleScroll)
  }
}
</script>