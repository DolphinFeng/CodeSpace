//面试题，问你输出的结果是什么
//fn的作用域就是AO对象
function fn(a){
    console.log(a)
    var a = 123
    console.log(a)
    // 函数声明
    function a(){}
    console.log(a)
    // 函数表达式----执行
    var b = function(){}
    console.log(b)
    function d(){}
    var d = a
    console.log(d)
}
//步骤一，表达作用域
// AO: {
    // a: undefined,形参   
    // a: undefined,     1
    // 这里会覆盖掉
    // b: undefined,
    // d: undefined
    // a: function a(){}  a又被修改了
    // d: function d(){}  d被修改
// }
// 最后预编译完后
// AO: {
//     a: function a(){}
//     b: undefined
//     d: function d(){}
// }
// a: function a(){} -> 123 ->  ->
// b: function b(){} 
fn(1)