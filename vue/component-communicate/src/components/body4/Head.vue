<template>
    <div class="head">
        <input type="text" name="" v-model="message">
        <button @click="submit">确定</button>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
    export default {
        methods: {
            submit() {
                if(!this.message) return 
                this.listsAdd(this.message)
                this.message = ''
            },
            ...mapMutations(['listsAdd'])
        }
    }
</script>

<style lang="css" scoped>

</style>