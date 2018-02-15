import Vue from 'vue'
import Router from 'vue-router'
import VueTimers from 'vue-timers'
import MusicBar from '@/components/MusicBar'

Vue.use(Router)
Vue.use(VueTimers)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MusicBar',
      component: MusicBar
    }
  ]
})
