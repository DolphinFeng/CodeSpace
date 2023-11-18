let obj = {
    name: '小黑子',
    age: 18,
    hobby: {
        type: 'coding'
    },
    b: null,
    c: function() {},
    d: {
        n: 100
    }
}
obj.c = obj.d
obj.d.n = obj.c
// console.log(obj)
let newObj = JSON.parse(JSON.stringify(obj));
// obj.hobby.type = 'running'
console.log(newObj);
