// let flag = false
// 开关变量
// function a(bc)
function a(){
    setTimeout(()=>{
        let age = 18
        console.log('个人');
        // 把b放到a里面去调用,a声明在全局，词法在全局
        // 2015的时候就是这样解决的，如果很多函数，一直套会很累，这种方法叫回调callback！
        // bc()
        // b()
        // bc执行是否完毕，与a执行完毕无关，这是个坑：它并不会导致内存泄漏，又不是闭包！
        // flag = true;
    },1000)
    // 如果我现在就是想，有个函数，请求到个人的用户信息，请求是异步的，后端返回数据，这个过程取决于网速
    // 再来个函数，访问到用户家里的信息
    // 这两个函数同时调用肯定不行
    // 也就是说我就是想先打印个人的
}
function b(){
    // console.log(age)
    // 拿不到
    setTimeout(()=>{
        console.log('家里')
    },2000)
    // 定时器可控，但是网速我们不可控，有可能先调用函数，后出现执行结果，可能会丢包！
}
// a(b)
a()
// 执行完a,要等，所以继续下走 ，又进不去，走完了，不能回头
// if(flag){
//     b()
// }

// 函数b执行前一定需要a要执行结果，但是a的执行结果可能不受控，网速决定

// 一个场景：刷新按钮，页面数据哪里来？数据库来的！服务器代指后端，数据库，前端和后端代码会进行数据传输
// 刷新的时候向服务器发送请求，刷新完的时间：请求相应的时间，取决于网速，后面再讲数据请求