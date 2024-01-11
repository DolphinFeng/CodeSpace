// function Point(x, y) {
//   this.x = x;
//   this.y = y;
// }
// Point.prototype.toString = function () {  // 往函数挂东西让实例对象继承到就很牵强，误导别人
//   return `(${this.x},${this.y})`
// }
// Point.foo = function () {  // 给构造函数添加属性方法，实例对象访问不到，只能挂到构造函数的显示原型，对象的隐式原型就是函数的显示原型
//   return 'foo'
// }
// let p = new Point(1, 2)
// console.log(p.x)
// // console.log(p.foo());
// console.log(p.toString())

// 这个写法和传统的面向对象的语言写法差别很大，不好理解
// es6打造一个类这个东西，其实就是构造函数，近似于java

// class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
//   get toString() {  // this指向类本身 get产生一个 当成属性的效果 就相当于computed
//     return `(${this.x},${this.y})`
//   }
//   static foo() { // 静态方法，只有类自己才能访问
//     return 'foo';
//   }
// }
// let p = new Point(1, 2)

// // console.log(p.foo())
// console.log(p.toString);




class Point {
    _count = 0 // 一定要写前面 composition ref写法就是.value  _表示私有
  
    get value() {  
      return this._count
    }
  
    set value(val) {  // 赋值语句触发set 读值语句触发get
      console.log(val, '----');
      this._count = val
    }
  }
  let p = new Point()
  console.log(p.value);
  p.value = 1