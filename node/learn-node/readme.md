# 小知识 一些准备工作
nest.js是node的企业级框架，还有koa,espress
next.js是react框架 
nust是vue的框架

npm是node包管理工具 node package management // 不需要我们安装，有了node就会有npm npm镜像npm config get registry
小知识：有时候需要换回官方的源，换来换去很麻烦 npm i -g yrm --registry=https://registry.npmmirror.com
    yrm也是个管理工具，他是来管理源的
    yrm ls  // list 可以看到目前全球的源哪些可用，这样就不用找了 换源：yrm use name    // 华为https://mirrors.huaweicloud.com/repository/npm
    不过里面没有华为的源，我可以自己往里面添加 // yrm add huawei url
    之后 直接 yrm use huawei 即可
以后装包就可以秒切换源了   

node也有事件循环机制，和浏览器不同不过

node有几种运行环境
- 解析器环境 在终端中进行交互 // repl环境 read eval print loop 翻译过来就是解析器
    command : node
        直接开创一个node运行环境
        类似浏览器的控制台
    - 写多行代码怎么办
        command : .editor
- 命令行执行 代码写在文件里 指定脚本运行
    node index.js  
- #! 告诉系统需要哪个解析器来执行这个文件
    #! /usr/bin/env node在index.js文件开头输入这个
    chmod u+x ./index.js // 让文件可以自动执行
    ./index.js  就可以运行了 不用指名node了，因为已经指名好了用node运行

# 打断点
vscode有这个功能，点击代码左边的红点  可以用node.js查看变量 也可以用终端运行查看

像vue一样运行js   自行新建一个package.json文件，必须双引号  然后dev 右边是运行环境 和文件
{
    "scripts": {
        "dev": "node index2.js"
    }
}

# 模块化
js也有模块化的概念 一般说js就是指定的浏览器环境  js模块化就是es6的import export 
以前没有模块化语法: 页面所有js全部写在一个js中
对比下window和node 模块化语法 这个非常重要
- window
ESModule ECMAScript
以前是没有办法让add放到main中的
es6才提供了这个语法的
export || export default 抛出  import 引入
- node
node诞生之初就已经解决了js没有模块化这个问题
而ECMA这个标准还没诞生，因此没有遵从这个标准，另一个标准 COMMON.js
    - module.exports 和 require  module.exports抛出的是一个对象
    - 也可以exports 抛出对象， 抛出的时候给自己增加一个属性
    module.exports || exports 抛出 require 引入
    前者可控，可以抛出一个属性，也可抛出一个对象，后者一定是对象

后来node无奈，也可以遵从window标准
{
    "type": "module"
}

引入多个方法怎么办？{ hello, bye } 这也是es6模块化语句

    - node现在也兼容ecma标准
有的项目node里面会有两种规范 如何统一
esmodule=> commonjs  
安装一个小插件  // https://www.npmjs.com/package/tsup  npm i -g tsup
这样可以把esmodules转换成commonjs
用法：在node2/index.js 终端 tsup ./index.js  // 前提需要安装ts插件  tsc --version  npm i -g typescript
就会多一个 dist文件夹 cjs 就是commonjs规范

# 看官方文档学习node内置模块
https://nodejs.cn/api/v18/
- global 就相当于 window  __filename, __dirname, process
js官方定义的this其实就是globalThis 就是指向的window
内置模块你需要掌握7， 8个，才能支撑你的简单后端开发


---------------------------------------------------
前端： 安卓，ios，web
后端：需要跟服务器打交道，
JavaScript不能做后端开发，他没有方法可以介入操作系统对文件资源增删改。
16年时，因为出现了node这个环境，他把js提升到了天花板级别，js可以做后端开发，因为node本质是用c/c++开发的
node赋予了js后端能力，node不是一门语言，他只是代码的解析器，node就是一个浏览器的执行引擎
node可以对js解析，解析成可以操作得了服务端的代码，node封装了很多模块，js代码可以调动node模块
node是由c打造的，node不是一门语言，他没有数据结构。

12.25    03 path
https://nodejs.cn/api/path.html  path有很多方法
// code runner插件 