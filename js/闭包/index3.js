function a(){
    function b(){
        var bbb = 234
        console.log(aaa);
    }
    var aaa = 123
    return b
}
// a()//返回了b这个函数
var c = a()//c接收为 b这个函数
// c()//执行b这个函数
c()
// 
// 留下一个闭包（closure） 里面存放aaa = 123 闭包创建后，a彻底销毁，b的outer指向a,a销毁，找其闭包，