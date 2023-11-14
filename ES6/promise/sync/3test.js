// 回调的坑
function foo(){
    return function bar(){

    }
}

let baz = foo()
// baz开始执行就代表foo已经销毁了
baz()