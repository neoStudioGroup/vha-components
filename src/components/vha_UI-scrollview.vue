<style lang="stylus">
@import "../assets/stylus/method.styl"
// UI组件 - 滚动视图
.vha_UI-scrollview
  height 100%
  overflow-x hidden
  overflow-y hidden
  background-color inherit
  -webkit-overflow-scrolling touch
  
  // 下拉刷新页, 上拉加载页
  .refresh-layer
    height rpx(80)
    color #aaa
    font-size rpx(26)
    display flex
    flex-direction column
    align-items center
    justify-content center
  .infinite-layer
    height rpx(80)
    color #aaa
    font-size rpx(26)
    display flex
    align-items center
    justify-content center
    
  .refresh-layer
    .refresh-layer-note
      margin-bottom rpx(8)
    .refresh-layer-content
      display flex
      align-items center
    
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
    
// UI组件 - 滚动视图 开启X滚动
.vha_UI-scrollview.scrollX
  overflow-x auto

// UI组件 - 滚动视图 开启Y滚动
.vha_UI-scrollview.scrollY
  overflow-y auto

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
  
// UI组件 - 滚动视图 处理错误 该区域禁止操作
.vha_UI-scrollview.touch-action
  touch-action none
  
</style>
<template>
  <div 
    class="vha_UI-scrollview"
    :class="{
      'scrollY': scrollY,
      'state-down': (state === 0),
      'state-up': (state === 1),
      'state-refreshing': (state === 2),
      'touch-action': touchAction
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
      <div class="refresh-layer" v-if="onRefresh" :style="{height: noteText ? vha_rpx(112) : '', marginTop: noteText && state != 2 ? vha_rpx(-112) : ''}">
      <!-- <div class="refresh-layer" v-if="onRefresh" :style="{height: noteText ? vha_rpx(112) : ''}"> -->
        <span class="refresh-layer-note" v-if="noteText">{{noteText}}</span> 
        <slot name="refresh">
          <div class="refresh-layer-content" :style="{marginBottom: noteText ? vha_rpx(22) : ''}">
            <i class="vha_icon-loading vha_icon-anim-pulse"></i>
            <i class="vha_icon-jiantou"></i>
            <span class="label-down">下拉刷新</span>
            <span class="label-up">释放刷新</span>
            <span class="label-refresh">正在刷新..</span>
          </div>
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
    noteText: {
      type: String,
      default: ''
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
    },
    scrollY: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      top: 0,
      state: 0, // 0:down, 1: up, 2: state-refreshing
      startY: 0,
      touching: false,
      infiniteLoading: false,
      touchAction: false
    }
  },
  watch: {
  },
  methods: {
    touchStart (e) {
      this.startY = e.targetTouches[0].pageY
      this.touching = true
    },
    mouseDown (e) {
      this.touchAction = false
      this.startY = e.pageY
      this.touching = true
    },
    touchMove (e) {
      if (this.$el.scrollTop > 0 || !this.touching) {
        return
      }
      let diff = e.targetTouches[0].pageY - this.startY
      // if (diff > 0) e.preventDefault()
      if (diff >= 0) this.touchAction = true
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
      // if (diff > 0) e.preventDefault()
      if (diff >= 0) this.touchAction = true
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
      this.touchAction = false
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
      this.$emit('scrollTop', event.target.scrollTop)
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