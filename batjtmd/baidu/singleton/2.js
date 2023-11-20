class Singleton {
    // show属于对象
    show() {
        console.log('我是一个单例对象');
    }
    // 不要直接new
    // getInstance属于类
    static getInstance() {
        // console.log('静态方法')
        if(!Singleton.instance){
            Singleton.instance = new Singleton()
        }
        return Singleton.instance
    }
}

const s1 = Singleton.getInstance()
const s2 = Singleton.getInstance()
console.log(s1 === s2)