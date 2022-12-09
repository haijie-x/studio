type Middleware = (ctx: any, next: any) => Promise<void>

const midware1 = async (ctx: any, next: any) => {
  console.log(ctx.app, '1')
  await next()
  console.log(ctx.app, '6')
}
const midware2 = async (ctx: any, next: any) => {
  console.log(ctx.app, '2')
  await next()
  console.log(ctx.app, '5')
}
const midware3 = async (ctx: any, next: any) => {
  new Promise(resolve => {
    setTimeout(() => {
      resolve(3)
      console.log(ctx.app, '3')
    }, 100)
  })
  await next()
  console.log(ctx.app, '4')
}

const container1: Middleware[] = []

const container2: Middleware[] = []

const use = (container: Middleware[], midware: Middleware) => {
  container.push(midware)
}

use(container1, midware1)
use(container1, midware2)
use(container1, midware3)

use(container2, midware1)
use(container2, midware2)
use(container2, midware3)

// 成功的promise
const resolved = (fn?: any) => {
  if (fn) Promise.resolve(() => fn())
}

const koaCompose = (middlewareList: Middleware[]) => {
  return (ctx: any, next: any) => {
    const dispatch = (idx: number): any => {
      let fn = middlewareList[idx]
      // 跳出当前的compose中间件
      if (idx === middlewareList.length) fn = next
      if (!fn) return resolved()
      return resolved(fn(ctx, dispatch.bind(null, ++idx)))
    }
    return dispatch(0)
  }
}

koaCompose(container1)(
  { app: 'koa' },
  koaCompose.bind(null, container2).bind(null, { app: 'koa2' }, null)(),
)
