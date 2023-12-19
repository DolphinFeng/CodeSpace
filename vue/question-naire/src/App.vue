<template>
  
    <!-- <div class="test"></div> -->
    <div>
      <router-view></router-view>
    </div>
  
</template>

<script>
  export default {

  }
</script>

<style lang="less">
// html {
//   font-size: 20px; // div盒子就变成100*100了 只需要在用户刚加载的那一刻读取用户的手机屏幕的宽度
// }
// 媒体查询(css自带的专用于手机屏幕适配)  最小宽度都得为400，iPhone6-plus 414
// iphone还好，只有375和414两个宽度
// @media(min-width: 400px) {
//   html {
//   font-size: 25px; 
// }
// }
.test {
  // width: 100px;
  // height: 100px;
  width: 5rem;
  height: 5rem; // rem默认16px，取决于页面根字体的大小
  background: black;
}
</style>
