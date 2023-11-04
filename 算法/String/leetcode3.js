const s = "abcabcbb"

var lengthOfLongestSubstring = function(s) {
    // const len = s.length
    // let res = 1

    // if(len === 0){
    //     return 0
    // }
    // for (let i = 0; i < len; i++) {
    //     let current = 1
    //     let j = i + 1
    //     let currentS = s[i]
    //     while(!currentS.includes(s[j]) && j<len){
    //         current++
    //         currentS = s[j] + currentS
    //         j++
    //     }
    //     res = Math.max(res, current)
    // }
    // return res  n*n的时间度
    // let obj = {}
    // let res = 0
    // let j = 0
    // for(let i = 0 ; i<s.length ; i++){
    //     const value = obj[s[i]]
    //     if( value !== undefined){
    //         //j 表示下一次从哪里开始
    //         j = Math.max(value + 1,j)
    //     }
    //     res = Math.max(res, i - j + 1)
    //     obj[s[i]] = i
        
    // }
    // return res
    let i = 0, res = 0
    for (let j = 0; j < s.length; j++) {
      let index = s.slice(i, j).indexOf(s[j]) // 'abc'  a
      if (index === -1) {
        res = Math.max(res, j - i + 1)
      } else {
        i = i + index + 1
      }
    }
    return res
};
console.log(lengthOfLongestSubstring(s))