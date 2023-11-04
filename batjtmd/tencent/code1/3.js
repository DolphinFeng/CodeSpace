//国际版本一般用es5老版本创建函数

//智商游戏 hackthon
function createPhonenumber(numbers) {

    var format = "(XXX) XXX-XXXX"//模板
    for(let i = 0; i < numbers.length; i++) {
        format = format.replace('X',numbers[i])//字符串方法考的最多的是replace
    }
    return format

}
//leetcode 要去看题解 合并两个有序列表
console.log(createPhonenumber([1,2,3,4,5,6,7,8,9,0]))
