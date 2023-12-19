import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { 
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home')
  },
  {
    path: '/item',
    name: 'item',
    component: () => import('@/views/item')
  },
  {
    path: '/score',
    name: 'score',
    component: () => import('@/views/score')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
