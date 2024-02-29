function a() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('a');
            // resolve('OK')
            // throw new Error('error')
            // reject('NO')
        }, 1000)
    })
}

function b() {
    setTimeout(() => {
        console.log('b');
    }, 500)
}

// a执行完得到一个promise对象，而promise实例对象后面是可以接一个.then的，这个.then又接受一个回调
// a().then((res) => {  // resolve的值是会被res接收的 ， resolve可以不传值，但是res就是undefined，res算是变量声明，但是没赋值就是undefined
//     console.log(res);
//     b()
// })

// 还可以这样写
a().then(b) // then的回调一定是会直接调用的

// a().catch(err => {
//     console.log('error');
// })

a()
.then(b)
.catch(err => {
    console.log(err, 'error');
})
// then执行那么catch就不执行，catch执行那么then就不执行，用个开关变量就可以实现
// 或者说执行resolve，就执行then，执行reject就执行catch
// 只要调用了resolve，后面的reject就会忽视掉，如果reject写在前面，后面的resolve就会忽略掉

// 如果resolve和reject都没有调用，那么then不调用，其实是不对的，不过里面回调不执行，then执行，都是then()了