// console.log([1, 2, 3].map(parseInt))
// 为何是[1, NaN, NaN]：NaN会和冒泡排序一起考察。map会遍历，对每一个元素进行parseInt，返回一个新的数组
// 1 parseInt(1, 0, [1, 2, 3])  没有0进制，无效的
// 2 parseInt(2, 1, [1, 2, 3])  radix是进制，逢1怎么进，写0都没用，1进制没有2
// 3 parseInt(3, 2, [1, 2, 3])  2进制没有3
// 但是parseInt(string, ？radix) 将字符串解析成数字，如果是‘abc’就是NaN ，‘123abc’就是123   ？表示可以不传，默认10  
// console.log(parseInt('10')) 数字10

