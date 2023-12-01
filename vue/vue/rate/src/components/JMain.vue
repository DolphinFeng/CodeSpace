<template>
    <div>
        JMain
        <div v-for="user in users">
            <Item :user="user"/>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Item from './item.vue'
let users = ref([])

setTimeout(() => {
    // 数据响应式，动态更新，不用dom编程了，这个思想就叫mvvm
    users.value = [...users.value, 'Dolphin']
}, 2000)

fetch('https://k9gtiz.laf.run/add-todo')
    .then(res => res.json())
    .then(data => {
        users.value = data.data.map(item => item.txt)
    })
</script>

<style scoped>

</style>