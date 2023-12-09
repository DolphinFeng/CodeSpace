<template>
    <!-- drag 拖拽的效果 -->
    <div class="flex items-center justify-between drag h-14">
        <!-- 水平居中  padding left 左边5个单位的间距 -->
        <div class="flex items-center pl-5">
            <IconPark :icon="Left" :size="iconSize" stroke-width="2" class="icon-button"/>
            <IconPark :icon="Right" :size="iconSize" stroke-width="2" class="icon-button"/>
            <div class="search no-drag ml-2">
                <SearchPop/>
            </div>
        </div>
        <div class="flex items-center mr-5">
            <IconPark :icon="Mail" :size="iconSize" stroke-width="2" class="icon-button"/>
            <IconPark :icon="Platte" :size="iconSize" stroke-width="2" class="icon-button"/>
            <IconPark :icon="HamburgerButton" :size="iconSize" stroke-width="2" class="icon-button"/>
            
        </div>
        <!-- <div class="flex items-center mr-15"></div> -->
    </div>
</template>

<script setup>
import SearchPop from '@/components/layout/header/SearchPop.vue'
import IconPark from '@/components/common/IconPark.vue'
import { Left, Right, Mail, Platte, HamburgerButton } from '@icon-park/vue-next';
const iconSize = 22
</script>

<style lang="scss" scoped>

</style>