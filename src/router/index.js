import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '../layout/default.vue'
import blankPage from '../layout/blank'
import Index from '@v/index'
Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      component: defaultPage,
      redirect: '/index',
      children: [
        {
          path: '/s/:name',
          name: 'goods',
          component: () => import(/* webpackChunkName: "goodsList" */'@v/goodsList')
        },
        {
          path: 'index',
          name: 'index',
          component: Index
        },
        {
          path: 'changeCity',
          name: 'changeCity',
          component: () => import(/* webpackChunkName: "changeCity" */'@v/changeCity')
        }
      ]
    },
    {
      path: '/blank',
      name: 'blankPage',
      component: blankPage,
      children: [
        {
          path: "login",
          name: 'login',
          component: () => import(/* webpackChunkName: "login" */'@v/login')
        },
        {
          path: "register",
          name: 'register',
          component: () => import(/* webpackChunkName: "register" */'@v/register')
        }
      ]
    }
  ]
})
