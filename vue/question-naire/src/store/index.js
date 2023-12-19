import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state() { // 全局的数据源  vue3语法，state函数，return 人家默认生成了对象
    return {
      questionList: [],
      itemNum: 1, // 第几题
      answerId: [], // 存放选中的答案 但是得自己修改这个数据
    }
  },
  getters: { // 相当于计算属性computed
    rightAnswer(state) {
      let arr = []
      for(let question of state.questionList) {
        for(let answer of question.topic_answer) {
          if(answer.is_standard_answer) {
            arr.push(answer.topic_answer_id)
          }
        }
      }
      return arr
    }
  },
  mutations: { // 相当于methods，同步修改数据源的
    getQuestionList(state, list) { // state是自带的参数，就是给你访问数据源
      state.questionList = list // 传进来的实参赋给仓库中去
    },
    recordAnswer(state, id) { // IO方法（点击事件，需要等你点），也是异步
      state.answerId.push(id)
    },
    nextItem(state) { // 1.保留当前的答案，itemNum + 1
      state.itemNum += 1
    }
  },
  actions: { // async mothods 异步方法，异步修改数据源，不过无法访问数据源
    // 接口请求写在这儿，因为发送接口是异步，耗时
    getQuestionListAction({commit}) { // 获取数据， 发请求  context代表整个store  {commit}就是解构context
      axios.get('https://www.fastmock.site/mock/3a33c631bcba043a378b4ceafbf994b8/question/fri')
      .then(res => {
        console.log(res)
        commit('getQuestionList', res.data) // 触发mutations中的方法getQuestionList   https://vuex.vuejs.org/zh/guide/actions.html
      })
    },
    recordAnswerAction({commit, state}, id) {
      commit('recordAnswer', id)
      if(state.itemNum < state.questionList.length) {
        commit('nextItem')
      }
    },
  },
  modules: {
  }
})
