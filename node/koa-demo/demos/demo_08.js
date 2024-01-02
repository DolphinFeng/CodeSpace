const Koa = require('koa')
const app = new Koa()

// 集中处理错误
const handle = async(ctx, next) => {
    try {
        // 执行try逻辑，走不动，则走catch
        await next()
    } catch (error) {
        console.log(error, '//////////')
        ctx.response.status = error || 500
        // ctx.body = {
        //     message: error
        // }
        ctx.response.type = 'html'
        ctx.body = '<p>页面找不到了,请稍后</p>'
    }
}
// 报错也属于异步
const main = (ctx) => {
    // ctx.body = 'Hello world'
    throw(500)
}
app.use(handle)
app.use(main)
app.listen(3000, () => {
    console.log('项目运行在3000端口')
})