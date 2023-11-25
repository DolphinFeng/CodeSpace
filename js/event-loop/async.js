// function A(){
//     setTimeout(() => {
//         console.log('异步A完成')
//     }, 1000)
// }
// function B(){
//     setTimeout(() => {
//         console.log('异步B完成')
//     }, 500)
// }

// const { log } = require("async")

// A()
// B()
// 这样就是b,a，
// 但是我不想回调，不好用，那就promise

// function A(){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             console.log('异步A完成')
//             resolve()
//         }, 1000)
//     })
// }
// function B(){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             console.log('异步B完成')
//             resolve()
//         }, 500)
        
//     })
// }
// function C(){
//     setTimeout(() => {
//         console.log('异步C完成')
//     }, 100)
// }
// A()
// .then(() => { // .then虽然默认会返回一个Promise对象，但是当.then的回调有人为的返回的Promise时，.then的默认的Promise会被覆盖
//     return B()
// })
// .then(() => {
//     C()
// })

// 其实这样写，.then.then不优雅！于是官方在es7封装了一个async

function A(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('异步A完成')
            resolve()
        }, 1000)
    })
}
function B(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('异步B完成')
            resolve()
        }, 500)
    })
}
function C(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('异步C完成')
            resolve()
        }, 100)
    })
}

// A()
// B()
// C()
// 要abc输出
// async function foo() {
//     // 等同于函数体写了一个new Promise体，所以foo得到一个promise对象
// }
// console.log(foo()) Promise { undefined }

async function foo() {
    // await后接一个promise对象  就相当于.then
    // 正常项目开发，一般都会内置封装一个异步代码，用别人的，或者自己封装
    await A()
    // .then语法糖
    // await 会阻塞后续代码的执行，将后续代码推入到微任务中
    console.log('1')
    await B()
    await C()
}
foo()
// async可以单独出现，await必须有async  

// 面试：手写async 和 await的源码


