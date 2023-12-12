var postorderTraversal = function(root) {
    // 后序迭代 左右根
    // 入栈：根右左  拿到根后，根放在最后，unshift放前面，先右接前面，所以右后入栈，左先入栈
    if(!root) return []
    const res = []
    const stack = []
    stack.push(root)
    while(stack.length){
        // 取值
        const top = stack.pop()
        res.unshift(top.val)
        if(top.left){
            stack.push(top.left)
        }
        if(top.right){
            stack.push(top.right)
        }

        
    }
    return res
};