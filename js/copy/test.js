let arr = [1, 2, 3, {a: 10}]
let newArr = arr.slice(0)
// 只有一个参数0，也就是提取整个数组
arr[3].a = 1
console.log(newArr)