// 用递归
function instanceOF(L, R){
    let left = L.__proto__ 
    let right = R.prototype
    if(lett === right){
        return true
    }else if(left.__proto__ !== null){
        instanceOF(left.__proto__,R)
    }    
    return false
}