# 介绍下你的项目难点
- 搜索组件
   - tailwindcss
      - 原子化css 
      - 单位为 0.25rem 
         h-0.25rem px 这里但数值要算下 1代表3.5px

- components
   不放页面级别的组件
   - 一般业务组件
   - common
      - 通用组件 
   - layout 布局组件

- 项目亮点
   - 在搜索的时候使用了防抖，做了性能优化，使用了lodash js的业务框架

- 简历
   - pdf
      简历内容其实大差不大，所以格式很重要，开个金山会员
   - 不要有错别字
   
- 搜索功能介绍
   - 搜索功能用到了以下技术栈：vue全家桶+ts  pinia  项目结构清晰合理
   - 使用Element-Plus 提供的El-Popover, ElInput 实现了搜索热点，搜索结果的展示
   - 使用了lodish 实现防抖，完成搜索性能优化
   - 歌曲播放数，使用了扩展Number原型链的方式优化展示
   - 充分的数据流设计，将应用开发分为 UI 组件 + store 

- 给面试官介绍pinia使用
   - 数据驱动界面
   - 选用pinia更简单，更hooks化
   - 基于dev-tools 页面状态和数据状态的统一  就是vue
   - 搜索模块数据流的专门设计
      - state showSearchView searchKeyWord 
      - getters 算出showHot
      - actions suggest

- 请介绍一个你设计的比较复杂的组件
   - 搜索组件
   - 状态复杂
      除了keyword searchResult外
         我还打理了showPopView hotList
   - 引入pinia 数据管理并 提前设计 这个数据流
   - suggest 组件 细节 很ok
      searchPopover
         ElPopOver
            ElInput slot

   - 还使用了ts models 定义了interface 
