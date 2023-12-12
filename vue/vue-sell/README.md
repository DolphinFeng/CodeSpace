新建一个common文件夹用来放：公用的样式，js，
reset.css 写一个https://meyerweb.com/eric/tools/css/reset/  复制进来的重置代码
引入到main.js
还有几个页面公用的样式variable.less  其实还是css，只是写法可以样式嵌套，可以写变量
    less两大特点：1.样式嵌套  2.定义变量 
    颜色会写成变量，为何？逢年过节变色直接该变量就方便很多
    这个文件需要用上的页面就引入，不需要就不用，所以不放到main.js

http://ustbhuangyi.com/sell/ ---- 我们看这个来模仿这个项目（里面的图片不能写死，有的可以写死就写死，提高效率，就不用请求了）
头部品牌两个字也是图片 勺子那个图片不是写死的

# 项目开发流程
1. 创建一个全局的css文件，添加reset.css

# 组件化
1. import 引入
2. components 注册
3. 使用

这个项目三个轮播图，没有弄路由，共用了一个头部，我们这里改成路由，所以就三个页面
------------下面开始写，前面都是准备工作

    头部开始，公共地方写在App.vue，你会发现公共地方蛮多，我们可以写成一个组件（组件开发会非常优雅，主体结构可以很清晰）
    > components/header/Header.vue  vue文件习惯性首字母大写  
    header的图片只能是header可以用上（）
    放asset也可以，没关系


    // 两倍屏幕iPhone6（高清） 三倍屏iPhone6plus (超高清)
    // 目前全部写的Header.vue  12.11

# 父子组件通讯（vue面试必考）
1. 父组件在子组件使用处绑定属性以传值
2. 子组件用props接受父组件传递过来的属性（props中的属性用法同data数据源）
    

    axios网络请求库： https://www.axios-http.cn/docs/intro
    里面有promis   写法和fetch一样   
    npm i axios --S   --S是--save上线，生产环境----------------------------
    如果很慢，就换个包管理工具，指令：1.yarn add axios 当然也可以去换源 npm config set registry [源地址]
    查看自己的源：npm config get registry
    面试：axios特性是什么：
从浏览器创建 XMLHttpRequests
从 node.js 创建 http 请求
支持 Promise API
拦截请求和响应
转换请求和响应数据
取消请求
超时处理
查询参数序列化支持嵌套项处理
自动将请求体序列化为：
JSON (application/json)
Multipart / FormData (multipart/form-data)
URL encoded form (application/x-www-form-urlencoded)
将 HTML Form 转换成 JSON 进行请求
自动转换JSON数据
获取浏览器和 node.js 的请求进度，并提供额外的信息（速度、剩余时间）
为 node.js 设置带宽限制
兼容符合规范的 FormData 和 Blob（包括 node.js）
客户端支持防御XSRF


需要在页面一加载就发接口请求，用axios就可以

# axios
1. 当请求跨域时，vueCli允许我们配置一个代理，用于规避跨域问题
    解释：vueCli项目写完后部署到服务器后已经没用了，只是建脚手架的时候有用，去不了线上环境，所以用别的手段处理，只在开发环境下生效
    为何跨域：浏览器的安全策略，比如两个ip地址是同一范围的就是相同的域，跨域是不能访问的
    如果没有跨域：App.vue中axios.get中地址是写全的  前端写完代码的ip地址需要改成服务器的ip，如果页面很多，地址改就很麻烦，所以不这样写，很难维护，一般公司有个测试的服务器，没问题就发布，所以不会这样写。
    在src下创建一个api或者http
2. 