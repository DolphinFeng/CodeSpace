// 进阶版队列 双端队列（两边都能进，两端都能出）  
// let queue = []

// queue.push(1)
// queue.pop()
// queue.shift()
// queue.unshift(1)

// 后面移动的时候看是否是新的最大值

// 双端队列意义：维护一个有效的递减队列

let arr = [1,3,-1,-3,5,3,6,7], k = 3
var maxSlidingWindow = function(nums, k) {
    const len = nums.length
    const res = []
    const deque = []
    for(let i = 0; i<len; i++){
        // 比较队列的最后一位
        while(deque.length && nums[deque[deque.length - 1]] < nums[i]){
            deque.pop()
        }
        deque.push(i)
        // 对头元素是不是应该出窗口了
        if(deque[0] <= i - k){
            deque.shift()
        }
        if(i >= k - 1){
            res.push(nums[deque[0]])
        }
    }
    return res
}