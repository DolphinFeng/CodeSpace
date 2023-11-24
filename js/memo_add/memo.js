// 为可以传参的函数缓存   记忆函数  闭包的高级功能


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

// commonjs 模块化方案
module.exports = memoize