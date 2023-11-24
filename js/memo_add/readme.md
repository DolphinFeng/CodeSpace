# 企业级开发

- 代码的健壮性
    校验一下参数
    进程的安全性
    单线程 简单 + event-loop  太脆了
    throw + try catch()

- cache 自由变量 key 的设置
    1 + 12  11 + 2  '1, 12'  '11, 2'
    - arguments 伪数组
    [...arguments].join('')  // 这个方法的兼容性没有那么好，三个点就要用es6
    Array.from(arguments)

    Object.prototype.toString
    Array.prototype.join.call() // join就是一个for循环   .call就是借给别人用
    js面向对象的本质：原型式

- fibonacci 爬楼梯问题
    - 递归通用性问题：爆栈 不停的入栈  递归（解决相似的问题）
        自顶向下解决问题  
    - 记忆函数 在算法中叫做备忘录
    - 自底向上 就不用入栈了 用for循环 4.js

- 使用递归，快速的，基于自顶向下的思想来解决问题
    - 程序栈的问题
- 可以先使用memoize备忘录模式，优化
    空间{ } key: value
- 可以用递归解决的问题都可以非常方便的自底向上解决 
    动态规划：每一步都有一个公式，eg.f(n) = f(n - 1) + f(n - 2)

    // 有递归就可以化成动态规划