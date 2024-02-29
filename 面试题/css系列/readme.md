面试如果问到css就是白给

面试官问的问题一般都很宽泛。
一般面试官问你对什么东西的理解。套路：是什么，特征，原理，用法
css太简单了，一般不会问很多，大概率就从下面这里抽

# 请你说说你对css盒模型的理解  1.html
1. 是什么？
    css盒模型，用于描述在浏览器当中渲染引擎计算一个文档的布局时，将所有的元素表示成一个个矩形的盒子。
    一个盒子包含四个部分：内部content(宽 + 高) + 内边框padding + 边框border + 外边距margin
2. 标准盒模型
    谷歌浏览器就是默认标准盒模型 总宽度：width + padding + border + margin // 该多少就多少 
3. 怪异盒模型 / IE盒模型    // box-sizing: border-box   防止撑大
    IE盒模型 总宽度：width + margin // 内边距和边框都会属于width 会缩小content的宽度
    当年微软觉得ie合理，所以ie就是认为，border margin都算上了宽度里面

# css中的选择器有哪些？说说优先级 2.html
1. id选择器
2. 类名选择器
3. 后代选择器
4. 子级选择器
5. 相邻兄弟选择器
6. 群组选择器

7. 属性选择器 
8. 伪元素选择器
9. 伪类选择器 
优先级：
important > 内联(写在body中) > id > 类名 > 标签

# 说说css中的单位有哪些
1. px : 像素单位 ，屏幕上的发光点
2. rem : 相对单位， 相当于根字体大小
3. em : 相对单位，用于字体上会继承父容器的字体大小，用在它处，是相对于当前容器自己的字体大小来定的
4. vw / vh : 相对单位，相对于窗口宽高比
5. % : 相对单位，相对于父容器

# 说说设备像素，css像素，设备独立像素，dpr, dpi之间的区别
1. pc端 1px = 1个物理像素
2. 页面缩放比为1:1 时，1px == 1个物理像素  // 手机两倍屏 1px == 0.5物理发光点  一个设备独立像素 == 两个物理像素

设备像素 ==  物理像素
css像素 == 1px
设备独立像素 == 分辨率
dpr(设备像素比) === 设备像素 / 设备独立像素  iphone6是两倍屏手机 就是 宽度 ： 750 / 375 = 2 等于就是高清屏，3是超高清屏
dpi(像素密度)

# 关于css中，有哪些方式可以隐藏页面的元素，区别是什么 5.html
1. display: none   // 脱离文档流  无响应事件  页面需要回流重绘
2. visibility: hidden  // 占据文档流 无响应事件 不会触发回流
3. opacity: 0  // 透明度  占据文档流 可响应事件 不会触发回流 但是如果用的是动画来做的话，不发生重绘。
4. position: absolute  // 之后让他飞出屏幕之外，或者z-index 脱离文档流了，就不会响应事件  回流重绘
5. clip-path: polygon(0 0, 0 0, 0 0, 0 0) clip是裁剪的意思  clip-path: circle(0%)  占据文档流，无法响应事件  重绘

# 谈谈你对BFC的理解
- 是什么
    块级格式化上下文，是页面中一个渲染区域，有一套属于自己的渲染规则

- 渲染规则

# 水平垂直居中的方式有哪些？  // 高频
1. position : absolute + translate || margin 负值(已知宽高才能用)
2. display: flex: justify-content: center; align-items: center
3. display: grid: justify-content: center; align-items: center
4. display: table-cell: display: inline-block; text-align: center; 非会计元素的水平居中
5. margin(已知宽高) // 最low的方法，屏幕会变更
   line-height仅能设置文本的垂直居中
   marigin: 0 auto仅能设置块级的水平居中  之后设置垂直就弄不了

# 三栏布局怎么实现 8.html
- 两栏布局：一边不动，另一边自适应
1. flex  一个给固定宽度，另一个给flex: 1
2. grid
3. float + margin-left
三栏布局：满足左右两边固定不动，中间自适应 ：比如vant
1. flex
2. grid
3. 左右先加载 内容后加载 float + margin 
4. 圣杯布局：float + margin负值 + position: relative
5. 双飞翼布局: 

# 说说flexbox 
// 弹性容器很容易被字节面到 
- 是什么
    是一种布局方式，可以简便完整响应式的实现页面布局，容器中默认存在两条轴，主轴和交叉轴，默认x轴为主轴，可以用flex-direction来修改主轴的方向
- 特征

- 应用场景

# css3中常见的动画有哪些？怎么实现？

# 说说回流重绘

# 什么是响应式

# 视差