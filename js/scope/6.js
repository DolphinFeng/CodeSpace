function foo(){
    
    console.log(a)
    var a  = 2//编译的时候不会赋值，运行才会赋值 但是先运行console.log语句 所以undefined 但按道理应该是报错的  所以有了let 声明提升

}

foo()