// 和用户相关的接口
const router = require('koa-router')() // 直接调用
const jwt = require('../utils/jwt.js')

// 定义一个post请求的接口
router.post('/login', (ctx) => {
    let user = ctx.request.body // 拿到前端的参数
    // console.log(user);
    // 到数据中查看是否存在一致的username, password
    // 拿到就返回一个登录成功
    if (1) { // 模拟验证成功
        // 创建一个token
        let jwtToken = jwt.sign({id: '1', username: user.username, admin: true}) // admin: true意思是管理员的token，权限
        console.log(jwtToken); // 已经加密好了
        ctx.body = {
            code: 0,
            data: `你好${user.username}`,
            token: jwtToken
        }
    } else { // 数据库中没有这个账号
         ctx.body = {
            code: 1,
            data: '账号后密码错误'
         }
    }
})

// 首页的接口 校验前端在请求头当中携带过来的token是否有效
// 但是会鉴权失败，没有传token过来，就是在login直接改url到home
router.post('/home', jwt.verify(), (ctx) => { // 请求这个地址时，校验失败就不走回调
    ctx.body = {
        code: 0,
        data: '这是首页的数据'
    }
})

module.exports = router 