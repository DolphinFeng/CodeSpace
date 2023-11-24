function A(){
    setTimeout(() => {
        console.log('异步A完成')
    }, 6000)
}
function B(){
    setTimeout(() => {
        console.log('异步B完成')
    }, 3000)
}

A()
B()
//1 宏任务：B  A

//2 宏任务 A  1s后输出A

//3 宏任务 B

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
// .then(() => { 
//     return B()
// })
// .then(() => {
//     C()
// })

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

// async function foo() {
//     await A()
//     console.log('1')
//     await B()
//     await C()
// }
// foo()