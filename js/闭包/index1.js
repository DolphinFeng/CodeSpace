var arr = []
// 改成let 就是0123.9。let与{}形成块级，10个块级作用域，每个都有一个i，0到9 arr函数的outer就在各个块级作用域。
// var全为10是因为 循环10遍的时候，arr仅仅是存放了10个函数，没有执行里面的log,i一直都是在全局作用域中，最后i=9后再一个i++，最后i=10，到了执行函数的时候，其outer指向全局。都是打印i,而i=10，所以这样子
// for(var i = 0; i <10; i++) {
//     arr[i] = function() {
//         console.log(i);
//     }
// }

// for(var j = 0; j < arr.length; j++){
//     arr[j]()
// }


// 让答案为0到9的另一个方法就是闭包 面试题：
for(var i = 0; i < 10; i++){
    (function a(j){
        arr[i] = function(){
            console.log(j);
        }
    })(i)
}

for(var k = 0; k < arr.length; k++){
    arr[k]()
}

// 第三种解法：定时器，太取巧了，后面再讲