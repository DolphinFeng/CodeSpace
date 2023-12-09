<template>
    <ElScrollbar>
        <div class="mt-10 pl-6 pr-6 space-y-1.5" v-for="menuItem in menus">
            <div class="menu-title text-main">{{menuItem.name}}</div>
            <div class="menu-item hover-bg-main text-main" v-for="menu in menuItem.menus" :key="menu.key" :class="{'active': currentKey === menu.key}"
            @click="changeMenu(menu)"
            >
                <IconPark :icon="menu.icon" size="18" :theme="menu.theme"/>
                <!-- size不绑定因为是固定的，其余要动态绑定属性 -->
                <span class="ml-1">{{ menu.name }}</span>
            </div>
        </div>
    </ElScrollbar>
</template>

<script setup>
// import {ref} from 'vue'
// // npm i @icon-park/vue-next 安装
// // 下面这个都是图标对象
// import {Planet, Music, VideoOne, Fm, Like, Computer, DownloadThree, PlayTwo} from '@icon-park/vue-next'
// import IconPark from '@/components/common/IconPark.vue'
// let currentKey = ref('discover')
// const changeMenu = (menu) => {
//     currentKey.value = menu.key
// }
//     const menus = ref(
//         [
//         {
//             name: "在线音乐",
//             menus: [
//                 {
//                     name: "推荐",
//                     key: "discover",
//                     icon: Planet,
//                     theme: 'outline',
//                 },
//                 {
//                     name: "音乐馆",
//                     key: "music",
//                     icon: Music,
//                     theme: 'outline',
//                 },
//                 {
//                     name: "视频",
//                     key: "video",
//                     icon: VideoOne,
//                     theme: 'outline',
//                 },
//                 {
//                     name: "电台",
//                     key: "dj",
//                     icon: Fm,
//                     theme: 'outline',
//                 },
//             ]
//         },
//         {
//             name: "我的音乐",
//             menus: [
//                 {
//                     name: "我喜欢",
//                     key: "love",
//                     icon: Like,
//                     theme: 'outline',
//                 },
//                 {
//                     name: "本地歌曲",
//                     key: "local",
//                     icon: Computer,
//                     theme: 'outline',
//                 },
//                 {
//                     name: "下载歌曲",
//                     key: "download",
//                     icon: DownloadThree,
//                     theme: 'outline',
//                 },
//                 {
//                     name: "最近播放",
//                     key: "recently",
//                     icon: PlayTwo,
//                     theme: 'outline'
//                 },
//             ]
//         }
//     ]
//     )

import IconPark from '@/components/common/IconPark.vue'
// 模块化 hooks编程
// 数据离开组件，组件就会很好读
// 范式，use开头， 函数式编程
import { useMenu } from './useMenu.js'
const { menus, currentKey, changeMenu } = useMenu()

</script>

<style scoped>
/* 将一些类集合起来 */
.menu-title {
    @apply text-xs pl-4 pr-4 pb-2;
}
.menu-item {
    @apply text-sm pl-4 pr-4 pt-1.5 pb-1.5 rounded cursor-pointer transition-colors flex items-center;
}
.active {
    @apply bg-gradient-to-r from-teal-400 to-emerald-400 text-slate-50 cursor-default;
}

</style>