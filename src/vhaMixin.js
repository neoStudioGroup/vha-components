const vhaMixin = {
  install(Vue, options) {
    
    Vue.mixin({
      beforeCreate() {
        //实例创建之前
      },
      data() {
        //动态数据
        return {
        }
      },
      components: {
        //组件 - 引入或定义
      },
      computed: {
        //计算 - 缓存结果,变动时执行
      },
      methods: {
        //方法 - 进入页面创建
        vha_rpx: function (px) {
          return (px / 2 / 75 ) + 'rem'
        },
        vha_w_rpx: function (px) {
          return `calc(100vw - ${this.vha_rpx(px)})`
        },
        vha_h_rpx: function (px) {
          return `calc(100vh - ${this.vha_rpx(px)})`
        }
      },
      watch: {
        //观察 - 数据或方法变动
      },
      mounted() {
        //挂载实例后 - this.$el存在
      },
      beforeDestroy() {
        //销毁前 - 实例仍然完全可用
      }
    })
    
  }
}
export default vhaMixin