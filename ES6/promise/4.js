// es6新增的构造函数promise，与普通函数区别就在于用法，new不new
function xq(){
// 这节课的目的是语法，面试让你手写一个promise
// return 了一个实例对象，
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            console.log('我要相亲了！')
            // 没有这个不行，这就相当于一个决心
            resolve('相亲成功了')
            // resolve抛出一值，then接收，then用不用都可以
            // 这个值让.then接收到 res
            // resolve不是个新参吗？这样说，这就是个函数，并且是自带的，源码里面
        },2000)
    })

}

function marry(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('我要结婚了！')
            resolve('生不生？')
        },1000)
    })
}

function baby(){
    setTimeout(() => {
        console.log('生娃！')
    },500)
}

// 相当于Promise实例对象.then  then也接受一个回调函数
// xq异步更狠，两个异步函数
// xq().then((res) => {
    
//     marry().then((res) => {
//         console.log(res)
//         log没有时间，所以一定先执行
//         baby()
//     })
//     console.log(res) 
//     //写这里都可以！
// })
// 代码这样写也不好，官方优化了
// promise:解决异步问题，变成同步

// baby()

// xq()
// .then(() => {
//     marry()
// })
// .then(() => {
//     baby()
// })
// 这样写有点问题

// .then之前面的，他也能返回一个promise对象，但是顺序变了，xq的return是自己写的，.then返回的实例对象
xq()
.then(() => {
    //marry()
    return marry()
    // 如果不写return 这两个.then就相当于一个异步，所以导致了baby先出生
    // 给到了当前then，覆盖了then返回的对象
    // 只要marry有return，.then返回就会等他去覆盖掉
})
// 保证then返回的对象和xq返回的对象是同一个类型
.then(() => {
    baby()
    // 可能在第一个then之前执行，因为then默认返回一个对象，
})
