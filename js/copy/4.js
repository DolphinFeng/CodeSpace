// json字符串变对象,对象变字符串
let obj = {
    name: '小黑子',
    age: 18,
    like: {
        type: 'coding'
    },
    a: undefined,
    b: null,
    c: function() {},
    d: {
        n: 100
    },
    e: Symbol('hello'),
    // f: 123n 这个方法读不懂bigint,会报错
}
// parse字符串变对象,stringify把对象变字符串,成了深拷贝

console.log(JSON.stringify(obj));

obj.like.type = 'running'
obj.c = obj.d
obj.d.m = obj.c
console.log(obj)
// 这叫循环引用:对象自己引用自己
let newObj = JSON.parse(JSON.stringify(obj));
console.log(newObj);
// 深拷贝自带的方法
// 缺点:拷贝不到undefined,函数体,symbol,顽固派只能拷贝null
// 无法拷贝循环引用的对象