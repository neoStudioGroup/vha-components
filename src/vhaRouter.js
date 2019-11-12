import vhaEvent from './vhaEvent';

const vhaRouter = {
  install(Vue, options) {
    
    // js控制路由动画
    let router = {
      push: (ob) => {
        vhaEvent.Routerview(ob.animate)
        vhaEvent.App('push', ob.value, ob.keepAlive, ob.check)
      },
      go: (ob) => {
        vhaEvent.Routerview(ob.animate)
        vhaEvent.App('go', ob.value, ob.keepAlive, ob.check)
      }
    }
    Vue.prototype.$vhaRouter = router
    Vue.prototype.$vhaRt = router
    
    // 自定义路由指令 控制路由动画
    let temp_vhaRouter = (element, binding) => {
      // console.log('vhaRouter', element, binding)
      let temp_routerFunc = '', temp_routerValue = ''
              
      if (binding.value.push) {
        temp_routerFunc = 'push'
        temp_routerValue = binding.value.push
      } else if (binding.value.go) {
        temp_routerFunc = 'go'
        temp_routerValue = binding.value.go
      }
      
      element.addEventListener('click', () => {
        // 通知vhaRouterview转跳路由动画
        vhaEvent.Routerview(binding.value.animate)
        // 通知vhaApp转跳路由
        vhaEvent.App(temp_routerFunc, temp_routerValue, binding.value.keepAlive, binding.value.check)
      })
    }
    Vue.directive('vhaRouter', {
      bind: (element, binding) => {
        temp_vhaRouter(element, binding)
      }
    })
    Vue.directive('vhaRt', {
      bind: (element, binding) => {
        temp_vhaRouter(element, binding)
      }
    })
    
  }
}
export default vhaRouter