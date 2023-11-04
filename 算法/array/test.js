
// var x = "apple"

// console.log(Array.from(x)) 
//console.log(Array.from(str).reverse().join('') === str)

// strs = ["flower","flow","flight"]
// console.log(strs)
// array = strs.join(undefined)
// var result = []
// var newStr = [[]]
//     for(var i = 0 ; i<strs.length ; i++){
//         newStr[i] = Array.from(strs[i])
//         console.log(newStr[i])
//     }
//     for(var i = 0; i<newStr.length ; i++){
//         for(var j = 0 ; j<10 ; j++){
//             if(newStr[i][j] == newStr[i + 1][j]){
//                 result.push(newStr[i][j])
//             }
//         }
//     }
//    console.log(result.join(''))

// console.log(array)
// var nums = [3,0,1]
// var newNum = []
// for(var i = 1; i<=nums.length ; i++){
//     newNum.push(i)
// }
// console.log(newNum)
// var result = []

// console.log(result)
// var nums1 = [1,2,2,1], nums2 = [2,2]
// var newNums1 = new Set(nums1), newNums2 = new Set(nums2)
// var nums = []
// newNums1.forEach( item =>{      //找到两个数组相同的元素
//     if(newNums2.has(item)){
//         nums.push(item)
//     }
// })
// console.log(nums)
// var result = []
// var nums1 = [1,2,2,1], nums2 = [2,2]
// var newNums2 = nums2
// console.log(newNums2)
// nums1.forEach(item =>{
//     if(newNums2.has(item)){
//         result.push(item)
//     }
//  })
//  console.log(result)
var nums = [3  , 2, 1]
if(nums.length < 2){
    return nums[0]
}
if(nums.length < 3){
    if(nums[0] > nums[1]){
        return nums[0]
    }else{
        return nums[1]
    }
}
console.log(nums)
var newNums = new Set(nums)
var result = Array.from(newNums)
console.log(newNums)
// newNums.sort(function(a,b){
//     return b - a
// })
