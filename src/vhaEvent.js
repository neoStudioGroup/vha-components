const vhaEvent = {
  App: (callFunc, value, keepAlive) => {
    let temp_vhaAppEvent = new CustomEvent('vha:AppEvent', {
      detail: {
        callFunc: callFunc, 
        value: value, 
        keepAlive: keepAlive
      }
    })
    window.dispatchEvent(temp_vhaAppEvent)
  },
  Routerview: (animate) => {
    let temp_vhaRouterviewEvent = new CustomEvent('vha:RouterviewEvent', {
      detail: {
        animate: animate
      }
    })
    window.dispatchEvent(temp_vhaRouterviewEvent)
  }
}
export default vhaEvent