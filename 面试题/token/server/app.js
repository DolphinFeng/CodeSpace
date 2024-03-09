const Koa = require('koa')
const cors = require('koa2-cors') // 这样不用写相应头，白名单什么的 npm i koa2-cors
const bodyParser= require('koa-bodyparser')
const userRouter = require('./routes/user') // 让接口生效
const app = new Koa()

app.use(bodyParser())// koa无法解析post参数，这是koa一个小问题，安装npm i koa-bodyparser
app.use(cors()) // 处理跨域
// 后端路由去写接口 安装 npm i koa-router
app.use(userRouter.routes(), userRouter.allowedMethods()) 

app.listen(3000, () => {
    console.log('项目已启动在在3000端口'); 
})