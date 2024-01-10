const http = require('http')

const server = http.createServer((req, res) => {  // 前端的请求， 后端的相应    创建一个服务
    res.statusCode = 201
    res.setHeader('Content-Type', 'text/html')
    console.log(req.url, req.method)
    const { url } = req

    const query = Object.fromEntries(new URL(url, 'http://localhost').searchParams )  // URLSearchParams { 'id' => '123' } => { id: '123' }
    console.log(query)
    
    if (url.startsWith('/home')) {
        res.end('<h1>home page</h1>')  // 向前端输出
    } else if (url.startsWith('/detail')) {
        res.end('<h1>detail page</h1>')
    } else {
        res.end('<h1>not found</h1>')
    }

})

server.listen(3000, () => {  // 监听信息
    console.log('listening on port 3000')
})