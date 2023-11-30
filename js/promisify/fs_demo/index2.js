// fs 读取文件
// 解决回调地狱方案：promise.thn   或者  async + await 
// 如何将这两个进行结合；封装成一个函数
function readFileByPromise(path){
    
    return new Promise((resolve, reject) => {
        const fs = require('fs');
        fs.readFile(path, 'utf-8', ((err, data) => {
            if(err){
                reject(err)
            }
            console.log(data)
        }))
        resolve()
    })
} 

// readFileByPromise('./a.txt')
// .then((data) => {
//     return readFileByPromise('./b.txt')
// })
// .then((data) => {
//     return readFileByPromise('./c.txt')
// })

// async处理问题用try catch
(async function(){
    
    try{
        const f1 = await readFileByPromise('./a.txt');
        const f2 = await readFileByPromise('./b.txt');
        const f3 = await readFileByPromise('./c.txt');
    }catch(e){

    }
    
    // console.log(f1, f2, f3)
})()