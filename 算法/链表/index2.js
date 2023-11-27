// 数组的增删的时间复杂度是o(n)，因为影响了后面的东西  读取很方便

// 链表增删效率很高 链表是o(1)
// 链表弊端：读取很麻烦，很慢，得从头开始

function ListNode(val){
    this.val = val
    this.next = null
}

const index = 10
let node = new ListNode()

for(let i = 0; i < index; i++){
    node = node.next
}