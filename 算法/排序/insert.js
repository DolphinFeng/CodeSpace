// 插入排序：让左边是有序队列，比如第一个数是5，为有序，放进一个3，然后3， 5是有序，依次插入
let arr = [5, 3, 2, 4, 1]

// 3, 5, 2, 4, 1
// 2, 3, 5, 4, 1
// 2, 3, 4, 5, 1
// 1, 2, 3, 4, 5
// 时间复杂度： n * n 空间0

function insertSort(arr){
    const len = arr.length
    let temp
    // 第一个元素就相当于有序
    for(let i = 1; i < len; i++){
        temp = arr[i]
        // j代表有序队伍中下标
        let j = i
        while(j > 0 && arr[j - 1] > temp){
            arr[j] = arr[j - 1]
            j--
        }
        arr[j] = temp
    }
    return arr
}

console.log(insertSort(arr))