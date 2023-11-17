// 先for.js
// 浅拷贝的实现原理

// 把对象都遍历就可以，key,value都要有，不能自己创建

let obj = {
    name: '小黑子',
    age: 18,
    like: {
        type: 'coding'
    }
}
let arr = ['a', {n: 1}, 1, undefined, null]
// 浅拷贝
function shalldowCopy(obj){
    // 只拷贝引用类型
    if(typeof obj !== 'object' || obj == null) return 

    // let objCopy = {}
    // 所以数组行不通,不可能数组给你拷贝成数组
    // 所以先类型判断
    // obj instanceof Array就可以
    // if(obj instanceof Array){
    //     objCopy = []
    // }
    // 优化一下
    let objCopy = obj instanceof Array ? [] : {}
    // typeof obj == 'object'不行,都这样,用来完善代码,传了数字就不行

    for(let key in obj){
        // 不要原型
        if(obj.hasOwnProperty(key)){
            // objCopy.key是个字符串,[]可以当成变量
            objCopy[key] = obj[key]
            // 原始就是原始,引用就是地址赋值,所以原对象子对象也会受影响
        }
    }
    return objCopy
}
let newObj = shalldowCopy(arr)
obj.age = 20
// newObj.age是原始类型,深!不受影响
obj.like.type = 'swimming'
console.log(newObj);