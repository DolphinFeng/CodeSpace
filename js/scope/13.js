function foo(obj){
    with(obj){
        a = 2
    }
}

var o1 = {
    a: 3
}

var o2 = {
    b: 3
}

foo(o2)
console.log(a)//o2没有a,但是强行运行with，with会抛出到全局作用域中