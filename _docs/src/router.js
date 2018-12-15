import Vue from 'vue'
import Router from 'vue-router'

import index from '@/pages/index.vue'
import guide from '@/pages/index/guide.vue'
import routerView from '@/pages/index/routerView.vue'
import scrollView from '@/pages/index/scrollView.vue'
import style from '@/pages/index/style.vue'
import view from '@/pages/index/view.vue'


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
        }
        
        
      ]
    }
  ]
})
