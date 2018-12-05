
// 循环检测一个元素内的class, 检测不到就返回, 默认一直检测
const checkClass = (el, string, timeOut) => {
  return new Promise ((resolve, reject) => {
    // 如果class不存在直接返回失败0
    let temp_class = el.getAttribute('class')
    if (temp_class.indexOf(string) === -1) {
      reject(0)
    }
    // 如果设置了超时时钟 启动超时时钟
    if (timeOut > 0) {
      let temp_timeOutHandle = setTimeout(() => {
        clearTimeout(temp_timeOutHandle)
        clearTimeout(temp_timeHandle)
        reject(1)
      }, timeOut)
    }
    // 启动检测时钟
    let temp_timeHandle = setInterval(() => {
      let temp_class = el.getAttribute('class')
      if (temp_class.indexOf(string) === -1) {
        if (timeOut > 0) {clearTimeout(temp_timeOutHandle)}
        clearTimeout(temp_timeHandle)
        resolve()
      }
    }, 20)  
  })
}

const timeout = (duration = 0) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration);
  })
}

module.exports = {
  checkClass: checkClass,
  timeout: timeout
}
