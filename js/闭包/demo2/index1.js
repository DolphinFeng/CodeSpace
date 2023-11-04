// 调用栈

//栈会溢出
function foo(){
    console.log('hello')
    foo()
}
foo()

// while(2){
//     console.log(123)
// }

// V8执行的时候在维护调用栈，编译的时候为代码创建一个执行上下文，以作用域为区分

