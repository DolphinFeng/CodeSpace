// console.log(globalThis === window)  // 放在浏览器打印  window中全局就是window
// console.log(globalThis === global) // 在node中，全局就是global
// global.userInfo = {
//     name: '小黑子',
//     age: 18
// }

// console.log(Object.getOwnPropertyNames(global)) 
// 之前newObj.hasOwnProperty(key) 是判断key显示具有还是隐式具有 true为显示
// getOwnPropertyNames 打印所有的key  非常多

// __filename __dirname这两个也是全局变量  不过只在commonjs才出现
// console.log(__filename)  // 文件的绝对路径
// console.log(__dirname)  // 文件夹的绝对路径

// process 进程
// console.log(process) // 里面有非常多属性
// console.log(process.argv) // 获取进程中输入的所有指令 第一个是node的路径  第二个是当前文件路径 node index.js --hello
// 第三个才是你输入的指令 空格表示下一个指令
// 这个东西的应用就是当你用脚手架回车Y/n 或者N/y 的时候，人家是可以获取到你输入的指令值的

console.log(process.cwd())   // 获取当前的工作目录绝对路径 和dirname有点类似，但是是工作目录

// console.log(process.env) // 代表环境变量 NODE_ENV=production node index.js

// 这个操作可以用来做环境变量，开发环境如何，生产环境如何
// 打包项目的时候你不清楚你现在是开发还是生产环境
// production 是生产环境 可以让过滤console.log代码生效  dev是开发环境 就不过滤
// 有时候调试可能一堆console.log最终你肯定要去掉的

// console.log(process.pid) // 看进程的id

// console.log(process.platform)  // win32  看当前操作系统

// console.log(process.arch) // x64 读cpu

// console.log(process.stdout) // 标准的输出流 数据写入的输入流
process.stdout.write('hello')
process.stdout.write(' ')
process.stdout.write('world')
process.stdout.write('\n')
process.stdout.write('ok')
// 做数据写入的操作  这些东西的作用: cli问你问题的时候，他需要输出给你看，写入终端数据，就是脚手架与用户做的交互操作


process.stdout.write('Are you sure you want to do?')
process.stdin.on('data', (data) => {   // 读取用户输入的输入流
    // console.log('用户输入了' + data)
    console.log(`用户输入了： ${data}`)
}) // 小demo 脚手架工具就是这样打造的
