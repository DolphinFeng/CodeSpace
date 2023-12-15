<script setup>
// import { onMounted } from 'vue' // 这里进行挂载，然后就可以立即发送请求
// import Menu from './components/layout/menu/Menu.vue';

// import { getBanner } from '@/utils/api' // 为何解构需要{} 因为过来的时候是个对象
// import { getSearchSuggestion } from '@/utils/api'

// 请求发送的时机在何时？在进行挂载

// onMounted(async () => {
//   const data = await getBanner()
//   const result = await getSearchSuggestion('海阔天空')
//   console.log(data)
//   console.log(result)
// })

</script>

<template>
  <router-view></router-view>
</template>

<style scoped>

</style>
