let count = 0

function foo() {
    console.log(count);
} 

function bar(cb) {
    setTimeout(() => {
        count = 1
        cb()
    }, 1000)
}


bar(foo)