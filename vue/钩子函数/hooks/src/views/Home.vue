<template>
    <div>
        <p>home page</p>
        <!-- <keep-alive>
            <component :is="Hello"></component>
        </keep-alive> -->
        <Hello />
    </div>
</template>

<script setup>
import { onMounted, onActivated, onDeactivated } from 'vue';
import Hello from '../components/Hello.vue'


onMounted(() => {
    console.log('home的onMounted');
})
onActivated(() => {   // 当被缓存的组件再次生效时触发
    console.log('home的onActivated');  
}) 
onDeactivated(() => {  // 当组件被缓存起来时触发 也就是离开
    console.log('home的onDeactivated');
})
</script>

<style lang="css" scoped>

</style>