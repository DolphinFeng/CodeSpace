showName()
//函数声明会提升到当前作用域的最顶端，边编译边执行
console.log(myName)
//声明提升
var myName = '李杰'
function showName(){
    console.log('杰哥')
}