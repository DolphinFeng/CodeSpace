<template>
    <div class="flex items-center justify-between h-14"> 
    <!-- 做外包就用这个tailwindcss技术栈：原子化css 弹性布局 纵轴居中 水平添加间隙 h-14 h是高度 14rem -->
    <!-- 1rem等于14px tailwindcss的单位为0.25rem 也就是3.5px -->
        <div class="flex items-center pl-5">
            <!-- padding-left 5*3.5px -->
            <IconPark 
                :icon="Left" 
                :size="iconSize"
                :stroke-width="2"
                class="icon-button"
                @click="router.back()"
            />
            <IconPark 
                :icon="Right"
                :size="iconSize"
                :stroke-width="2"
                class="icon-button"
                @click=""
            />
            <div class="search ml-2">
                <SearchPop />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// 使用vue-router提供的hook函数 获得路由对象
import { useRouter } from 'vue-router'
import { Left, Right } from '@icon-park/vue-next'
import SearchPop from '@/components/layout/header/SearchPop.vue'

const router = useRouter()
const iconSize = 22
</script>

<style scoped>

</style>