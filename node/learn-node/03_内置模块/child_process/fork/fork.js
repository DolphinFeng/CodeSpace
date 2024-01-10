const fork = require('child_process').fork;

const child = fork('child.js')  // 使用fork方法创建一个子进程

child.on('message', (msg) => {  // 监听子进程发来的消息
    console.log(`来自子进程的消息: ${msg}`);
})

child.send('hello from parent') //  向子进程发送一条消息