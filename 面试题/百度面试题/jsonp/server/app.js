const Koa = require('koa')
const app = new Koa()

const main = (ctx, next) => {
    console.log(ctx.query); // [Object: null prototype] { cb: 'callback' }
    const cb = ctx.query.cb

    const data = '给前端的数据'

    const str = `${cb}('${data}')` // callback('给前端的数据') 相当于去调用这个函数，但是此时callback还是个字符串

    ctx.body = str
}

app.use(main)
app.listen(3000, () => {
    console.log('listening on port 3000');
})