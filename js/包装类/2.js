// 编程最难的是取名字，对于大佬来说
let obj = {
    name: '丁真',
    age: 18
}
// console.log(obj.age);
// 不打引号会当真变量
// console.log(obj['name'])
// 没有就会添加属性
// obj.girlFriend = '翠花'
// console.log(obj)


// obj.girl = '小红' 
// let girl = 'girlFriend'
// 这样写，上面的等于没写

// []不打引号，当成变量，拿到值，作为key，
let girl = 'girlFriend'
obj[girl] = '小红'

// 对象删除属性
delete obj.girlFriend
// 或者 obj[girl]
console.log(obj);
