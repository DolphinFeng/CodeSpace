<template>
    <section class="todoapp"> 
        <header class="header">
            <h1>todos</h1>
            <!-- 页面向上有表单，让光标自动聚焦，不用再点一下 
            事件绑定 v-bind：on @  enter事件的修饰符，按的是回车键
            -->
            <input 
                class="new-todo"
                autofocus
                autocomplete="off"
                placeholder="What needs to be done?"
                @keyup.enter="addTodo"
            >
        </header>
        <section class="main" v-show="todos.length">
            <!-- 在做逻辑时，vue开发，要紧密关心数据状态正确性 -->
            <input 
                type="checkbox"
                class="toggle-all"
                id="toggle-all"
                :checked="allChecked"
                @change=""
            >
            <label for="toggle-all"></label>
            <ul class="todo-list">
                <TodoItem 
                    v-for="(todo,index) in filterTodos"
                    :key="index"
                    :todo="todo"
                />
            </ul>
        </section>
        <footer class="footer" v-show="todos.length">
            <span class="todo-count">
                <strong>{{ remaining }}</strong>
            </span>
            <ul class="filters">
                <li v-for="(val,key) in filters">
                    <a
                     :href="'#/' + key"
                     :class="{selected:key === visibility}"
                     @click="visibility = key"
                     >{{ key }}</a>
                </li>
            </ul>
        </footer>
    </section>
</template>

<script setup>
import TodoItem from './TodoItem.vue';
import { ref,computed } from 'vue'
// 组件可以使用的数据状态 私有的ref props由父组件提供的 computed
// computed 来源 ref ， props ， computed / vuex/pinia
// 数据混在一起
// all/active/complted  不同的done
    // todolist TodoItem MVVM filterTodos初始值为todos
    // tab visibility  
    // 数据驱动界面

//枚举
const filters = {
    all : todos => todos,
    active : todos => todos.filter(todo => !todo.done),
    completed : todos => todos.filter(todo => todo.done)
}


const visibility = ref('all') //change事件
const todos = ref([
    {   
        id: 1,
        text:'吃饭',
        done:true
    },
    {   
        id: 2,
        text:'喝酒',
        done:false
    },
    {   
        id: 3,
        text:'元梦之星',
        done:false
    },
])  //容器 所有的任务 仓库
const allChecked = computed(()=>todos.value.every(todo => todo.done));    // computed todos 每一个
const filterTodos = computed(()=>filters[visibility.value](todos.value))  //computed todos + visibility
const remaining = computed(()=>todos.value.filter(todo => !todo.done).length)    //computed

const addTodo = (e) => {
    const text = e.target.value
    if (text.trim()){
        //vuex,action
        todos.value.push({text,done:false})
    }
    e.target.value = ""
}

</script>

<style scoped>

</style>