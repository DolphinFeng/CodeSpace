const Router = require('@koa/router')
const router = new Router()
const { userLogin } = require('../controllers/mysqlControl.js')

// 定义接口
router.post('/login', async (ctx) => {  // 登录接口通常做成post请求 get post本质没有区别  post参数不受限制，get受限
    // 获取到前端传递的账号和密码，去数据库中校验账号密码的正确性
    const { username, password } = ctx.request.body // 前端参数放在请求体中  解构写法
    try {
        const result = await userLogin(username, password)
        // console.log(result)
        if (result.length) { // 账号密码存在
            let data = {
                id: result[0].id,
                nickname: result[0].nickname,
                username: result[0].username
            }
            ctx.body = {
                code: '8000', // 非状态码
                data: data,
                msg: '登录成功'
            }
        } else { // 错误：网络请求没走通； 这里else就考虑不到
            ctx.body = {
                code: '8004', 
                data: 'error',
                msg: '账号或密码错误'
            }
        }
    } catch (error) {
        ctx.body = {
            code: '8005', 
            data: error,
            msg: '服务器异常'
        }
    }
    // console.log(username, password)
    // ctx.body = 'login successfully'
    // koa 写后端，无法解析post请求  要安装npm i koa-bodyparser

})

// 定义注册接口
router.post('/register', async (ctx) => {
    // 拿到前端传过来的username, password, nickname
    // 在数据库中校验账号是否存在 这里只让username唯一
    // 如果不存在，就植入数据库一条新的数据
    
})

module.exports = router // common.js规范  这是node  