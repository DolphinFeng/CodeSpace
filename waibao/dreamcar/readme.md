# 小程序业务架构

- App和Page的概念
  App负责全局 是page共享的  app.js共享globalData app.wxss共享样式 app.json是应用的配置
- globalData 如何 来到page中
  - const app = getApp()
    拿到应用对象
  data 初始化一个数据的占位符
  {
    data: {
      user: {} // 开始是空的
    }
  }
  - 生命周期（因为模板）
    数据来自于后端接口
    onLoad wxml + wxss 页面显示时触发onload
    这是请求数据的最佳时机
  - this.setData({
      user: 真正的值
  })
  - 页面会热更新 重新绘制{{}}这部分

  - 循环输出的概念
    - 模板在{{直出}}，数组列表输出的常态
    - block 负责只承载指令 这里就是wx: for 但他不会出现在文档流中
    - item 循环的每一项都叫item item.image

  - css 架构思路
  Dry 原则 Don't repeat yourself!
  css 业务拆分 一个元素多个类名
  section hero white 这样好去复用，好去模块化
    - app.wxss 全局样式
      - 公用的样式
      - 模块化（架构思想的核心）
    - page.wxss 页面业务样式
    - 关于css，页面中比较独立的模块，独立css文件
    - 通用组件也可以
      button card 都是组件
    - 通用的业务也可以
      .hero>.content>.header+.sub_header...
      维护花的时间更多，甚至不可维护
- 开发简单来说就是
  - 准备好数据
  - 写页面
