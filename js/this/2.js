// var a = 1

// function foo(){
//     console.log(this.a);
// }
// foo()
// this代表整个foo作用域（这样理解，但），this找a找不到，于是去全局，代之了window，所以肯定是1。前面不贴切。看函数在那儿使用 ，this就代表那个作用域，指向全局
// node不行，因为window，用浏览器执行

function foo() {
    var a = 2
    this.bar()
}

function bar() {
    var b = 3
    console.log(this.b)
    // console.log(this.a);
}
// foo中this指向全局，因为foo在全局中使用，所以是window， bar中this指向foo，所以应该正常打印2，但是undefined，在浏览器中执行
foo()
// bar()
// 全世界的程序员论坛，不知道叫啥，这个东西被广为流传，实际上是因为this.bar()(好像没问题)不成功，直接bar()就可以了，但是这样还是undefined
// 这里this是用来连接两个函数的作用域，this.a无法代指foo,,我们用this来引用词法作用域内部的东西

// 词法环境和词法作用域（作用域分三个，词法作用域指的是这个东西声明在哪里）不同。
// 小黄书中写了this坚决不能用来访问词法内部。哪怕this就在词法中

// 这么奇怪，那不用就不好了。不用this写代码很麻烦
// var b = 1
// function bar() {
//     console.log(this.b)
//     // console.log(this.a);
// }
// bar()打印1