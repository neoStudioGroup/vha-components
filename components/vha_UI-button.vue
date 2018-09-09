<style lang="stylus">
@import "../assets/stylus/method.styl"

// UI组件-按钮
.vha_UI-button
  cursor pointer
  margin 0
  padding 0
  border none
  font-size rem(10)
  text-align center
  white-space nowrap
  text-overflow ellipsis
  box
  overflow hidden
  background-color transparent
    
.vha_UI-button_type-normal
  padding rem(18)
  min-width rem(22)
  min-height rem(42)
  border 1px solid #c8c8c8
  border-radius 3px
  color #333
  background-color #f8f8f8
  &:active
    color #555
    border-color #ddd
    background-color #fafafa
    box-shadow inset 0 1px 4px rgba(0, 0, 0, 0.1)

</style>
--------------------------------------------------------------------------------
<template>
  <button class="vha_UI-button" :class="type === 'base' ? '' : 'vha_UI-button_type-' + type">
    <slot></slot>
  </button>
</template>
--------------------------------------------------------------------------------
<script type="text/ecmascript-6">
export default {
  name: 'vha_UI-button',
  beforeCreate() {
    //实例创建之前
  },
  props: {
    //父组件参数
    type: {
      type: String,
      default: 'normal'
    }
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
    //方法 - 每次进入页面创建
  },
  watch: {
    //观察 - 数据或方法
  },
  created() {
    //实例创建完成后
  },
  mounted() {
    //挂载实例后 - this.el存在
  },
  updated() {
    // 数据变动更新后 - 最好使用计算属性或 watch
  },
  beforeDestroy() {
    //销毁前 - 实例仍然完全可用
  },
  destroyed() {
    //销毁后
  }
}
</script>