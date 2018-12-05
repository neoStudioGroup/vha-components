<style lang="stylus">
@import "../assets/stylus/method.styl"
@import "../assets/stylus/mixin.styl"
// UI组件 - 单选框
.vha_UI-radio
  .ui-r-input
    display none
  .ui-r-class
    transition all .2s
    .ui-r-c-tleft
      color #444
      margin-right rpx(10)
    .ui-r-c-tright
      color #444
      margin-left rpx(10)
    .vha_icon-radio
      font-size rpx(42)
  .ui-r-unselect
    color #bbb
// ------------------------------
.vha_UI-radio
// UI组件 - 单选框-颜色-信息
  .ui-r-class.action-select.color-success
    color Success_
  .ui-r-class.action-unSelect.color-success
    color #bbb
  .ui-r-class.action-select.color-info
    color Info_
  .ui-r-class.action-unSelect.color-info
    color #bbb
  .ui-r-class.action-select.color-warning
    color Warning_
  .ui-r-class.action-unSelect.color-warning
    color #bbb
  .ui-r-class.action-select.color-error
    color Error_
  .ui-r-class.action-unSelect.color-error
    color #bbb
// UI组件 - 按钮-颜色-基本
  .ui-r-class.action-select.color-dark
    color Dark_
  .ui-r-class.action-unSelect.color-dark
    color #bbb
  .ui-r-class.action-select.color-calm
    color Calm_
  .ui-r-class.action-unSelect.color-calm
    color #fff
  .ui-r-class.action-select.color-stable
    color Stable_
  .ui-r-class.action-unSelect.color-stable
    color #444
  .ui-r-class.action-select.color-light
    color Light_
  .ui-r-class.action-unSelect.color-light
    color #444
</style>
<template>
  <label 
    class="vha_UI-radio _dif _aic"
  >
    <input 
      class="ui-r-input" 
      type="radio" 
      ref="inputRadio" 
      
      v-bind="$attrs"
      :value="value"
      v-on="inputListeners"
    >
    
    <!-- 如果两个插槽内都没有内容就使用class切换状态 -->
    <div 
      class="ui-r-class _dif _aic"
      v-if="!this.$slots.slotSelectContent && !this.$slots.slotUnselectContent"
      :class="[
        this.temp_checked ? this.selectClass : this.unSelectClass,
        this.color === 'none' ? '' : 'color-' + this.color
      ]"
    >
      <slot name="classContent">
        <span class="ui-r-c-tleft" v-if="textLeft">{{textLeft}}</span>
        <i :class="icon || 'vha_icon-radio'"></i>
        <span class="ui-r-c-tright" v-if="text">{{text}}</span>
      </slot>
    </div>
    
    <!-- 否则根据插槽的内容切换状态显示 -->
    <div class="ui-r-slot" v-else>
      <slot name="slotSelectContent" v-if="this.temp_checked">
      </slot>
      <slot name="slotUnselectContent" v-else>
      </slot>
    </div>
  </label>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'vhaUIradio',
  inheritAttrs: false,
  props: {
    selectClass: {
      type: String,
      default: 'action-select'
    },
    unSelectClass: {
      type: String,
      default: 'action-unSelect'
    },
    color: {
      type: String,
      default: 'info',
      validator(value) {
        return [
          'none',
          'success',
          'info',
          'warning',
          'error',
          'dark',
          'calm',
          'stable',
          'light'
        ].indexOf(value) > -1;
      }
    },
    icon: String,
    textLeft: String,
    text: String,
    
    value: [String, Boolean],
    checked: Boolean
  },
  data() {
    return {
      temp_checked: false
    }
  },
  computed: {
    inputListeners: function () {
      var vm = this
      return Object.assign({},
        this.$listeners,
        {
          input: function (event) {
            vm.$emit('input', event.target.value)
          },
          change: function (event) {
            // 触发改变事件
            vm.$emit('change', event)
            // 当改变发生, 向同类name发送RadioStateChange事件
            let temp_allradio = vm.$root.$el.querySelectorAll(`input[name=${vm.$refs.inputRadio.name}]`)
            temp_allradio.forEach(element => {
              element.dispatchEvent(new CustomEvent('RadioStateChange'))
            })
          }
        }
      )
    }
  },
  methods: {
    RadioStateChange: function (event) {
      //收到同name状态改变事件
      this.temp_checked = event.target.checked
    }
  },
  mounted() {
    //设置默认选中状态
    setTimeout(() => {
      this.$refs.inputRadio.checked = this.checked
      this.temp_checked = this.$refs.inputRadio.checked
    }, 10)
    
    this.$refs.inputRadio.addEventListener('RadioStateChange', this.RadioStateChange)
  },
  beforeDestroy() {
    this.$refs.inputRadio.removeEventListener('RadioStateChange', this.RadioStateChange)
  }
}
</script>