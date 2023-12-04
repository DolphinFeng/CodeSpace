import { createWebHistory, createRouter } from 'vue-router'
// ../上一个文件夹，就是src下
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Newest from '../views/homeChild/Newest.vue'
// 引导路由就可以充当页面来用
// 不需要./  人家node_module已经给你封装好了方法
// createRouter是创建路由

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        // 路由重定向：给home的两个子页面一个默认子页面
        path: '/home',
        redirect: '/home/newest'
    },
    {
        path: '/about',
        redirect: '/about/Live'
    },
    // 每个页面都是一个花括号
    {
        // 这样就可以更改路径了
        path: '/home',
        component: Home, // 组件， 其实每个代码片段都是一个组件  打了引号就是字符串，这里得是变量
        children: [
            {
                // 二级路由不要斜杆
                path: 'newest',
                component: Newest
            },
            {
                path: 'recommend',
                component: () => import('../views/homeChild/recommend.vue')
            }
        ]
    },
    {   
        path: '/about',
        component: About,
        children: [
            {
                path: 'activity',
                component: () => import('../views/aboutChild/activity.vue')
            },
            {
                path: 'live',
                component: () => import('../views/aboutChild/live.vue')
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),  //这是其中一个路由模式：history， 还有hash模式
    routes: routes,  // key不能乱写
})

// 以前js引入，万一两个js，可以把其中一个引到另一个js，可是js做不到这个。15年之前不行，es6的模块化引入（import引入，抛出就是export）
export default router
// 抛出就可以在另一个js引入

