import Vue from 'vue'
import Router from 'vue-router'

import index from '@/pages/index.vue'
import guide from '@/pages/index/guide.vue'


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
        }
        
      ]
    }
  ]
})
