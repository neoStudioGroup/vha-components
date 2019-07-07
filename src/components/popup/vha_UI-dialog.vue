<style lang="stylus">
@import "../../assets/stylus/method.styl"
@import "../../assets/stylus/mixin.styl"
// UI组件 - 对话框
.vha_UI-dialog
  width rpx(560)
  border-radius rpx(20)
  background-color rgba(255,255,255,.9)
  box-shadow 0 0 rpx(20) rgba(0,0,0,0.05)
  .ui-d-head
    padding rpx(30) 0
    .ui-d-h-title, .ui-d-h-text
      text-align center
    .ui-d-h-title
      margin rpx(2) rpx(60) 0
      font-size rpx(36)
      font-weight 700
    .ui-d-h-text
      margin rpx(6) rpx(30) rpx(2)
      font-size rpx(26)
      word-break break-word
      overflow hidden
      display -webkit-box
      -webkit-line-clamp 20
      -webkit-box-orient vertical
    .ui-d-h-input
      position relative
      margin rpx(10) rpx(30) 0
      textarea
        height rpx(180)
      .ui-d-h-i-count
        position absolute
        right rpx(12)
        bottom rpx(10)
  
  .vha_UI-view
    border-top-line(1px solid #ddd)
    .vha_UI-subview
      &:after
        border-color #ddd !important
  .vha_UI-button
    height rpx(90)
    font-size rpx(30)
    
  .diyShowButton
    width 100%
    height 100%
    font-size rpx(30)
    color #4a90e2
// UI组件 - 对话框-tag-input
.vha_UI-dialog.tag-input
  .ui-d-h-input
    padding 0 rpx(26)
// UI组件 - 对话框-tag-textarea
// .vha_UI-dialog.tag-textarea
.vhaAnimateDialog-enter-active //进入路由-上层-进场 过程中保持的状态
  transition all 300ms
.vhaAnimateDialog-enter //进场开始值
  transform scale(1.3)
  opacity 0
.vhaAnimateDialog-enter-to //进场目标值
  transform scale(1)
.vhaAnimateDialog-leave-active //进入路由-下层-退场 过程中保持的状态
  transition all 300ms
.vhaAnimateDialog-leave //退场开始值
.vhaAnimateDialog-leave-to //退场目标值
  transform scale(.8)
  opacity 0
</style>
<template>
  <transition name="vhaAnimateDialog" @leave="leave">
    <vha-view class="vha_UI-dialog" :class="option.textarea ? 'tag-textarea' : 'tag-input'" axis="y" size="none" v-if="visible">
      <div class="ui-d-head">
        <p class="ui-d-h-title _oneEllipsis" v-if="title">{{title}}</p>
        <p class="ui-d-h-text" v-if="text">{{text}}</p>
        <div class="ui-d-h-input" v-if="inputText">
          <vha-input 
            :tag="option.textarea ? 'textarea' : 'input'"
            v-model="inputTextValue" 
            :placeholder="inputText" 
            :maxlength="option.maxlength" 
            autofocus 
            size="full"
          >
          </vha-input>
          <div class="ui-d-h-i-count" v-if="option.textarea && option.maxlength">{{inputTextLength}}/{{option.maxlength}}</div>
        </div>
      </div>
      <vha-view type="grid" gridLine>
        <vha-subview v-for="(button, index) in option.buttons" :key="index">
          <vha-button type="base" color="info" size="full" @click="onClick(index)">{{button}}</vha-button>
        </vha-subview>
        <vha-subview v-if="option.diyShowButton">
          <a class="diyShowButton _df" :href="'tel:' + option.diyShowButton"><span class="_fma">拨打</span></a>
        </vha-subview>
      </vha-view>
    </vha-view>
  </transition>
</template>
<script type="text/ecmascript-6">
import vhaView from "../vha_UI-view";
import vhaSubview from "../vha_UI-subview";
import vhaButton from "../vha_UI-button";
import vhaInput from "../vha_UI-input";
import utils from "../utils";
export default {
  name: 'vhaUIdialog',
  data() {
    return {
      timeHandle: 0,
      visible: false,
      title: '信息',
      text: '',
      inputText: '',
      inputTextValue: '',
      inputTextLength: 0,
      option: {
        textarea: false,
        hideCount: false,
        maxlength: undefined,
        buttons: undefined,
        diyShowButton: '',
        callback: undefined,
      }
    }
  },
  components: {
    vhaView,
    vhaSubview,
    vhaButton,
    vhaInput
  },
  methods: {
    leave: function (el) {
      this.$parent.$el.style.pointerEvents = 'none'
      utils.checkClass(el, '-leave-active').then(() => {
        this.$parent.close()
      })
    },
    show: function () {
      this.$parent.show()
      this.visible = true
    },
    cancel: function () {
      this.visible = false
      this.$parent.mask.show = false
    },
    onClick: function (index) {
      if (this.inputText) {
        this.option.callback(index, this.inputTextValue)
        return
      }
      this.option.callback(index)
    }
  },
  watch: {
    //观察 - 数据或方法变动
    'inputTextValue' : function () {
      if (this.option.textarea && this.option.maxlength) {
        this.inputTextLength = this.inputTextValue.length
      }
    }
  }
}
</script>