const Koa = require('koa')
const Router = require('@koa/router')
const router = new Router()
const fs = require('fs') 
const app = new Koa() 

const logger = (ctx, next) => { // 日志
    console.log(`${ctx.url} - ${ctx.method} - ${Date.now()}`)
    next()
}

const main = (ctx) => {
    ctx.body = '首页页面'
}
const about = (ctx) => {
    ctx.body = '关于页面'
} 

// main about不可能同时触发，所以不用next
router.get('/main', main)
router.get('/about', about)

app.use(logger)

app.use(router.routes()) 
app.use(router.allowedMethods({})) 


app.listen(3000, () => { 
    console.log('项目运行在3000端口')
})
// 后端需要有一个日志，就需要知道前端请求的记录