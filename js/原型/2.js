// Car.prototype.name = 'Volvo'
// Car.prototype.lang = '4900'
// Car.prototype.height = '1400'
// 等同于下面，更优雅，其实不一样，上面是天生的，下是后天自己创建的
Car.prototype = {
    name: "Volvo",
    lang: 4900,
    height: 1400
}

function Car(owner, color){
    // this.name = "Volvo"
    // this.lang = 4900
    // this.height = 1400
    // 上面就相当于公共的属性，每次实例的时候，new第二次第三次。。都没必要，放原型中，能访问到就可以 
    this.owner = owner
    this.color = color
}

var Car1 = new Car('小黑子', 'pink')
var Car2 = new Car('大黑子', 'black')
console.log(Car1.name);