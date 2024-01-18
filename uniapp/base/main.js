import App from './App'
// ifndef表示除了Vue3引擎，其他都可以读懂这个代码  vue2
// #ifndef VUE3   
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false

Vue.prototype.name = '测试'   // options才可以用

App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif
// vue3引擎会读这个代码  vue3
// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif