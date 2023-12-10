let tree = {
    val: 'A', 
    left: {
        val: 'B',
        left: {
            val: 'D'
        },
        right: {
            val: 'E'
        }
    },
    right: {
        val: 'C',
        left: {
            val: 'F'
        },
        right: {
            val: 'G'
        }
    }
}

// 先序遍历
// function preorder(root) {
//     if(!root)  return  // 出口
    
//     console.log(root.val) 
//     preorder(root.left)
//     preorder(root.right)
// }
// preorder(tree)

// function minorder(root) {
//     if(!root)  return  // 出口
    
//     minorder(root.left)
//     console.log(root.val) 
//     minorder(root.right)
// }
// minorder(tree)

function backorder(root) {
    if(!root) return 
    backorder(root.left)
    backorder(root.right)
    console.log(root.val)
}
backorder(tree)