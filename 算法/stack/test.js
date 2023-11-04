// let s = "leEeetcode"
// for(let char in s){
//     console.log(s[char])
// }
// ops = ["5","2","C","D","+"]
// let stack = []
// for(num of ops){
//     switch(num){
//         case "C":
//             stack.pop()
//             break
//         case "D":
//             stack.push(stack[stack.length - 1] * 2)
//             break
//         case "+":
//             stack.push(stack[stack.length - 1] + stack[stack.length - 2])
//             break
//         default:
//             stack.push(Number(num))
//             break
//     }
// }
// console.log(stack.reduce((a,b)=> a + b))
// s = "ab#c", t = "ad#c"
// const stackOne = []
// const stackTwo = []
// for(let num of s){
//     switch(num){
//         case'#':
//             stackOne.pop()
//             break
//         default:
//             stackOne.push(num)
//             break
//     }
// }
// for(let num of t){
//     switch(num){
//         case'#':
//             stackTwo.pop()
//             break
//         default:
//             stackTwo.push(num)
//             break
//     }
// }
// console.log(stackOne.toString())
// console.log(stackTwo.toString())
// console.log(stackOne.toString() === stackTwo.toString())
// const s ="CCCCDDDD"
// const stack = []
// for(let char of s){
//     if(stack.length >= 2 && stack[stack.length - 1] == 'B' && stack[stack.length - 2] == 'A'){
//         stack.pop()
//         stack.pop()
//     }else if(stack.length >= 2 && stack[stack.length - 1] == 'D' && stack[stack.length - 2] == 'C'){
//         stack.pop()
//         stack.pop()
//     }else{
//         stack.push(char)
//     }
// }
// console.log(stack)
// if(stack.join('') == 'AB' || stack.join('') == 'CD'){
//     stack.pop()
//     stack.pop()
// }
s = "ABFCACDB"
while(s.includes('AB') || s.includes('CD')){
    s = s.replace('AB','').replace('CD','')
}
console.log(s)
