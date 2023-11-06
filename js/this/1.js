// this据说是js中最复杂的机制
// console.log(this);
// 代词，代指某个东西
// 有作用域的地方一定有this，是作用域的代名词
// 浏览器的全局环境---window 

// var a = 1
// console.log(window.a)
// 全局的变量相当于往window挂属性
// node没有窗口的概念，他的全局叫global
// console.log(global.a)

// console.log(global)

// function identify(context){
//     // 小写字母转化成大写
//     return context.name.toUpperCase()
// }

// function speek(context){
//     var greeting = "Hello,I'm " + identify(context)
//     console.log(greeting)
// }
// ""和‘’是一个意思，双包单 更推荐用单，v8鉴别单更快，hello,I'm这个就不建议用单
// var me = {
//     name: 'Dolphin'
// }
// var you = {
//     name: 'Fly fish'
// }
// console.log(identify(you))
// speek(me)
// 上面这是显示（人为干的）的传入参数，如何变得更简洁


function identify(){
    // 小写字母转化成大写
    // return this.name.toUpperCase()
    return this.name.toUpperCase()
}
function speek(){
    var greeting = "Hello,I'm " + identify.call(this)
    console.log(greeting)
}
// cannot read properties of undefined to to 代表，V8读不懂，this.name有问题
var me = {
    name: 'Dolphin'
}
speek.call(me)

// this的作用，不用显示地传参