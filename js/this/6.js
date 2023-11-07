function foo(){
    console.log(this.a);
}

var obj = {
    a: 3,
    foo: foo()
}

obj.foo