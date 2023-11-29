function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
var deleteDuplicates = function(head) {
    if(!head || !head.next){
        return head
    }
    // 面试常考：前驱节点没了，我们就要手搓一个头节
    let dummy = new ListNode()
    dummy.next = head
    // 头节点一定不要动
    let cur = dummy
    // 去重一定是有1个节点
    // 访问对象不存在属性是undefined，如果访问对象的属性的属性会报错
    while(cur.next && cur.next.next){
        if(cur.next.val === cur.next.next.val){
            let value = cur.next.val
            while(value == cur.next.val){
                cur.next = cur.next.next
            }
        }else{
            cur = cur.next
        }
    }
    return dummy.next
};