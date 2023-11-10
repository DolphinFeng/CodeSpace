//数组API 50%-60%的样子

var arr = ['a', 'b', 'c', 'd']
arr[0]='aa'

console.log(arr[0])

console.log(arr.length)

console.log(2 in arr)//in是看下标

console.log(arr.includes('c'))//数组是否存在这个值

arr.push('e')//尾部新增

arr.pop()//尾部删除

arr.unshift('hello')//头部新增

arr.shift()//头部删掉

str.split('')//字符串转数组

arr.replace('AB','')//将空代替成AB

arr.splice(2,0,'hello')//中间任何一个位置植入,2是下标，0是默认的值，不用改

arr.splice(2,1)//从下标为2的位置开始删除，删除1个  1这个参数没有得话，就直接删除后面所有的-----------会影响原数组

arr.slise(2,1)//从哪个下标开始截取多长 不会影响原数组[)
// 字符串也可以，字符串没有splice（切割，影响原数组）

//API,就是方法，api肯定有很多方法关于数组的

for(var i=0;i<arr.length;i++){//遍历
    console.log(arr[i])
}

arr.forEach(function(item,index,arr){//遍历  item是元素
    console.log(item,index,arr)
})

var newArr =  arr.map(function(item,i,arr){//map会返回一个新的数组
    return item + '1'
})

var s = arr.join('-')//每个元素之间有-相连，形成一个字符串

var s = arr.split("")//将字符串转换为数组

var str = 'abcd'

var array = str.split('')

console.log(arr.indexOf('b'))//找数组是否存在这个元素，有就返回它的下标，没有就返回-1 includes返回Boolean值

console.log(arr.lastIndexOf('b'))//从后往前找，返回下标

var newarr = arr.reverse()//反转，dcba

var arrNum = [3,5,7,1,0]

var newArrNum = arr.sort()//对数字进行排序，返回一个新数组，原数组不变

arr.sort(function(a,b){//回调函数,从小到大输出
    return a - b
})

arr.sort(function(a,b){//回调函数,从大到小输出
    return b - a
})

arr.reduce((a,b) => a + b)//对数组所以元素进行求和

var res = new Array(len).fill(0)//填充长度为len的全为0的数组

var arr2 = [10,20,30]

var newArr2 = arr.concat(arr2)//将arr2数组放入到arr中

var newArr3 = [].concat(arr,arr2) //将arr,arr2放入到newArr3中

//面试题，map方法如何写的


Math.round
Math.fixed