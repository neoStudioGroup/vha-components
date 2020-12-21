<style lang="stylus">
@import "../../assets/stylus/method.styl"
@import "../../assets/stylus/mixin.styl"
// UI组件 - 上拉菜单
.vha_UI-actionsheet
  width w-rpx(60)
  margin-bottom rpx(20)
  .ui-a-head
    margin-bottom rpx(20)
    width 100%
    border-radius rpx(20)
    background-color #fff
    box-shadow 0 0 rpx(20) rgba(0,0,0,0.05)
    .ui-a-h-box
      border-bottom-line(1px solid #ddd)
    .ui-a-h-title, .ui-a-h-text
      text-align center
    .ui-a-h-title
      padding rpx(26) rpx(20)
      font-size rpx(30)
      color #999
    .ui-a-h-text
      padding 0 rpx(20) rpx(20)
      font-size rpx(26)
      overflow hidden
      display -webkit-box
      -webkit-line-clamp 20
      -webkit-box-orient vertical
      white-space pre-wrap
    .ui-a-h-buttons
      .vha_UI-button
        font-size rpx(30)
      .vha_UI-subview
        padding rpx(26) rpx(20)
        &:after
          border-color #ddd !important
  .ui-a-cancel
    padding rpx(26) rpx(20)
    width 100%
    font-size rpx(30)
    font-weight bold
    border-radius rpx(20)
    background-color #fff
    box-shadow 0 0 rpx(20) rgba(0,0,0,0.05)
</style>
<template>
  <vha-view class="vha_UI-actionsheet" axis="y" size="none">
    <div class="ui-a-head">
      <div class="ui-a-h-box">
        <p class="ui-a-h-title _oneEllipsis">{{option.title}}</p>
        <pre class="ui-a-h-text" v-if="option.text">{{option.text}}</pre>
      </div>
      <vha-view class="ui-a-h-buttons" axis="y" type="grid" gridLine>
        <vha-subview v-for="(button, index) in option.buttons" :key="index">
          <vha-button type="base" color="info" size="full" @click="onClick(index)">{{button}}</vha-button>
        </vha-subview>
      </vha-view>
    </div>
    <vha-button class="ui-a-cancel" type="base" color="info" size="full" @click="cancel()">{{option.cancelText}}</vha-button>
  </vha-view>
</template>
<script type="text/ecmascript-6">
import vhaView from "../vha_UI-view";
import vhaSubview from "../vha_UI-subview";
import vhaButton from "../vha_UI-button";
export default {
  name: 'vhaUIactionsheet',
  data() {
    return {
      timeHandle: 0,
      option: {
        title: '标题',
        text: '',
        buttons: undefined,
        cancelText: '取消',
        callback: undefined
      }
    }
  },
  components: {
    vhaView,
    vhaSubview,
    vhaButton,
  },
  methods: {
    show: function () {
      this.$parent.show()
    },
    cancel: function () {
      this.$parent.close()
    },
    onClick: function (index) {
      this.option.callback(index)
      this.cancel()
    }
  }
}
</script>
