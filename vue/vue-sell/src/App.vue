<template>
  <v-header :seller="sellerData"/>
  <!-- v-bind绑定了才能让sellerData成为一个变量 数据源改变响应式更新 -->

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
    // 生命周期函数
    getSeller().then(res => {
      console.log(res)
      this.sellerData = res
    })
  },
  data() {
    return {
      sellerData: {}//会被重新赋值res，传给子组件
    }
  }
}
</script>

<style lang="less">

</style>
