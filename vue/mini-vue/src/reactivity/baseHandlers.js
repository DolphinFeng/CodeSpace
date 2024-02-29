// new Proxy的参数二
import { track } from './effect.js'

const get = createGetter() 
const set = createSetter()

export const mutableHandlers = {
    // get: function(target, key, receiver) {  // 被代理的对象，该对象的key， 被代理后的对象  
    //     console.log('target对象被读取值了');
    //     // 返回值才能读到值
    //     // return target[key]
    //     const res = Reflect.get(target, key, receiver) // 对象读值，这是新的写法，更优雅
    //     return res
    // }, 
    get,
    set
    // set: function(target, key, value, receiver) {
    //     console.log('target对象被修改值了', key, value);
    //     // target[key] = value
    //     const res = Reflect.set(target, key, value, receiver)
    //     return res
    // }   
}



function createGetter() { // 闭包：函数return一个新的函数   这里作依赖收集
    return function get(target, key, receiver) {
        console.log('target对象被读取值了');
        const res = Reflect.get(target, key, receiver) // 对象读值，这是新的写法，更优雅
        // 还需要清楚这个属性还有哪些地方用到了
        // 变量都没用过，就不需要收集它的副作用函数
        track(target, key)
        return res
    }
}

function createSetter() {
    return function set(target, key, value, receiver) {    // 这里作依赖触发
        console.log('target对象被修改值了', key, value);
        const res = Reflect.set(target, key, value, receiver)
        // 需要记录下来此时是哪个key的值变更了，再去通知其他依赖该值的函数生效，更新浏览器的试图（响应式）
        // 这就是 依赖收集 ：被修改的key在哪些地方被用到了  其实就是发布订阅
        // 依赖收集： 触发每一个被修改的属性的副作用函数  所谓副作用函数就相当于会用上它的函数，附带的意思
        return res
    }
}

// ------------------------------------
// export const mutableHandlers = {
//     get: function (target, key, receiver) {
//         return target[key]
//     },
//     set: function (target, key, value, receiver) {
//         console.log('修改值');
//     }
// }