<template>
  <v-header/>
  <router-view/>
</template>

<script>
import Header from '@/components/header/Header.vue';
import { getSeller } from '@/api'
// 可以省略/index.js 引入一个对象就是那些被抛出的
export default {
  // vue3支持的选项式api
  components: {
    // 左边的Header可以随意，右边是自己引入的
    'v-header': Header
  },
  created() {
    getSeller().then(res => {
      console.log(res)
    })
  }
}
</script>

<style lang="less">

</style>
