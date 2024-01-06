# 安装
npm init vite
v3-admin-ts
Vue
TypeScript
cd v3-admin-ts
npm i vue-router pinia 
npm i -D unplugin-auto-import unplugin-vue-components
npm i element-plus
npm i @element-plus/icons-vue // 安装图标

# TypeScript
    让js拥有强类型，静态类型检测的超能力  他是 JavaScript 的超集
- 如何使用ts?
    - 像js一样来写
    - 加点啥 script lang = "ts"   js后缀改成ts
        - 类型检测
            重要的数据 比如路由中，就是路由数组
- 什么时候要ts
    - 写js基础上，做加法
    - 关心的数据
        - ref
        - reactive
        - props
        - store
    - 函数的参数

# 项目亮点
- 使用了ElementPlus
    - 登录 注册页面 表单
        - 表单的目的是收集数据 :model=" " 双向绑定
            每一个el-input v-model=".username"
        - 表单的校验配置一下就好
        - 用户体验做好
            - 自动聚焦
            - @keyup.enter
        - ref 属性 DOM 表单
            - const login = ref() // null
            - mouted <form ref="login">
        - 表单提交
            - validate

- 为什么element-plus 图标搞得这么复杂
    - 按需加载
        1. 图标库有点大，如果用户使用了别的图标，就可以省空间
        2. 其他的选择
        3. 单独安装图标库
            app.component() 全局挂载一下 用到哪几个就挂载哪些
- 带有角色校验的菜单
    - 菜单
        el-menu/el-sub-menu/el-menu-item
    - 当前选中的菜单
        :default-active="route.path"
    - 哪些菜单可以看到？
        自定义指令
        store/permiss/roleList/user/includes
        添加一个数据项key 任何组件都可以调用
        setKeys action
        localStorage 读取 
- 自定义指令
    app.directives(name)
    v-name
    mounted(el, binding)
    el['hidden'] = true
    el.style.opacity = 0  v-show

# 项目难点
- 多组件状态的共享和设计
    - vuex 和 pinia
        用pinia vuex modules 很灵活，加一个defineStore没有vuex的树状约束，执行下函数就能拿到hook 语法很简洁
        学vuex设计模式，state mutation action getter 这个更安全，但是会比较麻烦
    - 如何设置pinia
        学习过一些项目，比如vue-music vue-admin
    - 因为当我在多个组件，特别是兄弟或跨页面级别组件，有共享状态需求的时候，我封装成了一个store函数
        此前是用得ref + props + emits 换成store 


## vue 考题
- <component :is="componentName"/>
    循环或动态输出组件
- <template />
    与slot结合
    不会显示到页面上 可以接收指令
