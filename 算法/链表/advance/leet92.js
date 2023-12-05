var reverseBetween = function(head, left, right) {
    let lNode = head
    let rNode = head
    for(let i = 0; i < left - 1; i++){
        lNode = lNode.next // 截取区左侧一位
    }

    for(let i = 0; i < right - 1; i++){
        rNode = rNode.next // 截取区最右
    }

    let r = rNode.next
    rNode.next = null
    let l = lNode.next
    
    const res = reverseList(lNode.next)
    lNode.next = res
    l.next = r
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
    return head
};