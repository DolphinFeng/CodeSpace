// var 存在声明提升
// let不能重复声明

// 声明提升：为什么会有这个呢？因为js不同于别的语言，js编译一部分执行一部分，其他是全编译完在执行。
// 先找有效标识符
// console.log(a);
// var a = 1

// console.log(a);
// let a = 1
// 不存在声明提升，会报错

// console.log(a);
// const a = 1
// const同理

// let a  = 1
// if(true){
//     console.log(a);
// }
// if不形成，别踩坑

// let a = 1
// if(true){
//     console.log(a);
//     let a = 2
// }
// 报错，按道理也是1啊（if词法->if变量环境->全局词法（找到））
// let存在词法环境中，词法环境也是es6更新之后有的，全局词法中a = 1，if块级词法中：a=undefined，打印a时应该会去找
// 我们不用关心人家如何用C语言封装这个东西的，let声明的变量，没有赋值相当于是个隐匿的状态，找不到的！那为何不去全局中找呢
// （知识点）
// 隐匿状态不让你访问，（let搞的），隐匿也代表有，所以不会往下找，找不让你找，所以读不了，访问不到自己的值，也不会去全局，因此报错
// 暂时性死区（let会形成一个，编译器中明明有，但是不让你访问）



// var a = 1
// var a = 2
// console.log(a);
// 如果是let，const会报错（already existe）

// 用var在全局中声明，就相当于往window挂属性
// 但是let不行

// const a = 1
// a = 2
// console.log(a);
// 报错，不允许修改

const obj = {
    name: '小黑子'
}
obj.name = '大黑子'
console.log(obj);
// 对于对象又可以修改，因为对象是放在堆中，在栈中的是地址，根本原因是栈中地址不变，指针（地址）不变
// 全局词法中，obj：undefined,赋值的时候发现是引用，于是开辟一个堆给到obj,栈中是个它的地址，obj.name时，会先找obj是谁，抱着地址去了堆，然后修改，地址没变

// 为何不都放在栈中，V8如果把栈设计的很大，执行效率会很低，因为要找很久，（上下文对象切换的时候）