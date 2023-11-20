// https://nodejs.cn/api/crypto.html
// console.log('hello world');
// console有很多模块，console是个类，也是个对象
// node的v8和浏览器的v8不同
// console.log(Date);
// console.log(Math)
// setTimeout(() => console.log('setTimeout'),1000)
// console.log(setImmediate)  用的少
// console.log(setInterval);
// console.log(requestAnimationFrame); // 时间根据电脑屏幕的刷新率决定，60hz，人肉眼16.7毫秒以内的动是不到的，1s内动60次，上次弹幕见过，node没有，但是浏览器有


// dir - directory目录
// __dirname读取当前目录的绝对路径，都能读到操作系统的目录了
// console.log(__dirname);
// 当前文件的绝对路径
// console.log(__filename);

// 进程：任务管理器有很多进程，运行一个软件就相当于一个进程
// node可以跑很多进程
console.log(process);