function Sum(i = 0) {
    this.total = i
}

Sum.prototype.add = function(num) {
    this.total += num
    return this
}

const result = new Sum(1)

console.log(result);