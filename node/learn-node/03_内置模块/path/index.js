// node模块化语法的标准：common
const path = require('path') // path理解为某某路径下的一个东西，node是自带的
// console.log(path) //  里面有很多方法，这些方法都可以和你的操作系统交互
// console.log(path.join('a', 'b', 'c')) // a\b\c windows是反斜杠  有时候很烦人，所以公司有时候会用mac   join会以/拼接
// console.log(path.join(process.cwd())) // 进程.cwd  项目的绝对路径
// console.log(path.join(process.cwd(), 'model', 'index')) // d:\codeSpace\model\index  拿到当前文件的绝对路径
// console.log(path.resolve('a', 'b', 'c')) // d:\codeSpace\a\b\c  
// console.log(path.dirname(process.cwd())) //  d:\ 返回路径中的路径名
// console.log(path.dirname('a/b/c')) // a/b  传进来的路径最终指向的文件的目录  这个很有用 
// console.log(path.basename('a/b/c.js')) // c.js  mac需要/a/b/c.js前面加个/
// console.log(path.basename(__filename)) // index.js  basename读到文件的绝对路径 __filename是全局变量
// console.log(path.basename(__filename, '.js')) // index  
// console.log(path.extname(__filename)) // .js 获取文件的拓展名，就是尾缀  作用：你写了个图片上传的功能，你需要读取png，不要jpg，就要用这个
// console.log(path.normalize('/a/\b/c.j'))  // \a\b\c.j 格式化路径:将路径格式化成标准的路径 mac和windows不一样
// console.log(path.parse(__filename)) // parse是解析的意思  把你的文件夹的绝对目录，文件名，后缀，名称都解析出来
// console.log('foo\\bar\\baz'.split(path.sep)) // [ 'foo', 'bar', 'baz' ]  window这样写
console.log(path.isAbsolute('D:\\codeSpace\\node\\learn-node\\03_内置模块\\path'))//  判断是否为绝对路径


