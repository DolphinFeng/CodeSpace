// 副作用收集相关代码

const targetMap = new WeakMap() // 和Map本质区别就是一个性能问题,key能写成其他类型

let activeEffect = null  // 得是一个副作用函数
// export function effect(fn) {
//     const effectFn = () => {
//         try {
//             activeEffect = effectFn // 闭包
//             return fn()
//         } finally { // 无论try逻辑是否执行，finally都会触发

//         }
//     }
// }

export function effect(fn, options={}) { // fn是箭头函数
    const effectFn = () => {
        try {
            activeEffect = effectFn
            return fn()
        } finally {
            activeEffect = null
        }
    }
    if (!options.lazy) {
        effectFn()
    }
    effectFn.scheduler = options.scheduler
    return effectFn
}

// 为某个属性添加 effect 副作用
export function track(target, key) {  // 为target[key]添加effect函数
    //     targetMap = { // 存成这样
    //         target: {
    //             key: [effect1, effect2, effect3,...]
    //         }
    //     }
    // 避免二次收集
    let depsMap = targetMap.get(target)
    if (!depsMap) { // 初次读取到值 收集effect
        depsMap = new Map()
        targetMap.set(target, depsMap)
    }
    let deps = depsMap.get(key)
    if (!deps) {  // 该属性还未添加effect
        deps = new Set()
    }
    if (!deps.has(activeEffect) && activeEffect) { // 存入一个effect函数
        deps.add(activeEffect)
    }
    depsMap.set(key, deps)
    // console.log(depsMap);
}

// 触发某个属性effect
export function trigger(target, key) {
    const depsMap = targetMap.get(target)
    if (!depsMap) { // 当前对象所有key中都没有依赖，也就是从来没有使用过
        return 
    }
    const deps = depsMap.get(key)
    if (!deps) { // 这个属性没有依赖
        return 
    }

    deps.forEach(effectFn => {
        if (effectFn.scheduler) {
            effectFn.scheduler()
        } else {
            effectFn()
        }
    })
}