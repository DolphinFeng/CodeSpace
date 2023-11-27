// 数组是线性存储，数组太灵活了，而且是有序（序列化）的，删一个往前挪一个
let arr = [1, 2, 3, 4, 5, 6, 7, 8]
// 数组在计算机中占用一段连续的内存空间

// 一个节点包含两个部分，数据域，指针域
// let res = {
//     val: 1,
//     next: {
//         val: 2,
//         next: {...}
//     }
// }

// 头节点，指向第一个节点，头节点没有val值
// 节点或者结点都可以
// 最后一个节点，没有指针

// 可以往头部，中间，尾部增加节点

function ListNode(val){
    this.val = val
    this.next = null
}
// 创建
const node1 = new ListNode(1)
node1.next = new ListNode(2)

const node3 = new ListNode(3)
// 增加
node3.next = node1.next
node1.next = node3

// 删除    node1.next = node2也可，但是下面更好，node2是通过node3.next拿到的
node1.next = node3.next
