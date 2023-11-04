# 腾讯日 day1
主题： 腾讯的一道面试题 看代码新手的编程素养和js功底
看到题目先写注释，而不是先完成功能


- 代码的可读性高于一切 所以要写注释 以及换行
- 优化代码
    统一es6风格

1.  JS面试题
     codewars
     刷题网站
     一般都是写一个函数，完成某项功能
     第一题：字符串拼接 

2. 全新 es6 语法

3. 智商游戏
     换一种写法，能否写出更牛逼的方式 3.js
     闯将进来 考验你的抗压能力

## WeUI button组件
从任务看到本职
- ul > ui
- 按钮组件 WEUI 源码
     60%的界面工作是不需要做的，由UI框架提供通用组件
     40% 业务结合代码
- 抽象  文章：BEM 命名规范
     - 共性
          button 共性 取同一个类型 .btn 基础类（基类）  如果是腾讯，那就是.weui-btn  大项目一般都是： 项目代号-组件名
     - 差异
          .weui-btn_primary 
          .weui-btn_danger
          .weui-btn_info   






# 跨境电商 day2

- 调研市场，小孩玩具  义乌
- translate AI 代码
- 商品定价 GPT来定价（经济学家）
- 写文案 用GPT 需要prompt engineer 

aigc 前端工程师初体验

- AI应用
     - 基于大模型
          OPENAI的达芬奇 他擅长文本处理
     - 花销
          tokens 算力  tokens.length 算力是要钱的
          API_KEY
     - 我们要搞定prompt + openai 接口调用
     - 返回JSON 然后继续业务

- 提示词工程 + openai sdk + langchain + vue     可以看吴恩达提示词工程课

# 企业级界面开发规则   css面试

- html css js 功能分离
- css架构
     - reset.css 重置样式：不同的浏览器不一样
          去除浏览器间的样式区别，无差别页面显示
          box-sizing: 盒子大小计算方式
          浏览器好多家 edge chrome 不同的浏览器不同在于内核不同，标准不同，所以要进行重置
          文档流 body开始   文档流：块级元素从上到下，行内元素从左到右
          盒子在页面上占了多少呢（难）
          标准盒子模型 = content（内容） + padding（填充） + border（内边距） + margin(边框)  很多浏览器都是这样的，chrome为例
          例如买房子：公摊 标准盒子是有公摊的
          IE盒模型 = content(自动缩放) + padding + border + margin
     - base.css 通用样式
- css命名套路
     - page Block
          __hd头 __bd中间 __ft脚
     - btn panel cell 研究这几个源码
     - 框架组件 遵循BEM
- css   + 是兄弟选择器
- Google 图片格式是base64   可以替代小一点简单的，小图标， 如果用png就会比较大，是一个单独的文件 有：jpg|png|jpeg|wtt|  webp(相比前面的优化30%左右)  这些比较大，单独的文件，需要一个线程去下载，图片越多线程越多，会排队，很慢，请求的并发    base64直接写在css文件里