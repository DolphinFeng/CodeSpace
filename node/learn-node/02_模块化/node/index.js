// const add = require('./add.js')  // 因为那边抛出的是对象，因此要解构

// console.log(add(1, 2))

// const context = require('./add.js')

// console.log(context.add(1, 2))

const obj = require('./minus.js')

// console.log(obj)  // 就是一个对象，exports默认抛出就是一个对象
console.log(obj.minus(1, 2))