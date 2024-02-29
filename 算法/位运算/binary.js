// let a = 13

// 十进制转二进制
// 13 / 2 = 6   1
// 6  / 2 = 3   0
// 3  / 2 = 1   1
// 1  / 2 = 0   1
// 余数倒着看就是1101  这就是13的二进制
// x * 2 ^ n  + x * 2 ^ (n-1) + …… + x * 2 ^ 0 = 13
// 1 1 0 1 
// x表示要还是不要 1就是要 0就是不要 

// 二进制转十进制
// 1 * 2^3 + 1 * 2^2 + 0 * 2^1 + 1 * 2^0 = 13
 
// console.log(parseInt(2.3))  // 向下取整 Math.floor 直接保留整数
console.log(parseInt(2.7, 10, 0)) 
// console.log(Math.floor(2.5));
// 第二个参数默认就是10进制
// console.log(parseInt(1101, 2))  // 第二个参数：表示第一个参数为几进制转成10进制
// console.log(parseInt(1101, 10))

// 一道面试题：当年出来的时候很火
// const arr = [1, 2, 3]
// const newArr = arr.map(parseInt)
// const newArr = arr.map((item, i => parseInt(item, i)))
// parseInt(1, 0) 放0跟没放一样 所以就是10  就是1
// parseInt(2, 1) 放1，但是没有1进制  就是Not a Number NaN
// parseInt(3, 2) 3无法看成2进制  NaN
// console.log(newArr)



