# 项目如何上线
https://www.bilibili.com/video/BV1aV411n7SH/?buvid=XU44988405F5F400941CC592FE59A57D34C39&from_spmid=main.my-history.0.0&is_story_h5=false&mid=bQ1H1eZoymt3i5NHWQTTmw%3D%3D&p=1&plat_id=114&share_from=ugc&share_medium=android&share_plat=android&share_session_id=5d74dd34-9268-4655-9433-a6c5bbbdda02&share_source=WEIXIN&share_tag=s_i&spmid=united.player-video-detail.0.0&timestamp=1705147743&unique_k=oE1cQ6f&up_id=1503877955&share_times=1
1. npm run build
    项目是分阶段的：开发阶段、测试阶段、上线阶段
    浏览器只能执行js，css，需要把代码编译成最终的文件
    dist目录就是我们的上线目录
    打包工具，比如vite负责打包
        - dist目录下面，会有将开发目录中index.html拷贝过来，首页需要的所有资源，vue，router,pinia，css，app.vue，home.vue……
          根据依赖顺序，打包成index.js文件，首页就能运行了
        - 其他路由页面，使用了路由懒加载，他们用到的资源会打包成为另外的js文件
        - 首页只需要加载index.js，index.html，以最快的速度打开，当路由切换的时候，异步加载相应的js，css文件，这就是首屏加载特别快，这就是懒加载的贡献
        - dist目录下的文件都是静态资源，可以单独上线，前后端分离，单端具有单独上线的能力，docker单独打包，前端可以做运维的事情，静态资源相对于后端而言，只要交给nginx，这是web服务器，就能上线，nginx是高性能服务器，按道理最后可以live server运行index.html，但是地址会借助于live server之外的东西来跑
2. 服务器准备 https://ecs.console.aliyun.com/home#/
    - 购买一台服务器 获得公网ip  操作系统用的是centos 7.1
    - 安装xshell连接 xshell可以让我们远程访问服务器
        账号密码就是购买服务器的时候用的账号密码，xshell可以让你使用linux进行交互
    - xshell和宝塔建立联系，这样可以让linux命令更简单，降低使用难度，可视化的安装，测试服务器，根据宝塔给的centos安装脚本，在服务器上运行获得宝塔远程操作地址
    - 通过宝塔的文件上传功能，将dist目录下的静态资源上传到，www/wwwroot/http目录下
    - nginx服务器启动了，切换路由的时候可以刷新页面，可以进行一个路由重定向
        location / {
        try_files $uri $uri/ @router;
        index index.html;
        }
        
        location @router {
        rewrite ^.*$ /index.html last;
        }
    - 启动后端
3. 后端代码 - 动态代码，需要动态执行取数据等操作
    - 把整个node后端文件夹进行压缩，前端放到http目录下
    - 安装pm2，这是个node进程管理工具 index.js 太脆弱，服务器情况复杂，出了错误，node进程就会挂掉，单线程就会只会直接挂掉，整个网站都不能提供服务
    - pm2可以帮助我们管理node进程，pm2启动的进程，如果挂了，pm2会自动重启
    - 如何解决跨域，koa的cors2服务器端跨域解决方案的中间件，允许谁来跨域访问
    - nginx默认的端口号是80端口，http://47.243.60.20/ === http://47.243.60.20:80
        ip地址对应了网络上的一台主机，端口号对应一台主机上的一个服务，为何还要启动一个服务，因为浏览器有很多服务，这里只需要一个网络服务，http对应http服务，邮件对应邮件服务。80端口是默认的web服务端口，nginx默认指向80
    - mysql的安装和数据的迁移
    下一步方向：买域名，http -> https