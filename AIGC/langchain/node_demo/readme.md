## JS 和 AIGC
- 简历有所表现
    - AIGC
    了解 OpenAI 相关接口 和 LLM 的应用，在接触 langchain AI应用框架
    - langchain js 版本 langchain是llm开发框架
    - node 工程 koa
        可以再起一个端口专门负责 AI 功能
        所以另起一个文件夹作AI，client server AI
        koa负责启动http server 、 koa/router(后端路由先出现，一个地址对应一个请求)、前端是mvvm模式，后端是mvc
        有什么协议会主动发请求给用户: websocket 比如QQ通信，网站是单向的，服务器不能单向发给客户端，这样可以尽量确保服务更多的人，
        http://localhost:1314/ai/get_word