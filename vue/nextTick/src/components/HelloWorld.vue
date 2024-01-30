<template>
  <div>
    <!-- vue获取dom结构方法一 vue的语法打标记 -->
    <!-- 需要等ref解析完成 生命周期：一个vue文件在读取的那一刻到成功渲染到窗口的过程就是组件的生命周期-->
    <!-- 先是setup beforeCreate optionsAPI   -->
    <p ref="refP">消息: {{msg}}</p>
    <!-- 拿到p标签 需要编译 但是还需要把这个东西给到refP 也就是挂载-->
    <!-- 编译模板是同步代码，但是在异步宏任务之前 -->
    <button @click="updataMsg">更新消息</button>
  </div>
</template>

<script setup>
// 这个setup是个语法糖，另一个写法如下
// setup () {

// }
import { ref, onBeforeMount, onMounted, nextTick } from 'vue';

const msg = ref('你好啊')

// 获取dom结构方法一
const refP = ref(null)
// console.log(refP.value)   入口函数setup开始加载到打印
// 挂载和渲染不一样，渲染时间和硬件相关
// setTimeout(() => {  // 异步宏任务  相比较nextTick，nextTick先执行，所以nextTick是微任务
//   console.log(refP.value, 'setTimeout')
// }, 0)
// onBeforeMount(() => {  // 相比较nextTick，这个先执行
//   console.log(refP.value)
// })
nextTick(() =>{  // 可以打印，但是nextTick又不是生命周期，很特殊，dom更新后就会执行
  console.log(refP.value, 'nextTick')
})
onMounted(() => {  // 挂载完执行onMounted
  console.log(refP.value, 'onMounted')
})
// console.log(refP.value)   相比较nextTick，这个先执行，所以nextTick是异步代码

// const updataMsg = () => {  // IO宏任务, 可以拿到p标签的dom结构
//   // console.log(document.querySelector('p'), 'updataMsg') // 先获取dom再去改值 
//   msg.value = '更新后'
//   // console.log(refP.value, 'updataMsg')
//   // console.log(document.querySelector('p'), 'updataMsg')
// }

// nextTick是挂载完，还是渲染完执行
</script>

<style lang="css" scoped>

</style>