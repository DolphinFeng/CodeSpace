// let s = "Hello world"
// var array = s.split(' ')
// console.log(array)

// let a = []
// let res = []
// res.unshift('0')
// a = res[0] + 1
// console.log(a);
// root = [1,2,2,2]
// // console.log(root.val);
// const res = []
    
// const rec =(root)=>{
//     if(!root) return
//     rec(root.left)
//     res.push(root.val)
//     rec(root.right)
// }
// rec(root)
// console.log(res);
// var date = "1900-05-02"
// var dayOfYear = function (date) {
//     // 记录每月的天数 / 0 用来占位
//     const dayCount = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//     // 分词
//     const dateDetail = date.split('-');

//     let res = 0;
//     // 根据月份加和
//     for (let i = 0; i < dateDetail[1]; i++) {
//         res += Number(dayCount[i]);
//     }
//     // 处理碰到闰年的情况
//     if (dateDetail[0] % 4 === 0 && dateDetail[1] > 2) {
//         res += 1;
//     }
//     // return
//     return res + Number(dateDetail[2]);
// };
// console.log(dayOfYear(date));

// var arrNum = [3,5,7,1,0]

// var newArrNum = arrNum.sort()

// var res = []

// for(var i = 0; i<arrNum.length; i++){
//     res.push(arrNum.indexOf(newArrNum[i]))
// }
// console.log(res);
// function getRanks(arr) {
//     const sortedArray = [...arr].sort((a, b) => a - b);
//     const ranks = arr.map(item => sortedArray.indexOf(item) + 1);
//     return ranks;
//   }
  
//   const originalArray = [7, 2, 5, 1, 3];
//   const ranks = getRanks(originalArray);
  
//   console.log(ranks);
// var score = [5,4,3,2,1]
//     const sortNums = [...score].sort((a,b)=>b-a);
// console.log(sortNums);
//     for(let i = 0; i < score.length; i++){
//         const val = score[i];
//         const rank = sortNums.indexOf(val) + 1;
//         if(rank === 1){
//             score[i] = 'Gold Medal';
//         }else if(rank === 2){
//             score[i] = 'Silver Medal';
//         }else if(rank === 3){
//             score[i] = 'Bronze Medal';
//         }else{
//             score[i] = rank + '';
//         }
//     }
//     console.log(score);
l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// l1 = [2,4,3]
// l2 = [5,6,4]
var aaa = new ListNode(9,9,9,9,9,9,9)
console.log(aaa)
var a = parseInt(l1.reverse().join(""))
var b = parseInt(l2.reverse().join(""))
var res = a + b + ''
// 输出[7, 0, 8]
var result = res.split('').reverse()
var numArr = result.map(str => parseInt(str))
console.log(numArr)
