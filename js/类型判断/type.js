let str = 'Hello'
let num = 123
let flag = false
let und = undefined
let nu = null
let big = 123n
let s = Symbol('hello')

let obj = {}
let arr = {}
let fn = function (){}
let date = new Date()
// 还有map,set 引用类型可以统称为对象

// 判断类型
// typeof(str) || typeof str
// console.log(typeof str);
// console.log(typeof num);
// console.log(typeof flag);
// console.log(typeof und)
// 上面这些都是原始类型
// 这个也是console.log(typeof nu); 这是个bug
// 引用类型二进制前面三个一定都是0，原始就不是，但是null忘记了，为何不改：发现这个bug时，js已经用了很久，改了他们的项目会崩，成本太大
// 任何一门语言都有数据结构
// console.log(typeof big); bigint
// console.log(typeof s); symbol
// 所以7个原始只有一个null判断不出， typeof（原理：转换成二进制，前三个都是0就是引用类型）可以准确判断原始类型  在他眼里其余都是引用类型object 
// 因此不能判断引用类型
console.log(fn);
