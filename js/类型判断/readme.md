# typeOf
1. 可以准确判断除null之外的原始类型
2. 可以判断function

# instanceof
1. 只能判断引用类型
2. 且是通过原型链查找来判断的

# Object.prototype.toString
1. 
2. 
3. 将o作为ToObject(this)的执行结果（你也看不懂）
4. 让class成为o内部属性[[Class]]的值，[[]]这类属性都是给V8看的
5. 返回由 "[object "和 class 以及 "]" 三部分组成的字符串 class就是执行出来的类型

# Array.isArray(arr)
(函数自带的方法，isArray只能被Array调用  实例对象不能调用这个)