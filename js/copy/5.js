let obj = {
    name: '小黑子',
    age: 18,
    like: {
        type: 'coding'
    }
}

// 深拷贝弄个新地址就可以了,递归
function deepCopy(obj){
    let objCopy = {}
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
                //obj[key]原始可以直接用,非原始就操作一下
            if(obj[key] instanceof Object){
                // 引用类型 递归就可以创建一个新的objCopy
                // 右边就是like这个对象
                objCopy[key] = deepCopy(obj[key])
                objCopy[key] = child
            }else{
                // 原始
            objCopy[key] = obj[key] 
            }
            // 出口:if进不去就出来了
        }
    }
    return objCopy
}
// 面试官这样就可以了,若非要处理循环引用:看库
// 依旧无法处理循环引用,这玩意儿没啥用,v8认得他,你就得认得他
console.log(objCopy(obj));

// Jquery库,这个库很经典

// https://underscorejs.org/  这个里面给你封装了很多方法,script标签引用这个库就可以用,我们要学它的源码
// https://www.lodashjs.com/docs/lodash.cloneDeep   拷贝去重扁平化两个网站库都有,如果可以弄懂它的源码就可以