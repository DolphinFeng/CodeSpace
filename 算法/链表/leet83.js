function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var list1 = {
    val: 1,
    next: {
        val: 1, 
        next: {
            val: 4,
            next: null
        }
    }
}

var deleteDuplicates = function(head) {
    // 头节点不要动人家
    let cur = head
    // 遍历链表 while最优雅，中间才知道条件
    // 头节点为null,直接返回头
    while(cur !== null && cur.next) {
        if(cur.val === cur.next.val) {
            cur.next = cur.next.next
        }else {
            cur = cur.next
        }
    }
    return head
};

console.log(deleteDuplicates(list1))