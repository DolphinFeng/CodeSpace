<template>
    <div class="book-publish">
        <div class="editor">
            <QuillEditor theme="snow" placeholder="请输入内容" v-model:content="state.content" contentType="html"
                @textChange="contentType" />
        </div>
        <div class="book-wrap">
            <div class="book-cell">
                <van-field v-model="state.title" label="标题" placeholder="请输入标题" />
            </div>
            <div class="book-cell">
                <van-field label="图片上传">
                    <template #input>
                        <van-uploader v-model="state.picture" multiple max-count="1" />
                    </template>
                </van-field>
            </div>
            <div class="book-cell">
                
            </div>
        </div>
    </div>

    <div class="bottom-menu">
        <FootNav />
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import FootNav from '../components/FootNav/FootNav.vue'

const state = reactive({
    content: '',
    title: '',
    picture: [],
})
const contentType = () => {
    console.log(state.content)
}
</script>

<style lang="less" scoped>
.book-publish {
    min-height: 90vh;
    position: relative;

    .book-wrap {
        margin-top: 0.8rem;

        .book-cell {
            border-bottom: 1px solid #d1d5db;
        }
    }
}
</style>

<style>
.ql-container.ql-snow {
    height: 200px;
}
</style>