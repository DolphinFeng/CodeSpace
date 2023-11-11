// let obj = {
//     a: 1,
//     b: 2
// }
// key是个字符串类型，否则是个变量，但是不会找啊，因此就是个字符串
// var arr = [1,2]
// obj.arr = 3
// 必须用[]
// obj[arr] = 3
// console.log(obj);
// 空字符为3

// 数组不能作为key,数组成了字符串
// 任何东西+ 字符串，都是字符串去了

// 传统数组的key只能是字符串，高阶的时候，就是想要一个key为一个对象，或者数组

// map也没有字符表示

// let map = new Map();
// console.log(map);

// map的意义，里面可以用任意数据类型做key，弥补普通对象的不足之处
// 用法于普通对象有点不同
// 这里set是他的方法
// map.set({a:1},'hello')
// console.log(map);
// 用箭头表示键值对，箭头左边为key,右边为value

// 放初始值
let map = new Map([
    ['name','小黑子']
])
console.log(map);
// set没有数据结构让你读值，也没有下标去读值

// map有
console.log(map.get('name'))
let obj = {a: 1}
map.set(obj,'hello')

// console.log(map.get({a: 1}))
// 这样才可以
// console.log(map.get(obj))

// {} === {} 原始类型，值和类型  引用：类型，指针，值 
// 两个{}放在不同的房间，js中不可能出现两个对象相等

// map.forEach((value,key,map)=>{
//     console.log(value,key,map)
// })
// map也能用forEach
// map比set用的多得多，算法题中很常见，让map存储一个对象，因为它可以用任意东西作key

// map能否被解构

console.log([...map])
// 解构之后还是二维数组


// 面试官：vicset,vicmap才是难点