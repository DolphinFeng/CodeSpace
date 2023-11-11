// let [x,y,z] = ['a', 'b', 'c', 'd', 'e']
// let x = 'a'
// let y = 'b'
// let z = 'c'
// x,y,z用数组装了起来
// console.log(x,y,z);
// 可以打印字符串abc, 白色的，一一对应
// d e 没有东西去接他，如何也得到呢，不用新的家长

// 下面也是个解构，数组前面加三个点
// let arr = [1,2,3]
// let newArr = [0]
// console.log(...arr);
// 对象用assign拼接
// console.log(newArr.concat(arr))
// 也可以下面这样，都进行解构
// console.log([...newArr,...arr])

// let obj = {
//     name: '小黑子',
//     age: 18
// }
// 每次取都很麻烦，obj.name啥的

// 对象的解构，let中key必须是name,vale中可以改name1也可以（知识点）
let{name:name1, age:age1} = {
    name: '小黑子',age: 20
}
// log中name是value的
console.log(name1,age1);
// 就少了个obj.啊！！！有必要