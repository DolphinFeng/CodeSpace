// class 是es6提出 
// 类是一个抽象概念 不同的内存空间
class Singleton {
    show() {
        console.log('我是一个单例对象');
    }
}

const s1 = new Singleton()
const s2 = new Singleton()
console.log(s1 === s2) 
// false
