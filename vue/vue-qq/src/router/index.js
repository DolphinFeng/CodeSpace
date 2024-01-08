import { createRouter, createWebHistory } from 'vue-router'
import About from '@/components/about/About.vue'
import Myself from '@/components/myself/Myself.vue'

const routes = [
  {
    path: '/',
    redirect: '/myself'
  },
  {
    path: '/myself',
    component: Myself 
  },
  {
    path: '/about',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
