/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var s = "abcd", t = "abcde"
var findTheDifference = function (s, t) {
    let code = 0; // 保存ASCII码的值
    const str = s + t; // 将s和t组成一个新字符串
  
    // 将字符串中的所有字符转成ASCII码进行异或运算，相同的字符会被抵消
    // 最后剩下的就是多余字符的ASCII码
    for (let i = 0; i < str.length; i++) {
      code ^= str.charCodeAt(i);
    }
  
    // 将ASCII码转换成字符串返回
    return String.fromCharCode(code);
  };
  console.log(findTheDifference(s,t));
  