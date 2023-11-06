// 常见错误形式代码

// function foo(){
//     var a = 1
//     //定时器（回调函数）：1s后执行函数
//     setTimeout(function(){
//         console.log('hello');
//     },1000)
// }
// foo()

// function foo(){
//     var a = 1
//     //定时器：1s后执行函数
//     setTimeout(function(){
//         console.log(this.a);
//     },1000)
// }
// foo()
// undefined    

// 如何让他打印1
function foo(){
    var a = 1
    //定时器：1s后执行函数
    function bar(){
        console.log(this.a);
    }
    var baz = bar.bind(foo)
    // 把this由bar指向了foo
    setTimeout(baz, 1000)

}
foo.a = 2
// a变成foo的属性了，
foo()

//函数身上默认有属性，比如length 代表接收参数的个数，name,代表函数名字 变量不同于属性