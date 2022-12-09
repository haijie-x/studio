const main = async (ctx: any) => {
  ctx.response.body = `<div>redirecting....</div>`
}
const redirect = (router: any) => router.get('/redirect', main)

export default redirect
