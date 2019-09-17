<style lang="stylus">
// UI组件 - vha主页面
.vha_UI-app
  color #444
  width 100%
  height 100%
  overflow hidden
  background url('../assets/images/bg.png')
</style>
<template>
  <div id="app" class="vha_UI-app">
    <slot></slot>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'vhaUIapp',
  beforeCreate() {
    // 处理所有路由缓存
    let temp_prockeepAlive = () => {
      // 递归遍历所有路由对象
      let arrs = [] 
      let getArrays = function(arr) {
        arr.forEach(element => {
          arrs.push(element)
          if (element.children) {
            getArrays(element.children)
          }
        })
      }
      getArrays(this.$router.options.routes)
      
      // 根据路由对象keepAlive值设置缓存
      let temp_include = []
      let temp_exclude = []
      arrs.forEach(element => {
        if (typeof element.meta != 'undefined' && typeof element.meta.keepAlive != 'undefined') {
          if (element.meta.keepAlive) {
            temp_include.push(element.component.name)
          } else {
            temp_exclude.push(element.component.name)
          }
        }
      })
      this.$vhaComponents.routerview.include = temp_include
      this.$vhaComponents.routerview.exclude = temp_exclude
      // console.log(temp_include)
      // console.log(temp_exclude)
    }
    temp_prockeepAlive()
    // 如果路由变动重新处理缓存信息
    this.$router.beforeEach((to, from, next) => {
      if (typeof this.temp_keepAlive != 'undefined') {
        to.meta.keepAlive = this.temp_keepAlive
        this.temp_keepAlive = undefined
      }
      temp_prockeepAlive()
      next()
    })
    
  },
  props: {
    nobg: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      temp_keepAlive: undefined
    }
  },
  methods: {
    savePosition: function (fromRoute) {
      // 如果离开的路由页面设置了缓存, 就将下面每个vha_UI-scrollview的position记录到路由内
      let temp_meta = fromRoute.meta
      if (typeof temp_meta.keepAlive != 'undefined' && temp_meta.keepAlive) {
        temp_meta.keepAlivePosition = []
        
        let temp_scrollview = this.$el.querySelectorAll('.vha_UI-scrollview')
        let temp_els = []
        
        temp_scrollview.forEach((element, index) => {
          if (element.scrollLeft + element.scrollTop > 0) {
            temp_els.push({id:index , x: element.scrollLeft, y: element.scrollTop})
          }
        })
        
        // console.log('保存', fromRoute.path, temp_scrollview, temp_els)
        temp_meta.keepAlivePosition = temp_els
      } else {
        delete temp_meta.keepAlivePosition
      }
    },
    setPosition: function (el, again) {
      // 如果即将进入的路由页面设置了缓存, 就读取路由内position记录到每个vha_UI-scrollview
      let temp_meta = this.$route.meta
      if (typeof temp_meta.keepAlive != 'undefined' && temp_meta.keepAlive) {
        if (typeof temp_meta.keepAlivePosition != 'undefined') {
          // console.log('读取', this.$route.path, temp_meta.keepAlivePosition)
          if (temp_meta.keepAlivePosition) {
            let temp_scrollview = el.querySelectorAll('.vha_UI-scrollview')
            temp_meta.keepAlivePosition.forEach(element => {
              if (temp_scrollview[element.id]) {
                // console.log('设置', element)
                temp_scrollview[element.id].scrollLeft = element.x
                temp_scrollview[element.id].scrollTop = element.y
              }
            })
          }
        }
      }
      // 读取两次确保设置滚动条成功
      if (again) {
        setTimeout(() => {
          this.setPosition(el)
        }, 1)
      }
    },
    vhaAppEvent: function (event) {
      // console.log('vhaAppEvent：', event.detail)
      this.temp_keepAlive = event.detail.keepAlive
      
      if (event.detail.callFunc === 'push') {
        this.$router.push(event.detail.value)
      } else if (event.detail.callFunc === 'go') {
        this.$router.go(event.detail.value)
      }
    },
    vhaRouterAnimateEnter: function (event) {
      this.setPosition(event.detail, true)
    }
  },
  watch: {
    //观察 - 数据或方法变动
    '$route': function (to, from) {
      // 页面转跳前保存滚动条位置
      this.savePosition(from)
    }
  },
  mounted() {
    // vhaAppEvent事件 处理路由转跳
    window.addEventListener('vha:AppEvent', this.vhaAppEvent)
    window.addEventListener('vha:RouterAnimateEnter', this.vhaRouterAnimateEnter)
    
    if (this.nobg) {
      this.$el.style.background = 'none'
    }
  },
  beforeDestroy() {
    // 注销处理路由转跳
    window.removeEventListener('vha:AppEvent', this.vhaAppEvent)
    window.removeEventListener('vha:RouterAnimateEnter', this.vhaRouterAnimateEnter)
  }
}
</script>