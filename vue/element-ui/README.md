# element-ui

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

----------------------------------------------------------------

# cli脚手架

安装：

任意终端输入指令：npm i -g @vue/cli

vue --version可以看到版本号就代表安装成功

选中第三个Manual



----------------------------------------------------------------

.browserslistrc  这个文件是浏览器版本，兼容性问题。可要可不要

.gitignore cli这个脚手架帮你把module过滤了

babel.config 这里可以配置需要什么不需要什么

jsconfig cli中配置文件，es6文件最终会被转成es5  相当于项目说明书
    敲了@一定就是src下的文件

package-lock 记录

vue.config vue配置

less标签的语法是嵌套的



环境分为：开发环境，生产环境
npm install element-plus --save
--save是生产环境： 能带来生产力

 <el-button type="primary">Primary</el-button>能用就代表导入成功

 # 路由传参
 1. this.$router.push(`/home/${this.account}`) 
 需要在路由配置中声明该路径可以携带参数：'/home/:user'

 2. this.$router.push({path: '/home', query: {user: this.account}}) 
 它会讲参数以？的形式拼接在url中

 3. this.$router.push({name: 'home', params: {user: this.account}})
 需要在路由中配置中声明该路径可以携带参数'/home/:user'

 4.  this.$router.push({path: '/home', hash: `#${this.account}`}) 
 参数前面会多一个# 

 第二个用的最多，不需要在？后声明声明东西

 可以尝试放一个菜单，然后把路由传参搞明白，这个非常重要