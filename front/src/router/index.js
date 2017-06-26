import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '../components/views/sign-in/sign-in.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/sign-in',
      name: 'SignIn',
      component: SignIn
    }
  ]
})
