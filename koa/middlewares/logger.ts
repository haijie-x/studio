import chalk from 'chalk'

const green = (str: any) => chalk.green(str)

const logger = async (ctx: any, next: any) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  console.log(`method: ${green(ctx.method)}, url: ${green(ctx.url)}, time: ${green(ms)}ms`)
  ctx.set('X-Response-Time', `${ms}ms`)
}

export default logger
