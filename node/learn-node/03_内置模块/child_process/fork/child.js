process.on('message', (msg) => {
    console.log(`来自父进程的消息: ${msg}`);
    process.send('hello from child')  // 两份js实现数据传输，node父子通讯
})

