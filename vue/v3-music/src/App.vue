<script setup>
// import Menu from './components/layout/menu/Menu.vue';
import Menu from '@/components/layout/menu/Menu.vue';
import Header from '@/components/layout/header/Header.vue';
</script>

<template>
  <!-- <div class="w-56 h-56 bg-green-500"></div> -->
  <!-- 多个类名好处：复用 ---原子性 -->
  <div class="w-screen h-screen flex items-stretch overflow-hidden">
    <div class="w-56 h-screen flex-shrink-0">
      <Menu/>
    </div>
    <div class="flex-1 flex flex-col">
      <div class="h-14">
        <Header />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
