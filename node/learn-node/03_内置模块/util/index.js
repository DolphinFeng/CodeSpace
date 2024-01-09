const util = require('util');

const obj = {
    a: 1, 
    b: {
        c: 2,
        d: [3, 4, 5],
        e: () => {
            console.log(6)
        }
    }
}

// console.log(JSON.stringify(obj))
// console.log(util.inspect(obj))
// console.log(util.inspect(obj, {depth: 1}))

// console.log(util.format('%s:%s', 'foo', 'bar'))

// console.log(util.format('%d + %d = %d', 1, 1, 2))

// console.log(util.format('hello %j', {name: 'world'}))

console.log(util.types.isArrayBuffer([]))

console.log(util.types.isDate(new Date()))