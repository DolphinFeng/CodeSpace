//es6 新增了 箭头函数
const phoneNumber = (numbers) => {//如果函数体内只有一行代码，{}也可以去掉 
    return "(" + numbers[0] + numbers[1] + numbers[2]
        + ")" + " " + numbers[3] + numbers[4] + numbers[5] 
        + "-" + numbers[6] + numbers[7] + numbers[8] + numbers[9] + ""
}
console.log(phoneNumber([1,2,3,4,5,6,7,8,9,0]))//phoneNumber数据类型是对象，函数也是对象  js除了基本数据类型其余全是对象，日期等等
// 如果是let phoneNumber 这就是个函数表达式  那么变量的类型由值决定  类型：undefined(未定义)  null(值为空) 

//function phoneNumber(){} 这是个函数定义 es5老版本
//箭头函数就是个简版的函数 两种方式，es5老版本, es6简版 少写一个function，因此现在基本都用es6版本

//es6字符串模板符号  这个换行输出也会换行 用return可以换行
newPhoneNumber = (numbers) => `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
console.log(newPhoneNumber([1,2,3,4,5,6,7,8,9,0]))