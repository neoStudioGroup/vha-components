<style lang="stylus">
@import "../../assets/stylus/method.styl"
@import "../../assets/stylus/mixin.styl"
// UI组件 - 信息提示
.vha_UI-toast
  padding rpx(20) rpx(30)
  max-width w-rpx(60)
  border-radius rpx(10)
  color #fff
  background-color rgba(0,0,0,0.7)
  .ui-t-i
    margin rpx(30)
    font-size rpx(60)
  .ui-t-pre
    white-space pre-wrap
</style>
<template>
  <vha-view 
    class="vha_UI-toast ui-t-text" 
    axis="y"
    align="center"
  >
    <i class="ui-t-i" :class="option.icon" v-if="option.icon"></i>
    <pre class="ui-t-pre" :style="{textAlign: option.textAlign}">{{text}}</pre>
  </vha-view>
</template>
<script type="text/ecmascript-6">
import vhaView from "../vha_UI-view";
export default {
  name: 'vhaUItoast',
  data() {
    return {
      timeHandle: 0,
      text: '',
      option: {
        pos: 'center',
        icon: '', 
        textAlign: '', 
        duration: 1500
      }
    }
  },
  components: {
    vhaView,
  },
  methods: {
    show: function (text) {
      this.text = text
      
      switch (this.option.pos) {
        case 'top':
          this.$parent.$refs.content.style.marginTop = this.vha_rpx(60)
          break
        case 'bottom':
          this.$parent.$refs.content.style.marginBottom = this.vha_rpx(60)
          break
      }
      
      this.$parent.show()
      
      this.timeHandle = setTimeout(() => {
        this.hide()
      }, this.option.duration)
    },
    hide: function () {
      this.$parent.close()
      clearTimeout(this.timeHandle)
    }
  },
  mounted() {
    this.$nextTick(function () {
      this.$parent.$el.style.pointerEvents = 'none'
    })
  }
}
</script>