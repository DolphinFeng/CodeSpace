function a() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('a');
            resolve('OK')
        }, 1000)
    })
}

function b() {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('b');
            resolve('ok2')
        }, 500)
    })
}

function c() {
    console.log('c');
}

// 同样挂在函数 上， state是挂在原型上
// all: 是并且的关系 race是或者的关系  
// 数组中的函数都是fullfilled那么all才是fulFilled，才执行then
// 但是数组中但凡一个reject，那么all就是rejected，大家都 好才好，但凡一个坏的就是坏的
Promise.all([a(), b()]).then(() => {
    c()
})