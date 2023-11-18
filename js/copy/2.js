// let a = {name: '小黑子'}
// create的作用：创建一个空对象，让b隐式继承于a
// let b = Object.create(a)
// console.log(b);
// a.name = '大黑子'
// {} 里面有隐式原型（对象的原型），里面有个name
// 隐式继承到a.name，也会受影响，
// console.log(b.name)
// 小黑子

// 对象的合并，Object.assign:把多个对象合并为一个对象
// let a = {
//     name: '小黑子', 
//     like: {
//         n: 'coding'
//     }
// }
// let b = Object.assign({},a)
// a.name = '大黑子'
// 深拷贝
// a.like = {}
// 进一步说明assign是深拷贝
// a.like.n = 'running'
// 欸？这里变浅了，like也是个引用类型，深拷贝：都是深，不彻底就是浅
// assign是个浅拷贝
// console.log(b);

// 数组也有
// concat，slice不影响(影响原splice(起始下标，删除的长度，增加的元素))、解构，
// reverse影响原数组（有返回值），同不考虑，但是toReversed不影响原，返回的原反转了

let arr = [1, 2, 3, {a: 10}]
// concat返回一个新的，空+arr
// let newArr = [].concat(arr)
// let newArr = arr.slice(0)
// 浅
// let newArr = [...arr]
// 解构，浅
// arr.push(4)
// 原数组新增一个，newArr不受
// let newArr = arr.toReversed().reverse()也可以，reversed会返回一个新数组，再改一下，也可以，得去浏览器看，toReversed太新了，受影响！浅！
arr[3].a = 100
// 引用类型受，深的不彻底，浅！
console.log(newArr);

