import Vue from 'vue'
import Router from 'vue-router'
import MusicBar from '@/components/MusicBar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MusicBar',
      component: MusicBar
    }
  ]
})
