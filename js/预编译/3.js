function foo(a,b){
    console.log(a)
    c = 0 //全局变量声明，函数不认，全局的规则不同于函数的规则，所以不管
    var c 
    a = 3
    b = 2
    console.log(b)
    function b(){}//函数声明不执行
    function d(){}
    console.log(b)
}
// 函数的执行函数上下文有哪些东西？
// 编译完后
// AO: {
//     a: undefined -> 1
//     b: undefined ->function b(){}
//     c: undefined
//     d: function d(){}

// }
// 开始执行
// AO: {
//     a: undefined -> 1 -> 3
//     b: undefined ->function b(){} -> 2
//     c: undefined -> 0
//     d: function d(){}

// }
foo(1)
