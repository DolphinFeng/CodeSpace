<template>
    <div class="body">
        <ul>
          <li v-for="(item, index) in lists" :key="index">{{ item }}</li>
        </ul>
        <!-- <button @click="changeProps">修改props</button> -->
      </div>
</template>

<script>
    export default {
        props: ['lists'], // data是正数据源，负数据源，props只接受父组件的东西
        // data(){
        //   return {
        //     // lists: ['html', 'js'],
        //   }
        // },
        // methods: {
        //   changeProps() {
        //     this.lists[0] = 'HTML' // vue2里面会给你报警告，这个写法官方不建议你这样写
        //   }
        // }
    }
</script>

<style lang="css" scoped>

</style>