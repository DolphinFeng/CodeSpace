<template>
  <div>
    <p>{{state.count}}</p>
    <p>{{num}}</p>
    <!-- v8在把变量进行重新赋值，v8只负责js 但是页面此时已经渲染完成 变化的时候的渲染 这就是响应式的效果 -->
    <button @click="() => state.count++">add</button>
  </div>
</template>

<script setup>
import { reactive, computed, watch, effect } from 'vue'

// 自己打造一个reactive 不刷新页面的情况下再次渲染 如何做到
// vue的源码编译器，当我们保存代码的时候就会启动，编译成原始的html, css, js 再去拿到浏览器渲染
// 有变量发生变更时，vue编译器会重新编译下代码，又给到浏览器渲染，这需要一个监听器，监听器会通知编译器重新编译
// 重新编译的代码再给到浏览器加载，让浏览器重新执行这份代码，如何在不刷新页面再渲染
// 如果这个案例，用纯html， js写，v8默认就会刷新  所以其核心就是监听器 打造一个响应式就是打造一个监听器

// import { reactive} from './reactivity/reactive.js'

const state = reactive({ // 响应式的对象
  count: 1,
  // msg: 2
})

// const state2 = reactive(state) // 从执行角度可以理解，但是实际开发，这个操作就是多此一举，再响应就是没有意义
// 防止有小可爱这样写，只能在源码规避好

// const state2 = reactive({
//   num: 2,
// })

const num = computed(() => {
  return state.count * 10
})

watch(
  () => state.count, 
  (newVal, oldVal) => {
    console.log(newVal, oldVal);
  }
)

// effect(() => {  // 类似生命周期，一开始就会执行，但是这个东西yyx是作依赖收集用的，官方文档没有解释 ，参二为true，不执行，可控
  // console.log('effect');
// }, {lazy: true})
</script>

<style lang="css" scoped>

</style>