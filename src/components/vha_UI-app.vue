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
    vhaAppEvent: function (event) {
      // console.log('vhaAppEvent：', event.detail)
      this.temp_keepAlive = event.detail.keepAlive
      
      if (event.detail.callFunc === 'push') {
        this.$router.push(event.detail.value)
      } else if (event.detail.callFunc === 'go') {
        this.$router.go(event.detail.value)
      }
    }
  },
  mounted() {
    // vhaAppEvent事件 处理路由转跳
    window.addEventListener('vha:AppEvent', this.vhaAppEvent)
    
    if (this.nobg) {
      this.$el.style.background = 'none'
    }
  },
  beforeDestroy() {
    // 注销处理路由转跳
    window.removeEventListener('vha:AppEvent', this.vhaAppEvent)
  }
}
</script>