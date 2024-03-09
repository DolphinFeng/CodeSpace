// 封装一个可用于创建token的函数
const jwt = require('jsonwebtoken') // npm i jsonwebtoken

function sign (option) { // 生成token
    // jwt.sign({ foo: 'bar' }, privateKey, { algorithm: 'RS256' }, function(err, token) {
    //     console.log(token);
    //   });
    return jwt.sign(option, '666', { // 第二个参数为加盐，666放到了账号中去
        expiresIn: 60 // token的有效时长 s
    }) 
}

const verify = () => (ctx, next) => { // 校验token是否有效
    let jwtToken = ctx.req.headers.authorization // 前端传过来的authorization需要小写
    if (jwtToken) {
        // 校验
        // jwt.verify(token, 'shhhhh', function(err, decoded) {
        //     console.log(decoded.foo) // bar
        //   });  
        jwt.verify(jwtToken, '666', (err, decoded) => {
            if (err) { // 前端传过来的token有问题
                ctx.body = {
                    status: 401, // 没有权限
                    message: 'token失效'
                }
            } else {
                // 校验成功
                next() // 放行
            }   
        })      
    } else {
        ctx.body = {
            status: 401, 
            message: '请提供token'
        }
    }
}

module.exports = {
    sign,
    verify
}
