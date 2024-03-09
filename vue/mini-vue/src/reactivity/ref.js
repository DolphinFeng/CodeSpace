import { track, trigger } from './effect.js'
import { reactive } from './reactive.js'

export function ref (val) {
    return createRef(val)
}

function createRef(val) { // 将原始数据类型变成响应式
    // 避免二次响应
    if (val.__v_isRef) {
        return // 已经响应式不予以响应
    }
    // 将val变成响应式
    return new RefImpl(val)
}

class RefImpl { // es6构造函数class写法
    constructor(val) {
        this.__v_isRef = true // 给每一个被ref操作的属性添加标记
        this._value = convert(val) // _开头的属性通常表示私有属性，源码自用
    }

    get value() { // 函数前一个get表示，让一个函数不用()就可以调用，如果没这个get，那么就是age.value()才能拿到值
        // 为this对象作依赖收集
        track(this, 'value') // 参二key是人为加的
        return this._value
    }

    set value(newVal) {
        if (newVal !== this._value) {
            this._value = convert(newVal)
            trigger(this, 'value') // 触发掉‘value’上的所有副作用函数
        }
    }
}

function convert(val) {
    if (typeof val !== 'object' || val === null) { // 不是对象
        return val // 原始类型就用自身
    } else {
        return reactive(val) // 引用类型喊reactive帮忙
    }
}