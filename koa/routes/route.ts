const main = async (ctx: any) => {
  ctx.response.type = 'html'
  ctx.response.body = '<div>route</div>'
}

export default (router: any) => router.get('/route', main)
