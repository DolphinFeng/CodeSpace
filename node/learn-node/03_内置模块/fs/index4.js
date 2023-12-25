const fs = require('fs');

fs.appendFileSync('./data.txt', '\n大黑子') // 文件中加内容  writeFile覆盖原来的
// fs.renameSync('./data.txt', './data.md') // 重命名 甚至可以修改文件后缀
// fs.renameSync('./data.md', './pic/data.md') // 移动文件
// fs.unlinkSync('./pic/data.md') // 删除文件
// fs.rmSync('pic', {recursive: true}) // 删除文件夹
