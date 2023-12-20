// 前端路由包含vue-router
# 路由
路由最早来自服务器，当你想要从服务器中读取某个盘的文件，这个文件的路径就是路由---也就是服务端用来描述路径的
url和文件的映射关系
后来因为前端的SPA单页应用---前端借鉴路由的称呼来描述url和组件的映射关系 router/index.js中 path对应一个component


# 要实现一个前端路由，需要解决的问题
1. 如何修改url还不引起页面的刷新
    1. url后/#再接东西都不引起刷新，并且url也变了，但是得知道url的变化再去渲染其他代码片段
2. 如何知道url变化了

上面两个问题可以解决就代表解决路由

## 修改地址栏
1. a标签
2. 浏览器前进后退
2. window.location

以前方式导致url变更都会触发hashchange事件

# hash
// 哈希是一个值，按照某种规则生成的一串值，用来代表一个唯一的文件，文件名后加个哈希值，可以看到文件是否被修改过
// 浏览器url中有hash这个概念，url中接一个#，#后的值就是哈希值
// 按道理url变了，页面一定刷新，但是哈希是个特例，放个哈希值就是不会刷新页面
在浏览器url后拼接 #xxx 会被认为是hash值，而hash值的变更是不会引起浏览器页面的刷新
1. 哈希模式实现路由

hash.html手搓一个路由效果
router框架核心功能这么简单？

history和Hash模式本质没啥区别，但是hash多了个#，丑了点所以用的少

# history 
https://developer.mozilla.org/zh-CN/docs/Web/API/History
pushState() 方法改变url地址栏 靠popstate监听这个事件 这两个方法刚好可以实现前端路由的逻辑
浏览器前进后退会触发popstate
浏览器之所以可以返回页面也因为他有个 会话历史栈 维护访问路径
history 提供了一个pushState方法， 可以修改url且不引起页面刷新，提供了popState事件，仅当浏览器前进后退时生效