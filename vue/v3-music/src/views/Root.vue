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
        <div class="flex-1 overflow-hidden">
          <ELScrollbar>
            <div class="container max-auto">
              <router-view />
            </div>
          </ELScrollbar>
          <!-- <ElButton>按钮</ElButton> -->
        </div>
      </div>
    </div>
  </template>

<script setup>
// import Discover from '@/views/discover/Discover.vue'
import Menu from '@/components/layout/menu/Menu.vue';
import Header from '@/components/layout/header/Header.vue';
</script>

<style lang="scss" scoped>

</style>