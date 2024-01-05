# 安装
npm init vite
v3-admin-ts
Vue
TypeScript
cd v3-admin-ts
npm i vue-router pinia 
npm i -D unplugin-auto-import unplugin-vue-components
npm i element-plus

# TypeScript
    让js拥有强类型，静态类型检测的超能力  他是 JavaScript 的超集
- 如何使用ts?
    - 像js一样来写
    - 加点啥 script lang = "ts"   js后缀改成ts
        - 类型检测
            重要的数据 比如路由中，就是路由数组

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
