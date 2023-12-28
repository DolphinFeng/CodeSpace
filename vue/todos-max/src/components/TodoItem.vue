<template>
    <li class="todo" >
        <div class="view">
            <label>{{todo.text}}</label>
        </div>
    </li>
</template>

<script setup>
import { defineProps } from 'vue';
let props = defineProps(['todo'])
// console.log(props.todo.value.text)
</script>

<style scoped>

</style>