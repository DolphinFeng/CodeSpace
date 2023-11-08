
// function foo(){
//     var a = 1
//     function bar(){
//         console.log(this.a);
//     }
//     var baz = bar.bind(foo)
//     baz()
// }
// foo()
// var a = 1
// var bar = function(){
//     console.log(this.a);
// }
// bar()
// var obj = {
//     name: 'Tom',
//     show: function(){

//         // console.log(this.name)
//         var bar = function(){
//             console.log(this.name)
//         }
//         bar()
//     }
// }
// obj.show()
var obj = {
    name: 'Tom',
    show: function(){
        var bar = () => {
            console.log(this.name)
        }
        bar()
    }
}
obj.show()