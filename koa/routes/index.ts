import redirect from './redirect'
import error from './error'
import route from './route'

const useRoutes = (router: any) => {
  route(router)
  redirect(router)
  error(router)
}

export default useRoutes
