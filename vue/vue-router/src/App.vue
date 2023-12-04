<template>
  <nav>
    <router-link to="/home">home</router-link> |
    <router-link to="/about">about</router-link>
  </nav>
  <!-- 路由入口：所有配了路由的结构都会搬到这里来写 注：router-view不能写注释 -->
  <router-view></router-view>
</template>

<style>
  #app{
    /* #app写在这里都可以 */
    text-align: center;
    font-size: 40px;
  }
</style>