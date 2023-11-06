function foo(){
    console.log(this.a);
}

var obj = {
    a: a,
    foo: foo()
}

obj.foo