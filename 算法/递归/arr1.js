
// >2 维度，多维数组
// 把这个转成一维数组，70%概率不用你写后端
var arr = [1,[2, [3, 4]]]


// 方法一,es6新增的方法  数组的扁平化，1代表降一维，降多了也没关系
var newArr = arr.flat(Infinity)
console.log(newArr);