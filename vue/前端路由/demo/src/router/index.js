import { createRouter, createWebHashHistory } from 'vue-router'
// createWebHistory是history模式  createWebHashHistory是Hash模式，然后改掉下面的router中
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL), // 改成Hash模式 ，路由一定会带一个#
  routes
})

export default router
