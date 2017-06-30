import Vue from 'vue'
import Router from 'vue-router'

import Layout from '../components/views/layouts/layout.vue'
import Blank from '../components/views/layouts/blank.vue'

import SignIn from '../components/views/sign-in.vue'
import Home from '../components/views/home.vue'
import Profile from '../components/views/profiles/profile.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Blank,
      children: [
          {
            path: 'sign-in',
            component: SignIn
          }
      ]
    },
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: 'home',
          component: Home
        },
        {
            path: 'profile',
            component: Profile
        }
      ]
    },
    {
      path: '*',
      redirect: '/sign-in'
    }
  ]
})
