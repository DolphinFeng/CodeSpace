import { createApp } from 'vue'
import '@/assets/base.scss'
import '@/assets/theme.scss'
import App from './App.vue'
import router from './router'
import { createPinia} from 'pinia'
import '@/utils/extend'

createApp(App)
    .use(createPinia())
    .use(router)
    .mount('#app')
    
