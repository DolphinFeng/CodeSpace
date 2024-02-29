// const num1 = 5  // 101 
// const num2 = 3  // 011
// const num3 = 6  // 110

// console.log(num1&num3)  // 001 = 1  结果输出为100 4

// 二进制可以补0  使得长度相等

// 如何判断一个整数是2的幂次方
// 循环除2非常暴力   k = 2 ^ n
// 2 = 10  4 = 100 8 = 100  16 = 1000
// 2-1 = 01  4-1 = 011 
// 所以该数和该数-1 按位与就全是0
const num = 15
function isPower(num) {
    if (num > 0) {
        return (num & (num - 1)) === 0
    }
    return false
}
console.log(isPower(num))

// 面试题：问你关于数字，想不到就先往二进制想