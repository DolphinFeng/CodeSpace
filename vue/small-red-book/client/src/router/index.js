import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login.vue'),
        meta: {
            title: '登录'
        }
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../views/Register.vue'),
        meta: {
            title: '注册'
        }
    },
    {
        path: '/userProfile',
        name: 'userProfile',
        component: () => import('../views/UserProfile.vue'),
        meta: {
            title: '用户简介'
        }
    },
    {
        path: '/notification',
        name: 'notification',
        component: () => import('../views/Notification.vue'),
        meta: {
            title: '消息'
        }
    },
    {
        path: '/shop',
        name: 'shop',
        component: () => import('../views/Shop.vue'),
        meta: {
            title: '购物'
        }
    },
    {
        path: '/explore',
        name: 'explore',
        component: () => import('../views/Explore.vue'),
        meta: {
            title: '探索'
        }
    },
    {
        path: '/publish',
        name: 'publish',
        component: () => import('../views/Publish.vue'),
        meta: {
            title: '发布'
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// 路由守卫 判定用户是否登录，没登陆送去登录  改title
const whitePath = ['/login', '/register']
router.beforeEach((to, from, next) => { // 不登陆重定向到登录页
    document.title = to.meta.title
    if (!whitePath.includes(to.path)) {  
        if (!sessionStorage.getItem('userInfo')) {  // 想去其他页面，但是没登陆，送你回登录页
            router.push('/login')
            return
        }
        next()  // 想去其他页面，但是登陆了，放行
        return
    }
    next()  // 想去登录页，直接去
})

export default router