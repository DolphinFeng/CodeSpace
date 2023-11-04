function Bus(){

}
Car.prototype = {
    constructor: Bus
}
// 强行更改了，一般不会改这个
function Car(){

}

var car = new Car();
// constructor 是个方法(标记自己由谁创建的)，存在prototype中，浏览器粉色的就是隐式，显示是深红色
// let obj = {} obj V8会认为是构造函数创建的
console.log(car.constructor);
// constuctor 记录对象是由谁创建的，可修改
