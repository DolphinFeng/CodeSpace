// 面试官：如何性能优化，缓存结果


// 永远不要相信用户的输入
function add(a, b){
    // arguments  代表所有参数
    if(arguments.length != 2){
        throw new Error('参数错误')
    }
    if(typeof a != 'number' || typeof b != 'number'){
        throw new Error('请传入整数')
    }
    return a + b;
}

// 记忆函数
function memoize(fn){
    if(typeof fn != 'function'){
        throw new Error('请传入参数')
    }
    var cache = {} 
    // key:value o(1) 空间换时间
    return  function(){
        // 一定要有一个拼接，才能字符串相加   join是让数组变字符串  argument借用join这个方法
        var key = arguments.length + Array.prototype.join.call(arguments, ",")
        console.log(key)
        if(key in cache){
            return cache[key]
        }else{
            return cache[key] = fn.apply(this, arguments)
        }
        
    }
}

const memoizeAdd = memoize(add)
// memoizeAdd(1, 2)
// memoizeAdd(1, 2)
// js不严格 编译阶段
try{
    console.log(add(1, 2))
}catch(err){
    console.log(err)
}   

