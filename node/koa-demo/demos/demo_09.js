const Koa = require('koa')
const app = new Koa()

const main = (ctx) => {
    const n = Number(ctx.cookies.get('view') || 0) + 1
    ctx.cookies.set('view', n) // key: niew value: 1
    ctx.body = n + 'view' // cookie是后端返回给你的令牌，证明你的身份，浏览器本地中会保存一个cookie,保存身份凭证
    // cookie虽然是浏览器的功能，但是是后端控制的
}

app.use(main)
app.listen(3000, () => {
    console.log('项目运行在3000端口')
})