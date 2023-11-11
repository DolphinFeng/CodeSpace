// var s = "leetcode", wordDict = ["leet", "code"]
// console.log(1 == '1') // true
// console.log(1 === '1')

// console.log(typeof Function())
var obj = {
    a: 1,
    fn: foo
}

function foo(){
    console.log(this.a);
}

obj.fn()