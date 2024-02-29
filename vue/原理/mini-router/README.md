# 路由源码
vuerouter是vue源码中最简单的一个
之前讲过前端路由的实现，vue-router不太一样
哈希实现路由很方便，但是多个#，丑一点，history实现复杂一点点
让路径和组件一一映射

面试官：vue的路由怎么实现的
# 要打造一个 vue-router
1. 打造一个createRouter，createWebHashHistory 函数
2. 打造的router要能被vue use成功
3. use后，就可以拿到vue的实例对象，就可以使用vue自带的方法