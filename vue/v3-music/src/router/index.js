import { createRouter, createWebHashHistory } from 'vue-router'
// hashPC 兼容性更好    history兼容模式不好

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/Root.vue'),
        redirect: {name: 'discover'},
        children: [
            {
                path: 'discover',
                name: 'discover',
                component: () => import('@/views/discover/Discover.vue')
            }
        ]
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
    // 懒加载
})

export default router