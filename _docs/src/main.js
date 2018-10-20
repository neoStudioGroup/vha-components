import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
// ----------------------------------------
// import Antd from 'ant-design-vue'
// import 'ant-design-vue/dist/antd.css'
// Vue.use(Antd)
// ----------------------------------------
// import axios from 'axios'
// Vue.prototype.$ajax = axios
// ----------------------------------------
import NProgress from "nprogress"
import "nprogress/nprogress.css"
router.beforeEach((to, from, next) => {
  if (to.hash === "") {
    NProgress.start()
  }
  next()
})
router.afterEach(() => {
  NProgress.done()
})
// ----------------------------------------
var VueScrollTo = require('vue-scrollto')
Vue.use(VueScrollTo, {
  container: "._UI-content",
  duration: 200,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})
// ----------------------------------------
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
