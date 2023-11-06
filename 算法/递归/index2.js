// 斐波那契数列：前两位相加等于后一位
// 1 1 2 3 5 8 13 21 
// 求第几位的斐波那契的值
// 有时候很简单，有时候很难，难在找规律
function fb(n){

    if(n == 1 || n ==2){
        return 1
    }
    return fb(n - 1) + fb(n - 2)

}
console.log(fb(5));