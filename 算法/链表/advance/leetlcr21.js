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
// 正常思路
// var removeNthFromEnd = function(head, n) {
//     // 正数第n个，就简单
//     // 前驱节点，链表只要有删除，一定要定义一个前驱节点，不会删掉原来的
//     const dummy  = new ListNode()
//     dummy.next = head
//     // 如何定位到倒数第n个
//     // 要转为length - n + 1当前
//     // length - n就是倒数第n个前一项
//     // 因此要遍历一个链表
//     let cur = dummy
//     let len = 0
//     while(cur.next){
//         len++
//         cur = cur.next
//     }
//     // 又要遍历一次
//     let pre = dummy
//     // 这里i <= len - 1困扰了很久
//     for(let i = 0; i < len - n; i++){
//         pre = pre.next   
//     }
//     if(pre.next){
//         pre.next = pre.next.next
//     }
    
//     return dummy.next
// };

// console.log(removeNthFromEnd(list, 2))


// 快慢指针
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode()
    dummy.next = head
    // target = len - n + 1   pre = target - 1
    // 遍历到pre执行删除操作
    // 快指针先到最后一位，满指针就是pre
    // 核心思想：快指针要先领先满指针n位（因为快到了终点，慢就刚好就是pre）
    let fast = dummy
    let slow = dummy
    // 让快指针先走n步
    while(n !== 0){
        fast = fast.next
        n--
    }
    // 一起走
    while(fast.next){
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next
    return dummy.next
};

console.log(removeNthFromEnd(list, 2))