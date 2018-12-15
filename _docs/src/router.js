import Vue from 'vue'
import Router from 'vue-router'

import index from '@/pages/index.vue'
import guide from '@/pages/index/guide.vue'
import routerView from '@/pages/index/routerView.vue'
import scrollView from '@/pages/index/scrollView.vue'
import style from '@/pages/index/style.vue'
import view from '@/pages/index/view.vue'
import navBar from '@/pages/index/navBar.vue'
import tabBar from '@/pages/index/tabBar.vue'
import popup from '@/pages/index/popup.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { 
      path: '/',
      component: index,
      redirect: '/guide',
      children: [
        {
          path: '/guide',
          component: guide
        },
        
        // 基础 Base
        {
          path: '/routerView',
          component: routerView
        },
        {
          path: '/scrollView',
          component: scrollView
        },
        {
          path: '/style',
          component: style
        },
        {
          path: '/view',
          component: view
        },
        {
          path: '/navBar',
          component: navBar
        },
        {
          path: '/tabBar',
          component: tabBar
        },
        {
          path: '/popup',
          component: popup
        }
        
        // 表单 Forms
        
        // 扩展 Expansion
        
      ]
    }
  ]
})
