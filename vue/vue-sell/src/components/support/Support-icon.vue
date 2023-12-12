<template>
    
    <!-- 帮Header.vue展示一个图片，图片由header决定 -->
    <span class="support-icon" :class="iconClass"></span>
</template>

<script>
    export default {
        props: {
            // 用于接收父组件传进来的值
            size: {
                type: String,
                default: '1'
            },
            type: {
                type: Number,
                default: 0
            }
        },
        computed: {
            // 计算属性的函数名可以当成数据源使用
            
            iconClass() {
                const classMap = ['decrease', 'discount', 'invoice', 'guarantee']
                return `icon-${this.size} ${classMap[this.type]}`
            }
        }
    }
</script>

<style lang="less" scoped>
@import '@/common/style/mixin.less';
.support-icon{
    display: inline-block; // 行内块
    background-repeat: no-repeat;
}
.icon-1{
    width: 12px;
    height: 12px;
    background-size: 100% 100%;
    &.decrease{
        // 当既有icon-1 又有decrease这个类名时，&可以继承
        .bg-image('decrease_1')
    }
    &.discount{
        .bg-image('discount_1')
    }
    &.special{
        .bg-image('special_1')
    }
    &.invoice{
        .bg-image('invoice_1')
    }
    &.guarantee{
        .bg-image('guarantee_1')
    }
}
.icon-2{
    width: 16px;
    height: 16px;
    background-size: 100% 100%;
    &.decrease{
        // 当既有icon-1 又有decrease这个类名时，&可以继承
        .bg-image('decrease_2')
    }
    &.discount{
        .bg-image('discount_2')
    }
    &.special{
        .bg-image('special_2')
    }
    &.invoice{
        .bg-image('invoice_2')
    }
    &.guarantee{
        .bg-image('guarantee_2')
    }
}
.icon-3{
    width: 12px;
    height: 12px;
    background-size: 100% 100%;
    &.decrease{
        // 当既有icon-1 又有decrease这个类名时，&可以继承
        .bg-image('decrease_3')
    }
    &.discount{
        .bg-image('discount_3')
    }
    &.special{
        .bg-image('special_3')
    }
    &.invoice{
        .bg-image('invoice_3')
    }
    &.guarantee{
        .bg-image('guarantee_3')
    }
}
.icon-4{
    width: 16px;
    height: 16px;
    background-size: 100% 100%;
    &.decrease{
        // 当既有icon-1 又有decrease这个类名时，&可以继承
        .bg-image('decrease_4')
    }
    &.discount{
        .bg-image('discount_4')
    }
    &.special{
        .bg-image('special_4')
    }
    &.invoice{
        .bg-image('invoice_4')
    }
    &.guarantee{
        .bg-image('guarantee_4')
    }
}
</style>