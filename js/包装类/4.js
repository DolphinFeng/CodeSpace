// function Person(name, age, sex){
//     this.name = name
//     this.age = age
//     this.sex = sex
// 所以上面的代码就相当于往this里面放属性
    // let this = {
    //     name: name,
    //     age: age,
    //     sex: sex
    // }
    // return this
// }
//  let p = new Person('蔡徐坤', 19, 'female')
// 不用new undefined
// new也可以new 普通函数
// console.log(p);

// 自己模拟一个this可行吗？
// function Person(name, age, sex){
//     var that = {}
//     that.name = name
//     that.age = age
//     that.sex = sex
//     return that
// }
// let p1 = Person('蔡徐坤',89,'female')
// let p2 = Person('李易峰',88,'female')
// console.log(p1);
// console.log(p2)
// 可以，但是不推荐，new里面有更深层的内容