function add(a, b, c) {
    return a + b + c;
}
// 之前聊过记忆函数  js curry柯里化 
// 每次接受一个参数
// console.log(add.length);

// 函数的柯里化
function curry(fn) {
    // 用闭包收集参数 到位了 运行  arr.length === fn.length  fn(...arr)  返回收集参数的函数
    let judge = (...args) => { // ... 是展开运算符 但是这里是rest运算符，收起 如果是[...arr]就是展开
        // 闭包里面的变量叫做自由变量
        // args是函数定义时就有的形参
        if(args.length === fn.length) return fn(...args)  //递归出口
        return (...arg) => judge(...args, ...arg)
    }
    return judge 
}

const curryAdd = curry(add)
// console.log(curryAdd(1))
console.log(curryAdd(1)(2)(3))