// 类似路由 创建一个仓库，
import { createStore } from 'vuex' // 从vuex中引入一个createStrore

const store = createStore({
    // data 也是响应式
    state() {
        return {
            lists: ['html', 'css', 'js']
        }
    },
    mutations: { // methods
        listsAdd(state, val) {
            // 修改仓库的数据源
            state.lists.push(val)
        }
    }
})

export default store

