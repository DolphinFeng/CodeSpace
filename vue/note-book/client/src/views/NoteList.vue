<template>
    <div class="note-list">
        <ul>
            <li>
                <div class="img">
                    <img src="https://ts1.cn.mm.bing.net/th?id=ORMS.98534828e436b883d6aadc213ebf5f86&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.25&p=0" alt="">
                </div>
                <p class="time">2023/05/20</p>
                <p class="title">今天吃了猪脚饭今天吃了猪脚饭今天吃了猪脚饭今天吃了猪脚饭今天吃了猪脚饭今天吃了猪脚饭</p>
            </li>
            <li>
                <div class="img">
                    <img src="https://ts1.cn.mm.bing.net/th?id=ORMS.98534828e436b883d6aadc213ebf5f86&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.25&p=0" alt="">
                </div>
                <p class="time">2023/05/20</p>
                <p class="title">今天吃了猪脚饭</p>
            </li>
            <li>
                <div class="img">
                    <img src="https://ts1.cn.mm.bing.net/th?id=ORMS.98534828e436b883d6aadc213ebf5f86&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.25&p=0" alt="">
                </div>
                <p class="time">2023/05/20</p>
                <p class="title">今天吃了猪脚饭</p>
            </li>
        </ul>
        欢迎{{$route.query.title}}
    </div>
</template>

<script setup>
import { onMounted, onBeforeMount, onUnmounted, onUpdated } from 'vue';
// 页面加载中发送请求，拿到当前分类的数据
// 来到页面发请求 用生命周期函数

// 钩子生命周期过程: 1. 读到.vue代码  2. 编译  3. 挂载

// console.log('hello', document.querySelector('.note-list'))  // 操作dom结构很费性能

// onBeforeMount(() => {
//     console.log('111')
// })

// onMounted(() => {
//     console.log('222', document.querySelector('.note-list'))
// })   // 习惯性放这里发请求，有些时候要求操作dom结构 这三种方式其实都可以

// onUnmounted(() => {
//     console.log('333')
// })   // 用于清除操作，比如销毁定时器

onMounted(() => {
    
})

</script>

<style lang="less" scoped>
.note-list {
    width: 100%;
    padding: 1rem 0.667rem 0;   // 项目创建之初安装了flexibal这个东西
    box-sizing: border-box;
    ul {
        display: grid; // 网格布局
        grid-template-columns: 1fr 1fr;   // 二列
        grid-column-gap: 50px;
        grid-row-gap: 30px;
        // flex-wrap: wrap; // 弹性容器默认不换行
        // justify-content: space-between;  // 空格隔开
        li {
            // width: 50%;  // 如果是50% 两个就会撑满
            // padding: 0 10px;
            // box-sizing: border-box;  // 换个模型
            img {
                width: 100%;
                border-radius: 0.27rem;
            }
            .time {
                font-size: 0.37rem;
                color: rgba(16, 16, 16, 1);
                margin: 10px 0 5px 0;
            }
            .title {
                width: 4rem;
                font-size: 0.37rem;
                color: rgba(16, 16, 16, 1);
                white-space: nowrap;  // 单行显示
                overflow: hidden;  
                text-overflow: ellipsis;
            }
        }
    }
}
</style>