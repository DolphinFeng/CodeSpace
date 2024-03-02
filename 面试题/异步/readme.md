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
3. Generator
    生成器函数
    > 处理异步需要结合promise
    实例对象.next()的done如果为true代表执行完毕，false代表未执行完毕
    1. 可以分段执行，可以暂停
    2. 可以控制每个阶段的返回值
    3. 可以知道是否执行完毕
    4. 可以借助 Thunk 和 co 模块 处理异步，但是写法复杂，所以generator函数的意义就是为了打造 async await
        co模块是别人封装的小工具npm init -y   npm i co 

