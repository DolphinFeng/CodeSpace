import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    {
        path: '/login',
        component: () => import('../views/Login.vue')
    },
    {
        path: '/home',
        component: () => import('../views/Home.vue') 
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router