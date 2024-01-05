// 模块化
// vuex 是状态管理的设计模式  数据管理： 读都可以读，但是写只能自己写 actions(api) -> mutation(回溯，有记录) 
// 因为难以理解，逐渐被pinia取代

const _products = [   // 变量前面一个下划线，表示私有，只在本模块中使用，不会向外输出，const 不改类型就可以
    { 'id': 1, 'title': 'iPad 4 Mini', 'price': 500.01, 'inventory': 2 },
    { 'id': 2, 'title': 'H&M T-Shirt White', 'price': 10.99, 'inventory': 10 },
    { 'id': 3, 'title': 'Charli XCX - Sucker CD', 'price': 19.99, 'inventory': 5 }
]

export default {
    // 阅读后端接口文档，actions 要调用的方法
    getProducts(cb) {
        // 模拟了ajax要花时间，cb回调函数
        // return promise 
        setTimeout(() => cb(_products), 100)
    },
    buyProducts(product, cb, errorCb) {
        setTimeout(() => {
            // 抛硬币
            (Math.random() > 0.5) ? cb(): errorCb()
        }, 100)
    }
}

