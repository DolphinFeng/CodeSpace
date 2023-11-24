// 动态规划
function fibonacci(n) {
    // var arr = []
    // arr[0] = 1
    // arr[1] = 1
    // for(let i = 2; i<n; i++){
    //     arr.push(arr[i - 1] + arr[i - 2])
    // }
    // return arr[n - 1]
    let a = 1, b = 1
    for(let i = 2; i<n; i++){
        [a, b] = [b, a + b]
    }
    return b
}
console.log(fibonacci(5));