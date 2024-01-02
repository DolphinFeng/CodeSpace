const Koa = require('koa') 
const fs = require('fs') // 读取文件
const app = new Koa() 

const main = (ctx) => {
    
    // 返回data.json数据给前端
    if(ctx.url.startsWith('/user')) {
        // 其实不会用if-else来满足条件
        // 接下来读取文件
        const data = fs.readFileSync('./data.json', 'utf8')
        // console.log(data);
        ctx.body = data
    }else if (ctx.url.startsWith('/home')) {
        // ctx.response.type = 'json' // 就是application/json
        const page = fs.readFileSync('./template.html', 'utf8')
        ctx.body = page // 浏览器拿到的响应体如果是html代码，他会去加载它
    }
}

app.use(main) 
app.listen(3000, () => { 
    console.log('项目运行在3000端口')
})

// 10年以前项目开发就是这样 前后端不分离，开发方式没有错，只是效率低，前端就太简单了，逻辑全给到后端
// 前后端分离，前端逻辑就和后端各占一半
