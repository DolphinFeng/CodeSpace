// function* g() {
//     let a = 1
//     let b = yield a++ // 先读值后自增  yield仅读值
//     console.log(b); // undefined 
//     let c = yield a++
//     console.log(a);
// }

// let gen = g()
// console.log(gen.next()); 
// console.log(gen.next(3)); // next的参数，用于指定被我触发的yield的执行结果
// console.log(gen.next(2)); // 覆盖的是yield整个语句

function* g() {
    yield 1
    yield 2
    yield 3
    yield 4
    yield 5
    return 6
}

for (let val of g()) { // for of就是迭代具有迭代器属性的东西 也就是自带next
    console.log(val);
}