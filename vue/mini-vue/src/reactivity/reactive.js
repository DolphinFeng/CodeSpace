// import { mutableHandlers } from "./baseHandlers.js"


// export function reactive (target) {  // 接收一个对象，将其变成响应式
//     createReactiveObject(target, reactiveMap, mutableHandlers) // 返回一个对象，变成了响应式
// }

// // const reactiveMap = null
// export const reactiveMap = new WeakMap() // 这个变量用来判断target是否已经被代理过，代理过就存起来
// export function createReactiveObject (target, proxyMap, proxyHandlers) {  // 抛不抛出无所谓  创建响应式的函数
//     // 非对象，不给做响应式，为何reactive这么设计，稍后解释
//     if (typeof target !== 'Object' || target === null) { // 不是对象不予操作
//         return target
//     }

//     const existingProxy = proxyMap.get(target) // 读取对象的方法 get

//     // 该对象是否已经被代理过（其实就是被弄成响应式） 创建一个变量，初始值为null, 只要被代理过，修改  代理就是拦截
//     if (existingProxy) { // 已被代理，但是万一两次响应式调用呢，所以用数组，但是yyx用的是WeakMap
//         // WeakMap存在的意义是性能问题，释放内存更好，对于内存的回收会更友好，详情请看之前的文章
//         return existingProxy
//     }

//     // 执行代理操作
//     const proxy = new Proxy(target, proxyHandlers)  // proxy就是代理后的对象 ********************************
//     // 参数二：对参数一对象的操作都有对应的函数触发 为了代码优雅性，放出去写了

//     // 往 reactiveMap 增加 proxy
//     proxyMap.set(target, proxy) // 原对象做key 代理后的对象做value

//     return proxy  // *************************
// }

// ----------------------------------------------------------------
import { mutableHandlers } from './baseHandlers.js'

// 保存被代理过的对象
export const reactiveMap = new WeakMap() // new Map() // new WeakMap 对内存的回收更加友好


export function reactive(target) { // 将target变成响应式
  return createReactiveObject(target, reactiveMap, mutableHandlers)
}


export function createReactiveObject(target, proxyMap, proxyHandlers) { // 创建响应式的函数
  // 判断target是不是一个引用类型
  if (typeof target !== 'object' || target === null) {  // 不是对象就不给操作
    return target
  }

  // 该对象是否已经被代理过(已经是响应式对象)
  const existingProxy = proxyMap.get(target)
  if (existingProxy) {
    return existingProxy
  }

  // 执行代理操作（将target处理成响应式）
  const proxy = new Proxy(target, proxyHandlers) // 第二个参数的作用：当target被读取值，设置值，判断值等等操作时会触发的函数

  // 往 proxyMap 增加 proxy, 把已经代理过的对象缓存起来
  proxyMap.set(target, proxy)
  
  return proxy
}