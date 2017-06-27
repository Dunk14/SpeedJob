// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import VueSession from 'vue-session'
import VueResource from 'vue-resource'
import 'bootstrap-grid/dist/grid.min.css'
import 'animate.css/animate.min.css'

Vue.use(Vuetify)
Vue.use(VueResource)
Vue.use(VueSession)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
