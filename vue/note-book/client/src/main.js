import { createApp } from 'vue'
import App from './App.vue'
import 'amfe-flexible' // 跟字体自动设置
import './assets/style/reset.css'
import router from './router'

import { Button, Form, Field, CellGroup } from 'vant';

// 2. 引入组件样式
import 'vant/lib/index.css';
// 3. 注册你需要的组件
createApp(App)
.use(Button)
.use(Form)
.use(Field)
.use(CellGroup)
.use(router)
.mount('#app')
 


