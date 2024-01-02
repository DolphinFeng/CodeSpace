const Koa = require('koa') // 引入koa，

const app = new Koa() // 建一个实例对象

app.listen(3000, () => { // 监听3000端口
    console.log('项目运行在3000端口')
})