// js中最完美的判断方法
console.log(Object.prototype.toString.call('Hello'));

let s = 'hello'
// 但是用这个，if判断会很累

// if(Object.prototype.toString.call('hello') === '[object Object]'){}
// slice(8,到倒数第二个) -1 就是倒数第一个，左闭右开，不包含倒数第一个，所以是倒数第二个了
function isType(s){
    return Object.prototype.toString.call(s).slice(8,-1)
}
if(isType(s) === 'String'){
    return true
}
// https://es5.github.io/#x15.2.4.2 官方文档，如果能读明白就可以精通了

// this就是call里面的参数，显示绑定，a.call(b),也就是把Object.prototype.toString.this绑到（）中
// null不应该报错？没有为什么，就是这么牛
// Let O be the result of calling ToObject passing the this value as the argument
// 把this作为ToObject（转成对象）(首字母大写的方法，你用不了，官方封装的方法，给源码用的)的参数，让o成为

//Object.prototype.toString 这是官方，为何我们要用call

// Object.prototype.toString('hello')
// 如果没call就判断不出来，都是object  object原型的toString方法默认值就是
// 字符串没有toString 是因为他会找往object身上
// o = {}  call 的作用就是
// Object.prototype就是实例化对象

// ‘123’.toString（） 不同于 Object.prototype.toString('123') 

// Object.prototype.toString() toString不接受值


// 面试官：Object.prototype.toString.call()   为什么可以准确判断数据类型、
// call的原理
// 面试官：加了call为何不一样
// 根本原因：call
// 

// slice只能切割到显示拥有的