if(true){//不是函数，还是全局，es6块级作用域
    let a = 1
}
//let 和 {}结合会有块级作用域

{
    let b = 2
}

console.log(a)