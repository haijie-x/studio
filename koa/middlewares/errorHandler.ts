import chalk from 'chalk'

const red = (str: any) => chalk.red(str)
const errorHandler = async (ctx: any, next: any) => {
  // try {
  //   await next()
  // } catch {
  console.log(red(ctx))
  // }
}

export default errorHandler
