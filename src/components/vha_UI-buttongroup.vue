<style lang="stylus">
@import "../assets/stylus/method.styl"
@import "../assets/stylus/mixin.styl"
// UI组件 - 按钮组
// .vha_UI-buttongroup
// ------------------------------
// UI组件 - 按钮组-风格-ios
.vha_UI-buttongroup.style-ios
  .vha_UI-button
    padding rpx(14) rpx(20)
    flex 1
    height auto
    border-radius 0
    border 1px solid Info_
    color Info_
    background-color transparent
    &:first-child
      border-radius rpx(8) 0 0 rpx(8)
      border-right 0
    &:last-child
      border-radius 0 rpx(8) rpx(8) 0
      border-left 0
  .vha_UI-button.action-ios
    color white_
    background-color Info_
// ------------------------------
// UI组件 - 按钮组-风格-顶部线条
.vha_UI-buttongroup.style-topline
  .vha_UI-button
    padding rpx(20)
    flex 1
    height auto
    border-radius 0
    color Info_
    border-top 2px solid transparent
    background-color transparent
    opacity .5
    &:active
      background-color transparent
  .vha_UI-button.action-topline
    color Info_
    border-top 2px solid Info_
    opacity 1
// ------------------------------
// UI组件 - 按钮组-风格-底部线条
.vha_UI-buttongroup.style-bottomline
  .vha_UI-button
    padding rpx(20)
    flex 1
    height auto
    border-radius 0
    color Info_
    border-bottom 2px solid transparent
    background-color transparent
    opacity .5
    &:active
      background-color transparent
  .vha_UI-button.action-bottomline
    color Info_
    border-bottom 2px solid Info_
    opacity 1
</style>
<template>
  <div 
    class="vha_UI-buttongroup _df"
    :class="[
      this.groupStyle ? 'style-' + this.groupStyle : ''
    ]"
  >
    <slot></slot>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'vhaUIbuttongroup',
  props: {
    value: Array,
    groupStyle: String,
    selectMode: {
      type: String,
      default: 'single',
      validator(value) {
        return [
          'single',
          'multiple'
        ].indexOf(value) > -1;
      }
    },
    selectClass: String,
    selectData: Array
  },
  data() {
    return {
      temp_defaultSelect: [{select:true}],
      temp_selectClass: '',
      buttonData: [],
      buttonState: [],
      changeStateEvent: {
        event: undefined, 
        id: undefined,
        note: ''
      }
    }
  },
  watch: {
    // 深度侦听来自button的事件数据改动
    'changeStateEvent': {
      handler: function () {
        // 如果是single单一模式就先设置所有状态false
        if (this.selectMode === 'single') {
          this.buttonState.forEach(element => {
            element.select = false
          })
        }
        
        // 修改buttonState状态
        this.buttonState[this.changeStateEvent.id].select = !this.buttonState[this.changeStateEvent.id].select
        this.buttonState[this.changeStateEvent.id].id = this.changeStateEvent.id
        this.buttonState[this.changeStateEvent.id].note = this.changeStateEvent.note
        
        // 触发事件
        this.$emit('click', this.changeStateEvent.event, {
          instance: this.buttonData[this.changeStateEvent.id],
          id: this.changeStateEvent.id,
          note: this.changeStateEvent.note
        })
      },
      deep: true 
    },
    // 深度侦听按钮状态变化 应用selectClass 及value
    'buttonState': {
      handler: function () {
        // 根据值设置选中状态
        this.buttonState.forEach((element, index) => {
          if (element.select) {
            this.buttonData[index].$data.group_selectClass = this.temp_selectClass
          } else {
            this.buttonData[index].$data.group_selectClass = ''
          }
        })
        
        //根据选中值 设置动态数据
        if (this.value) {
          this.value.splice(0, this.value.length)
          this.buttonState.forEach((element, index) => {
            if (element.select) {
              this.value.push({
                id: index,
                note: element.note || ''
              })
            }
          })
        }
      },
      deep: true 
    }
  },
  created() {
    // 如果组风格不为空就'action-' 否则如果没有组风格 就有selectClass类就selectClass类否则为空
    if (typeof this.groupStyle != 'undefined') {
      this.temp_selectClass = 'action-' + this.groupStyle
    } else {
      this.temp_selectClass = this.selectClass || ''
    }
  },
  mounted() {
    // 将向后代vha_UI-button实例记录并赋予ID
    setTimeout(() => {
      this.$children.forEach((element, index) => {
        if (element.$el.className.indexOf('vha_UI-button') != -1) {
          let isselect
          if (this.value) {
            isselect = this.value[index] ? this.value[index].select : ''
          } else {
            isselect = this.temp_defaultSelect[index] ? this.temp_defaultSelect[index].select : ''
          }
          this.buttonData.push(element)
          this.buttonState.push({event:undefined,select: isselect || false,note:''})
          element.$data.group_id = index
        }
      })
    }, 10)
  }
}
</script>