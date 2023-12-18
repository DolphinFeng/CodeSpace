// 面试官：下面输出是什么-----这种东西常考
console.log('script start')  //       1--------------1  a
async function async1() { // 相当于promise  同步
    await async2() // 异步微任务
    await async2() 
    console.log('async1 end') // 也变成了微任务   5----------5  b
}
async function async2() { // 4-------------2  c
    console.log('async2 end')
}
async1()
setTimeout(function () { // 异步宏任务
    console.log('setTimeout')  // 8---------8  d
}, 0)
new Promise(resolve => {
    console.log('Promise') // 2-------------3  e
    resolve()
})
    .then(function () {
        console.log('promise1') // 6------------6    f
    })
    .then(function () {
        console.log('promise2')  // 7------------7    g
    })
console.log('script end')// 3-----------4     h
// async 

// await


// 第一轮
// 函数声明先不管
// 宏任务：setTime
// 微任务：then2  then1  log('a1 end') a2  a1 (a1就执行完毕了)

// 第二轮
// 

// 以前老版本就是这样的执行
// 新版本await提速了，await代码又成同步了，后面的还是微任务
// 宏任务：setTimeout
// 微任务： then2 then1  log()