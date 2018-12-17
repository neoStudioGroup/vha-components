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
          '/guide',
          
          '/routerView',
          '/scrollView',
          '/style',
          '/view',
          '/navBar',
          '/tabBar',
          '/popup',
          
          '/button',
          '/buttonGroup',
          '/input',
          '/switch',
          '/radio',
          '/checkbox',
          '/slider',
          
          '/swipe',
          '/badge',
          '/dialog',
          '/actionSheet',
          '/toast',
          '/popover'
        ],
        postProcess(context) {
          // 在这里配置每个页面的标题
          let tail = ' - vha-components 组件文档'
          let titles = {
            '/': 'vha-components 组件文档',
            '/guide': '开发指南' + tail,
            
            '/routerView': 'vha-routerview 路由视图' + tail,
            '/scrollView': 'vha-scrollview 滚动视图' + tail,
            '/style': 'vha-style 风格' + tail,
            '/view': 'vha-view 视图区域' + tail,
            '/navBar': 'vha-navbar 导航栏' + tail,
            '/tabBar': 'vha-tabbar 标签栏' + tail,
            '/popup': 'vha-popup 弹出层' + tail,
            
            '/button': 'vha-button 按钮' + tail,
            '/buttonGroup': 'vha-buttongroup 按钮组' + tail,
            '/input': 'vha-input 输入框' + tail,
            '/switch': 'vha-switch 开关' + tail,
            '/radio': 'vha-radio 单选框' + tail,
            '/checkbox': 'vha-checkbox 多选框' + tail,
            '/slider': 'vha-slider 滑块' + tail,
            
            '/swipe': 'vha-swipe 轮播' + tail,
            '/badge': 'vha-badge 角标' + tail,
            '/dialog': 'vha-dialog 对话框' + tail,
            '/actionSheet': 'vha-actionsheet 上拉菜单' + tail,
            '/toast': 'vha-toast 信息提示' + tail,
            '/popover': 'vha-popover 弹出气泡' + tail
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