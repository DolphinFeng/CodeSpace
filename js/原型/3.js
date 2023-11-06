Car.prototype.name = 'Volvo'
Car.prototype.lang = '4900'
Car.prototype.height = '1400'

function Car(owner, color){
    this.owner = owner
    this.color = color
}

var Car1 = new Car('小黑子', 'pink')
var Car2 = new Car('大黑子', 'black')


// Car1.color = 'red'  可以改，合情合理
// Car1.name = 'BMW'
// 实例对象改不了原型，那怎么改呢
Car.prototype.name = 'BMW'
// 如何删掉呢
// delete Car.name
// 实例对象删不掉原型的属性，用原型才可 增也是原型自己才能 查都可以，改原型自己才能
// delete Car.prototype.name
console.log(Car1.name);
console.log(Car2.name)