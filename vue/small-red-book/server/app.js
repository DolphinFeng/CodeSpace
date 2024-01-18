const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')

// 告诉浏览器不要同源策略
const cors = require('koa2-cors')

const user = require('./routes/user.js') 

// 主要逻辑
app.use(cors())
app.use(bodyParser())
app.use(user.routes(), user.allowedMethods())

app.listen(3000, () => {  // 启动服务
    console.log('listening on 3000')
})


