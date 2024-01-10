const http = require('http');
const fs = require('fs')

const server = http.createServer((req, res) => {
    // res.setHeader('Content-Type', 'application/json', 'charset=utf8')

    if (req.url.startsWith('/movie')) {
        const data = fs.readFileSync('./data.json', 'utf8')
        res.end(data)
    }
})

server.listen(3000, () => {
    console.log('listening on 3000 port')
})