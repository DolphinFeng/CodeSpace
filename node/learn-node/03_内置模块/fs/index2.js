const fs = require('fs')
// 同步
// fs.writeFileSync('./target.txt', '大黑子')

const img = fs.readFileSync('./avatar.jpg')
// console.log(img) // buffer流  js没有buffer流，只有node有（默认格式）  图片可以用base64格式
// 流是node一个格式
//  console.log(Buffer.isBuffer(img)) 判断是否是buffer格式
// console.log(img.length) buffer的长度
// console.log(img.toString()) 把图片以字符串的方式读取

// 将图片写入pic中去
fs.writeFileSync('./pic/avatar.jpg', img)
// 平时的复制就是复制buffer流
