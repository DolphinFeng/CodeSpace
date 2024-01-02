const Koa = require('koa') 
const app = new Koa() 

const fa = (ctx, next) => {
    console.log('a')
    next()
    console.log('1')
}
const fb = (ctx, next) => {
    console.log('b')
    next()
    console.log('2')
}
const fc = (ctx, next) => {
    console.log('c')
    next()
    console.log('3')
}
app.use(fa)
app.use(fb)
app.use(fc)
// 其实源码就是一个递归 设置成这个样子--洋葱模型
// 所有被use掉的函数都叫中间件函数，中间件执行是有规则的：无next只执行第一个，有next才可以执行后一个// 可以处理异步
app.listen(3000, () => { 
    console.log('项目运行在3000端口')
})