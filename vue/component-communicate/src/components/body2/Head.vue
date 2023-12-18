<template>
    <div class="head">
        <input type="text" name="" v-model="message">
        <button @click="submit">确定</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: ''
            }
        },
        methods: {
            submit() {
                if(this.message){
                    // 将message传给父组件使用
                    this.$emit('add', this.message) // 时间名称，抛出来的参数，父组件负责一直订阅
                    this.message = '';
                }
            }
        }
    }
</script>

<style lang="css" scoped>

</style>