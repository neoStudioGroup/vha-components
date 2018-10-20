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
        title: 'Apis',
        list: [
          {
            text: '/books',
            note: 'POST',
            noteClass: '_cl-66bb6a',
            href: '#',
            select: false,
            showItem: false,
            item: [
            ]
          },
          {
            text: '/books',
            note: 'POST',
            noteClass: '_cl-42a5f5',
            href: '#',
            select: false,
            showItem: false,
            item: [
            ]
          },
          {
            text: '/books/:id',
            note: 'PUT',
            noteClass: '_cl-7e57c2',
            href: '#',
            select: false,
            showItem: false,
            item: [
            ]
          },
          {
            text: '/books/:id',
            note: 'DELETE',
            noteClass: '_cl-ff7043',
            href: '#',
            select: false,
            showItem: false,
            item: [
            ]
          }
        ]
      }
    ]
  },
  mutations: {
  },
  actions: {
  }
})
