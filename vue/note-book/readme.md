# 前后端准备工作
1. 移动端适配 // 之前是rem    // https://www.npmjs.com/package/amfe-flexible  // yarn add amfe-flexible
2. 常见标签样式初始化  reset.css  // https://meyerweb.com/eric/tools/css/reset/
3. 用一个移动端的UI框架 // vue的UI框架 https://vant-contrib.gitee.io/vant/#/zh-CN  vant4适用于vue3 vant3适用于vue2
    这个框架打造的公司是有赞 ，技术很强，但是没有饿了么有名
    - vant还可以写小程序  公司写小程序都是用vue，不是原生js
    安装： yarn add vant
    引入路由：yarn add vue-router@4
    安装less：
    按道理先进首页，之前判断是否登录
    数据库中先写死一个账号，脏数据用来测试
4. 配置路由接口 routes/user.js
5. 创建mysql配置文件  config/index.js
6. 做mysql连接 controllers/mysqlControl.js
7. 封装了登录sql函数，函数拿到业务逻辑中使用


# server
1. navicat 连接 mysql
2. 创建一个 名为 notebook 的库
3. 在notebook上右键导入到sql文件 运行sql文件


# 后端
初始化：npm init -y  // -y 代表后面的问题一路回车  
npm i koa  // 后端喜欢用npm
npm i @koa/router  安装koa路由 (像配路由一样，把if逻辑分出来写)// 后端难在优化
npm i koa-bodyparser 安装这个就可以让koa解析post请求
npm i mysql  // 让node连接数据库
后端目录结构：
- 控制层
- 路由层 
- 服务层

# 前端
4. aios 封装  // yarn add axios 
    请求拦截，相应拦截 // axios可以请求发送中途拦截，做一些自定义的操作，后端相应回来也有拦截，这个拦截很常见
    判断状态码是不是200，不是200就是报错，这样就可以做一个错误弹窗，统一处理异常

# 跨域问题
- 浏览器的同源策略
一个接口地址包含：
http://127.0.0.1:3000/login
协议   域名      端口 url
https:协议
127.0.0.1域名 
3000端口
这三者前后端全部相同才是同源，有一个不同就不同源
解决: 后端可以告诉浏览器同源策略不生效  // 前端没有解决办法  除非iframe，嵌套网址，这种很少见
1. cors   // npm i koa2-cors 安装


local storage 可以永久存
session storage 会话在，存储就在，会话就是窗口

前端没有安全性可言 ， 想要安全必须是后端返回的一个加密的哈希值

路由守卫一般不会去判断登录是否成功: 不安全，用户可能给你session塞东西
一般用于展现标题

