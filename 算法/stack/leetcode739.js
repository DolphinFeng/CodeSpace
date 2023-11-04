//暴力解法 其实也是可以的，我们给个loading 哈哈哈哈
//temperatures = [73,74,75,71,69,72,76,73]
// const len = temperatures.length
// const res = []
// for(var i = 0; i <len; i++){
//     let flag = false
//     const item = temperatures[i]
//     for(var j = i + 1; j<len ; j++){
//         const high = temperatures[j]
//         if(item < high){
//             res.push(j - i)
//             flag = true
//             break//性能更好
//         }
//     }
//     //里面找不到更高的就push0
//     if(!flag){
//         res.push(0)
//     }

// }
// console.log(res)

//如果算75的时候可以顺带解决71的解，暴力不优雅就在于重复走了很多路
//栈可以避免重复的操作，不必要的数据出栈 
//一直希望当前的数是递减的栈结构，找出打破当前局面的逆子
temperatures = [73,74,75,71,69,72,76,73]
const len = temperatures.length
const stack = []
const res = new Array(len).fill(0)
console.log(res)
for(let i = 0; i < len; i++) {
    //如果栈不为空
    //循环第二遍的时候 找出打破递减趋势的温度  第二天的温度比较栈顶下标对应的温度
    while(stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]){
        const top = stack.pop()
        res[top] = i - top 
    }
    //存温度下标 希望对应的温度是递减的，打破的丢掉
    stack.push(i)
}
console.log(res)