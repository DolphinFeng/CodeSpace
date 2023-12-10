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
        }
    }
}

function BFS(root) {
    const queue = []
    queue.push(root)
    while(queue.length){
        // 只要队列有元素
        // 第一层先放队列，再出去
        const top = queue[0]
        console.log(top)
        if(top.left){
            queue.push(top.left)
        }
        if(top.right){
            queue.push(top.right)
        }
        queue.shift() // 移除第一个元素
    }
}
BFS(tree)
