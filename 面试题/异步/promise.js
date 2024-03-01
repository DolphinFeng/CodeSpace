class MyPromise {
    constructor(executor) { // 形参回调一定会被promise执行
        this.state = 'pending' // promise的状态
        this.value = undefined // 接收resolve的参数
        this.reason = undefined // 接收reject的参数
        this.onFulfilledCallback = [] // 存放then的回调，为何是数组，因为可能多个回调
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

    then(onFulfilled, onRejected) { // constructor同级的方法就是挂显示原型
        // then的两个回调触发取决于resolve
        // 把回调存起来
        // then后面是可以接then then是默认返回一个promise对象，但是第一个then中的函数执行，是在第二个then执行的后面
        // 所以then不能控制状态，且默认状态是pending
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value // 不是函数就给他随意放一个函数
        onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason }
        
        // 是函数体，返回一个promise
        const newPromise = new MyPromise((resolve, reject) => {
            // promise默认返回一个fulfilled的状态
            if (this.state === 'fulfilled') { // 满足这个条件说明then前面的promise对象同步变更完成
                // 有人往里面放的同步代码
                // onFulfilled() // 这样会有个问题，这个写法是同步，需要是微任务，其实官方写法很复杂，面试时写成宏任务即可
                setTimeout(() => {
                    try {
                        const res = onFulfilled(this.value) // 至少保证了是异步，面试写到这个程度就可
                        resolve(res) // 其实应该是res中的resolve的参数，但是这个写法得到的是promise
                        // 正常来讲需要判断res是否为一个promise对象，但是这里没有判断
                    } catch (error) {
                        reject(error)
                    }
                })
            }

            if (this.state === 'rejected') { // 满足这个条件说明then前面的promise对象同步变更完成
                setTimeout(() => {
                    try {
                        const res = onRejected(this.reason) // 至少保证了是异步，面试写到这个程度就可
                        resolve(res) 
                    } catch (error) {
                        reject(error)
                    }
                })
            }

            if (this.state === 'pending') { // 缓存then中的回调
                this.onFulfilledCallback.push((value) => {
                    setTimeout(() => { // 保障将来onFulfilled在resolve中被调用时是一个异步函数
                        try {
                            const res = onFulfilled(value)
                            resolve(res)
                        } catch (error) {
                            reject(error)
                        }
                    })
                })

                this.onRejectedCallback.push((reason) => {
                    setTimeout(() => { // 保障将来onFulfilled在resolve中被调用时是一个异步函数
                        try {
                            const res = onRejected(reason)
                            resolve(res)
                        } catch (error) {
                            reject(error)
                        }
                    })
                })
            }
        })
        return newPromise
    }

    static race (promises) { // static实例对象访问不到
        return new MyPromise((resolve, reject) => {
            // 看promises里的那个对象的状态先变更，直接循环遍历数组
            for (let promise of promises) {
                // 要先判断是否为promise对象
                promise.then( // 要是能执行，那就是对象，且状态变更
                    (value) => {
                        resolve(value)
                    },
                    (reason) => { // 谁先reject谁先执行then参二
                        reject(reason)
                    }
                )
            } 

        })
    }
}

let p = new MyPromise((resolve, reject) => {
    // resolve('1')
})
p.then() // 只有p里的状态变成了fulfilled，then才有意义
console.log(p);
// promise维护了一个状态