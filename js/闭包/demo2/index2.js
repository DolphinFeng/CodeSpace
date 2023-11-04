// var a = 2
// function add(){
//     var b = 10
//     return a + b
// }
// add()
// 执行到add()时
// 全局执行上下文：左边变量环境（a = undefined function：add() ）和词法环境
// 全局执行上下文准备好，之后开始执行全局执行上下文 变量环境（a = 2, add()）
// 把add从全局中取出来放到add函数执行上下文（b = undefined）之后执行（b = 10   a + b）找不到a,全局执行上下文放入到调用栈底部


var a = 2
function add(b,c) {
    return b + c
}
function addAll(b,c){
    var d = 10
    var result = add(b,c)
    return a + result +d
}
addAll(3,6)
// 创建全局执行上下文并且入栈，里面放a= undefined function:add() function:addAll() 准备好后执行，a=2 addAll()
// 创建addAll函数执行上下文，继续入栈，里面放d = undefined  result = undei b = undefine -> 3 c = undefin -> 6准备好后开始执行，d = 10 add()
// 创建add函数执行上下文，继续入栈，里面放 b = unde   c = undef 然后开始执行在add()，结果给了result add上下文出栈（函数执行上下文执行完后出栈），return之后，addAll出栈，全局执行上下文在后面发现没有代码了就最后出栈   
// 这里就可以理解为函数如果无限调用自己，会栈爆。一般栈的大小几M兆，几千个就不行了，
// 