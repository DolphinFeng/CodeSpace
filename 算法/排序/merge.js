let arr = [5, 1, 3, 6, 2, 4, 7]
// [5, 1, 3] [6, 2, 4, 7]
// [5] [1, 3] [6, 2] [4, 7]
// [5] [1] [3] [6] [2] [4] [7]

function mergeSort(arr) {
    if (arr.length <= 1) return arr

    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);

    const merge = (leftArr, rightArr) => {
        let res = [];
        let leftIdx = 0;
        let rightIdx = 0;

        // 比较左右两部分的元素，依次将较小的元素加入结果数组中
        while (leftIdx < leftArr.length && rightIdx < rightArr.length) {
            if (leftArr[leftIdx] < rightArr[rightIdx]) {
                res.push(leftArr[leftIdx]);
                leftIdx++;
            } else {
                res.push(rightArr[rightIdx]);
                rightIdx++;
            }
        }

        // 将剩余的元素加入结果数组
        while (leftIdx < leftArr.length) {
            res.push(leftArr[leftIdx]);
            leftIdx++;
        }
        while (rightIdx < rightArr.length) {
            res.push(rightArr[rightIdx]);
            rightIdx++;
        }

        return res;
    }

    return merge(mergeSort(leftArr), mergeSort(rightArr));
}


console.log(mergeSort(arr));