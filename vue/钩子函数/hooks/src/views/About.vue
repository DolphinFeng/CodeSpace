<template>
    <div>
        <p>about page</p>
        <!-- <keep-alive>
            <component :is="Hello"></component>
        </keep-alive> -->
        <Hello />
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import Hello from '../components/Hello.vue'
import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router';

// onBeforeRouteLeave((to, from, next) => {  // 离开页面前：离开页面前，弹出你确定想要离开
//     console.log(to, from);
//     const flag = window.confirm('你确定要离开这个页面吗？')
//     if (flag) {
//         next()
//     }
// })
onMounted(() => {
    console.log('about的onMounted');
})
</script>

<style lang="css" scoped>

</style>