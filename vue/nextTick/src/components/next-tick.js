// 手搓nextTick
export function myNextTick (fn) {
    // 让fn()的调用在dom更新完成后执行  
    let app = document.getElementById('app')
    // console.log(app)
    var observerOptions = {
        childList: true, // 观察目标子节点的变化，是否有添加或者删除
        attributes: true, // 观察属性变动
        subtree: true, // 观察后代节点，默认为 false
    };
    // 创建一个dom监听器
    let observer = new MutationObserver((el) => {  // mutationObserver是异步微任务
        // 当被监听的dom更新完成时，该回调会触发
        console.log(el)
        fn()
    })
    observer.observe(app, observerOptions); // 监听某个dom节点以及子节点
}