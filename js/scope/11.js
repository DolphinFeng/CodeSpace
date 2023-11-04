function foo(str, a){
    eval(str)//等于var b = 3，欺骗，全局变成foo里面
    console.log(a, b)
}
foo('var b = 3',1)