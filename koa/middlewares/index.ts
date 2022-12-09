import logger from './logger'
import staticServer from './staticServer'
import errorHandler from './errorHandler'

const middlewares = [logger, staticServer, errorHandler]

const useMiddlewares = (app: any) => {
  middlewares.forEach(middleware => {
    app.use(middleware)
  })
}
export default useMiddlewares
