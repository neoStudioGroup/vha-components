import Vue from 'vue';
import Router from 'vue-router';

import index from '@/pages/index.vue';
import guide from '@/pages/index/guide.vue';
// 基础 Base
import routerView from '@/pages/index/routerView.vue';
import scrollView from '@/pages/index/scrollView.vue';
import style from '@/pages/index/style.vue';
import view from '@/pages/index/view.vue';
import navBar from '@/pages/index/navBar.vue';
import tabBar from '@/pages/index/tabBar.vue';
import popup from '@/pages/index/popup.vue';

// 表单 Forms
import button from '@/pages/index/button.vue';
import buttonGroup from '@/pages/index/buttonGroup.vue';
import input from '@/pages/index/input.vue';
import Switch from '@/pages/index/switch.vue';
import radio from '@/pages/index/radio.vue';
import checkbox from '@/pages/index/checkbox.vue';
import slider from '@/pages/index/slider.vue';

// 扩展 Expansion
import swipe from '@/pages/index/swipe.vue';
import badge from '@/pages/index/badge.vue';
import dialog from '@/pages/index/dialog.vue';
import actionSheet from '@/pages/index/actionSheet.vue';
import toast from '@/pages/index/toast.vue';
import popover from '@/pages/index/popover.vue';


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
        },
        
        // 表单 Forms
        {
          path: '/button',
          component: button
        },
        {
          path: '/buttonGroup',
          component: buttonGroup
        },
        {
          path: '/input',
          component: input
        },
        {
          path: '/Switch',
          component: Switch
        },
        {
          path: '/radio',
          component: radio
        },
        {
          path: '/checkbox',
          component: checkbox
        },
        {
          path: '/slider',
          component: slider
        },
        
        // 扩展 Expansion
        {
          path: '/swipe',
          component: swipe
        },
        {
          path: '/badge',
          component: badge
        },
        {
          path: '/dialog',
          component: dialog
        },
        {
          path: '/actionSheet',
          component: actionSheet
        },
        {
          path: '/toast',
          component: toast
        },
        {
          path: '/popover',
          component: popover
        }
      ]
    }
  ]
})
