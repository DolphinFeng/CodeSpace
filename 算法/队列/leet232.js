
var MyQueue = function() {
    this.stack1 = []
    this.stack2 = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack1.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    // 将栈1中的数据导到栈2中，再出栈
    // 要保证栈2全走完了，栈1再进来
    // ! 先转换成布尔值，后取非
    if(!this.stack2.length){
        while(this.stack1.length){
            const top = this.stack1.pop()
            this.stack2.push(top)
        }
    }
    return this.stack2.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    // pop完后放回去，依旧栈1到栈2
    // if(!this.stack2.length){
    //     while(this.stack1.length){
    //         const top = this.stack1.pop()
    //         this.stack2.push(top)
    //     }
    // }
    let top = this.pop()
    this.stack2.push(top)
    return top
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return !this.stack1.length && !this.stack2.length
};

let queue = new MyQueue();