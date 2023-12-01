<script setup>
// import Rate from './components/Rate.vue'
import JHead from './components/JHead.vue'
import JMain from './components/JMain.vue'
import JSide from './components/JSide.vue'
import JAdver from './components/JAdver.vue'
</script>

<template>
  <!-- <h1>Hello World</h1>
  <Rate /> -->
  <div class="header">
    <JHead/>
  </div>
  <div class="body">
    <div class="aside">
      <JSide/>
    </div>
    <div class="main">
      <JMain/>
    </div>
    <div class="right">
      <JAdver/>
    </div>
  </div>
</template>

<style scoped>

</style>
