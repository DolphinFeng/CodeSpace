let obj = {
    name: '小黑子',
    age: 18,
    hobby: {
        type: 'coding'
    }
}
function deepCopy(obj){
    let objCopy = {}
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
                //obj[key]原始可以直接用,非原始就操作一下
            if(obj[key] instanceof Object){
                // 引用类型 递归就可以创建一个新的objCopy
                // 右边就是hobby这个对象
                objCopy[key] = deepCopy(obj[key])
            }else{
                // 原始类型
            objCopy[key] = obj[key] 
            }
            // 出口:if进不去就出来了
        }
    }
    return objCopy
}
let newObj = deepCopy(obj)
obj.hobby.type = 'running'
console.log(newObj.hobby.type);