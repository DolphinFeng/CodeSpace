//基本数据类型
var a = 'hello'//字符串String ：V8（谷歌浏览器引擎）认为，‘’里面的就是字符串
var b = 123.34343 //数字number,整数小数都是
var c = true //布尔类型 boolean
var d = undefined //变量没有值就是这种，不是未被定义，只是没有赋值
var f = null //这个才是没有定义，变量都找不到
//其他都是对象or引用类型
var obj = { //引用类型 object 
    name:'蔡徐坤',//key value
    age:18
}
//想运行js代码，需要在集成器中,安装在node
var arr = ['a', 'b', 'c', 'd']
arr.push('e')//后推值
arr.unshift('w')//前推值
arr.pop()//删掉尾部元素
arr.shift()//删掉头部元素