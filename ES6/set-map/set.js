// set也是个类数组，上次听说还是arguments

// let arr = [1,1,2,3,3]
// let obj = {
//     1: 1,
//     2: 2,
//     3: 3
// }
// 等同于下面，但是这里node不行
// let obj = {
//     1,
//     2,
//     3
// }
// 数组可以存放相同的元素，对象不能重复key,但是可以重复value
// set,存进去的值不能相同,类似数组，成员唯一，set没有符号表达，本质上还是个对象

// 表示方式，接受的参数是一个数组
// let set = new Set([1,2,3,4])
// 可以说是下标，也可以说是key
// 得到一个set对象
// console.log(set)
// console.log(set.get(0));
// console.log(set.get size())
// console.log(set.keys())
// console.log(set.values())

// 这样读取按道理可以，但是又是undefined，读不到值
// 用自带方法读值
// 普通对象必须是键值对，但是里面又没有key

// 不是普通对象，也不是普通数组，可以理解为key为1，value为1，。。。


// set.add(5)
// 像数组的push
// console.log(set);
// console.log(set.size);

// let set = new Set([1,1,2,2,3,4])
// 面试：一个数组去重
// set.add(5)
// console.log(set); 

// 数组去重

// var arr = [1,2,1,1,'1']

// function unique(arr){
//     let s = new Set(arr)
//     // s（类数组）还要转成数组
//     // 也可也解构， return [..new Set(arr)]
//     let res = Array.from(s)
//     return res
//     // 就相当于return Array.from(new Set(arr))
//     // 
//     // 数组可以，字符串也可以，对象不能去重  因此这个方法不能用
// }
// console.log(unique(arr));


// 箭头函数，如果没有{} 就相当于加了个如turn
// var unique = (arr) => [...new Set(arr)]
// console.log(unique(arr))


// let set = new Set([1,1,1,2,3]);
// set.clear();
// console.log(set);
// 挂在原型上，就要实例对象来调用
// set.delete(1)
// console.log(set)

// foreach 只能数组（以前），set也可以
// 也是三个参数，元素，下标，set名字
// let set =  new Set([1,1,1,2,3,4])
// set.forEach((item,index,set) =>{
//     console.log(item,index,set);
// })

// 判断是否具有某个属性

let set = new Set([1,1,1,2,3])
// console.log(set.has(2)); 

console.log(set.keys());
// 具有迭代属性（有用迭代器属性的东西才可以被遍历，相当于枚举）（也是内置属性，scope,class都是内置属性，我们无法访问）的对象，迭代属性后面再讲，字节的面试题会考，很恶心
// 所以数组也有这个属性
// set没有，但是set.key有

