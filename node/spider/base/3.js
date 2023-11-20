// npm库

// 验证码，那个东西作用就是，防止机器人，电脑中毒了，脚本疯狂注册账号，人家数据库会崩掉的
// ai,会淘汰很多码农，而不是工程师
// node封装一个验证码，可以所有项目通用，独立的功能，造轮子
// 没有项目可以全靠轮子运行，你得自己改

// npm init 
// 直接回车，当前版本号
// 项目入口，index.js默认  不管项目多大，都可以靠一个文件运行，真正开发，肯定多个文件，按功能，模块分类，比如防抖啊啥的，进行文件封装，最后项目跑起来时，import到这里，node只运行这个文件
// git respository 上传哪个仓库
// keyword   将来可以在git中搜这个
// license 认证：如果是商业项目，就要写
// 之后多了个package.json，里面是回答
// https://www.npmjs.com/ 仓库汇总到这里
// 靠百度搜node中哪些包，给到keyword然后去node网站

// npm i glob进行安装 node仓库服务器在国外，国内没有墙到这个东西，所以是开放的，但是因为海外地址，还是有点慢
// 这个时候npm 换源  
// npm config get registry
// https://registry.npmjs.org/ 读取这个node仓库的源地址 
// 淘宝，清华，华为的源：每天去国外复制一份node仓库  淘宝：npm config set registry https://registry.npm.taobao.org  华为：npm config set registry https://mirrors.huaweicloud.com/repository/npm
// 清华：
// 然后npm config get registry 再 npm i glob   
// 源码在glob
// 依赖modole

// const glob = require('glob')导入

// 实在下不下来  npm i yarn -g  这个指令   yarn是另一个包管理工具