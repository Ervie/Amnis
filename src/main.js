// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import Vuetify from 'vuetify'
import VueTimers from 'vue-timers'
import 'vuetify/dist/vuetify.min.css'
import store from './vuexStore'

Vue.use(VueResource)
Vue.use(Vuetify)
Vue.use(VueTimers)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
