var b = 1

function foo(a , b){//这里的参数是形参
    console.log(a + b)//2 + undefined 找不到
}

foo(2)//这里的参数是实参  实参传到形参

//NaN 代表没有值，是number类型

// [] == []  返回false
// [] == ![] 返回true