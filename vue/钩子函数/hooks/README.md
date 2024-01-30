# 路由的钩子函数
- 全局守卫
所谓钩子就是在代码在执行某个功能过程中触发到那些埋入的钩子函数   全局影响所有的路由跳转
1. router.beforeEach 全局前置
2. router.beforeResolve 全局解析
3. router.afterEach 全局后置

- 独享守卫
独享：特定的钩子触发
比如，特定页面弹出框，当然页面的生命周期也可以干
beforeEnter

- 组件内的守卫
用在vue文件中
beforeRouteUpdate
beforeRouteLeave

# keep-alive
这个钩子非常重要，性能优化
大部分组件不需要多次渲染
包裹需要缓存的组件
1. onActived
2. onDeactivated

面试官：说一遍vue的生命周期有哪些，分别在哪里执行