// import { createWebHashHistory, createRouter } from 'vue-router'
import { createRouter, createWebHashHistory } from './myRouter'  // 能实现这个效果就打造成功了

import Home from '../views/Home.vue'
import About from '../views/About.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home // 写成函数形式需要调用，返回一个promise对象，麻烦点
    },
    {
        path: '/about',
        name: 'about',
        component: About
    }
]

const router = createRouter({
    history: createWebHashHistory(),  
    routes: routes,  
})

export default router
