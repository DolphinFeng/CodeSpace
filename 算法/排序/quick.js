// 快排：用的最多，而且考得最多
let arr = [5, 1, 3, 6, 2, 4, 7]
// 第二次排序不是n次

// 基准值随便取一个都可以
// 把数组砍成两段，左右两边都跟中间的6比较
// 比基准值小放左边，大就放右边
// [5, 1, 3, 4, 2] [6, 7]
// [1, 2] []
function quickSort(arr) {

    // 出口
    if(arr.length <= 1)  return arr
    const len = arr.length
    const base = arr[0]
    let left = [], right = []
    for(let i = 1; i < len; i++){
        if(arr[i] < base){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    // [...left, base, ...right] 
    // quickSort(left)
    // quickSort(right)
    return [...quickSort(left), base, ...quickSort(right)]
}
console.log(quickSort(arr))

// 时间复杂度：n * log(n)