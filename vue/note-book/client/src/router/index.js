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
        path: '/noteClass',
        name: 'noteClass',
        component: () => import('../views/NoteClass.vue'),
        meta: {
            title: '笔记分类'
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// 开启路由守卫  每次跳路由之前  路由的钩子函数
const whitePath = ['/login', '/register']
router.beforeEach((to, from, next) => { // to目的地 from起始地
    document.title = to.meta.title
    // console.log(to, from)
    if (!whitePath.includes(to.path)) {
        // 判断是否登录过
        if (!sessionStorage.getItem('userInfo')) {
            router.push('/login')
            return 
        } 
        next()
        return 
    } 
    next()
})

export default router