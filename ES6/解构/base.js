var age = 18

let obj = {
    name: '小黑子',
    age
    // 相当于age: age
    // 对象中key和value重名时，允许这样写代码
}
console.log(obj.age);

// 所以index中可以简写
// let{name, age} = {
//     name: '小黑子',age: 20
// }
// 减少了代码，左边name和右边name必须相同

// 可以给一个默认值
let{name = '嘿嘿',age} = {name: '小黑子',age : 20}
console.log(name,age)

// 字符串也可也解构，看书