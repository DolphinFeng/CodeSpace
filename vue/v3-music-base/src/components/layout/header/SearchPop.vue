<template>
    <!-- vb3ts -->
    <el-popover 
        popper-style="max-width:auto;padding:0;"
        v-model:visible="showSearchView"
    >
        <template #reference>
        <!-- slot 插槽 和……相关就会出现 -->
        <!-- clearable是让你搜索的时候清空input框 -->
            <el-input
                placeholder="搜索音乐、MV、歌单"
                :prefix-icon="Search"
                clearable
                @input="searchInput"
                @focus="showSearchView=true"
                @focusout="showSearchView=false"
                v-model="searchKeyWord"
            />
        </template>
        <div class="h-96">
            <!-- 默认的slot -->
            <el-scrollbar>
                <!-- 这个滚动效果会很丝滑 -->
                <div class="pb-2 5">
                    <div v-if="showHot">  
                        <!-- 有热门的就自动输出热门歌单 -->
                        <div class="pt-2 pb-1.5 px-2.5">热门搜索</div>
                        <div>
                            <!-- justify-between就是一左一右的弹性了 -->
                            <div v-for="(item, index) in searchHot"
                                class="py-2.5 px-2.5 hover-text cursor-pointer flex justify-between items-center text-xs"
                                @click="hotClick(item.searchWord)"
                            >
                                <div>
                                    <span class="mr-1">{{ index + 1 }}</span>
                                    <span>{{item.searchWord}}</span>
                                </div>
                                <div class="text-red-300 text-xs">{{ item.score.numberFormat() }}</div>
                            </div>
                        </div>
                    </div> 
                    <SearchSuggest v-else/>
                    <!-- 没输入内容就搜 就搜搜索的建议 -->
                </div>
            </el-scrollbar>
        </div>
    </el-popover>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'  // onMounted 会更快，用户体验更重要，防止白屏
import { Search } from '@icon-park/vue-next'
// 基本上组件里没有什么状态
import { useSearchStore } from '@/stores/search' 
import { storeToRefs } from 'pinia'
import { debounce } from 'lodash' // npm i lodash 引入这个库 里面有防抖
import { getSearchHotDetail } from '@/api/index'
import type { SearchHotDetail } from '@/models/search'  // 引入的是类型
import SearchSuggest from './SearchSuggest.vue'

const { showSearchView, searchKeyWord, showHot } = storeToRefs(useSearchStore())
const { suggest } = useSearchStore()
const searchInput = debounce(() => suggest(), 500)
const searchHot = ref<SearchHotDetail[]>([])   // 后端没有这个东西回去报错，起一个约束作用

onMounted(async () => {
    searchHot.value = await getSearchHotDetail()
})

const hotClick = (text:string) => { // 用户点击了热门歌，换成热门歌去搜索
    searchKeyWord.value = text
    suggest()
    showSearchView.value = true  // 搜索的结果要显示出来
}   

</script>

<style scoped>

</style>