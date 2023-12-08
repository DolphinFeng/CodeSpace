# vue 网易云
    安装过程：
    codespace>vue> npm init vite
    v3-music
    Vue
    JavaScript
    v3-music> npm i
    npm run dev

- 界面
    npm init vite 开发脚手架
    :5173端口
- 后台
    netsea
    :3000端口
- 前后端分离的全栈开发
- tailwindcss 
    提供60% 的 css开发 原子化css开发
>npm config set registry https://registry.npmmirror.com  // npm 换源 让我们安装变快
>npm i -D tailwindcss postcss autoprefixer 
    devDependencies 是开发阶段的依赖 不需要打包 
    dependencies 上线时的依赖 需要打包
    npm i -D 只在开发阶段用到的依赖 在devDependencies中

>npx tailwindcss init -p // 初始化  运行后多了tailwind.config和postcss.config文件
    npx：用于执行安装或未安装的包
- 声明开发目录下所有层级之中，vue等格式文件支持tailwindcss
- tailwind.css 用了上面那几个命令之后就可以使用tailwind类名

- 切页面
- 组件化思维
    - 根组件：App.vue
    - layout组件 负责结构
        -menu
- vite.config.js 是 vite 工程化的配置文件
    - alias 短路径
        @ -> ./src

# NeteaseCloudMusicApi-master
ctrl + `
NeteaseCloudMusicApi-master>npm i
    npm run start
