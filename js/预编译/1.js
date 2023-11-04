// AO: {
//     a: undefined
//     foo: function foo(){}
// }
// 开始执行AO 
// a = 1，然后编译函数
// AO{
//     a: undefined -> 3 -> function a(){}
//     b: undefined
// }
// 开始执行
// AO{
//     a -> 2 
//     b -> 2
// }
var a = 1
function foo(a){
    var a = 2
    function a(){}
    var b = a
    console.log(a)
}
foo(3)
// AO: {

// }