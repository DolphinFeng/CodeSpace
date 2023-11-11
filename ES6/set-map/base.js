// for of

let arr = ['a', 'b', 'c']
let obj = {
    a: 1,
    b: 2,
    c: 3
}
let set  = new Set([1,2,3])
let str = 'abcde'
// 字符串也有这个属性
// 数组有迭代器属性，所以可以被遍历
// for(let i = 0; i < arr.length; i++){} 任何都可以循环，字符串，数字，都可以
// 本质区别，这个东西（for of）不是用了为数组服务的，只能循环具有迭代器属性的数据结构

//为何不直接用key   .key()是用来返回键名的  .value()（类数组，也具有迭代器属性）是返回键值 .entry()即返回key,又返回value
for(let item of str) {
    console.log(item);
}
// 所以数组有迭代器属性

// set也有，Symbol(Symbol.iterator)
// 不用来取值，目的就是为了保证唯一性，但是可以遍历啊
