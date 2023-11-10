// var obj = {
//     a: 1
// }

// function foo(){
//     console.log(this.a);
// }

//foo.call(obj)
// 相当于
// 往obj挂一个属性，放这个函数体，然后obj.fn()
// {
//     fn:foo
// }

// obj.fn()
// delete obj.fn


// call为何可以掰动
// call打造成一个隐式绑定规则
var obj = {
    a: 1,
    // foo:foo
}

function foo(a,b){
    console.log(this.a,a+b);
}

// obj.foo()

// call左边一定是函数，不能是数组其他啥的
// foo.call(obj)

Function.prototype.myCall = function(context){
    // 如何知道左边的参数，就是this，因为指向了他
    // 判定object的时候用typeof 大佬的框架，为啥
    // typeof 也可以   typeof this == 'function'
    // !this instanceOF this !== 'function'
    if(typeof this !== 'function'){
        // 丢出错误
        throw new TypeError('myCall is not a function')
    }
    // 类数组转成数组
    // Array.from  还可以[...arguments].slice(1)
    // args数据结构
    let args = Array.from(arguments).slice(1)
    // 下标0是第一个参数，之后类比，context可以删
    // 引用 隐式绑定
    context.fn = this
    // context.fn(...args)
    let res = context.fn(...args)
    // 这样obj会多一个key
    delete context.fn
    return res
    // 这里防止foo会有个返回值
}
// this就是foo
foo.myCall(obj,1,2)
console.log(obj)

// 所有函数都有个关键字arguments 所有的参数的统称，多个形参的时候，是个类数组，本质是个对象

// (...args)打碎一个数组
// 解构
// let arr = [1,2,3]
// console.log(...arr)


// 为什么这个方法执行得了类型判断
// call隐式绑定，左边搬到了call右边，让变量调用了这个原型的方法toString
// hello变成了包装类对象，调用toString 方法