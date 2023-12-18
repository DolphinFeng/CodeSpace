import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    // 按需加载路由
    component: () => import('@/views/Login.vue')
  },
  {
    // path: '/home/:user', // 第一种
    // path: '/home', // 第二种
    // path: '/home/:user',
    // name: 'home',  // 第三种
    path: '/home',
    name: 'home',  // 第四种
    component: () => import('@/views/Home.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
