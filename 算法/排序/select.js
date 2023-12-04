let arr = [5, 3, 2, 4, 1]
// 1, 3, 2, 4, 5
// 1, 2, 3, 4, 5

// 依次找最小值往前方（互换位置），不开辟新的空间
// 不断地缩小区间，在区间中找到最小值，放在区间地最左侧 

function selectSort(arr){
    const len = arr.length
    let minIndex 
    for(let i = 0; i < len; i++){
        minIndex = i
        // 缩小区间
        for(let j = i; j < len; j++){
        // 找当前区间地最小值
            if(arr[j] < arr[minIndex]){
                minIndex = j
            }
        }
        if(minIndex != i){
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
        }
    }
    return arr
    
}
console.log(selectSort(arr))