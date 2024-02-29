<template>
    <component :is="component"></component>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from '../myRouter/index.js'

const router = useRouter() // 在当前组件注入router类

console.log(router);  
const component = computed(() => {
    // 数组映射关系
    const route = router.routes.find((route) => {
        return route.path === router.current.value
    })
    return route ? route.component : null
})
</script>