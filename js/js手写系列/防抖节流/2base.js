// arguments是个对象，里面的key为下标，
// arguments是个类数组，也是个对象
// 可以用下标是因为对象也可以用中括号，也有length
// 只有下标和长度，其余方法都不行，
// 代表函数中所有参数的集合
function foo(){
    // console.log(arguments.length);
    // 求和：对象求和，先转成数组
    // 这个方法只能为类数组转成数组，对象没有length属性，但是你也可以加上去key必须从0开始
    console.log(Array.from(arguments));
}
foo(1,23,3)

// 解构的语法，就不用for循环掏出来了，类数组也可以解构
let arr = [1,2,3,4]
console.log(...arr)
