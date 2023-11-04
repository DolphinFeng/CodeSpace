var obj = {
    a: 1,
    b: 2,
    c: 3
}//键值对的存储方式

with(obj){//批量修改对象的值
    a = 2,
    b = 3,
    c = 4
}
console.log(obj)