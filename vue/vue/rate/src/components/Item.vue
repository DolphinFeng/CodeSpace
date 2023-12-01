<template>
    <div>
        用户{{ user }}
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps(['user'])
</script>

<style scoped>

</style>