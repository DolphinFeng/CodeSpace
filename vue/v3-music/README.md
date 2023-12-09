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

- 企业级vue开发框架
npm i element-plus
    npm i element-plus ps版 里面有很多组件可以用
    如何区分vue和element-plus的组件
    vue是什么开发框架：渐进式式的mvvm开发框架，提供mvvm开发模式 
    element-plus组件库 https://element-plus.org/zh-CN/ 饿了么提供了国内最顶尖的开发vue开发框架
        去找到我们想用的组件库
    
npm i -D unplugin-auto-import unplugin-vue-components 自动加载vue组件

- vite 写了一段让Element plus 自动引入的代码
- 通用组件
    /components/common
    不属于特定的页面，极高的复用性
- 图标字体库
    - 要用到那些图标
        import {} from '@icon-park/vue-next'

# NeteaseCloudMusicApi-master
ctrl + ` 打开终端
NeteaseCloudMusicApi-master>npm i
    npm run start


