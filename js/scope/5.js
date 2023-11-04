var a = 1

var a = 2

console.log(a)//var可以重复声明相同的变量,let就不行

let b = 1

function foo(){
    console.log(b)
}
//let作用域的查找没有变
foo()

