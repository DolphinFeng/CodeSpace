// 箭头函数不能用作构造函数，不承认this，会报错
var Foo = () => {

}
console.log(new Foo());