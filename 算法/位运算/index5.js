// const num = 5 // 00000101
//               00010100
//                  16 + 4  左移两位
//               00000001   右移两位
// console.log(num << 2)

// console.log(num >> 2)  

// 如何实现一个高效率的整数的乘除
// * / 效率很低的  直接操作二进制才是最高的
// 右移动就是除2向下取整

// function multiply (x, y) {
//     let result = 0
//     while (y > 0) {
//         if (y & 1) {  // 判断y二进制的最低位是否为一
//             result += x
//             // 5
//             // 5+10   
//         }
//         x = x << 1
//         y = y >> 1
//     }
//     return result
// }

// console.log(multiply(5, 3))

// 除法会难很多
function divide (x, y) {
    let result = 0
    
    return result
}
// 00000101
// 00000011

console.log(divide(15, 3))