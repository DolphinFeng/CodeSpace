// 先序
// var preorderTraversal = function(root) {
    // 递归
//     const res = []
    
//     function preOrder(root){
//         if(!root) return
//         res.push(root.val)
//         preOrder(root.left)
//         preOrder(root.right)
//     }
//     preOrder(root)
//     return res
// };
var preorderTraversal = function(root) {
    // 迭代写法
    // 思路：右左根入栈，出栈根左右
    // 出栈时当成根节点，然后再判断有无左右子节点，有继续入栈
    if(!root) return []
    const res = []
    const stack = []
    stack.push(root)
    while(stack.length){
        // 取值
        const top = stack.pop()
        res.push(top.val)
        if(top.right){
            stack.push(top.right)
        }
        if(top.left){
            stack.push(top.left)
        }
    }
    return res
};