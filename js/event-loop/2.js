// 面试官可能这样问你,其实还是简单的
console.log('start');
setTimeout(() => {// ------------------------1
    console.log('setTimeout')
    setTimeout(() => { // -------没算事件也算宏任务---------4
        console.log('inner')
    })
    console.log('end')
}, 1000)
new Promise((resolve, reject) =>{ 
    console.log('Promise')
    resolve()
})
.then(() => {
    console.log('then1')
})//-------------------2
.then(() => (console.log('then2')))//-------------------3


// 宏任务队列：1  最后1去调用栈执行，开始第二轮event-loop
// 微任务队列：3,2  2出，3出，

// v8就维护一个宏任务调用栈

// 宏任务：4
// 微任务：

// 第三轮
// 宏任务：执行4

// 所以输出结果
