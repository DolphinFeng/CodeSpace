function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var list1 = {
    val: 1,
    next: {
        val: 2, 
        next: {
            val: 4,
            next: null
        }
    }
}

var list2 = {
    val: 1,
    next: {
        val: 3, 
        next: {
            val: 4,
            next: null
        }
    }
}

var mergeTwoLists = function (list1, list2) {

    let head = new ListNode()
    let cur = head
    // list1能代表一个节点，list2也能代表一个节点
    while(list1 && list2){
        if(list1.val <= list2.val){
            cur.next = list1
            // list1只能代表链表的头节点，然后就是里面那个链表了
            list1 = list1.next
        }else{
            cur.next = list2
            list2 = list2.next
        }
        // cur需要往后挪一位
        cur = cur.next
    }
    // 看谁的长度有剩余
    cur.next = list1 == null ? list2 : list1
    
    return head.next

}

console.log(mergeTwoLists(list1, list2));

