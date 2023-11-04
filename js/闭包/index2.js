function foo(){
    var myName = '小黑子'
    let test1 = 1
    let test2 = 2
    var innerBar = {
        getName: function(){
            console.log(test1);
            return myName
        },
        setName: function(newName){
            myName= newName
        }
    }
    return innerBar
}
var bar = foo()
bar.setName('大黑子')
console.log(bar.getName())

// 全局入栈：foo = func() bar = undefined outer = null 
// foo入栈，变量： myname = undef inner= undef   词法：test1 = undefi test2 = undef  开始执行该上下文，myname '小黑子' innebar ={...} outer  词法：test1 = 1  test2 = 2,return之后出栈
// foo()不知道自己是否执行完毕，因为getName和setName没有执行，于是出栈时会留下一个小包，这个包会留下这两个函数 这两个二子用到了爹的参数，得留下来，test1 = 1 myName = '小黑子' getName和setName outer
// 面试官： 聊聊闭包