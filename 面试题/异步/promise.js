class MyPromise {
    constructor(executor) { // 形参回调一定会被promise执行
        this.state = 'pending' // promise的状态
        this.value = undefined // 接收resolve的参数
        this.reason = undefined // 接收reject的参数
        this.onFulfilledCallback = []
        this.onRejectedCallback = []

        // 所以要触发这个cb
        // 这两个形参还是函数
        const resolve = (value) => {
            if (this.state === 'pending') {
                this.state === 'fulfilled'
                this.value = value
                // 把then中的回调触发掉，只有resolve调用，then中的cb就会触发
                // then其实接收两个回调的，第一个就是给resolve，第二个就是给reject的，就相当于catch，所以then写出了，catch就不会让你写源码
                // 所以要先判断是一个还是两个
                this.onFulfilledCallback.forEach((cb) => {
                    // 为何执行多个回调，因为then后面还可以接无数个then
                    cb(value)
                })
            }
        }

        const reject = (reason) => {
            if (this.state === 'pending') {
                this.state === 'rejected'
                this.reason = reason
                this.onRejectedCallback.forEach((cb) => {
                    // 为何执行多个回调，因为then后面还可以接无数个then
                    cb(reason)
                })
            }
        }
        // 这个函数其实是有可能执行不出结果，有可能传进得来的函数就是会报错，比如定时器中throw new Error('error')
        executor(resolve, reject) 
    }

    then(onFulfilled, onRejected) {
        // then的两个回调触发取决于resolve
    }
}

let p = new MyPromise((resolve, reject) => {
    // resolve('1')
})
p.then() // 只有p里的状态变成了fulfilled，then才有意义
console.log(p);
// promise维护了一个状态