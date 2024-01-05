import { createStore, createLogger } from 'vuex' // createLogger让数据修改全部以logger的形式打印出来
import cart from './modules/cart'
import products from './modules/products'

// createStore 返回一个store单例对象 只能有一个 树状结构
export default createStore({
    modules: {
        cart,
        products
    },
    plugins: [ createLogger() ]
})