import Vue from 'vue'
import Router from 'vue-router'

import Layout from '../components/views/layout/layout.vue'

import SignIn from '../components/views/sign-in.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/sign-in',
      component: SignIn
    },
    {
      path: '/',
      component: Layout,
      children: [
        /*{
          path: '/home',
          component: Home
        }*/
      ]
    }
  ]
})
