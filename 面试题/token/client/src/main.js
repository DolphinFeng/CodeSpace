import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'
import { Button } from 'vant';
import 'vant/lib/index.css';
import { Form, Field, CellGroup } from 'vant'

const app = createApp(App)
app.use(Form);
app.use(Field);
app.use(CellGroup);
app.use(Button)
app.use(router).mount('#app')
