const Koa = require('koa') 

const app = new Koa() 

// 返回数据
const main = (ctx) => { // 只要被app use掉的函数 一定会有一个上下文对象这个参数
    // ctx == koa 相当于实例对象
    // 正常来说两个参数，一个请求体，一个内容，这是因为ctx合并了
    // ctx.body = { // body ：向前端反馈内容的一个属性，相当于原生js 的 end
    //     msg: 'Hello world'
    // }

    if(ctx.url.startsWith('/home')) {
        // ctx.body = 'Hello world'
        // 这是默认的，那么如何控制呢
        ctx.response.type = 'json' // 其实就是控制响应头的类型 浏览器就把它当成json加载
        ctx.body = '<h2>Hello World</h2>' // 不当成字符串，当成标签了 检查去到网络 看 响应头 Content-Type: text/html; charset=utf-8 告诉浏览器
        
        
    }else if(ctx.url.startsWith('/detail')) {
        ctx.body = 'detail'
    }else {
        ctx.body = 'Not Found' 
    }
}

app.use(main) // 相当于调用，让main生效
app.listen(3000, () => { 
    console.log('项目运行在3000端口')
})

// 访问地址 返回一个对象
// 请求多个接口怎么办，依旧写if也可以