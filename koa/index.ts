import Koa from 'koa'
import router from './router'
import useMiddlewares from './middlewares'
import useRoutes from './routes'
const app = new Koa()

useMiddlewares(app)
// useRoutes(router)

app.use(router.routes())

app.listen(3000)
