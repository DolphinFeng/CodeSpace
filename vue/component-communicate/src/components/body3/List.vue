<template>
    <div class="body">
        <ul>
          <li v-for="(item, index) in lists" :key="index">{{ item }}</li>
        </ul>
      </div>
</template>

<script>
    export default {
        props: {
          msg: {
            type: String,
            default: ''
          }
        }, // data是正数据源，负数据源，props只接受父组件的东西
        watch: {
          msg(newVal){
            // console.log(newVal)
            this.lists.push(newVal)
          }
        },
        data() {
          return {
            lists: ['html', 'js']
          }
        }
    }
</script>

<style lang="css" scoped>

</style>