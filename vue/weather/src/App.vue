<template>
  <div>
    <!-- 所有配置了路由的.vue文件都展示在这个口子 -->
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    // 数据源
    data() {
      return {}
    }
  }
</script>

<!-- scope是私有的 -->
<style lang="css">
*{
  margin: 0;
  padding: 0;
}
</style>