import Vue from 'vue'
import vhaPopup from './vha_UI-popup'
import vhaToast from './vha_UI-toast'
import vhaDialog from './vha_UI-dialog'
import vhaActionsheet from './vha_UI-actionsheet'
import vhaPopover from './vha_UI-popover'

let popups = []

function _vhaPopup(mount, targetEl, pushPopup) {
  if (pushPopup === undefined) {
    pushPopup = true
  }
  
  let popupInstance = new Vue(vhaPopup).$mount()
  if (targetEl) {
    popupInstance.option.targetEl = targetEl
    targetEl.appendChild(popupInstance.$el)
    popupInstance.$parent = targetEl
  } else {
    document.body.appendChild(popupInstance.$el)
  }
  
  //如果实例存在就直接添加否则创建实例后添加
  let subInstance = mount.$el ? mount : new Vue(mount).$mount()
  // 注: new Vue的时候就会调用mounted() 这时还没设置$parent 需在this.$nextTick内才能获取$parent
  subInstance.$parent = popupInstance
  //如果this存在就把$store指向绑定
  if (typeof this != 'undefined') {
    subInstance.$store = this.$store
  }
  popupInstance.$refs.content.appendChild(subInstance.$el)
  //默认mounted在$mount创建时就已经被调用导致el获取失败，使用回调函数在代码执行完毕后再调用通知el可以使用
  popupInstance._mounted()
  
  if (pushPopup) {
    popups.push(popupInstance)
  }
  return popupInstance
}

function _vhaGetPopups() {
  // 如果pupup已经设置关闭标记 就删除
  let new_popups = []
  for(let i = popups.length - 1; i >= 0; i--){
    if (popups[i].$el.getAttribute("data-close") != 'true') {
      new_popups.push(popups[i])
    }
  }
  if (new_popups.length === 0) {
    popups = []
  }
  return new_popups.reverse()
}

// --------------------

let creatDialog = () => {
  let temp_toastInstance = new Vue(vhaDialog).$mount()
  let temp_popupInstance = _vhaPopup(temp_toastInstance)
  
  //如果已经有一个弹框在底层就不显示自己的mask
  let temp_dialog = document.querySelector('.vha_UI-dialog')
  if (temp_dialog) {
    if (temp_dialog.getAttribute('class').indexOf('-leave-active') === -1) {
      temp_popupInstance.mask.show = false
    }
  }
  
  temp_popupInstance.option.leavePointer = false
  temp_popupInstance.mask.clickClose = false
  temp_popupInstance.content.pos = 'center'
  temp_popupInstance.content.animate = 'none'
  
  return temp_toastInstance
}

let _vhaDialog  = {
  alert: function (text, option = {}) {
    let _toastInst = creatDialog()
    _toastInst.text = text
    _toastInst.title = option.title || '消息'
    _toastInst.option.buttons = option.buttons || [option.cancelText || '取消']
    _toastInst.option.callback = (id) => {
      //如果没有自定义按钮组
      if (!option.buttons) {
        if (id === 0) {
          _toastInst.cancel()
        }
      }
      if (typeof option.callback != 'undefined') {
        option.callback(id)
      }
    }
    _toastInst.show()
    return _toastInst
  },
  confirm: function (title, text, option = {}) {
    let _toastInst = creatDialog()
    _toastInst.title = title || '消息'
    _toastInst.text = text
    _toastInst.option.buttons = option.buttons || [option.cancelText || '取消', option.okText || '确定']
    _toastInst.option.callback = (id) => {
      if (!option.buttons) {
        if (id === 0) {
          _toastInst.cancel()
        }
      }
      if (typeof option.callback != 'undefined') {
        option.callback(id)
      }
    }
    _toastInst.show()
    return _toastInst
  },
  prompt: function (title, text, option = {}) {
    let _toastInst = creatDialog()
    _toastInst.title = title || '消息'
    _toastInst.inputText = text
    _toastInst.inputTextValue = option.inputTextValue
    _toastInst.option.textarea = option.textarea
    _toastInst.option.maxlength = option.maxlength
    _toastInst.option.buttons = option.buttons || ['取消', '确定']
    _toastInst.option.callback = (id, value) => {
      if (!option.buttons) {
        if (id === 0) {
          _toastInst.cancel()
        }
      }
      if (typeof option.callback != 'undefined') {
        option.callback(id, value)
      }
    }
    _toastInst.show()
    return _toastInst
  }
}

// --------------------

function _vhaActionsheet (option = {}) {
  let temp_actionsheetInstance = new Vue(vhaActionsheet).$mount()
  let temp_popupInstance = _vhaPopup(temp_actionsheetInstance)
  
  temp_popupInstance.content.pos = 'bottom'
  temp_popupInstance.content.animate = 'bottom'
  
  temp_actionsheetInstance.option.title = option.title || '标题'
  temp_actionsheetInstance.option.text = option.text || ''
  temp_actionsheetInstance.option.buttons = option.buttons || ['确定']
  temp_actionsheetInstance.option.cancelText = option.cancelText || '取消'
  
  temp_actionsheetInstance.option.callback = (id) => {
    if (typeof option.callback != 'undefined') {
      option.callback(id)
    }
  }
  
  temp_actionsheetInstance.show()
  return temp_actionsheetInstance
}

// --------------------

function _vhaToast (option = {}) {
  let temp_toastInstance = new Vue(vhaToast).$mount()
  let temp_popupInstance = _vhaPopup(temp_toastInstance)
  
  temp_popupInstance.callback.close = option.callback
  temp_popupInstance.option.leavePointer = false
  temp_popupInstance.mask.show = false
  temp_popupInstance.content.pos = option.pos || 'center'
  
  temp_toastInstance.option.pos = option.pos || 'center'
  temp_toastInstance.option.icon = option.icon || ''
  temp_toastInstance.option.textAlign = option.textAlign || ''
  temp_toastInstance.option.duration = option.duration || 1500
  
  return temp_toastInstance
}

// --------------------

function _vhaPopover (option = {}) {
  
}

// --------------------

export const $vhaPopup = _vhaPopup
export const $vhaGetPopups = _vhaGetPopups

export const $vhaToast = _vhaToast
export const $vhaDialog = _vhaDialog
export const $vhaActionsheet = _vhaActionsheet
export const $vhaPopover = _vhaPopover
