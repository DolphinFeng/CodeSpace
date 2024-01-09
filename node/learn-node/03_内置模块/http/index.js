const http = require('http')

const server = http.createServer((req, res) => {  // 前端的请求， 后端的相应    创建一个服务
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Hello World</h1>')
})

server.listen(3000, () => {
    console.log('listening on port 3000')
})