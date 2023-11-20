// 理解进程
// 石头剪刀布
// console.log(process);
// argv: [
//     'C:\\Program Files\\Node\\node.exe',
//     'D:\\codeSpace\\node\\spider\\base\\2.js'
//   ],
// argv是指令的意思
// node 2.js hello  一个空格一个指令  argv就可以收到这个hello指令
// console.log(process.argv)

// console.log(process.argv[process.argv.length - 1])
let player = process.argv[process.argv.length - 1]
let arr = ['rock', 'scissors', 'paper']

// （0，3】
let index = Math.floor(Math.random() * 3)
let computer = arr[index]
if(computer === player){
    console.log('平局');
}else if(
    (computer === 'rock' && player === 'paper') ||
    (computer === 'paper' && player === 'scissors') ||
    (computer === 'scissors' && player === 'rock')
    ){
        console.log('你赢了')
    }else{
        console.log('你输了')
    }
