var b = 2
function foo(){
    var b = 1
    bar()
    function bar(){
        baz()
    } 
    function baz(){
        console.log(this.b)
    }
}
foo()

// 看的是bar的词法作用域，是foo的没错，但是foo没有，foo就是全局