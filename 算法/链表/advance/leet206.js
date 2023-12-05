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
// 反转链表
var reverseList = function(head) {
    var prev = null, cur = head
    while(cur){
        // 双指针，原地反转链表
        const next = cur.next
        cur.next = prev
        prev = cur
        cur = next
    }
    return prev
};
console.log(reverseList(list))