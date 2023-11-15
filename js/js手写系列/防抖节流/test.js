let obj = {
def:def
}
function def(fn) {
    fn.call(this)
}
function fn() {
    console.log(this);
}
obj.def(fn)