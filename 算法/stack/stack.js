//js里面没有栈的符号,栈是弱化版的数组（被砍了部分功能），数组头尾中间随意操作
//所以V8引擎依旧当作数组，但是我们就是不用那些数组的所以功能，只使用数组的push（尾增）和pop（尾减），
let stack = []
//栈底【下标0】，栈顶，我们不能用下标去取
stack.push('干锅鸡')//入栈
stack.push('紫菜蛋汤')
stack.push('红烧肉')
stack.push('蒜蓉虾')
console.log(stack)
//v8其实堪称()里面最后就是true或者false 数字0是false，其余全是true
while(stack.length){
    const top = stack[stack.length - 1]
    console.log('我正在吃',top)
    stack.pop()//删掉还会读栈顶
}