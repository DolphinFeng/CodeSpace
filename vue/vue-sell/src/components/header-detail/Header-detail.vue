<template>
    <transition name="fade">
    <!-- 页面动画 -->
    <!-- transition只能包含一个div ，vue2是这样，vue3可以写多个-->
        <div class="head-detail">

            <div class="detail-wrapper">
                <div class="detail-main">
                    <h1 class="name">{{seller.name}}</h1>
                </div>
            </div>

            <div class="detail-close" @click.stop="hideDetail" >
                x
            </div>

        </div>

    </transition>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        methods: {
            hideDetail() {
                // 操作不了父组件的数据源咋办？子父组件通讯
                // 创建一个hide事件
                this.$emit('hide', false) // this指向vue  emit发散的意思   （事件名，值）  没有指明发给哪儿
                
            }
        }
    }
</script>

<style lang="less" scoped>
@import '@/common/style/variable.less';
.head-detail{
    position: fixed; // 固定定位相对于整个窗口
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: @color-background-s; 
    color: @color-white;
    backdrop-filter: blur(10px); // 只虚化底层
    &.fade-enter-from, &.fade-leave-to{
        // fade是transition的name enter-from从全透明到不透明， leave-to消失成为全透明的状态
        // 拥有这两个类名时
        opacity: 0; // 全透明
        background: @color-background;
    }
    &.fade-enter-active, &.fade-leave-active{
        transition: all 0.5s ease; // 透明到不透明有0.5s
    }

    .detail-wrapper{

    }

    .detail-close{
        position: fixed;
        width: 30px;
        height: 30px;
        bottom: 30px;
        left: 50%;
        margin-left: -15px; // 比transform: translate(-50%) 更优雅
        text-align: center; // x 居中
        // align-items: center; 需要弹性才能y居中
        line-height: 30px; // y 居中  
    }
}


</style>