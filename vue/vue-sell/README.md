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

这个项目三个轮播图，没有弄路由，共用了一个头部，我们这里改成路由
------------下面开始写，前面都是准备工作

    头部开始，公共地方写在App.vue，你会发现公共地方蛮多，我们可以写成一个组件（组件开发会非常优雅，主体结构可以很清晰）
    > components/header/Header.vue  vue文件习惯性首字母大写  
    header的图片只能是header可以用上（）
    放asset也可以，没关系


    // 两倍屏幕iPhone6（高清） 三倍屏iPhone6plus (超高清)
    // 目前全部写的Header.vue  12.11


    