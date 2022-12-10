/* eslint valid-jsdoc: "off" */

'use strict'

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {})

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1670655024393_9327'

  // add your middleware config here
  config.middleware = ['robot']

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  }

  const view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  }

  const news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
  }

  const robot = {
    ua: [/Baiduspider/i],
  }
  return {
    ...config,
    ...userConfig,
    view,
    news,
    robot,
  }
}
