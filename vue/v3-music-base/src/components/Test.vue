<template>
    <div>
        <!-- 组件内部可以被外部定制的区域 什么都不加就是默认slot -->
        <!-- slot不是dom树 他是个类 -->
        <!-- 插槽的显示顺序取决于这里 -->
        <slot name="header"/>
        <slot />
        <slot name="footer"/>
        你好
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>