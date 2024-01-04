// 后台系统 History html5.pushState 公司内部使用 chrome
// 用户端 移动项目一定是html5以上，不会有兼容性问题   pc端一般还是用哈希

import { createRouter, createWebHistory } from 'vue-router' 
import { usePermissStore } from '../store/permiss.js'
import Home from '../views/Home.vue' // 直接引入 只能用于首页，需要开销

// const data = usePermissStore() // vue3.0 函数式编程 封装在hook中
// console.log(data)

const routes = [
    {
        path: '/', 
        redirect: '/dashboard' // 3xx 状态码
    }, 
    {
        path: '/',
        name: 'Home', // useRouter push
        component: Home,
        children: [
            {
                path: '/dashboard',
                name: 'dashboard',
                meta: {
                    title: '系统首页', // 路由守卫
                    permiss: '1' // 哪些页面可以看
                },
                component: () => import('../views/Dashboard.vue')
            },
            {
                path: '/table',
                name: 'basetable',
                meta: {
                    title: '表格',
                    permiss: '2'
                },
                component: () => import('../views/Table.vue') // 动态挂载，异步加载组件
            }
        ]
    },
    {
        path: '/403',
        name: '403',
        meta: {
            title: '没有权限'
        },
        component: () => import('../views/403.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | 后台管理系统`;      
    // 登录后的用户角色
    // const role = localStorage.getItem('ms_username')
    const role = 'admin'
    const permiss = usePermissStore()
    console.log(permiss)
    if (!role && to.path !== '/login') { // 未登录
        next('/login')
    } else if (to.meta.permiss && !permiss.roleList[role].includes(to.meta.permiss)) {
        next('/403')
    } else {
        next()
    }
})

export default router

// component: Home  直接引入
// component: () => import('../views/Table.vue') 动态挂载路由 异步 因为是函数执行

// 二者区别：直接引入适用于小型项目 动态挂载适用于大型项目，按需引入

// 两种路由模式，hash模式兼容性更好 