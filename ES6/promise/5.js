// 原型上的方法，和自身的方法的区别

function a(){
    // resolve是顺利执行，reject是执行出错
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log('a');
            // resolve()
            reject(err)
        }, 1000)
        
    })

}
// 耗时执行的函数：异步函数
function b(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log('b');
            resolve()
            // reject()
            // reject出来的错误你是可以访问的，就是方便你来找错
            // log之后再出错，reject就是人为给你报错。c就不能执行了
        }, 1500)    
        
    })
    
}

// 让a先b后
// a()
// b()
// 异步就是并发执行，所以总共1.5s
// 如果用promise，先b后a，就是2.5s，这样就对了，但是又慢了
// 不可兼得

// 不耗时执行就是同步代码
function c(){
    console.log('c')
}
// 让ab执行之后再执行c

// all方法 不是实例对象的方法

// all方法是函数本身的，参数是数组，返回promise对象
// c写成箭头函数，里面执行c是一样的，c不需要（）,then会帮你执行
// Promise.all([a(),b()]).then(c)



// c a b，all需要ab有返回promise的能力，并且有resolve状态
// 保证ab执行完了再执行c，
// c没执行，就是then没执行
// Promise.all([a(),b()]).then(function(){
//     c()
// })
// then源码就是会帮你调用，里面接受的函数体
// 如何实现
// function then(fn){
//     fn()
// }

// then之前必须要是resolve的promise
// resolve的值在then拿到，reject也可有参数，then虽不能执行，catch能接受err这个参数，catch并且不会报错

// 我希望a或者b有一个能出来，c就能执行
// a resolve b reject

// race就是数组中都得resolve，就会触发then then执行看最快的（应用场景：优化代码：接口获得个人详情，另一个是家人详情，你不知道哪个接口快，所以用race）
// Promise.race([a(),b()]).then(c)

// 只要报错就去catch中去

Promise.race([b(),a()])
.then(c)
.catch((err) => {
    console.log(err)
})
