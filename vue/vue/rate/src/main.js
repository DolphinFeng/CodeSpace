// main.js是入口文件
import { createApp } from 'vue'
// 跟组件 vue开发的基本单元
import App from './App.vue'
// 为什么要挂载：原生的js不支持vue语法和mvvm，原生的js dom编程很低效  #app  html，css，js三个放一起叫做组件
// vue开创了一个mvvm的世界，组件编程，没有dom结构  
// App是js声明的
createApp(App).mount('#app')
