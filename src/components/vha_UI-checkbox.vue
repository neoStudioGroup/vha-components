<style lang="stylus">
@import "../assets/stylus/method.styl"
@import "../assets/stylus/mixin.styl"
// UI组件 - 多选框
.vha_UI-checkbox
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
    .vha_icon-checkbox
      font-size rpx(42)
  .ui-r-unselect
    color #bbb
// ------------------------------
// UI组件 - 多选框-颜色-信息
.vha_UI-checkbox
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
  <label class="vha_UI-checkbox _dif _aic">
    <input 
      class="ui-r-input" 
      type="checkbox" 
      
      v-bind="$attrs"
      v-on="inputListeners"
      
      :value="value" 
      :checked="state_checked" 
    >
    
    <!-- 如果两个插槽内都没有内容就使用class切换状态 -->
    <div 
      class="ui-r-class _dif _aic"
      v-if="!this.$slots.slotSelectContent && !this.$slots.slotUnselectContent"
      
      :class="[
        this.state_checked ? this.selectClass : this.unSelectClass,
        this.color === 'none' ? '' : 'color-' + this.color
      ]"
    >
      <slot name="content">
        <span class="ui-r-c-tleft" v-if="textLeft">{{textLeft}}</span>
        <i :class="icon || 'vha_icon-checkbox'"></i>
        <span class="ui-r-c-tright" v-if="text">{{text}}</span>
      </slot>
    </div>
    
    <!-- 否则根据插槽的内容切换状态显示 -->
    <div 
      class="ui-r-slot" 
      v-else
    >
      <slot name="slotSelectContent" v-if="this.state_checked">
      </slot>
      <slot name="slotUnselectContent" v-else>
      </slot>
    </div>
    
  </label>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'vhaUIcheckbox',
  inheritAttrs: false,
  model: {
    prop: 'modelVal',
    event: 'change'
  },
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
    
    checked: Boolean,
    value: {
      type: String,
    },
    modelVal: {
      default: false
    }
  },
  data() {
    return {
      state_checked: false,
    }
  },
  computed: {
    inputListeners: function () {
      var vm = this
      return Object.assign({},
        this.$listeners,
        {
          change: function (event) {
            // 改变选中事件被触发
            vm.state_checked = event.target.checked
          }
        }
      )
    }
  },
  watch: {
    // 当选中状态改变时更新数据
    'state_checked': function () {
      // 这里也要判断是一个还是多个 checkbox
      if (this.modelVal instanceof Array) {
        const newVal = [...this.modelVal]
        if (this.state_checked) {
          if (!newVal.includes(this.value)) {
            newVal.push(this.value)
          }
        } else {
          newVal.splice(newVal.indexOf(this.value), 1)
        }
        this.$emit('change', newVal)
      } else {
        this.$emit('change', this.state_checked)
      }
    }
  },
  mounted() {
    // 如果默认选中为真, 就置状态, 否则根据是否为一个还是多个 checkbox设置状态
    setTimeout(() => {
      if (this.checked) {
        this.state_checked = this.checked
      } else {
        if (this.modelVal instanceof Array) {
          this.state_checked = this.modelVal.includes(this.value)
        } else {
          this.state_checked = this.modelVal
        }
      }
    }, 10)
  }
}
</script>