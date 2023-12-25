import { createRouter, createWebHistory } from 'vue-router'
import About from '@/components/about/About.vue'

const routes = [
  {
    path: '/',
    redirect: '/about'
  },
  {
    path: '/about',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
