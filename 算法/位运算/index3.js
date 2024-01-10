let num1 = 5  // 101
let num2 = 3  // 011

// 5  101
// 7  111
//    010  = 2
//    101  = 5
//    111  = 7

// console.log(num1 ^ num2)  // 110   6
// 通常用于对数据进行加密

// 问：如何交换两个数的值，不使用第三方变量
// 解构
// [num1, num2] = [num2, num1]
// 如何用与，或，异或来完成？

function swap(a, b) {
    a = a ^ b
    b = a ^ b
    a = a ^ b
    return [a, b]
}
[num1, num2] = swap(num1, num2)

console.log(num1, num2)

// console.log(4 ^ 5 ^ 5)

// 结论： (a ^ b) ^ b = a
