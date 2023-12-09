<template>
    <!-- 给项目带来图标 如果是开源项目，用别人的项目就可以 -->
    <!-- 图标组件  spin是旋转动画  strokeLinecap描边-->
    <component :is="icon" :theme="theme" :size="size" :spin="spin" :fill="fill" :strokeLinecap="strokeLinecap" :strokeLinejoin="strokeLinejoin" :strokeWidth="strokeWidth">

    </component>

</template>

<script setup>
// 私有数据 props
// defineProps来自于vue，定义父组件传过来的参数
// vue组件的一种声明方式，本来是由各种图标，Component + is 是组件
import { defineProps } from 'vue';
// 想让子组件使用父组件传过来的props 先声明才能用 为了安全
  defineProps(['icon', 'theme', 'size', 'spin', 'fill', 'strokeLinecap', 'strokeLinejoin', 'strokeWidth'])
</script>
