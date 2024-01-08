const Router = require('@koa/router')
const router = new Router()
const { userLogin, userFind, userRegister } = require('../controllers/mysqlControl.js')

// 定义接口
router.post('/login', async (ctx) => {  // 登录接口通常做成post请求 get post本质没有区别  post参数不受限制，get受限
    // 用post安全，密码不会出现在url中   get请求挂在url中， post挂在body请求体中
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
    const { username, password, nickname } = ctx.request.body
    // 校验是否为空，但是vant框架已经给你解决了，其实这本来就是前端的工作，但是一般后端也还会做，双重保险
    if (!username || !password || !nickname) {
        ctx.body = {
            code: '8001',
            msg: '账号密码或昵称不能为空'
        }
        return // 有return就不用else了
    }
    // 检测数据库中是否存在username
    try {
        const findRes = await userFind(username) // 查询一定是异步
        console.log(findRes) // postman调试
        if (findRes.length) {  // 账号已存在
            ctx.body = {
                code: '8003',
                data: 'error',
                msg: '账号已经存在'
            }
            return 
        }
    
        // 植入
        const registerRes = await userRegister([username, password, nickname]) 
        console.log(registerRes)
        if (registerRes.affectedRows !== 0) {
            ctx.body = {
                code: '8000',
                data: 'success',
                msg: '注册成功'
            }
        } else {
            ctx.body = {
                code: '8004',
                data: 'error',
                msg: '注册失败'
            }
        }
    } catch (error) {
        ctx.body = {
            code: '8005',
            data: error, // 后端程序性错误
            msg: '服务器异常'
        }
    }
})

module.exports = router // common.js规范  这是node  