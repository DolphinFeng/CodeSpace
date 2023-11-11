// 面试官： 手动做一个instanceof 
// 口头：通过循环不断找a的隐式原型，找到了就true，找不到null就false

function instanceOF(L, R){
    // 看似三层，但是人家可能自己创了，不止
    let left = L.__proto__ 
    let right = R.prototype
    // left终将为null
    while(left !== null){ 
        // 不换行可以省略{}
        if(left == right) return true
        left = left.__proto__
    }
    return false

}
console.log(instanceOF([],Array) );
// true
console.log(instanceOF([],Object))
// true
console.log(instanceOF(Function(),Object))
// true

