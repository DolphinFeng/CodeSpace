// function foo(){
//     console.log(this.a);
// }
// var obj = {
//     a: 2
// }
// foo()
// undefined因为全局没有

// function foo(){
//     console.log(this.a);
// }
// var obj = {
//     a: 2
// }
// foo.call(obj)
// 强行把this指向掰弯

// function foo(n){
//     console.log(this.a,n);
// }
// var obj = {
//     a: 2
// }
// foo.call(obj,100)
// ()是call的，foo怎么叫调用呢，公用了（）,call能调用到foo的源码，显示绑定不止call一个方法

function foo(n,m){
    console.log(this.a,n,m);
}
var obj = {
    a: 2
}
// foo.call(obj,100,200)
// foo.apply(obj) 
// 这个可以 foo在源码中被apply调用，这个和call不同于，他是数组来装，如果传参刚好是数组就用这个foo.call(obj,[100, 200])
// var bar = foo.bind(obj,100,200)
// bar()

// var bar = foo.bind(obj)
// bar(100,200)

// var bar = foo.bind(obj,100)
// bar(200)

var bar = foo.bind(obj,100,100)
bar(200)
// 参数也可以传给到bar中
// 返回一个函数体
