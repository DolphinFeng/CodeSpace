// 用户手机屏幕多宽，rem就跟着变
(function(doc, win) {
    // 为何自执行函数：防止在main.js与其他函数冲突，源码不干扰其他js文件,与作用域相关
    var docEL = doc.documentElement // 获取html标签，里面东西也读取到了
    var resizeEvt = 'orientationChange' in window ? 'orientationChange' : 'resize'  // 用户横屏问题
    var recalc = function() {
        var clientWidth = docEL.clientWidth // window用innerWidth  读取设备宽度
        if(!clientWidth)  return 
        docEL.style.fontSize = 20 * ( clientWidth / 320 ) + 'px'// iphone-5宽320 
    }

    win.addEventListener(resizeEvt, recalc) // 设备尺寸变更实时重置根字体
    doc.addEventListener('DOMContentLoaded', recalc) // 页面dom渲染完毕就执行函数
})(document, window) // document 代表整个文档，window代表浏览器