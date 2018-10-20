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
    showSideOutrouter: 'GettingStarted,Authentication', 
    showSidebarSrc: 'https://neostudiogroup.github.io/vha-appDemo/', 
    menus: [
      {
        title: 'Documentation',
        list: [
          {
            text: 'Getting Started',
            note: '',
            noteClass: '',
            href: '/GettingStarted',
            select: false,
            showItem: false,
            item: [
              {
                subText: 'Getting Started',
                subNote: 'Splashscreen',
                noteClass: '',
                href: '#Getting-Started',
                select: false
              },
              {
                subText: 'Authentication',
                subNote: 'StatusBar',
                noteClass: '',
                href: '#Authentication',
                select: false
              },
              {
                subText: 'Errors',
                subNote: 'Network',
                noteClass: '',
                href: '#Errors',
                select: false
              }
            ]
          },
          {
            text: 'Authentication',
            note: '',
            noteClass: '',
            href: '/Authentication',
            select: false,
            showItem: false,
            item: [
            ]
          },
          {
            text: 'Errors',
            note: '',
            noteClass: '',
            href: '/Errors',
            select: false,
            showItem: false,
            item: [
            ]
          }
        ]
      },
      {
        title: '基础 Base',
        list: [
{text: '导航栏', note: 'NavBar', noteClass: '', href: '/NavBar', select: false, showItem: false, item: []},
{text: '分段器', note: 'Segment', noteClass: '', href: '/Segment', select: false, showItem: false, item: []},
{text: '导航栏', note: 'NavBar', noteClass: '', href: '/NavBar', select: false, showItem: false, item: []},
{text: '滚动区域', note: 'ScrollView', noteClass: '', href: '/ScrollView', select: false, showItem: false, item: []}
        ]
      },
      {
        title: '数据输入 Data Entry',
        list: [
{text: '按钮', note: 'Button', noteClass: '', href: '/Button', select: false, showItem: false, item: []},
{text: '滑动开关', note: 'Switch', noteClass: '', href: '/Switch', select: false, showItem: false, item: []},
{text: '滑块条', note: 'Slider', noteClass: '', href: '/Slider', select: false, showItem: false, item: []},
{text: '步进器', note: 'Stepper', noteClass: '', href: '/Stepper', select: false, showItem: false, item: []}
        ]
      },
      {
        title: '数据显示 Data Display',
        list: [
{text: '轮播图', note: 'Swipe', noteClass: '', href: '/Swipe', select: false, showItem: false, item: []},
{text: '卡片', note: 'Card', noteClass: '', href: '/Card', select: false, showItem: false, item: []}
        ]
      },
      {
        title: '反馈操作 Feedback',
        list: [
{text: '上拉菜单', note: 'ActionSheet', noteClass: '', href: '/ActionSheet', select: false, showItem: false, item: []},
{text: '加载对话框', note: 'Loading', noteClass: '', href: '/Loading', select: false, showItem: false, item: []}
        ]
      }
    ]
  },
  mutations: {
  },
  actions: {
  }
})
