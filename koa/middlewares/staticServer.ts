import serve from 'koa-static'
import path from 'path'

const staticServer = () => serve(path.resolve(__dirname, '../public'))

export default staticServer
