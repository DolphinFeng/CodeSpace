介绍：promise面试热点：promise 100%问到
也是每天都会用的方法
要先清楚异步
# 异步（js一座大山）
为了js执行效率更高（反义词同步执行，对于代码来说，同步是按顺序从上往下走，顺势而为，同步原来的顺序，这个意思，异步才是同时干多个事情）
并发：同一时间干多件事情，tb双十一并发上亿了，后端代码都写在服务器上，点击购买的时候请求到服务器端，服务器就需要同时处理上亿的并发量
阿里程序员一说到双十一，头会大，要通宵上班，服务器容易崩，所以要加班
新浪，历史上两次崩塌：鹿晗官宣，冯绍峰结婚，服务器崩塌，


# 回调 （是个解决异步的方案，但是不优雅）
回调地狱---（并没有内存泄漏，闭包才是内存泄漏）（代码维护会非常困难）用来描述回调写法太糟糕了，嵌套几百个咋办？并且一个崩全崩，跟串联一样，a调b,b调c,c被改了，
排查问题，代码维护会非常困难！
代码为何要维护？tb之前没有直播，这几年有了，
新人进来了，得看原有代码，原有代码如果写成回调，动一行就全崩，

# promise
all --- 必须接收到的所有的promise状态都为resolve，then才会调用
promise考的很难，不是用，是让你打造那些方法，至少要讲三次
阮一峰老师介绍的看的很困难