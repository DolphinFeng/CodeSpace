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
    console.log(this.a);
}
// foo中this指向全局，因为foo在全局中使用，所以是window， bar中this指向foo，所以应该正常打印2，但是undefined，在浏览器中执行
foo()

// 全世界的程序员论坛，不知道叫啥，这个东西被广为流传，实际上是因为this.bar()(好像没问题)不成功，直接bar()就可以了，