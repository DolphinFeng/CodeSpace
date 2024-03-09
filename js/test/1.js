// 返回数字的千分位
let a = 1234  // “1，234”
function back (num) {
    let arr = String(num).split("") // [1, 2, 3, 4]
    for (let i = 0; i < arr.length; i++) {
        if (i = 0) {
            arr.push(',')
        }
    }
    let str = arr.join('')
    return str
}
console.log(back(a));
