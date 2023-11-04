var a = 3
var b = 'hello world'
//v8引擎在执行js代码的时候会先进行编译，编译的作用是让v8能读懂
//变量分为全局 和 函数体内
function foo(){
    var a = 1
    var c = 5
    console.log(b)//先在函数里面找a变量，然后在全局里面找
}

foo()

//console.log(c)  这里的c是找不到的 is not defined ,c访问不到，变量的查找不能从外到内
// var d
// console.log(d)   这里的d输出为undefined

