<template>
    <div>
        <!-- 点击了才能订阅 handle才能被触发-->
      <Head @add="handle"/>
      <!-- 会读成html5的head ，大写就可以，但是会警告，以前也会报错 -->
      <div class="body">
        <ul>
          <li v-for="(item, index) in lists" :key="index">{{ item }}</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import Head from '@/components/body2/Head.vue'
    export default {
      components: {
        Head
      },
      data() {
        return {
          lists: ['html', 'css']
        //   message: ''
        }
      },
      methods: {
        handle(val) {
            // 有个参数，可以理解为事件参数
            // console.log(val)
            this.lists.push(val)
        }
      }
    }
  </script>
  
  <style lang="css" scoped>
  
  </style>
  