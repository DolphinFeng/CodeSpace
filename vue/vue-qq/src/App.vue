<template>
  <Transition name="move">
    <router-view></router-view>
  </Transition>
</template>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
.move-enter-active, // move是动画名 enter是进入动画
.move-leave-active{  
  transition: all 0.3s ease-out;
}

.move-enter-from, 
.move-leave-to {
  transition: translateX(20px);  // 从偏离x轴右移了 10px 回归到目前的状态
  opacity: 0;   // 从全透明到不透明
}
</style>
