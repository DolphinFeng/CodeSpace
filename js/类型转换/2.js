// 对象转原始
// 都不考虑undefined和null

// 对象转数字
// console.log(Number({})); NaN 
// console.log(Number([])); 0 
// 数字，和字符串都是通过

// 转字符串
// toString
// let a = {}
// a.toString()
// console.log(a.toString()) // [object Object]
// console.log(String({})); [object Object] 一样的
// 所以当你调用toString 等同于Object.prototype.toString.call(a)
// js不同类的toString返回不同
// let arr = [1, 2, 3]
// console.log(arr.toString()); // 字符串1,2,3
// toString 先分类一下 如果是对象调用，返回由[Object 类型]组成的字符串   如果是数组是元素都给你逃出来，然后拼接，
// let time = new Date()
// console.log(time.toString()); 字符串Tue Nov 21 2023 19:53:08 GMT+0800 (中国标准时间)
// let fn = function (){}
// console.log(fn.toString()); // 字符串function (){}
// 数组转字符串，那里面的元素进行拼接成字符串
// toString方法：返回一个可以代表对象的字符串
// 1. Let primValue be ToPrimitive(input argument, hint String)
// ToPrimitive：将引用类型转换成基本类型 undefined不做转…… 只有对象 
// 2. Return ToString(primValue).
// let a = {}
// console.log(a.toString()); 管用
let b = new Number(123)
console.log(b.toString());

// 转数字
// valueOf 和ToNumber 不一样
// 得刚好是字符串对象时才能转数字
// let a = {}
// console.log(a.valueOf()); 转不来
// 数组同理，它只对包装类管用
// let a = new String('123')
// console.log(a.valueOf()); 字符串 123
// let b = new Number(123);
// console.log(b.valueOf()); 数字123
// console.log(Number({})); NaN

// 对象转布尔值
// 所有对象转布尔都是true 空对象也是
// console.log(Boolean({})); true


