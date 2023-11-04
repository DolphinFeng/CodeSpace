let s = '{[()]}'
//       123456654321
//对称优先用栈
//const和let的常量：
//左半部分入栈

const stack = []
const len = s.length//方便写代码,并且优化了，每次for循环都要读一遍s.length
//左半部分作key,右半部分作value
const obj = {
    '(': ')',
    '[': ']',
    '{': '}'
}
const flag = true
for (let i = 0; i <len; i++) {
    //只要是左半部分就入栈
    const item = s[i]
    if(item === '(' || item === '[' || itme === '{'){
        stack.push(item)
    }else{
        //判断此时的item是否适配栈顶元素
        //如何知道适配呢，代码只知道相等
        //将栈顶的元素取出作出obj的key读取到value判断该value是否====item
        if( !stack.length || obj[stack.pop()] !== item){//===的不相等就是!== 两个==的不相等就是!==   ||右边的是看右括号多余左括号
            //continue//跳出本次循环，去下一次循环
            return false
        }
    }
    return !stack.length//!转成布尔类型  左括号多于右括号
}



// 对于左括号和右括号的数量，我们还可以在最开头判断长度的奇偶
if(len % 2 !== 0){
    return false
}
