PS D:\codeSpace\vue> npm init vite
√ Project name: ... todos-max
√ Select a framework: » Vue
√ Select a variant: » JavaScript
PS D:\codeSpace\vue\todos-max> npm i

# 复杂组件设计
Todos

- 组件公式
    UI Component + store 
    单个组件代码不要超过100行代码
    性能 + 复用
- 组件树 // 看到页面，会先看下组件树的划分
    // 分了组件，单个组件的担子就轻了，代码就少了，可以复用了
    App.vue
    TodoList.vue
    TodoItem.vue

- 复杂数据业务组件
    - 数据驱动页面
    - 积累常见的做法
        - todos filterTodos
        - tabs 切换
            - 标记一个选中状态 visibility = 'all | active | completed'
            - 动态绑定类名 :class="{selected: visibility == key}"
            - click 事件 visibility -> 相应的