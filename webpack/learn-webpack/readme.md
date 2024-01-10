// webpack 不是框架，就是个构建工具，就是个打包工具，给项目压缩处理，在开发中非常重要，为何项目要打包：拿note-book项目为例，前端写好后文件应该部署到云服务器，服务器的意义就是别人也能访问，公网，局域网，一个wifi下才可访问，公网全世界都可以访问，client59兆，太大了其实，需要压缩，主要是需要node_modules，伪代码，调试的代码没有意义。这些虽微不足道，但是服务器其实很贵。大企业一般都自己弄个服务器，做什么内网穿透，小公司就是租第三方，动辄一年几十万，上百万，1个G的服务器，所以需要压缩处理，这个压缩和bandzip不一样，这个打包是希望，把有用的代码挑出来，换行空格……都删掉。那种状态就可以较少服务器资源的浪费。npm run build 这个过程就是得到一个dist文件夹，里面就只有三个，index.html 多个script，一堆js，一堆css 也就说打包后就成了三个最原始的文件。因为里面用到了vant框架，可能会显得更多。这些代码密密麻麻的，机器可以执行，所以直接运行index.html就可以。但是会有跨域问题，用live server跑，但是会报css加载不到的问题，需要手动改下。理论上可以直接运行index.html，但是实际上这些资源必须当成服务资源进行返回才有效果。项目创建之初就给你提供了npm run build这是vite的打包，所以vite也是个打包，构建工具。不过目前市场用的最多的是webpack，说难很难，说简单很简单。

vue create 是 cli构建工具
webpack cli vite gulp grunt rollup都是构建工具 爱用哪个
gulp在国内用的也很多，国外rollup很火，
webpack是这些构建工具中功能最强大的，就像是java在编程语言中的地位

我们主学webpack vite  


- npm init -y
- 新建一个public文件夹
    - 新建一个index.html
- 新建一个src文件夹
    - 新建一个tools文件夹
        - 新建一个add.js
    - 新建一个main.js
 
 一定要用live server跑成一个服务
 浏览器读不懂模块化语法。es7，es8,es9这些语法浏览器还是读不懂
 浏览器更新没那么快。所以我们希望模块化可以被浏览器读懂，换个写法写模块化，第三方的webpack就可以解析成浏览器可以读懂的模块化，就是将es7,es8降级
 
一般不会需要你去手动配置webpack ，但是面试官回去问你webpack执行过程是怎样的
2，3年前就更新到了webpack5.0 
webpack源码是nodejs写的，所以内置了很多node的东西，vite也是，以后手搓一个vite
所以它只能打包js代码，动不了html，loader左膀plugin右臂 二者功能非常相似  插件功能更强大，包含关系  // https://www.webpackjs.com/concepts/#loaders
loader让它可以读懂非js的其他语言，plugin读懂代码的时候还能做其他操作
loader和plugin很难
webpack没有业务逻辑要你去写，你只要会用，会配置就好
将来会手搓一个插件
面试有三个问题，常见，但是很难
1. webpack打包构建原理
2. 开发过plugin吗 


-- webpack都是安装在开发环境下
# webpack使用
- npm i webpack webpack-cli -D -G  // -D开发环境 安装两个一个webpack webpack-cli
- 新建webpack.config.js
- webpack
    浏览器读不懂main.js，webpack生成了chunk-c162e69b116d34cd492c.js
    其实就是用了eval欺骗词法，把别人的作用域搬了过来
- npm i html-webpack-plugin -D  // 安装html 的插件
- npm install --save-dev css-loader
- npm install --save-dev style-loader
    这两个其实就是下面的
- npm install css-loader style-loader -D
- npm i mini-css-extract-plugin -D // 让css分出js
- npm i @babel/core babel-loader @babel/preset-env @babel/plugin-transform-runtime -D  // 安装babel webpack读不懂箭头函数  给js降级
- npm i vue  // 试试vue
- npm i vue-template-compiler vue-loader @vue/babel-preset-jsx -D  // 才可以读懂vue

但是webpack目前不能处理很新的es，它可以找帮手