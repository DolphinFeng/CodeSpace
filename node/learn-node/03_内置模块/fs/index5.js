// 纯node做一个个人博客
const fs = require('fs');
// const info = fs.readdirSync('./test')
// console.log(info)

// fs.mkdirSync('./test-dir/data/list', {recursive: true}) // 创建一个目录  不能一次性建立多层
// 多层需要声明第二个参数

// fs.rmdirSync('./test-dir', {recursive: true}); // 删除文件夹和之前一样，需要recursive: true

fs.watch('./', { recursive: true }, (eventType, filename) => {
    console.log(`当前文件夹下${filename}文件变更为: ${eventType}`)
}) // 当前文件夹下只要有文件变更就执行回调   这个一直会运行着

// 这个东西可以一直实现实时通知，比如监控


