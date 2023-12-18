<template>
    <div>
        <Head @add="handle"/>
        <List :msg="msg"/> 
    </div>
  </template>
  
  <script>
  import Head from '@/components/body3/Head.vue'
  import List from '@/components/body3/List.vue'
    export default {
      components: {
        Head,
        List
      },
      data() {
        return {
          msg: ''
        }
      },
      methods: {
        handle(val) {
            console.log(val)    
            this.msg = val            
        }
      }
    }
  </script>
  
  <style lang="css" scoped>
  
  </style>
  