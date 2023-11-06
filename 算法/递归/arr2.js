// 用递归解决arr1给数组降维----面试高频考点
var arr = [1,[2, [3, 4]]]

function flatten(arr) {
    var result = []
    // 是数组，继续遍历，不是就往外搬
    // 1.typeof 只能判断原始类型，原始类型都是object
    // 2.arr instanceof Array 返回true 就代表是数组
    // ({}) instanceof Array false 对象可不是数组
    // Array 是数组的构造函数
    // 3.Array.isArray(arr)
    for(var i = 0; i < arr.length ; i++){
        if(arr[i] instanceof Array){
            // 如果是数组，继续for循环
            // for(var j = 0; j<arr[i].length; j++){}
            // flatten(arr[i])递归得到的数组要进行合并
            // result.push(flatten(arr[i])) push会把整个第二层的数组放进去，没用
            // a.concat(b) || [].concat(a,b)
            var nextArr = flatten(arr[i])
            result = result.concat(nextArr)
            // 自身返回，result不会改
        }else{
            result.push(arr[i])
        }
    }
    return result
}
console.log(flatten(arr));