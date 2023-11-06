function foo(){
    var b = 1
    bar()
}
function bar(){
    console.log(this.b);
}   
foo()
// undefined
// 证明1不对

// 词法作用域不是函数自带的，函数没有词法作用域这个概念。指的是函数体所在那个作用域，bar的词法作用域

// [[scope]]是函数自带的作用域，这也是个属性，我们没有权限访问，给v8看的
// 谷歌无法展开空函数，火狐可以看

// foo没有词法作用域，bar的词法又是指向foo(因为他在那里生效)，foo没有词法，所以往上找，所以最终指向全局