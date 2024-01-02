const Koa = require('koa')
const Router = require('@koa/router') // 引入刚才安装的路由 
const router = new Router()
const fs = require('fs') 
const app = new Koa() 

// if-else也是靠路由，但是不是一个东西
// 哪个url生效，走哪个接口
const main = (ctx) => {
    ctx.body = '首页页面'
}
const about = (ctx) => {
    ctx.body = '关于页面'
} 

router.get('/main', main) // 第一个参数命中才走第二个参数
router.get('/about', about)

app.use(router.routes()) // 所有配置的路由都生效
app.use(router.allowedMethods({})) // 允许所有的方法都生效，get,post,fetch等等

app.listen(3000, () => { 
    console.log('项目运行在3000端口')
})
