let str = 'Hello'
let num = 123
let flag = false
let und = undefined
let nu = null
let big = 123n
let s = Symbol('hello')

let obj = {}
let arr = []
let fn = function (){}
let date = new Date()

// 隶属于  可以判断所有的引用类型
// console.log(obj instanceof Object);
// console.log(arr instanceof Array);
// 数组也算对象，委婉噢，那我判定是不是对象咋搞？
// console.log(arr instanceof Object); arr.__proto__ = Object.prototype 不等于，再找 arr.__proto__.__proto__ = Object.prototype 直到左边到null了也就是arr.__proto__.__proto__.__proto__
// console.log(fn instanceof Function);
// 函数同理
// console.log(fn instanceof Object);
// console.log(date instanceof Date);

// 其余判断不出，给false
// console.log(str instanceof String);

// 面试官：请问instanceof 实现原理是啥


// 咋搞?
function test(obj){
    if(obj instanceof Object){
        return obj.name
    }
}
console.log(test({name:'小黑子'}))
// 下面应该报错啊，进不去if
console.log(test(['小黑子']))

// 所以instance能判数组，但是判对象不准

// 所以怎么判断左边是不是隶属于右边

// arr相当于空数组，相当于new Array()

// 规则： 第一次找不到，就会往上走，arr的隐式为Array的显示原型不等于Object，再找，array的显示原型的隐式原型