// 对象的创建
//1. var obj = {} 
// 对象自变量，或者对象直接量

// Object() 
// 内置的函数，注意首字母是大写的，像这样的函数，叫构造函数，跟普通函数没有区别，约定俗成的规矩
// 这种函数需要 new 来调用

//2. let obj = new Object()
// console.log(obj);
//一般还是用1
// object构造函数的意义：批量生产，不同的函数

//3.构造函数
// function Car(color){
//     this.name = 'Volvo'
//     this.height = '1400'
//     this.lang = '4900'
//     this.weight = 1000
//     this.color = color
// }
// this是个对象，这里可以看出，因为在用点. 
// this是js中第二座大山

// let car1 = Car()
//car1没有值，因为没有返回

// let car1 = new Car()
// let car2 = new Car()
// car1.name = 'BMW'
// console.log(car2);
// 这里可以看出new的功能是return
// 并且不是同一个

// let car1 = new Car('pink')
// let car2 = new Car('green')
// console.log(car2);
// console.log(car1);

// 实例对象

//4. 函数是一种特殊的对象，可以挂一个属性，Object.create()，create是内置的一个函数
