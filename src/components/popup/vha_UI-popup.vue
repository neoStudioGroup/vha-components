<style lang="stylus">
@import "../../assets/stylus/method.styl"
@import "../../assets/stylus/mixin.styl"
// UI组件 - 弹出层
.vha_UI-popup
  position absolute
  top 0
  left 0
  width 100%
  height 100%
  z-index 10000
  overflow hidden
  display flex
  .ui-p-mask
    position absolute
    width 100%
    height 100%
    background-color rgba(0,0,0,0.3)
    z-index 10000
  .ui-p-content
    z-index 10001
    
  .ui-p-content.pos-none
    width 100%
    height 100%
  .ui-p-content.pos-center
    margin auto
  .ui-p-content.pos-top
    margin 0 auto
    margin-bottom auto
  .ui-p-content.pos-right
    margin auto 0
    margin-left auto
  .ui-p-content.pos-bottom
    margin 0 auto
    margin-top auto
  .ui-p-content.pos-left
    margin auto 0
    margin-right auto
  
  .vhaAnimatePopupMask-none-enter-active //进入路由-上层-进场 过程中保持的状态
    transition all 0ms
  .vhaAnimatePopupMask-none-leave-active //进入路由-下层-退场 过程中保持的状态
    transition all 0ms
  
  .vhaAnimatePopupMask-enter-active, .vhaAnimatePopupMask-leave-active //进场退场 过程中保持的状态
    transition all 150ms
  .vhaAnimatePopupMask-enter, .vhaAnimatePopupMask-leave-to //进场目标 退场开始
    opacity 0
  
  .vhaAnimatePopupContent-center-enter-active, .vhaAnimatePopupContent-center-leave-active //进场退场 过程中保持的状态
    transition all 150ms
  .vhaAnimatePopupContent-center-enter, .vhaAnimatePopupContent-center-leave-to //进场目标 退场开始
    transform scale(1.1)
    opacity 0
  
  .vhaAnimatePopupContent-top-enter-active, .vhaAnimatePopupContent-top-leave-active //进场退场 过程中保持的状态
    transition all 300ms
  .vhaAnimatePopupContent-top-enter, .vhaAnimatePopupContent-top-leave-to //进场目标 退场开始
    transform translate(0, -100%)
    opacity 0
  
  .vhaAnimatePopupContent-right-enter-active, .vhaAnimatePopupContent-right-leave-active //进场退场 过程中保持的状态
    transition all 300ms
  .vhaAnimatePopupContent-right-enter, .vhaAnimatePopupContent-right-leave-to //进场目标 退场开始
    transform translate(100%, 0)
    opacity 0
  
  .vhaAnimatePopupContent-bottom-enter-active, .vhaAnimatePopupContent-bottom-leave-active //进场退场 过程中保持的状态
    transition all 300ms
  .vhaAnimatePopupContent-bottom-enter, .vhaAnimatePopupContent-bottom-leave-to //进场目标 退场开始
    transform translate(0, 100%)
    opacity 0
  
  .vhaAnimatePopupContent-left-enter-active, .vhaAnimatePopupContent-left-leave-active //进场退场 过程中保持的状态
    transition all 300ms
  .vhaAnimatePopupContent-left-enter, .vhaAnimatePopupContent-left-leave-to //进场目标 退场开始
    transform translate(-100%, 0)
    opacity 0
</style>
<template>
  <div class="vha_UI-popup">
    <transition name="vhaAnimatePopupMask" @leave="_maskLeave">
      <div class="ui-p-mask" ref="mask" :style="mask.style" v-if="mask.show" @click="_close"></div>
    </transition>
    <transition :name="'vhaAnimatePopupContent-' + content.animate" @leave="_contentLeave">
      <div class="ui-p-content" ref="content" :class="['pos-' + this.content.pos]" v-show="content._show"></div>
    </transition>
  </div>
</template>
<script type="text/ecmascript-6">
import utils from "../utils";
export default {
  name: 'vhaUIpopup',
  data() {
    return {
      callback: {
        show: undefined, 
        close: undefined, 
        destroy: undefined, 
      },
      option: {
        leavePointer: true,
        autoDestroy: true
      },
      mask: {
        style: {},
        show: undefined, 
        _isSetShow: false, 
        clickClose: true,
        _maskLeaveEnd: false
      },
      content: {
        pos: 'center',
        animate: 'center',
        _show: false, 
        _contentLeaveEnd: false
      }
    }
  },
  methods: {
    _maskLeave: function (el) {
      utils.checkClass(el, '-leave-active').then(() => {
        this.maskLeaveEnd = true
        this._animateEnd()
      })
    },
    _contentLeave: function (el) {
      utils.checkClass(el, '-leave-active').then(() => {
        this.contentLeaveEnd = true
        this._animateEnd()
      })
    },
    _animateEnd: function () {
      if (this.mask._isSetShow) {
        // 如果设置了遮罩隐藏就只比对内容动画结束
        if (this.contentLeaveEnd) {
          this.contentLeaveEnd = false
          if (this.option.autoDestroy) {
            this.destroy()
          }
        }
      } else {
        // 如果没有设置遮罩显示 默认
        if (this.maskLeaveEnd && this.contentLeaveEnd) {
          this.maskLeaveEnd = false
          this.contentLeaveEnd = false
          if (this.option.autoDestroy) {
            this.destroy()
          }
        }
      }
    },
    _call: function (func) {
      if (typeof func === 'function') {
        func()
      }      
    },
    destroy: function () {
      this._call(this.callback.destroy)
      document.body.removeChild(this.$el)
      this.$destroy()
    },
    show: function () {
      // 如果设置过遮罩属性就把"设置过"设为真
      if (typeof this.mask.show != 'undefined') {this.mask._isSetShow = true}
      if (!this.mask._isSetShow) {this.mask.show = true}
      this.content._show = true
      this._call(this.callback.show)
    },
    _close: function () {
      if (!this.mask.clickClose) {return}
      this.close()
    },
    close: function () {
      this.mask.show = false
      // 如果设置了默认自动销毁 就不调用隐藏内容
      if (this.option.autoDestroy) {
        this.content._show = false
      }
      // 离开时是否设置鼠标穿透 (默认: 真)
      if (this.option.leavePointer) {this.$el.style.pointerEvents = 'none'}
      this._call(this.callback.close)
    }
  }
}
</script>