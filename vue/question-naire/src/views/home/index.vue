<template>
    <div class="home_container">
        <!-- v-bind传变量，这里字符串即可，不需要变量 -->
        <item-container parent-component="home"></item-container>
    </div>
</template>

<script>
import ItemContainer from '@/components/ItemContainer.vue'
    export default {
        components: {
            ItemContainer
        }
    }
</script>

<style lang="less" scoped>

</style>