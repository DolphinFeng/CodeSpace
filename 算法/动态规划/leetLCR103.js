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



    // 设11由n个硬币凑成，f(x) = x元的最少硬币个数
    // f(11) = f(11 - c1) + 1
    // f(11) = f(11 - c2) + 1
    // f(11) = f(11 - c3) + 1
    // 谁最少谁就是最优解
    // f(11) = Math.min(f(11 - c1) + 1, f(11 - c2) + 1,……, f(11 - cn) + 1 ) 
    // 上面就是公式，再来个出口

    const f = [] // 每个目标金额对应的最少硬币个数
    f[0] = 0
    for(let i = 1; i<=amount; i++){
        f[i] = Infinity // 不同金额的最小硬币个数
        for(let j = 0; j<coins.length; j++){ // 硬币能用
            if(i - coins[j] >= 0){
                f[i] = Math.min(f[i], f[i - coins[j]] + 1)
            }
        }
    }
    return f[amount] === Infinity ? -1 : f[amount]
    
};
console.log(coinChange(coins, amount))