import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/data',
    name: 'Data',
    component: () => import('../views/data.vue'),
    meta: {
      breadcrumb: [
        { name: 'HOME', link: 'Home' },
        { name: 'COMPANY DATA' },
      ]
    }
  },
  {
    path: '/table',
    name: 'Table',
    component: () => import('../views/table.vue'),
    meta: {
      breadcrumb: [
        { name: 'HOME', link: 'Home' },
        { name: 'COMPANY TABLE' },
      ]
    }
  },
  {
    path: '/page',
    name: 'Page',
    component: () => import('../views/page.vue'),
    meta: {
      breadcrumb: [
        { name: 'HOME', link: 'Home' },
        { name: 'COMPANY PAGE' },
      ]
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
