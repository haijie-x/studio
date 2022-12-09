const main = (ctx: any) => {
  ctx.throw(500)
}
export default (router: any) => router.get('/error', main)
