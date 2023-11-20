let tickets = [2,3,2], k = 2

let time = 0,count = 0

let current = -1
// 当k人为0，计算时间，有人为0，出队
while(current !== 0){
    
    var top = tickets.shift()
    tickets.push(top - 1)
    if(tickets[0] == 0){
        tickets.shift()
    }
    count++
    time++
    if(count % tickets.length == 0){
        current = tickets[k]
    }

}
console.log(time);