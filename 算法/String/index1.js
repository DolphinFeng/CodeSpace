// let str = 'who are you'
// str[2] = 'C'
// console.log(str[2])
//可以下标读取，但是不能下标更改，这就是与数组的不同
// console.log(str.charAt(2))
// charAt读取字符串的值，跟[]一样

// 拼接
// console.log(str.concat(' ?'))
// concat也可以用！ 
// 但是更多时候用加号更多
// console.log(str += ' ?')

// 删除
// str.splice()
// 编辑器都报错了，用不了
// 没有办法能删除
// 数组有这个api, 对象是delete

// 字符串转换为数组
// console.log(str.split(''))
// 里面的参数是刀
// 数组转回字符串
// let str1 = str.join('')
// console.log(str1)

// let str = '2023年10月31日'
// let str = 'juejin'
// console.log(str.split('').reverse().join(''))

// 判断是否回文
// const str = 'yesey'
// function ispallindrome(s){
//     const res = s.split('').reverse().join('')
//     return res === s
// }这样很慢，三个遍历
// console.log(ispallindrome(str))

// 用栈的思想
// 全部入栈，出栈跟数组开头比
// const str = 'yesey'
// function ispallindrome(s){
//     const stack = []
//     for(let i = 0 ; i<s.length ; i++){
//         stack.push(s[i])
//     }
//     for(let i = 0; i<s.length ; i++){
//         if(s[i] !== stack.pop()){
//             return false
//         }
//     }
//     return true
// }
// console.log(ispallindrome(str))
// 双指针思想
// const str = 'yesey'
// function ispallindrome(s){
//     const len = s.length
//     let j = len -1
//     for(let i = 0; i < len / 2 ; i++){
//         if(s[i] !== s[j - i]){
//             return false
//         }
//     }
//     return true
// }
// console.log(ispallindrome(str))