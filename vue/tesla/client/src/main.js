import { createApp } from 'vue'
import { createPinia } from 'pinia'  // npm i pinia
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'  // npm i @element-plus/icons-vue

import 'animate.css/animate.min.css'  // 使用了animate.css做一个组件动效
import 'animate.css'  // npm i animate.css
import App from './App.vue'
import router from './router'
import './assets/reset.css'

createApp(App).mount('#app')
