import { get } from './axios.js'
// 如果是export default 是个对象，就不需要{} ，这里用的抛出函数

const getSeller = get('/api/seller')

export {
    // 抛出一个对象
    getSeller
}