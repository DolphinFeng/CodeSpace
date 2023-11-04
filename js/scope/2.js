var a = 1
function foo(){
    var a = 2
    function bar(){
        //a = 3
        console.log(a)
    }
    bar()
}

foo()//全局只有a  和  foo   所以在全局找不到bar这个函数

