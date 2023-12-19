<template>
    <div>
        item
        <ItemContainer parent-component="item"/>
    </div>
</template>

<script>
import ItemContainer from '@/components/ItemContainer.vue'
import { mapActions } from 'vuex'
    export default {
        components: {
            ItemContainer
        },
        created() {
            this.getQuestionListAction()
        },
        methods: {
            ...mapActions(['getQuestionListAction']) // ...是它的语法
        }
    }
</script>

<style lang="less" scoped>

</style>