function foo(){
    console.log(this.a);
}
var obj = {
    a: 2,
    foo: foo
}
var obj2 = {
    a: 3,
    obj: obj
}
obj2.obj.foo()
// 正常理解就可以，v8就近原则，obj2.obj最终还是obj在调用foo  这个叫隐式绑定的隐式丢失