const { Controller } = require('egg')

class NewsController extends Controller {
  async list() {
    const { ctx } = this
    const page = ctx.query.page || 1
    const newsList = await ctx.service.news.list(page)
    await ctx.render('news/list.tpl', { list: newsList })
  }
}

module.exports = NewsController
