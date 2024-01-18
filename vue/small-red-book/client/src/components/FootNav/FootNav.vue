<template>
    <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o" @click="navigateTo(0)"></van-tabbar-item>
        <van-tabbar-item @click="navigateTo(1)">
            <template #icon="props">
                <van-icon name="shopping-cart-o" />
            </template>
        </van-tabbar-item>
        <van-tabbar-item @click="navigateTo(2)">
            <template #icon="props">
                <van-icon name="plus" color="#ee0a24" />
            </template>
        </van-tabbar-item>
        <van-tabbar-item @click="navigateTo(3)">
            <template #icon="props">
                <van-icon name="chat-o" />
            </template>
        </van-tabbar-item>
        <van-tabbar-item icon="friends-o" @click="navigateTo(4)"></van-tabbar-item>
    </van-tabbar>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const active = ref(0)

const navigateTo = (index) => {
    active.value = index
    switch(index) {
        case 0:
            router.push('/explore')
            break;
        case 1:
            router.push('/shop')
            break;
        case 2:
            router.push('/publish')
            break;
        case 3:
            router.push('/notification')
            break;
        case 4:
            router.push('/userProfile')
            break;
        default:
            break;
    }
}
</script>

<style lang="less" scoped></style>