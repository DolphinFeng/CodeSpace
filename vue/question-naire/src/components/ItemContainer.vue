<template>
    <section>

        <!-- html标签，和div一样 -->
        <header class="top_tips">
            <span class="num_tip" v-if="parentComponent==='home'">
                第一周
            </span>
            <span class="num_tip" v-if="parentComponent==='item'">
                题目{{itemNum}}
            </span>
        </header>

        <div v-if="parentComponent==='home'"> 
            <div class="home_logo item_container_style">
                <!-- 放背景图片 -->
            </div>
            <router-link to="/item" class="start button_style"></router-link>
            
        </div>

        <div v-if="parentComponent==='item'">
            <div class="item_back item_container_style">
                <div class="item_list_container" v-if="questionList.length > 0">
                    <header class="item_title">{{questionList[itemNum - 1].topic_name}}</header>
                    <ul>
                        <li class="item_list" 
                        v-for="(item, index) in questionList[itemNum - 1].topic_answer" 
                        :key="item.topic_answer_id"
                        @click="choosed(index, item.topic_answer_id)" 
                        >
                            <span class="option_style" :class="{'current': currentNum === index}">{{ chooseType(index) }}</span>
                            <span class="option_detail">{{item.answer_name}}</span>
                        </li>
                        <!-- <li class="item_list">
                            <span class="option_style">B</span>
                            <span class="option_detail">答案二</span>
                        </li>
                        <li class="item_list">
                            <span class="option_style">C</span>
                            <span class="option_detail">答案一</span>
                        </li>
                        <li class="item_list">
                            <span class="option_style">D</span>
                            <span class="option_detail">答案一</span>
                        </li> -->
                    </ul>
                </div>
            </div>
            <span class="next_item button_style" @click="nextItem" v-if="itemNum < questionList.length"></span>
            <span class="submit_item button_style" @click="submit" v-else></span>
        </div>

    </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
    export default {
        props: ['parentComponent'],
        data() {
            return {
                currentNum: null, // 选中的第几个答案
                chooseId: null, // 最终选中的答案
            }
        },
        computed: mapState(['questionList', 'itemNum']),
        methods: {
            chooseType(i) {
                switch(i) {
                    case 0: return 'A';
                    case 1: return 'B';
                    case 2: return 'C';
                    case 3: return 'D';
                }
            },
            choosed(index, id) {
                console.log(index, id)
                this.currentNum = index
                this.chooseId = id
            },
            nextItem() {
               if(this.currentNum == null){
                    alert('请选中一个答案')
                    return 
               }
               this.recordAnswerAction(this.chooseId) 
               this.currentNum = null
            },
            submit() {
                // 调用一遍
                if(this.currentNum == null){
                    alert('请选中一个答案')
                    return 
               }
               this.recordAnswerAction(this.chooseId) 
               this.$router.push('/score')
            },
            ...mapActions(['recordAnswerAction'])
        }
    }
</script>

<style lang="less" scoped>

.top_tips{
    position: absolute;
    height: 7.35rem;
    width: 3.25rem;
    top: -1.3rem;
    right: 1.6rem;
    background: url(@/assets/images/WechatIMG2.png) no-repeat;
    background-size: 100% 100%;
    .num_tip{
        position: absolute;
        left: 0.48rem;
        bottom: 1.1rem;
        height: 0.7rem;
        width: 2.5rem;
        font-size: 0.6rem;
        font-family: '黑体';
        font-weight: 600;
        color: #a57c50;
        text-align: center;
    }
}
.item_container_style{
    height: 11.625rem;
    width: 13.15rem;
    background-repeat: no-repeat;
    position: absolute;
    top: 4.1rem;
    left: 1rem;
}
.home_logo {
    background: url(../assets/images/1-2.png);
    background-size: 13.142rem 100%;
    background-position: right center; // x靠右 y居中
}
.button_style{
    display: block;
    height: 2.1rem;
    width: 4.35rem;
    background-size: 100% 100%;
    position: absolute;
    top: 16.5rem;
    left: 50%;
    margin-left: -2.175rem;
    background-repeat: no-repeat;
}
.start{
    background-image: url(../assets/images/1-4.png); // background-image操作属性更强大
}
.item_back{
    background-image: url(../assets/images/2-1.png);
    background-size: 100% 100%;
}
.item_list_container{
    position: absolute;
    width: 8rem;
    height: 7rem;
    top: 2.4rem;
    left: 3rem;
    .item_title{
        font-size: 0.65rem;
        color: white;
        line-height: 0.7rem;
    }
    .item_list{
        // margin-top: 0.4rem;
        span{
            display: inline-block;
            font-size: 0.6rem;
            color: white;
        }
        .option_style{
            width: 0.725rem;
            height: 0.725rem;
            border: 1px solid white;
            border-radius: 50%;
            line-height: 0.725rem;
            text-align: center;
            font-size: 0.5rem;
            font-family: Arial;
            &.current {
                background-color: #ffd400;
                color: #575757;

                border-color: #ffd400;
            }
        }
    }
}
.next_item{
    background-image: url(../assets/images/2-2.png);
}
.submit_item{
    background-image: url('../assets/images/3-1.png');
}
</style>