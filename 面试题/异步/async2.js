function request (num) { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num * 10)
        }, 1000)
    })
}

// async await打造基于generator
function* gen () {
    const num1 = yield request(1)
    const num2 = yield request(num1)
    const num3 = yield request(num2)
    return num3
}

// 模拟async
function generatorToAsync (generatorFn) { // 这是高阶函数，闭包也是高级函数 把generatorFn变成具有async功能的函数
    // async会返回一个promise对象
    
    return function () { 
        const gen = generatorFn()
        return new Promise((resolve, reject) => {
            // const next1 = gen.next()
            // next1.value.then((res1) => {
            //     const next2 = gen.next(res1)
            //     next2.value.then((res2) => {
            //         const next3 = gen.next(res2)
            //         next3.value.then((res3) => {
            //             resolve(res3);
            //         })
            //     })
            // })

            function loop (key, arg) { // 这个代码其实就是co的源码，async，
                let res = null
                res = gen[key](arg)
                const { value, done } = res
                if (done) {
                    return resolve(value) 
                } else {
                    Promise.resolve(value).then(res => loop('next'. val))
                }
            }
            loop('next')
        }) 
    }
}

const asyncFn = generatorToAsync(gen)
console.log(asyncFn);
asyncFn().then(res => {
    console.log(res);
})