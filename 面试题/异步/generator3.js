function a () {
    setTimeout(() => {
        console.log('a');
    }, 1000)
}

function b () {
    setTimeout(() => {
        console.log('b');
    }, 500)
}

function run (fn) {
    let gen = fn()

    function next(err, data) {
        let result = gen.next(data)
        if (result.done) return 
        result.value(next)
    }

    next()
}

function* g () {
    yield a()
    yield b()
}
run(g)

console.log(gen.next());
// generator的自动化管理