// 对象的存储
// 函数，数组，正则，日期等等都是对象
// 数据类型：应用类型和原始数据类型
// 原始数据类型：number String Boolean Undefined null
// let a = 'hello'
// let b = 123
// let c = true
// let u = undefined
// let n = null

// 引用类型
// let obj = {
//     name: '小黑子'
// }

// let a = 1
// let b = a
// a = 2
// console.log(b)

let obj = {
    name: '老八'
}
let a = obj
obj.name = '老七'
console.log(a.name);
// 对象可以存放各种数据，会很大，不会放在调用栈，V8会开辟一个堆来存放引用类型，堆也是一种数据结构，堆的占用内存是很大的
// obj在词法中，存放堆的地址，或者指针，obj实际在堆中，a = obj时得到的obj的地址1111（随便叫的），obj.name =   先判断是否为对象，然后再堆中成老七
// 然后打印a.name，发现a存放的是地址，顺着地址走到了obj，然后打印出老七。这就是为什么叫引用类型，引用地址

// 我们现在再来看楼上二楼的，原始数据类型太小了，最长也就9为，js数值最大为2的53次方，就是存放在栈中，a赋值给b后，b已经定了下来，引用类型赋值的是地址，所以会变

