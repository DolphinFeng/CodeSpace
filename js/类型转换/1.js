// let num = 123
// let str = 'hello world'
// let flag = true
// let un = undefined
// let n = null
// es6之前，6种类型，五种原始一个对象，引用都可以说成对象

// 转布尔
// console.log(Boolean(false));
// 都是false，显示
// console.log(Boolean(0));
// 数字中0就是false ,其他都是true，哪怕是负数，无道可讲
// console.log(Boolean(undefined)); false
// Boolean(null) false
// console.log(Boolean('123')); true 
// console.log(Boolean(''));  false
// console.log(Boolean(" ")); 空字符也是有值得
// 字符串和数字可以转true,还得有值，其他都是false

// 转数字
// +"123"  得数字123
// 直接调用这个函数
// console.log(Number()); 默认0，无道可讲 js官方文档：https://es5.github.io/#x9.8 Returns a Number value (not a Number object) computed by ToNumber(value) if value was supplied, else returns +0.
// console.log(Number(123));  123
// console.log(Number('hello')); NaN 是个值，是number中一个特殊值，代表无法表示的值
// console.log(Number('123')) 123 这又能转 数字字符串可以转
// console.log(Number('100a'))  NaN
// console.log(Number('100.123')) 100.123
// console.log(Number('00100.123')) 100.123
// console.log(Number(undefined)); NaN : not a Number
// console.log(Number(null)); 0  ToNumber里面有个表格，进去看得到里面的规则，首字母也大写得函数是个官方用得
// console.log(Number(true)) 1
// console.log(Number(false)) 0 礼尚往来

// 转字符串 
// 非常粗暴，都是变字符串
// 15.5.1.1  ToString
// console.log(String()); 好理解：空对象，没有传值 空字符串
// console.log(String(123)) 黑色123 就是字符串123
// console.log(String(NaN)); 字符串NaN
// console.log(String(Infinity)) 同理
// console.log(String(undefined)) 哦同理
// console.log(String(null)) 同理
// console.log(String(true)) 布尔同理

// 其他转undefined，null 转不了，没有构造函数，也不会有这种需求


// 不记得就百度：js原始类型转换表

// 原始转对象
// console.log(Object('hello')); 字符串对象
// console.log(Number(123)); 数字
// console.log(Object(undefined));
// 这样做没有意义，new Number new String的效果一样





