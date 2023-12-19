vue全家桶项目就是包含：vue-router ,vuex, element-ui
https://cangdu.org/happyfri/#/ 这是个小demo 问卷调查

一个问题：移动端适配，div尺寸进行与移动端适配
一个基础知识：vh,vw,em行的，但是也麻烦，需要宽/375，算麻烦
            rem这个相对单位，js获取用户手机屏幕，然后确定rem多少px

            移动端开发一定要做手机适配

# rem
移动端适配方案
1. rem是相对单位，相对于页面的根字体大小而改变（html根标签字体大小）
    用css媒体查询，对于安卓机，会很多情况，不优雅
    用js，当初是淘宝做出来的代码，非常牛
    https://developer.mozilla.org/zh-CN/docs/Web/API/Window/orientationchange_event

config/rem.js
assets/images/放图片


vue 接口请求 axios https://www.axios-http.cn/docs/intro

面试官：mutations和methods有什么区别
    mutations会同步执行方法，methods会异步执行方法
    mutations执行当前会阻塞