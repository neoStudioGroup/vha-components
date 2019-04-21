import './assets/stylus/global.styl';

// 关键 Core
import vhaApp from "./components/vha_UI-app";
import vhaPage from "./components/vha_UI-page";

// 基础 Base
import vhaRouterview from "./components/vha_UI-routerview";
import vhaScrollview from "./components/vha_UI-scrollview";
import vhaView from "./components/vha_UI-view";
  import vhaSubview from "./components/vha_UI-subview";
import vhaNavbar from "./components/vha_UI-navbar";
import vhaTabbar from "./components/vha_UI-tabbar";
  import vhaTabItem from "./components/vha_UI-tabitem";
import { $vhaGetPopups, $vhaPopup } from './components/popup'

// 表单 Forms
import vhaButton from "./components/vha_UI-button";
import vhaButtongroup from "./components/vha_UI-buttongroup";
import vhaInput from "./components/vha_UI-input";
import vhaRadio from "./components/vha_UI-radio";
import vhaCheckbox from "./components/vha_UI-checkbox";
import vhaSwitch from "./components/vha_UI-switch";
import vhaSlider from "./components/vha_UI-slider";

// 扩展 Expansion
import vhaSwipe from "./components/vha_UI-swipe";
  import vhaSwipeItem from "./components/vha_UI-swipeitem";
import vhaBadge from "./components/vha_UI-badge";
import vhaList from "./components/vha_UI-list";
  import vhaListItem from "./components/vha_UI-listitem";
import { $vhaDialog, $vhaActionsheet, $vhaToast, $vhaPopover } from './components/popup'

const vhaInstall = {
  install(Vue, options) {
    Vue.prototype.$vhaComponents = {
      // 被包含和排除的缓存路由表
      routerview: {
        include: [],
        exclude: []
      },
    }
    
    // 关键 Core
    Vue.component('vha-app', vhaApp)
    Vue.component('vha-page', vhaPage)
    
    // 基础 Base
    Vue.component('vha-routerview', vhaRouterview)
    Vue.component('vha-scrollview', vhaScrollview)
    Vue.component('vha-view', vhaView)
      Vue.component('vha-subview', vhaSubview)
    Vue.component('vha-navbar', vhaNavbar)
    Vue.component('vha-tabbar', vhaTabbar)
      Vue.component('vha-tab-item', vhaTabItem)
    Vue.prototype.$vhaPopup = $vhaPopup
    Vue.prototype.$vhaGetPopups = $vhaGetPopups

    // 表单 Forms
    Vue.component('vha-button', vhaButton)
    Vue.component('vha-buttongroup', vhaButtongroup)
    Vue.component('vha-input', vhaInput)
    Vue.component('vha-radio', vhaRadio)
    Vue.component('vha-checkbox', vhaCheckbox)
    Vue.component('vha-switch', vhaSwitch)
    Vue.component('vha-slider', vhaSlider)
    
    // 扩展 Expansion
    Vue.component('vha-swipe', vhaSwipe)
      Vue.component('vha-swipe-item', vhaSwipeItem)
    Vue.component('vha-badge', vhaBadge)
    Vue.component('vha-list', vhaList)
      Vue.component('vha-list-item', vhaListItem)
      
    Vue.prototype.$vhaDialog = $vhaDialog
    Vue.prototype.$vhaActionsheet = $vhaActionsheet
    Vue.prototype.$vhaToast = $vhaToast
    Vue.prototype.$vhaPopover = $vhaPopover
    
    // ---------------
    
    // // 一些兼容性代码
    // /* for iOS 10, users can now pinch-to-zoom even when a website sets user-scalable=no in the viewport. */
    // document.documentElement.addEventListener('touchstart', (e) => {
    //   if (e.touches.length > 1) {
    //     e.preventDefault()
    //   }
    // }, false)

    // /* iOS Safari - Disable double click to zoom */
    // if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
    //   let lastTouchEnd = 0;
    //   document.documentElement.addEventListener('touchend', (e) => {
    //     let now = (new Date()).getTime()
    //     if (now - lastTouchEnd < 300) {
    //       e.preventDefault()
    //     }
    //     lastTouchEnd = now
    //   }, false)
    // }
    
  }
}
export default vhaInstall