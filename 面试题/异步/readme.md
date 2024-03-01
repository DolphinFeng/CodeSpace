# 为什么要有异步
因为js是单线程的编程语言，同一时间只能执行一个任务

# 为什么不设计成多线程

# 发展史
- 是什么
    js中最早的异步处理方式到现在最新的异步处理方式

- 发展史
1. 回调函数： 代码维护困难，回调地狱
2. promse: 
    1. 维护了一个状态，state值为pending fulfilled rejected 目的是让promise的状态一经改变，无法再次修改，也就保证了then和catch不可能同时触发
    2. 内部的resolve函数会修改state为fulfilled，并触发then中的回调

3. then：
then默认会返回一个promise对象，状态为fulfilled。当then前面的promise状态为fulfilled，then中的第一个回调直接执行，当then前面的promise状态为rejected，then中第二个回调直接执行，当then前面的promise状态为pending，then中的回调需要被缓存起来交给resolve或者reject执行