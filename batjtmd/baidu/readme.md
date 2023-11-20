# 百度编程能力

- 文章
    看热榜,学主题
    费曼学习法 教别人学习 讲到尽可能小白能听懂

- 计算机网络
  openai 网络请求 怎么搞?
    openai 请求过程的图形化介绍(postman)
  postman http请求制造工具 模拟请求
    代码层  openai.Completion.create() 在项目服务器(不具备大模型能力)中运行  本地是用来调试的
    LLM large language model 大模型 运行在openai的服务器集群中
    物理层要用https协议(web基础) 互联网超文本传输协议(总共7层)  底层有个ip地址  层次不一样
    联网是远程的GPC调用
    http请求,比特流,请求的方法
    get,最不安全,最快  post,登录,可以看到用户名密码 

    HTTP 状态码 Status Code
    1xx  请求还在进行中
    2xx  成功
    3xx  跳转
    4xx  客户端错误
        400 Bad Request 客户犯了错误,导致请求失败
        401 Unauthorized 用户未授权 
    5xx  服务器错误
    http 基于请求相应的简单协议
        请求行 POST + url  短小
        头部 key val的方式  Authorization=api-key
        请求体

    model davince 请求者的错误  