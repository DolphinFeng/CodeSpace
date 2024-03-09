<template>
    <div>
        Home page
    </div>
</template>

<script setup>
import { home } from '../api/user.js'
import { onMounted } from 'vue';

onMounted(() => {
    // axios.get('/home') // 不建议把token以？接在url后面，这样用了，所有页面都这样用很难看，所以封装下，复用
    home()
    .then((res) => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })
})
</script>

<style lang="css" scoped>

</style>