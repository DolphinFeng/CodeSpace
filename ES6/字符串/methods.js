// 取字符串的字符
// 这是数组的方法
// let str = 'abcdefg'
// console.log(str[2]);

// at方法，接收下标，取对应的元素，不过用上面更好，仅仅是为了区分字符串和数组
// console.log(str.at(2))

// startsWith()方法 是以啥开头的，返回布尔，可以判断手机号地区
// console.log(str.startsWith('ab'))

// endsWith()方法同理

// includes是否包含某个字符

// padStart左边参数是想办法整到多长，右边参数是补的东西，往头部补
// console.log(str.padStart(8,'a'))

// padEnd就是往后补

// 后面的方法自己一个一个敲一遍就懂了


// 不是新增的，拓展知识
let obj = {
    a: 1,
    b: 2
}
// 对象转换成字符串
// Math.flow jason跟这个类似 方法
console.log(obj)
console.log(JSON.stringify(obj))

// parse把字符串转回对象
let str = JSON.stringify(obj)
console.log(JSON.parse(str))
