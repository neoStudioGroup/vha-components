import vhaNavbar from "./components/vha_UI-navbar"
import vhaContent from "./components/vha_UI-content"
import vhaRouterview from "./components/vha_UI-routerview"
import vhaScrollview from "./components/vha_UI-scrollview"
import vhaButton from "./components/vha_UI-button"
import vhaTabs from "./components/vha_UI-tabs"

import './assets/stylus/reset.css'
import './assets/css/global.css'

const vha = {
  install(Vue) {
    
    Vue.prototype.$vhaComponents = {
      // mode: typeof options != "undefined" ? options.mode : "normal",
      keepscroll: 0
    }
    
    Vue.mixin({
      components: {
        //组件 - 引入或定义
        vhaNavbar,
        vhaContent,
        vhaRouterview,
        vhaScrollview,
        vhaButton,
        vhaTabs
      },
      created: function () {
        // 逻辑...
      },
    })
    
    
    
  }
}
export default vha