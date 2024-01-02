const http = require('http') // 后端启动一个一直运行的服务，提供接口给前面请求
// 接口不是自己创建的，走哪个逻辑就是哪个接口
// 一个项目一个100页面，if else会很多，每个页面其实会有很多接口，所以不用原生node，我们用第三方node框架，不需要if-else判断

const server = http.createServer((req, res) => { // (请求体，响应体)
    // res.end('Welcome to the node server') // end负责向前端相应内容
    // 提供不同的接口地址
    if(req.url.startsWith('/home')) {
        res.end('Welcome to the home page')  
    }else if(req.url.startsWith('/detail')) {
        res.end('Welcome to the detail page')
    }else {
        res.end('Not Found')
    }
})

server.listen(3000, () => { // 3000端口
    console.log('server listening on 3000')
})

//http://localhost:3000/   然后去浏览器访问，可以看到Not Found  正常来说是数据