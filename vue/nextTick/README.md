# nextTick
// 这个方法很特殊，dom更新后去执行   某些场景必须用它
1. 在DOM更新后执行回调，起到了等待dom渲染完成的作用
2. 异步 微任务  // vue2.0 微任务  2.2 宏任务  2.6 宏  历程辗转反侧
3. 页面渲染完成后执行