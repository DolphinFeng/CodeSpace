import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue'),
        meta: {
            title: '首页'
        }
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/About.vue'),
        meta: {
            title: '关于'
        },
        // beforeEnter: (to, from, next) => { // 独享守卫，比如跳广告
        //     console.log(to, from);
        // }
    }
    
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// 全局前置钩子
// router.beforeEach((to, from, next) => {  // 前端的判断规则，不过前后端配合最严谨   路由跳转之前触发   起跳前
//     document.title = to.meta.title
//     console.log(to, from);  // 跳去哪里，以及当前位置
//     // meta：专门用于放一些参数，或者配置项，路由特殊标记
//     if (to.path !== '/') { 
//         const isLogin = localStorage.getItem('isLogin') // 读取isLogin
//         if (isLogin) {
//             next()
//         } else {
//             // router.push('/login')
//             alert('未登录，不许跳页面')
//             return 
//         }
//     }
//     next()
// })

// 全局解析钩子
// router.beforeResolve((to, from, next) => {  // 路由被解析 代码被编译 之前触发  和beforeEach区别不大  跳跃中
//     console.log(to, from);
// })

// 全局后置钩子
// router.afterEach((to, from) => {  // 落地后
//     console.log(to, from);
// })

export default router