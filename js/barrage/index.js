// 这个代码很难写，一般高级程序员才会这样写
// window.onload = function(){

// }
// 因为已经写在下面了，这个代码就多余了不用写

// 面向对象编程，没写完看不到效果（思路要很清晰，我希望有个什么东西能做什么事情）


// 用户都是发弹幕，一个体系，用到构造函数，new一下 ，批量生产

// 1.读取用户内容  2.把内容颜色大小放到画布上，绘制


// 历史弹幕,数组（里面放对象）还要接受新的弹幕，到了时间就绘制，要递归
// 这里就不做弹幕速度
let data = [
    { value: 'By order of the peaky bliears', color: 'red', fontSize: 22, time: 5 },
    { value: 'No Fucking Fighting', color: 'green', fontSize: 30, time: 10},
    { value: 'Fucking Shelby', color: 'black', fontSize: 22, time: 22}
]

// 整理弹幕数据，弹幕的y，历史弹幕问题 形参跟外面的一样没毛病，辨识度更高，代码太多了abc是啥都不知道，都可以 ，形参可以默认值，万一没有传值呢
function CanvasBarrage(canvas, video, opts = {}){
    // 代码不换行时可以省略花括号
    if(!canvas || !video) return 
    // 多一个属性不用没关系
    this.video = video
    // 左边是形参，右边是有效标识符
    this.canvas = canvas
    // 伪代码 canvas 宽高 和 video宽高保持一致
    // canvas.width = style.width style读取宽高，js设置宽高
    this.canvas.width = video.width
    this.canvas.height = video.height
    // 获取画布
    this.ctx = canvas.getContext("2d")
    // 初始化代码
    // 没有认为修改弹幕的设置，默认值
    let defOpts = {
        color: '#e91e63',
        fontSize: 20,
        speed: 1.5,
        // 透明度
        opacity: 0.5,
        // 空数组
        data: []
        //value和time不需要默认值，没输入发送啥
    }
    Object.assign(this, defOpts, opts)
    // 合并对象，全部丢在实例对象中

    // 视频播放，弹幕才会进行绘制
    this.isPaused = true
    // 默认暂停

    // 获取到所有的弹幕  map（返回一个新的数组）里面是箭头函数(把item交给一个新的箭头函数) map循环了，每个弹幕都被修饰了一下
    this.barrages = this.data.map((item) => new Barrage(item, this))

    // 之后对所有的弹幕进行渲染，也就是移动弹幕
    // 调用这个函数，写在原型上或者构造函数里面
    this.render()
}

Barrage.prototype.init = function(){
    // 左边是自己新建的右边是传进来的,如果第一个是没有的，就是给出的默认的颜色
    this.color = this.obj.color || this.context.color
    // 下面两个都是选择后者
    this.speed = this.obj.speed || this.context.speed
    this.opacity = this.obj.opacity || this.context.opacity

    this.fontSize = this.obj.fontSize || this.context.fontSize

    // 要知道弹幕的宽度，才能让他除去，我们获取不了文字的长度，但是可以放在div中，看他撑开了多少、
    let p = document.createElement('p')
    // 让字体大小等于设置的大小
    p.style.fontSize = this.fontSize + 'px'
    p.innerHTML = this.value 
    document.body.appendChild(p)

    
    // 右边是获取这个容器的宽度
    this.width = p.offsetWidth
    // 放完之后要删掉
    document.body.removeChild(p)

    // 设置弹幕的位置
    this.x = this.context.canvas.width
    // y的高度是随机值
    this.y = this.context.canvas.height * Math.random()
    // 弹幕可能上下方超出边界
    if(this.y < this.fontSize){
        this.y = this.fontSize
    }else if(this.y > this.context.canvas.height - this.fontSize){
        this.y = this.context.canvas.height - this.fontSize
    }


}

// Barrage 修饰一条弹幕 为箭头函数那里服务 (实例对象，this对象)
function Barrage(obj, context){
    // console.log(context)
    // 新弹幕的内容
    this.value = obj.value
    this.time = obj.time
    // 挂在构造函数中后面更方便
    this.obj = obj 
    this.context = context
}

// 构造函数的魅力，都可以拿到实例对象
CanvasBarrage.prototype.clear = function(){
    // clearRect是自带api
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
}


// 将这条弹幕会绘制在画布上
Barrage.prototype.renderEach = function(){
    // canvas绘制过程
    // 设置画布的文字字体，字号
    // 设置画布的文字颜色
    // 绘制颜色
    this.context.ctx.font = `${this.fontSize}px Arial`
    this.context.ctx.fillStyle = this.color 
    this.context.ctx.fillText(this.value, this.x, this.y)
}

// 将弹幕绘制到画布上
CanvasBarrage.prototype.renderBarrages = function(){
    // 伪代码 拿到视频播放的当前时间，根据时间绘制
    let time = this.video.currentTime
    // 遍历所有的弹幕
    this.barrages.forEach(function(barrage){
        
        // 出屏之外之后就不用再操作了
        if(time >= barrage.time && !barrage.flag){
            // 这属性没有就是false 这个操作就是为了防止放过了的弹幕不需要初始化
            if(!barrage.isInit){
                barrage.init()
                barrage.isInit = true
            }
            // 控制弹幕左移，出了画布之外还在移动？
            barrage.x -= barrage.speed
            // rednerEach相当于ctx.fillstyle
            barrage.renderEach()
            // 弹幕是有长度的，如果大于屏幕之外?

            if(barrage.x < -barrage.width){
                barrage.flag = true
            }
        }
    })
}

// 这里就是render ，把弹幕弄到画布中
CanvasBarrage.prototype.render = function(){
    // 清除画布，习惯问题
    this.clear()
    // 要先绘制才能操作画笔，并且要向左移动
    this.renderBarrages()
    // 希望这个clear可以清楚画布
    // 播放状态才能移动
    if(!this.isPaused){
        // setInterval这里不用，下面定时器的更高级，16.7ms（内定时间）之后就执行一次，递归之后就是一直循环下去，

        requestAnimationFrame(this.render.bind(this))
        // bind(this)以后再讲
    }
}

// 添加新的弹幕
CanvasBarrage.prototype.add = function(obj){
    // barrages是终极数组，data修饰之后的
    // this.barrages16.7ms之后也会重修渲染一次
    this.barrages.push(new Barrage(obj,this))
}

// 传的参数是canvas和video dom结构 opts是一个对象含value color time fontSize   这个会替代掉,合并对象，相同的覆盖，不同的加进去
// let canvas = document.getElementById('canvas')
// new CanvasBarrage(canvas, video, opts)

// 发送弹幕
let canvas = document.getElementById('canvas')
// video是因为知道此时视频多少秒
let video = document.getElementById('video')
// $没有意义，区分罢了
let $text = document.getElementById('text')
let $btn = document.getElementById('btn')
let $color = document.getElementById('color')
let $range = document.getElementById('range')

// 整理弹幕的实例对象
// 对象里key和value可以直接由{data: data}变成{data}
let canvasBarrage = new CanvasBarrage(canvas, video, {data})
// play是播放，处理所有弹幕实例对象
video.addEventListener('play',function(){
    canvasBarrage.isPaused = false
    // 处理每一条弹幕,canvasBarrage相当于一个管家
    canvasBarrage.render()
})

// 发布订阅 很难



function send(){
    // 读取文本内容
    let value = $text.value
    // video 自带一个属性读取时间
    // 代码名字需要头封，第二个开始大写
    let time = video.currentTime
    let color = $color.value
    let fontSize = $range.value
    // 把上面的内容整理成一个对象，交给函数去操作
    let obj = {
        // 左边是key
        value: value,
        color: color,
        fontSize: fontSize,
        time: time

    }
    // 多么希望add可以把obj放进去，接收新的弹幕，处理弹幕再走一遍send
    canvasBarrage.add(obj)
    // console.log(obj)
    // 添加弹幕数据

}


// function a(){
//     var num = 123
//     b()
// }

// function b(){
//     console.log(num)
// }

// a() 肯定是不行的
// 监听发送按钮
// $btn.onclick = function(){
//     console.log();
// }
// 这两种写法有区别，js事件流中，简单来看没有区别
// enter或者点击发送都可以发送
$btn.addEventListener('click', send)
// 这个写法函数不用小括号
// keyup键盘弹起的时候
$text.addEventListener('keyup',function(e){
    // 所有的事件都有对应的参数
    // 可以看到keycode
    console.log(e);
    if(e.keycode === 13){
        send()
    }
    
})