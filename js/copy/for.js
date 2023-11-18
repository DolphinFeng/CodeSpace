// let arr = ['a', 'b', 'c', 'd', 'e']
// for , for of, for in
// for(let item of arr){
    // item是数组的每一项，但是这个是为具有迭代器属性的打造的，刚好可以遍历数组
    // 有时候要下标，就不用这个
    // console.log(item);
// }

let obj = {
    name: '小黑子',
    age: 18,
    like: {
        type: 'coding'
    }
}
// 遍历对象的方法：let key in obj: for in专门用来遍历对象
// for(let key in obj){
    // console.log(key);
    // 键名
    // value？
    // console.log(obj[key])
// }
// 数组也可也,其他都可以,key就是下标了

// for(let key of obj){
//     console.log(key);
// }
// 报错,对象没有迭代器属性,数组有,无法枚举

let data = Object.create(obj)
data.sex = 'boy'
for(let key in data){
    // console.log(key);
    // 居然有东西!居然能遍历到隐式原型的东西!牛逼!对象,数组,原型都可以,但是你平时不希望也遍历到隐式的东西
    // 如何只遍历到显示?不能!但是,你可以通过判断,这个东西是显示还是隐式
    // 隐式原型具有的方法,显示true,隐式false
    if(data.hasOwnProperty(key)){
        console.log(key);
    }
}
// 对象还有很多方法去探究,名字越长越牛