const https = require('https')

// https.get('https://api.juejin.cn/interact_api/v1/message/count?aid=2608&uuid=&spider=0', (res) => {
//     let content  = ''

//     res.on('data', (chunk) => {
//         content += chunk
//     })
    
//     res.on('end', () => {
//         console.log(content)
//     })
// })

const req = https.get('https://api.juejin.cn/interact_api/v1/message/count?aid=2608&uuid=&spider=0', {
    headers: {
        'Content-Type': 'application/json'
    }
})

req.on('response', res => {
    let content = ''

    res.on('data', (chunk) => {
        content += chunk
    })

    res.on('end', () => {
        console.log(content)
    })
}) 

