import Vue from 'vue'
import Router from 'vue-router'
import MainContent from '@/components/MainContent'
import Catalog from '@/components/Catalog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainContent',
      component: MainContent
    },
    {
      path: '/Catalog',
      name: 'Catalog',
      component: Catalog
    }
  ]
})
