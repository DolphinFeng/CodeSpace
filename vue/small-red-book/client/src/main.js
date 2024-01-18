import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './assets/style/reset.css'
import 'amfe-flexible'
import 'vant/lib/index.css'

import { Button, Form, Field, CellGroup, Tabbar, TabbarItem, Icon, Divider } from 'vant';

const app = createApp(App)
// 注册
app.use(router)
app.use(Form);
app.use(Field);
app.use(CellGroup)
app.use(Button)
app.use(Tabbar)
app.use(TabbarItem)
app.use(Icon)
app.use(Divider)
app.mount('#app')
