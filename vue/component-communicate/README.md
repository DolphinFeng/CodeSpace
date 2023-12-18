// child element就是dom结构

# vue中的组件通信

vue/vue create component-communicate
选中vue3

dom: to-do-list做个这个

现在创建一个App1.vue但是取名被lintOnSave限制了
去到vue.config.js将他改为false,重启项目，这是配置文件，改完需要重启

App1.vue相当于父组件，List.vue子组件

# 组件通信(面试官：请说vue中组件通信有哪些方式，这个不懂项目开展就有问题)
1. 父子组件通信：父组件v-bind绑定属性用于传值，子组件props接收 
props是单向数据流，子组件只能用，不建议修改，改了父组件也无法感应到 https://cn.vuejs.org/guide/components/props.html#one-way-data-flow
如果能改，数据流很难读

2. 子父组件通信：父组件订阅一个事件，子组件通过$emit发布该事件，且携带事件参数，让父组件的订阅生效
emit:https://cn.vuejs.org/api/component-instance.html#emit

3. 兄弟之间传，就利用父亲做中间人:如果碰到嵌套子组件，很不优雅

4. 兄弟之间传，公共的数据源  vuex （为optionsAPI打造的） 还有个compositionAPI的方法
https://vuex.vuejs.org/zh/ 可以被任何一个组件使用的仓库
如何使用：npm install vuex@next --save 安装的第四版本，--save需要保存

总共7，8 种方法，上面是最基础的方法，这三种足够项目开发了，别人的方法可能更优雅一点

父向子传List:父绑定，子props
