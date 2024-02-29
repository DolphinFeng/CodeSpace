const Koa = require('koa')
const fs = require('fs')
const app = new Koa()
const path = require('path')

function rewriteImport(content) {
    return content.replace(/ from ['|"]([^'"]+)['}"]/g, function(s0, s1) {
        // console.log(s0, s1);
        if (s1[0] !== '.' && s1[1] !== '/') {
            // 字符串不是.开头且第二个字符不是/就要到node_module中去
            return `from /@modules/${s1}`
        } else {
            return s0
        }
    })
    // 百度会有几道正则题
    // g的意思是 默认正则碰到换行就结束 g代表全局匹配 不停下来  默认\n换行终止
    // from 的意思是 找 根据符号匹配
    // [] 中括号表示这个范围中的一个东西，表示仅匹配一个
    // '|" 匹配单引号或者双引号  因为url是个字符串 有可能单引号也有可能双引号
    // () 优先级更高 分了一个组
    // ^用在（）或[]表示取反，放在最前面表示
    
}

//  / 是后端入口
//  app.use 是 中间件 middleware 洋葱模型 从上到下 再从下到上
app.use(async ctx => {
    // ctx由请求体 + 响应体 组成
    const { require:{url, query} } = ctx
    // 这个代码比较高级，从ctx中解构到请求体，并且使用es6高级解构功能，url地址 query参数
    if (url === '/') {
        ctx.type = "text/html"  // 设置响应头
        let content = fs.readFileSync('./index.html', 'utf8')  // 同步读取，node强大的是异步无阻塞能力，优势在于简单性能高
        // 同步把根目录读到这里来
        ctx.body = content
    } else if (url.endsWith('.js')) {
        // resolve 生成有效的物理路径
        console.log(__dirname, url.slice(1));
        const p = path.resolve(__dirname, url.slice(1))
        ctx.type = 'application/javascript'  // js的响应头 
        const content = fs.readFileSync(p, 'utf-8')
        ctx.body = rewriteImport(content)  // 向外输出的js文件，需要交给功能函数   -----字节考点
    }
})
app.listen(5173, () => {
    console.log('手写vite');
})