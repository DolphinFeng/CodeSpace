function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

let list = {
    val: 1, 
    next: {
        val: 2, 
        next: {
            val: 3, 
            next: {
                val: 4, 
                next: {
                    val: 5, 
                    next: null
                }
            }
        }
    }
}

var removeNthFromEnd = function(head, n) {
    // 正数第n个，就简单
    // 前驱节点，链表只要有删除，一定要定义一个前驱节点，不会删掉原来的
    const dummy  = new ListNode()
    dummy.next = head
    // 如何定位到倒数第n个
    // 要转为length - n + 1当前
    // length - n就是倒数第n个前一项
    // 因此要遍历一个链表
    let cur = dummy
    let len = 0
    while(cur.next){
        len++
        cur = cur.next
    }
    // 又要遍历一次
    let pre = dummy
    for(let i = 0; i < len - n; i++){
        pre = pre.next   
    }
    if(pre.next){
        pre.next = pre.next.next
    }
    
    return dummy.next
};

console.log(removeNthFromEnd(list, 2))