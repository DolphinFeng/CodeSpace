// 函数声明
// function foo(){}

// 函数表达式 不同在于预编译中
// var bar = function(){}


var a = 1
// 箭头函数，没有区别，但是箭头函数没有this这东西，所以里面的this直接指向函数外头
var bar = () => {
    console.log(this.a)
}
// 函数独立调用，走走向全局
var bar = function(){
    console.log(this.a);
}
// this指向bar，但是bar没有词法作用域，然后去了全局

var obj = {
    name: 'Tom',
    show: function(){

        // console.log(this.name)
        var bar = function(){
            console.log(this.name)
        }
    }
}
obj.show()
// 隐式绑定，打印出对象


var obj = {
    name: 'Tom',
    show: function(){
        var bar = () => {
            console.log(this.name)
        }
    }
}
obj.show()
//打印出name