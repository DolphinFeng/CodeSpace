let l1 = {
    val: 2,
    next: {
        val: 4,
        next: {
            val: 3,
            next: null
        }
    }
}
let l2 = {
    val: 5,
    next: {
        val: 6,
        next: {
            val: 4,
            next: null
        }
    }
}
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

    function listToArray(list){
        let arr = []
        let current = list
        while(current != null){
            arr.push(current.val)
            current = current.next
        }
        return arr
    }
    function arrayToList(arr){
        if(arr.length == 0){
            return null
        }
        let newHead = new ListNode(arr[0])
        let cur = newHead
        for(let i = 1; i<arr.length; i++){
            cur.next = new ListNode(arr[i])
            cur = cur.next
        }
        return newHead
    }
    var a = listToArray(l1)
    var b = listToArray(l2)
    var num1 = parseInt(a.reverse().join(''), 10)
    var num2 = parseInt(b.reverse().join(''), 10)
    var sum = num1 + num2 + ''
    var res = sum.split('')
    console.log(arrayToList(res))

