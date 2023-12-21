<template>
    <div>
      <div class="head">
        <input type="text" name="" v-model="message">
        <button @click="submit">确定</button>
      </div>
      <List :lists="lists"/> 
      <!-- <List :msg="message" /> -->
      <!-- 拿上来用，可以这样写 -->
    </div>
  </template>
  
  <script>
  import List from '@/components/body1/List.vue' // 引入三个步骤：1，引入
    export default {
      components: {
        List // 2， 声明
      },
      data() {
        return {
          lists: ['html', 'js'],
          message: ''
        }
      },
      watch: {
        lists(newVal) {
          // console.log(newVal) 父组件监听不到子组件，所以不是双向绑定
        }
      },
      methods: {
        submit() {
          // console.log(this.message);
          if(this.message) {
            this.lists.push(this.message);
            this.message = ''
          }
          
        }
      }
    }
  </script>
  
  <style lang="css" scoped>
  
  </style>
  