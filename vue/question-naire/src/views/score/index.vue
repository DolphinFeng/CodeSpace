<template>
    <div class="score">
        <h2>得分：{{score}}</h2>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
    export default {
        data() {
            return {
                score: 0,
            }
        },
        computed: {
            ...mapState(['answerId']),
            ...mapGetters(['rightAnswer'])
        },
        created() {
            // 声明周期中计算
            this.calcScore()
        },
        methods: {
            calcScore() {
                let every = 100 / this.answerId.length
                this.answerId.forEach((item, index) => {
                    if(item == this.rightAnswer[index]) {
                        this.score += every 
                    }
                })
            }
        }
    }
</script>

<style lang="less" scoped>
.score {
    color: #fff;
    h2{
        color: white;
    } 
}
</style>