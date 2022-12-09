import Router from '@koa/router'

const router = new Router()

const main = (ctx: any) => {
  ctx.throw(500)
}

router.get('/a', main)

export default router
