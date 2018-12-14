const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
  baseUrl: 'vha-components',
  outputDir: path.join(__dirname, '..') + '\\docs',
  productionSourceMap: false,
  css: {
    loaderOptions: {
      stylus: {
        import: path.resolve(__dirname, './src/assets/stylus/mixin.styl')
      }
    }
  },
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, '..') + '\\docs',
        routes: [
          '/',
          '/guide'
        ],
        postProcess(context) {
          // 在这里配置每个页面的标题
          let tail = 'vha-components 文档'
          let titles = {
            '/': 'vha-components 组件文档',
            '/guide': '开发指南 - ' + tail
          }
          context.html = context.html.replace(
            /<title>[^<]*<\/title>/i,
            `<title>${titles[context.route]}</title>`
          )
          return context
        }
      })
    ]
  }
}