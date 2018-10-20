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
          '/GettingStarted', 
          '/Authentication', 
          '/Errors'
        ],
        postProcessHtml: function (context) {
          // 在这里配置每个页面的标题
          var titles = {
            '/': 'vha-docs'
          }
          let temp_title = titles[context.route]
          if (!temp_title) {
            temp_title = context.route.replace(/\//g, '').replace(/-/g, ' ') + ' vha-components 文档'
          }
          return context.html.replace(
            /<title>[^<]*<\/title>/i,
            '<title>' + temp_title + '</title>'
          )
        }
      })
    ]
  }
}