// Person.prototype.say = function(){
//     console.log("hello " + this.name);
// }
// function Person(name){
//     this.name = name;
// }
// var person1 = new Person("Dolphin")
// person1.say()
// console.log(Person.prototype === person1.__proto__)
// Person.prototype.name = '小黑子'
// function Person(){
// }
// var p = new Person()

// console.log(p.name);

// Person.prototype = {
//     // name: "小黑子",
//     sayName: function(){
//         console.log(this.name);
//     }
// }
// function Person(){
//     // this.name = '大黑子'
// }
// var p = new Person();
// p.sayName()
// console.log(Number.prototype)

let obj = {}
// 必须接收一个参数，应该是一个对象
let obj1 = Object.create(obj)
console.log(obj1)
console.log(obj1.a)

// Foo.prototype = {
//     a: 1
// }
// function Foo(){

// }
// let f = new Foo()
// console.log(f)
// console.log(f.a)