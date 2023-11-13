// let obj= {name: '小黑子'}
// let firstName = obj.name
// obj = null
// console.log(obj)

// global.gc()
// console.log(process.memoryUsage());
//  初始heapUsed: 4612488,
global.gc()
console.log(process.memoryUsage());
let obj= {name: '小黑子',age: new Array(5 * 1024 *1024)}
let ws = new WeakSet()
// obj = null

// ws.add(obj)
// global.gc()
//  弱引用后heapUsed: 46555904,
// global.gc()
// console.log(process.memoryUsage());
//  加个对象heapUsed: 46555864, 44M
// console.log(process.memoryUsage());
//heapTotal: 6479872,    6.4M
// obj = null
// global.gc()

ws.add(obj)
obj = null
global.gc()

console.log(process.memoryUsage());
//  对象制空heapUsed: 4930048,4.9M
// console.log(process.memoryUsage());
// heapUsed: 5508656,   5.5M
// global.gc()
// console.log(process.memoryUsage());
// 初始4.6M
// let obj= {name: '小黑子',age: new Array(5 * 1024 *1024)}
// let ws = new WeakSet()
// obj = null
// console.log(process.memoryUsage());
// 强引用45M,弱引用45M
// 强删
// ws.add({})
// console.log(ws)

