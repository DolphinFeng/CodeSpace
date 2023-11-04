// GO: {
//     global: undefined // 18行
//     fn: function fu(){}
// }
//全局执行，global = 100 ，开始编译fn
// AO: {
//     global: undefined // 15行
// }
// 开始执行函数，第一个为undefined ,然后13行赋值为200
global = 100
function fn(){
    console.log(global)
    global = 200
    console.log(global)
    var global = 300
}
fn()
var global