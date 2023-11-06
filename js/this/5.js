function foo(){
    console.log(this.a);
}
var obj = {
    a: 2,
    foo: foo
    // foo: function foo(){
    //     console.log(this.a);
    // }
    //这叫函数的引用，不是调用
}
obj.foo()
// 这里就是相当于函数的调用
// 这里不是默认的，前面的js文件说的是调用，这里是对象进行调用，隐式绑定规则
