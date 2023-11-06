// 另外一个思路，也用递归，扁平化数组

// var arr = [1, 2, 3, 4, 5, 6, 7]

// reduce也是遍历数组，和foreach（每一项，下标，原数组）也接收回调 
// 函数中第一个参数是啥？第二个参数
// var sum = arr.reduce(function(pre, item, index, arr){
//     return pre + item
// },0)
// pre就是第二个实参，不传pre就代表第一个数据，后面就没有了，item第二个开始  函数中return给到pre！！！ reduce在结束循环会把pre最终的值返回出来

// console.log(sum);
// 这个做累加真不错

// 所以reduce就是用来做累计的效果

var arr = [1,[2, [3, 4]]]

function flatten(arr) {
    // pre初始值为空
    return arr.reduce(function(pre, item){
        // 三元运算符
        // concat里面是一个数也算，相当于把这个数加进去了
        return pre.concat(Array.isArray(item) ? flatten(item) : item)
    },[])

}

console.log(flatten(arr));