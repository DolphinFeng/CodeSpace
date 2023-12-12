const coins = [1, 2, 5], amount = 11
var coinChange = function(coins, amount) {
    // 法一：取模，11 % 5 = 1
    // 法二：11 - 5 = 6   6 - 5 = 1
    // if(amount === 0) return { 0: 0 }
    // for(let i = coins.length - 1; i >= 0; i--){
    //     let max = {}
    //     if(amount / coins[i] >= 1){
    //         // 小于1就说明最大面值的硬币用不了
    //         max[coins[i]] = Math.floor(amount / coins[i])
    //         let rest = amount % coins[i]
    //         // 对象的合并
    //         return Object.assign(max, coinChange(coins, rest))
    //     }
    // }
    // 上面这个方法行不通，只能判断最大的，如果是2，3，5就行不通了
    
};
console.log(coinChange(coins, amount))