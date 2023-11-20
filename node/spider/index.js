// node自带模块就是那个网站中https://nodejs.cn/api/console.html#consolelogdata-args
const { log } = require('console')
const https = require('https')
const cheerio = require('cheerio')
const fs = require('fs')
// 有些网站不能爬，传统页面可以爬
https.get('https://movie.douban.com/top250', (res) => {
    let html = ''
    // console.log(res)
    // 数据过长，这个data会反复请求，下面的consolelog执行了n遍
    res.on('data', (chunk) => {
        // console.log(chunk)
        // 16进制的数据，node默认16进制的数据
        // 我们要对象，数组，字符串
        // console.log(chunk + '')
        // 这就是网页源代码，任何数据 + 字符串都是字符串
        // js动态生成，得去服务器上爬，比如掘金文章内容
        html += chunk
    })
    // 读取数据的时候触发on
    // 监听结束,end触发代表源代码获取完毕
    res.on('end', () => {
        // console.log(html)
        // 获取详细信息 document.get  node没有这些方法,去npm https://www.npmjs.com/package/cheerio轮子 相当于jquery
        const $ = cheerio.load(html)
        const result = []
        $('li .item').each(function () {
            const title = $('.info .title', this).text()
            const star = $('.info .bd .rating_num', this).text()
            const pic = $('.pic img', this).attr('src')
            result.push(
                {
                    title,
                    star,
                    pic
                }
            )
        })
        // console.log(result)
        fs.writeFile('./list.json', JSON.stringify(result), (err, data) => {
            if(err){
                throw err
            }
            console.log('文件写入成功')
        })
    })  
    
})
// res是所有的内容,