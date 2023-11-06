Person.prototype.say = function(){
    return 'Hello'
}
// 函数自带prototype属性
// 函数也是对象
function Person(){
    this.name = "小黑子"
    this.age = 18
    // this.say = function(){
    //     return 'Hello World'
    // }
}
// p实例对象
let p1 = new Person()
let p2 = new Person()
p1.name = 'can'
console.log(p1.name)
console.log(p2.name)
// p2的name也不是一样的，实例对象是不一样的，雏形中say是公共的，this是私有的，雏形是共有的
// p就是个对象，并且有一个key.value
// 不是属性，是个调用函数，会报错
console.log(p1);
console.log(p1.say())
console.log(p1.say() === p2.say())
// console.log(p1.say());
// 这样会报错
// console.log(p.say() == p2.say());
// 不打括号就是个函数体，打括号是调用函数
// p只有person的函数的属性，p不能继承到原型的属性，p能访问到原型的属性   隐式继承
// this.name 是显示继承
// this代表实例对象


// 原型的具体作用，也是对象，公共属性，this是私有的，实例对象