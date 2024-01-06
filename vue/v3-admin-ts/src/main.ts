import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/main.css'
import './assets/css/color-dark.css'
import 'element-plus/dist/index.css'
import router from './router'
import { createPinia } from 'pinia'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'   // 导入所有的图标
import { usePermissStore } from './store/permiss'

const app = createApp(App)


// Object.entries 可以  {a: 1, b: 2} => [[a, 1], [b, 2]]
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)   // vue生成组件最原始的写法  
}

app
    .use(createPinia())
    .use(router)
const permiss = usePermissStore()
// 声明一个全局指令
app.directive('permiss', {
    mounted(el, binding) {

        if (!permiss.key.includes(String(binding.value))) {
            el['hidden'] = true

        }
    }
})

app
    .mount('#app')
