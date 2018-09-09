<style lang="stylus">
@import "../assets/stylus/method.styl"

// UI组件-内容
.vha_UI-routerview
  flex 1
  .vha_UI-content
    height 100%
  .ui-c-center
    position relative
    box-shadow 0 0 34px rgba(0,0,0,0.1)
    >*
      position absolute
      top 0
      width 100%
      height 100%
      overflow hidden
      background-color #fff
      box-shadow 0 0 40px rgba(0,0,0,0.3)
      // transition transform 10000ms
      transition transform 300ms cubic-bezier(0,0,0,1)

    .slide-in-enter //进场开始值
      transform translate(100vw, 0)
    .slide-in-enter-to //进场目标值
      // box-shadow 0 0 50px rgba(0,0,0,0.3)
      transform translate(0, 0)
    .slide-in-leave //退场开始值
      transform translate(0, 0)
    .slide-in-leave-to //退场目标值
      transform translate(rem(-200), 0)
    
    .slide-out-enter //进场开始值
      transform translate(rem(-200), 0)
    .slide-out-enter-to //进场目标值
      // box-shadow 0 0 50px rgba(0,0,0,0.3)
      transform translate(0, 0)
    .slide-out-leave //退场开始值
      transform translate(0, 0)
    .slide-out-leave-active //过程中保持的状态
      z-index 1
    .slide-out-leave-to //退场目标值
      transform translate(100vw, 0)

    // .slide-in-enter //进场开始值
    //   transform translate(100%, 0)
    // .slide-in-enter-to //进场目标值
    //   // box-shadow 0 0 50px rgba(0,0,0,0.3)
    // .slide-in-leave //退场开始值
    //   // transform translate(rem(-200), 0)
    // .slide-in-leave-to //退场目标值
    //   transform translate(rem(-200), 0)
    
    // .slide-out-enter //进场开始值
    //   transform translate(-100%, 0)
    // .slide-out-enter-to //进场目标值
    //   // box-shadow 0 0 50px rgba(0,0,0,0.3)
    // .slide-out-leave //退场开始值
    //   // transform translate(rem(200), 0)
    // .slide-out-leave-to //退场目标值
    //   transform translate(rem(200), 0)
      

</style>
--------------------------------------------------------------------------------
<template>
  <div class="vha_UI-routerview">
    <vha-content>
      <transition :name="transitionName">
        
        <router-view></router-view>
  
        <!-- <keep-alive>
          <router-view v-if='$route.meta.keepAlive'></router-view> 
        </keep-alive>
        <router-view v-if='!$route.meta.keepAlive'></router-view> -->
        
      </transition>
    </vha-content>
  </div>
</template>
--------------------------------------------------------------------------------
<script type="text/ecmascript-6">
export default {
  name: 'vha_UI-routerview',
  beforeCreate() {
    //实例创建之前
  },
  props: {
    //父组件参数
  },
  data() {
    //动态数据
    return {
      transitionName: 'slide-in'
    }
  },
  components: {
    //组件 - 引入或定义
  },
  computed: {
    //计算 - 缓存结果,变动时执行
  },
  methods: {
    //方法 - 每次进入页面创建
  },
  watch: {
    //观察 - 数据或方法
    '$route' (to, from) {
      // console.log('现在路由:',to.path.split('/')[1],'来自路由:',from.path.split('/')[1],'现在的动画:',this.transitionName)
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length

      // this.transitionName = to.path.split('/')[1] != "" ? 'slide-in' : 'slide-out'
      this.transitionName = toDepth < fromDepth ? 'slide-out' : 'slide-in'
    }
  },
  created() {
    //实例创建完成后
  },
  mounted() {
    //挂载实例后 - this.el存在
  },
  beforeDestroy() {
    //销毁前 - 实例仍然完全可用
  },
  destroyed() {
    //销毁后
  }
}
</script>