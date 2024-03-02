function* foo () {
    // let a = 0
    // yield a = 1 // yield关键字是让步地的意思
    // yield a = 2
    // console.log(a);

    // yield 'a'
    // yield 'b'
    // yield 'c'
    // return 'ending' // 按道理generator一定以return结尾 done永远为false

    // var o = 1
    // yield o++ // 其实打印还是1，因为进去
    // yield o++
    // yield o++
}
let gen = foo() // 相当于new了一个实例对象，这就是*作用  这是迭代对象

// console.log(foo()); // Object [Generator] {}
console.log(gen.next()); // 第一个yield执行后的参数 { value: 'a', done: false }  done为false代表此时已暂停
// 处理异步就是人为地控制执行与不执行
console.log(gen.next()); // 放开第二个yield
console.log(gen.next());
console.log(gen.next()); // done为true代表已经走完了yield
console.log(gen.next()); 

// o++ o = o + 1     ++o 先自增