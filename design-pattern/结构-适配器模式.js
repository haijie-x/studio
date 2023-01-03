// 把变化留给自己，把统一留给用户
// example:axios实现
// 所有关于 http 模块、关于 xhr 的实现细节，全部被 Adapter 封装进了自己复杂的底层逻辑里
// 暴露给用户的都是十分简单的统一的东西——统一的接口，统一的入参，统一的出参，统一的规则
function httpAdapter(config) {
  return new Promise(function dispatchHttpRequest(resolve, reject) {
    // 具体逻辑
  })
}

function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    // 具体逻辑
  })
}

function getDefaultAdapter() {
  let adapter
  // 判断当前是否是node环境
  if (
    typeof process !== 'undefined' &&
    Object.prototype.toString.call(process) === '[object process]'
  ) {
    // 如果是node环境，调用node专属的http适配器
    adapter = httpAdapter
  } else if (typeof XMLHttpRequest !== 'undefined') {
    // 如果是浏览器环境，调用基于xhr的适配器
    adapter = xhrAdapter
  }
  return adapter
}

getDefaultAdapter()
