<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import Vue from 'vue'
  import VueResource from 'vue-resource'
  import VueMdl from 'vue-mdl'

  Vue.use(VueMdl)
  Vue.use(VueResource)

  import 'http-proxy-middleware'
  import 'bootstrap/dist/css/bootstrap.css'
  import 'font-awesome/css/font-awesome.min.css'
  import 'animate.css/animate.min.css'





  export default {
    name: 'app',
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
