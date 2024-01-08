<template>
  <div>
    <!-- <van-button type="primary">主要按钮</van-button> -->
    <Transition name="move">
      <router-view></router-view>
    </Transition>
    
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.move-enter-active, // move是动画名 enter是进入动画
.move-leave-active{  
  transition: all 0.3s ease-out;
}
// https://cn.vuejs.org/guide/built-ins/transition.html
.move-enter-from, 
.move-leave-to {
  transition: translateX(20px);  // 从偏离x轴 10px 回归到目前的状态
  opacity: 0;
}

</style>