import { defineStore } from 'pinia'   // npm i pinia
import { getSearchSuggest } from '@/api/index'
import type { SearchSuggest } from '@/models/search'

// pinia没有mutations 相较于vuex
export const useSearchStore = defineStore('search', {
    state: () => {
        return {
            showSearchView: false,  // 默认为false不显示
            searchKeyWord: '',
            suggestData: {} as SearchSuggest,  // 返回歌曲，歌手，专辑，格式都不一样，很复杂 singer, album... 都是一个key 然后key就是一个数组
        }
    },
    getters: {  // 和vue中的computed类似 没有输入任何东西就默认显示这里的东西，输入的就会显示搜索结果
        showHot: state => state.searchKeyWord === ''
    },
    actions: {
        async suggest() { // 用this拿，所有的状态都在store里 这里是面向对象的写法，返回一个对象 options的写法
            // 和ref不一样 如果一样是.value 这里是proxy
            this.suggestData = await getSearchSuggest(this.searchKeyWord)
        }
    }
})