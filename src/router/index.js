import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@views/home.vue')
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('@views/product.vue')
  },
  {
    path: '/technology',
    name: 'technology',
    component: () => import('@views/technology.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@views/contact.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
