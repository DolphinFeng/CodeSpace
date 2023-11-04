// bar词法作用域在全局中（看声明在哪儿，它的外层作用域就在哪里）
function bar(){
    console.log(myName)
}
function foo(){
    var myName = '大黑子'
    bar()
}
var myName = '小黑子'
console.log(foo())

// 全局执行上下文入栈，变量环境：myname -> 小黑子  开始调用foo（ ）  foo入栈，foo变环：myname -> 大黑子，开始调用bar,bar入栈 变量：空，词法：空 栈顶，
// 创建执行上下文后会生成outer 为null  所有执行上下文都有一个outer，并不是从上往下（栈顶依次下去），outer指向谁（看变量声明在哪儿），