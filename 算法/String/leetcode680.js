
let str = 'acbca'
var validPalindrome = function(s) {
        // 太慢了
        // function ispallindrome(s){
        //     const len = s.length
        //     for(let i  = 0; i< len / 2 ; i++){
        //         if(s[i] !== s[len - 1 - i]){
        //             return false
        //         }
        //     }
        //     return true
        // }
        // if(ispallindrome(s)){
        //     return true
        // }else{
        //     const len = s.length
        //     for(let i = 0 ;i < len ; i++){
        //         let arr = s.split('')
        //         arr.splice(i,1)
        //         arr.join('')
        //         if(ispallindrome(arr)){
        //             return true
        //         }
        //     }
        //     return false
        // }
    // 双指针
    const len = s.length
    let i = 0, j = len - 1
    while( i < j && s[i] === s[j]){
        i++
        j--
    }
    //不要移除，跳过，移除事情太多了
    if(isPalindrome(i + 1, j)){
        return true
    }
    if(isPalindrome(i, j - 1)){
        return true
    }
    
    function isPalindrome(st, ed){
        while(st < ed){
            if(s[st] !== s[ed]){
                return false
            }
            st++
            ed--
        }
        return true
    }
    return false
};
console.log(validPalindrome(str));