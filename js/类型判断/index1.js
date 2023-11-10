let str = 'Hello'
let str2 = 'Hello'
let num = 123
let flag = false
let und = undefined
// undefined即是个值，也是个数据类型
let nu = null

// es6之后新增两种原始 big number  大整形 
// js有个最大安全值 2^53 <=> 2**53   2 ** 53 + 1 加不了 加个n就好了
let big = 123n

// Symbol  （用于定义独一无二的值） 通常不参与到逻辑运算中   == 值   === 值和类型
// 1 == ‘1’ true  统一转换成数字  
// 1 === ‘1’ false 
let s = Symbol('hello')
let s2 = Symbol('hello')
console.log(s);
console.log(str === str2)
console.log(s === s2)