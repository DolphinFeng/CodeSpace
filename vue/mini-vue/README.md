ref & reactive 话题在春招之前很热门
vue的源码是用ts写的，设计很多设计模式，这里用js解释，js和ts差别不大

# reactive源码 响应式原理
只能将引用类型代理成响应式
为何只能支持对象，
因为这个源码是用proxy写的，es6的proxy仅支持对象

Object身上太多方法了，后面还想增加，但是为了优雅，打造了个reflect这个对象，就相当于Object的秘书，es6之后想给Object增加的方法都放到了reflect身上了 如今es13了  所以reflect等同于Object的使用

还修改了Object一些自身的方法，原写法可能使用不当会报错，但是reflect返回false, defineProperty，不会出现程序性的错误

proxy代理了对象的13行为，reflect也有13个静态方法，reflect是为了配合proxy的使用

被代理对象中的任意属性 发生修改，都应该用到了这个属性的各个函数重新执行一遍，所以在此之前

手把手剖析