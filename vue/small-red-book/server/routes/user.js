// 与账号相关
const Router = require('@koa/router');
const router = new Router()
const { userLogin, userCheck, userRegister } = require('../controllers/mysqlControl.js')

// 定义登录接口
router.post('/login', async (ctx) => {  // 登录接口通常做成post请求 
    // 获取到前端传递到的账号和密码，去数据库校验账号密码
    const { username, password } = ctx.request.body
    // koa无法处理post传递过来的数据，需要安装koa-bodyparser app.js去注册使用
    // console.log(username, password)
    try {
        const result = await userLogin(username, password)  // resolve(rows)
        if (result.length) {  // 数据库存在这个账号
            let data = {
                id: result[0].id,
                nickname: result[0].nickname,
                username: result[0].username,
            }
            ctx.body = {
                code: '8000',
                data: data,
                msg: '登陆成功'
            }
        } else {
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

    // ctx.body = 'login success'
})

// 定义注册接口
router.post('/register', async (ctx) => {
    // 存在不注册，校验
    const { username, password, nickname } = ctx.request.body
    if (!username || !password || !nickname) {
        ctx.body = {
            code: '8001',
            msg: '账号密码或昵称不能为空'
        }
        return
    }
    const checkRes = await userCheck(username)
    console.log(checkRes)
    if (checkRes.length) { // 账号已存在
        ctx.body = {
            code: '8003',
            data: 'error',
            msg: '账号已存在'
        }
    }
    // 植入
    try {
        const registerRes = await userRegister([username, password, nickname])
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
        ctx.boby = {
            code: '8005',
            data: error,
            msg: '服务器异常'
        }
    }
})

module.exports = router
