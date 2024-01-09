<template>
    <div class="note-list">
        <ul v-if="noteList.length">
            <li v-for="item in noteList" :key="item.id" @click="goNoteDetail(item.id)">
                <div class="img">
                    <img :src="item.head_img" alt="">
                </div>
                <p class="time">{{item.c_time}}</p>
                <p class="title">{{item.title}}</p>
            </li>
        </ul>
        <p class="empty" v-else>当前分类下还没有文章</p>
        <!-- 欢迎{{$route.query.title}} -->
    </div>
</template>

<script setup>
import { onMounted, onBeforeMount, onUnmounted, onUpdated, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import axios from '../api'
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

const router = useRouter()   // 路由实例router范围大于route
// console.log(router.currentRoute.value.query.title)  

const route = useRoute()   
// console.log(route.query.title)  // 当前路由详情

// 放全局没地方写async 不过可以直接写await  因为setup已经封装好了async

const noteList = ref([])

onMounted(async() => {
    // 页面加载的过程中发请求，拿到当前分类的数据
    const { data } = await axios.post('/findNoteListByType', {
        note_type: route.query.title,
    })
    // console.log(data)
    noteList.value = data
})

const goNoteDetail = (id) => {
    router.push({ path: '/noteDetail', query: {id: id} })
}

</script>

<style lang="less" scoped>
.note-list {
    width: 100%;
    padding: 1rem 0.667rem 0;   // 项目创建之初安装了flexibal这个东西
    box-sizing: border-box;
    ul {
        display: grid; // 网格布局
        grid-template-columns: 1fr 1fr;   // 二列
        grid-column-gap: 20px;
        grid-row-gap: 30px;
        // flex-wrap: wrap; // 弹性容器默认不换行
        // justify-content: space-between;  // 空格隔开
        li {
            // width: 50%;  // 如果是50% 两个就会撑满
            // padding: 0 10px;
            // box-sizing: border-box;  // 换个模型
            // width: 100%;
            // height: 4rem;
            img {
                width: 100%;
                height: 4rem;
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