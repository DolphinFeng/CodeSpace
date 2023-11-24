const memoized = require('./memo.js')

// 小公司必考-斐波那契
var count = 0;
var fibonacci = function (n) {
    count++ 
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2)
}

// 递归带来的问题：重复计算，爆栈，这是树状结构，中间很多东西都是没必要的计算

const memoizeFibonacci = memoized(fibonacci)

// time timeEnd调试
console.time('fibonacci')
memoizeFibonacci(20)
console.log(count);
console.timeEnd('fibonacci')

// 模块化缓存会清空