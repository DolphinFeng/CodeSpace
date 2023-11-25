23.11.21
不难，但是恶心，规则很多

# 基本数据类型转化
1. 原始转布尔
2. 转数字
3. 转字符串
4. 转对象

# 对象转原始值
- 转字符串 调用的其实就是 Object.prototype.toString()
1. {}.toString() 返回由 "[object" 和 class 和 "]"组成的字符串
2. [].toString() 返回由数组内部元素以逗号拼接的字符串
3. 其他引用类型.toString() 直接返回字符串字面量

- valueOf
1. 用于转换包装类

# ToPrimitive
对象转数字时触发这个： Number({})
ToPrimitive(obj, Number)
1. 如果参数是基本类型，不转换
2. 否则，调用valueOf 方法，如果得到原始值，则返回
2. 否则，调用toString 方法，如果得到原始值，则返回  '[object obfect]' => NaN 字符串转数字
4. 否则，报错
toString只要是数据结构就能转成原始值，当然除了undefined，null

ToPrimitive(obj, String)     String({})
1. 如果参数是基本类型，不转换
2. 否则，调用toStirng 方法，如果得到原始值，则返回
2. 否则，调用valueOf 方法，如果得到原始值，则返回  '[object obfect]' => NaN 字符串转数字   （为了防止toString被重写）
4. 否则，报错

# 对象转布尔就是true

# 一元运算符 + 
就相当于NUmber()

# 二元运算符 +
lprim + rprim === ToPrimitive(v1) + ToPrimitive(v2)
1. 当 + 两边有一个是字符串，那么都转为字符串后进行拼接
2. 否则，转到number进行计算

二者本质都往number上转，前提没有字符串