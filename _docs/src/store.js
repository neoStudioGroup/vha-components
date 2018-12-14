import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// import toLink from "./components/toLink"
Vue.mixin({
  components: {
    //组件 - 引入或定义
    // toLink
  },
  created: function () {
    //实例创建完成后
  },
  methods: {
    //方法 - 进入页面创建
    // toLink: function (herf, event) {
    //   console.log(event)
    //   this.$router.push(herf)
    // }
  }
})

export default new Vuex.Store({
  state: {
    showSidebar: true, 
    showSideOutrouter: 'guide', 
    showSidebarSrc: 'https://neostudiogroup.com/vha-appDemo/#/components/', 
    menus: [
      {
        title: '开发指南',
        list: [
          {
            text: '开发指南',
            note: '',
            noteClass: '',
            href: '/guide',
            select: false,
            showItem: false,
            item: [
              {
                subText: '介绍',
                subNote: '',
                noteClass: '',
                href: '#intro',
                select: false
              },
              {
                subText: '快速开始',
                subNote: '',
                noteClass: '',
                href: '#GettingStarted',
                select: false
              },
              {
                subText: '目录结构',
                subNote: '',
                noteClass: '',
                href: '#directory',
                select: false
              },
              {
                subText: '设计指南',
                subNote: '',
                noteClass: '',
                href: '#design',
                select: false
              },
              {
                subText: '1px线',
                subNote: '',
                noteClass: '',
                href: '#onepx',
                select: false
              },
              {
                subText: '指令',
                subNote: '',
                noteClass: '',
                href: '#directive',
                select: false
              },
              {
                subText: 'neo组件化命名规范',
                subNote: '',
                noteClass: '',
                href: '#componentized',
                select: false
              }
            ]
          }
        ]
      },
      {
        title: '基础 Base',
        list: [
{text: '路由视图', note: 'Router View', noteClass: '', href: '/routerView', select: false, showItem: false, item: []},
{text: '滚动视图', note: 'Scroll View', noteClass: '', href: '/scrollView', select: false, showItem: false, item: []},
{text: '风格', note: 'style', noteClass: '', href: '/style', select: false, showItem: false, item: []},
{text: '视图区域', note: 'view', noteClass: '', href: '/view', select: false, showItem: false, item: []},
{text: '导航栏', note: 'NavBar', noteClass: '', href: '/navBar', select: false, showItem: false, item: []},
{text: '标签栏', note: 'TabBar', noteClass: '', href: '/tabBar', select: false, showItem: false, item: []},
{text: '弹出层', note: 'Popup', noteClass: '', href: '/popup', select: false, showItem: false, item: []}
        ]
      },
      {
        title: '表单 Forms',
        list: [
{text: '按钮', note: 'Button', noteClass: '', href: '/button', select: false, showItem: false, item: []},
{text: '按钮组', note: 'Button Group', noteClass: '', href: '/buttonGroup', select: false, showItem: false, item: []},
{text: '输入框', note: 'Input', noteClass: '', href: '/input', select: false, showItem: false, item: []},
{text: '开关', note: 'Switch', noteClass: '', href: '/switch', select: false, showItem: false, item: []},
{text: '单选框', note: 'Radio', noteClass: '', href: '/radio', select: false, showItem: false, item: []},
{text: '多选框', note: 'Checkbox', noteClass: '', href: '/checkbox', select: false, showItem: false, item: []},
{text: '滑块', note: 'Slider', noteClass: '', href: '/slider', select: false, showItem: false, item: []}
        ]
      },
      {
        title: '扩展 Expansion',
        list: [
{text: '轮播', note: 'Swipe', noteClass: '', href: '/swipe', select: false, showItem: false, item: []},
{text: '角标', note: 'Badge', noteClass: '', href: '/badge', select: false, showItem: false, item: []},
{text: '对话框', note: 'Dialog', noteClass: '', href: '/dialog', select: false, showItem: false, item: []},
{text: '上拉菜单', note: 'Action Sheet', noteClass: '', href: '/actionSheet', select: false, showItem: false, item: []},
{text: '信息提示', note: 'Toast', noteClass: '', href: '/toast', select: false, showItem: false, item: []},
{text: '弹出气泡', note: 'Popover', noteClass: '', href: '/popover', select: false, showItem: false, item: []}
        ]
      }
    ]
  },
  mutations: {
  },
  actions: {
  }
})
