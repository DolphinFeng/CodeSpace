// fs是node内置的模块化系统 这个机制叫做commonJS  js是文件模块，可以读取文件    I/O 把硬盘内容读取到内存中，运行会进入到执行栈中 
// 硬盘相对于内存的执行速度慢一千倍   文件有大小，耗时异步
const fs = require('fs')

// 第一个参数错误对象err（文件找不到就用，权限不够） 第二个参数数据
// ./ 代表当前目录
fs.readFile('./a.txt', 'utf-8',((err, data) => {
    // 加一个空格转换成10进制
    if(err){
        console.log(err)
        return 
    }
    // node默认十六进制 buffer是二进制流（用的十六进制表达）  buffer对象以后再讲
    // console.log(data + ' ')
    // 二进制流转成字符串就可以了
    // console.log(data.toString())
    // 也可以在回调中加个utf-8这个参数
    console.log(data)
    fs.readFile('./b.txt', 'utf-8', ((err, data2) => {
        if(err){
            console.log(err)
            return 
        }
        console.log(data2)
        fs.readFile('./c.txt', 'utf-8', ((err, data3) => {
            if(err){
                console.log(err)
                return 
            }
            console.log(data3)
        }))
    }))
    
}))