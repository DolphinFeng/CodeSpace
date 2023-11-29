let arr = [2, 3, 1, 4, 5]

// 2，1，3，4，5
// 1，2，3，4，5

// 自带api sort接受一个回调函数，回调函数接收两个参数  会影响原数组
// arr.sort((x, y) => x - y)
// console.log(arr)

// 面试官：没有sort如何实现排序，就是问你如何排序

// function bubbleSort(arr){
//     const len = arr.length
//     // 两层循环
//     for(let i = 0; i < len; i++){
//         // arr[i]  j从i+1开始  i为第一个时候，和后面每一个元素比较一次进行互换位置
//         for(let j = i + 1; j < len; j++){
//             // arr[j]
//             if(arr[i] > arr[j]){
//                 // 互换一下位置
//                 // arr[i] = arr[j]
//                 // temp = arr[i]
//                 // arr[j] = temp
                
//                 // 可以用解构es6
//                 [arr[i], arr[j]] = [arr[j], arr[i]]
//             }
//         }
//     }
//     return arr
// }
// console.log(bubbleSort(arr))
// 空间复杂度为0， 时间复杂度为n*n




// function findMinSort(arr){
//     let res = []
    
//     // 在for循环中进行移除工作会失败的，for一次就会少一次，变了
//     // for(let i = 0; i < len; i++){
//     //     res.push(getMin(arr))
//     //     arr.splice(arr.indexOf(getMin(arr)), 1)
//     // }
//     // 用while就可以
//     while(arr.length){
//         res.push(getMin(arr))
//         arr.splice(arr.indexOf(getMin(arr)), 1)
//     }
//     // 时间复杂度: getMin splice indexOf 3n * n   就是n * n，甚至空间复杂度是n

//     return res

//     function getMin(arr){
//         let min = Infinity
//         for(let i = 0; i < arr.length; i++){
//             if(arr[i] < min){
//                 min = arr[i]
//             }
//         }
//         return min
//     }
// }
// console.log(findMinSort(arr))

