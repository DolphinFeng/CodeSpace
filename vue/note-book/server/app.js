const Koa = require('koa');
const app = new Koa() 
const bodyParser = require('koa-bodyparser') // 让koa能够解析post参数
const cors = require('koa2-cors') // 解决跨域

const user = require('./routes/user.js')  // 抛出的是router，这里赋值给user变量

app.use(cors()) // 告诉浏览器不需要跨域
app.use(bodyParser())  // 先解析参数才能让路由生效，所以写在前面
// 主要逻辑：
// const main = (ctx) => {
//     ctx.body = 'hello world'
//     if(ctx.url === '/login') {
//         ctx.body = '登录成功'
//     }else if(ctx.url === '/register') {
//         ctx.body = '注册成功'
//     }
// }
app.use(user.routes(), user.allowedMethods())  // 必须.routes()调用  允许所有请求方式

app.listen(3000, () => {  // listen: 运行
    console.log('项目已启动')
})