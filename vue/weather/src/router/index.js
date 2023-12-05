import { createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path:'/',
        redirect: '/home'
    },
    {
        // 路径都是小写的
        path: '/home',
        // 主键名，以后讲这个的作用
        name: 'home',
        // 也可以： @/vies/Home.vue  不过需要自己配置一个快捷命令
        component: () => import('../views/Home.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

