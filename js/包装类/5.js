// 包装类

// var obj = {}
// console.log(obj.a);
// 面试官：为什么是undefined，按道理应该是报错，没有声明


// 原始值不可以添加属性，那为什么是undefined，而不是报错
// var num = 123
// num.abc = 'abc'
// console.log(num.abc);

// 原始数据类型除了undefined，和null没有内置函数，其余都有
// 数字是number, 字符串是String 布尔是boolean

// var num = new Number(123)
// console.log(num);

// var num = new Number(123)
// num.abc = 'hello'
// console.log(num.abc);
// console.log(num * 2)
// 参与四则运算V8会把它当成数字

// var num = 4
// num.len = 3
// num不能有属性
// num.len = 3相当于
// var num = new Number(4)
// num.len = 3
// delete num.len
// 删掉后按道理输出下面的语句还是会报错
// console.log(num.len); 
// 为何不报错，因为这里还会创建一次num.len new Number(4).lne
// 这一过程称为隐式包装类

// 文章标题：原始数据.属性，为何不报错


// 考点：
// var arr = [1, 2, 3, 4, 5]
// arr.length = 2
// console.log(arr);

// var str = 'abcd'
// new String('abcd').length
// console.log(arr.length)

// str.length = 2
// new String('abcd').length = 2 然后v8发现是原始，立马删掉，能访问，但是不能操作
// new String('abcd').length
// V8 会这样读原始数据类型
// console.log(str.length)

// typeof 内置函数
// 阿里面试题如下
var str = 'abc'
str += 1
var test = typeof str
if(test.length = 6){
    test.sign = 'typeof的返回结果可能为String'
    // new String(test).sign = ' ..... '
    // delete 
}
console.log(test.sign); // new String(test).sign
// 对象不存在的属性，.它，不报错，是因为会new 一个。
