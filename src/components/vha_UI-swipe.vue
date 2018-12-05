<style lang="stylus">
@import "../assets/stylus/method.styl"
@import "../assets/stylus/mixin.styl"
// UI组件 - 轮播
.vha_UI-swipe
  overflow hidden
  position relative
  height 100%
  .ui-s-wrap
    position relative
    overflow hidden
    height 100%
    -webkit-transform translateZ(0)
    transform translateZ(0)
  .ui-s-wrap > div
    position absolute
    -webkit-transform translateX(-100%)
    transform translateX(-100%)
    width 100%
    height 100%
    display none
  .ui-s-wrap > div.is-active
    display block
    -webkit-transform none
    transform none

// UI组件 - 指示器
  .ui-s-indicators
    position absolute
    bottom rpx(20)
    left 50%
    -webkit-transform translateX(-50%)
    transform translateX(-50%)
    .ui-s-i-indicator
      width rpx(16)
      height rpx(16)
      display inline-block
      border-radius 100%
      background #000
      opacity 0.2
      margin 0 rpx(6)
    .ui-s-i-indicator.is-active
      background #fff

</style>
<template>
  <div 
    class="vha_UI-swipe"
    @touchstart="dragStartEvent"
    @touchmove="dragMoveEvent"
    @touchend="dragEndEvent"
    @touchcancel="dragEndEvent"
    
    @mousedown="dragStartEvent"
    @mousemove="dragMoveEvent"
    @mouseup="dragEndEvent"
    @mouseleave="dragEndEvent"
    
    @transitionend="transitionend"
  >
    <div class="ui-s-wrap" ref="wrap">
      <slot></slot>
    </div>
    <div class="ui-s-indicators" v-show="showIndicators">
      <div 
        class="ui-s-i-indicator"
        :class="{'is-active': $index === index }"
        v-for="(page, $index) in pages"
        :key="$index"
      ></div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'vhaUIswipe',
  props: {
    // autoHeight: {
    //   type: Boolean,
    //   default: false
    // },
    
    speed: {
      type: Number,
      default: 300
    },

    defaultIndex: {
      type: Number,
      default: 0
    },

    disabled: {
      type: Boolean,
      default: false
    },

    auto: {
      type: Number,
      default: 3000
    },

    continuous: {
      type: Boolean,
      default: true
    },

    showIndicators: {
      type: Boolean,
      default: true
    },

    noDragWhenSingle: {
      type: Boolean,
      default: true
    },

    prevent: {
      type: Boolean,
      default: false
    },

    propagation: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      ready: false,
      dragging: false,
      userScrolling: false,
      animating: false,
      index: 0,
      pages: [],
      timer: null,
      reInitTimer: null,
      noDrag: false
    }
  },
  methods: {
    once(el, event, fn) {
      var bindEvent = (function() {
        if(document.addEventListener) {
          return function(element, event, handler) {
            if (element && event && handler) {
              element.addEventListener(event, handler, false)
            }
          }
        } else {
          return function(element, event, handler) {
            if (element && event && handler) {
              element.attachEvent('on' + event, handler)
            }
          }
        }
      })()

      var unbindEvent = (function() {
        if(document.removeEventListener) {
          return function(element, event, handler) {
            if (element && event) {
              element.removeEventListener(event, handler, false)
            }
          }
        } else {
          return function(element, event, handler) {
            if (element && event) {
              element.detachEvent('on' + event, handler)
            }
          }
        }
      })()
      
      var listener = function() {
        if (fn) {
          fn.apply(this, arguments)
        }
        unbindEvent(el, event, listener)
      }
      bindEvent(el, event, listener)
    },
    hasClass(el, cls) {
      if (!el || !cls) return false
      if (cls.indexOf(' ') != -1) throw new Error('className should not contain space.')
      if (el.classList) {
        return el.classList.contains(cls)
      } else {
        return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1
      }
    },
    addClass(el, cls) {
      if (!el) return
      var curClass = el.className
      var classes = (cls || '').split(' ')

      for (var i = 0, j = classes.length; i < j; i++) {
        var clsName = classes[i]
        if (!clsName) continue

        if (el.classList) {
          el.classList.add(clsName)
        } else {
          if (!this.hasClass(el, clsName)) {
            curClass += ' ' + clsName
          }
        }
      }
      if (!el.classList) {
        el.className = curClass
      }
    },
    removeClass(el, cls) {
      if (!el || !cls) return
      var classes = cls.split(' ')
      var curClass = ' ' + el.className + ' '

      for (var i = 0, j = classes.length; i < j; i++) {
        var clsName = classes[i]
        if (!clsName) continue

        if (el.classList) {
          el.classList.remove(clsName)
        } else {
          if (this.hasClass(el, clsName)) {
            curClass = curClass.replace(' ' + clsName + ' ', ' ')
          }
        }
      }
      
      var trim = function (string) {
        return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '')
      }
      
      if (!el.classList) {
        el.className = trim(curClass)
      }
    },
    
    
    swipeItemCreated() {
      if (!this.ready) return

      clearTimeout(this.reInitTimer)
      this.reInitTimer = setTimeout(() => {
        this.reInitPages()
      }, 100)
    },

    swipeItemDestroyed() {
      if (!this.ready) return

      clearTimeout(this.reInitTimer)
      this.reInitTimer = setTimeout(() => {
        this.reInitPages()
      }, 100)
    },

    translate(element, offset, speed, callback) {
      if (speed) {
        this.animating = true
        element.style.webkitTransition = '-webkit-transform ' + speed + 'ms ease-in-out'
        setTimeout(() => {
          element.style.webkitTransform = `translate3d(${offset}px, 0, 0)`
        }, 50)

        var called = false

        var transitionEndCallback = () => {
          if (called) return
          called = true
          this.animating = false
          element.style.webkitTransition = ''
          element.style.webkitTransform = ''
          if (callback) {
            callback.apply(this, arguments)
          }
        }

        this.once(element, 'webkitTransitionEnd', transitionEndCallback)
        setTimeout(transitionEndCallback, speed + 100) // webkitTransitionEnd maybe not fire on lower version android.
      } else {
        element.style.webkitTransition = ''
        element.style.webkitTransform = `translate3d(${offset}px, 0, 0)`
      }
    },

    reInitPages() {
      var children = this.$children
      this.noDrag = children.length === 1 && this.noDragWhenSingle

      var pages = []
      this.index = this.defaultIndex

      children.forEach((child, index) => {
        pages.push(child.$el)

        this.removeClass(child.$el, 'is-active')

        if (index === this.defaultIndex) {
          this.addClass(child.$el, 'is-active')
        }
      })

      this.pages = pages
    },

    doAnimate(towards, options) {
      if (this.$children.length === 0) return
      if (!options && this.$children.length < 2) return

      var prevPage, nextPage, currentPage, pageWidth, offsetLeft
      var speed = this.speed || 300
      var index = this.index
      var pages = this.pages
      var pageCount = pages.length

      if (!options || towards === 'goto') {
        options = options || {}
        pageWidth = this.$el.clientWidth
        currentPage = pages[index]
        if (towards === 'goto') {
          prevPage = options.prevPage
          nextPage = options.nextPage
        } else {
          prevPage = pages[index - 1]
          nextPage = pages[index + 1]
        }

        if (this.continuous && pages.length > 1) {
          if (!prevPage) {
            prevPage = pages[pages.length - 1]
          }
          if (!nextPage) {
            nextPage = pages[0]
          }
        }
        if (prevPage) {
          prevPage.style.display = 'block'
          this.translate(prevPage, -pageWidth)
        }
        if (nextPage) {
          nextPage.style.display = 'block'
          this.translate(nextPage, pageWidth)
        }
      } else {
        prevPage = options.prevPage
        currentPage = options.currentPage
        nextPage = options.nextPage
        pageWidth = options.pageWidth
        offsetLeft = options.offsetLeft
      }

      var newIndex

      var oldPage = this.$children[index].$el

      if (towards === 'prev') {
        if (index > 0) {
          newIndex = index - 1
        }
        if (this.continuous && index === 0) {
          newIndex = pageCount - 1
        }
      } else if (towards === 'next') {
        if (index < pageCount - 1) {
          newIndex = index + 1
        }
        if (this.continuous && index === pageCount - 1) {
          newIndex = 0
        }
      } else if (towards === 'goto') {
        if (options.newIndex > -1 && options.newIndex < pageCount) {
          newIndex = options.newIndex
        }
      }

      var callback = () => {
        if (newIndex !== undefined) {
          var newPage = this.$children[newIndex].$el
          this.removeClass(oldPage, 'is-active')
          this.addClass(newPage, 'is-active')

          this.index = newIndex

          this.$emit('change', newIndex, index)
        }

        if (prevPage) {
          prevPage.style.display = ''
        }

        if (nextPage) {
          nextPage.style.display = ''
        }
      }

      setTimeout(() => {
        if (towards === 'next') {
          this.translate(currentPage, -pageWidth, speed, callback)
          if (nextPage) {
            this.translate(nextPage, 0, speed)
          }
        } else if (towards === 'prev') {
          this.translate(currentPage, pageWidth, speed, callback)
          if (prevPage) {
            this.translate(prevPage, 0, speed)
          }
        } else if (towards === 'goto') {
          if (prevPage) {
            this.translate(currentPage, pageWidth, speed, callback)
            this.translate(prevPage, 0, speed)
          } else if (nextPage) {
            this.translate(currentPage, -pageWidth, speed, callback)
            this.translate(nextPage, 0, speed)
          }
        } else {
          this.translate(currentPage, 0, speed, callback)
          if (typeof offsetLeft !== 'undefined') {
            if (prevPage && offsetLeft > 0) {
              this.translate(prevPage, pageWidth * -1, speed)
            }
            if (nextPage && offsetLeft < 0) {
              this.translate(nextPage, pageWidth, speed)
            }
          } else {
            if (prevPage) {
              this.translate(prevPage, pageWidth * -1, speed)
            }
            if (nextPage) {
              this.translate(nextPage, pageWidth, speed)
            }
          }
        }
      }, 10)
    },

    next() {
      this.doAnimate('next')
    },

    prev() {
      this.doAnimate('prev')
    },

    goto(newIndex) {
      if (this.index === newIndex) return

      if (newIndex < this.index) {
        this.doAnimate('goto', {
          newIndex,
          prevPage: this.pages[newIndex]
        })
      } else {
        this.doAnimate('goto', {
          newIndex,
          nextPage: this.pages[newIndex]
        })
      }
    },

    doOnTouchStart(event) {
      if (this.noDrag || this.disabled) return

      var element = this.$el
      var dragState = this.dragState
      var touch = event.changedTouches ? event.changedTouches[0] : event

      dragState.startTime = new Date()
      dragState.startLeft = touch.pageX
      dragState.startTop = touch.pageY
      dragState.startTopAbsolute = touch.clientY

      dragState.pageWidth = element.offsetWidth
      dragState.pageHeight = element.offsetHeight

      var prevPage = this.$children[this.index - 1]
      var dragPage = this.$children[this.index]
      var nextPage = this.$children[this.index + 1]

      if (this.continuous && this.pages.length > 1) {
        if (!prevPage) {
          prevPage = this.$children[this.$children.length - 1]
        }
        if (!nextPage) {
          nextPage = this.$children[0]
        }
      }

      dragState.prevPage = prevPage ? prevPage.$el : null
      dragState.dragPage = dragPage ? dragPage.$el : null
      dragState.nextPage = nextPage ? nextPage.$el : null

      if (dragState.prevPage) {
        dragState.prevPage.style.display = 'block'
      }

      if (dragState.nextPage) {
        dragState.nextPage.style.display = 'block'
      }
    },

    doOnTouchMove(event) {
      if (this.noDrag || this.disabled) return

      var dragState = this.dragState
      var touch = event.changedTouches ? event.changedTouches[0] : event

      dragState.currentLeft = touch.pageX
      dragState.currentTop = touch.pageY
      dragState.currentTopAbsolute = touch.clientY

      var offsetLeft = dragState.currentLeft - dragState.startLeft
      var offsetTop = dragState.currentTopAbsolute - dragState.startTopAbsolute

      var distanceX = Math.abs(offsetLeft)
      var distanceY = Math.abs(offsetTop)
      if (distanceX < 5 || (distanceX >= 5 && distanceY >= 1.73 * distanceX)) {
        this.userScrolling = true
        return
      } else {
        this.userScrolling = false
        event.preventDefault()
      }
      offsetLeft = Math.min(Math.max(-dragState.pageWidth + 1, offsetLeft), dragState.pageWidth - 1)

      var towards = offsetLeft < 0 ? 'next' : 'prev'

      if (dragState.prevPage && towards === 'prev') {
        this.translate(dragState.prevPage, offsetLeft - dragState.pageWidth)
      } else if (dragState.nextPage && towards === 'next') {
        this.translate(dragState.nextPage, offsetLeft + dragState.pageWidth)
      } else {
        // when continuous=false and it's the end of each side,
        // limit swipe width with quadratic-functional ease
        // y = (-1 / dk) x (|x| - 2k)
        const k = dragState.pageWidth
        const x = offsetLeft
        const d = 6 // scroll until 1/d of screenWidth at maximum
        offsetLeft = -1 / d / k * x * (Math.abs(x) - 2 * k)
      }
      this.translate(dragState.dragPage, offsetLeft)
    },

    doOnTouchEnd() {
      if (this.noDrag || this.disabled) return

      var dragState = this.dragState

      var dragDuration = new Date() - dragState.startTime
      var towards = null

      var offsetLeft = dragState.currentLeft - dragState.startLeft
      var offsetTop = dragState.currentTop - dragState.startTop
      var pageWidth = dragState.pageWidth
      var index = this.index
      var pageCount = this.pages.length

      if (dragDuration < 300) {
        let fireTap = Math.abs(offsetLeft) < 5 && Math.abs(offsetTop) < 5
        if (isNaN(offsetLeft) || isNaN(offsetTop)) {
          fireTap = true
        }
        if (fireTap) {
          this.$children[this.index].$emit('tap')
        }
      }

      if (dragDuration < 300 && dragState.currentLeft === undefined) return

      if (dragDuration < 300 || Math.abs(offsetLeft) > pageWidth / 2) {
        towards = offsetLeft < 0 ? 'next' : 'prev'
      }

      if (!this.continuous) {
        if ((index === 0 && towards === 'prev') || (index === pageCount - 1 && towards === 'next')) {
          towards = null
        }
      }

      if (this.$children.length < 2) {
        towards = null
      }

      this.doAnimate(towards, {
        offsetLeft: offsetLeft,
        pageWidth: dragState.pageWidth,
        prevPage: dragState.prevPage,
        currentPage: dragState.dragPage,
        nextPage: dragState.nextPage
      })

      this.dragState = {}
    },

    dragStartEvent(event) {
      if (this.prevent) {
        event.preventDefault()
      }
      if (this.propagation) {
        event.stopPropagation()
      }
      if (this.animating) return
      this.dragging = true
      this.userScrolling = false
      this.doOnTouchStart(event)
    },

    dragMoveEvent(event) {
      if (!this.dragging) return
      this.doOnTouchMove(event)
    },

    dragEndEvent(event) {
      if (this.userScrolling) {
        this.dragging = false
        this.dragState = {}
        return
      }
      if (!this.dragging) return
      this.doOnTouchEnd(event)
      this.dragging = false
    },
    
    transitionend(event) {
    }
  },
  created() {
    this.dragState = {}
  },
  mounted() {
    this.ready = true

    if (this.auto > 0) {
      this.timer = setInterval(() => {
        if (!this.dragging && !this.animating) {
          this.next()
        }
      }, this.auto)
    }

    this.reInitPages()
  },
  destroyed() {
    if (this.timer) {
      clearInterval(this.timer)
      this.timer = null
    }
    if (this.reInitTimer) {
      clearTimeout(this.reInitTimer)
      this.reInitTimer = null
    }
  }
}
</script>