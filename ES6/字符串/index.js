//模板拼接，模板拼接
// let a = 'hello'
// let b = 'world'
// console.log(a + b);

// date类型，引用中一种
// let date = new Date()
// 去浏览器中执行可以看到当前时间
// date.getMonth() + 1 当前，从0月开始

let date = new Date()
// 这是以前的写法
let time = date.getFullYear() + '-' + (Number(date.getMonth())+1)+ '-' + date.getDate()
console.log(time);

// 类型转换也需要重点讲，后面讲，云符号（反引号）不需要用’‘  这也是模板拼接
let t = `${date.getFullYear()}-${+date.getMonth()+1}-${date.getDate()}`
console.log(t)
// 这个东西为框架的诞生打下了根基