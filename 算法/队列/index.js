// 栈没有特殊符号来表示，只能用push,pop
// let stack = []

// 队列也是弱化版的数组，理解为一个管道,只能用push和shift,尾进头出
// 当然也可以pop和unshift，没有规定头尾啊
let queue = []
queue.push('宫保鸡丁')
queue.push('辣椒炒肉')
queue.push('红烧肉')

while(queue.length){
    // 也可以const top = queue.shift()
    const top = queue[0]
    console.log(top);
    queue.shift()
}
// 面试：力扣232（好题目：一提多知识点），队列重考题目就是双端队列
// 100-200人就是中厂了，会被问道这种题目


