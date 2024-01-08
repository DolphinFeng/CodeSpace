// import { add } from './add.js'

// console.log('main')

// console.log(add(1, 2))  // Cannot use import statement outside a module
// 浏览器读不懂这个语法
// 引入main的时候要type="module"  告诉浏览器需要以模块化的方式去读懂这个代码


// 为何打{}
// export 打
// export default 不打

import * as utils from './uitls.js'

console.log(utils.add(1, 2))
console.log(utils.minus(1, 2))