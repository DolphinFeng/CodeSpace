<template>
  <v-header/>
  <router-view/>
</template>

<script>
import Header from '@/components/header/Header.vue';
export default {
  // vue3支持的选项式api
  components: {
    // 左边的Header可以随意，右边是自己引入的
    'v-header': Header
  }
}
</script>

<style lang="less">

</style>
