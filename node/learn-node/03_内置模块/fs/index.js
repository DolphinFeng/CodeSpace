// fs file system 文件系统
// 支持同步异步两种调用方式
const fs = require('fs');

// 同步
const syncData = fs.readFileSync('./data.txt', 'utf8') // https://nodejs.cn/api/fs.html#fsreadfilepath-options-callback {utf8}也可以

// console.log(syncData) // runcode 会默认读到绝对路径，有时候不好用，用终端运行


// 异步
// const syncData = fs.readFile('./data.txt', {encoding: 'utf8'}, (err, res) => {
//     if(!err) {
//         console.log(res)
//     }
// });

// fs.promises.readFile('./data.txt', 'utf8').then(res => {
//     console.log(res)
// })

// const fs = require('fs/promises')
// fs.readFile('./data.txt', {encoding: 'utf8'}).then(res => {
//     console.log(res)
// })