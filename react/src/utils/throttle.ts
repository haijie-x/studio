function throttle<T extends Function>(func: T, wait = 50) {
  // 上一次执行该函数的时间
  let lastTime = 0
  return function (this: unknown, ...args: unknown[]) {
    // 当前时间
    let now = +new Date()
    // 将当前时间和上一次执行函数时间对比
    // 如果差值大于设置的等待时间就执行函数
    if (now - lastTime > wait) {
      lastTime = now
      func.apply(this, args)
    }
  }
}
export default throttle
