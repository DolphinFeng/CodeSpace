const https = require('https');

const url = new URL('https://api.juejin.cn/interact_api/v1/message/count?aid=2608&uuid=&spider=0')

// console.log(url)


const req = https.request(
    {
        method: 'POST',
        port: 80, // 后端只有启动了服务才有端口号
        hostname: url.hostname,
        path: url.pathname + url.searchParams,  
    }, 
    res => {
        let content = ''
        res.on('data', (chunk) => {
            content += chunk
        })
        res.on('end', () => {
            console.log(content)
        })
    }
)

req.end()
