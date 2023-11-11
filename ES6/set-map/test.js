// 谷歌的清洁时间你无法掌控，但是node可以
global.gc()
// 强制执行垃圾回收

// node中的进程  计算node中内存占用情况
console.log(process.memoryUsage());
// 输入这段代码node --expose-gc test.js

// {
//     rss: 32550912,
//     heapTotal: 7528448,
//     heapUsed: 4612480,   4M 
//     external: 430884,
//     arrayBuffers: 16762
//   }

// new Array(5 * 1024 * 1024)
// 5M的数组

let obj = {
    name: '小黑子',
    age: new Array(5 * 1024 * 1024)
}
let ws = new WeakSet()
ws.add(obj)

// obj = null
// {
//     rss: 82026496,
//     heapTotal: 7798784,
//     heapUsed: 4929144,
//     external: 453304,
//     arrayBuffers: 16762
//   }

global.gc()
console.log(process.memoryUsage());
// node中需要手动才能清理，跟c一样，浏览器是之前讲的，
// {
//     rss: 81616896,
//     heapTotal: 49750016,
//     heapUsed: 46872096,
//     external: 453304,
//     arrayBuffers: 16762
//   }