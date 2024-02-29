<template>
    <div id="app">
        <button @click="updateList">更新列表</button>
        <ul>
            <li v-for="n in list">{{n}}</li>
        </ul>
    </div>
</template>

<script setup>
import { nextTick, ref, onMounted } from 'vue';
import { myNextTick } from './next-tick.js'

const list = ref(new Array(20).fill(0))

const updateList = () => {
    list.value.push(...new Array(10).fill(1))
    // const liItem = document.querySelector('li:last-child') // 获取到最后一个li
    // liItem.scrollIntoView({ behavior: 'smooth' }) // 原生js的方法  同步
    // s但是读不到最后一个，用nextTick解决， 用定时器太不优雅了
    // nextTick(() => {
    //     const liItem = document.querySelector('li:last-child')
    //     liItem.scrollIntoView({ behavior: 'smooth' })
    // })
    myNextTick(() => {
        console.log('111')
        const liItem = document.querySelector('li:last-child')
        liItem.scrollIntoView({ behavior: 'smooth' })
    })
}
myNextTick(() => {
    console.log('myNextTick')
})
onMounted(() => {
    console.log('onMounted')
})
</script>

<style lang="css" scoped>
li {
    height: 100px;
    background-color: aquamarine;
    margin: 10px;
}
</style>